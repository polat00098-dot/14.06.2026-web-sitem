import React from 'react';

const TermsOfUse: React.FC = () => {
  return (
    <main className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white">
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-[#100d0a] dark:text-white sm:text-4xl">
          Kullanim Sartlari
        </h1>
        <p className="mt-4 text-sm text-[#6b6258] dark:text-[#b9ab9d]">
          Son guncelleme: 22 Nisan 2026
        </p>

        <div className="mt-10 space-y-8 text-base leading-7 text-[#2f2922] dark:text-[#ddd3c7]">
          <section>
            <h2 className="text-xl font-bold text-[#100d0a] dark:text-white">1. Kapsam</h2>
            <p className="mt-3">
              Bu kullanim sartlari, EX Donusum Muhendislik web sitesini ziyaret eden tum kullanicilar icin
              gecerlidir. Siteyi kullanarak asagidaki kosullari kabul etmis sayilirsiniz.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#100d0a] dark:text-white">2. Bilgi Amacli Icerik</h2>
            <p className="mt-3">
              Sitede yer alan icerikler genel bilgilendirme amaclidir. Teknik kararlarin alinmasinda nihai
              baglayici belge olarak degerlendirilmemeli, gerekli durumlarda uzman gorusu alinmalidir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#100d0a] dark:text-white">3. Fikri Mulkiyet</h2>
            <p className="mt-3">
              Sitedeki metin, gorsel, logo ve diger iceriklerin tum haklari aksi belirtilmedikce EX Donusum
              Muhendislik'e aittir. Izinsiz kopyalama, cogaltma veya ticari kullanim yapilamaz.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#100d0a] dark:text-white">4. Kullanici Yukumlulukleri</h2>
            <p className="mt-3">
              Kullanici, siteyi hukuka ve genel ahlaka uygun sekilde kullanmakla yukumludur. Sisteme zarar
              verebilecek veya hizmeti kesintiye ugratabilecek girisimlerde bulunulamaz.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#100d0a] dark:text-white">5. Ucuncu Taraf Baglantilar</h2>
            <p className="mt-3">
              Site uzerinden ucuncu taraf sitelere yonlendiren baglantilar bulunabilir. Bu sitelerin icerigi,
              guvenligi ve gizlilik uygulamalarindan EX Donusum Muhendislik sorumlu degildir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#100d0a] dark:text-white">6. Sorumlulugun Sinirlandirilmasi</h2>
            <p className="mt-3">
              Siteye erisimden veya iceriklerin kullanilmasindan dogabilecek dogrudan ya da dolayli
              zararlardan, yasal olarak izin verilen en genis kapsamda sorumluluk kabul edilmez.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#100d0a] dark:text-white">7. Degisiklik Hakki</h2>
            <p className="mt-3">
              EX Donusum Muhendislik, kullanim sartlarini onceden bildirim yapmaksizin guncelleme hakkini
              sakli tutar. Guncel metin bu sayfada yayinlandigi andan itibaren gecerlilik kazanir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#100d0a] dark:text-white">8. Iletisim</h2>
            <p className="mt-3">
              Kullanim sartlariyla ilgili sorulariniz icin info@exdonusum.com adresinden bizimle iletisime
              gecebilirsiniz.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
};

export default TermsOfUse;
