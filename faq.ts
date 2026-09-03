import type { FaqItem } from './services';

/** Generel FAQ til forside og kontaktside. Service-specifik FAQ ligger i services.ts. */
export const generalFaq: FaqItem[] = [
  {
    question: 'Hvilke områder dækker I?',
    answer:
      'Vi har base i Bredsten og arbejder i hele Vejle-området samt Jelling, Give, Børkop, Egtved, Fredericia og omegn. Er du i tvivl om, vi kommer til dig, så ring endelig.',
  },
  {
    question: 'Koster det noget at få et tilbud?',
    answer:
      'Nej. Både besigtigelse og tilbud er helt gratis og uforpligtende. Vi kommer forbi, ser på opgaven og giver dig en fast pris.',
  },
  {
    question: 'Hvor hurtigt kan I komme i gang?',
    answer:
      'Det afhænger af opgavens omfang og sæsonen. Kontakt os, så finder vi hurtigt en dato til besigtigelse og aftaler en realistisk tidsplan.',
  },
  {
    question: 'Giver I garanti på jeres arbejde?',
    answer:
      'Ja. Vi arbejder efter gældende normer og står naturligvis inde for kvaliteten. Du får garanti på både materialer og udførelse.',
  },
  {
    question: 'Kan I hjælpe med byggetilladelser og tegninger?',
    answer:
      'Ja. Ved tilbygninger og større projekter hjælper vi med tegninger og ansøgning om byggetilladelse, så du er godt hjulpet hele vejen.',
  },
  {
    question: 'Er I forsikret og momsregistreret?',
    answer:
      'Ja, vi er et registreret ApS med fuld erhvervsforsikring. Du får altid en ordentlig faktura og en professionel aftale.',
  },
];
