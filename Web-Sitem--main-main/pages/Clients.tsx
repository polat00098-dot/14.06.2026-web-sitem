
import React, { useState, useEffect } from 'react';

const HERO_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6wTbHc_SgIqYniTx0Cwbu_AU1PZdYqdOop7KEraI7yihlBsztotjiPNViDslcyEWrKbjlmT7r19yfoJ7CelPQ3AVFgjcJbpXsqseGIJwsKRMf3vJBw81793tdfbRpuVTkNMUHY2-aG9QuD93X907blE75_lfx9riiqQ3aekMw1pBkIjdiF72spvkCb_OrG38tvjm-_SVphCgc5eaWYJMoSBUjZYYcZ4VkS5c2bSSr_XfPXJuqeFhIInmCmL31MLrpGfbtXd59dJWd';

interface Partner {
  id: string | number;
  name: string;
  category: string;
  logo?: string;
}

const Clients: React.FC = () => {
  const [partners, setPartners] = useState<Partner[]>([]);

  useEffect(() => {
    fetch('/api/data')
      .then(r => r.json())
      .then(data => {
        if (data.partners) setPartners(data.partners);
      })
      .catch(() => {});
  }, []);

  const getFallbackLogo = (name: string) => {
    return '/media-logo.svg';
  };

  const sectors = [
    { icon: 'oil_barrel', title: 'Petrol & Gaz', desc: 'Rafineriler ve dolum tesisleri için patlayıcı ortam güvenliği.', count: '30+ Proje' },
    { icon: 'science', title: 'Kimya & İlaç', desc: 'Kimyasal üretim tesislerinde hassas ekipman kontrolü.', count: '45+ Proje' },
    { icon: 'electrical_services', title: 'Enerji Üretimi', desc: 'Enerji santrallerinde exproof ekipman denetimi.', count: '25+ Proje' }
  ];

  return (
    <main className="bg-background-dark min-h-screen">
      <section className="relative flex min-h-[400px] flex-col items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/90 to-background-dark/40 z-10"></div>
          <div className="h-full w-full bg-cover bg-center bg-no-repeat opacity-20 grayscale" style={{backgroundImage: `url("${HERO_IMG}")`}}></div>
        </div>
        <div className="relative z-20 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 backdrop-blur-sm mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Profesyonel Referanslar</span>
          </div>
          <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-6xl md:text-7xl">
            Bize Güvenen <span className="text-primary">Markalar</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary leading-relaxed">
            ATEX ve Exproof mühendislik çözümlerimizde Türkiye'nin lider kuruluşlarıyla çalışıyoruz.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {partners.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {partners.map((partner) => (
                <div 
                  key={partner.id} 
                  className="group relative flex flex-col items-center justify-center rounded-2xl border border-surface-border bg-surface-dark p-8 transition-all duration-300 hover:border-primary/50 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="relative mb-5 flex h-24 w-24 items-center justify-center rounded-2xl bg-white p-3 shadow-inner transition-all group-hover:scale-110">
                    <img 
                      src={partner.logo || getFallbackLogo(partner.name)} 
                      alt={partner.name} 
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-sm font-black text-white group-hover:text-primary transition-colors leading-tight mb-1">
                      {partner.name}
                    </h3>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">
                      {partner.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-32 border-2 border-dashed border-surface-border rounded-3xl opacity-50">
              <span className="material-symbols-outlined text-6xl text-surface-border mb-4">business_center</span>
              <p className="text-text-secondary text-lg font-medium">Henüz referans eklenmedi.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-24 bg-[#1e1a16] relative overflow-hidden border-t border-white/5">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-primary/5 -skew-x-12 opacity-50"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-sm font-bold uppercase tracking-wider text-primary mb-2">Uzmanlık Alanlarımız</h2>
          <h3 className="text-3xl font-black text-white md:text-5xl mb-16">Faaliyet Gösterdiğimiz Sektörler</h3>
          <div className="grid gap-8 md:grid-cols-3">
            {sectors.map((sector, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl border border-surface-border bg-background-dark p-10 transition-all hover:border-primary/30 hover:-translate-y-2">
                <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-surface-dark text-primary shadow-lg ring-1 ring-white/10 group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-3xl">{sector.icon}</span>
                </div>
                <h4 className="mb-4 text-2xl font-bold text-white">{sector.title}</h4>
                <p className="text-base leading-relaxed text-[#b9ab9d] mb-6">{sector.desc}</p>
                <div className="flex items-center gap-3 text-sm font-bold text-primary">
                  <span>{sector.count}</span>
                  <div className="h-px flex-1 bg-primary/20"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Clients;
