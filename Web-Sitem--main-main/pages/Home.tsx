
import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleGenAI } from "@google/genai";
import { useSiteMedia } from '../hooks/useSiteMedia';
import { useServicesData } from '../hooks/useServicesData';

interface Partner {
  id: string | number;
  name: string;
  category: string;
  logo?: string;
}

const Home: React.FC = () => {
  const { heroBg, aboutImg } = useSiteMedia();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [aiResult, setAiResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [partners, setPartners] = useState<Partner[]>([]);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const serviceItems = useServicesData();

  useEffect(() => {
    fetch('/api/data')
      .then(r => r.json())
      .then(data => { if (data.partners) setPartners(data.partners); })
      .catch(() => {});
  }, []);

  const getFallbackLogo = (name: string) => {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=27211c&color=df7b11&size=180&bold=true&font-size=0.35`;
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleInquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() && !selectedImage) return;

    setIsLoading(true);
    setAiResult(null);

    try {
      // Create a fresh instance to use the latest API key
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const parts: any[] = [{ text: query || "Lütfen bu görseldeki exproof ekipman bilgilerini ve sertifika detaylarını analiz et." }];
      
      if (selectedImage) {
        const base64Data = selectedImage.split(',')[1];
        parts.push({
          inlineData: {
            data: base64Data,
            mimeType: "image/jpeg"
          }
        });
      }

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: { parts },
        config: {
          systemInstruction: `Sen EX Dönüşüm Mühendislik için çalışan profesyonel bir ATEX ve Exproof Sertifika Uzmanısın. 
          Kullanıcılar sana metin yazabilir veya ekipman etiketinin/sertifikasının fotoğrafını gönderebilir.
          Senin görevin:
          1. Görseldeki tüm teknik kodları (örn: II 2G Ex db IIC T6 Gb) ve sertifika numaralarını yüksek doğrulukla tespit et.
          2. Bu kodların her bir parçasını (Grup, Kategori, Koruma Tipi, Gaz Grubu, Sıcaklık Sınıfı) detaylıca açıkla.
          3. Ekipmanın uygunluğunu değerlendir, potansiyel riskleri ve montaj gereksinimlerini belirt.
          4. Yanıtlarını teknik olarak hatasız, güven verici ve profesyonel bir dille ver.
          5. Yanıtın sonunda mutlaka "Bu analiz bir ön bilgilendirmedir. Resmi denetim ve periyodik kontrol süreçleri için EX Dönüşüm mühendislerimizle iletişime geçiniz." uyarısını ekle.`,
          temperature: 0.7,
        },
      });

      setAiResult(response.text || "Analiz raporu oluşturulamadı.");
    } catch (error: any) {
      console.error("AI Inquiry Error:", error);
      if (error.message?.includes("Requested entity was not found")) {
        setAiResult("API Anahtarı bulunamadı veya projeniz silinmiş. Lütfen 'Anahtar Seç' butonuna tıklayarak tekrar bir anahtar seçin.");
      } else {
        setAiResult("Analiz sırasında bir hata oluştu. Lütfen bağlantınızı ve API anahtarınızı kontrol edin.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative flex min-h-[600px] flex-col items-center justify-center overflow-hidden py-20 lg:min-h-[750px]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#181511] via-[#181511]/80 to-[#181511]/60 z-10"></div>
          <div className="h-full w-full bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url("${heroBg}")`}}></div>
        </div>
        <div className="relative z-20 mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 text-center sm:px-6 lg:px-8">
          <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            ATEX ve Exproof <br className="hidden sm:block"/>
            Çözümlerinde <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Uzman Mühendislik</span>
          </h1>
          <p className="max-w-2xl text-base font-normal leading-relaxed text-[#dcdcdc] sm:text-lg md:text-xl">
            Endüstriyel güvenliğiniz için sertifikalı mühendislik çözümleri. Standartların ötesinde güvenlik anlayışı ile tesisinizi geleceğe hazırlayın.
          </p>
          <div className="flex flex-col w-full gap-4 sm:flex-row sm:w-auto sm:justify-center">
            <Link to="/hizmetlerimiz" className="flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-primary px-8 text-base font-bold text-white transition-all hover:bg-primary-hover hover:scale-105">
              <span>Hizmetlerimizi İnceleyin</span>
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </Link>
            <Link to="/iletisim" className="flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-8 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/40">
              <span>Bize Ulaşın</span>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#181511] to-transparent z-20"></div>
      </section>

      {partners.length > 0 && (
        <section className="relative overflow-hidden border-y border-[#393128] bg-[#1b1713] py-10">
          <div className="mx-auto mb-6 max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-sm font-bold uppercase tracking-widest text-primary">Çalıştığımız Firmalar</h2>
              <Link to="/firmalar" className="text-xs font-bold uppercase tracking-wider text-[#b9ab9d] hover:text-white transition-colors">
                Tumunu Gor
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#1b1713] to-transparent sm:w-24"></div>
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#1b1713] to-transparent sm:w-24"></div>

            <div className="flex w-max animate-[reference-marquee_20s_linear_infinite] gap-6 px-6" style={{willChange:'transform'}}>
              {[...partners, ...partners].map((partner, idx) => (
                <div
                  key={`${partner.id}-${idx}`}
                  className="h-28 w-28 shrink-0 rounded-2xl border border-surface-border bg-white overflow-hidden transition-all hover:-translate-y-1 hover:border-primary/40"
                >
                  <img
                    src={partner.logo || getFallbackLogo(partner.name)}
                    alt={partner.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* AI Inquiry Section */}
      <section className="relative py-24 bg-[#100d0a] overflow-hidden">
        <div className="absolute left-0 top-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary rounded-full blur-[160px]"></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                <span className="material-symbols-outlined text-sm">psychology</span>
                %100 Yakın Cevaplar
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                Görsel Destekli <br/> <span className="text-primary">Akıllı Analiz</span>
              </h2>
              <p className="text-[#b9ab9d] text-lg leading-relaxed mb-8 max-w-xl">
                Ekipman etiketinin fotoğrafını yükleyin. Yapay zekamız görseli tarayıp teknik standartlara uygunluğu saniyeler içinde raporlasın.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="material-symbols-outlined text-primary text-3xl">upload_file</span>
                  <div>
                    <h4 className="text-white font-bold text-sm">Hızlı Görsel Yükleme</h4>
                    <p className="text-xs text-[#b9ab9d]">Etiket fotoğrafını yükleyerek anında analiz alın.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="material-symbols-outlined text-primary text-3xl">analytics</span>
                  <div>
                    <h4 className="text-white font-bold text-sm">Derinlemesine Analiz</h4>
                    <p className="text-xs text-[#b9ab9d]">Zone, Koruma Tipi ve Sıcaklık sınıfı yorumu.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">
                <form onSubmit={handleInquiry} className="space-y-6">
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleImageChange} 
                    ref={fileInputRef}
                    className="hidden"
                  />
                  
                  {/* Image Upload Area */}
                  {!selectedImage ? (
                    <button 
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full border-2 border-dashed border-white/20 rounded-xl p-12 flex flex-col items-center gap-4 hover:border-primary/50 hover:bg-white/5 transition-all text-white/40 group"
                    >
                      <span className="material-symbols-outlined text-6xl group-hover:scale-110 transition-transform text-primary/60">add_photo_alternate</span>
                      <div className="text-center">
                        <span className="block text-sm font-bold text-white/80">Ekipman Etiketi Yükle</span>
                        <span className="text-xs opacity-50">PNG, JPG veya JPEG (Max 5MB)</span>
                      </div>
                    </button>
                  ) : (
                    <div className="relative rounded-xl overflow-hidden border border-primary/30 h-64 bg-black group">
                      <img src={selectedImage} alt="Analiz Edilecek Görsel" className="w-full h-full object-contain" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white text-xs font-bold bg-primary px-3 py-1 rounded-full">Görsel Seçildi</span>
                      </div>
                      <button 
                        type="button"
                        onClick={removeImage}
                        className="absolute top-3 right-3 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors shadow-lg z-10"
                      >
                        <span className="material-symbols-outlined text-sm leading-none">close</span>
                      </button>
                    </div>
                  )}

                  <div className="relative">
                    <textarea
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Ek bir sorunuz var mı? (Örn: Tesisimde Zone 1 için uygun mu?)"
                      className="w-full h-24 bg-[#181511] border border-surface-border rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    disabled={isLoading || (!query.trim() && !selectedImage)}
                    type="submit"
                    className="w-full py-4 bg-primary hover:bg-primary-hover disabled:bg-surface-border disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 group shadow-xl shadow-primary/20"
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Analiz Ediliyor...</span>
                      </>
                    ) : (
                      <>
                        <span>AI Analizini Başlat</span>
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">auto_awesome</span>
                      </>
                    )}
                  </button>
                </form>

                {aiResult && (
                  <div className="mt-8 p-6 rounded-xl bg-primary/10 border border-primary/20 animate-in fade-in zoom-in duration-500">
                    <div className="flex items-center gap-2 text-primary font-bold text-sm mb-4">
                      <span className="material-symbols-outlined text-base">verified</span>
                      Sertifika Analiz Raporu
                    </div>
                    <div className="text-white/90 text-sm leading-relaxed whitespace-pre-wrap font-medium">
                      {aiResult}
                    </div>
                    <div className="mt-6 pt-6 border-t border-primary/20 flex items-center justify-between">
                      <Link to="/iletisim" className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest hover:underline">
                        Mühendis Görüşü Al
                        <span className="material-symbols-outlined text-xs">arrow_forward</span>
                      </Link>
                      <button onClick={() => setAiResult(null)} className="text-white/30 hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-lg">delete</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid logic ... */}
      <section className="relative py-20 bg-[#181511]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="text-primary font-bold uppercase tracking-wider text-sm mb-2">Hizmetlerimiz</h2>
              <h3 className="text-3xl font-bold text-white md:text-4xl">Profesyonel ATEX Çözümleri</h3>
              <p className="mt-4 text-[#b9ab9d] text-lg">Tesisinizin güvenliğini en üst düzeye çıkarmak için sunduğumuz kapsamlı mühendislik hizmetleri.</p>
            </div>
            <Link className="group flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-primary-hover" to="/hizmetlerimiz">
              Tüm Hizmetleri Gör
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_right_alt</span>
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceItems.map((service) => (
              <div 
                key={service.id}
                onClick={() => navigate(`/hizmetlerimiz/${service.id}`)}
                className="group relative cursor-pointer flex flex-col gap-4 rounded-xl border border-surface-border bg-surface-dark p-8 transition-all hover:border-primary/50 hover:shadow-[0_0_30px_rgba(223,123,17,0.1)] hover:-translate-y-1"
              >
                <div className="flex size-14 items-center justify-center rounded-lg bg-[#322a24] text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                </div>
                <div>
                  <h4 className="mb-2 text-xl font-bold text-white group-hover:text-primary transition-colors">{service.title}</h4>
                  <p className="text-sm text-[#b9ab9d] leading-relaxed">{service.desc}</p>
                </div>
                <div className="mt-auto pt-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#181511] text-primary opacity-0 transition-all group-hover:opacity-100">
                    <span className="material-symbols-outlined text-sm">arrow_outward</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section logic ... */}
      <section className="relative overflow-hidden bg-surface-dark py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="flex flex-col gap-8 order-2 lg:order-1">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="h-px w-12 bg-primary"></span>
                  <span className="text-sm font-bold uppercase tracking-wider text-primary">Hakkımızda</span>
                </div>
                <h2 className="text-3xl font-black leading-tight text-white md:text-5xl">
                  Standartların Ötesinde <br/> <span className="text-primary">Güvenlik</span>
                </h2>
                <p className="text-lg leading-relaxed text-[#b9ab9d]">
                  EX Dönüşüm Mühendislik olarak, endüstriyel tesislerin güvenliğini en üst düzeye çıkarmak için uluslararası standartlarda hizmet veriyoruz. Uzman mühendis kadromuzla, tesisinizin ATEX direktiflerine tam uyumunu sağlıyoruz.
                </p>
              </div>
              <Link to="/hakkimizda" className="mt-4 w-fit rounded-lg bg-primary px-8 py-3.5 text-sm font-bold text-white transition-all hover:bg-primary-hover hover:shadow-lg">
                Hakkımızda Daha Fazla
              </Link>
            </div>
            <div className="relative order-1 lg:order-2 group">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-tr from-primary/20 to-transparent opacity-50 blur-lg transition-opacity group-hover:opacity-75"></div>
              <div className="relative overflow-hidden rounded-xl border border-surface-border shadow-2xl">
                <img 
                  alt="Industrial engineer" 
                  className="h-[500px] w-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src={aboutImg} 
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes reference-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </main>
  );
};

export default Home;

