import { Reveal } from './Reveal';

const usps = [
  {
    title: 'Erfaring siden 2007',
    description:
      'Snart to årtier med tømrerarbejde i lokalområdet. Vi har set og løst det hele – og du høster fordelen af rutinen.',
    icon: (
      <path d="M12 3v9l6 3M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
    ),
  },
  {
    title: 'Lokal tømrer i Vejle-området',
    description:
      'Vi bor og arbejder her. Kort responstid, kendskab til lokale forhold og et navn, vi gerne står inde for i nabolaget.',
    icon: <path d="M12 21s-6-5.3-6-10a6 6 0 1 1 12 0c0 4.7-6 10-6 10Zm0-7.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />,
  },
  {
    title: 'Høj kundetilfredshed',
    description:
      'Vores kunder anbefaler os videre – og det er vi stolte af. Ærlig rådgivning, aftaler der holder, og et resultat der holder.',
    icon: (
      <path d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.3-4.1 5.9-.9L12 3Z" />
    ),
  },
];

export function USPSection() {
  return (
    <section className="relative -mt-16 z-20">
      <div className="container-max">
        <div className="grid gap-4 rounded-4xl border border-forest-100 bg-white p-4 shadow-lift md:grid-cols-3 md:p-3">
          {usps.map((usp, i) => (
            <Reveal
              key={usp.title}
              delay={i * 0.08}
              className="group flex flex-col gap-4 rounded-3xl p-6 transition-colors hover:bg-cream-100 md:p-7"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-700 text-cream-50 transition-transform duration-300 group-hover:scale-105">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
                  {usp.icon}
                </svg>
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-forest-900">{usp.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-forest-600">{usp.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
