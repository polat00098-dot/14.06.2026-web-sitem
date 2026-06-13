import React from 'react';
import { useSiteMedia } from '../hooks/useSiteMedia';

const Services: React.FC = () => {
  const { heroBg } = useSiteMedia();
  const serviceItems = [
    {
      id: "01",
      title: "Exproof Ekipmanların Periyodik Kontrolü",
      header: "Düzenli Kontrol, Kesintisiz Güvenlik",
      desc: "Tesisinizde bulunan exproof ekipmanların EN 60079-17 standardına uygun olarak periyodik muayenelerini gerçekleştiriyor, güvenli çalışma ortamının sürekliliğini sağlıyoruz.",
      secondaryDesc: "Exproof ekipmanların zamanla işlevselliğini yitirmesi patlama riskini artırır. Uzman ekibimizle periyodik kontrolleri yaparak olası tehlikelerin önüne geçiyoruz.",
      icon: "content_paste_search",
      bullets: [
        "Görsel, Yakın ve Detaylı Muayene Seçenekleri",
        "Yasal Mevzuata Uygun Raporlama",
        "Risk Değerlendirmesi ve Önceliklendirme"
      ]
    },
    {
      id: "02",
      title: "Exproof Ekipman Seçimi, Montajı Ve Bakım Onarım Eğitimi",
      header: "Exproof Ekipman Seçimi, Montajı Ve Bakım Onarım Eğitimi",
      desc: "Teknik personeliniz için özel olarak hazırlanan bu eğitim programı ile doğru ekipman seçimi, standartlara uygun montaj ve etkin bakım tekniklerini aktarıyoruz.",
      secondaryDesc: "Personelinizin exproof ekipmanlar konusundaki yetkinliğini artırarak, montaj ve bakım hatalarından kaynaklanan riskleri minimuma indiriyoruz.",
      icon: "school",
      bullets: [
        "Uygulamalı Montaj Teknikleri",
        "Kablo Glend Bağlantı Uygulamaları",
        "Bakım ve Onarım Prosedürleri"
      ]
    },
    {
      id: "03",
      title: "ATEX Bilgilendirme Eğitimi",
      header: "Farkındalık Hayat Kurtarır",
      desc: "Patlayıcı ortamlarda çalışan tüm personel için temel farkındalık eğitimi. Patlamadan korunma dokümanının anlaşılması ve güvenli çalışma kurallarının benimsenmesi hedeflenir.",
      secondaryDesc: "Çalışanlarınızın patlayıcı ortam risklerini tanıması, iş güvenliği kültürünün en önemli parçasıdır. ATEX eğitimi ile tehlikelerin farkında olan bilinçli bir kadro oluşturun.",
      icon: "warning",
      bullets: [
        "Patlama Üçgeni ve Riskleri",
        "Bölge (Zone) Sınıflandırmaları",
        "ATEX Direktifleri Hakkında Genel Bilgi"
      ]
    },
    {
      id: "04",
      title: "PKD Raporu Hazırlama",
      header: "Yasal Mevzuata Tam Uyum",
      desc: "Tesisinizdeki tehlikeli bölgelerin belirlenmesi, tutuşturucu kaynakların analizi ve alınması gereken önlemlerin belirlenmesi süreçlerini kapsayan kapsamlı dokümantasyon hizmeti.",
      secondaryDesc: "İş yerinizdeki patlayıcı ortam risklerini değerlendirerek, yasal zorunluluk olan Patlamadan Korunma Dokümanı'nı (PKD) profesyonelce hazırlıyoruz.",
      icon: "description",
      bullets: [
        "Tehlikeli Bölge Sınıflandırma Planları",
        "Kimyasal Madde Risk Analizi",
        "Teknik ve Organizasyonel Tedbirler"
      ]
    },
    {
      id: "05",
      title: "Exproof Ekipmanların Montaj ve Seçim Danışmanlığı",
      header: "Doğru Ekipman, Uzun Ömürlü Tesis",
      desc: "Yatırımlarınızın doğru yönlendirilmesi için, proses şartlarınıza ve bölge sınıflandırmanıza en uygun ekipmanların seçimi ve kurulumu konusunda mühendislik desteği sunuyoruz.",
      secondaryDesc: "Yanlış ekipman seçimi hem güvenlik riski yaratır hem de gereksiz maliyetlere yol açar. Deneyimli mühendislerimizle en uygun teknik çözümleri projelendiriyoruz.",
      icon: "build",
      bullets: [
        "Doğru Sertifikasyon ve EPL Seçimi",
        "Maliyet Etkin Çözümler",
        "EN 60079-14 Montaj Standartlarına Uyum"
      ]
    },
    {
      id: "06",
      title: "Muayene Sonrası İyileştirme Danışmanlığı",
      header: "Tespitlerden Çözüme",
      desc: "Denetimler sonucu ortaya çıkan uygunsuzlukların en hızlı ve ekonomik şekilde giderilmesi için teknik danışmanlık ve süpervizörlük hizmeti.",
      secondaryDesc: "Muayene raporlarında çıkan eksikliklerin giderilmesi sürecinde yalnız değilsiniz. Düzeltici faaliyetlerin planlanması ve uygulanması aşamalarında yanınızdayız.",
      icon: "trending_up",
      bullets: [
        "Aksiyon Planı Oluşturma",
        "Revizyon Süreç Takibi",
        "Uygunsuzlukların Kapatılması ve Doğrulama"
      ]
    }
  ];

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
        </div>
      </section>

      <section className="py-20 bg-[#181511]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">
          {serviceItems.map((item, idx) => (
            <div key={idx} className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={`order-2 ${idx % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'} relative group`}>
                <div className="absolute -inset-4 rounded-xl bg-gradient-to-tr from-primary/10 to-transparent opacity-50 blur-lg transition-opacity group-hover:opacity-75"></div>
                <div className="relative overflow-hidden rounded-xl border border-surface-border bg-surface-dark p-8 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex size-16 items-center justify-center rounded-lg bg-primary/20 text-primary">
                      <span className="material-symbols-outlined text-4xl">{item.icon}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="text-[#b9ab9d] mb-8 leading-relaxed">{item.desc}</p>
                  <ul className="space-y-3">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                        <span className="text-sm text-gray-300">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={`order-1 ${idx % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="h-full flex flex-col justify-center">
                  <span className="text-primary font-bold tracking-wider uppercase mb-2">Hizmet #{item.id}</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{item.header}</h2>
                  <p className="text-[#b9ab9d] text-lg leading-relaxed">{item.secondaryDesc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Services;
