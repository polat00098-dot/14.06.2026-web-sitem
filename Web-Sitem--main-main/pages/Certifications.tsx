import React from 'react';
import { useSiteMedia } from '../hooks/useSiteMedia';

const Certifications: React.FC = () => {
  const { heroBg } = useSiteMedia();
  const certifications = [
    {
      title: "ISO 9001:2015",
      subtitle: "Kalite Yönetim Sistemi",
      desc: "Hizmet kalitemizin uluslararası standartlarda olduğunu ve sürekli iyileştirme prensibiyle çalıştığımızı belgeleyen temel sertifikamız.",
      icon: "verified_user"
    },
    {
      title: "ISO 14001:2015",
      subtitle: "Çevre Yönetim Sistemi",
      desc: "Mühendislik çözümlerimizi sunarken çevresel sürdürülebilirliği ön planda tuttuğumuzu kanıtlayan çevre yönetim belgemiz.",
      icon: "eco"
    },
    {
      title: "ISO 45001:2018",
      subtitle: "İş Sağlığı ve Güvenliği",
      desc: "Hem kendi ekibimizin hem de hizmet verdiğimiz tesislerin güvenliğini en üst seviyede tuttuğumuzun en önemli göstergesi.",
      icon: "health_and_safety"
    },
    {
      title: "IECEx Personel Yetkinlik",
      subtitle: "Uluslararası Uzmanlık",
      desc: "Mühendislerimizin patlayıcı ortamlarda tasarım, montaj ve denetim konularında uluslararası IECEx yetkinlik sertifikaları.",
      icon: "workspace_premium"
    },
    {
      title: "TSE Hizmet Yeterlilik",
      subtitle: "Ulusal Standart Uyumu",
      desc: "Türk Standartları Enstitüsü tarafından onaylanmış, mühendislik hizmetlerimizin yerel mevzuata tam uygunluk belgesi.",
      icon: "approval"
    },
    {
      title: "ATEX Teknik Uzmanlık",
      subtitle: "Avrupa Direktif Uyumu",
      desc: "2014/34/EU ve 1999/92/EC direktifleri kapsamında personelimizin sahip olduğu ileri düzey teknik uzmanlık belgeleri.",
      icon: "engineering"
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative flex min-h-[400px] flex-col items-center justify-center overflow-hidden py-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#181511] via-[#181511]/80 to-[#181511]/60 z-10"></div>
          <div className="h-full w-full bg-cover bg-center bg-no-repeat grayscale opacity-30" style={{backgroundImage: `url("${heroBg}")`}}></div>
        </div>
        <div className="relative z-20 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 backdrop-blur-sm mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Yetkinliklerimiz</span>
          </div>
          <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Sertifikalar ve <span className="text-primary">Akreditasyonlar</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg md:text-xl leading-relaxed text-[#dcdcdc] opacity-90">
            Hizmet kalitemizi ve teknik uzmanlığımızı uluslararası geçerliliğe sahip belgelerle taçlandırıyoruz.
          </p>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="bg-[#181511] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-6 md:text-4xl">Uluslararası Standartlarda Hizmet Güvencesi</h2>
            <p className="text-[#b9ab9d] text-lg md:text-xl leading-relaxed max-w-3xl">
              EX Dönüşüm Mühendislik olarak, sunduğumuz tüm hizmetlerde 'sıfır hata' ve 'maksimum güvenlik' prensibini benimsiyoruz. Bu vizyonumuzu destekleyen kurumsal ve bireysel sertifikalarımız, müşterilerimize sunduğumuz güvenin temelini oluşturur.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl border border-surface-border bg-surface-dark p-8 transition-all hover:border-primary/50 hover:-translate-y-1">
                <div className="absolute -right-4 -top-4 size-32 opacity-5 transition-transform group-hover:scale-110 group-hover:opacity-10">
                  <span className="material-symbols-outlined text-[128px] text-primary">{cert.icon}</span>
                </div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <span className="material-symbols-outlined text-3xl">{cert.icon}</span>
                  </div>
                  
                  <h3 className="mb-1 text-2xl font-black text-white">{cert.title}</h3>
                  <p className="mb-4 text-xs font-bold uppercase tracking-widest text-primary/80">{cert.subtitle}</p>
                  <p className="text-[#b9ab9d] text-base leading-relaxed mb-8">
                    {cert.desc}
                  </p>
                  
                  <div className="mt-auto flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-white/40 border-t border-white/5 pt-6">
                    <span className="material-symbols-outlined text-base">info</span>
                    <span>Belgeyi görüntülemek için iletişime geçin</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Quality Section */}
      <section className="relative py-20 bg-surface-dark overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-primary/5 skew-x-12 opacity-30"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center lg:gap-24">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">Kalite Politikamız</h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-8 leading-tight">Neden Akreditasyon Önemlidir?</h3>
              <div className="space-y-8">
                {[
                  { title: "Hukuki Güvence", desc: "Tüm raporlarımız ve denetimlerimiz yasal mevzuata tam uyumluluk garantisi sağlar." },
                  { title: "Teknik Doğruluk", desc: "Sertifikalı ekipman ve personel, mühendislik hesaplamalarındaki hata payını minimize eder." },
                  { title: "Uluslararası Geçerlilik", desc: "Dünya çapında tanınan belgelerimizle global projelerde de çözüm ortağınız oluyoruz." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <span className="material-symbols-outlined text-base">check</span>
                    </div>
                    <div className="max-w-md">
                      <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-base text-[#b9ab9d] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-primary/30 to-transparent blur-xl opacity-30"></div>
              <div className="relative bg-[#181511] border border-surface-border rounded-2xl p-10 lg:p-14 text-center">
                <span className="material-symbols-outlined text-7xl text-primary mb-8 animate-pulse">workspace_premium</span>
                <p className="text-2xl font-bold text-white mb-4">Güvenilir Çözüm Ortağı</p>
                <p className="text-[#b9ab9d] text-base leading-relaxed mb-10 max-w-sm mx-auto">Tesisinizin güvenliğini şansa değil, sertifikalı uzmanlığımıza emanet edin.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                   <div className="px-6 py-3 bg-primary/10 border border-primary/20 rounded-lg text-primary text-xs font-black uppercase tracking-widest">IEC 60079 Expert</div>
                   <div className="px-6 py-3 bg-primary/10 border border-primary/20 rounded-lg text-primary text-xs font-black uppercase tracking-widest">ATEX Directive Specialist</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Certifications;
