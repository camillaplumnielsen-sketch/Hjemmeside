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
  /** Rigtige før/efter-billeder til den interaktive slider – bruges i stedet for SVG-placeholders, når begge er sat */
  beforeImage?: string;
  afterImage?: string;
  /** Skjul projektet i det begrænsede udvalg på forsiden ("Se hvad vi har bygget") – vises stadig under Projekter */
  hideFromHome?: boolean;
};

// Projekter med rigtige billeder er listet først, så forsidens udvalg og toppen af
// "Alle projekter" viser rigtige fotos. Projekter uden rigtige billeder (endnu) ligger
// derefter og er fortsat tilgængelige under deres respektive kategori-filtre.
export const cases: ProjectCase[] = [
  {
    slug: 'renovering-knabberup',
    title: 'Omfattende renovering af Knabberup Mølle',
    category: 'Renovering',
    location: 'Knabberup',
    year: 2025,
    summary: 'Ny kvist, ændret rumindeling og tilbygning i begge plan på et smukt bindingsværkshus.',
    description:
      'Knabberup Mølle gennemgår en omfattende renovering, hvor der blandt andet etableres en ny kvist, rumindelingen ændres, og der bygges til i begge plan. Målet er at skabe en mere funktionel bolig med gode løsninger, der passer til familiens behov.',
    scope: ['Ny kvist', 'Ændret rumindeling', 'Tilbygning i begge plan', 'Nye vinduer'],
    duration: 'Igangværende',
    tone: 'renovation',
    gallery: 0,
    image: '/images/case-knabberup-efter.jpg',
    galleryImages: [
      '/images/case-knabberup-foer.jpg',
      '/images/case-knabberup-2.jpg',
      '/images/case-knabberup-have.jpg',
      '/images/case-knabberup-kvist-indvendig.jpg',
      '/images/case-knabberup-haandvaerk.jpg',
      '/images/case-knabberup-hall.jpg',
      '/images/case-knabberup-doer.jpg',
      '/images/case-knabberup-gulv.jpg',
      '/images/case-knabberup-vindue-1.jpg',
      '/images/case-knabberup-vindue-2.jpg',
    ],
  },
  {
    slug: 'tilbygning-spisestue-vinrum-bredsten',
    title: 'Ny tilbygning med spisestue og vinrum',
    category: 'Tilbygning',
    location: 'Bredsten',
    year: 2025,
    summary: 'Ny tilbygning med større spisestue og et stemningsfuldt vinrum, der skaber mere plads og bedre sammenhæng i boligen.',
    description:
      'Ny tilbygning, som har skabt mere plads og bedre sammenhæng i boligen. Kundens ønske var en større spisestue og et stemningsfuldt vinrum. Resultatet er en tilbygning, der passer naturligt til villaens arkitektur og samtidig opfylder familiens behov for mere funktionel plads.',
    scope: ['Ny spisestue', 'Stemningsfuldt vinrum', 'Store glaspartier', 'Facade i matchende materialer'],
    duration: '10 uger',
    tone: 'extension',
    gallery: 0,
    image: '/images/case-tilbygning-bredsten-1.jpg',
    galleryImages: ['/images/case-tilbygning-bredsten-2.jpg', '/images/case-tilbygning-bredsten-3.jpg'],
  },
  {
    slug: 'vinduesudskiftning-torvehallerne-vejle',
    title: 'Vinduesudskiftning i Torvehallerne Vejle',
    category: 'Vinduer',
    location: 'Vejle',
    year: 2025,
    summary: 'Udskiftning af vinduer som led i en omfattende istandsættelse af hotelværelser i hjertet af Vejle.',
    description:
      'Et spændende projekt i hjertet af Vejle, hvor vi er i gang med en omfattende istandsættelse af hotelværelserne i en del af Torvehallerne. Som en del af arbejdet har vi udskiftet vinduerne i facaden, så bygningen fremstår tæt og tidssvarende – uden at gå på kompromis med det oprindelige udtryk.',
    scope: ['Udskiftning af vinduer', 'Istandsættelse af hotelværelser', 'Tilpasning til bygningens oprindelige udtryk'],
    duration: 'Igangværende',
    tone: 'window',
    gallery: 0,
    image: '/images/case-torvehallerne-efter.jpg',
    galleryImages: ['/images/case-torvehallerne-foer.jpg'],
    highlight: 'Hjertet af Vejle',
  },
  {
    slug: 'sommerhus-vesterhavet',
    title: 'Sommerhus ved Vesterhavet',
    category: 'Special',
    location: 'Vesterhavet',
    year: 2025,
    summary: 'Arkitekttegnet sommerhus i thermowood med tag i listetækning, facade og skorsten i kulbrændt Petersen-tegl.',
    description:
      'Tæt på klitterne ved Vesterhavet har vi opført dette sommerhus, hvor hvert materialevalg er tænkt ind i det barske kystklima. Facaden er beklædt med thermowood, der giver husets ydre en rolig, taktil rytme og en overflade, der ældes smukt i det salte, vestjyske vejr. Taget er udført som listetækning, mens hele den ene facade og skorstenen er opført i kulbrændt Petersen-tegl, der tilfører huset patina og karakter, der kun bliver smukkere med årene. Den markante geometriske form med de høje glaspartier trækker lys og udsigt langt ind i rummene, og kobbertagrender fuldender detaljerne. Resultatet er et sommerhus, der er robust nok til vestkystens vind og vejr – og et sted, man med det samme kan mærke er bygget med hånd og øje for detaljen.',
    scope: ['Facade i thermowood', 'Tag udført som listetækning', 'Facade og skorsten i kulbrændt Petersen-tegl', 'Kobbertagrender'],
    duration: '14 uger',
    tone: 'special',
    gallery: 0,
    image: '/images/case-sommerhus-vesterhavet-1.jpg',
    galleryImages: [
      '/images/case-sommerhus-vesterhavet-2.jpg',
      '/images/case-sommerhus-vesterhavet-3.jpg',
      '/images/case-sommerhus-vesterhavet-4.jpg',
      '/images/case-sommerhus-vesterhavet-5.jpg',
      '/images/case-sommerhus-vesterhavet-6.jpg',
      '/images/case-sommerhus-vesterhavet-7.jpg',
      '/images/case-sommerhus-vesterhavet-8.jpg',
      '/images/case-sommerhus-vesterhavet-9.jpg',
    ],
    highlight: 'Ved Vesterhavet',
  },
  {
    slug: 'hems-sommerhus-vesterhavet',
    title: 'Hems i sommerhus ved Vesterhavet',
    category: 'Tilbygning',
    location: 'Vesterhavet',
    year: 2025,
    summary: 'Ny hems i sommerhus ved Vesterhavet – mere plads i loftsrummet med et markant ovalt vindue og udsigt til klitterne.',
    description:
      'Sommerhuset manglede plads, og løsningen blev en ny hems i tagrummet. Vi blev tilkaldt i forbindelse med, at sommerhuset samtidig fik nyt stråtag – selve stråtaget er udført af andre håndværkere, mens vores opgave udelukkende var at tegne og bygge hemsen. Det skæve tagrum stillede særlige krav til konstruktionen, og resultatet er en organisk formet niche med et stort, ovalt vindue, der trækker lys og udsigt til klitterne og det åbne landskab helt ind i rummet. Med nyt gulv og en gennemført finish fremstår hemsen i dag som et hyggeligt ekstra rum, hvor familien kan samles – uden at man har rørt ved husets ydre.',
    scope: ['Ny hems i tagrum', 'Ovalt vinduesniche med udsigt', 'Nyt gulv i hemsrum', 'Udført sideløbende med sommerhusets nye stråtag (udført af andre)'],
    duration: '3 uger',
    tone: 'extension',
    gallery: 0,
    image: '/images/case-hems-sommerhus-1.jpg',
    galleryImages: [
      '/images/case-hems-sommerhus-4.jpg',
      '/images/case-hems-sommerhus-2.jpg',
      '/images/case-hems-sommerhus-3.jpg',
    ],
    highlight: 'Ved Vesterhavet',
    hideFromHome: true,
  },
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
  {
    slug: 'vindueselementer-lejlighedskompleks-fredericia',
    title: 'Vinduesmontage i nyt lejlighedskompleks i Fredericia',
    category: 'Vinduer',
    location: 'Fredericia',
    year: 2025,
    summary: 'Montering af 147 vindueselementer i et nyt lejlighedskompleks i Fredericia.',
    description:
      'Et større projekt, hvor vi har stået for vinduesmontagen i et nyt lejlighedskompleks i Fredericia. I alt har vi monteret 147 vindueselementer, og projektet er nu godt på vej mod næste fase.',
    scope: ['Montage af 147 vindueselementer', 'Præcis opmåling og tilpasning', 'Tætning og isolering'],
    duration: 'Igangværende',
    tone: 'window',
    gallery: 0,
    image: '/images/case-fredericia-vinduer-1.jpg',
    galleryImages: ['/images/case-fredericia-vinduer-2.jpg', '/images/case-fredericia-vinduer-3.jpg'],
    highlight: '147 vindueselementer',
  },
  {
    slug: 'fuldlimet-egetraesgulv-bredsten',
    title: 'Fuldlimet egetræsgulv',
    category: 'Renovering',
    location: 'Bredsten',
    year: 2025,
    summary: 'Eksklusivt fuldlimet egetræsgulv med massiv, dæmpet akustik – limet direkte til undergulvet.',
    description:
      'Et fuldlimet egetræsgulv er en eksklusiv og utrolig stabil gulvløsning, hvor gulvbrædderne – enten massive planker eller lamelplank – limes direkte fast til undergulvet. Det fjerner den "hule" lyd, man kender fra svømmende gulve, og giver i stedet en massiv, dæmpet akustik.',
    scope: ['Fuldlimet montering', 'Egetræsplanker', 'Limet direkte til undergulv', 'Massiv, dæmpet akustik'],
    duration: '1 uge',
    tone: 'renovation',
    gallery: 0,
    image: '/images/case-traegulv-bredsten-1.jpg',
    galleryImages: ['/images/case-traegulv-bredsten-2.jpg', '/images/case-traegulv-bredsten-3.jpg'],
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
];

export const caseCategories: CaseCategory[] = ['Tag', 'Tilbygning', 'Renovering', 'Vinduer', 'Carport', 'Special'];

export function getCase(slug: string): ProjectCase | undefined {
  return cases.find((c) => c.slug === slug);
}
