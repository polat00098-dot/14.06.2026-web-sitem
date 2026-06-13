import React from 'react';
import { Link } from 'react-router-dom';
import { useSiteMedia } from '../hooks/useSiteMedia';

const Footer: React.FC = () => {
  const { logo } = useSiteMedia();

  return (
    <footer className="bg-[#100d0a] pt-16 pb-8" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Brand & Socials */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <img 
                alt="EX Dönüşüm Mühendislik Logo" 
                className="h-14 w-auto object-contain" 
                src={logo} 
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="text-sm text-[#b9ab9d] leading-relaxed">
              Endüstriyel tesisler için ATEX ve Exproof mühendislik çözümleri sunuyoruz. Güvenliğinizi şansa bırakmayın.
            </p>
            <div className="flex gap-4">
              <a 
                className="text-[#b9ab9d] hover:text-primary transition-colors" 
                href="https://tr.linkedin.com/company/ex-d%C3%B6n%C3%BC%C5%9F%C3%BCm" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a 
                className="text-[#b9ab9d] hover:text-primary transition-colors" 
                href="https://youtube.com/@exdonusum?si=DtozyYXKWDj3JYqY" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="YouTube"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Category: Company (Kurumsal) */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Kurumsal</h3>
            <ul className="space-y-3">
              <li><Link className="text-sm text-[#b9ab9d] hover:text-primary transition-colors" to="/">Ana Sayfa</Link></li>
              <li><Link className="text-sm text-[#b9ab9d] hover:text-primary transition-colors" to="/hakkimizda">Hakkımızda</Link></li>
              <li><Link className="text-sm text-[#b9ab9d] hover:text-primary transition-colors" to="/blog">Blog</Link></li>
              <li><Link className="text-sm text-[#b9ab9d] hover:text-primary transition-colors" to="/teknolojiler">Kullandığımız Teknolojiler</Link></li>
              <li><Link className="text-sm text-[#b9ab9d] hover:text-primary transition-colors" to="/firmalar">Çalıştığımız Firmalar</Link></li>
            </ul>
          </div>

          {/* Category: Services (Hizmetlerimiz) */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Hizmetlerimiz</h3>
            <ul className="space-y-3">
              <li><Link className="text-sm text-[#b9ab9d] hover:text-primary transition-colors" to="/hizmetlerimiz">Periyodik Kontrol</Link></li>
              <li><Link className="text-sm text-[#b9ab9d] hover:text-primary transition-colors" to="/hizmetlerimiz">Ekipman Eğitimi</Link></li>
              <li><Link className="text-sm text-[#b9ab9d] hover:text-primary transition-colors" to="/hizmetlerimiz">ATEX Eğitimi</Link></li>
              <li><Link className="text-sm text-[#b9ab9d] hover:text-primary transition-colors" to="/hizmetlerimiz">PKD Raporu</Link></li>
              <li><Link className="text-sm text-[#b9ab9d] hover:text-primary transition-colors" to="/hizmetlerimiz">Montaj Danışmanlığı</Link></li>
              <li><Link className="text-sm text-[#b9ab9d] hover:text-primary transition-colors" to="/hizmetlerimiz">İyileştirme Danışmanlığı</Link></li>
            </ul>
          </div>

          {/* Category: Contact (İletişim) */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">İletişim</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-0.5">location_on</span>
                <span className="text-sm text-[#b9ab9d]">Kızılırmak Mah. Dumlupınar Bulvarı Yda Center No:9A İç Kapı No:158 Çankaya/Ankara</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">mail</span>
                <a className="text-sm text-[#b9ab9d] hover:text-white" href="mailto:info@exdonusum.com">info@exdonusum.com</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">call</span>
                <a className="text-sm text-[#b9ab9d] hover:text-white" href="tel:+903129118872">0 312 911 88 72</a>
              </li>
              <li>
                <Link to="/iletisim" className="inline-block mt-2 px-4 py-2 border border-primary/30 text-primary hover:bg-primary hover:text-white transition-all text-xs font-bold rounded">
                  Bize Ulaşın
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#393128] pt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-[#54483b]">
            © 2023 EX Dönüşüm Mühendislik. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-6">
            <Link className="text-xs text-[#54483b] hover:text-white" to="/gizlilik-politikasi">Gizlilik Politikası</Link>
            <Link className="text-xs text-[#54483b] hover:text-white" to="/kullanim-sartlari">Kullanım Şartları</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
