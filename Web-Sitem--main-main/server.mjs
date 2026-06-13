import express from 'express';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_FILE = join(__dirname, 'data', 'siteData.json');

// Klasör yoksa oluştur
const dataDir = join(__dirname, 'data');
if (!existsSync(dataDir)) mkdirSync(dataDir);
if (!existsSync(DATA_FILE)) {
  writeFileSync(DATA_FILE, JSON.stringify({ partners: [], blogs: [], logo: '', heroBg: '', aboutImg: '' }, null, 2));
}

const app = express();
app.use(express.json({ limit: '50mb' }));

// CORS - Vite dev server ile çalışması için
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});

// Tüm veriyi oku
app.get('/api/data', (req, res) => {
  try {
    const data = JSON.parse(readFileSync(DATA_FILE, 'utf-8'));
    res.json(data);
  } catch {
    res.json({ partners: [], blogs: [], logo: '', heroBg: '', aboutImg: '' });
  }
});

// Tüm veriyi kaydet (kod dosyasına yazar)
app.post('/api/data', (req, res) => {
  try {
    const current = JSON.parse(readFileSync(DATA_FILE, 'utf-8'));
    const updated = { ...current, ...req.body };
    writeFileSync(DATA_FILE, JSON.stringify(updated, null, 2), 'utf-8');
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ ok: false, error: String(err) });
  }
});

app.listen(4000, () => {
  console.log('✅ API sunucusu hazır → http://localhost:4000');
});
