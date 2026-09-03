import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services, getService } from '@/data/services';
import { getCase } from '@/data/cases';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { ServiceIcon } from '@/components/ServiceIcon';
import { SceneImage } from '@/components/SceneImage';
import { CaseCard } from '@/components/CaseCard';
import { FAQ } from '@/components/FAQ';
import { CTASection } from '@/components/CTASection';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { SetHeaderTheme } from '@/components/HeaderTheme';
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/schema';
import { telHref, site } from '@/lib/site';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getService(params.slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: `${site.url}/ydelser/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${site.url}/ydelser/${service.slug}`,
      locale: 'da_DK',
      type: 'website',
      images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: service.heading }],
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  if (!service) notFound();

  const relatedCases = service.relatedCases.map(getCase).filter(Boolean);
  const breadcrumbs = [
    { name: 'Forside', path: '/' },
    { name: 'Ydelser', path: '/ydelser' },
    { name: service.title, path: `/ydelser/${service.slug}` },
  ];

  return (
    <>
      <SetHeaderTheme theme="light" />
      <JsonLd
        data={[
          serviceSchema({ name: service.heading, description: service.metaDescription, path: `/ydelser/${service.slug}` }),
          faqSchema(service.faq),
          breadcrumbSchema(breadcrumbs),
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-forest-950 pt-[110px] text-cream-50">
        <div className="absolute inset-0 opacity-40">
          <SceneImage tone={service.icon} variant="neutral" className="h-full w-full object-cover" rounded={false} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 to-forest-950/60" />
        <div className="container-max relative z-10 py-16">
          <Breadcrumbs items={breadcrumbs} />
          <div className="mt-8 flex items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cream-50/10 text-cream-50 backdrop-blur">
              <ServiceIcon name={service.icon} className="h-7 w-7" />
            </span>
            <span className="text-sm font-medium uppercase tracking-[0.18em] text-wood-300">{service.tagline}</span>
          </div>
          <h1 className="mt-6 max-w-3xl font-display text-display-lg font-semibold text-balance">{service.heading}</h1>
          <p className="mt-5 max-w-2xl text-pretty text-lg text-cream-100/85">{service.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/kontakt" className="btn-accent">
              Få et gratis tilbud
            </Link>
            <a href={telHref} className="btn-ghost-light">
              Ring {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Fordele */}
      <section className="container-max py-section">
        <SectionHeading eyebrow="Fordele" title={`Derfor vælger du os til ${service.title.toLowerCase()}`} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {service.benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.05} className="flex gap-4 rounded-3xl border border-forest-100 bg-white p-6 shadow-soft">
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-forest-100 text-forest-700">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m5 13 4 4L19 7" />
                </svg>
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-forest-900">{b.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-forest-600">{b.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Proces */}
      <section className="surface-wood py-section">
        <div className="container-max">
          <SectionHeading eyebrow="Sådan foregår det" title="En tryg proces fra start til slut" />
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.07} as="li" className="relative rounded-3xl border border-forest-100 bg-white p-6 shadow-soft">
                <span className="font-display text-4xl font-semibold text-forest-200">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-3 font-display text-lg font-semibold text-forest-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-forest-600">{step.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Cases */}
      {relatedCases.length > 0 && (
        <section className="container-max py-section">
          <SectionHeading eyebrow="Referencer" title="Projekter vi er stolte af" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedCases.map((c, i) => c && <CaseCard key={c.slug} project={c} index={i} />)}
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="bg-cream-100 py-section">
        <div className="container-max">
          <SectionHeading align="center" eyebrow="FAQ" title={`Spørgsmål om ${service.title.toLowerCase()}`} />
          <div className="mt-12">
            <FAQ items={service.faq} />
          </div>
        </div>
      </section>

      <CTASection primaryLabel={`Få tilbud på ${service.title.toLowerCase()}`} />
    </>
  );
}
