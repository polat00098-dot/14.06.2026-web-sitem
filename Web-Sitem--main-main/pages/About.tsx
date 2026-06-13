import React from 'react';
import { Link } from 'react-router-dom';
import { useSiteMedia } from '../hooks/useSiteMedia';

const About: React.FC = () => {
  const { heroBg, aboutImg } = useSiteMedia();
  return (
    <main>
      <section className="relative flex min-h-[400px] flex-col items-center justify-center overflow-hidden py-16 lg:min-h-[500px]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#181511] via-[#181511]/90 to-[#181511]/70 z-10"></div>
          <div className="h-full w-full bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url("${heroBg}")`}}></div>
        </div>
        <div className="relative z-20 mx-auto max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 backdrop-blur-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Kurumsal</span>
          </div>
          <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Standartların Ötesinde <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Güvenlik</span>
          </h1>
          <p className="max-w-3xl text-base font-normal leading-relaxed text-[#dcdcdc] sm:text-lg md:text-xl">
            EX Dönüşüm Mühendislik olarak, ATEX direktifleri (2014/34/AB ve 1999/92/EC) çerçevesinde tesislerinizi en yüksek güvenlik standartlarına taşıyoruz.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-[#181511] to-transparent z-20"></div>
      </section>

      <section className="relative py-20 bg-[#181511]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="group relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-tr from-primary/20 to-transparent opacity-50 blur-lg transition-opacity group-hover:opacity-75"></div>
              <div className="relative overflow-hidden rounded-xl border border-surface-border shadow-2xl h-full">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <img 
                  alt="Engineer working" 
                  className="h-full min-h-[500px] w-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src={aboutImg} 
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute bottom-6 left-6 z-20">
                  <div className="flex items-center gap-3 rounded-lg bg-white/10 backdrop-blur-md p-4 border border-white/20">
                    <span className="material-symbols-outlined text-primary text-3xl">verified</span>
                    <div>
                      <p className="text-xs text-white/80 uppercase tracking-widest font-bold">Deneyim</p>
                      <p className="text-lg font-bold text-white">4 Yıllık Sektör Tecrübesi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div>
                <h2 className="mb-6 text-3xl font-black text-white md:text-4xl">Sürdürülebilir Bir Güvenlik Kültürü</h2>
                <div className="space-y-6 text-[#b9ab9d] text-lg leading-relaxed">
                  <p>
                    Endüstriyel tesislerin güvenliği, sadece yasal zorunlulukları yerine getirmekle sınırlı değildir; çalışanların hayatını korumak ve tesisin devamlılığını sağlamak için hayati bir önem taşır. EX Dönüşüm Mühendislik olarak vizyonumuz, teknik denetimlerin ötesine geçerek işletmenizde kalıcı bir güvenlik kültürü oluşturmaktır.
                  </p>
                  <p>
                    Risk analizi süreçlerimiz, tesisinizin her noktasını detaylı bir şekilde inceleyerek potansiyel tehlikeleri minimize etmeyi hedefler. Teknik denetimlerimizde, en güncel teknolojileri ve uluslararası standartları referans alarak, sadece bugünü değil geleceği de güven altına alan çözümler sunuyoruz.
                  </p>
                  <p>
                    Uzman mühendis kadromuz, patlayıcı ortamların (ATEX) sınıflandırılması ve bu alanlarda kullanılacak ekipmanların seçimi konusunda derin bir bilgi birikimine sahiptir. Amacımız, karmaşık regülasyonları sizin için anlaşılır ve uygulanabilir kılmaktır.
                  </p>
                </div>
              </div>
              <div className="border-t border-surface-border pt-8">
                <h3 className="mb-6 text-xl font-bold text-white">Neden Biz?</h3>
                <div className="grid gap-6 sm:grid-cols-2">
                  {[
                    { icon: 'groups', title: 'Uzman Kadro', desc: 'Uluslararası sertifikalara sahip, alanında deneyimli mühendis ekibi.' },
                    { icon: 'gavel', title: 'Tam Uyum', desc: 'ATEX ve IECEx standartlarına %100 uyumlu raporlama ve denetim.' },
                    { icon: 'science', title: 'Teknolojik Yaklaşım', desc: 'En yeni ölçüm cihazları ve analiz yöntemleri ile hassas sonuçlar.' },
                    { icon: 'support_agent', title: 'Sürekli Destek', desc: 'Denetim sonrası süreçlerde de yanınızda olan çözüm odaklı yaklaşım.' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 rounded-xl border border-surface-border bg-surface-dark p-5 transition-all hover:border-primary/50 hover:bg-[#322a24]">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                      </div>
                      <div>
                        <h4 className="mb-1 text-lg font-bold text-white">{item.title}</h4>
                        <p className="text-sm text-[#b9ab9d]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#393128] bg-surface-dark py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="flex flex-col items-center gap-2">
              <span className="text-4xl font-black text-primary md:text-5xl">150+</span>
              <span className="text-sm font-bold uppercase tracking-widest text-[#b9ab9d]">Tamamlanan Proje</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-4xl font-black text-primary md:text-5xl">4</span>
              <span className="text-sm font-bold uppercase tracking-widest text-[#b9ab9d]">Yıllık Tecrübe</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-4xl font-black text-primary md:text-5xl">50+</span>
              <span className="text-sm font-bold uppercase tracking-widest text-[#b9ab9d]">Kurumsal Müşteri</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-4xl font-black text-primary md:text-5xl">%100</span>
              <span className="text-sm font-bold uppercase tracking-widest text-[#b9ab9d]">Müşteri Memnuniyeti</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
