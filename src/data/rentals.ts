export type RentalListing = {
  slug: string;
  name: string;
  location: string;
  address: string;
  areaM2: number;
  rooms: number;
  rentMonthly: number;
  deposit: number;
  /** Vises som tekst, fx "01.02.2027" */
  availableFrom: string;
  description: string;
};

export const rentals: RentalListing[] = [
  {
    slug: 'lindeparken-ny-noerup',
    name: 'Lindeparken',
    location: 'Ny Nørup',
    address: 'Lindeparken',
    areaM2: 112,
    rooms: 3,
    rentMonthly: 9900,
    deposit: 29700,
    availableFrom: '01.02.2027',
    description: 'Kort beskrivelse af boligen, området og de vigtigste fordele.',
  },
];

export function formatDKK(amount: number): string {
  return `kr. ${amount.toLocaleString('da-DK')},-`;
}
