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
    name: 'Lindeparken',
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
];

export function formatDKK(amount: number): string {
  return `kr. ${amount.toLocaleString('da-DK')},-`;
}
