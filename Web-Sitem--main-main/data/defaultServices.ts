export interface ServiceItem {
  id: string;
  title: string;
  header: string;
  desc: string;
  secondaryDesc: string;
  icon: string;
  bullets: string[];
  image?: string;
  blogContent?: string;
}

export const defaultServices: ServiceItem[] = [
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
    ],
    image: "https://images.unsplash.com/photo-1581092917056-0c4c3acd3789?w=1200&q=80",
    blogContent: `## Exproof Ekipmanların Periyodik Kontrolünün Önemi

Endüstriyel tesislerde patlayıcı ortamlar, elektrik ekipmanlarından kaynaklanan tutuşturma kaynaklarının kontrolüyle bertaraf edilmelidir. Bu bağlamda, exproof ekipmanlar kritik bir rol oynar. Ancak, bu ekipmanlar zamanla aşınır ve işlevini yitirmesi sonucunda, patlama riskleri önemli ölçüde artabilir.

### EN 60079-17 Standardı

Uluslararası standart EN 60079-17, exproof ekipmanların muayene ve test prosedürlerini detaylıca tanımlar. Bu standart çerçevesinde, ekipmanlar periyodik olarak kontrol edilmeli ve gerekli testlere tabi tutulmalıdır.

Bizim sunduğumuz periyodik kontrol hizmeti, aşağıdaki aşamaları içerir:

**1. Görsel Muayene (Visual Inspection)**
- Dış hasar ve aşınma izleri
- Bağlantı sıkılıkları
- Kablo ve konnektörlerin durum kontrolü

**2. Yakın Muayene (Close Examination)**
- Koruma mekanizmalarının işlevselliği
- İçsel aşınma ve hasarlar
- Contaların ve ara yüzeylerin kontrolü

**3. Detaylı Muayene (Detailed Examination)**
- Elektriksel testler
- Mekanik uygunluk testleri
- Termografi analizi

### Raporlama ve Belgelendirme

Tüm kontrol bulguları, EN 60079-17 standardına uygun olarak detaylı raporlara kaydedilir. Bu raporlar, ekipmanların uygunluğu hakkında resmi belgeler niteliğindedir ve yasal gereklilikler açısından önem taşır.

### Avantajlar

✓ Patlama risklerinin erken tespit edilmesi
✓ Ekipman ömrünün uzatılması
✓ Yasal uyumluluğun sağlanması
✓ Sigorta muhasebesi açısından kanıt
✓ Çalışan güvenliğinin artırılması`
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
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
    blogContent: `## Eğitim Yoluyla Güvenlik Kültürü Oluşturma

İnsan faktörü, endüstriyel güvenlik açısından oldukça kritiktir. Doğru eğitim almış personel, olası riskleri önceden fark edebilir ve uygun corrective action'ları alabilir.

### Eğitim Program Modülleri

**Modül 1: Exproof Ekipmanlar ve Sınıflandırma**
- Exproof tipi ve koruma mekanizmaları
- Koruma derecesi (IP, IK) nedir?
- Sertifika kodları nasıl okunur?

**Modül 2: Seçim Kriterleri**
- Tesis koşullarına uygun ekipman seçimi
- Maliyet-fayda analizi
- Yedek parça ve servis olanakları

**Modül 3: Montaj ve Kurulum**
- Standartlara uygun montaj prosedürleri
- Kablo glend bağlantıları
- Topraklama ve güvenlik ek donanımları

**Modül 4: Bakım ve Onarım**
- Rutin bakım işlemleri
- Arıza bulma ve teşhis
- Parça değişimi prosedürleri

### Uygulamalı Çalışmalar

Eğitim seansları %50 teorik, %50 pratik yapılır. Katılımcılar gerçek ekipmanlarla çalışma fırsatı bulurlar ve yaşam boyu deneyim kazanırlar.`
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
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
    blogContent: `## ATEX Direktifi ve Patlayıcı Ortamlar

ATEX, "Directive 2014/34/EU - Patlayıcı Ortamlarda Kullanılmak Üzere Tasarlanan Cihazlar" anlamına gelir. Bu direktif, Avrupa Birliği üyesi ülkelerde patlayıcı ortamlar için gerekli güvenlik standartlarını belirler.

### Patlama Üçgeni: Tehlikenin Temeli

Bir patlamanın gerçekleşmesi için üç faktörün bir arada bulunması gerekir:

1. **Patlayıcı Madde**: Gaz, buhar, toz veya lif
2. **Oksijen**: Hava ortamında doğal olarak bulunur
3. **Tutuşturma Kaynağı**: Isı, statik elektrik, mekanik çarpışma vb.

Bu üç faktörden herhangi birini kontrol etmek, patlamayı önlemeye yardımcı olur.

### Zone Sınıflandırması

Patlayıcı ortamlar, tehlike sıklığına göre sınıflandırılır:

**Zone 0**: Patlayıcı atmosferin normal çalışma sırasında mevcut olduğu alan
**Zone 1**: Patlayıcı atmosferin istisnai durumlarda oluşabileceği alan
**Zone 2**: Patlayıcı atmosferin çok nadir veya çok kısa sürede oluşabileceği alan

### ATEX Eğitiminin Hedefleri

✓ Çalışanların patlama risklerini anlaması
✓ Güvenli çalışma uygulamalarının benimsenmesi
✓ Hızlı ve doğru karar verebilme yeteneği
✓ İş güvenliği kültürünün güçlendirilmesi`
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
    ],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&q=80",
    blogContent: `## Patlamadan Korunma Dokümanı (PKD) Nedir?

Patlamadan Korunma Dokümanı (PKD), patlayıcı ortamların bulunduğu işletmelerin hazırlaması gereken yasal bir belgedir. Bu dokümanda, işletmedeki tüm patlama riskleri tanımlanır ve bu riskleri yönetmek için alınacak tedbirler detaylıca açıklanır.

### PKD'nin Kapsamı

**1. Tehlikeli Bölge Sınıflandırması**
- Zone 0, Zone 1 ve Zone 2 alanlarının belirlenmesi
- İlgili planların hazırlanması
- Kaynakların ve riskli alanların tanımlanması

**2. Patlayıcı Madde Analizi**
- Kullanılan kimyasalların özellikleri
- Patlama hızı ve basıncı
- Tutuşma sıcaklığı ve diğer kritik parametreler

**3. Tutuşturma Kaynakları**
- Elektrik kaynakları
- Mekanik çarpışmalar
- Statik elektrik
- Isıl kaynaklar

**4. Teknik Tedbirler**
- Exproof ekipmanların seçimi ve kurulması
- Elektrik sistemi tasarımı
- Topraklama ve kapasitif geçişler
- Ventilasyon sistemleri

**5. Organizasyonel Tedbirler**
- Personel eğitimi
- Bakım ve kontrol prosedürleri
- İşletme sırasında alınacak önlemler
- Acil durum prosedürleri

### PKD Hazırlama Süreci

EX Dönüşüm Mühendislik tarafından yürütülen PKD hazırlama süreci:

1. **Mevcut Durum Analizi**: Tesisinin yapısı, prosesi ve var olan risklerin belirlenmesi
2. **Tehlike Analizi**: Patlayıcı madde ve tutuşturma kaynaklarının tanımlanması
3. **Risk Değerlendirmesi**: Her tehlikeli alanın risk seviyesinin belirlenmesi
4. **Tedbirler Planlama**: Riskleri azaltmak için teknik ve organizasyonel tedbirler
5. **Dokümantasyon**: Tüm bulguların ve tedbirlerin belgelendirilmesi
6. **Personel Bilgilendirmesi**: Personele PKD'nin içeriğinin sunulması ve eğitimi

### Yasal Zorunluluk

Türkiye'de, Çalışma Bakanlığı tarafından yayınlanan yönetmelikler, patlayıcı ortamların bulunduğu işletmelerin bir PKD hazırlamasını zorunlu kılmaktadır. Bu belge, işletme açısından ciddi bir yasal sorumluluğu karşılamaktadır.`
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
    ],
    image: "https://images.unsplash.com/photo-1581092917692-b2ecb2171659?w=1200&q=80",
    blogContent: `## Exproof Ekipman Seçimi: Teknik ve Ekonomik Perspektif

Patlayıcı ortamlar için uygun exproof ekipmanları seçmek, sadece teknik bir değil aynı zamanda stratejik bir karar olmalıdır. Yanlış seçim, hem çalışan güvenliğini tehdit eder hem de işletme bütçesine olumsuz yansır.

### Seçim Kriterleri

**1. Proses Parametreleri**
- Ortam sıcaklığı (T sınıfı)
- Kullanılan gaz veya toz türü (grup)
- Patlama tehdidinin sıklığı (zone)

**2. Teknik Özellikler**
- Koruma derecesi (IP değeri)
- Mekanik dayanıklılık
- Elektriksel özellikleri

**3. Ekonomik Faktörler**
- İnitial investment (ekipman maliyeti)
- Operational cost (işletme ve bakım maliyeti)
- Lifecycle cost (ürünün tüm yaşam döngüsündeki maliyeti)

### EN 60079-14 Montaj Standartları

Seçilen exproof ekipmanların kurulumu, EN 60079-14 standardına uygun olarak yapılmalıdır. Bu standart, aşağıdaki konuları kapsamaktadır:

- Kurulum yerleri ve mesafeler
- Kablo rutları ve koruması
- Topraklama ve eşzamanlı bağlantılar
- Kontrol ve bakım olanakları

### Mühendislik Danışmanlığımız

EX Dönüşüm Mühendislik olarak, aşağıdaki hizmetleri sunmaktayız:

1. **Teknik Analiz**: Tesisinizin gereksinimlerinin detaylıca analiz edilmesi
2. **Seçim ve Tasarım**: En uygun ekipmanların seçimi ve kurulum tasarımı
3. **Tedarik Desteği**: Uygun tedarikçiler ile iletişim
4. **Kurulum Denetimi**: Kurulumun standartlara uygun olarak yapılması
5. **Devreye Alma**: Ekipmanların test ve devreye alma işlemleri`
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
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
    blogContent: `## Muayene Sonrası Aksiyonların Yönetimi

Muayene raporları tamamlandıktan sonra, belirtilen eksikliklerin giderilmesi önemli bir aşamadır. Bu sürecin sistematik ve etkili bir şekilde yönetilmesi, işletmenin güvenlik hedeflerine ulaşmasını sağlar.

### Uygunsuzlukların Sınıflandırılması

Muayene sırasında tespit edilen uygunsuzluklar, şiddet seviyelerine göre sınıflandırılır:

**Critical (Kritik)**: İmmediate action gerekli
- Doğrudan patlama riski oluşturan durumlar
- Kısa sürede (günler) çözülmesi gereken sorunlar

**Major (Önemli)**: Planlanmış action gerekli
- Standartlara olan uyumsuzluklar
- Orta dönemde (haftalar) çözülmesi gereken sorunlar

**Minor (Küçük)**: Rutin bakım sırasında çözülebilir
- Teknik açıdan önemli olmayan eksiklikler
- Düzenli bakım sırasında giderilecek sorunlar

### Aksiyon Planlaması

Muayene sonrası, aşağıdaki adımlar sistematik olarak uygulanır:

1. **Problem Tanımı**: Tespit edilen uygunsuzluğun ayrıntılı tanımı
2. **Sebep Analizi**: Sorunun kök nedeninin belirlenmesi
3. **Çözüm Tanımı**: Sorunu çözmek için gerekli tedbirler
4. **Kaynak Planlama**: Gerekli insan, malzeme ve zaman kaynakları
5. **Risk Yönetimi**: Çözüm sırasında ortaya çıkabilecek yeni risklerin tanımlanması

### Süreç Takibi ve Verifikasyon

Düzeltici faaliyetler tamamlandıktan sonra, aşağıdaki kontroller yapılır:

- **Uygunluk Kontrolü**: Düzeltici faaliyetin sorunu gerçekten çözdüğünün kontrol edilmesi
- **Belgelendirme**: Yapılan düzeltmelerin resmi olarak belgelenmesi
- **Kalıcılık Kontrolü**: Çözümlenen sorunun tekrar ortaya çıkmaması için kontrol mekanizmaları

### EX Dönüşüm'ün Danışmanlık Hizmeti

Muayene sonrası, EX Dönüşüm Mühendislik tarafından sağlanan danışmanlık hizmeti:

✓ Aksiyon planının hazırlanması ve iyileştirilmesi
✓ Uygunsuzlukların giderimi için teknik desteği
✓ Proje yönetimi ve süreç takibi
✓ Düzeltici faaliyetlerin doğrulanması
✓ Nihai rapor hazırlanması ve belgelendirilmesi`
  }
];