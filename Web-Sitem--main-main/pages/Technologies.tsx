
import React from 'react';
import { useSiteMedia } from '../hooks/useSiteMedia';

const Technologies: React.FC = () => {
  const { heroBg } = useSiteMedia();
  const sections = [
    {
      title: "Yazılım ve Simülasyon",
      items: [
        { icon: "architecture", title: "AutoCAD & 3D Modelleme", desc: "Tehlikeli bölgelerin haritalandırılması ve ekipman yerleşimi için hassas teknik çizim ve modelleme araçları kullanıyoruz." },
        { icon: "calculate", title: "Özel ATEX Hesaplama Araçları", desc: "Patlayıcı ortamların sınıflandırılması ve risk seviyelerinin belirlenmesi için güncel standartlara uygun yazılımlar." },
        { icon: "fluid", title: "Yayılım Simülasyonu", desc: "Gaz ve toz sızıntılarının yayılım paternlerini analiz ederek en doğru koruma stratejilerini belirliyoruz." }
      ]
    },
    {
      title: "Ölçüm ve Analiz Ekipmanları",
      items: [
        { icon: "sensors", title: "Exproof Ölçüm Cihazları", desc: "Zone 0, 1 ve 2 alanlarında güvenle kullanılabilen sertifikalı gaz dedektörleri ve elektriksel test cihazları." },
        { icon: "thermostat", title: "Termal Görüntüleme", desc: "Ekipmanlardaki ısınma problemlerini patlama riski oluşturmadan tespit eden ATEX onaylı termal kameralar." },
        { icon: "bolt", title: "Statik Elektrik Analizörleri", desc: "Tesis genelindeki statik yüklenmeleri ve topraklama sürekliliğini ölçen profesyonel analiz araçları." }
      ]
    },
    {
      title: "Dijital Raporlama Sistemleri",
      items: [
        { icon: "cloud_sync", title: "Bulut Tabanlı Takip", desc: "PKD raporları ve ekipman periyodik kontrollerinin dijital ortamda saklanması ve bildirim süreçleri." },
        { icon: "qr_code_2", title: "QR Kod Entegrasyonu", desc: "Saha denetimlerinde her ekipmanın geçmişine ve teknik detaylarına hızlı erişim sağlayan akıllı etiketleme." },
        { icon: "assignment_turned_in", title: "Online Onay Süreçleri", desc: "Rapor hazırlama ve onay mekanizmalarının dijitalleşmesi ile hız kazanan güvenli iş akışları." }
      ]
    }
  ];

  return (
    <main>
      <section className="relative flex min-h-[400px] flex-col items-center justify-center overflow-hidden py-20 lg:min-h-[500px]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#181511] via-[#181511]/80 to-[#181511]/60 z-10"></div>
          <div className="h-full w-full bg-cover bg-center bg-no-repeat grayscale opacity-40" style={{backgroundImage: `url("${heroBg}")`}}></div>
        </div>
        <div className="relative z-20 mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 backdrop-blur-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Teknoloji & İnovasyon</span>
          </div>
          <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Modern Mühendislik <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Teknolojilerimiz</span>
          </h1>
          <p className="max-w-2xl text-base font-normal leading-relaxed text-[#dcdcdc] sm:text-lg">
            Hizmetlerimizde kullandığımız en güncel yazılım, donanım ve raporlama sistemleri ile tesislerinizi dijital dönüşüme hazırlıyoruz.
          </p>
        </div>
      </section>

      <section className="relative py-20 bg-[#181511]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {sections.map((section, sIdx) => (
            <div key={sIdx} className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-surface-border"></div>
                <h2 className="text-2xl font-bold text-white px-4">{section.title}</h2>
                <div className="h-px flex-1 bg-surface-border"></div>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {section.items.map((item, idx) => (
                  <div key={idx} className="group relative flex flex-col gap-4 rounded-xl border border-surface-border bg-surface-dark p-8 transition-all hover:border-primary/50">
                    <div className="flex size-14 items-center justify-center rounded-lg bg-[#322a24] text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-sm text-[#b9ab9d] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Technologies;

