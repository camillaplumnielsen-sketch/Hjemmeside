import Link from 'next/link';
import { Reveal } from './Reveal';
import { site, telHref } from '@/lib/site';

export function CTASection({
  title = 'Klar til at komme i gang?',
  description = 'Få en uforpligtende snak og et gratis tilbud på din opgave. Vi vender tilbage hurtigt – som regel samme dag.',
  primaryLabel = 'Få et gratis tilbud',
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
}) {
  return (
    <section className="container-max py-section">
      <Reveal>
        <div className="relative overflow-hidden rounded-4xl bg-forest-800 px-6 py-14 text-center text-cream-50 sm:px-12 sm:py-20">
          <div className="surface-wood absolute inset-0 opacity-40" aria-hidden />
          <div className="noise-overlay absolute inset-0 opacity-[0.05]" aria-hidden />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-display-md font-semibold text-balance">{title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-cream-100/85">{description}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/kontakt" className="btn-accent w-full sm:w-auto">
                {primaryLabel}
              </Link>
              <a href={telHref} className="btn-ghost-light w-full sm:w-auto">
                Ring {site.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
