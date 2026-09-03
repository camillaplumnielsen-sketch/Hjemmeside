'use client';

import { useCallback, useRef, useState } from 'react';
import { SceneImage } from './SceneImage';
import type { ProjectCase } from '@/data/cases';

/**
 * Interaktiv før/efter-slider. Brugeren trækker i håndtaget (mus, touch eller
 * piletaster) for at afsløre "efter"-billedet. Fuldt tastatur-tilgængelig.
 */
export function BeforeAfterSlider({
  tone = 'roof',
  seed = 0,
  beforeLabel = 'Før',
  afterLabel = 'Efter',
  className = '',
}: {
  tone?: ProjectCase['tone'];
  seed?: number;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, pct)));
  }, []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') setPosition((p) => Math.max(0, p - 4));
    if (e.key === 'ArrowRight') setPosition((p) => Math.min(100, p + 4));
  };

  return (
    <div
      ref={containerRef}
      className={`relative aspect-[16/10] w-full select-none overflow-hidden rounded-3xl border border-forest-100 bg-forest-950 ${className}`}
      onMouseMove={(e) => dragging.current && setFromClientX(e.clientX)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchMove={(e) => setFromClientX(e.touches[0].clientX)}
    >
      {/* Efter (bund) */}
      <div className="absolute inset-0">
        <SceneImage tone={tone} variant="after" seed={seed} className="h-full w-full object-cover" rounded={false} />
        <span className="absolute right-4 top-4 rounded-full bg-forest-800/85 px-3 py-1 text-xs font-semibold text-cream-50 backdrop-blur">
          {afterLabel}
        </span>
      </div>

      {/* Før (top, klippet med clip-path så billedet bevarer fuld bredde) */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <SceneImage tone={tone} variant="before" seed={seed} className="h-full w-full object-cover" rounded={false} />
        <span className="absolute left-4 top-4 rounded-full bg-forest-950/70 px-3 py-1 text-xs font-semibold text-cream-50 backdrop-blur">
          {beforeLabel}
        </span>
      </div>

      {/* Håndtag */}
      <div className="absolute inset-y-0" style={{ left: `${position}%`, transform: 'translateX(-50%)' }}>
        <div className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-cream-50/90" />
        <button
          type="button"
          role="slider"
          aria-label="Træk for at sammenligne før og efter"
          aria-valuenow={Math.round(position)}
          aria-valuemin={0}
          aria-valuemax={100}
          tabIndex={0}
          onKeyDown={onKeyDown}
          onMouseDown={() => (dragging.current = true)}
          onTouchStart={() => (dragging.current = true)}
          className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-cream-50 text-forest-800 shadow-lift"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 7-4 5 4 5M15 7l4 5-4 5" />
          </svg>
        </button>
      </div>
    </div>
  );
}
