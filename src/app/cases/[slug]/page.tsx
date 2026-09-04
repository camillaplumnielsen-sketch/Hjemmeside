import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cases, getCase } from '@/data/cases';
import { SceneImage } from '@/components/SceneImage';
import { BeforeAfterSlider } from '@/components/BeforeAfterSlider';
import { Reveal } from '@/components/Reveal';
import { CaseCard } from '@/components/CaseCard';
import { SectionHeading } from '@/components/SectionHeading';
import { CTASection } from '@/components/CTASection';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { SetHeaderTheme } from '@/components/HeaderTheme';
import { breadcrumbSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const c = getCase(params.slug);
  if (!c) return {};
  return buildMetadata({
    title: c.title,
    description: `${c.summary} Se projektet i ${c.location} udført af Brdr. Larsen.`,
    path: `/cases/${c.slug}`,
    keywords: [c.category.toLowerCase() + ' ' + c.location, 'tømrer ' + c.location],
  });
}

export default function CaseDetailPage({ params }: { params: { slug: string } }) {
  const project = getCase(params.slug);
  if (!project) notFound();

  const related = cases.filter((c) => c.slug !== project.slug && c.category === project.category).slice(0, 3);
  const breadcrumbs = [
    { name: 'Forside', path: '/' },
    { name: 'Cases', path: '/cases' },
    { name: project.title, path: `/cases/${project.slug}` },
  ];

  return (
    <>
      <SetHeaderTheme theme="dark" />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <section className="bg-cream-100 pt-[110px]">
        <div className="container-max py-12">
          <Breadcrumbs items={breadcrumbs} />
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-forest-700 px-3 py-1 text-xs font-semibold text-cream-50">{project.category}</span>
            <span className="text-sm font-medium text-forest-500">{project.location}</span>
          </div>
          <h1 className="mt-4 max-w-3xl font-display text-display-md font-semibold text-balance text-forest-900">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-lg text-forest-600">{project.summary}</p>
        </div>
      </section>

      {/* Foto / Før-efter */}
      <section className="container-max py-14">
        {project.image ? (
          <>
            <SectionHeading eyebrow="Fra projektet" title="Billede fra opgaven" />
            <div className="mt-8 overflow-hidden rounded-3xl border border-forest-100 shadow-lift">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={project.image} alt={project.title} className="w-full object-cover" />
            </div>
          </>
        ) : (
          <>
            <SectionHeading eyebrow="Før / efter" title="Se forvandlingen" />
            <div className="mt-8">
              <BeforeAfterSlider tone={project.tone} seed={project.gallery} />
            </div>
          </>
        )}
      </section>

      {/* Beskrivelse + omfang */}
      <section className="container-max pb-14">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-semibold text-forest-900">Om projektet</h2>
            <p className="mt-4 prose-brand">{project.description}</p>
          </div>
          <aside className="h-fit rounded-3xl border border-forest-100 bg-white p-6 shadow-soft">
            <h3 className="font-display text-lg font-semibold text-forest-900">Arbejdsomfang</h3>
            <ul className="mt-4 space-y-3">
              {project.scope.map((s) => (
                <li key={s} className="flex items-start gap-2.5 text-sm text-forest-700">
                  <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 flex-none text-wood-500" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m5 13 4 4L19 7" />
                  </svg>
                  {s}
                </li>
              ))}
            </ul>
            <dl className="mt-6 space-y-3 border-t border-forest-100 pt-6 text-sm">
              <div className="flex justify-between">
                <dt className="text-forest-500">Lokation</dt>
                <dd className="font-medium text-forest-800">{project.location}</dd>
              </div>
            </dl>
            <Link href="/kontakt" className="btn-primary mt-6 w-full">
              Få et lignende projekt
            </Link>
          </aside>
        </div>
      </section>

      {/* Galleri */}
      {project.galleryImages && project.galleryImages.length > 0 ? (
        <section className="container-max pb-section">
          <h2 className="font-display text-2xl font-semibold text-forest-900">Galleri</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.galleryImages.map((src, i) => (
              <Reveal key={src} delay={i * 0.05} className="overflow-hidden rounded-2xl border border-forest-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={`${project.title} – billede ${i + 2}`} className="aspect-[4/3] w-full object-cover" />
              </Reveal>
            ))}
          </div>
        </section>
      ) : (
        project.gallery > 0 && (
          <section className="container-max pb-section">
            <h2 className="font-display text-2xl font-semibold text-forest-900">Galleri</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: project.gallery }).map((_, i) => (
                <Reveal key={i} delay={i * 0.05} className="overflow-hidden rounded-2xl border border-forest-100">
                  <SceneImage tone={project.tone} variant={i % 3 === 2 ? 'before' : 'after'} seed={i + 1} className="aspect-[4/3] w-full object-cover" rounded={false} />
                </Reveal>
              ))}
            </div>
          </section>
        )
      )}

      {/* Relaterede */}
      {related.length > 0 && (
        <section className="bg-cream-100 py-section">
          <div className="container-max">
            <SectionHeading eyebrow="Flere projekter" title={`Andre ${project.category.toLowerCase()}-projekter`} />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((c, i) => (
                <CaseCard key={c.slug} project={c} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
