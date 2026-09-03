import type { Metadata } from 'next';
import { LocalLanding } from '@/components/LocalLanding';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Tagrenovering i Vejle',
  description:
    'Tagrenovering i Vejle og omegn. Brdr. Larsen renoverer utætte og nedslidte tage – nænsomt og med respekt for husets stil. Få et gratis tilbud på din tagrenovering.',
  path: '/tagrenovering-vejle',
  keywords: ['tagrenovering Vejle', 'renovering af tag Vejle', 'utæt tag Vejle'],
});

export default function TagrenoveringVejlePage() {
  return (
    <LocalLanding
      path="/tagrenovering-vejle"
      breadcrumbLabel="Tagrenovering i Vejle"
      eyebrow="Tagrenovering i Vejle"
      h1="Tagrenovering i Vejle – nyt liv til dit tag"
      intro="Er dit tag utæt, nedslidt eller trænger til et løft? Brdr. Larsen renoverer tage i Vejle-området – ofte til en lavere pris end en fuld udskiftning, og altid med sans for husets oprindelige udtryk."
      tone="roof"
      bodyTitle="Nænsom tagrenovering med lokal erfaring"
      body={[
        'En tagrenovering kan forlænge tagets levetid betydeligt. Vi udskifter defekte tegl, fornyer inddækninger, undertag og rygning og udbedrer utætheder, før de udvikler sig til fugtskader.',
        'Har du en ældre eller bevaringsværdig bolig, genskaber vi gerne det oprindelige look med de rette materialer – samtidig med at vi bringer isolering og tæthed op til nutidig standard.',
      ]}
      points={[
        'Udbedring af utætheder',
        'Nye inddækninger og undertag',
        'Bevaring af original stil',
        'Ofte billigere end fuld udskiftning',
      ]}
      faq={[
        { question: 'Hvornår kan jeg nøjes med en tagrenovering?', answer: 'Hvis tagkonstruktionen grundlæggende er sund, kan en renovering ofte forlænge tagets levetid markant. Vi vurderer det ved en gratis besigtigelse.' },
        { question: 'Kan I bevare husets oprindelige udtryk?', answer: 'Ja. Vi arbejder med de rette materialer, så et ældre eller bevaringsværdigt tag bevarer sin karakter.' },
        { question: 'Hvad koster en tagrenovering i Vejle?', answer: 'Det afhænger af omfanget. En delvis renovering er ofte betydeligt billigere end en fuld udskiftning – kontakt os for et fast tilbud.' },
        { question: 'Hvor hurtigt kan I komme og se på det?', answer: 'Ved mistanke om utæthed prioriterer vi hurtig besigtigelse, så vi undgår følgeskader.' },
      ]}
      ctaLabel="Få tilbud på tagrenovering"
    />
  );
}
