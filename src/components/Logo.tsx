import Link from 'next/link';

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label="Brdr. Larsen – forside">
      {/* Hvid baggrundschip, så logoets sorte streger altid har kontrast – både over mørk hero og lys header */}
      <span className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-cream-50 p-1 shadow-soft">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.svg" alt="Brdr. Larsen logo" className="h-full w-full object-contain" />
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
