import type { Metadata } from 'next';
import { site } from './site';

type SeoParams = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
};

const DEFAULT_OG_IMAGE = '/og-image.svg';

/**
 * Bygger et fuldt Metadata-objekt med canonical, Open Graph og Twitter cards.
 * Bruges på alle sider for konsistent, lokal SEO.
 */
export function buildMetadata({
  title,
  description,
  path = '/',
  image = DEFAULT_OG_IMAGE,
  keywords = [],
}: SeoParams): Metadata {
  const url = `${site.url}${path === '/' ? '' : path}`;
  const fullTitle =
    path === '/' ? `${site.legalName} – Tømrer i Vejle & Bredsten` : `${title} | ${site.name}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      'tømrer Vejle',
      'tømrer Bredsten',
      'tømrerfirma Vejle',
      'nyt tag Vejle',
      'tagrenovering Vejle',
      'tilbygning Vejle',
      ...keywords,
    ],
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.legalName,
      locale: 'da_DK',
      type: 'website',
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
