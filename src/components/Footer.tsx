import Link from 'next/link';
import { Logo } from './Logo';
import { site, telHref, mailHref } from '@/lib/site';
import { services } from '@/data/services';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-900 text-cream-100">
      <div className="container-max grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream-100/70">
            Lokal tømrervirksomhed i {site.address.city} og Vejle. Kvalitetshåndværk, personlig service og fair priser siden{' '}
            {site.founded}.
          </p>
          <a
            href={site.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream-100/20 text-cream-100 transition-colors hover:bg-cream-100/10"
            aria-label="Følg os på Facebook"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
              <path d="M13 22v-8h2.7l.4-3H13V9c0-.9.3-1.5 1.6-1.5H16V4.8c-.3 0-1.2-.1-2.2-.1-2.2 0-3.8 1.4-3.8 3.9V11H7.5v3H10v8h3Z" />
            </svg>
          </a>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-cream-100">Ydelser</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/ydelser/${s.slug}`} className="text-cream-100/70 transition-colors hover:text-cream-50">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-cream-100">Genveje</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              { label: 'Cases', href: '/cases' },
              { label: 'Om os', href: '/om-os' },
              { label: 'Kundeanmeldelser', href: '/kundeanmeldelser' },
              { label: 'Kontakt', href: '/kontakt' },
              { label: 'Tømrer i Vejle', href: '/tomrer-vejle' },
              { label: 'Nyt tag i Vejle', href: '/nyt-tag-vejle' },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-cream-100/70 transition-colors hover:text-cream-50">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-cream-100">Kontakt</h3>
          <ul className="mt-5 space-y-3 text-sm text-cream-100/70">
            <li>{site.legalName}</li>
            <li>
              <a href={telHref} className="font-semibold text-cream-50 hover:underline">
                Dennis {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href="tel:+4520960287" className="font-semibold text-cream-50 hover:underline">
                Kenneth 20 96 02 87
              </a>
            </li>
            <li>
              <a href={mailHref} className="hover:text-cream-50">
                {site.email}
              </a>
            </li>
            <li className="text-cream-100/50">{site.openingHours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream-100/10">
        <div className="container-max flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream-100/50 sm:flex-row">
          <p>
            © {year} {site.legalName}. Alle rettigheder forbeholdes.
          </p>
          <p>CVR {site.cvr} · Tømrer i Vejle &amp; Bredsten</p>
        </div>
      </div>
    </footer>
  );
}
