import type { Metadata } from 'next';
import { LocalLanding } from '@/components/LocalLanding';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Tømrer i Vejle',
  description:
    'Leder du efter en dygtig tømrer i Vejle? Brdr. Larsen er din lokale tømrervirksomhed siden 2007 – tag, renovering, tilbygning og mere. Få et gratis tilbud.',
  path: '/tomrer-vejle',
  keywords: ['tømrer Vejle', 'tømrerfirma Vejle', 'håndværker Vejle'],
});

export default function TomrerVejlePage() {
  return (
    <LocalLanding
      path="/tomrer-vejle"
      breadcrumbLabel="Tømrer i Vejle"
      eyebrow="Din lokale tømrer i Vejle"
      h1="Tømrer i Vejle – kvalitetshåndværk siden 2007"
      intro="Brdr. Larsen er en erfaren tømrervirksomhed med base tæt på Vejle. Vi løser alt fra tagarbejde og renovering til tilbygninger og specialopgaver – altid med personlig service og fast pris."
      tone="renovation"
      bodyTitle="En tømrer i Vejle, du kan regne med"
      body={[
        'Som lokal tømrer kender vi Vejle og omegn til fingerspidserne – fra ældre murermestervillaer i midtbyen til nyere parcelhuse i oplandet. Det betyder hurtig responstid og løsninger, der passer til netop dit hus.',
        'Vi er 10-11 faste medarbejdere, så vi har hænder til både den lille reparation og det store byggeprojekt. Uanset opgaven får du en fast kontaktperson, en klar tidsplan og et resultat, du kan være stolt af.',
      ]}
      points={[
        'Tag, renovering, tilbygning og vinduer',
        'Fast pris og klar tidsplan',
        'Lokal responstid i Vejle-området',
        'Gratis og uforpligtende besigtigelse',
      ]}
      faq={[
        { question: 'Er I en lokal tømrer i Vejle?', answer: 'Ja. Vi har base i Bredsten lige uden for Vejle og arbejder i hele Vejle-området hver dag.' },
        { question: 'Hvilke opgaver løser I i Vejle?', answer: 'Alt inden for tømrerarbejde: nyt tag, renovering, tilbygninger, vinduer og døre, carporte og specialopgaver.' },
        { question: 'Koster det noget at få et tilbud?', answer: 'Nej, både besigtigelse og tilbud er gratis og uforpligtende.' },
        { question: 'Hvor hurtigt kan I komme?', answer: 'Kontakt os, så finder vi hurtigt en tid til besigtigelse og aftaler en realistisk tidsplan.' },
      ]}
      ctaLabel="Få et tilbud fra din lokale tømrer"
    />
  );
}
