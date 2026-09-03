type Tone = 'roof' | 'renovation' | 'extension' | 'window' | 'carport' | 'special' | 'hero';
type Variant = 'before' | 'after' | 'neutral';

/**
 * Procedurel SVG-"foto" så sitet er 100 % selvforsynende uden eksterne billeder.
 * Tegner en stiliseret arkitektonisk scene i brandfarver. `before` er falmet/gråligt,
 * `after` er frisk og mættet. Erstat gerne med rigtige projektfotos inden lancering.
 */

const palettes: Record<Variant, { sky: [string, string]; roof: string; wall: string; accent: string; ground: string }> = {
  after: {
    sky: ['#dce9e0', '#f6f2e8'],
    roof: '#1f4331',
    wall: '#f4eee1',
    accent: '#b8783c',
    ground: '#2d5a43',
  },
  before: {
    sky: ['#c9cdca', '#dad6cd'],
    roof: '#6b6f68',
    wall: '#cfc9bc',
    accent: '#8a8578',
    ground: '#7c8079',
  },
  neutral: {
    sky: ['#0f261c', '#1f4331'],
    roof: '#0b1d15',
    wall: '#17332680',
    accent: '#c68f4e',
    ground: '#081711',
  },
};

// Lille variation pr. tone, så scener ikke er identiske
const toneShift: Record<Tone, number> = {
  roof: 0,
  renovation: 8,
  extension: -6,
  window: 4,
  carport: 12,
  special: -10,
  hero: 0,
};

export function SceneImage({
  tone = 'roof',
  variant = 'after',
  seed = 0,
  className = '',
  rounded = true,
}: {
  tone?: Tone;
  variant?: Variant;
  seed?: number;
  className?: string;
  rounded?: boolean;
}) {
  const p = palettes[variant];
  const uid = `${tone}-${variant}-${seed}`;
  const shift = toneShift[tone] + seed * 5;
  const hasSun = variant === 'after';

  return (
    <svg
      viewBox="0 0 800 500"
      preserveAspectRatio="xMidYMid slice"
      className={`${className} ${rounded ? 'rounded-inherit' : ''}`}
      role="img"
      aria-label={variant === 'before' ? 'Før renovering' : variant === 'after' ? 'Efter renovering' : 'Byggeprojekt'}
    >
      <defs>
        <linearGradient id={`sky-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={p.sky[0]} />
          <stop offset="100%" stopColor={p.sky[1]} />
        </linearGradient>
        <linearGradient id={`roof-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={p.roof} />
          <stop offset="100%" stopColor={shade(p.roof, -18)} />
        </linearGradient>
      </defs>

      {/* Himmel */}
      <rect width="800" height="500" fill={`url(#sky-${uid})`} />

      {/* Sol (kun "efter") */}
      {hasSun && <circle cx={640 + shift} cy={110} r={46} fill={p.accent} opacity={0.22} />}
      {hasSun && <circle cx={640 + shift} cy={110} r={26} fill={p.accent} opacity={0.35} />}

      {/* Baggrundsås */}
      <path d={`M0 360 Q 200 ${300 + shift} 400 350 T 800 340 V500 H0 Z`} fill={p.ground} opacity={0.25} />

      {/* Hovedhus */}
      <g>
        <rect x={220} y={250} width={360} height={170} fill={p.wall} />
        {/* Tag */}
        <path d={`M190 255 L400 ${140 - shift * 0.4} L610 255 Z`} fill={`url(#roof-${uid})`} />
        {/* Tagryg-detalje */}
        <path d={`M190 255 L610 255`} stroke={shade(p.roof, -25)} strokeWidth={4} />
        {/* Vinduer */}
        <rect x={265} y={295} width={70} height={80} fill={p.sky[0]} opacity={0.85} />
        <rect x={265} y={295} width={70} height={80} fill="none" stroke={p.accent} strokeWidth={5} />
        <line x1={300} y1={295} x2={300} y2={375} stroke={p.accent} strokeWidth={4} />
        <line x1={265} y1={335} x2={335} y2={335} stroke={p.accent} strokeWidth={4} />
        {/* Dør */}
        <rect x={465} y={320} width={60} height={100} fill={p.accent} opacity={variant === 'before' ? 0.6 : 0.9} />
        <circle cx={515} cy={372} r={3} fill={p.wall} />
      </g>

      {/* Sekundær bygning / carport-effekt */}
      <g opacity={0.9}>
        <rect x={585} y={330} width={150} height={90} fill={shade(p.wall, -6)} />
        <path d={`M570 335 L660 ${290 - shift * 0.2} L750 335 Z`} fill={shade(p.roof, -8)} />
      </g>

      {/* Jord/forgrund */}
      <rect x={0} y={418} width={800} height={82} fill={p.ground} opacity={0.85} />

      {/* "Før": revner og slid */}
      {variant === 'before' && (
        <g stroke={shade(p.roof, -20)} strokeWidth={2} opacity={0.5} fill="none">
          <path d={`M300 200 L330 235`} />
          <path d={`M470 190 L450 230`} />
          <path d={`M360 175 L360 210`} />
        </g>
      )}
    </svg>
  );
}

/** Justerer en hex-farve lysere (+) eller mørkere (-) i procent. */
function shade(hex: string, percent: number): string {
  const n = hex.replace('#', '');
  const num = parseInt(n.length === 3 ? n.replace(/(.)/g, '$1$1') : n, 16);
  const amt = Math.round(2.55 * percent);
  const r = Math.max(0, Math.min(255, (num >> 16) + amt));
  const g = Math.max(0, Math.min(255, ((num >> 8) & 0xff) + amt));
  const b = Math.max(0, Math.min(255, (num & 0xff) + amt));
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}
