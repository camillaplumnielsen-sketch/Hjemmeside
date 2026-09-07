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
    location: 'Kommende boligudlejningsprojekt',
    description:
      'Vi opfører lejeboliger på Amalielunden. Projektet er under udvikling, og størrelse og priser er endnu ikke fastlagt – oplysninger opdateres løbende, efterhånden som projektet tager form.',
    image: '/images/project-amalielunden.jpg',
  },
];
