import { Reveal } from './Reveal';

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <Reveal>
          <span className={`eyebrow ${light ? 'text-wood-300' : ''}`}>
            <span className="h-px w-6 bg-current opacity-60" aria-hidden />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={`mt-4 font-display text-display-md font-semibold text-balance ${
            light ? 'text-cream-50' : 'text-forest-900'
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className={`mt-4 text-pretty text-[1.05rem] leading-relaxed ${light ? 'text-cream-100/80' : 'text-forest-600'}`}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
