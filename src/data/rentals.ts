export type RentalListing = {
  slug: string;
  name: string;
  location: string;
  address: string;
  areaM2: number;
  rooms: number;
  rentMonthly: number;
  deposit: number;
  /** Vises som tekst, fx "01.02.2027" eller "Primo 2027" */
  availableFrom: string;
  description: string;
  images?: string[];
};

export const rentals: RentalListing[] = [
  {
    slug: 'lindeparken-ny-noerup',
    name: 'Lindeparken II',
    location: 'Ny Nørup',
    address: 'Lindeparken',
    areaM2: 112,
    rooms: 3,
    rentMonthly: 10100,
    deposit: 30300,
    availableFrom: 'Primo 2027',
    description:
      'Boligen er under opførelse og forventes klar til indflytning primo 2027. Kontakt os for at høre nærmere om overtagelsesdato og de øvrige detaljer.',
    images: ['/images/rental-lindeparken-1.jpg', '/images/rental-lindeparken-2.jpg'],
  },
  {
    slug: 'lille-moelkaer-2-99-101m2',
    name: 'Lille Mølkær II · 99–101 m²',
    location: 'Ødsted',
    address: 'Lille Mølkær, Ødsted',
    areaM2: 100,
    rooms: 3,
    rentMonthly: 10400,
    deposit: 31200,
    availableFrom: 'Efterår 2027',
    description:
      'Lejebolig på 99–101 m² med nedsænket stue og kig til den grønne kile. 2 soveværelser, badeværelse og køkken med alle hvidevarer. Privat altan mod nord, egen gårdhave, udhus og ekstra p-plads. Gulvvarme, varmepumpe og ventilationsanlæg. Boligen opføres i et roligt og grønt boligområde i Ødsted, ca. 10 minutters kørsel fra Vejle og 7 minutters kørsel til Egtved. Forventet indflytning: bolig 5–8 pr. 1. september 2027, bolig 1–4 ca. 1. november 2027 (vejledende). Kontakt ejendomsadministrator Camilla Plum Nielsen på 25 31 87 17 for yderligere oplysninger.',
    images: ['/images/project-lille-moelkaer-2-kommende.jpg'],
  },
  {
    slug: 'lille-moelkaer-2-88m2',
    name: 'Lille Mølkær II · 88 m²',
    location: 'Ødsted',
    address: 'Lille Mølkær, Ødsted',
    areaM2: 88,
    rooms: 3,
    rentMonthly: 9800,
    deposit: 29400,
    availableFrom: 'Efterår 2027',
    description:
      'Lejebolig på 88 m² i ét plan med stort åbent køkken/alrum/stue. 2 soveværelser, badeværelse og køkken med alle hvidevarer. Privat altan mod nord, egen gårdhave, udhus og ekstra p-plads. Gulvvarme, varmepumpe og ventilationsanlæg. Boligen opføres i et roligt og grønt boligområde i Ødsted, ca. 10 minutters kørsel fra Vejle og 7 minutters kørsel til Egtved. Forventet indflytning: bolig 5–8 pr. 1. september 2027, bolig 1–4 ca. 1. november 2027 (vejledende). Kontakt ejendomsadministrator Camilla Plum Nielsen på 25 31 87 17 for yderligere oplysninger.',
    images: ['/images/project-lille-moelkaer-2-kommende.jpg'],
  },
];

export function formatDKK(amount: number): string {
  return `kr. ${amount.toLocaleString('da-DK')},-`;
}
