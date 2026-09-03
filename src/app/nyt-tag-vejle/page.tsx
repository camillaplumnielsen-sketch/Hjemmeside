import type { Metadata } from 'next';
import { LocalLanding } from '@/components/LocalLanding';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Nyt tag i Vejle',
  description:
    'Skal du have nyt tag i Vejle? Brdr. Larsen lægger tegl-, stål- og eternittage med garanti. Lokal tømrer siden 2007. Få et gratis og fast tilbud i dag.',
  path: '/nyt-tag-vejle',
  keywords: ['nyt tag Vejle', 'tag Vejle', 'tagudskiftning Vejle'],
});

export default function NytTagVejlePage() {
  return (
    <LocalLanding
      path="/nyt-tag-vejle"
      breadcrumbLabel="Nyt tag i Vejle"
      eyebrow="Tagspecialist i Vejle"
      h1="Nyt tag i Vejle – tætte tage der holder"
      intro="Et nyt tag beskytter din bolig, sænker varmeregningen og løfter husets værdi. Brdr. Larsen lægger alle typer tage i Vejle-området – med garanti på både materialer og udførelse."
      tone="roof"
      bodyTitle="Din lokale tagmand i Vejle"
      body={[
        'Vi lægger tegl-, beton-, stål- og eternittage og rådgiver dig ærligt om det rigtige valg til dit hus og budget. I forbindelse med tagudskiftningen kan vi efterisolere, så du får et lunere hjem og en lavere varmeregning.',
        'Du kan bo i huset under hele forløbet – vi afdækker dagligt, holder en fast tidsplan og efterlader altid en ryddelig byggeplads.',
      ]}
      points={[
        'Tegl, beton, stål og eternit',
        'Efterisolering og nyt undertag',
        'Garanti på materialer og arbejde',
        'Fast pris efter gratis besigtigelse',
      ]}
      faq={[
        { question: 'Hvad koster et nyt tag i Vejle?', answer: 'De fleste tagprojekter på et parcelhus ligger mellem 180.000 og 450.000 kr. afhængigt af størrelse og materiale. Kontakt os for et hurtigt overslag.' },
        { question: 'Hvor lang tid tager det?', answer: 'Et typisk parcelhustag tager 1-3 uger. Du får altid en fast tidsplan, inden vi går i gang.' },
        { question: 'Kan jeg bo i huset imens?', answer: 'Ja. Vi afdækker taget dagligt, så din bolig er beskyttet, og du kan blive boende.' },
        { question: 'Giver I garanti?', answer: 'Ja, vi arbejder efter gældende normer og giver garanti på både materialer og udførelse.' },
      ]}
      ctaLabel="Få tilbud på nyt tag"
    />
  );
}
