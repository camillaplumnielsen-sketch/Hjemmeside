export type CaseCategory = 'Tag' | 'Tilbygning' | 'Renovering' | 'Vinduer' | 'Carport' | 'Special';

export type ProjectCase = {
  slug: string;
  title: string;
  category: CaseCategory;
  location: string;
  year: number;
  /** Kort teaser til cards */
  summary: string;
  /** Fuld projektbeskrivelse */
  description: string;
  /** Omfang af arbejdet (vises som liste) */
  scope: string[];
  /** Varighed */
  duration: string;
  /** Farvetema til SVG-placeholders (matcher kategori-stemning) */
  tone: 'roof' | 'renovation' | 'extension' | 'window' | 'carport' | 'special';
  /** Antal billeder i galleri (genereres som placeholders) */
  gallery: number;
  highlight?: string;
  /** Sti til et rigtigt projektfoto – bruges i stedet for SVG-placeholders, når det er sat */
  image?: string;
  /** Ekstra rigtige galleribilleder – bruges i stedet for SVG-placeholders i galleriet, når det er sat */
  galleryImages?: string[];
};

export const cases: ProjectCase[] = [
  {
    slug: 'nyt-tag-betontagsten-vejle',
    title: 'Nyt tag med betontagsten i Vejle',
    category: 'Tag',
    location: 'Vejle',
    year: 2025,
    summary: 'Nyt tag med nyt undertag, lægter og sorte/antracitfarvede betontagsten.',
    description:
      'Vi lagde et helt nyt tag med nyt undertag og nye lægter, afsluttet med sorte/antracitfarvede betontagsten. Nye zinkinddækninger i kip og skotrender samt nye tagrender sikrer et tæt og holdbart tag i mange år frem.',
    scope: ['Nyt undertag', 'Nye lægter', 'Betontagsten i antracit', 'Nye zinkinddækninger', 'Nye tagrender'],
    duration: '2 uger',
    tone: 'roof',
    gallery: 0,
    image: '/images/case-nyt-tag-vejle-1.jpg',
    galleryImages: [
      '/images/case-nyt-tag-vejle-2.jpg',
      '/images/case-nyt-tag-vejle-3.jpg',
      '/images/case-nyt-tag-vejle-4.jpg',
    ],
  },
  {
    slug: 'tagudskiftning-jelling',
    title: 'Nyt tegltag på villa i Jelling',
    category: 'Tag',
    location: 'Jelling',
    year: 2024,
    summary: 'Komplet udskiftning af nedslidt eternittag til elegant, vedligeholdelsesfrit tegltag.',
    description:
      'Familien i Jelling havde et gammelt, utæt eternittag, der trak varme og krævede konstant vedligehold. Vi udskiftede hele taget til røde vingetegl med nyt undertag og efterisolering. Resultatet er et markant løft af husets udtryk – og en betydeligt lavere varmeregning.',
    scope: ['Nedrivning af eternittag', 'Nyt undertag', 'Efterisolering', 'Røde vingetegl', 'Nye tagrender'],
    duration: '3 uger',
    tone: 'roof',
    gallery: 4,
    highlight: 'Lavere varmeforbrug',
  },
  {
    slug: 'tagrenovering-vejle-villa',
    title: 'Tagrenovering af murermestervilla',
    category: 'Tag',
    location: 'Vejle',
    year: 2023,
    summary: 'Nænsom renovering af originalt tag på bevaringsværdig villa i Vejle midtby.',
    description:
      'En smuk murermestervilla fra 1930’erne trængte til et nyt tag – men udtrykket skulle bevares. Vi genskabte det oprindelige look med håndstrøgne tegl og nye zinkdetaljer, samtidig med at vi bragte isolering og undertag op til moderne standard.',
    scope: ['Bevaringsværdigt tag', 'Håndstrøgne tegl', 'Nye zinkinddækninger', 'Skjult efterisolering'],
    duration: '4 uger',
    tone: 'roof',
    gallery: 3,
    highlight: 'Bevaret original stil',
  },
  {
    slug: 'totalrenovering-bredsten',
    title: 'Totalrenovering af parcelhus',
    category: 'Renovering',
    location: 'Bredsten',
    year: 2024,
    summary: 'Et nedslidt 70’er-hus forvandlet til et lyst, moderne familiehjem.',
    description:
      'Vi stod for den samlede renovering af et parcelhus fra 1974 – nye gulve, vægge flyttet for åbent køkken-alrum, nyt bad og gennemgående ny overflade. Som totalentreprenør koordinerede vi alle fag, så familien kun havde én kontakt gennem hele forløbet.',
    scope: ['Ny planløsning', 'Køkken-alrum', 'Nyt badeværelse', 'Nye gulve', 'El & VVS koordineret'],
    duration: '10 uger',
    tone: 'renovation',
    gallery: 5,
    highlight: 'Totalentreprise',
  },
  {
    slug: 'koekken-vejle',
    title: 'Nyt køkken og alrum',
    category: 'Renovering',
    location: 'Vejle',
    year: 2023,
    summary: 'Væg fjernet og køkken åbnet op til et lyst, socialt samlingspunkt.',
    description:
      'Ved at fjerne en bærende væg og montere en skjult stålbjælke skabte vi et åbent køkken-alrum med masser af lys. Nye specialtilpassede løsninger og ny gulvbelægning binder rummene sammen.',
    scope: ['Bærende væg fjernet', 'Stålbjælke', 'Køkkenmontering', 'Ny gulvbelægning'],
    duration: '4 uger',
    tone: 'renovation',
    gallery: 3,
  },
  {
    slug: 'tilbygning-vejle-familiebolig',
    title: 'Tilbygning til familiebolig',
    category: 'Tilbygning',
    location: 'Vejle',
    year: 2024,
    summary: '40 m² tilbygning med nyt værelse og udvidet stue – i husets egen stil.',
    description:
      'Familien manglede plads, men elskede deres hus og kvarter. Vi byggede en 40 m² tilbygning med ekstra værelse og en udvidet stue med store vinduespartier mod haven. Tilbygningen matcher husets tag og facade, så den fremstår som en naturlig del af huset.',
    scope: ['Fundament', 'Rejsning & tag', 'Store vinduespartier', 'Facade i matchende materialer'],
    duration: '12 uger',
    tone: 'extension',
    gallery: 4,
    highlight: '+40 m² boligareal',
  },
  {
    slug: 'udestue-bredsten',
    title: 'Udestue med udsigt',
    category: 'Tilbygning',
    location: 'Bredsten',
    year: 2022,
    summary: 'Lys udestue der forlænger sommeren og skaber ny forbindelse til haven.',
    description:
      'En isoleret udestue med store glaspartier og skydedøre giver familien et lyst rum, der kan bruges året rundt. Vi integrerede den elegant med husets eksisterende terrasse og facade.',
    scope: ['Isoleret udestue', 'Glaspartier & skydedøre', 'Terrasseintegration'],
    duration: '6 uger',
    tone: 'extension',
    gallery: 3,
  },
  {
    slug: 'vinduer-vejle-parcelhus',
    title: 'Nye energivinduer i hele huset',
    category: 'Vinduer',
    location: 'Vejle',
    year: 2023,
    summary: 'Samtlige vinduer og døre udskiftet til træ/alu – slut med træk og kuldenedfald.',
    description:
      'Huset havde originale termoruder fra 80’erne med træk og kuldenedfald. Vi udskiftede alle vinduer og yderdøre til vedligeholdelsesfri træ/alu med moderne energiruder. Familien mærkede med det samme et lunere hjem.',
    scope: ['16 nye vinduer', '2 yderdøre', 'Træ/alu energiruder', 'Tæt fugning & efterisolering'],
    duration: '1 uge',
    tone: 'window',
    gallery: 3,
    highlight: 'Bedre indeklima',
  },
  {
    slug: 'vinduer-erhvervsbygning-nr-snede',
    title: 'Vinduesmontage i ny erhvervsbygning for Give Elementfabrik',
    category: 'Vinduer',
    location: 'Nr. Snede',
    year: 2025,
    summary: 'Montering af vinduer i en ny erhvervsbygning for Give Elementfabrik i Nr. Snede.',
    description:
      'Give Elementfabrik fik opført en ny erhvervsbygning i Nr. Snede, og vi stod for montering af vinduerne i facaden. Præcis opmåling og korrekt indbygning sikrer tæthed og god isolering – også når det er store vinduespartier i en erhvervsbygning.',
    scope: ['Vinduesmontage i erhvervsbygning', 'Tilpasning til facadeelementer', 'Tætning og isolering'],
    duration: '3 dage',
    tone: 'window',
    gallery: 0,
    image: '/images/case-vinduer-nr-snede.jpg',
  },
  {
    slug: 'carport-give',
    title: 'Dobbeltcarport med redskabsrum',
    category: 'Carport',
    location: 'Give',
    year: 2024,
    summary: 'Solid dobbeltcarport med integreret skur, designet til at matche huset.',
    description:
      'Vi byggede en dobbeltcarport med integreret redskabsrum i sortmalet træ, der spiller flot sammen med husets facade. Konstruktionen er solid, funderet korrekt og bygget til at holde i mange år.',
    scope: ['Dobbeltcarport', 'Integreret redskabsrum', 'Sortmalet træ', 'Fast fundering'],
    duration: '2 uger',
    tone: 'carport',
    gallery: 3,
  },
  {
    slug: 'specialtrappe-vejle',
    title: 'Specialbygget trappe i egetræ',
    category: 'Special',
    location: 'Vejle',
    year: 2023,
    summary: 'Håndlavet, svævende egetræstrappe som husets nye midtpunkt.',
    description:
      'En unik opgave, hvor vi designede og byggede en svævende egetræstrappe med skjult ophæng. Hvert trin er håndlavet og tilpasset, så trappen fremstår som et møbel og et markant midtpunkt i boligen.',
    scope: ['Design & tegning', 'Håndlavede egetrin', 'Skjult stålophæng', 'Montering'],
    duration: '3 uger',
    tone: 'special',
    gallery: 3,
    highlight: 'Unikt snedkerarbejde',
  },
  {
    slug: 'traebro-vejle-aa',
    title: 'Ny trædækket gangbro over Vejle Å',
    category: 'Special',
    location: 'Vejle Å',
    year: 2025,
    summary: 'Skræddersyet gangbro med trædæk på stålramme, bygget hen over Vejle Å.',
    description:
      'En specialopgave, hvor vi byggede en gangbro over Vejle Å – med et solidt trædæk lagt oven på en eksisterende stålramme. Opgaven krævede præcist arbejde tæt på vandet, og resultatet er en flot og holdbar gangbro, der falder naturligt ind i naturen omkring åen.',
    scope: ['Trædæk på stålramme', 'Tilpasning og opskæring på stedet', 'Fastgørelse og finish'],
    duration: '2 dage',
    tone: 'special',
    gallery: 0,
    image: '/images/case-bro-vejle-aa-1.jpg',
    galleryImages: ['/images/case-bro-vejle-aa-2.jpg'],
    highlight: 'Bygget over vand',
  },
];

export const caseCategories: CaseCategory[] = ['Tag', 'Tilbygning', 'Renovering', 'Vinduer', 'Carport', 'Special'];

export function getCase(slug: string): ProjectCase | undefined {
  return cases.find((c) => c.slug === slug);
}
