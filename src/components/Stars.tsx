export function Stars({ rating = 5, className = 'h-4 w-4' }: { rating?: number; className?: string }) {
  return (
    <span className="inline-flex items-center gap-0.5 text-wood-500" aria-label={`${rating} ud af 5 stjerner`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className={className} fill={i < rating ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.3-4.1 5.9-.9L12 3Z" strokeLinejoin="round" />
        </svg>
      ))}
    </span>
  );
}
