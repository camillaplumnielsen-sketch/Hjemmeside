export type UpcomingProject = {
  slug: string;
  name: string;
  location: string;
  description: string;
  image?: string;
};

export const upcomingProjects: UpcomingProject[] = [
  {
    slug: 'amalielunden',
    name: 'Amalielunden',
    location: 'Nr. Vilstrup',
    description:
      'Vi opfører lejeboliger på Amalielunden. Projektet er under udvikling, og størrelse og priser er endnu ikke fastlagt – oplysninger opdateres løbende, efterhånden som projektet tager form.',
    image: '/images/project-amalielunden.jpg',
  },
  {
    slug: 'ny-noerup-8-boliger',
    name: 'Ny Nørup',
    location: '8 kommende lejeboliger',
    description:
      'Vi planlægger et nyt boligprojekt med 8 lejeboliger i Ny Nørup. Projektet er under udvikling, og yderligere oplysninger følger løbende.',
    image: '/images/project-ny-noerup-kommende.jpg',
  },
  {
    slug: 'lille-moelkaer-8-boliger',
    name: 'Lille Mølkær',
    location: 'Ødsted',
    description:
      'Vi planlægger et nyt boligprojekt med 8 lejeboliger på Lille Mølkær i Ødsted. Projektet opstartes primo 2027. Spørgsmål om lejeboligerne kan rettes til vores ejendomsadministrator Camilla.',
  },
];
