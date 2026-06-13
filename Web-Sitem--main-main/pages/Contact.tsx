import React from 'react';
import { useSiteMedia } from '../hooks/useSiteMedia';

const Contact: React.FC = () => {
  const { heroBg } = useSiteMedia();
  const address = "Kızılırmak Mah. Dumlupınar Bulvarı Yda Center No:9A İç Kapı No:158 Çankaya/Ankara";

  return (
    <main>
      <section className="relative flex min-h-[350px] flex-col items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#181511] via-[#181511]/80 to-[#181511]/60 z-10"></div>
          <div className="h-full w-full bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url("${heroBg}")`}}></div>
        </div>
        <div className="relative z-20 mx-auto flex max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black text-white sm:text-5xl md:text-7xl">
            İletişim <span className="text-primary">Bilgilerimiz</span>
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-[#dcdcdc] text-xl font-medium">
            Uzman mühendislik çözümlerimiz için doğrudan bizimle iletişime geçebilirsiniz.
          </p>
        </div>
      </section>

      <section className="bg-background-dark py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="group relative flex flex-col items-center rounded-2xl border border-surface-border bg-surface-dark p-10 text-center transition-all hover:border-primary/50 hover:shadow-[0_0_30px_rgba(223,123,17,0.1)]">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <span className="material-symbols-outlined text-3xl">call</span>
              </div>
              <h3 className="mb-4 text-xl font-bold text-white uppercase tracking-wider">Telefon</h3>
              <p className="mb-6 text-text-secondary text-sm">Mesai saatleri içerisinde bize ulaşabilirsiniz.</p>
              <a className="text-2xl font-extrabold text-white transition-colors hover:text-primary" href="tel:+903129118872">0 312 911 88 72</a>
            </div>
            <div className="group relative flex flex-col items-center rounded-2xl border border-surface-border bg-surface-dark p-10 text-center transition-all hover:border-primary/50 hover:shadow-[0_0_30px_rgba(223,123,17,0.1)]">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <span className="material-symbols-outlined text-3xl">mail</span>
              </div>
              <h3 className="mb-4 text-xl font-bold text-white uppercase tracking-wider">E-posta</h3>
              <p className="mb-6 text-text-secondary text-sm">7/24 mesajlarınızı gönderebilirsiniz.</p>
              <a className="text-2xl font-extrabold text-white transition-colors hover:text-primary break-all" href="mailto:info@exdonusum.com">info@exdonusum.com</a>
            </div>
            <div className="group relative flex flex-col items-center rounded-2xl border border-surface-border bg-surface-dark p-10 text-center transition-all hover:border-primary/50 hover:shadow-[0_0_30px_rgba(223,123,17,0.1)]">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <span className="material-symbols-outlined text-3xl">location_on</span>
              </div>
              <h3 className="mb-4 text-xl font-bold text-white uppercase tracking-wider">Adres</h3>
              <p className="mb-6 text-text-secondary text-sm">YDA Center Ofisimiz</p>
              <p className="text-lg font-bold text-white leading-snug">
                {address}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
