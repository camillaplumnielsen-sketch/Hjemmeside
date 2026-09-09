/** Officielt medlemsmærke for DI Byggeri – linker til verificering hos Dansk Industri. */
export function DIBadge({ className = '' }: { className?: string }) {
  return (
    <a
      href="https://www.danskindustri.dk/brancher/di-byggeri/find-medlemmer/?SearchQuery=30546350"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Medlem af DI Byggeri – se verificering hos Dansk Industri (åbner i nyt vindue)"
      className={`inline-flex items-center gap-3 rounded-lg bg-[#6b6b6b] py-2.5 pl-3 pr-4 shadow-soft transition-opacity hover:opacity-90 ${className}`}
    >
      <span className="relative flex h-9 w-[52px] flex-none items-center">
        <span className="absolute left-0 flex h-9 w-9 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
          D
        </span>
        <span className="absolute left-[22px] flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-bold text-black">
          I
        </span>
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-[0.62rem] font-medium uppercase tracking-wide text-white/75">Medlem af</span>
        <span className="font-display text-base font-bold text-white">Byggeri</span>
      </span>
    </a>
  );
}
