import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <main className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white">
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-[#100d0a] dark:text-white sm:text-4xl">
          Gizlilik Politikasi
        </h1>
        <p className="mt-4 text-sm text-[#6b6258] dark:text-[#b9ab9d]">
          Son guncelleme: 22 Nisan 2026
        </p>

        <div className="mt-10 space-y-8 text-base leading-7 text-[#2f2922] dark:text-[#ddd3c7]">
          <section>
            <h2 className="text-xl font-bold text-[#100d0a] dark:text-white">1. Toplanan Veriler</h2>
            <p className="mt-3">
              Iletisim formu, e-posta veya telefon yoluyla bizimle ilettiginiz ad, soyad, sirket unvani,
              iletisim bilgileri ve talep icerigi gibi veriler islenebilir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#100d0a] dark:text-white">2. Verilerin Islenme Amaci</h2>
            <p className="mt-3">
              Toplanan veriler; teklif hazirlama, hizmet sunumu, teknik destek saglama, mevzuata uygunluk
              sureclerinin yurutilmesi ve tarafinizla iletisim kurulmasi amaclariyla kullanilir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#100d0a] dark:text-white">3. Verilerin Paylasimi</h2>
            <p className="mt-3">
              Kisisel verileriniz, kanuni yukumluluklar haricinde acik rizaniz olmadan ucuncu kisilerle
              pazarlama amacli paylasilmaz. Hizmetin ifasi icin gerekli oldugunda, sadece ilgili is ortaklari
              ve yetkili kurumlarla sinirli olarak paylasim yapilabilir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#100d0a] dark:text-white">4. Saklama Sureleri</h2>
            <p className="mt-3">
              Verileriniz, ilgili mevzuatta ongorulen sureler boyunca veya isleme amacinin gerektirdigi makul
              sure boyunca guvenli sekilde saklanir. Sure sonunda silme, yok etme veya anonimlestirme
              islemleri uygulanir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#100d0a] dark:text-white">5. Cerez ve Teknik Kayitlar</h2>
            <p className="mt-3">
              Site performansini izlemek ve guvenligi saglamak icin temel teknik kayitlar tutulabilir. Tarayici
              ayarlariniz uzerinden cerez tercihlerinizi yonetebilirsiniz.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#100d0a] dark:text-white">6. Haklariniz</h2>
            <p className="mt-3">
              Kisisel verilerinizin islenip islenmedigini ogrenme, duzeltme talep etme, silinmesini isteme,
              islemeye itiraz etme ve veri tasinabilirligi gibi haklara sahipsiniz. Basvurularinizi
              info@exdonusum.com adresine iletebilirsiniz.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#100d0a] dark:text-white">7. Iletisim</h2>
            <p className="mt-3">
              Gizlilik politikasi hakkinda sorulariniz icin bizimle info@exdonusum.com e-posta adresi veya
              0 312 911 88 72 telefon numarasi uzerinden iletisime gecebilirsiniz.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
