export type Testimonial = {
  name: string;
  location?: string;
  rating: number;
  quote: string;
  project?: string;
  /** Kilde til anmeldelsen */
  source: 'Google' | 'Facebook' | 'Anbefaling';
  initials: string;
};

// Ægte kundeanmeldelser fra Facebook (facebook.com/larsenbrdr/reviews).
// Facebook har ikke stjernebedømmelser, kun "anbefaler" – vist som 5/5 her.
// Undgå at digte anmeldelser eller vurderinger, det er vildledende
// markedsføring og kan udløse sanktioner fra fx Google.
export const testimonials: Testimonial[] = [
  {
    name: 'Maj-Britt Plum Nielsen',
    rating: 5,
    quote: 'Super flot arbejde udført af de dygtigste håndværkere til den bedste pris 💪',
    source: 'Facebook',
    initials: 'MN',
  },
  {
    name: 'Christian Brockdorff Christiansen',
    rating: 5,
    quote:
      'Professionelt tømrerfirma med kvalitet i højsædet. Bedste anbefalinger fra en glad kunde. Tak for drømmehuset.',
    source: 'Facebook',
    initials: 'CC',
  },
  {
    name: 'Mette Groth Lomholt',
    rating: 5,
    quote: 'Overholder aftaler, yderst kundevenlige, fair priser og ikke mindst rigtig pænt arbejde 👍',
    source: 'Facebook',
    initials: 'ML',
  },
];
