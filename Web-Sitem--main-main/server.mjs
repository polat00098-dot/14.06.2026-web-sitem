import express from 'express';
import crypto from 'crypto';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_FILE = join(__dirname, 'data', 'siteData.json');
const SESSION_COOKIE = 'ex_admin_session';
const SESSION_TTL_MS = 12 * 60 * 60 * 1000;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'S4rmam21';
const ALLOWED_ORIGINS = new Set([
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  process.env.SITE_ORIGIN,
].filter(Boolean));
const sessions = new Map();

// Klasör yoksa oluştur
const dataDir = join(__dirname, 'data');
if (!existsSync(dataDir)) mkdirSync(dataDir);
if (!existsSync(DATA_FILE)) {
  writeFileSync(DATA_FILE, JSON.stringify({ partners: [], blogs: [], logo: '', heroBg: '', aboutImg: '' }, null, 2));
}

const app = express();
app.disable('x-powered-by');
app.use(express.json({ limit: '10mb' }));

const defaultData = () => ({ partners: [], blogs: [], services: [], logo: '', heroBg: '', aboutImg: '' });

const parseCookies = (cookieHeader = '') => {
  return cookieHeader.split(';').reduce((acc, part) => {
    const [rawKey, ...rawValue] = part.trim().split('=');
    if (!rawKey) return acc;
    acc[rawKey] = decodeURIComponent(rawValue.join('='));
    return acc;
  }, {});
};

const getClientKey = (req) => {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string' && forwarded.length > 0) {
    return forwarded.split(',')[0].trim();
  }
  return req.socket.remoteAddress || 'unknown';
};

const createRateLimiter = ({ windowMs, maxRequests }) => {
  const hits = new Map();

  return (req, res, next) => {
    const now = Date.now();
    const key = `${req.path}:${getClientKey(req)}`;
    const bucket = hits.get(key) || [];
    const recentHits = bucket.filter((time) => now - time < windowMs);

    if (recentHits.length >= maxRequests) {
      res.status(429).json({ ok: false, error: 'Çok fazla istek gönderildi. Lütfen daha sonra tekrar deneyin.' });
      return;
    }

    recentHits.push(now);
    hits.set(key, recentHits);
    next();
  };
};

const limitString = (value, maxLength = 2000) => {
  if (typeof value !== 'string') return '';
  return value.slice(0, maxLength);
};

const sanitizeImage = (value) => {
  if (typeof value !== 'string') return '';
  return value.slice(0, 5_000_000);
};

const sanitizePartners = (value) => {
  if (!Array.isArray(value)) return [];
  return value.slice(0, 100).map((item, index) => ({
    id: limitString(item?.id || `partner-${index + 1}`, 80),
    name: limitString(item?.name, 160),
    category: limitString(item?.category, 160),
    logo: sanitizeImage(item?.logo),
  }));
};

const sanitizeBlogs = (value) => {
  if (!Array.isArray(value)) return [];
  return value.slice(0, 200).map((item, index) => ({
    id: limitString(item?.id || `blog-${index + 1}`, 80),
    category: limitString(item?.category, 120),
    date: limitString(item?.date, 80),
    readTime: limitString(item?.readTime, 80),
    title: limitString(item?.title, 200),
    desc: limitString(item?.desc, 1000),
    img: sanitizeImage(item?.img),
    content: limitString(item?.content, 50_000),
  }));
};

const sanitizeServices = (value) => {
  if (!Array.isArray(value)) return [];
  return value.slice(0, 100).map((item, index) => ({
    id: limitString(item?.id || String(index + 1).padStart(2, '0'), 20),
    title: limitString(item?.title, 200),
    header: limitString(item?.header, 200),
    desc: limitString(item?.desc, 1000),
    secondaryDesc: limitString(item?.secondaryDesc, 4000),
    icon: limitString(item?.icon, 60),
    bullets: Array.isArray(item?.bullets) ? item.bullets.slice(0, 20).map((bullet) => limitString(bullet, 240)) : [],
    image: sanitizeImage(item?.image),
    blogContent: limitString(item?.blogContent, 50_000),
  }));
};

const sanitizePatch = (body) => {
  if (!body || typeof body !== 'object' || Array.isArray(body)) return null;

  const patch = {};

  if ('partners' in body) patch.partners = sanitizePartners(body.partners);
  if ('blogs' in body) patch.blogs = sanitizeBlogs(body.blogs);
  if ('services' in body) patch.services = sanitizeServices(body.services);
  if ('logo' in body) patch.logo = sanitizeImage(body.logo);
  if ('heroBg' in body) patch.heroBg = sanitizeImage(body.heroBg);
  if ('aboutImg' in body) patch.aboutImg = sanitizeImage(body.aboutImg);

  return Object.keys(patch).length > 0 ? patch : null;
};

