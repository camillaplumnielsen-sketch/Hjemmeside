import type { Metadata } from 'next';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { SceneImage } from '@/components/SceneImage';
import { CTASection } from '@/components/CTASection';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SetHeaderTheme } from '@/components/HeaderTheme';
import { buildMetadata } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Om os – Familietømrer i Bredsten & Vejle',
  description:
    'Brdr. Larsen er en lokal familietømrervirksomhed etableret i 2007. Mød holdet, læs om vores værdier og den måde, vi arbejder på i Vejle-området.',
  path: '/om-os',
  keywords: ['om Brdr. Larsen', 'tømrer familievirksomhed Vejle'],
});

const values = [
  { title: 'Kvalitet frem for alt', description: 'Vi går aldrig på kompromis med håndværket. Det, vi bygger, skal holde.' },
  { title: 'Ærlig rådgivning', description: 'Vi siger tingene, som de er – også når den billigste løsning er den rigtige.' },
  { title: 'Aftaler der holder', description: 'Fast pris, klar tidsplan og en byggeplads, vi rydder pænt op på.' },
  { title: 'Lokalt engagement', description: 'Vi bor her selv. Vores ry i lokalområdet betyder alt for os.' },
];

const team = [
  { name: 'Larsen', role: 'Indehaver & tømrermester', tone: 'roof' as const },
  { name: 'Larsen', role: 'Indehaver & projektleder', tone: 'extension' as const },
  { name: 'Vores svende', role: 'Erfarne tømrere', tone: 'renovation' as const },
  { name: 'Lærlinge', role: 'Fremtidens håndværkere', tone: 'special' as const },
];

export default function OmOsPage() {
  return (
    <>
      <SetHeaderTheme theme="light" />
      <section className="relative overflow-hidden bg-forest-950 pt-[110px] text-cream-50">
        <div className="absolute inset-0 opacity-30">
          <SceneImage tone="hero" variant="neutral" className="h-full w-full object-cover" rounded={false} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 to-forest-950/50" />
        <div className="container-max relative z-10 py-16">
          <Breadcrumbs items={[{ name: 'Forside', path: '/' }, { name: 'Om os', path: '/om-os' }]} />
          <h1 className="mt-8 max-w-3xl font-display text-display-lg font-semibold text-balance">
            En lokal familievirksomhed med håndværket i centrum
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-lg text-cream-100/85">
            Siden {site.founded} har vi bygget vores navn på ærligt arbejde, personlig service og et resultat, kunderne
            gerne anbefaler videre. Vi er {site.employees} medarbejdere med base i {site.address.city}.
          </p>
        </div>
      </section>

      {/* Historie */}
      <section className="container-max py-section">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Vores historie"
              title="Startet af to brødre i 2007"
              description="Det begyndte med en fælles passion for godt håndværk og en ambition om at være den tømrer, man trygt anbefaler til naboen. Den ambition er den samme i dag – bare med et større hold og endnu mere erfaring."
            />
            <p className="mt-6 prose-brand">
              Vi tror på, at de bedste projekter opstår i tæt dialog. Derfor er der altid en fast kontaktperson på din
              opgave, og vi lægger en stor ære i at levere til aftalt tid og pris. Fra det mindste vindue til den store
              tilbygning – vi behandler dit hjem, som var det vores eget.
            </p>
          </div>
          <Reveal delay={0.1} className="overflow-hidden rounded-4xl border border-forest-100 shadow-lift">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/om-os-vaerksted.jpg"
              alt="Værkstedet i Bredsten, hvor Tømrerfirmaet Brdr. Larsens projekter starter"
              className="aspect-[4/5] w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Værdier */}
      <section className="container-max py-section">
        <SectionHeading align="center" eyebrow="Værdier" title="Det, vi står for" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.06} className="rounded-3xl border border-forest-100 bg-white p-6 shadow-soft">
              <h3 className="font-display text-lg font-semibold text-forest-900">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-forest-600">{v.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-cream-100 py-section">
        <div className="container-max">
          <SectionHeading align="center" eyebrow="Holdet" title="Menneskene bag håndværket" description="Et fast, erfarent hold der møder op med et smil – og går hjem med en opgave løst ordentligt." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal key={m.role} delay={i * 0.06} className="overflow-hidden rounded-3xl border border-forest-100 bg-white shadow-soft">
                <SceneImage tone={m.tone} variant="after" seed={i} className="aspect-square w-full object-cover" rounded={false} />
                <div className="p-5">
                  <p className="font-display text-lg font-semibold text-forest-900">Brdr. {m.name}</p>
                  <p className="text-sm text-wood-600">{m.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
