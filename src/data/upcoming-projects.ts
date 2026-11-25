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
    name: 'Lindeparken II',
    location: 'Ny Nørup',
    description:
      'Vi planlægger et nyt boligprojekt med 8 lejeboliger i Ny Nørup. Projektet er under udvikling, og yderligere oplysninger følger løbende.',
    image: '/images/project-ny-noerup-kommende.jpg',
  },
  {
    slug: 'lille-moelkaer-2-oedsted',
    name: 'Lille Mølkær II',
    location: 'Ødsted',
    description:
      'Vi opfører 8 nye lejeboliger i et roligt og grønt boligområde i Ødsted, kun omkring 10 minutters kørsel fra Vejle og 7 minutters kørsel til Egtved. Udlejningen begynder primo 2027. Er du interesseret i en af boligerne, kan du allerede nu blive skrevet på vores interesseliste – send en mail til vejle.brdrlarsen@outlook.dk, eller skriv til os via kontaktformularen her på siden. Så kontakter vi dig, når udlejningen går i gang.',
    image: '/images/project-lille-moelkaer-2-kommende.jpg',
  },
];
