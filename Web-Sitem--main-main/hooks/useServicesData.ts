import { useEffect, useState } from 'react';
import { defaultServices, type ServiceItem } from '../data/defaultServices';

function loadLS(): Record<string, unknown> {
  try { const r = localStorage.getItem('ex-donusum-data'); return r ? JSON.parse(r) : {}; } catch { return {}; }
}

export function useServicesData() {
  const [services, setServices] = useState<ServiceItem[]>(defaultServices);

  useEffect(() => {
    fetch('/api/data')
      .then((response) => { if (!response.ok) throw new Error('unavailable'); return response.json(); })
      .then((data) => {
        if (Array.isArray(data.services) && data.services.length > 0) {
          setServices(data.services);
        }
      })
      .catch(() => {
        const ls = loadLS();
        const lsServices = ls.services as ServiceItem[] | undefined;
        if (Array.isArray(lsServices) && lsServices.length > 0) {
          setServices(lsServices);
        }
      });
  }, []);

  return services;
}