/**
 * Central virksomhedsdata for Tømrerfirmaet Brdr. Larsen ApS.
 * Ét sted at redigere kontaktinfo, så det er konsistent på tværs af hele sitet
 * (footer, kontaktside, structured data, meta-tags m.m.).
 */

export const site = {
  name: 'Brdr. Larsen',
  legalName: 'Tømrerfirmaet Brdr. Larsen ApS',
  founded: 2007,
  tagline: 'Kvalitetshåndværk siden 2007',
  description:
    'Brdr. Larsen udfører tagarbejde, renovering, tilbygninger og specialopgaver i Bredsten, Vejle og omegn. Lokal tømrervirksomhed med fokus på kvalitet og personlig service.',
  employees: '10-11',
  // Skift til det endelige domæne inden lancering
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.brdrlarsen.dk',
  email: 'kontakt@brdrlarsen.dk',
  phone: '+45 40 00 00 00',
  phoneDisplay: '40 00 00 00',
  address: {
    street: 'Industrivej 1',
    postalCode: '7182',
    city: 'Bredsten',
    region: 'Region Syddanmark',
    country: 'DK',
    // Bredsten, Danmark – opdatér med de præcise koordinater for adressen
    lat: 55.7086,
    lng: 9.4297,
  },
  areaServed: ['Bredsten', 'Vejle', 'Jelling', 'Give', 'Børkop', 'Fredericia', 'Egtved'],
  openingHours: 'Man–fre 07.00–16.00',
  cvr: '00000000',
  social: {
    facebook: 'https://www.facebook.com/larsenbrdr/?locale=da_DK',
  },
  rating: {
    value: 4.9,
    count: 87,
  },
} as const;

export const navigation = [
  { label: 'Forside', href: '/' },
  { label: 'Ydelser', href: '/ydelser' },
  { label: 'Cases', href: '/cases' },
  { label: 'Om os', href: '/om-os' },
  { label: 'Anmeldelser', href: '/kundeanmeldelser' },
  { label: 'Kontakt', href: '/kontakt' },
] as const;

/** Telefon i tel:-format uden mellemrum */
export const telHref = `tel:${site.phone.replace(/\s/g, '')}`;
export const mailHref = `mailto:${site.email}`;
