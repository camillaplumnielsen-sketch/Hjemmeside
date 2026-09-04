import { site } from './site';

/**
 * JSON-LD structured data for lokal SEO. Renderes i <script type="application/ld+json">.
 * Google bruger dette til rich results, knowledge panel og lokal placering.
 */

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    '@id': `${site.url}/#organization`,
    name: site.legalName,
    alternateName: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    foundingDate: String(site.founded),
    priceRange: '$$',
    image: `${site.url}/og-image.png`,
    logo: `${site.url}/logo.svg`,
    // Ingen streetAddress/geo – servicevirksomhed uden offentlig gadeadresse.
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    areaServed: site.areaServed.map((name) => ({ '@type': 'City', name })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '16:00',
      },
    ],
    // Tilføj aggregateRating igen, når der er rigtige anmeldelser at basere den på.
    sameAs: [site.social.facebook],
  };
}

export function serviceSchema(params: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: params.name,
    description: params.description,
    url: `${site.url}${params.path}`,
    serviceType: params.name,
    provider: { '@id': `${site.url}/#organization` },
    areaServed: site.areaServed.map((name) => ({ '@type': 'City', name })),
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}
