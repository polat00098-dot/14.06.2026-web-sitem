
import React from 'react';
import { useSiteMedia } from '../hooks/useSiteMedia';

const Technologies: React.FC = () => {
  const { heroBg } = useSiteMedia();
  const appModules = [
    {
      icon: 'inventory_2',
      title: 'Ekipman Kartları ve Geçmişi',
      desc: 'Her exproof ekipman için kimlik, zone, kontrol geçmişi ve kritik notlar tek ekranda tutulur.'
    },
    {
      icon: 'fact_check',
      title: 'Saha Kontrol Formları',
      desc: 'Görsel, yakın ve detaylı muayene adımları sahada mobil olarak işaretlenir; eksik kayıt riski azalır.'
    },
    {
      icon: 'description',
      title: 'Anlık Rapor Taslağı Üretimi',
      desc: 'Periyodik kontrol biter bitmez sistem bulgulara göre rapor taslağını otomatik oluşturur.'
    },
    {
      icon: 'send',
      title: 'Hızlı Teslim Süreci',
      desc: 'Ofise dönüş beklemeden rapor içeriği hazır olduğundan firmalara teslim süresi ciddi şekilde kısalır.'
    }
  ];

  const workflowSteps = [
    {
      step: '01',
      title: 'Sahaya Çıkış Öncesi Planlama',
      text: 'Kontrol listeleri, ekipman grupları ve saha görevleri Ex Product Management üzerinde hazırlanır.'
    },
    {
      step: '02',
      title: 'Sahada Periyodik Kontrol Uygulaması',
      text: 'Teknik ekip kontrol adımlarını uygulama üzerinden işleyerek fotoğraf, not ve uygunsuzlukları anında kaydeder.'
    },
    {
      step: '03',
      title: 'Otomatik Taslak Rapor Oluşumu',
      text: 'Kontrol tamamlandığı anda bulgular rapor formatına aktarılır ve rapor taslağı otomatik olarak hazırlanır.'
    },
    {
      step: '04',
      title: 'Hızlı Gözden Geçirme ve Teslim',
      text: 'Mühendis onayı sonrası raporlar çok daha kısa sürede firmalara iletilir; iletişim ve takip kolaylaşır.'
    }
  ];

  return (
    <main>
      <section className="relative flex min-h-[400px] flex-col items-center justify-center overflow-hidden py-20 lg:min-h-[500px]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#181511] via-[#181511]/80 to-[#2a2019]/70 z-10"></div>
          <div className="h-full w-full bg-cover bg-center bg-no-repeat grayscale opacity-40" style={{backgroundImage: `url("${heroBg}")`}}></div>
        </div>
        <div className="relative z-20 mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 backdrop-blur-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Ex Product Management</span>
          </div>
          <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Saha Kontrolünden <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Hızlı Rapor Teslimine</span>
          </h1>
          <p className="max-w-2xl text-base font-normal leading-relaxed text-[#dcdcdc] sm:text-lg">
            Şirketimiz için geliştirdiğimiz Ex Product Management uygulaması sayesinde exproof ekipmanların periyodik kontrolü sahada tamamlanır tamamlanmaz rapor taslağı oluşur. Bu da raporları firmalara çok daha hızlı teslim etmemizi sağlar.
          </p>
          <div className="grid w-full max-w-4xl gap-4 sm:grid-cols-3 mt-4">
            <div className="rounded-xl border border-primary/25 bg-[#221b15]/80 p-4">
              <p className="text-xs uppercase tracking-wider text-primary">Ana Kazanım</p>
              <p className="text-white font-bold mt-1">Rapor Süresinde Hız</p>
            </div>
            <div className="rounded-xl border border-primary/25 bg-[#221b15]/80 p-4">
              <p className="text-xs uppercase tracking-wider text-primary">Operasyon</p>
              <p className="text-white font-bold mt-1">Saha + Ofis Senkronu</p>
            </div>
            <div className="rounded-xl border border-primary/25 bg-[#221b15]/80 p-4">
              <p className="text-xs uppercase tracking-wider text-primary">Müşteri Etkisi</p>
              <p className="text-white font-bold mt-1">Daha Hızlı Teslimat</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-[#181511]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-surface-border"></div>
              <h2 className="text-2xl font-bold text-white px-4">Uygulama Modüllerimiz</h2>
              <div className="h-px flex-1 bg-surface-border"></div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {appModules.map((item, idx) => (
                <div key={idx} className="group relative flex flex-col gap-4 rounded-xl border border-surface-border bg-surface-dark p-8 transition-all hover:border-primary/50 hover:-translate-y-1">
                  <div className="flex size-14 items-center justify-center rounded-lg bg-[#322a24] text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-[#b9ab9d] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16 rounded-2xl border border-surface-border bg-gradient-to-br from-[#221b15] to-[#181511] p-8 lg:p-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-surface-border"></div>
              <h2 className="text-2xl font-bold text-white px-4">Sahadan Rapor Teslimine İş Akışı</h2>
              <div className="h-px flex-1 bg-surface-border"></div>
            </div>
            <div className="grid gap-5 lg:grid-cols-2">
              {workflowSteps.map((item) => (
                <div key={item.step} className="rounded-xl border border-primary/25 bg-[#181511]/70 p-6">
                  <div className="text-xs font-bold tracking-widest text-primary mb-2">ADIM {item.step}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-[#c8bbb0] leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8 lg:p-10 text-center">
            <h2 className="text-3xl font-black text-white mb-4">Neden Bu Sistem Bizim İçin Kritik?</h2>
            <p className="max-w-4xl mx-auto text-[#d8cbc0] leading-relaxed">
              Ex Product Management, saha operasyonlarını yalnızca dijitalleştirmiyor; periyodik kontrol sonrası rapor üretim sürecini de hızlandırıyor.
              Böylece teknik doğruluk korunurken, firmalara rapor teslim süresi kısalıyor ve müşteri memnuniyeti artıyor.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/40 px-5 py-2 text-primary text-sm font-bold tracking-wide">
              <span className="material-symbols-outlined text-base">bolt</span>
              Saha Tamamlanır Tamamlanmaz Rapor Taslağı Hazır
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Technologies;

