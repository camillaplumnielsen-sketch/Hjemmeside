import type { Metadata } from 'next';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { SceneImage } from '@/components/SceneImage';
import { CTASection } from '@/components/CTASection';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SetHeaderTheme } from '@/components/HeaderTheme';
import { buildMetadata } from '@/lib/seo';
import { rentals, formatDKK } from '@/data/rentals';
import { rentalProjects } from '@/data/rental-projects';
import { upcomingProjects } from '@/data/upcoming-projects';
import { mailHref } from '@/lib/site';

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
              className="overflow-hidden rounded-3xl border border-forest-100 bg-white shadow-soft"
            >
              {rental.images && rental.images.length > 0 && (
                <div className={`grid gap-0.5 bg-forest-100 ${rental.images.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
                  {rental.images.map((image, imgIndex) => (
                    <div key={image} className="aspect-[4/3] w-full">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={image}
                        alt={`${rental.name} – billede ${imgIndex + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}

              <div className="p-6">
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
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-max pb-section">
        <SectionHeading eyebrow="Kommende projekter" title="Nye boligprojekter på vej" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {upcomingProjects.map((project, i) => (
            <Reveal
              key={project.slug}
              delay={i * 0.06}
              className="overflow-hidden rounded-3xl border border-forest-100 bg-white shadow-soft"
            >
              <div className="relative aspect-[4/3] w-full">
                {project.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={project.image} alt={project.name} className="h-full w-full object-cover" />
                ) : (
                  <SceneImage tone="special" variant="after" seed={i} className="h-full w-full object-cover" rounded={false} />
                )}
                <span className="absolute left-4 top-4 rounded-full bg-forest-900/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cream-50">
                  Kommende projekt
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-forest-900">{project.name}</h3>
                <p className="text-sm text-forest-500">{project.location}</p>
                <p className="mt-4 text-sm leading-relaxed text-forest-600">{project.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-max pb-section">
        <Reveal className="rounded-3xl border border-forest-100 bg-white p-6 shadow-soft sm:p-8">
          <p className="text-forest-700">
            Har du spørgsmål til ledige lejemål, fremvisninger, venteliste eller eksisterende lejemål, kan du
            kontakte vores ejendomsadministrator.
          </p>
          <div className="mt-5 flex flex-col gap-4 border-t border-forest-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-lg font-semibold text-forest-900">Camilla Plum Nielsen</p>
              <p className="text-sm text-wood-600">Ejendomsadministrator</p>
            </div>
            <div className="flex flex-col gap-1 text-sm sm:items-end">
              <a href="tel:+4525318717" className="font-semibold text-forest-800 hover:underline">
                Telefon: 25 31 87 17
              </a>
              <a href={mailHref} className="text-forest-600 hover:underline">
                E-mail: vejle.brdrlarsen@outlook.dk
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="surface-wood py-section">
        <div className="container-max">
          <SectionHeading
            eyebrow="Tidligere projekter"
            title="Gennemførte boligprojekter"
            description="Her kan du se et udvalg af vores tidligere bygge- og udlejningsprojekter."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rentalProjects.map((project, i) => (
              <Reveal
                key={project.slug}
                delay={i * 0.06}
                className="overflow-hidden rounded-3xl border border-forest-100 bg-white shadow-soft"
              >
                <div className="aspect-[4/3] w-full">
                  {project.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={project.image} alt={project.name} className="h-full w-full object-cover" />
                  ) : (
                    <SceneImage tone="renovation" variant="after" seed={i} className="h-full w-full object-cover" rounded={false} />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-forest-900">{project.name}</h3>
                  <p className="text-sm text-forest-500">{project.location}</p>

                  <dl className="mt-4 space-y-2 border-t border-forest-100 pt-4 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-forest-500">Lejemål</dt>
                      <dd className="font-medium text-forest-800">{project.units}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-forest-500">Byggeår</dt>
                      <dd className="font-medium text-forest-800">{project.buildYears}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-forest-500">Boligareal</dt>
                      <dd className="font-medium text-forest-800">{project.area}</dd>
                    </div>
                  </dl>

                  <p className="mt-4 text-sm leading-relaxed text-forest-600">{project.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Interesseret?"
        description="Kontakt os for yderligere information."
        primaryLabel="Kontakt os"
        phoneDisplay="25 31 87 17"
        phoneHref="tel:+4525318717"
      />
    </>
  );
}
