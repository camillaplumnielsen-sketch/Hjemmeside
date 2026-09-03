'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ServiceIcon } from './ServiceIcon';
import { projectTypes, estimatePrice, formatDKK, getProjectType } from '@/data/pricing';

type Step = 0 | 1 | 2 | 3;

export function QuoteCalculator() {
  const [step, setStep] = useState<Step>(0);
  const [typeId, setTypeId] = useState<string>('');
  const [size, setSize] = useState<number>(0);
  const [form, setForm] = useState({ name: '', phone: '', email: '', address: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  const type = getProjectType(typeId);
  const estimate = useMemo(() => (type ? estimatePrice(type, size) : null), [type, size]);

  const selectType = (id: string) => {
    setTypeId(id);
    const t = getProjectType(id);
    setSize(t?.defaultSize ?? 0);
    setStep(1);
  };

  const submit = async () => {
    setStatus('sending');
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'tilbudsberegner',
          projectType: type?.label,
          size,
          estimate,
          ...form,
        }),
      });
      if (!res.ok) throw new Error('fejl');
      setStatus('done');
      setStep(3);
    } catch {
      setStatus('error');
    }
  };

  const progress = (step / 3) * 100;

  return (
    <div className="overflow-hidden rounded-4xl border border-forest-100 bg-white shadow-lift">
      {/* Header + progress */}
      <div className="border-b border-forest-100 bg-cream-100 px-6 py-5 sm:px-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-wood-600">Tilbudsberegner</p>
            <h3 className="mt-1 font-display text-xl font-semibold text-forest-900">Få et prisoverslag på 30 sekunder</h3>
          </div>
          <span className="hidden text-sm font-medium text-forest-500 sm:block">Trin {Math.min(step + 1, 4)} / 4</span>
        </div>
        <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-forest-100">
          <motion.div className="h-full rounded-full bg-forest-600" animate={{ width: `${progress}%` }} transition={{ ease: [0.22, 1, 0.36, 1] }} />
        </div>
      </div>

      <div className="p-6 sm:p-8">
        <AnimatePresence mode="wait">
          {/* Trin 1: projekttype */}
          {step === 0 && (
            <motion.div key="s0" {...anim}>
              <p className="mb-5 text-forest-600">Hvad drømmer du om?</p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {projectTypes.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => selectType(t.id)}
                    className="group flex items-center gap-3 rounded-2xl border border-forest-200 bg-white p-4 text-left transition-all hover:-translate-y-0.5 hover:border-forest-500 hover:shadow-soft"
                  >
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-forest-100 text-forest-700 transition-colors group-hover:bg-forest-700 group-hover:text-cream-50">
                      <ServiceIcon name={t.icon} className="h-5 w-5" />
                    </span>
                    <span className="font-semibold text-forest-900">{t.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Trin 2: størrelse + adresse */}
          {step === 1 && type && (
            <motion.div key="s1" {...anim}>
              <button type="button" onClick={() => setStep(0)} className="mb-4 text-sm font-medium text-forest-500 hover:text-forest-800">
                ← Skift projekt
              </button>
              <p className="mb-4 font-semibold text-forest-900">
                {type.label} — {type.unit === 'fixed' ? 'fortæl om opgaven' : `angiv ${type.unitLabel}`}
              </p>

              {type.unit !== 'fixed' ? (
                <>
                  <div className="flex flex-wrap gap-2">
                    {type.presets.map((p) => (
                      <button
                        key={p.label}
                        type="button"
                        onClick={() => setSize(p.value)}
                        className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                          size === p.value ? 'bg-forest-700 text-cream-50' : 'border border-forest-200 text-forest-700 hover:border-forest-400'
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                  <div className="mt-6">
                    <label className="flex items-center justify-between text-sm font-medium text-forest-700">
                      <span>{type.unitLabel}</span>
                      <span className="font-semibold text-forest-900">
                        {size} {type.unit === 'm2' ? 'm²' : 'stk.'}
                      </span>
                    </label>
                    <input
                      type="range"
                      min={type.presets[0]?.value ?? 1}
                      max={(type.presets.at(-1)?.value ?? 100) * 1.5}
                      value={size}
                      onChange={(e) => setSize(Number(e.target.value))}
                      className="mt-3 w-full accent-forest-700"
                    />
                  </div>
                </>
              ) : (
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={3}
                  placeholder="Beskriv kort din specialopgave…"
                  className="w-full rounded-2xl border border-forest-200 bg-cream-50 px-4 py-3 text-forest-900 outline-none focus:border-forest-500"
                />
              )}

              <div className="mt-5">
                <label className="text-sm font-medium text-forest-700">Adresse (valgfrit)</label>
                <input
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  placeholder="Vej og by"
                  className="mt-2 w-full rounded-2xl border border-forest-200 bg-cream-50 px-4 py-3 text-forest-900 outline-none focus:border-forest-500"
                />
              </div>

              <button type="button" onClick={() => setStep(2)} className="btn-primary mt-6 w-full">
                Se prisoverslag
              </button>
            </motion.div>
          )}

          {/* Trin 3: estimat + kontakt */}
          {step === 2 && type && estimate && (
            <motion.div key="s2" {...anim}>
              <button type="button" onClick={() => setStep(1)} className="mb-4 text-sm font-medium text-forest-500 hover:text-forest-800">
                ← Tilbage
              </button>

              <div className="rounded-2xl bg-forest-800 p-6 text-center text-cream-50">
                <p className="text-sm text-cream-100/80">Typiske {type.label.toLowerCase()}-projekter ligger mellem</p>
                <p className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
                  {formatDKK(estimate.min)} – {formatDKK(estimate.max)}
                </p>
                <p className="mt-2 text-xs text-cream-100/70">Vejledende. Du får et præcist, fast tilbud efter en gratis besigtigelse.</p>
              </div>

              <p className="mt-6 font-semibold text-forest-900">Hvor sender vi dit tilbud hen?</p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Navn"
                  className="rounded-2xl border border-forest-200 bg-cream-50 px-4 py-3 text-forest-900 outline-none focus:border-forest-500"
                />
                <input
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="Telefon"
                  type="tel"
                  className="rounded-2xl border border-forest-200 bg-cream-50 px-4 py-3 text-forest-900 outline-none focus:border-forest-500"
                />
                <input
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="E-mail"
                  type="email"
                  className="rounded-2xl border border-forest-200 bg-cream-50 px-4 py-3 text-forest-900 outline-none focus:border-forest-500 sm:col-span-2"
                />
              </div>

              <button
                type="button"
                onClick={submit}
                disabled={status === 'sending' || !form.name || (!form.phone && !form.email)}
                className="btn-accent mt-5 w-full disabled:cursor-not-allowed disabled:opacity-50"
              >
                {status === 'sending' ? 'Sender…' : 'Send og få mit tilbud'}
              </button>
              {status === 'error' && (
                <p className="mt-3 text-center text-sm text-red-600">Noget gik galt. Ring til os, så hjælper vi dig.</p>
              )}
              <p className="mt-3 text-center text-xs text-forest-400">Vi kontakter dig hurtigst muligt – helt uforpligtende.</p>
            </motion.div>
          )}

          {/* Trin 4: kvittering */}
          {step === 3 && (
            <motion.div key="s3" {...anim} className="py-6 text-center">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-forest-100 text-forest-700">
                <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m5 13 4 4L19 7" />
                </svg>
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold text-forest-900">Tak, {form.name.split(' ')[0] || 'og velkommen'}!</h3>
              <p className="mx-auto mt-3 max-w-md text-forest-600">
                Vi har modtaget din forespørgsel om {type?.label.toLowerCase()} og vender tilbage hurtigst muligt med et
                uforpligtende tilbud.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

const anim = {
  initial: { opacity: 0, x: 16 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -16 },
  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
};
