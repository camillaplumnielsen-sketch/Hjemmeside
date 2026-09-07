export type RentalProject = {
  slug: string;
  name: string;
  location: string;
  units: string;
  buildYears: string;
  area: string;
  description: string;
  image?: string;
};

export const rentalProjects: RentalProject[] = [
  {
    slug: 'lille-moelkaer',
    name: 'Lille Mølkær',
    location: 'Ødsted, 7100 Vejle',
    units: '14 lejemål',
    buildYears: '2017–2018',
    area: '105 m²',
    description:
      'Lejeboligerne er opført som gennemmurede boliger og ligger i en nyere udstykning i Ødsted, hvor målet er at skabe et boligområde, der tilpasser sig det smukke og kuperede landskab og udnytter de mange stiforbindelser, der er i området – blandt andet til skole, idrætshal og resten af byen.',
    image: '/images/project-lille-moelkaer.jpg',
  },
  {
    slug: 'praestegaardsvej-skibet',
    name: 'Præstegårdsvej 43-81',
    location: 'Skibet, 7100 Vejle',
    units: '20 lejemål',
    buildYears: '2019–2020',
    area: '107 m²',
    description:
      'Lejeboligerne er opført som gennemmurede dobbelthuse i et meget attraktivt kvarter på lukket villavej i Skibet.',
    image: '/images/project-praestegaardsvej.jpg',
  },
  {
    slug: 'moelkaervej-6',
    name: 'Mølkærvej 6',
    location: 'Ødsted, 7100 Vejle',
    units: '5 lejemål',
    buildYears: '2020–2021',
    area: '104–107 m²',
    description: 'Boligerne opføres i 2 typer og ligger i et meget attraktivt område i Ødsted med smuk natur.',
    image: '/images/project-moelkaervej-6.jpg',
  },
  {
    slug: 'lindeparken-ny-noerup-projekt',
    name: 'Lindeparken',
    location: 'Ny Nørup',
    units: '14 lejemål',
    buildYears: '2021–2023',
    area: '112 m²',
    description:
      'Dobbelthuse beliggende i et naturskønt område på lukket villavej i Ny Nørup, midt mellem Billund og Vejle.',
  },
  {
    slug: 'kirsten-madsens-vej',
    name: 'Kirsten Madsens Vej',
    location: 'Ågård, 6040 Egtved',
    units: '24 lejemål + fælleshus',
    buildYears: '2022–2025',
    area: '105–112 m²',
    description:
      'Udstykningen er smukt placeret midt i Ågård, hvor den gamle jernlåge og den kæmpe blodbøg gennem tiden har været med til at danne rammerne for en driftig tid og et samlingspunkt for byens borgere. Udstykningen er derfor foretaget med stor respekt for historien og med fokus på fællesskab og nærhed til grøn natur. Hver bolig er individuelt opført og tilpasset grunden med fokus på terrænforholdene og de ydre rammer.',
  },
];
