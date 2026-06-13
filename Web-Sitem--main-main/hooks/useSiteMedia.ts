import { useEffect, useState } from 'react';

const DEFAULT_LOGO = '/media-logo.svg';
const DEFAULT_HERO_BG = '/media-hero.svg';
const DEFAULT_ABOUT_IMG = '/media-about.svg';
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
