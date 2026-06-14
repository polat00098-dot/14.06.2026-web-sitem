import { useEffect, useState } from 'react';
import { defaultServices, type ServiceItem } from '../data/defaultServices';
import { loadSiteData } from '../lib/siteData';

export function useServicesData() {
  const [services, setServices] = useState<ServiceItem[]>(defaultServices);

  useEffect(() => {
    loadSiteData().then(data => {
      const s = data.services as ServiceItem[] | undefined;
      if (Array.isArray(s) && s.length > 0) setServices(s);
    });
  }, []);

  return services;
}