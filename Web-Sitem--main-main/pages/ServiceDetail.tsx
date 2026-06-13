import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSiteMedia } from '../hooks/useSiteMedia';
import { useServicesData } from '../hooks/useServicesData';

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const { heroBg } = useSiteMedia();
  const serviceItems = useServicesData();

  const currentService = serviceItems.find(item => item.id === serviceId);

  if (!currentService) {
    return (
      <main className="bg-[#181511]">
        <section className="py-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Hizmet Bulunamadı</h1>
            <button
              onClick={() => navigate('/hizmetlerimiz')}
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors"
            >
              Hizmetlere Dön
            </button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="relative flex min-h-[400px] flex-col items-center justify-center overflow-hidden py-16 lg:min-h-[500px]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#181511] via-[#181511]/90 to-[#181511]/70 z-10"></div>
          <div className="h-full w-full bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url("${heroBg}")`}}></div>
        </div>
        <div className="relative z-20 mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="flex size-20 items-center justify-center rounded-lg bg-primary/20 text-primary">
              <span className="material-symbols-outlined text-5xl">{currentService.icon}</span>
            </div>
            <div className="text-left">
              <span className="text-primary font-bold tracking-wider uppercase mb-2 block">Hizmet #{currentService.id}</span>
              <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">
                {currentService.title}
              </h1>
            </div>
          </div>
          <p className="max-w-2xl text-base font-normal leading-relaxed text-[#dcdcdc] sm:text-lg">
            {currentService.desc}
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#181511]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2 space-y-12">
              {currentService.image && (
                <div className="relative group overflow-hidden rounded-2xl h-96">
                  <img 
                    src={currentService.image} 
                    alt={currentService.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              )}

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Genel Bilgiler</h2>
                <p className="text-[#b9ab9d] text-lg leading-relaxed">
                  {currentService.secondaryDesc}
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Blog Yazısı</h2>
                <div className="text-[#b9ab9d] text-lg leading-relaxed prose prose-invert max-w-none">
                  {currentService.blogContent.split('\n').map((line, idx) => {
                    if (line.startsWith('## ')) {
                      return <h3 key={idx} className="text-2xl font-bold text-white mt-8 mb-4">{line.substring(3)}</h3>;
                    }
                    if (line.startsWith('### ')) {
                      return <h4 key={idx} className="text-xl font-bold text-primary mt-6 mb-3">{line.substring(4)}</h4>;
                    }
                    if (line.startsWith('**') && line.endsWith('**')) {
                      return <p key={idx} className="font-bold text-white my-2">{line.substring(2, line.length - 2)}</p>;
                    }
                    if (line.startsWith('✓ ')) {
                      return <p key={idx} className="text-green-400 my-2">✓ {line.substring(2)}</p>;
                    }
                    if (line.startsWith('- ')) {
                      return <p key={idx} className="text-[#b9ab9d] my-1 ml-4">• {line.substring(2)}</p>;
                    }
                    if (line.startsWith('1. ') || line.startsWith('2. ') || line.startsWith('3. ') || line.startsWith('4. ') || line.startsWith('5. ') || line.startsWith('6. ')) {
                      return <p key={idx} className="text-[#b9ab9d] my-1 ml-4">{line}</p>;
                    }
                    if (line.trim() === '') {
                      return <div key={idx} className="h-2"></div>;
                    }
                    return <p key={idx} className="text-[#b9ab9d] my-3 leading-relaxed">{line}</p>;
                  })}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Hizmet Kapsamı</h2>
                <ul className="space-y-4">
                  {currentService.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 border border-primary/20 hover:border-primary/50 transition-colors">
                      <span className="material-symbols-outlined text-primary text-2xl flex-shrink-0">check_circle</span>
                      <span className="text-[#b9ab9d] text-lg">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="sticky top-20 p-8 rounded-2xl border border-surface-border bg-surface-dark/50 backdrop-blur">
                <h3 className="text-2xl font-bold text-white mb-6">Bu Hizmeti Talep Edin</h3>
                <p className="text-sm text-[#b9ab9d] mb-6">
                  Detaylı bilgi almak ve hizmetlerimizi talep etmek için bizimle iletişime geçin.
                </p>
                <button
                  onClick={() => navigate('/iletisim')}
                  className="w-full px-6 py-3 bg-gradient-to-r from-primary to-orange-400 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 mb-4"
                >
                  Teklif İsteyin
                </button>
                <button
                  onClick={() => navigate('/hizmetlerimiz')}
                  className="w-full px-6 py-3 border border-primary/50 text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors"
                >
                  Diğer Hizmetler
                </button>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-surface-border">
            <h2 className="text-3xl font-bold text-white mb-8">Diğer Hizmetlerimiz</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {serviceItems
                .filter(item => item.id !== serviceId)
                .slice(0, 4)
                .map((item) => (
                  <div
                    key={item.id}
                    onClick={() => navigate(`/hizmetlerimiz/${item.id}`)}
                    className="group cursor-pointer p-6 rounded-xl border border-surface-border bg-surface-dark hover:border-primary/50 hover:bg-primary/5 transition-all"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <span className="material-symbols-outlined text-primary text-2xl">{item.icon}</span>
                      <span className="text-sm font-bold text-primary">Hizmet #{item.id}</span>
                    </div>
                    <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetail;
