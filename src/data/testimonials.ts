export type Testimonial = {
  name: string;
  location: string;
  rating: number;
  quote: string;
  project: string;
  /** Kilde til anmeldelsen */
  source: 'Google' | 'Facebook' | 'Anbefaling';
  initials: string;
};

// Ingen bekræftede kundeanmeldelser endnu – tilføj rigtige anmeldelser her,
// efterhånden som I får dem. Undgå at digte anmeldelser eller vurderinger,
// det er vildledende markedsføring og kan udløse sanktioner fra fx Google.
export const testimonials: Testimonial[] = [];
