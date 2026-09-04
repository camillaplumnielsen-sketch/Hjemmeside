import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { SectionHeading } from '@/components/SectionHeading';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SetHeaderTheme } from '@/components/HeaderTheme';
import { buildMetadata } from '@/lib/seo';
import { site, telHref, mailHref } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Kontakt – Få et gratis tilbud',
  description:
    'Kontakt Brdr. Larsen for et uforpligtende tilbud på tømrerarbejde i Vejle og Bredsten. Ring, skriv eller udfyld formularen – vi vender hurtigt tilbage.',
  path: '/kontakt',
  keywords: ['kontakt tømrer Vejle', 'tilbud tømrer Vejle'],
});

export default function KontaktPage() {
  return (
    <>
      <SetHeaderTheme theme="light" />
      <section className="bg-forest-950 pt-[110px] text-cream-50">
        <div className="container-max py-14">
          <Breadcrumbs items={[{ name: 'Forside', path: '/' }, { name: 'Kontakt', path: '/kontakt' }]} />
          <h1 className="mt-8 max-w-3xl font-display text-display-lg font-semibold text-balance">
            Få et uforpligtende tilbud
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-lg text-cream-100/85">
            Fortæl os om dit projekt, så vender vi hurtigt tilbage – som regel samme dag. Du er også altid velkommen til
            at ringe direkte.
          </p>
        </div>
      </section>

      <section className="container-max py-section">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Kontaktinfo */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              <div className="rounded-2xl border border-forest-100 bg-white p-5 shadow-soft">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-forest-700 text-cream-50">
                    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                      <path d="M6.5 3.5 9 4l1 4-2 1.5a11 11 0 0 0 5 5L14.5 12l4 1 .5 2.5a2 2 0 0 1-2.2 2.4A15.5 15.5 0 0 1 4.1 5.7 2 2 0 0 1 6.5 3.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="block text-sm text-forest-500">Ring til os</span>
                </div>
                <div className="mt-4 space-y-3 border-t border-forest-100 pt-4">
                  <a href={telHref} className="flex items-center justify-between text-forest-900 hover:text-forest-700">
                    <span>Dennis Plum Larsen</span>
                    <span className="font-display font-semibold">{site.phoneDisplay}</span>
                  </a>
                  <a href="tel:+4520960287" className="flex items-center justify-between text-forest-900 hover:text-forest-700">
                    <span>Kenneth Larsen</span>
                    <span className="font-display font-semibold">20 96 02 87</span>
                  </a>
                </div>
              </div>

              <a href={mailHref} className="flex items-center gap-4 rounded-2xl border border-forest-100 bg-white p-5 shadow-soft transition-colors hover:border-forest-300">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-forest-700 text-cream-50">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                </span>
                <span>
                  <span className="block text-sm text-forest-500">Skriv til os</span>
                  <span className="block font-display text-lg font-semibold text-forest-900">{site.email}</span>
                </span>
              </a>

              <div className="rounded-2xl border border-forest-100 bg-white p-5 shadow-soft">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-forest-700 text-cream-50">
                    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                      <path d="M12 21s-6-5.3-6-10a6 6 0 1 1 12 0c0 4.7-6 10-6 10Z" strokeLinejoin="round" />
                      <circle cx="12" cy="11" r="2.2" />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-sm text-forest-500">Dækker</span>
                    <span className="block font-semibold text-forest-900">{site.areaServed.join(', ')}</span>
                  </span>
                </div>
                <p className="mt-4 border-t border-forest-100 pt-4 text-sm text-forest-600">
                  <span className="font-semibold text-forest-800">Åbningstider:</span> {site.openingHours}
                </p>
              </div>
            </div>
          </div>

          {/* Formular */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
