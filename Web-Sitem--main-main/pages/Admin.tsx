
import React, { useState, useEffect, useRef } from 'react';
import { notifySiteMediaUpdated } from '../hooks/useSiteMedia';
import { defaultServices, type ServiceItem } from '../data/defaultServices';
import { defaultBlogs } from '../data/defaultBlogs';
import { loadSiteData, saveSiteData } from '../lib/siteData';

interface Partner {
  id: string;
  name: string;
  category: string;
  logo?: string;
}

interface BlogPost {
  id: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  desc: string;
  img?: string;
  content?: string;
}

const emptyServiceForm = {
  id: '',
  title: '',
  header: '',
  desc: '',
  secondaryDesc: '',
  icon: 'engineering',
  bulletsText: '',
  image: '',
  blogContent: '',
};

const Admin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthChecking, setIsAuthChecking] = useState(true);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'blogs' | 'services' | 'clients' | 'images' | 'medya' | 'settings'>('blogs');

  const editLogoRef = useRef<HTMLInputElement>(null);
  const editBlogImgRef = useRef<HTMLInputElement>(null);
  const editServiceImgRef = useRef<HTMLInputElement>(null);
  const [editingPartnerId, setEditingPartnerId] = useState<string | null>(null);
  const [editingBlogId, setEditingBlogId] = useState<string | null>(null);
  const [editingServiceImageId, setEditingServiceImageId] = useState<string | null>(null);

  const [siteLogo, setSiteLogo] = useState('');
  const [siteHeroBg, setSiteHeroBg] = useState('');
  const [siteAboutImg, setSiteAboutImg] = useState('');
  const mediaLogoRef = useRef<HTMLInputElement>(null);
  const mediaHeroRef = useRef<HTMLInputElement>(null);
  const mediaAboutRef = useRef<HTMLInputElement>(null);

  const [partners, setPartners] = useState<Partner[]>([]);
  const [newPartner, setNewPartner] = useState({ name: '', category: '', logo: '' });
  
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [services, setServices] = useState<ServiceItem[]>(defaultServices);
  const [editingPostId, setEditingPostId] = useState<string | null>(null);
  const [editingServiceId, setEditingServiceId] = useState<string | null>(null);
  const [serviceForm, setServiceForm] = useState(emptyServiceForm);
  const [newBlog, setNewBlog] = useState({ 
    title: '', category: 'Teknik', date: new Date().toLocaleDateString('tr-TR'), 
    readTime: '5 Dakika', desc: '', content: '', img: '' 
  });

  const fileInputRef = useRef<HTMLInputElement>(null);
  const blogImgRef = useRef<HTMLInputElement>(null);
  const dragIndexRef = useRef<number | null>(null);


  useEffect(() => {
    loadSiteData().then(data => {
      setPartners((data.partners as Partner[]) || []);
      const lb = data.blogs as BlogPost[] | undefined;
      setBlogs(lb && lb.length > 0 ? lb : defaultBlogs);
      const ls = data.services as ServiceItem[] | undefined;
      setServices(Array.isArray(ls) && ls.length > 0 ? ls : defaultServices);
      setSiteLogo(data.logo || '');
      setSiteHeroBg(data.heroBg || '');
      setSiteAboutImg(data.aboutImg || '');
    });
  }, []);

  useEffect(() => {
    fetch('/api/admin/session', { credentials: 'include' })
      .then((response) => {
        setIsAuthenticated(response.ok);
      })
      .catch(() => {
        // API çalışmıyor (statik hosting) - session yok, login ekranı göster
        setIsAuthenticated(false);
      })
      .finally(() => {
        setIsAuthChecking(false);
      });
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ password }),
      });

      // API mevcut ve başarılı
      if (response.ok) {
        setIsAuthenticated(true);
        setPassword('');
        return;
      }

      // API mevcut ama şifre yanlış
      if (response.status === 401) {
        alert('Hatalı şifre! Lütfen tekrar deneyin.');
        return;
      }

      // API mevcut değil (Vercel gibi statik hosting) - yerel kontrol
      if (response.status === 404 || response.status === 405) {
        if (password === 'S4rmam21') {
          setIsAuthenticated(true);
          setPassword('');
        } else {
          alert('Hatalı şifre! Lütfen tekrar deneyin.');
        }
        return;
      }

      alert('Hatalı şifre! Lütfen tekrar deneyin.');
    } catch {
      // Ağ hatası (API hiç çalışmıyor) - yerel kontrol
      if (password === 'S4rmam21') {
        setIsAuthenticated(true);
        setPassword('');
      } else {
        alert('Hatalı şifre! Lütfen tekrar deneyin.');
      }
    }
  };

  const saveToServer = (patch: object) => {
    saveSiteData(patch);
  };

  const savePartners = (list: Partner[]) => {
    setPartners(list);
    saveToServer({ partners: list });
  };

  const saveBlogs = (list: BlogPost[]) => {
    setBlogs(list);
    saveToServer({ blogs: list });
  };

  const saveServices = (list: ServiceItem[]) => {
    setServices(list);
    saveToServer({ services: list });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'partner' | 'blog') => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("Dosya boyutu 2MB'den küçük olmalıdır.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        if (type === 'partner') setNewPartner({ ...newPartner, logo: reader.result as string });
        else setNewBlog({ ...newBlog, img: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const addPartner = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPartner.name) return;
    const item: Partner = { ...newPartner, id: Date.now().toString() };
    savePartners([item, ...partners]);
    setNewPartner({ name: '', category: '', logo: '' });
  };

  const addBlog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBlog.title) return;
    const item: BlogPost = { ...newBlog, id: Date.now().toString() };
    if (editingPostId) {
      saveBlogs(blogs.map((blog) => blog.id === editingPostId ? { ...item, id: editingPostId } : blog));
    } else {
      saveBlogs([item, ...blogs]);
    }
    setEditingPostId(null);
    setNewBlog({ title: '', category: 'Teknik', date: new Date().toLocaleDateString('tr-TR'), readTime: '5 Dakika', desc: '', content: '', img: '' });
  };

  const deleteItem = (id: string, type: 'blog' | 'partner') => {
    if (window.confirm('Bu öğeyi silmek istediğinizden emin misiniz?')) {
      if (type === 'blog') saveBlogs(blogs.filter(b => b.id !== id));
      else savePartners(partners.filter(p => p.id !== id));
    }
  };

  const resetServiceForm = () => {
    setEditingServiceId(null);
    setServiceForm(emptyServiceForm);
  };

  const resetBlogForm = () => {
    setEditingPostId(null);
    setNewBlog({ title: '', category: 'Teknik', date: new Date().toLocaleDateString('tr-TR'), readTime: '5 Dakika', desc: '', content: '', img: '' });
  };

  const startEditBlog = (blog: BlogPost) => {
    setEditingPostId(blog.id);
    setNewBlog({
      title: blog.title,
      category: blog.category,
      date: blog.date,
      readTime: blog.readTime,
      desc: blog.desc,
      content: blog.content || '',
      img: blog.img || '',
    });
    setActiveTab('blogs');
  };

  const submitService = (e: React.FormEvent) => {
    e.preventDefault();
    if (!serviceForm.title.trim() || !serviceForm.desc.trim()) return;

    const nextService: ServiceItem = {
      id: serviceForm.id.trim() || String(services.length + 1).padStart(2, '0'),
      title: serviceForm.title.trim(),
      header: serviceForm.header.trim() || serviceForm.title.trim(),
      desc: serviceForm.desc.trim(),
      secondaryDesc: serviceForm.secondaryDesc.trim() || serviceForm.desc.trim(),
      icon: serviceForm.icon.trim() || 'engineering',
      bullets: serviceForm.bulletsText.split('\n').map((item) => item.trim()).filter(Boolean),
      image: serviceForm.image.trim(),
      blogContent: serviceForm.blogContent.trim(),
    };

    if (editingServiceId) {
      saveServices(services.map((item) => item.id === editingServiceId ? nextService : item));
    } else {
      saveServices([...services, nextService]);
    }

    resetServiceForm();
  };

  const startEditService = (service: ServiceItem) => {
    setEditingServiceId(service.id);
    setServiceForm({
      id: service.id,
      title: service.title,
      header: service.header,
      desc: service.desc,
      secondaryDesc: service.secondaryDesc,
      icon: service.icon,
      bulletsText: service.bullets.join('\n'),
      image: service.image || '',
      blogContent: service.blogContent || '',
    });
    setActiveTab('services');
  };

  const deleteService = (id: string) => {
    if (window.confirm('Bu hizmeti silmek istediğinizden emin misiniz?')) {
      saveServices(services.filter((service) => service.id !== id));
      if (editingServiceId === id) resetServiceForm();
    }
  };

  const updatePartnerLogo = (id: string, logoData: string) => {
    const updated = partners.map(p => p.id === id ? { ...p, logo: logoData } : p);
    savePartners(updated);
  };

  const updateBlogImg = (id: string, imgData: string) => {
    const updated = blogs.map(b => b.id === id ? { ...b, img: imgData } : b);
    saveBlogs(updated);
  };

  const updateServiceImage = (id: string, imgData: string) => {
    const updated = services.map((service) => service.id === id ? { ...service, image: imgData } : service);
    saveServices(updated);
  };

  const handleEditLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editingPartnerId) return;
    if (file.size > 2 * 1024 * 1024) { alert("Dosya 2MB'den küçük olmalıdır."); return; }
    const reader = new FileReader();
    reader.onloadend = () => { updatePartnerLogo(editingPartnerId, reader.result as string); setEditingPartnerId(null); };
    reader.readAsDataURL(file);
  };

  const handleEditBlogImgUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editingBlogId) return;
    if (file.size > 2 * 1024 * 1024) { alert("Dosya 2MB'den küçük olmalıdır."); return; }
    const reader = new FileReader();
    reader.onloadend = () => { updateBlogImg(editingBlogId, reader.result as string); setEditingBlogId(null); };
    reader.readAsDataURL(file);
  };

  const handleEditServiceImgUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editingServiceImageId) return;
    if (file.size > 5 * 1024 * 1024) { alert("Dosya 5MB'den küçük olmalıdır."); return; }
    const reader = new FileReader();
    reader.onloadend = () => { updateServiceImage(editingServiceImageId, reader.result as string); setEditingServiceImageId(null); };
    reader.readAsDataURL(file);
  };

  const KEY_MAP: Record<string, string> = {
    'ex_donusum_logo': 'logo',
    'ex_donusum_hero_bg': 'heroBg',
    'ex_donusum_about_img': 'aboutImg',
  };

  const handleMediaUpload = (e: React.ChangeEvent<HTMLInputElement>, key: string, setter: (v: string) => void) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) { alert("Dosya 5MB'den kucuk olmalidir."); return; }
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      setter(result);
      saveToServer({ [KEY_MAP[key] || key]: result });
      notifySiteMediaUpdated();
    };
    reader.readAsDataURL(file);
  };

  const resetMedia = (key: string, setter: (v: string) => void) => {
    setter('');
    saveToServer({ [KEY_MAP[key] || key]: '' });
    notifySiteMediaUpdated();
  };

  const handleDragStart = (idx: number) => { dragIndexRef.current = idx; };
  const handleDragOver = (e: React.DragEvent, idx: number) => {
    e.preventDefault();
    const from = dragIndexRef.current;
    if (from === null || from === idx) return;
    const list = [...partners];
    const [moved] = list.splice(from, 1);
    list.splice(idx, 0, moved);
    dragIndexRef.current = idx;
    setPartners(list);
  };
  const handleDragEnd = () => {
    dragIndexRef.current = null;
    saveToServer({ partners });
  };

  const handleKeySelection = async () => {
    if (window.aistudio) {
      await window.aistudio.openSelectKey();
    } else {
      alert("API Key seçimi bu ortamda desteklenmiyor.");
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', {
        method: 'POST',
        credentials: 'include',
      });
    } catch {
      // ignore logout network errors and clear local auth state
    }
    setIsAuthenticated(false);
    setPassword('');
  };

  if (isAuthChecking) {
    return (
      <div className="min-h-screen bg-background-dark flex items-center justify-center p-4 text-white">
        Oturum kontrol ediliyor...
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background-dark flex items-center justify-center p-4">
        <form onSubmit={handleLogin} className="w-full max-w-md bg-surface-dark border border-surface-border p-10 rounded-3xl shadow-2xl">
          <div className="text-center mb-8">
            <span className="material-symbols-outlined text-primary text-6xl mb-4">admin_panel_settings</span>
            <h1 className="text-2xl font-black text-white">Yönetim Paneli</h1>
            <p className="text-text-secondary text-sm mt-2">Giriş şifrenizi giriniz</p>
          </div>
          <input 
            type="password" 
            autoFocus
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Şifrenizi giriniz"
            className="w-full bg-background-dark border border-surface-border rounded-xl px-4 py-4 text-white focus:border-primary outline-none mb-6 transition-all"
          />
          <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary-hover shadow-lg shadow-primary/20 transition-all">
            Panele Giriş Yap
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-dark text-white font-display pb-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-surface-border pb-8">
          <div>
            <h1 className="text-4xl font-black">EX <span className="text-primary">Admin</span></h1>
            <p className="text-text-secondary mt-1">İçerik yönetim merkezi</p>
          </div>
          <div className="flex bg-surface-dark p-1.5 rounded-2xl border border-surface-border">
            <button 
              onClick={() => setActiveTab('blogs')}
              className={`px-6 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${activeTab === 'blogs' ? 'bg-primary text-white shadow-lg' : 'text-text-secondary hover:text-white'}`}
            >
              <span className="material-symbols-outlined text-lg">article</span>
              Blog
            </button>
            <button 
              onClick={() => setActiveTab('services')}
              className={`px-6 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${activeTab === 'services' ? 'bg-primary text-white shadow-lg' : 'text-text-secondary hover:text-white'}`}
            >
              <span className="material-symbols-outlined text-lg">engineering</span>
              Hizmetler
            </button>
            <button 
              onClick={() => setActiveTab('clients')}
              className={`px-6 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${activeTab === 'clients' ? 'bg-primary text-white shadow-lg' : 'text-text-secondary hover:text-white'}`}
            >
              <span className="material-symbols-outlined text-lg">business</span>
              Referanslar
            </button>
            <button 
              onClick={() => setActiveTab('images')}
              className={`px-6 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${activeTab === 'images' ? 'bg-primary text-white shadow-lg' : 'text-text-secondary hover:text-white'}`}
            >
              <span className="material-symbols-outlined text-lg">image</span>
              Görseller
            </button>
            <button 
              onClick={() => setActiveTab('medya')}
              className={`px-6 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${activeTab === 'medya' ? 'bg-primary text-white shadow-lg' : 'text-text-secondary hover:text-white'}` }
            >
              <span className="material-symbols-outlined text-lg">perm_media</span>
              Medya
            </button>
            <button 
              onClick={() => setActiveTab('settings')}
              className={`px-6 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${activeTab === 'settings' ? 'bg-primary text-white shadow-lg' : 'text-text-secondary hover:text-white'}`}
            >
              <span className="material-symbols-outlined text-lg">settings</span>
              Ayarlar
            </button>
          </div>
           <button onClick={handleLogout} className="text-xs font-bold text-red-400 hover:text-red-300 flex items-center gap-1">
             <span className="material-symbols-outlined text-sm">logout</span> Çıkış
          </button>
        </header>

        {activeTab === 'blogs' && (
          <div className="grid lg:grid-cols-12 gap-10 animate-in fade-in duration-500">
            {/* Blog Form logic ... */}
            <div className="lg:col-span-5">
              <div className="bg-surface-dark border border-surface-border rounded-3xl p-8 sticky top-24">
                <div className="flex items-center justify-between gap-4 mb-8">
                  <h2 className="text-xl font-bold flex items-center gap-3">
                    <span className="p-2 bg-primary/20 rounded-lg text-primary material-symbols-outlined">add_circle</span>
                    {editingPostId ? 'Blog Yazısını Düzenle' : 'Yeni Blog Yazısı'}
                  </h2>
                  {editingPostId && (
                    <button onClick={resetBlogForm} className="text-xs font-bold text-text-secondary hover:text-white">
                      İptal
                    </button>
                  )}
                </div>
                <form onSubmit={addBlog} className="space-y-6">
                  <div>
                    <label className="block text-[10px] font-bold text-text-secondary uppercase mb-2 tracking-widest">Kapak Görseli</label>
                    <div 
                      onClick={() => blogImgRef.current?.click()}
                      className="aspect-video w-full rounded-2xl border-2 border-dashed border-primary/20 flex flex-col items-center justify-center cursor-pointer hover:bg-primary/5 transition-all overflow-hidden bg-background-dark/50"
                    >
                      {newBlog.img ? <img src={newBlog.img} className="w-full h-full object-cover" /> : (
                        <div className="text-center">
                          <span className="material-symbols-outlined text-4xl text-primary/40 mb-2">image</span>
                          <p className="text-[10px] text-text-secondary">Tıklayıp Resim Seçin</p>
                        </div>
                      )}
                      <input type="file" ref={blogImgRef} className="hidden" accept="image/*" onChange={(e) => handleImageUpload(e, 'blog')} />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <input type="text" placeholder="Yazı Başlığı" value={newBlog.title} onChange={e => setNewBlog({...newBlog, title: e.target.value})} className="w-full bg-background-dark border border-surface-border rounded-xl px-4 py-4 text-sm focus:border-primary outline-none" />
                    <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="Kategori" value={newBlog.category} onChange={e => setNewBlog({...newBlog, category: e.target.value})} className="bg-background-dark border border-surface-border rounded-xl px-4 py-4 text-sm focus:border-primary outline-none" />
                      <input type="text" placeholder="Süre" value={newBlog.readTime} onChange={e => setNewBlog({...newBlog, readTime: e.target.value})} className="bg-background-dark border border-surface-border rounded-xl px-4 py-4 text-sm focus:border-primary outline-none" />
                    </div>
                    <textarea placeholder="Kısa Özet..." value={newBlog.desc} onChange={e => setNewBlog({...newBlog, desc: e.target.value})} className="w-full bg-background-dark border border-surface-border rounded-xl px-4 py-4 text-sm h-28 resize-none focus:border-primary outline-none" />
                    <textarea placeholder="Makale İçeriği" value={newBlog.content} onChange={e => setNewBlog({...newBlog, content: e.target.value})} className="w-full bg-background-dark border border-surface-border rounded-xl px-4 py-4 text-sm h-48 focus:border-primary outline-none" />
                  </div>
                  <button type="submit" className="w-full bg-primary py-4 rounded-xl font-bold hover:bg-primary-hover shadow-lg transition-all">{editingPostId ? 'Değişiklikleri Kaydet' : 'Yayına Al'}</button>
                </form>
              </div>
            </div>
            <div className="lg:col-span-7">
               <h2 className="text-2xl font-bold mb-8">Kayıtlı Yazılar</h2>
               <div className="space-y-4">
                {blogs.map(blog => (
                  <div key={blog.id} className="bg-surface-dark border border-surface-border p-5 rounded-2xl flex items-center justify-between group hover:border-primary/30 transition-all">
                    <div className="flex items-center gap-5">
                      <div className="h-16 w-24 rounded-xl bg-background-dark overflow-hidden flex-shrink-0 border border-white/5">
                        {blog.img ? <img src={blog.img} className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center"><span className="material-symbols-outlined text-white/10">article</span></div>}
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-lg leading-tight group-hover:text-primary transition-colors">{blog.title}</h3>
                        <p className="text-[10px] text-text-secondary mt-1">{blog.date} • {blog.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => startEditBlog(blog)} className="p-3 text-primary hover:bg-primary/10 rounded-xl transition-all opacity-0 group-hover:opacity-100">
                        <span className="material-symbols-outlined">edit</span>
                      </button>
                      <button onClick={() => deleteItem(blog.id, 'blog')} className="p-3 text-red-500 hover:bg-red-500/10 rounded-xl transition-all opacity-0 group-hover:opacity-100">
                        <span className="material-symbols-outlined">delete</span>
                      </button>
                    </div>
                  </div>
                ))}
               </div>
            </div>
          </div>
        )}

        {activeTab === 'services' && (
          <div className="grid lg:grid-cols-12 gap-10 animate-in fade-in duration-500">
            <div className="lg:col-span-5">
              <div className="bg-surface-dark border border-surface-border rounded-3xl p-8 sticky top-24">
                <div className="flex items-center justify-between gap-4 mb-8">
                  <h2 className="text-xl font-bold flex items-center gap-3">
                    <span className="p-2 bg-primary/20 rounded-lg text-primary material-symbols-outlined">engineering</span>
                    {editingServiceId ? 'Hizmeti Düzenle' : 'Yeni Hizmet'}
                  </h2>
                  {editingServiceId && (
                    <button onClick={resetServiceForm} className="text-xs font-bold text-text-secondary hover:text-white">
                      İptal
                    </button>
                  )}
                </div>
                <form onSubmit={submitService} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="ID (01)" value={serviceForm.id} onChange={(e) => setServiceForm({ ...serviceForm, id: e.target.value })} className="bg-background-dark border border-surface-border rounded-xl px-4 py-4 text-sm focus:border-primary outline-none" />
                    <input type="text" placeholder="İkon" value={serviceForm.icon} onChange={(e) => setServiceForm({ ...serviceForm, icon: e.target.value })} className="bg-background-dark border border-surface-border rounded-xl px-4 py-4 text-sm focus:border-primary outline-none" />
                  </div>
                  <input type="text" placeholder="Hizmet Başlığı" value={serviceForm.title} onChange={(e) => setServiceForm({ ...serviceForm, title: e.target.value })} className="w-full bg-background-dark border border-surface-border rounded-xl px-4 py-4 text-sm focus:border-primary outline-none" />
                  <input type="text" placeholder="Alt Başlık / Slogan" value={serviceForm.header} onChange={(e) => setServiceForm({ ...serviceForm, header: e.target.value })} className="w-full bg-background-dark border border-surface-border rounded-xl px-4 py-4 text-sm focus:border-primary outline-none" />
                  <input type="text" placeholder="Görsel URL" value={serviceForm.image} onChange={(e) => setServiceForm({ ...serviceForm, image: e.target.value })} className="w-full bg-background-dark border border-surface-border rounded-xl px-4 py-4 text-sm focus:border-primary outline-none" />
                  <textarea placeholder="Kısa Açıklama" value={serviceForm.desc} onChange={(e) => setServiceForm({ ...serviceForm, desc: e.target.value })} className="w-full bg-background-dark border border-surface-border rounded-xl px-4 py-4 text-sm h-24 resize-none focus:border-primary outline-none" />
                  <textarea placeholder="Detaylı Açıklama" value={serviceForm.secondaryDesc} onChange={(e) => setServiceForm({ ...serviceForm, secondaryDesc: e.target.value })} className="w-full bg-background-dark border border-surface-border rounded-xl px-4 py-4 text-sm h-24 resize-none focus:border-primary outline-none" />
                  <textarea placeholder="Maddeler (her satıra bir madde)" value={serviceForm.bulletsText} onChange={(e) => setServiceForm({ ...serviceForm, bulletsText: e.target.value })} className="w-full bg-background-dark border border-surface-border rounded-xl px-4 py-4 text-sm h-28 resize-none focus:border-primary outline-none" />
                  <textarea placeholder="Blog / detay sayfası içeriği" value={serviceForm.blogContent} onChange={(e) => setServiceForm({ ...serviceForm, blogContent: e.target.value })} className="w-full bg-background-dark border border-surface-border rounded-xl px-4 py-4 text-sm h-48 resize-none focus:border-primary outline-none" />
                  <button type="submit" className="w-full bg-primary py-4 rounded-xl font-bold hover:bg-primary-hover shadow-lg transition-all">
                    {editingServiceId ? 'Değişiklikleri Kaydet' : 'Hizmeti Ekle'}
                  </button>
                </form>
              </div>
            </div>
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-bold mb-8">Kayıtlı Hizmetler</h2>
              <div className="space-y-4">
                {services.map((service) => (
                  <div key={service.id} className="bg-surface-dark border border-surface-border p-5 rounded-2xl flex items-start justify-between gap-4 group hover:border-primary/30 transition-all">
                    <div className="flex items-start gap-4 min-w-0">
                      <div className="flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                        <span className="material-symbols-outlined text-2xl">{service.icon}</span>
                      </div>
                      <div className="min-w-0">
                        <div className="text-[10px] text-primary font-bold uppercase tracking-widest mb-1">Hizmet #{service.id}</div>
                        <h3 className="font-bold text-white text-lg leading-tight group-hover:text-primary transition-colors">{service.title}</h3>
                        <p className="text-xs text-text-secondary mt-2 line-clamp-2">{service.desc}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <button onClick={() => startEditService(service)} className="p-3 text-primary hover:bg-primary/10 rounded-xl transition-all">
                        <span className="material-symbols-outlined">edit</span>
                      </button>
                      <button onClick={() => deleteService(service.id)} className="p-3 text-red-500 hover:bg-red-500/10 rounded-xl transition-all">
                        <span className="material-symbols-outlined">delete</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'clients' && (
          <div className="grid lg:grid-cols-12 gap-10 animate-in fade-in duration-500">
             <div className="lg:col-span-5">
              <div className="bg-surface-dark border border-surface-border rounded-3xl p-8 sticky top-24">
                <h2 className="text-xl font-bold mb-8 flex items-center gap-3">
                  <span className="p-2 bg-primary/20 rounded-lg text-primary material-symbols-outlined">add_business</span>
                  Firma Ekle
                </h2>
                <form onSubmit={addPartner} className="space-y-6">
                  <div>
                    <label className="block text-[10px] font-bold text-text-secondary uppercase mb-2 tracking-widest">Logo</label>
                    <div 
                      onClick={() => fileInputRef.current?.click()}
                      className="aspect-square w-full rounded-2xl border-2 border-dashed border-primary/20 flex flex-col items-center justify-center cursor-pointer hover:bg-primary/5 transition-all overflow-hidden bg-white/5"
                    >
                      {newPartner.logo ? <img src={newPartner.logo} className="w-full h-full object-contain p-6" /> : <span className="material-symbols-outlined text-4xl text-primary/40">upload</span>}
                      <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={(e) => handleImageUpload(e, 'partner')} />
                    </div>
                  </div>
                  <input type="text" placeholder="Firma Adı" value={newPartner.name} onChange={e => setNewPartner({...newPartner, name: e.target.value})} className="w-full bg-background-dark border border-surface-border rounded-xl px-4 py-4 text-sm focus:border-primary outline-none" />
                  <input type="text" placeholder="Sektör" value={newPartner.category} onChange={e => setNewPartner({...newPartner, category: e.target.value})} className="w-full bg-background-dark border border-surface-border rounded-xl px-4 py-4 text-sm focus:border-primary outline-none" />
                  <button type="submit" className="w-full bg-primary py-4 rounded-xl font-bold hover:bg-primary-hover shadow-lg transition-all">Ekle</button>
                </form>
              </div>
            </div>
            <div className="lg:col-span-7">
               <h2 className="text-2xl font-bold mb-2">Referanslar</h2>
               <p className="text-text-secondary text-sm mb-6 flex items-center gap-1"><span className="material-symbols-outlined text-base">drag_indicator</span> Satırları sürükleyerek sırayı değiştirin.</p>
               <div className="space-y-3">
                {partners.map((p, idx) => (
                  <div
                    key={p.id}
                    draggable
                    onDragStart={() => handleDragStart(idx)}
                    onDragOver={(e) => handleDragOver(e, idx)}
                    onDragEnd={handleDragEnd}
                    className="bg-surface-dark border border-surface-border rounded-2xl flex items-center gap-4 px-4 py-3 group hover:border-primary/30 transition-all cursor-grab active:cursor-grabbing active:opacity-60 active:scale-[0.98] select-none"
                  >
                    {/* Sürükleme tutacağı */}
                    <span className="material-symbols-outlined text-text-secondary/40 group-hover:text-text-secondary transition-colors shrink-0 text-xl">drag_indicator</span>
                    {/* Sıra numarası */}
                    <span className="text-xs font-black text-primary/60 w-5 text-center shrink-0">{idx + 1}</span>
                    {/* Logo */}
                    <div className="h-12 w-12 shrink-0 bg-white rounded-xl p-1.5 flex items-center justify-center">
                      <img src={p.logo || `https://ui-avatars.com/api/?name=${encodeURIComponent(p.name)}`} className="max-h-full max-w-full object-contain" />
                    </div>
                    {/* Bilgiler */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-bold text-white truncate">{p.name}</h3>
                      <p className="text-[10px] text-text-secondary truncate">{p.category}</p>
                    </div>
                    {/* Sil */}
                    <button onClick={() => deleteItem(p.id, 'partner')} className="p-2 text-red-500 hover:bg-red-500/10 rounded-xl transition-all opacity-0 group-hover:opacity-100 shrink-0">
                      <span className="material-symbols-outlined text-sm">delete</span>
                    </button>
                  </div>
                ))}
               </div>
            </div>
          </div>
        )}

        {activeTab === 'images' && (
          <div className="space-y-12 animate-in fade-in duration-500">
            {/* Hidden file inputs for editing */}
            <input type="file" ref={editLogoRef} className="hidden" accept="image/*" onChange={handleEditLogoUpload} />
            <input type="file" ref={editBlogImgRef} className="hidden" accept="image/*" onChange={handleEditBlogImgUpload} />
            <input type="file" ref={editServiceImgRef} className="hidden" accept="image/*" onChange={handleEditServiceImgUpload} />

            {/* Partner Logos */}
            <div>
              <h2 className="text-2xl font-bold mb-2">Firma Logoları</h2>
              <p className="text-text-secondary text-sm mb-8">Bir logonun üzerine tıklayarak yeni resim yükleyebilirsiniz.</p>
              {partners.length === 0 ? (
                <div className="text-center py-16 border-2 border-dashed border-surface-border rounded-3xl opacity-40">
                  <span className="material-symbols-outlined text-5xl mb-3">business</span>
                  <p className="text-text-secondary">Henüz firma eklenmemiş.</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {partners.map(p => (
                    <div
                      key={p.id}
                      className="group relative cursor-pointer bg-surface-dark border border-surface-border rounded-2xl p-5 flex flex-col items-center gap-3 hover:border-primary/50 transition-all"
                      onClick={() => { setEditingPartnerId(p.id as string); editLogoRef.current?.click(); }}
                    >
                      <div className="absolute inset-0 rounded-2xl bg-primary/0 group-hover:bg-primary/5 transition-all flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-3xl opacity-0 group-hover:opacity-100 transition-all drop-shadow-lg">edit</span>
                      </div>
                      <div className="h-16 w-full flex items-center justify-center bg-white rounded-xl p-2">
                        <img
                          src={p.logo || `https://ui-avatars.com/api/?name=${encodeURIComponent(p.name)}&background=27211c&color=df7b11&size=180&bold=true`}
                          alt={p.name}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <span className="text-xs font-bold text-white text-center truncate w-full text-center">{p.name}</span>
                      <span className="text-[10px] text-primary font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all">Değiştir</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Blog Cover Images */}
            <div>
              <h2 className="text-2xl font-bold mb-2">Blog Kapak Görselleri</h2>
              <p className="text-text-secondary text-sm mb-8">Bir kapak görseline tıklayarak yenisiyle değiştirebilirsiniz.</p>
              {blogs.length === 0 ? (
                <div className="text-center py-16 border-2 border-dashed border-surface-border rounded-3xl opacity-40">
                  <span className="material-symbols-outlined text-5xl mb-3">article</span>
                  <p className="text-text-secondary">Henüz blog yazısı eklenmemiş.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {blogs.map(b => (
                    <div
                      key={b.id}
                      className="group relative cursor-pointer bg-surface-dark border border-surface-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all"
                      onClick={() => { setEditingBlogId(b.id); editBlogImgRef.current?.click(); }}
                    >
                      <div className="relative h-44 bg-background-dark">
                        {b.img
                          ? <img src={b.img} alt={b.title} className="w-full h-full object-cover" />
                          : <div className="w-full h-full flex items-center justify-center"><span className="material-symbols-outlined text-4xl text-white/10">image</span></div>
                        }
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all flex items-center justify-center">
                          <span className="material-symbols-outlined text-white text-3xl opacity-0 group-hover:opacity-100 transition-all drop-shadow-lg">edit</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-sm font-bold text-white truncate">{b.title}</h3>
                        <span className="text-[10px] text-primary font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all">Görseli Değiştir</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-2">Hizmet Görselleri</h2>
              <p className="text-text-secondary text-sm mb-8">Bir hizmet görseline tıklayarak yenisiyle değiştirebilirsiniz.</p>
              {services.length === 0 ? (
                <div className="text-center py-16 border-2 border-dashed border-surface-border rounded-3xl opacity-40">
                  <span className="material-symbols-outlined text-5xl mb-3">engineering</span>
                  <p className="text-text-secondary">Henüz hizmet eklenmemiş.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      className="group relative cursor-pointer bg-surface-dark border border-surface-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all"
                      onClick={() => { setEditingServiceImageId(service.id); editServiceImgRef.current?.click(); }}
                    >
                      <div className="relative h-44 bg-background-dark">
                        {service.image
                          ? <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                          : <div className="w-full h-full flex items-center justify-center"><span className="material-symbols-outlined text-4xl text-white/10">image</span></div>
                        }
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all flex items-center justify-center">
                          <span className="material-symbols-outlined text-white text-3xl opacity-0 group-hover:opacity-100 transition-all drop-shadow-lg">edit</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-sm font-bold text-white truncate">{service.title}</h3>
                        <span className="text-[10px] text-primary font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all">Görseli Değiştir</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'medya' && (
          <div className="max-w-4xl mx-auto py-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-bold mb-8 text-white">Site Medya Yönetimi</h2>
            <div className="grid gap-8">

              {/* Site Logosu */}
              <div className="bg-surface-dark border border-surface-border rounded-3xl p-8">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">badge</span>
                  Site Logosu
                </h3>
                {siteLogo && <img src={siteLogo} alt="Logo" className="h-16 object-contain mb-4 rounded-xl border border-surface-border p-2" />}
                {!siteLogo && <p className="text-text-secondary text-sm mb-4">Şu an varsayılan logo kullanılıyor.</p>}
                <div className="flex gap-3 flex-wrap">
                  <button onClick={() => mediaLogoRef.current?.click()} className="px-5 py-2 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary/80 transition-all">
                    Görsel Yükle
                  </button>
                  {siteLogo && (
                    <button onClick={() => resetMedia('ex_donusum_logo', setSiteLogo)} className="px-5 py-2 bg-red-500/20 text-red-400 border border-red-500/30 rounded-xl text-sm font-bold hover:bg-red-500/30 transition-all">
                      Varsayılana Sıfırla
                    </button>
                  )}
                </div>
                <input ref={mediaLogoRef} type="file" accept="image/*" className="hidden"
                  onChange={(e) => handleMediaUpload(e, 'ex_donusum_logo', setSiteLogo)} />
              </div>

              {/* Hero Arkaplanı */}
              <div className="bg-surface-dark border border-surface-border rounded-3xl p-8">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">wallpaper</span>
                  Ana Sayfa Hero Arkaplanı
                </h3>
                {siteHeroBg && <img src={siteHeroBg} alt="Hero BG" className="h-32 w-full object-cover mb-4 rounded-xl border border-surface-border" />}
                {!siteHeroBg && <p className="text-text-secondary text-sm mb-4">Şu an varsayılan arkaplan kullanılıyor.</p>}
                <div className="flex gap-3 flex-wrap">
                  <button onClick={() => mediaHeroRef.current?.click()} className="px-5 py-2 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary/80 transition-all">
                    Görsel Yükle
                  </button>
                  {siteHeroBg && (
                    <button onClick={() => resetMedia('ex_donusum_hero_bg', setSiteHeroBg)} className="px-5 py-2 bg-red-500/20 text-red-400 border border-red-500/30 rounded-xl text-sm font-bold hover:bg-red-500/30 transition-all">
                      Varsayılana Sıfırla
                    </button>
                  )}
                </div>
                <input ref={mediaHeroRef} type="file" accept="image/*" className="hidden"
                  onChange={(e) => handleMediaUpload(e, 'ex_donusum_hero_bg', setSiteHeroBg)} />
              </div>

              {/* Hakkımızda Görseli */}
              <div className="bg-surface-dark border border-surface-border rounded-3xl p-8">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">groups</span>
                  Hakkımızda Görseli
                </h3>
                {siteAboutImg && <img src={siteAboutImg} alt="About" className="h-32 w-full object-cover mb-4 rounded-xl border border-surface-border" />}
                {!siteAboutImg && <p className="text-text-secondary text-sm mb-4">Şu an varsayılan görsel kullanılıyor.</p>}
                <div className="flex gap-3 flex-wrap">
                  <button onClick={() => mediaAboutRef.current?.click()} className="px-5 py-2 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary/80 transition-all">
                    Görsel Yükle
                  </button>
                  {siteAboutImg && (
                    <button onClick={() => resetMedia('ex_donusum_about_img', setSiteAboutImg)} className="px-5 py-2 bg-red-500/20 text-red-400 border border-red-500/30 rounded-xl text-sm font-bold hover:bg-red-500/30 transition-all">
                      Varsayılana Sıfırla
                    </button>
                  )}
                </div>
                <input ref={mediaAboutRef} type="file" accept="image/*" className="hidden"
                  onChange={(e) => handleMediaUpload(e, 'ex_donusum_about_img', setSiteAboutImg)} />
              </div>

            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="max-w-3xl mx-auto py-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-surface-dark border border-surface-border rounded-3xl p-10">
              <div className="flex items-center gap-4 mb-8">
                 <div className="p-3 bg-primary/20 rounded-2xl text-primary">
                    <span className="material-symbols-outlined text-3xl">key</span>
                 </div>
                 <div>
                    <h2 className="text-2xl font-black text-white">Sistem Yapılandırması</h2>
                    <p className="text-text-secondary text-sm">Yapay Zeka ve API servis ayarları</p>
                 </div>
              </div>

              <div className="space-y-10">
                <div className="p-6 rounded-2xl bg-background-dark border border-surface-border">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">smart_toy</span>
                    Gemini API Bağlantısı
                  </h3>
                  <p className="text-sm text-text-secondary mb-6 leading-relaxed">
                    Yapay zeka analizi ve akıllı asistan özelliklerinin çalışabilmesi için geçerli bir API anahtarı seçmelisiniz. Seçilen anahtar tarayıcı oturumunuzda güvenle saklanacaktır.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
                    <button 
                      onClick={handleKeySelection}
                      className="flex items-center justify-center gap-2 bg-primary text-white font-bold py-3 px-8 rounded-xl hover:bg-primary-hover transition-all shadow-lg shadow-primary/20"
                    >
                      <span className="material-symbols-outlined text-lg">settings_input_component</span>
                      API Anahtarı Seç
                    </button>
                    <a 
                      href="https://aistudio.google.com/apikey" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 border border-primary/40 bg-primary/10 text-primary py-3 px-8 rounded-xl hover:bg-primary/20 transition-all text-sm font-bold"
                    >
                      <span className="material-symbols-outlined text-lg">vpn_key</span>
                      API Anahtarı Al / Yönet
                    </a>
                    <a 
                      href="https://aistudio.google.com/plan_information" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 border border-yellow-500/40 bg-yellow-500/10 text-yellow-400 py-3 px-8 rounded-xl hover:bg-yellow-500/20 transition-all text-sm font-bold"
                    >
                      <span className="material-symbols-outlined text-lg">credit_card</span>
                      Kredi Satın Al
                    </a>
                  </div>
                </div>

                <div className="border-t border-surface-border pt-8">
                   <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Önemli Hatırlatma</h4>
                   <ul className="space-y-3 text-xs text-text-secondary leading-relaxed list-disc pl-4">
                     <li>Ücretsiz API anahtarları belirli kullanım limitlerine sahiptir.</li>
                     <li>Yüksek doğruluklu analizler için "Paid" (Ücretli) bir proje seçmeniz önerilir.</li>
                     <li>Sistem analizi sırasında "Requested entity was not found" hatası alırsanız, anahtarınızı buradan tekrar seçin.</li>
                   </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;




