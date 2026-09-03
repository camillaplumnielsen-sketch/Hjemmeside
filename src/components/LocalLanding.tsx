import Link from 'next/link';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { SceneImage } from './SceneImage';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { Testimonials } from './Testimonials';
import { FAQ } from './FAQ';
import { CTASection } from './CTASection';
import { Breadcrumbs } from './Breadcrumbs';
import { SetHeaderTheme } from './HeaderTheme';
import { JsonLd } from './JsonLd';
import { faqSchema, breadcrumbSchema } from '@/lib/schema';
import type { FaqItem } from '@/data/services';
import type { ProjectCase } from '@/data/cases';
import { telHref, site } from '@/lib/site';

export type LocalLandingProps = {
  path: string;
  breadcrumbLabel: string;
  eyebrow: string;
  h1: string;
  intro: string;
  tone: ProjectCase['tone'];
  points: string[];
  bodyTitle: string;
  body: string[];
  faq: FaqItem[];
  ctaLabel: string;
};

export function LocalLanding(props: LocalLandingProps) {
  const breadcrumbs = [
    { name: 'Forside', path: '/' },
    { name: props.breadcrumbLabel, path: props.path },
  ];

  return (
    <>
      <SetHeaderTheme theme="light" />
      <JsonLd data={[faqSchema(props.faq), breadcrumbSchema(breadcrumbs)]} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-forest-950 pt-[110px] text-cream-50">
        <div className="absolute inset-0 opacity-40">
          <SceneImage tone={props.tone} variant="neutral" className="h-full w-full object-cover" rounded={false} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 to-forest-950/60" />
        <div className="container-max relative z-10 py-16">
          <Breadcrumbs items={breadcrumbs} />
          <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-cream-50/20 bg-cream-50/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cream-100 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-wood-400" />
            {props.eyebrow}
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-display-lg font-semibold text-balance">{props.h1}</h1>
          <p className="mt-5 max-w-2xl text-pretty text-lg text-cream-100/85">{props.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/kontakt" className="btn-accent">
              {props.ctaLabel}
            </Link>
            <a href={telHref} className="btn-ghost-light">
              Ring {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Body + punkter */}
      <section className="container-max py-section">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading eyebrow="Lokal ekspertise" title={props.bodyTitle} />
            {props.body.map((p, i) => (
              <p key={i} className="mt-4 prose-brand">
                {p}
              </p>
            ))}
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {props.points.map((pt) => (
                <li key={pt} className="flex items-start gap-2.5 text-sm text-forest-700">
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-forest-700 text-cream-50">
                    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m5 13 4 4L19 7" />
                    </svg>
                  </span>
                  {pt}
                </li>
              ))}
            </ul>
          </div>
          <Reveal delay={0.1}>
            <BeforeAfterSlider tone={props.tone} seed={2} />
          </Reveal>
        </div>
      </section>

      {/* Social proof */}
      <section className="bg-cream-100 py-section">
        <div className="container-max">
          <SectionHeading align="center" eyebrow="Anbefalet lokalt" title="Kunder i Vejle-området anbefaler os" />
          <div className="mt-12">
            <Testimonials limit={3} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-max py-section">
        <SectionHeading align="center" eyebrow="FAQ" title="Ofte stillede spørgsmål" />
        <div className="mt-12">
          <FAQ items={props.faq} />
        </div>
      </section>

      <CTASection primaryLabel={props.ctaLabel} />
    </>
  );
}
