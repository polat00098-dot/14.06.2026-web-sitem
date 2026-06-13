export interface DefaultBlogPost {
  id: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  desc: string;
  img?: string;
  icon?: string;
  content: string;
}

export const defaultBlogs: DefaultBlogPost[] = [
  {
    id: '1',
    category: 'Soru-Cevap',
    date: '13 Haziran 2026',
    readTime: '8 Dakika Okuma',
    title: 'Exproof Muayenesi Hakkında Sıkça Sorulan Sorular',
    desc: 'Exproof muayenesinin kapsamı, sıklığı ve raporlama süreçleri hakkında en çok sorulan sorulara net yanıtlar.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6wTbHc_SgIqYniTx0Cwbu_AU1PZdYqdOop7KEraI7yihlBsztotjiPNViDslcyEWrKbjlmT7r19yfoJ7CelPQ3AVFgjcJbpXsqseGIJwsKRMf3vJBw81793tdfbRpuVTkNMUHY2-aG9QuD93X907blE75_lfx9riiqQ3aekMw1pBkIjdiF72spvkCb_OrG38tvjm-_SVphCgc5eaWYJMoSBUjZYYcZ4VkS5c2bSSr_XfPXJuqeFhIInmCmL31MLrpGfbtXd59dJWd',
    content: `Exproof muayenesi, patlayıcı ortam bulunan işletmelerde kullanılan ekipmanların güvenliğini doğrulayan temel bir kontrol sürecidir. Doğru planlandığında hem yasal uygunluk sağlar hem de plansız duruş riskini azaltır.

Exproof Muayenesi Ne Sıklıkla Yapılmalı?
Muayene sıklığı, ekipmanın tipi, bulunduğu zone sınıfı ve işletme şartlarına göre değişir. Riskli alanlarda daha kısa periyotlar tercih edilmelidir.

Muayene Raporunda Neler Yer Alır?
Muayene raporunda uygunsuzluklar, risk seviyeleri, önerilen düzeltici faaliyetler ve doğrulama adımları yer alır. Bu doküman, denetimlerde işletmenin en güçlü dayanaklarından biridir.`
  },
  {
    id: '2',
    category: 'Teknik',
    date: '10 Haziran 2026',
    readTime: '7 Dakika Okuma',
    title: 'ATEX Zone Sınıflandırması Pratik Rehberi',
    desc: 'Zone 0, Zone 1 ve Zone 2 farklarını sahadan örneklerle anlattığımız pratik bir rehber.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6wTbHc_SgIqYniTx0Cwbu_AU1PZdYqdOop7KEraI7yihlBsztotjiPNViDslcyEWrKbjlmT7r19yfoJ7CelPQ3AVFgjcJbpXsqseGIJwsKRMf3vJBw81793tdfbRpuVTkNMUHY2-aG9QuD93X907blE75_lfx9riiqQ3aekMw1pBkIjdiF72spvkCb_OrG38tvjm-_SVphCgc5eaWYJMoSBUjZYYcZ4VkS5c2bSSr_XfPXJuqeFhIInmCmL31MLrpGfbtXd59dJWd',
    content: `Doğru zone sınıflandırması, doğru ekipman seçiminin başlangıç noktasıdır. Hatalı sınıflandırma hem güvenlik riski hem de gereksiz yatırım maliyeti doğurur.

Zone 0
Patlayıcı atmosferin sürekli veya uzun süre bulunduğu alanlardır. Ekipman seçiminde en yüksek koruma seviyeleri gerekir.

Zone 1 ve Zone 2
Zone 1 alanlarında patlayıcı atmosfer normal işletmede ara sıra oluşabilir. Zone 2 alanlarında ise yalnızca arıza veya kısa süreli durumlarda beklenir.`
  },
  {
    id: '3',
    category: 'Uygulama',
    date: '7 Haziran 2026',
    readTime: '6 Dakika Okuma',
    title: 'Exproof Kablo Rakoru Seçiminde 5 Kritik Kural',
    desc: 'Yanlış rakor seçimi kaynaklı riskleri azaltmak için sahada uygulanan 5 temel kural.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6wTbHc_SgIqYniTx0Cwbu_AU1PZdYqdOop7KEraI7yihlBsztotjiPNViDslcyEWrKbjlmT7r19yfoJ7CelPQ3AVFgjcJbpXsqseGIJwsKRMf3vJBw81793tdfbRpuVTkNMUHY2-aG9QuD93X907blE75_lfx9riiqQ3aekMw1pBkIjdiF72spvkCb_OrG38tvjm-_SVphCgc5eaWYJMoSBUjZYYcZ4VkS5c2bSSr_XfPXJuqeFhIInmCmL31MLrpGfbtXd59dJWd',
    content: `Kablo rakoru, exproof sistemin küçük ama kritik parçalarından biridir. Uygun olmayan rakorlar koruma bütünlüğünü bozabilir.

Zone ve Gaz Grubuna Uyum
Rakorun sertifikası, uygulama alanı ile birebir uyumlu olmalıdır.

Kablo Çapına Doğru Eşleşme
Rakorda ne aşırı sıkma ne de gevşeklik olmalıdır. Her ikisi de sızdırmazlığı bozar.

Montaj Torku
Üretici tork değerlerine uygun montaj yapılmalıdır. Sahada en sık yapılan hata burada görülür.`
  },
  {
    id: '4',
    category: 'Mevzuat',
    date: '4 Haziran 2026',
    readTime: '9 Dakika Okuma',
    title: 'PKD Dokümanı Hazırlarken Yapılan 7 Yaygın Hata',
    desc: 'Patlamadan Korunma Dokümanı hazırlanırken sık yapılan hataları ve doğru yaklaşımı adım adım anlattık.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6wTbHc_SgIqYniTx0Cwbu_AU1PZdYqdOop7KEraI7yihlBsztotjiPNViDslcyEWrKbjlmT7r19yfoJ7CelPQ3AVFgjcJbpXsqseGIJwsKRMf3vJBw81793tdfbRpuVTkNMUHY2-aG9QuD93X907blE75_lfx9riiqQ3aekMw1pBkIjdiF72spvkCb_OrG38tvjm-_SVphCgc5eaWYJMoSBUjZYYcZ4VkS5c2bSSr_XfPXJuqeFhIInmCmL31MLrpGfbtXd59dJWd',
    content: `PKD yalnızca bir formalite değildir; işletmenin patlama risk yönetimi planıdır. Kopyala-yapıştır dokümanlar sahadaki gerçek riskleri görünmez hale getirir.

En Sık Hatalar
Alan keşfi yapılmadan hazırlama, güncel olmayan kimyasal veri kullanımı, zone çizimlerinin prosesle uyumsuz olması ve personel eğitiminin dokümana yansıtılmaması en sık karşılaşılan hatalardır.

Doğru Yöntem
PKD, saha gözlemi, proses analizi, ekipman envanteri ve güncel mevzuat kontrolü ile birlikte hazırlanmalıdır.`
  },
  {
    id: '5',
    category: 'Bakım',
    date: '1 Haziran 2026',
    readTime: '6 Dakika Okuma',
    title: 'Muayene Sonrası Düzeltici Faaliyet Planı Nasıl Kurulur?',
    desc: 'Uygunsuzlukların kapanmasını hızlandıran, denetlenebilir bir düzeltici faaliyet planı için temel adımlar.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6wTbHc_SgIqYniTx0Cwbu_AU1PZdYqdOop7KEraI7yihlBsztotjiPNViDslcyEWrKbjlmT7r19yfoJ7CelPQ3AVFgjcJbpXsqseGIJwsKRMf3vJBw81793tdfbRpuVTkNMUHY2-aG9QuD93X907blE75_lfx9riiqQ3aekMw1pBkIjdiF72spvkCb_OrG38tvjm-_SVphCgc5eaWYJMoSBUjZYYcZ4VkS5c2bSSr_XfPXJuqeFhIInmCmL31MLrpGfbtXd59dJWd',
    content: `Muayene raporu sonrasında en değerli adım, uygunsuzlukları aksiyona dönüştürmektir. İyi planlanmış bir aksiyon listesi, güvenlik seviyesini kısa sürede yükseltir.

Önceliklendirme
Kritik riskler önce kapatılmalı, orta ve düşük riskler takvime bağlanmalıdır.

Sorumluluk Matrisi
Her madde için sorumlu kişi, hedef tarih ve doğrulama yöntemi net şekilde tanımlanmalıdır.

Doğrulama
Kapanan faaliyetlerin sahada gerçekten uygulandığı, tekrar muayene veya teknik doğrulama ile teyit edilmelidir.`
  },
  {
    id: '6',
    category: 'Operasyon',
    date: '29 Mayıs 2026',
    readTime: '7 Dakika Okuma',
    title: 'Exproof Ekipman Envanteri Nasıl Oluşturulur?',
    desc: 'Denetim ve bakım süreçlerini hızlandıran doğru envanter yapısını adım adım anlattık.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6wTbHc_SgIqYniTx0Cwbu_AU1PZdYqdOop7KEraI7yihlBsztotjiPNViDslcyEWrKbjlmT7r19yfoJ7CelPQ3AVFgjcJbpXsqseGIJwsKRMf3vJBw81793tdfbRpuVTkNMUHY2-aG9QuD93X907blE75_lfx9riiqQ3aekMw1pBkIjdiF72spvkCb_OrG38tvjm-_SVphCgc5eaWYJMoSBUjZYYcZ4VkS5c2bSSr_XfPXJuqeFhIInmCmL31MLrpGfbtXd59dJWd',
    content: `Doğru ekipman envanteri, exproof güvenlik yönetiminin temelidir. Hangi ekipmanın nerede olduğu ve hangi sertifikaya sahip olduğu net değilse, bakım ve denetim süreçleri dağınık ilerler.

Envanterde Neler Olmalı?
Ekipman tipi, marka-model, sertifika kodu, zone bilgisi, son muayene tarihi ve bir sonraki kontrol tarihi mutlaka kayıt altına alınmalıdır.

Sahada Etiketleme
Sahadaki etiketleme ile dijital kayıt birebir eşleşmeli; revizyon sonrası veriler anlık güncellenmelidir.`
  },
  {
    id: '7',
    category: 'Güvenlik',
    date: '26 Mayıs 2026',
    readTime: '6 Dakika Okuma',
    title: 'Patlayıcı Ortamlarda Sıcak Çalışma İzni Rehberi',
    desc: 'Kaynak, taşlama ve kesme gibi sıcak işler için güvenli izin sürecinin püf noktaları.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6wTbHc_SgIqYniTx0Cwbu_AU1PZdYqdOop7KEraI7yihlBsztotjiPNViDslcyEWrKbjlmT7r19yfoJ7CelPQ3AVFgjcJbpXsqseGIJwsKRMf3vJBw81793tdfbRpuVTkNMUHY2-aG9QuD93X907blE75_lfx9riiqQ3aekMw1pBkIjdiF72spvkCb_OrG38tvjm-_SVphCgc5eaWYJMoSBUjZYYcZ4VkS5c2bSSr_XfPXJuqeFhIInmCmL31MLrpGfbtXd59dJWd',
    content: `Sıcak çalışma faaliyetleri, patlayıcı ortam bulunan tesislerde en yüksek riskli operasyonlardan biridir. Bu nedenle izin süreçleri resmi ve denetlenebilir olmalıdır.

İzin Öncesi Kontroller
Gaz ölçümü, izolasyon, alan bariyeri ve yangın söndürme ekipmanlarının hazır olması zorunludur.

İş Sırasında İzleme
Çalışma boyunca sürekli gözetim yapılmalı, ölçüm sonuçları kayıt altına alınmalı ve risk değişiminde iş derhal durdurulmalıdır.`
  },
  {
    id: '8',
    category: 'Eğitim',
    date: '23 Mayıs 2026',
    readTime: '5 Dakika Okuma',
    title: 'ATEX Eğitiminde Personelin En Çok Zorlandığı 4 Konu',
    desc: 'Saha eğitimlerinden çıkan verilere göre personelin en çok zorlandığı teknik başlıklar.',
    img: '',
    content: `ATEX eğitimlerinde bazı konular teori-pratik farkı nedeniyle daha zor anlaşılır. Bu noktaları erken tespit etmek, eğitim etkinliğini ciddi şekilde artırır.

Zorlanılan Başlıklar
Zone yorumlama, ekipman kodlarının okunması, topraklama sürekliliği ve bakım sırasında koruma tipinin bozulmaması en sık zorlanılan alanlardır.

Çözüm Önerisi
Teori anlatımını kısa tutup saha simülasyonlarını artırmak, öğrenme kalıcılığını belirgin biçimde yükseltir.`
  },
  {
    id: '9',
    category: 'Teknik',
    date: '20 Mayıs 2026',
    readTime: '7 Dakika Okuma',
    title: 'Ex d, Ex e, Ex i Koruma Tipleri Arasındaki Farklar',
    desc: 'Sahada en çok karşılaşılan üç koruma tipini sade ve teknik olarak doğru biçimde karşılaştırdık.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6wTbHc_SgIqYniTx0Cwbu_AU1PZdYqdOop7KEraI7yihlBsztotjiPNViDslcyEWrKbjlmT7r19yfoJ7CelPQ3AVFgjcJbpXsqseGIJwsKRMf3vJBw81793tdfbRpuVTkNMUHY2-aG9QuD93X907blE75_lfx9riiqQ3aekMw1pBkIjdiF72spvkCb_OrG38tvjm-_SVphCgc5eaWYJMoSBUjZYYcZ4VkS5c2bSSr_XfPXJuqeFhIInmCmL31MLrpGfbtXd59dJWd',
    content: `Exproof ekipman seçiminde koruma tipi doğru okunmadığında hem güvenlik seviyesi düşer hem de bakım maliyeti artar.

Ex d (Alev Sızdırmaz)
Patlamayı muhafaza içinde tutar. Gövde bütünlüğü ve bağlantı toleransları kritik önemdedir.

Ex e (Artırılmış Emniyet)
Kıvılcım oluşumunu önlemeye odaklanır. Klemens ve bağlantı kalitesi doğrudan güvenliği etkiler.

Ex i (Kendinden Emniyetli)
Enerji seviyesini sınırlayarak tutuşturmayı engeller. Bariyer seçimi ve devre doğrulaması zorunludur.`
  },
  {
    id: '10',
    category: 'Denetim',
    date: '17 Mayıs 2026',
    readTime: '8 Dakika Okuma',
    title: 'İç Denetime Hazırlık: Exproof Sahada 1 Günlük Kontrol Planı',
    desc: 'İç denetim öncesinde bir günde uygulanabilecek pratik kontrol planı ve kontrol listesi.',
    img: '',
    content: `İç denetim öncesinde sahada sistematik bir ön kontrol yapmak, kritik uygunsuzlukların önceden kapanmasını sağlar.

Sabah: Belge ve Kayıt Kontrolü
Muayene raporları, bakım kayıtları, eğitim listeleri ve ekipman envanteri eşleştirilir.

Öğlen: Saha Turu
Etiketler, kablo girişleri, rakorlar, pano kapakları ve topraklama bağlantıları gözden geçirilir.

Akşam: Aksiyon Listesi
Bulunan uygunsuzluklar kritiklik seviyesine göre sıralanır ve sorumlulara tarihli görev ataması yapılır.`
  }
];