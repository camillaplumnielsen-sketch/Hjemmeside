/**
 * Indikative prisintervaller til tilbudsberegneren.
 * Tallene er vejledende og bruges kun til at give kunden en fornemmelse –
 * det endelige tilbud gives altid efter besigtigelse.
 */

export type ProjectType = {
  id: string;
  label: string;
  icon: 'roof' | 'renovation' | 'extension' | 'window' | 'special';
  /** Har projektet en m²-baseret pris? */
  unit: 'm2' | 'stk' | 'fixed';
  unitLabel: string;
  /** Pris pr. enhed (lav/høj) i kr. */
  pricePerUnit: { min: number; max: number };
  /** Fast grundpris/opstart i kr. */
  base: { min: number; max: number };
  /** Standard-størrelser til hurtigvalg */
  presets: { label: string; value: number }[];
  defaultSize: number;
};

export const projectTypes: ProjectType[] = [
  {
    id: 'nyt-tag',
    label: 'Nyt tag',
    icon: 'roof',
    unit: 'm2',
    unitLabel: 'm² tagflade',
    pricePerUnit: { min: 1100, max: 2200 },
    base: { min: 25000, max: 45000 },
    presets: [
      { label: 'Mindre hus (~120 m²)', value: 120 },
      { label: 'Parcelhus (~180 m²)', value: 180 },
      { label: 'Stor villa (~250 m²)', value: 250 },
    ],
    defaultSize: 180,
  },
  {
    id: 'renovering',
    label: 'Renovering',
    icon: 'renovation',
    unit: 'm2',
    unitLabel: 'm² boligareal',
    pricePerUnit: { min: 4000, max: 12000 },
    base: { min: 20000, max: 40000 },
    presets: [
      { label: 'Ét rum (~20 m²)', value: 20 },
      { label: 'Etage (~70 m²)', value: 70 },
      { label: 'Hele huset (~130 m²)', value: 130 },
    ],
    defaultSize: 70,
  },
  {
    id: 'tilbygning',
    label: 'Tilbygning',
    icon: 'extension',
    unit: 'm2',
    unitLabel: 'm² tilbygning',
    pricePerUnit: { min: 18000, max: 32000 },
    base: { min: 40000, max: 80000 },
    presets: [
      { label: 'Ekstra værelse (~15 m²)', value: 15 },
      { label: 'Stue/køkken (~30 m²)', value: 30 },
      { label: 'Stor tilbygning (~50 m²)', value: 50 },
    ],
    defaultSize: 30,
  },
  {
    id: 'vinduer-og-dore',
    label: 'Vinduer og døre',
    icon: 'window',
    unit: 'stk',
    unitLabel: 'antal vinduer/døre',
    pricePerUnit: { min: 6000, max: 14000 },
    base: { min: 8000, max: 15000 },
    presets: [
      { label: 'Enkelte (4 stk.)', value: 4 },
      { label: 'Halvdelen (8 stk.)', value: 8 },
      { label: 'Hele huset (16 stk.)', value: 16 },
    ],
    defaultSize: 8,
  },
  {
    id: 'specialopgave',
    label: 'Specialopgave',
    icon: 'special',
    unit: 'fixed',
    unitLabel: 'omfang',
    pricePerUnit: { min: 0, max: 0 },
    base: { min: 25000, max: 150000 },
    presets: [],
    defaultSize: 1,
  },
];

export function getProjectType(id: string): ProjectType | undefined {
  return projectTypes.find((p) => p.id === id);
}

/** Beregner et indikativt prisinterval for et projekt. */
export function estimatePrice(type: ProjectType, size: number): { min: number; max: number } {
  if (type.unit === 'fixed') {
    return type.base;
  }
  const safeSize = Number.isFinite(size) && size > 0 ? size : type.defaultSize;
  return {
    min: type.base.min + type.pricePerUnit.min * safeSize,
    max: type.base.max + type.pricePerUnit.max * safeSize,
  };
}

/** Formaterer et tal som danske kroner uden ører. */
export function formatDKK(value: number): string {
  return new Intl.NumberFormat('da-DK', {
    style: 'currency',
    currency: 'DKK',
    maximumFractionDigits: 0,
  }).format(value);
}
