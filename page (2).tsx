import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CTASection } from '@/components/CTASection';
import { SetHeaderTheme } from '@/components/HeaderTheme';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: '7 ting du skal vide før du skifter tag – gratis guide',
  description:
    'Gratis guide fra Brdr. Larsen: de 7 vigtigste ting du skal vide, før du skifter tag. Undgå dyre fejl og træf det rigtige valg.',
  path: '/gratis-guide/nyt-tag',
  keywords: ['guide nyt tag', 'skifte tag råd'],
});

const points = [
  {
    title: 'Vælg materialet med hovedet – ikke kun øjet',
    text: 'Tegl, beton, stål og eternit har hver deres fordele i pris, levetid og vedligehold. Det smukkeste tag er ikke altid det rigtige for netop dit hus og dit budget. Få rådgivning, før du beslutter dig.',
  },
  {
    title: 'Undertaget er lige så vigtigt som taget',
    text: 'Et godt undertag beskytter mod fygesne og kondens. Spar aldrig her – det er billigere at gøre rigtigt første gang end at udbedre fugtskader senere.',
  },
  {
    title: 'Udnyt muligheden for at efterisolere',
    text: 'Når taget alligevel er åbent, er det oplagt at efterisolere. Det giver et lunere hjem, bedre indeklima og en lavere varmeregning i mange år frem.',
  },
  {
    title: 'Tjek for skjulte skader i konstruktionen',
    text: 'Råd i spær og lægter opdages ofte først, når det gamle tag er af. En erfaren tømrer vurderer konstruktionen og medregner eventuelle udbedringer i tilbuddet.',
  },
  {
    title: 'Forstå hvad der er med i prisen',
    text: 'Er stillads, affald, nye tagrender og inddækninger med? Bed altid om et specificeret tilbud, så du kan sammenligne æbler med æbler.',
  },
  {
    title: 'Planlæg efter vejret og årstiden',
    text: 'Tagarbejde kan udføres året rundt, men en god plan for afdækning betyder, at din bolig er beskyttet – også hvis vejret driller undervejs.',
  },
  {
    title: 'Vælg en lokal håndværker du kan stole på',
    text: 'Et tag er en stor investering. Vælg en tømrer med lokale referencer, garanti og et godt ry – så du er sikret kvalitet og tryghed hele vejen.',
  },
];

export default function TagGuidePage() {
  return (
    <>
      <SetHeaderTheme theme="dark" />
      <section className="bg-cream-100 pt-[110px]">
        <div className="container-max py-14">
          <Breadcrumbs items={[{ name: 'Forside', path: '/' }, { name: 'Gratis guide', path: '/gratis-guide/nyt-tag' }]} />
          <span className="eyebrow mt-8">Gratis guide</span>
          <h1 className="mt-4 max-w-3xl font-display text-display-md font-semibold text-balance text-forest-900">
            7 ting du skal vide, før du skifter tag
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-lg text-forest-600">
            Et nyt tag er en af de største investeringer i dit hus. Her er de vigtigste ting, vi altid rådgiver vores
            kunder om – så du undgår de dyre fejl.
          </p>
        </div>
      </section>

      <article className="container-max max-w-3xl py-section">
        <ol className="space-y-8">
          {points.map((p, i) => (
            <li key={p.title} className="flex gap-5">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-forest-700 font-display text-lg font-semibold text-cream-50">
                {i + 1}
              </span>
              <div>
                <h2 className="font-display text-xl font-semibold text-forest-900">{p.title}</h2>
                <p className="mt-2 prose-brand">{p.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 rounded-3xl border border-forest-100 bg-white p-6 shadow-soft sm:p-8">
          <h2 className="font-display text-xl font-semibold text-forest-900">Klar til at tage næste skridt?</h2>
          <p className="mt-2 text-forest-600">
            Vi kigger gerne forbi til en gratis besigtigelse og giver dig et fast, uforpligtende tilbud på dit nye tag.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link href="/kontakt" className="btn-accent">
              Få et gratis tilbud
            </Link>
            <Link href="/nyt-tag-vejle" className="btn-outline">
              Læs om nyt tag i Vejle
            </Link>
          </div>
        </div>
      </article>

      <CTASection primaryLabel="Få tilbud på nyt tag" />
    </>
  );
}
