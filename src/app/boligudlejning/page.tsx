import type { Metadata } from 'next';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SetHeaderTheme } from '@/components/HeaderTheme';
import { buildMetadata } from '@/lib/seo';
import { rentals, formatDKK } from '@/data/rentals';

export const metadata: Metadata = buildMetadata({
  title: 'Boligudlejning – Moderne lejeboliger',
  description:
    'Brdr. Larsen udvikler og opfører egne dobbelthusprojekter til udlejning. Se vores aktuelle ledige lejemål og kontakt os for yderligere information.',
  path: '/boligudlejning',
  keywords: ['boligudlejning Vejle', 'lejebolig Vejle', 'dobbelthus til leje'],
});

export default function BoligudlejningPage() {
  return (
    <>
      <SetHeaderTheme theme="light" />
      <section className="bg-forest-950 pt-[110px] text-cream-50">
        <div className="container-max py-14">
          <Breadcrumbs items={[{ name: 'Forside', path: '/' }, { name: 'Boligudlejning', path: '/boligudlejning' }]} />
          <h1 className="mt-8 max-w-3xl font-display text-display-lg font-semibold text-balance">
            Moderne lejeboliger med fokus på kvalitet
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-lg text-cream-100/85">
            Hos Brdr. Larsen udvikler og opfører vi egne dobbelthusprojekter. Vores boliger er designet med fokus på
            funktionalitet, komfort og lavt vedligehold. Vi vælger materialer, som holder, og planløsninger, der
            fungerer i hverdagen.
          </p>
        </div>
      </section>

      <section className="container-max py-section">
        <SectionHeading eyebrow="Aktuelle lejemål" title="Her finder du vores ledige boliger" />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {rentals.map((rental, i) => (
            <Reveal
              key={rental.slug}
              delay={i * 0.06}
              className="rounded-3xl border border-forest-100 bg-white p-6 shadow-soft"
            >
              <h3 className="font-display text-xl font-semibold text-forest-900">
                {rental.name} <span className="text-forest-500">· {rental.location}</span>
              </h3>

              <dl className="mt-5 space-y-3 border-t border-forest-100 pt-5 text-sm">
                <div className="flex justify-between">
                  <dt className="text-forest-500">Adresse</dt>
                  <dd className="font-medium text-forest-800">{rental.address}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-forest-500">Boligareal</dt>
                  <dd className="font-medium text-forest-800">{rental.areaM2} m²</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-forest-500">Antal værelser</dt>
                  <dd className="font-medium text-forest-800">{rental.rooms}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-forest-500">Månedlig husleje</dt>
                  <dd className="font-medium text-forest-800">{formatDKK(rental.rentMonthly)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-forest-500">Depositum</dt>
                  <dd className="font-medium text-forest-800">{formatDKK(rental.deposit)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-forest-500">Ledig fra</dt>
                  <dd className="font-medium text-forest-800">{rental.availableFrom}</dd>
                </div>
              </dl>

              <div className="mt-5 border-t border-forest-100 pt-5">
                <h4 className="font-display text-base font-semibold text-forest-900">Beskrivelse</h4>
                <p className="mt-2 text-sm leading-relaxed text-forest-600">{rental.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection title="Interesseret?" description="Kontakt os for yderligere information." primaryLabel="Kontakt os" />
    </>
  );
}
