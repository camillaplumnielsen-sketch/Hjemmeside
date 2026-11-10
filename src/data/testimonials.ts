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

// Ægte kundeanmeldelser fra Facebook (facebook.com/larsenbrdr/reviews) og Google.
// Facebook har ikke stjernebedømmelser, kun "anbefaler" – vist som 5/5 her.
// Undgå at digte anmeldelser eller vurderinger, det er vildledende
// markedsføring og kan udløse sanktioner fra fx Google.
export const testimonials: Testimonial[] = [
  {
    name: 'Chris Antochi',
    rating: 5,
    quote:
      'Tusind tak til Dennis og co., som har sat nye skydedøre/vinduer i vores terrasse samt lagt keramiske fliser. Det er blevet en flot resultat som vi er meget tilfreds med 🤩',
    source: 'Google',
    initials: 'CA',
  },
  {
    name: 'Anders Hellum',
    rating: 5,
    quote:
      'Rigtig god oplevelse fra start til slut. Vi har haft Brdr. Larsen til at montere nye vinduer og er meget tilfredse med resultatet. Flot og professionelt udført arbejde, god kommunikation og behagelige folk at have gående. Alt levede op til vores forventninger, og vi kan varmt anbefale dem.',
    source: 'Google',
    initials: 'AH',
  },
  {
    name: 'Thomas Karlsen',
    rating: 5,
    quote:
      'Vi har brugt Brdr. Larsen af flere omgange og kan kun give dem vores varmeste anbefaling. Første gang stod de for opførelsen af en ny overetage på vores daværende hus, hvor de havde ansvaret for hele projektet inkl. koordinering af underentreprenører. Alt spillede fra start til slut – aftaler blev overholdt, tidsplanen holdt, og vi følte os i trygge hænder hele vejen. Da vi senere skulle bygge vores nuværende arkitekttegnede hus på over 200 m², var det derfor helt naturligt, at Brdr. Larsen var de første, vi tog fat i. Heldigvis havde de mod på opgaven, og de har stået for hele byggeriet og fået alle fag og underentreprenører til at spille sammen. Endnu en gang er alt forløbet som aftalt – tidsplaner er blevet overholdt, der har været styr på økonomien, og der er ikke kommet ubehagelige overraskelser undervejs. Det betyder rigtig meget, når man kaster sig ud i et stort byggeprojekt, at man kan stole på dem, man arbejder sammen med. Det har vi kunnet med Brdr. Larsen hele vejen igennem. Godt håndværk, ordentlighed og styr på tingene – vi giver dem vores bedste anbefaling og ville uden tøven vælge dem igen.',
    source: 'Google',
    initials: 'TK',
  },
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
