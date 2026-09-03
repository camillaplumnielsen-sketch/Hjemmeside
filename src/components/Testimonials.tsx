import { Reveal } from './Reveal';
import { Stars } from './Stars';
import { testimonials } from '@/data/testimonials';
import { site } from '@/lib/site';

const sourceLabel: Record<string, string> = {
  Google: 'Google anmeldelse',
  Facebook: 'Facebook',
  Anbefaling: 'Anbefaling',
};

export function Testimonials({ limit }: { limit?: number }) {
  const list = limit ? testimonials.slice(0, limit) : testimonials;

  return (
    <div>
      <Reveal>
        <div className="mb-10 flex flex-col items-center gap-4 rounded-3xl border border-forest-100 bg-white p-6 text-center shadow-soft sm:flex-row sm:justify-center sm:gap-8 sm:text-left">
          <div className="flex items-center gap-3">
            <span className="font-display text-4xl font-semibold text-forest-900">{site.rating.value}</span>
            <div>
              <Stars rating={5} className="h-5 w-5" />
              <p className="mt-1 text-sm text-forest-600">{site.rating.count} anmeldelser</p>
            </div>
          </div>
          <span className="hidden h-12 w-px bg-forest-100 sm:block" />
          <p className="max-w-sm text-sm text-forest-600">
            Vores kunder anbefaler os videre – fordi vi leverer det, vi lover. Læs med her.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {list.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.06} as="article" className="flex h-full flex-col rounded-3xl border border-forest-100 bg-white p-6 shadow-soft">
            <Stars rating={t.rating} />
            <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-forest-700">“{t.quote}”</blockquote>
            <div className="mt-6 flex items-center gap-3 border-t border-forest-100 pt-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-700 text-sm font-semibold text-cream-50">
                {t.initials}
              </span>
              <div>
                <p className="text-sm font-semibold text-forest-900">{t.name}</p>
                <p className="text-xs text-forest-500">
                  {t.location} · {sourceLabel[t.source]}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
