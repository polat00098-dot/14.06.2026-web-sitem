import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSiteMedia } from '../hooks/useSiteMedia';

const Header: React.FC = () => {
  const { logo } = useSiteMedia();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Hakkımızda', path: '/hakkimizda' },
    { name: 'Hizmetlerimiz', path: '/hizmetlerimiz' },
    { name: 'Blog', path: '/blog' },
    { name: 'Kullandığımız Teknolojiler', path: '/teknolojiler' },
    { name: 'Çalıştığımız Firmalar', path: '/firmalar' },
    { name: 'İletişim', path: '/iletisim' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-[#100d0a]/80 backdrop-blur-md border-b border-[#393128]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link className="flex shrink-0 items-center gap-2" to="/">
            <img 
              alt="EX Dönüşüm Mühendislik" 
              className="h-14 w-auto object-contain" 
              src={logo} 
              loading="eager"
              decoding="async"
            />
          </Link>

          {/* Desktop Nav - Reverted to spacious layout */}
          <nav className="hidden xl:flex items-center gap-6">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-bold transition-colors hover:text-primary whitespace-nowrap ${
                  isActive(item.path) ? 'text-primary' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/iletisim"
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-primary-hover hover:scale-105"
            >
              Teklif Al
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="flex items-center justify-center rounded-md p-2 text-white xl:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menü"
          >
            <span className="material-symbols-outlined text-3xl">
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="xl:hidden border-t border-[#393128] py-4 bg-[#100d0a] absolute left-0 w-full">
            <nav className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-6 py-3 text-base font-bold transition-colors ${
                    isActive(item.path) ? 'bg-primary/10 text-primary' : 'text-white hover:bg-white/5'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/iletisim"
                className="mx-6 mt-4 rounded-lg bg-primary px-4 py-3 text-center text-base font-bold text-white"
                onClick={() => setIsOpen(false)}
              >
                Teklif Al
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
