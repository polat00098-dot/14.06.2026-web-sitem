import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSiteMedia } from '../hooks/useSiteMedia';
import { useServicesData } from '../hooks/useServicesData';

const Services: React.FC = () => {
  const { heroBg } = useSiteMedia();
  const navigate = useNavigate();
  const serviceItems = useServicesData();

  return (
    <main>
      <section className="relative flex min-h-[400px] flex-col items-center justify-center overflow-hidden py-16 lg:min-h-[500px]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#181511] via-[#181511]/90 to-[#181511]/70 z-10"></div>
          <div className="h-full w-full bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url("${heroBg}")`}}></div>
        </div>
        <div className="relative z-20 mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
          <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Kapsamlı ATEX ve Exproof <br className="hidden sm:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Mühendislik Hizmetleri</span>
          </h1>
          <p className="max-w-2xl text-base font-normal leading-relaxed text-[#dcdcdc] sm:text-lg">
            Endüstriyel tesisler için risk analizi, periyodik kontrol, eğitim ve danışmanlık hizmetlerimizle güvenliğinizi en üst düzeye taşıyoruz.
          </p>
          <p className="max-w-4xl text-sm font-normal leading-relaxed text-[#c7b9ab] sm:text-base">
            Exproof ekipmanların periyodik kontrolü, Ex ekipman periyodik kontrolü, Exproof ekipman bakım eğitimi, Ex ekipman eğitimi,
            PKD (Patlamadan Korunma Dokümanı), ATEX bilgilendirme eğitimi ve Ex ekipman danışmanlığı başlıklarında uçtan uca hizmet veriyoruz.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#181511]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceItems.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate(`/hizmetlerimiz/${item.id}`)}
                className="group relative cursor-pointer"
              >
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-orange-400 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-40"></div>
                <div className="relative h-full overflow-hidden rounded-2xl border border-surface-border bg-surface-dark p-8 transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex size-14 items-center justify-center rounded-lg bg-primary/20 text-primary transition-all group-hover:bg-primary group-hover:text-white">
                      <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                    </div>
                    <span className="text-4xl font-bold text-primary/30 group-hover:text-primary/60 transition-colors">{item.id}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors line-clamp-3">{item.title}</h3>
                  <p className="text-sm text-[#b9ab9d] mb-6 line-clamp-2">{item.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {item.bullets.slice(0, 2).map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-primary text-xs mt-0.5 flex-shrink-0">check_circle</span>
                        <span className="text-xs text-gray-400">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-4 border-t border-surface-border">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">Detaylar</span>
                    <span className="material-symbols-outlined text-primary text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
