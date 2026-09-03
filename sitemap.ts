import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { services } from '@/data/services';
import { cases } from '@/data/cases';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    '',
    '/ydelser',
    '/cases',
    '/om-os',
    '/kundeanmeldelser',
    '/kontakt',
    '/tomrer-vejle',
    '/nyt-tag-vejle',
    '/tagrenovering-vejle',
    '/tilbygning-vejle',
    '/gratis-guide/nyt-tag',
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${site.url}/ydelser/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const caseRoutes = cases.map((c) => ({
    url: `${site.url}/cases/${c.slug}`,
    lastModified: now,
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...caseRoutes];
}
