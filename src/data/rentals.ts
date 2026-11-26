export type RentalListing = {
  slug: string;
  name: string;
  location: string;
  address: string;
  /** Vises som tekst, fx "112 m²" eller "88–101 m²" */
  area: string;
  rooms?: number;
  rentMonthly?: number;
  deposit?: number;
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
    area: '112 m²',
    rooms: 3,
    rentMonthly: 10100,
    deposit: 30300,
    availableFrom: 'Primo 2027',
    description:
      'Boligen er under opførelse og forventes klar til indflytning primo 2027. Kontakt os for at høre nærmere om overtagelsesdato og de øvrige detaljer.',
    images: ['/images/rental-lindeparken-1.jpg', '/images/rental-lindeparken-2.jpg'],
  },
  {
    slug: 'lille-moelkaer-2-oedsted-aktuel',
    name: 'Lille Mølkær II',
    location: 'Ødsted',
    address: 'Lille Mølkær 14A/B til 20A/B, Ødsted',
    area: '88–101 m²',
    availableFrom: 'Efterår 2027',
    description:
      'Vi opfører 8 nye lejeboliger i et roligt og grønt boligområde i Ødsted. Boligerne er under opførelse og forventes klar til indflytning efterår 2027. Er du interesseret, kan du allerede nu blive skrevet på vores interesseliste – kontakt os for at høre nærmere om de enkelte boliger.',
    images: ['/images/rental-lille-moelkaer-2-1.jpg'],
  },
];

export function formatDKK(amount: number): string {
  return `kr. ${amount.toLocaleString('da-DK')},-`;
}