const readSiteData = () => {
  try {
    const data = JSON.parse(readFileSync(DATA_FILE, 'utf-8'));
    return { ...defaultData(), ...data };
  } catch {
    return defaultData();
  }
};

const writeSiteData = (data) => {
  writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
};

const setSessionCookie = (res, token) => {
  const secure = process.env.NODE_ENV === 'production';
  res.setHeader('Set-Cookie', `${SESSION_COOKIE}=${encodeURIComponent(token)}; HttpOnly; Path=/; Max-Age=${Math.floor(SESSION_TTL_MS / 1000)}; SameSite=Lax${secure ? '; Secure' : ''}`);
};

const clearSessionCookie = (res) => {
  const secure = process.env.NODE_ENV === 'production';
  res.setHeader('Set-Cookie', `${SESSION_COOKIE}=; HttpOnly; Path=/; Max-Age=0; SameSite=Lax${secure ? '; Secure' : ''}`);
};

const requireAdminAuth = (req, res, next) => {
  const cookies = parseCookies(req.headers.cookie);
  const token = cookies[SESSION_COOKIE];

  if (!token) {
    res.status(401).json({ ok: false, error: 'Yetkisiz erişim.' });
    return;
  }

  const session = sessions.get(token);
  if (!session || session.expiresAt < Date.now()) {
    sessions.delete(token);
    clearSessionCookie(res);
    res.status(401).json({ ok: false, error: 'Oturum süresi doldu.' });
    return;
  }

  session.expiresAt = Date.now() + SESSION_TTL_MS;
  sessions.set(token, session);
  setSessionCookie(res, token);
  next();
};

const loginLimiter = createRateLimiter({ windowMs: 15 * 60 * 1000, maxRequests: 5 });
const writeLimiter = createRateLimiter({ windowMs: 60 * 1000, maxRequests: 30 });

// CORS - Vite dev server ile çalışması için
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (origin && ALLOWED_ORIGINS.has(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', 'true');
  }
  res.header('Vary', 'Origin');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('X-Content-Type-Options', 'nosniff');
  res.header('X-Frame-Options', 'DENY');
  res.header('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.header('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  res.header('Cross-Origin-Opener-Policy', 'same-origin');
  res.header('Cross-Origin-Resource-Policy', 'same-site');
  res.header('Content-Security-Policy', "default-src 'self'; img-src 'self' data: https:; style-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.tailwindcss.com; connect-src 'self' http://localhost:4000 http://localhost:3000 ws://localhost:3000 https:; font-src 'self' https: data:; frame-ancestors 'none'; base-uri 'self'; form-action 'self'");
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});

app.post('/api/admin/login', loginLimiter, (req, res) => {
  const suppliedPassword = typeof req.body?.password === 'string' ? req.body.password : '';
  const suppliedBuffer = Buffer.from(suppliedPassword);
  const expectedBuffer = Buffer.from(ADMIN_PASSWORD);

  if (suppliedBuffer.length !== expectedBuffer.length || !crypto.timingSafeEqual(suppliedBuffer, expectedBuffer)) {
    res.status(401).json({ ok: false, error: 'Hatalı şifre.' });
    return;
  }

  const token = crypto.randomBytes(32).toString('hex');
  sessions.set(token, { expiresAt: Date.now() + SESSION_TTL_MS });
  setSessionCookie(res, token);
  res.json({ ok: true });
});

app.get('/api/admin/session', (req, res) => {
  const cookies = parseCookies(req.headers.cookie);
  const token = cookies[SESSION_COOKIE];
  const session = token ? sessions.get(token) : null;

  if (!session || session.expiresAt < Date.now()) {
    if (token) sessions.delete(token);
    clearSessionCookie(res);
    res.status(401).json({ authenticated: false });
    return;
  }

  res.json({ authenticated: true });
});

app.post('/api/admin/logout', (req, res) => {
  const cookies = parseCookies(req.headers.cookie);
  const token = cookies[SESSION_COOKIE];
  if (token) sessions.delete(token);
  clearSessionCookie(res);
  res.json({ ok: true });
});

// Tüm veriyi oku
app.get('/api/data', (req, res) => {
  res.json(readSiteData());
});

// Tüm veriyi kaydet (kod dosyasına yazar)
app.post('/api/data', writeLimiter, requireAdminAuth, (req, res) => {
  try {
    const patch = sanitizePatch(req.body);
    if (!patch) {
      res.status(400).json({ ok: false, error: 'Geçersiz veri gönderildi.' });
      return;
    }

    const current = readSiteData();
    const updated = { ...current, ...patch };
    writeSiteData(updated);
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ ok: false, error: String(err) });
  }
});

app.listen(4000, () => {
  console.log('✅ API sunucusu hazır → http://localhost:4000');
});
