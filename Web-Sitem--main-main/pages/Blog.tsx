
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSiteMedia } from '../hooks/useSiteMedia';
import { defaultBlogs } from '../data/defaultBlogs';

interface BlogPost {
  id: string | number;
  category: string;
  date: string;
  readTime: string;
  title: string;
  desc: string;
  img?: string;
  icon?: string;
  content?: string;
}

const Blog: React.FC = () => {
  const { heroBg } = useSiteMedia();
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [displayPosts, setDisplayPosts] = useState<BlogPost[]>([]);

  const resolvedDefaultPosts: BlogPost[] = defaultBlogs.map((post) => ({
    ...post,
    img: post.img || heroBg,
  }));

  useEffect(() => {
    fetch('/api/data')
      .then(r => r.json())
      .then(data => {
        if (data.blogs && data.blogs.length > 0) {
          setDisplayPosts(data.blogs);
        } else {
          setDisplayPosts(resolvedDefaultPosts);
        }
      })
      .catch(() => setDisplayPosts(resolvedDefaultPosts));
  }, [heroBg]);

  if (selectedPost) {
    return (
      <main className="bg-[#181511] min-h-screen py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => setSelectedPost(null)}
            className="flex items-center gap-2 text-primary font-bold mb-10 hover:translate-x-[-4px] transition-transform"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Geri Dön
          </button>
          
          <article className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-8">
              <span className="rounded bg-primary px-3 py-1 text-xs font-bold text-white uppercase">{selectedPost.category}</span>
              <h1 className="text-3xl md:text-5xl font-black text-white mt-4 mb-6 leading-tight">{selectedPost.title}</h1>
              <div className="flex items-center gap-6 text-sm text-[#b9ab9d]">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base">calendar_month</span> {selectedPost.date}</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base">schedule</span> {selectedPost.readTime}</span>
              </div>
            </div>

            {selectedPost.img && (
              <div className="mb-10 rounded-2xl overflow-hidden border border-surface-border">
                <img src={selectedPost.img} alt={selectedPost.title} className="w-full h-auto object-cover max-h-[500px]" />
              </div>
            )}

            <div className="prose prose-invert max-w-none text-[#b9ab9d] leading-relaxed whitespace-pre-wrap">
              {selectedPost.content}
            </div>

            <div className="mt-16 pt-10 border-t border-surface-border">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-white">
                  <p className="font-bold">Bu yazı ilginizi çekti mi?</p>
                  <p className="text-sm text-[#b9ab9d]">Uzman görüşü almak için bizimle iletişime geçin.</p>
                </div>
                <Link to="/iletisim" className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-hover transition-all">
                  Ücretsiz Danışın
                </Link>
              </div>
            </div>
          </article>
        </div>
      </main>
    );
  }

  return (
    <main>
      <section className="relative flex min-h-[400px] flex-col items-center justify-center overflow-hidden py-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#181511] via-[#181511]/80 to-[#181511]/60 z-10"></div>
          <div className="h-full w-full bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url("${heroBg}")`}}></div>
        </div>
        <div className="relative z-20 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 backdrop-blur-sm mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Bilgi Paylaşımı</span>
          </div>
          <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Sektörel Bilgi ve <span className="text-primary">Teknik Blog</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#dcdcdc]">
            ATEX standartları, Exproof çözümleri ve endüstriyel güvenlik üzerine uzman görüşleri.
          </p>
        </div>
      </section>

      <section className="bg-[#181511] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {displayPosts.map((post) => (
              <article 
                key={post.id} 
                onClick={() => setSelectedPost(post)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedPost(post);
                  }
                }}
                role="button"
                tabIndex={0}
                className="group flex cursor-pointer flex-col overflow-hidden rounded-xl border border-surface-border bg-surface-dark transition-all hover:border-primary/50 hover:shadow-[0_0_30px_rgba(223,123,17,0.1)]"
              >
                <div className="relative h-56 overflow-hidden">
                  {post.img ? (
                    <img 
                      alt={post.title} 
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                      src={post.img} 
                    />
                  ) : (
                    <div className="h-full w-full bg-zinc-800 flex items-center justify-center text-primary/30">
                      <span className="material-symbols-outlined text-6xl">{post.icon || 'article'}</span>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="rounded bg-primary px-3 py-1 text-xs font-bold text-white uppercase">{post.category}</span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-4 text-xs text-[#b9ab9d]">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">calendar_month</span> {post.date}</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> {post.readTime}</span>
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-white transition-colors group-hover:text-primary leading-tight">{post.title}</h3>
                  <p className="mb-6 text-sm leading-relaxed text-[#b9ab9d] line-clamp-3">{post.desc}</p>
                  <div className="mt-auto">
                    <button 
                      type="button"
                      onClick={() => setSelectedPost(post)}
                      onKeyDown={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-primary-hover"
                    >
                      Devamını Oku
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;

