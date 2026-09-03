import Link from 'next/link';

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label="Brdr. Larsen – forside">
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${
          light ? 'bg-cream-50/10 text-cream-50' : 'bg-forest-700 text-cream-50'
        }`}
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
          <path d="M3 12 12 4l9 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 11v8h12v-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.05rem] font-semibold tracking-tight ${
            light ? 'text-cream-50' : 'text-forest-900'
          }`}
        >
          Brdr. Larsen
        </span>
        <span className={`text-[0.62rem] font-medium uppercase tracking-[0.22em] ${light ? 'text-cream-100/70' : 'text-wood-600'}`}>
          Tømrer · siden 2007
        </span>
      </span>
    </Link>
  );
}
