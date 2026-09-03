export type FaqItem = { question: string; answer: string };

export type ProcessStep = {
  title: string;
  description: string;
};

export type Service = {
  slug: string;
  /** Kort navn til navigation og cards */
  title: string;
  /** SEO H1 / hero-overskrift */
  heading: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  /** Emoji/ikon-nøgle brugt af ServiceIcon */
  icon: 'roof' | 'renovation' | 'extension' | 'window' | 'carport' | 'special';
  benefits: { title: string; description: string }[];
  process: ProcessStep[];
  faq: FaqItem[];
  /** Slugs på relaterede cases */
  relatedCases: string[];
  keywords: string[];
};

export const services: Service[] = [
  {
    slug: 'nyt-tag',
    title: 'Nyt tag',
    heading: 'Nyt tag i Vejle og omegn',
    tagline: 'Tætte, smukke tage der holder i generationer',
    metaTitle: 'Nyt tag Vejle – Tagarbejde & tagudskiftning | Brdr. Larsen',
    metaDescription:
      'Skal du have nyt tag i Vejle eller Bredsten? Brdr. Larsen lægger tegl-, stål- og eternittage med garanti. Erfarne tømrere siden 2007. Få et gratis tilbud.',
    intro:
      'Et nyt tag beskytter din bolig, sænker varmeregningen og løfter husets værdi markant. Vi rådgiver om materialevalg, håndterer hele processen fra undertag til rygning og efterlader altid en ryddelig byggeplads.',
    icon: 'roof',
    benefits: [
      {
        title: 'Alle tagtyper',
        description: 'Tegl, betontagsten, stålpladetag, eternit og tagpap – vi finder den rigtige løsning til dit hus.',
      },
      {
        title: 'Energibesparelse',
        description: 'Nyt undertag og efterisolering giver et markant lavere varmeforbrug og bedre indeklima.',
      },
      {
        title: 'Fuld garanti',
        description: 'Vi arbejder efter gældende normer og giver garanti på både materialer og udførelse.',
      },
      {
        title: 'Fast tidsplan',
        description: 'Du får en klar tidsplan og et fast, gennemskueligt tilbud – uden overraskelser undervejs.',
      },
    ],
    process: [
      { title: 'Gratis besigtigelse', description: 'Vi kommer forbi, gennemgår taget og lytter til dine ønsker.' },
      { title: 'Tilbud & materialevalg', description: 'Du modtager et fast tilbud med anbefalede materialer og tidsplan.' },
      { title: 'Udførelse', description: 'Vores erfarne tømrere lægger taget effektivt og med sikker afdækning.' },
      { title: 'Aflevering & garanti', description: 'Vi gennemgår resultatet med dig og rydder pladsen 100 % op.' },
    ],
    faq: [
      {
        question: 'Hvad koster et nyt tag i Vejle?',
        answer:
          'Prisen afhænger af tagets størrelse, hældning og valg af materiale. De fleste tagprojekter på et parcelhus ligger mellem 180.000 og 450.000 kr. Kontakt os for et præcist tilbud.',
      },
      {
        question: 'Hvor lang tid tager en tagudskiftning?',
        answer:
          'Et typisk parcelhustag tager 1-3 uger afhængigt af størrelse og vejr. Vi giver dig altid en fast tidsplan, inden vi går i gang.',
      },
      {
        question: 'Kan jeg bo i huset imens?',
        answer:
          'Ja. Vi afdækker taget dagligt, så din bolig er beskyttet mod vejret, og du kan bo hjemme under hele forløbet.',
      },
      {
        question: 'Giver et nyt tag lavere varmeregning?',
        answer:
          'Ofte ja. I forbindelse med tagudskiftning kan vi efterisolere, hvilket giver et lavere energiforbrug og et bedre indeklima.',
      },
    ],
    relatedCases: ['tagudskiftning-jelling', 'tagrenovering-vejle-villa'],
    keywords: ['nyt tag Vejle', 'tagarbejde Vejle', 'tagudskiftning Bredsten', 'tegltag Vejle'],
  },
  {
    slug: 'renovering',
    title: 'Renovering',
    heading: 'Renovering af bolig i Vejle',
    tagline: 'Fra nedslidt til drømmebolig',
    metaTitle: 'Renovering Vejle – Boligrenovering & ombygning | Brdr. Larsen',
    metaDescription:
      'Renovering i Vejle og Bredsten. Brdr. Larsen renoverer boliger, køkkener, badeværelser og facader med kvalitetshåndværk. Erfarne tømrere siden 2007.',
    intro:
      'Uanset om det er et enkelt rum eller en gennemgribende ombygning, forvandler vi nedslidte boliger til moderne, funktionelle hjem. Vi koordinerer alle håndværkere, så du kun har én kontakt gennem hele projektet.',
    icon: 'renovation',
    benefits: [
      { title: 'Én samlet entreprenør', description: 'Vi styrer tømrer, el, VVS og maler, så du slipper for at koordinere.' },
      { title: 'Respekt for dit hjem', description: 'Vi arbejder rent og struktureret og tager hensyn til, at I bor i huset.' },
      { title: 'Håndværk i top', description: 'Detaljerne er afgørende – og det er dem, vi er kendt for lokalt.' },
      { title: 'Løbende dialog', description: 'Du er altid opdateret på fremdrift, valg og økonomi undervejs.' },
    ],
    process: [
      { title: 'Idé & rådgivning', description: 'Vi vender dine ønsker, muligheder og budget på et uforpligtende møde.' },
      { title: 'Plan & tilbud', description: 'Du får en gennemarbejdet plan med tidslinje og fast pris.' },
      { title: 'Udførelse', description: 'Vi udfører arbejdet og koordinerer alle fag undervejs.' },
      { title: 'Aflevering', description: 'Vi afleverer et færdigt, rengjort resultat – klar til indflytning.' },
    ],
    faq: [
      {
        question: 'Hjælper I med at koordinere andre håndværkere?',
        answer: 'Ja. Vi fungerer som totalentreprenør og styrer el, VVS, maler m.fl., så du kun har én kontakt.',
      },
      {
        question: 'Kan I hjælpe med tegninger og myndigheder?',
        answer: 'Ja, vi hjælper med tegninger, ansøgninger og byggetilladelser, hvis projektet kræver det.',
      },
      {
        question: 'Hvad koster en renovering?',
        answer:
          'Det afhænger helt af omfanget. Mindre renoveringer starter fra ca. 75.000 kr., mens gennemgribende ombygninger kan koste 500.000+ kr. Vi giver altid et fast tilbud.',
      },
    ],
    relatedCases: ['totalrenovering-bredsten', 'koekken-vejle'],
    keywords: ['renovering Vejle', 'boligrenovering Bredsten', 'ombygning Vejle'],
  },
  {
    slug: 'tilbygninger',
    title: 'Tilbygninger',
    heading: 'Tilbygning i Vejle og Bredsten',
    tagline: 'Mere plads – uden at flytte',
    metaTitle: 'Tilbygning Vejle – Tilbygninger & udestuer | Brdr. Larsen',
    metaDescription:
      'Drømmer du om mere plads? Brdr. Larsen bygger tilbygninger, udestuer og ekstra værelser i Vejle og Bredsten. Fast pris og kvalitetshåndværk. Få et tilbud.',
    intro:
      'En tilbygning giver jer mere plads og et hjem, der passer til livet – uden besværet ved at flytte. Vi håndterer alt fra fundament og tegninger til det færdige rum i samme stil som resten af huset.',
    icon: 'extension',
    benefits: [
      { title: 'Sømløs arkitektur', description: 'Tilbygningen matcher husets stil, så det ser ud, som om det altid har været der.' },
      { title: 'Fundament til finish', description: 'Vi tager os af hele processen – også jord, fundament og tag.' },
      { title: 'Byggetilladelse', description: 'Vi hjælper med tegninger og ansøgning, så myndighederne er på plads.' },
      { title: 'Merværdi', description: 'En tilbygning øger både livskvaliteten og boligens salgsværdi.' },
    ],
    process: [
      { title: 'Drømme & muligheder', description: 'Vi vurderer grund, hus og ønsker og skitserer mulighederne.' },
      { title: 'Tegning & tilladelse', description: 'Vi udarbejder tegninger og søger byggetilladelse.' },
      { title: 'Byggeri', description: 'Fra fundament til færdigt rum – udført af faste, erfarne folk.' },
      { title: 'Indflytning', description: 'Vi afleverer en færdig tilbygning, klar til brug.' },
    ],
    faq: [
      {
        question: 'Skal jeg have byggetilladelse til en tilbygning?',
        answer: 'De fleste tilbygninger kræver byggetilladelse. Vi hjælper med tegninger og hele ansøgningsprocessen.',
      },
      {
        question: 'Hvor lang tid tager en tilbygning?',
        answer: 'De fleste tilbygninger tager 6-14 uger afhængigt af størrelse og kompleksitet. Du får en fast tidsplan.',
      },
      {
        question: 'Kan I bygge i samme stil som mit hus?',
        answer: 'Ja. Vi matcher materialer, tag og facade, så tilbygningen falder naturligt i med det eksisterende hus.',
      },
    ],
    relatedCases: ['tilbygning-vejle-familiebolig', 'udestue-bredsten'],
    keywords: ['tilbygning Vejle', 'udestue Vejle', 'tilbygning Bredsten'],
  },
  {
    slug: 'vinduer-og-dore',
    title: 'Vinduer og døre',
    heading: 'Vinduer og døre i Vejle',
    tagline: 'Lys, komfort og lavere varmeregning',
    metaTitle: 'Vinduer og døre Vejle – Udskiftning & montering | Brdr. Larsen',
    metaDescription:
      'Nye vinduer og døre i Vejle og Bredsten. Brdr. Larsen leverer og monterer energivinduer og døre, der sænker varmeregningen. Få et uforpligtende tilbud.',
    intro:
      'Nye vinduer og døre giver mere dagslys, bedre komfort og et markant lavere varmeforbrug. Vi rådgiver om materiale og energiklasse og sikrer en tæt, professionel montering hele vejen rundt.',
    icon: 'window',
    benefits: [
      { title: 'Energivinduer', description: 'Moderne ruder sænker varmeregningen og fjerner kuldenedfald og træk.' },
      { title: 'Tæt montering', description: 'Korrekt fugning og efterisolering sikrer et tæt og holdbart resultat.' },
      { title: 'Træ, træ/alu eller plast', description: 'Vi hjælper dig med at vælge den rigtige løsning til stil og budget.' },
      { title: 'Hurtig udførelse', description: 'De fleste udskiftninger er færdige på få dage – rent og effektivt.' },
    ],
    process: [
      { title: 'Opmåling', description: 'Vi måler op og rådgiver om materiale og energiklasse.' },
      { title: 'Tilbud', description: 'Du får et fast tilbud på levering og montering.' },
      { title: 'Montering', description: 'Vi demonterer de gamle og monterer de nye tæt og præcist.' },
      { title: 'Finish', description: 'Vi efterbehandler, rydder op og gennemgår resultatet med dig.' },
    ],
    faq: [
      {
        question: 'Hvor meget kan jeg spare på nye vinduer?',
        answer:
          'Med moderne energivinduer kan du typisk reducere varmetabet gennem vinduerne betragteligt og opnå et mærkbart bedre indeklima uden træk.',
      },
      {
        question: 'Hvilke materialer anbefaler I?',
        answer: 'Det afhænger af hus og budget. Træ/alu er populært for lav vedligeholdelse, mens træ giver et klassisk udtryk.',
      },
      {
        question: 'Kan I udskifte vinduerne om vinteren?',
        answer: 'Ja. Vi arbejder hele året og udskifter ét vindue ad gangen, så huset holdes lunt undervejs.',
      },
    ],
    relatedCases: ['vinduer-vejle-parcelhus'],
    keywords: ['vinduer Vejle', 'døre Vejle', 'vinduesudskiftning Bredsten', 'energivinduer Vejle'],
  },
  {
    slug: 'carporte',
    title: 'Carporte',
    heading: 'Carporte og overdækninger i Vejle',
    tagline: 'Læ til bilen – og et løft til huset',
    metaTitle: 'Carport Vejle – Carporte, skure & overdækninger | Brdr. Larsen',
    metaDescription:
      'Ny carport i Vejle eller Bredsten? Brdr. Larsen bygger carporte, skure og overdækninger i høj kvalitet, tilpasset dit hus. Få et gratis tilbud i dag.',
    intro:
      'En veldesignet carport beskytter bilen mod vejr og vind og giver ekstra opbevaring – samtidig med at den løfter husets samlede udtryk. Vi bygger solidt, i materialer der matcher din bolig.',
    icon: 'carport',
    benefits: [
      { title: 'Tilpasset dit hus', description: 'Vi designer carporten, så den matcher husets stil, tag og farver.' },
      { title: 'Med redskabsrum', description: 'Kombinér med skur eller redskabsrum for ekstra opbevaring.' },
      { title: 'Solid konstruktion', description: 'Kvalitetstræ og korrekt fundering giver en carport, der holder i mange år.' },
      { title: 'Hurtig opførelse', description: 'De fleste carporte står færdige inden for få uger.' },
    ],
    process: [
      { title: 'Idé & design', description: 'Vi tegner en carport, der passer til grund, hus og behov.' },
      { title: 'Tilbud & tilladelse', description: 'Fast pris og hjælp til eventuel anmeldelse hos kommunen.' },
      { title: 'Opførelse', description: 'Vi funderer og bygger carporten solidt og præcist.' },
      { title: 'Aflevering', description: 'Færdig carport, ryddet plads og tilfreds kunde.' },
    ],
    faq: [
      {
        question: 'Skal en carport anmeldes til kommunen?',
        answer: 'Ofte ja, afhængigt af størrelse og placering. Vi hjælper med anmeldelse og eventuelle tilladelser.',
      },
      {
        question: 'Kan I bygge carport med skur?',
        answer: 'Ja, vi bygger gerne carporte kombineret med skur eller redskabsrum, tilpasset dine behov.',
      },
    ],
    relatedCases: ['carport-give'],
    keywords: ['carport Vejle', 'carport Bredsten', 'overdækning Vejle', 'skur Vejle'],
  },
  {
    slug: 'speciallosninger',
    title: 'Specialløsninger',
    heading: 'Specialopgaver og snedkerarbejde',
    tagline: 'Når standard ikke er nok',
    metaTitle: 'Specialløsninger & snedkerarbejde Vejle | Brdr. Larsen',
    metaDescription:
      'Specialopgaver og snedkerarbejde i Vejle og Bredsten. Brdr. Larsen løser unikke tømreropgaver med præcision og sans for detaljen. Kontakt os for en snak.',
    intro:
      'Nogle opgaver kræver særlig erfaring og et godt øje for detaljen. Vi elsker de projekter, hvor standardløsninger ikke slår til – fra indbygget inventar og trapper til komplekse konstruktioner og restaurering.',
    icon: 'special',
    benefits: [
      { title: 'Skræddersyet', description: 'Vi bygger unikke løsninger, der passer præcist til dit rum og dine ønsker.' },
      { title: 'Snedkerpræcision', description: 'Indbygget inventar, trapper og finish udført med sans for detaljen.' },
      { title: 'Erfaring med det svære', description: 'Komplekse konstruktioner og restaurering er noget af det, vi holder mest af.' },
      { title: 'Tæt dialog', description: 'Vi udvikler løsningen sammen med dig – fra idé til færdigt håndværk.' },
    ],
    process: [
      { title: 'Sparring', description: 'Vi vender idéen og finder den bedste tekniske løsning.' },
      { title: 'Tegning & tilbud', description: 'Du får en skitse og et tilbud på den skræddersyede opgave.' },
      { title: 'Fremstilling', description: 'Vi bygger og monterer med præcision og de rette materialer.' },
      { title: 'Aflevering', description: 'Et unikt resultat, du ikke finder magen til.' },
    ],
    faq: [
      {
        question: 'Hvilke specialopgaver løser I?',
        answer:
          'Alt fra indbygget inventar, specialtrapper og loftløsninger til restaurering af ældre bygninger og komplekse konstruktioner.',
      },
      {
        question: 'Kan I hjælpe, hvis jeg kun har en løs idé?',
        answer: 'Ja. Vi er vant til at udvikle løsningen sammen med kunden fra en indledende idé til færdigt håndværk.',
      },
    ],
    relatedCases: ['specialtrappe-vejle'],
    keywords: ['snedker Vejle', 'specialopgaver tømrer Vejle', 'indbygget inventar Vejle'],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
