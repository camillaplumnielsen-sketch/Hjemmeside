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

export const testimonials: Testimonial[] = [
  {
    name: 'Mette Sørensen',
    location: 'Vejle',
    rating: 5,
    quote:
      'Brdr. Larsen lagde nyt tag på vores villa, og vi er så tilfredse. De holdt tidsplanen, ryddede pænt op hver dag og resultatet er bare flot. Klar anbefaling herfra.',
    project: 'Nyt tag',
    source: 'Google',
    initials: 'MS',
  },
  {
    name: 'Henrik Poulsen',
    location: 'Bredsten',
    rating: 5,
    quote:
      'Fantastisk oplevelse fra start til slut. Dygtige håndværkere, god dialog og en fair pris. Vores tilbygning blev præcis som vi drømte om.',
    project: 'Tilbygning',
    source: 'Google',
    initials: 'HP',
  },
  {
    name: 'Camilla & Jonas',
    location: 'Jelling',
    rating: 5,
    quote:
      'Vi fik totalrenoveret vores hus, og det var trygt hele vejen. De styrede alle håndværkere, så vi kun skulle forholde os til én kontakt. Kan varmt anbefales.',
    project: 'Totalrenovering',
    source: 'Facebook',
    initials: 'CJ',
  },
  {
    name: 'Lars Nielsen',
    location: 'Vejle',
    rating: 5,
    quote:
      'Præcist, professionelt og til aftalt tid. De nye vinduer har gjort en kæmpe forskel på vores indeklima – slut med træk. Super tilfreds.',
    project: 'Vinduer og døre',
    source: 'Google',
    initials: 'LN',
  },
  {
    name: 'Anne Kristensen',
    location: 'Give',
    rating: 5,
    quote:
      'De byggede vores carport, og håndværket er i særklasse. Man kan mærke, at de er stolte af deres arbejde. Alt blev leveret som lovet.',
    project: 'Carport',
    source: 'Anbefaling',
    initials: 'AK',
  },
  {
    name: 'Peter Madsen',
    location: 'Børkop',
    rating: 5,
    quote:
      'Vi fik bygget en specialtrappe, og resultatet er simpelthen imponerende. Øje for detaljen og en løsning, vi ikke troede var mulig. Tusind tak.',
    project: 'Specialløsning',
    source: 'Google',
    initials: 'PM',
  },
];
