import type { Metadata } from 'next';
import { LocalLanding } from '@/components/LocalLanding';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Tilbygning i Vejle',
  description:
    'Drømmer du om mere plads? Brdr. Larsen bygger tilbygninger, udestuer og ekstra værelser i Vejle og omegn – fra fundament til finish. Få et gratis tilbud.',
  path: '/tilbygning-vejle',
  keywords: ['tilbygning Vejle', 'udestue Vejle', 'husudvidelse Vejle'],
});

export default function TilbygningVejlePage() {
  return (
    <LocalLanding
      path="/tilbygning-vejle"
      breadcrumbLabel="Tilbygning i Vejle"
      eyebrow="Tilbygning i Vejle"
      h1="Tilbygning i Vejle – mere plads uden at flytte"
      intro="En tilbygning giver jer plads til livet – uden besværet ved at flytte. Brdr. Larsen bygger tilbygninger, udestuer og ekstra værelser i Vejle-området, i samme stil som resten af huset."
      tone="extension"
      bodyTitle="Fra idé til færdig tilbygning"
      body={[
        'Vi tager os af hele processen: rådgivning, tegninger, byggetilladelse, fundament, rejsning, tag og finish. Du har én kontakt hele vejen, og vi sørger for, at tilbygningen falder naturligt i med det eksisterende hus.',
        'En veludført tilbygning øger både jeres livskvalitet og boligens værdi. Uanset om det er et ekstra værelse, en større stue eller en isoleret udestue, bygger vi det solidt og smukt.',
      ]}
      points={[
        'Fundament til færdigt rum',
        'Hjælp til tegning og byggetilladelse',
        'Matchende tag og facade',
        'Øget boligværdi',
      ]}
      faq={[
        { question: 'Skal jeg have byggetilladelse til en tilbygning?', answer: 'De fleste tilbygninger kræver byggetilladelse. Vi hjælper med tegninger og hele ansøgningen.' },
        { question: 'Hvor lang tid tager en tilbygning?', answer: 'Typisk 6-14 uger afhængigt af størrelse og kompleksitet. Du får en fast tidsplan fra start.' },
        { question: 'Kan I bygge i samme stil som mit hus?', answer: 'Ja. Vi matcher materialer, tag og facade, så tilbygningen ser ud, som om den altid har været der.' },
        { question: 'Hvad koster en tilbygning i Vejle?', answer: 'Det afhænger af størrelse og udførelse. Kontakt os for et overslag eller en fast pris.' },
      ]}
      ctaLabel="Få tilbud på tilbygning"
    />
  );
}
