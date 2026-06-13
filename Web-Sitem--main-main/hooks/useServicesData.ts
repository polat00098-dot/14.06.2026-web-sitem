import { useEffect, useState } from 'react';
import { defaultServices, type ServiceItem } from '../data/defaultServices';

export function useServicesData() {
  const [services, setServices] = useState<ServiceItem[]>(defaultServices);

  useEffect(() => {
    fetch('/api/data')
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.services) && data.services.length > 0) {
          setServices(data.services);
        }
      })
      .catch(() => {});
  }, []);

  return services;
}