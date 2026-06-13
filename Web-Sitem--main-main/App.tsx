
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Technologies from './pages/Technologies';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import Certifications from './pages/Certifications';
import Admin from './pages/Admin';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hakkimizda" element={<About />} />
            <Route path="/hizmetlerimiz" element={<Services />} />
            <Route path="/sertifikalar" element={<Certifications />} />
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
