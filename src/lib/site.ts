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
    'Tømrer- og entreprenørfirma med håndværk i højsædet – fra første skitse til sidste søm. Vi hjælper private og erhverv med tømrer-, tag- og entreprenøropgaver i Bredsten, Vejle, Jelling, Give – hele Vejle Kommune.',
  employees: '10-11',
  // Skift til det endelige domæne inden lancering
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.brdrlarsen.dk',
  email: 'vejle.brdrlarsen@outlook.dk',
  phone: '+45 22 44 08 46',
  phoneDisplay: '22 44 08 46',
  // Ingen offentlig gadeadresse – servicevirksomhed uden kundefremmøde på adressen.
  address: {
    city: 'Bredsten',
    region: 'Region Syddanmark',
    country: 'DK',
  },
  areaServed: ['Bredsten', 'Vejle', 'Jelling', 'Give', 'Børkop', 'Fredericia', 'Egtved'],
  openingHours: 'Man–fre 08.00–16.00',
  cvr: '30546350',
  social: {
    facebook: 'https://www.facebook.com/larsenbrdr/?locale=da_DK',
  },
} as const;

export const navigation = [
  { label: 'Forside', href: '/' },
  { label: 'Om os', href: '/om-os' },
  { label: 'Ydelser', href: '/ydelser' },
  { label: 'Cases', href: '/cases' },
  { label: 'Anmeldelser', href: '/kundeanmeldelser' },
  { label: 'Kontakt', href: '/kontakt' },
] as const;

/** Telefon i tel:-format uden mellemrum */
export const telHref = `tel:${site.phone.replace(/\s/g, '')}`;
export const mailHref = `mailto:${site.email}`;
