import { Reveal } from './Reveal';
import { Stars } from './Stars';
import { testimonials } from '@/data/testimonials';

const sourceLabel: Record<string, string> = {
  Google: 'Google anmeldelse',
  Facebook: 'Facebook',
  Anbefaling: 'Anbefaling',
};

export function Testimonials({ limit }: { limit?: number }) {
  const list = limit ? testimonials.slice(0, limit) : testimonials;

  if (list.length === 0) {
    return (
      <Reveal>
        <div className="rounded-3xl border border-forest-100 bg-white p-8 text-center shadow-soft">
          <p className="text-forest-600">Vi opdaterer snart med anmeldelser fra vores kunder.</p>
        </div>
      </Reveal>
    );
  }

  return (
    <div>
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
