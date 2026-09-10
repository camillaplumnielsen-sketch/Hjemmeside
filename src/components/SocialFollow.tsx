import { site } from '@/lib/site';

const platforms = [
  {
    name: 'Facebook',
    href: site.social.facebook,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
        <path d="M13 22v-8h2.7l.4-3H13V9c0-.9.3-1.5 1.6-1.5H16V4.8c-.3 0-1.2-.1-2.2-.1-2.2 0-3.8 1.4-3.8 3.9V11H7.5v3H10v8h3Z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: site.social.instagram,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

/** Fremhævet opfordring til at følge virksomheden på Facebook og Instagram. */
export function SocialFollow() {
  return (
    <section className="bg-forest-950 py-section text-cream-50">
      <div className="container-max grid items-center gap-10 lg:grid-cols-2">
        <div>
          <span className="eyebrow text-wood-300">Følg med</span>
          <h2 className="mt-4 font-display text-display-md font-semibold text-balance">
            Se vores nyeste projekter på de sociale medier
          </h2>
          <p className="mt-5 max-w-xl text-pretty text-lg text-cream-100/85">
            Vi opdaterer jævnligt Facebook og Instagram med de seneste projekter, hverdagen på byggepladsen og
            personalearrangementer. Følg med og vær blandt de første til at se, hvad vi går og laver.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {platforms.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-3xl border border-cream-100/15 bg-cream-50/5 p-6 transition-colors hover:bg-cream-50/10"
            >
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-cream-50/10 text-cream-50">
                {p.icon}
              </span>
              <span>
                <span className="block font-display text-lg font-semibold text-cream-50">{p.name}</span>
                <span className="block text-sm text-cream-100/70 transition-colors group-hover:text-cream-50">
                  Følg os →
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
