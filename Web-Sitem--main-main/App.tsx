
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Blog from './pages/Blog';
import Technologies from './pages/Technologies';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';

const DEFAULT_KEYWORDS =
  'exproof ekipmanların periyodik kontrolü, ex ekipman periyodik kontrolü, exproof ekipman bakım eğitimi, ex ekipman eğitimi, PKD, patlamadan korunma dokümanı, ATEX bilgilendirme eğitimi, ex ekipman danışmanlığı, ATEX, exproof';

const SEO_BY_PATH: Record<string, { title: string; description: string; keywords?: string }> = {
  '/': {
    title: 'EX Dönüşüm Mühendislik | ATEX ve Exproof Mühendislik Çözümleri',
    description:
      'Exproof ekipmanların periyodik kontrolü, Ex ekipman eğitimi, PKD hazırlama, ATEX bilgilendirme eğitimi ve Ex ekipman danışmanlığı hizmetleri sunuyoruz.',
  },
  '/hizmetlerimiz': {
    title: 'Hizmetlerimiz | Exproof Periyodik Kontrol, PKD ve ATEX Eğitimi',
    description:
      'Ex ekipman periyodik kontrolü, Exproof ekipman bakım eğitimi, Ex ekipman eğitimi, PKD (Patlamadan Korunma Dokümanı), ATEX bilgilendirme eğitimi ve Ex ekipman danışmanlığı hizmetleri.',
  },
  '/blog': {
    title: 'Blog | ATEX ve Exproof Teknik İçerikler',
    description:
      'ATEX, Exproof, periyodik kontrol, PKD ve Ex ekipman güvenliği hakkında teknik blog yazıları ve saha odaklı içerikler.',
  },
  '/teknolojiler': {
    title: 'Kullandığımız Teknolojiler | Ex Product Management',
    description:
      'Ex Product Management uygulamamız ile Exproof ekipmanların periyodik kontrolü sonrasında rapor taslağını hızlıca oluşturup firmalara teslim süresini kısaltıyoruz.',
  },
  '/iletisim': {
    title: 'İletişim | EX Dönüşüm Mühendislik',
    description:
      'Exproof ekipmanların periyodik kontrolü, PKD, ATEX bilgilendirme eğitimi ve Ex ekipman danışmanlığı için bizimle iletişime geçin.',
  },
  '/hakkimizda': {
    title: 'Hakkımızda | EX Dönüşüm Mühendislik',
    description:
      'ATEX ve Exproof alanında uzman mühendis kadromuzla periyodik kontrol, eğitim, dokümantasyon ve danışmanlık hizmetleri sunuyoruz.',
  },
};

const upsertMetaTag = (selector: string, attrs: Record<string, string>) => {
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([key, value]) => el!.setAttribute(key, value));
};

const upsertCanonical = (href: string) => {
  let el = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const SeoManager = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    const isServiceDetail = pathname.startsWith('/hizmetlerimiz/');
    const seo = isServiceDetail
      ? {
          title: 'Hizmet Detayı | Exproof Periyodik Kontrol ve Ex Ekipman Danışmanlığı',
          description:
            'Exproof ekipmanların periyodik kontrolü, Ex ekipman eğitimi, ATEX bilgilendirme eğitimi ve Ex ekipman danışmanlığı hizmet detayları.',
        }
      : SEO_BY_PATH[pathname] || SEO_BY_PATH['/'];

    document.title = seo.title;

    upsertMetaTag('meta[name="description"]', { name: 'description', content: seo.description });
    upsertMetaTag('meta[name="keywords"]', { name: 'keywords', content: seo.keywords || DEFAULT_KEYWORDS });
    upsertMetaTag('meta[property="og:title"]', { property: 'og:title', content: seo.title });
    upsertMetaTag('meta[property="og:description"]', { property: 'og:description', content: seo.description });
    upsertMetaTag('meta[name="twitter:title"]', { name: 'twitter:title', content: seo.title });
    upsertMetaTag('meta[name="twitter:description"]', { name: 'twitter:description', content: seo.description });

    const canonicalBase = window.location.origin + window.location.pathname;
    const hashPath = pathname === '/' ? '#/' : `#${pathname}`;
    upsertCanonical(`${canonicalBase}${hashPath}`);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <SeoManager />
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hakkimizda" element={<About />} />
            <Route path="/hizmetlerimiz" element={<Services />} />
            <Route path="/hizmetlerimiz/:serviceId" element={<ServiceDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/teknolojiler" element={<Technologies />} />
            <Route path="/firmalar" element={<Clients />} />
            <Route path="/iletisim" element={<Contact />} />
            <Route path="/gizlilik-politikasi" element={<PrivacyPolicy />} />
            <Route path="/kullanim-sartlari" element={<TermsOfUse />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
        <div id="footer-portal"></div>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
