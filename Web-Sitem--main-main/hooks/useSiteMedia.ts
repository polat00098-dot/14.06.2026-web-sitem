import { useEffect, useState } from 'react';

const DEFAULT_LOGO = '/media-logo.svg';
const DEFAULT_HERO_BG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuA57-hs0EKELMi_I5fsQ-__7a0N2SUAZ-VBOYgAYF2-lL0kCHNeowcYiCl8-amxA5jTuM5FN-is16pIAT6_X9E7rrG34pF_QkzNwNZ9UNtDEzmrRIyxZXmddrzEOaa1vrUZurDhk8F7WdvqZgi8ixP31Affux3jVQdFV8RSAHqrasa_h1-EI_TF80EYbnJWxthSTQcW8JhFInWYBlPQzMB8YcGUmiwAA4KWwdW5BWAfmyMFJ6bvlWhzgrDEYADhIST8ZLnx_mvwfK0H';
const DEFAULT_ABOUT_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6wTbHc_SgIqYniTx0Cwbu_AU1PZdYqdOop7KEraI7yihlBsztotjiPNViDslcyEWrKbjlmT7r19yfoJ7CelPQ3AVFgjcJbpXsqseGIJwsKRMf3vJBw81793tdfbRpuVTkNMUHY2-aG9QuD93X907blE75_lfx9riiqQ3aekMw1pBkIjdiF72spvkCb_OrG38tvjm-_SVphCgc5eaWYJMoSBUjZYYcZ4VkS5c2bSSr_XfPXJuqeFhIInmCmL31MLrpGfbtXd59dJWd';
export const SITE_MEDIA_UPDATED_EVENT = 'ex-donusum-site-media-updated';

const defaultMedia = () => ({
  logo: DEFAULT_LOGO,
  heroBg: DEFAULT_HERO_BG,
  aboutImg: DEFAULT_ABOUT_IMG,
});

export function notifySiteMediaUpdated() {
  window.dispatchEvent(new Event(SITE_MEDIA_UPDATED_EVENT));
}

export function useSiteMedia() {
  const [media, setMedia] = useState(defaultMedia);

  const fetchMedia = () => {
    fetch('/api/data')
      .then(r => r.json())
      .then(data => setMedia({
        logo: data.logo || DEFAULT_LOGO,
        heroBg: data.heroBg || DEFAULT_HERO_BG,
        aboutImg: data.aboutImg || DEFAULT_ABOUT_IMG,
      }))
      .catch(() => {});
  };

  useEffect(() => {
    fetchMedia();
    window.addEventListener(SITE_MEDIA_UPDATED_EVENT, fetchMedia);
    return () => window.removeEventListener(SITE_MEDIA_UPDATED_EVENT, fetchMedia);
  }, []);

  return media;
}
