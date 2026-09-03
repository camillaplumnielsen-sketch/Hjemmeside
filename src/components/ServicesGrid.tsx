import Link from 'next/link';
import { Reveal } from './Reveal';
import { ServiceIcon } from './ServiceIcon';
import { services } from '@/data/services';

export function ServicesGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, i) => (
        <Reveal key={service.slug} delay={i * 0.06} as="article" className="h-full">
          <Link
            href={`/ydelser/${service.slug}`}
            className="group flex h-full flex-col rounded-3xl border border-forest-100 bg-white p-7 shadow-soft transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-forest-200 hover:shadow-lift"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-700 p-3 text-cream-50 transition-transform duration-300 group-hover:scale-105">
              <ServiceIcon name={service.icon} className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-display text-xl font-semibold text-forest-900">{service.title}</h3>
            <p className="mt-1 text-sm font-medium text-wood-600">{service.tagline}</p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-forest-600">{service.intro.split('.')[0]}.</p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-forest-800">
              Læs mere
              <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
