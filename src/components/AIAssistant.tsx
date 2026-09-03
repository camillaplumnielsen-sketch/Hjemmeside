'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { services } from '@/data/services';
import { site, telHref } from '@/lib/site';

type Suggestion = {
  serviceSlug: string;
  serviceTitle: string;
  reason: string;
};

/**
 * Let AI-lignende assistent. Klassificerer kundens beskrivelse ud fra nøgleord
 * og foreslår den mest relevante ydelse + næste skridt. Kører 100 % lokalt –
 * ingen eksterne kald. Kan senere kobles til en rigtig LLM via /api/ai-assistant.
 */
const keywordMap: { slug: string; words: string[] }[] = [
  { slug: 'nyt-tag', words: ['tag', 'tegl', 'eternit', 'utæt', 'tagsten', 'rygning', 'undertag', 'tagpap'] },
  { slug: 'renovering', words: ['renover', 'ombyg', 'køkken', 'bad', 'badeværelse', 'gulv', 'væg', 'moderniser', 'istandsæt'] },
  { slug: 'tilbygninger', words: ['tilbyg', 'udvid', 'mere plads', 'udestue', 'ekstra værelse', 'ekstra rum', 'ny stue'] },
  { slug: 'vinduer-og-dore', words: ['vindue', 'vinduer', 'dør', 'døre', 'termorude', 'træk', 'kulde', 'energirude'] },
  { slug: 'carporte', words: ['carport', 'overdæk', 'skur', 'redskabsrum', 'garage'] },
  { slug: 'speciallosninger', words: ['trappe', 'special', 'snedker', 'inventar', 'restaurer', 'unik', 'indbyg'] },
];

function classify(text: string): Suggestion {
  const t = text.toLowerCase();
  let best = keywordMap[0];
  let bestScore = 0;
  for (const entry of keywordMap) {
    const score = entry.words.reduce((acc, w) => (t.includes(w) ? acc + 1 : acc), 0);
    if (score > bestScore) {
      bestScore = score;
      best = entry;
    }
  }
  const service = services.find((s) => s.slug === best.slug)!;
  return {
    serviceSlug: service.slug,
    serviceTitle: service.title,
    reason:
      bestScore > 0
        ? `Det lyder som en opgave inden for “${service.title}”.`
        : 'Vi hjælper gerne – her er et godt sted at starte.',
  };
}

export function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');
  const [result, setResult] = useState<Suggestion | null>(null);

  const analyse = () => {
    if (text.trim().length < 3) return;
    setResult(classify(text));
  };

  return (
    <>
      {/* Flydende knap */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-24 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-forest-700 text-cream-50 shadow-lift transition-transform hover:scale-105 lg:bottom-6"
        aria-label="Åbn projektassistent"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.svg key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ opacity: 0 }} viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6 6 18" />
            </motion.svg>
          ) : (
            <motion.svg key="c" initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ opacity: 0 }} viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.8A8 8 0 1 1 21 12Z" />
              <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" />
            </motion.svg>
          )}
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-40 right-4 z-40 w-[calc(100vw-2rem)] max-w-sm overflow-hidden rounded-3xl border border-forest-100 bg-white shadow-lift lg:bottom-24"
          >
            <div className="bg-forest-800 px-5 py-4 text-cream-50">
              <p className="flex items-center gap-2 font-display text-lg font-semibold">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cream-50/15 text-sm">✦</span>
                Projektassistent
              </p>
              <p className="mt-1 text-sm text-cream-100/80">Beskriv kort dit projekt, så guider vi dig videre.</p>
            </div>

            <div className="p-5">
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={3}
                placeholder="Fx: “Mit tag er utæt og trænger til udskiftning”"
                className="w-full rounded-2xl border border-forest-200 bg-cream-50 px-4 py-3 text-sm text-forest-900 outline-none focus:border-forest-500"
              />
              <button type="button" onClick={analyse} className="btn-primary mt-3 w-full !py-2.5 !text-sm">
                Foreslå næste skridt
              </button>

              <AnimatePresence>
                {result && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-4 overflow-hidden">
                    <div className="rounded-2xl bg-cream-100 p-4">
                      <p className="text-sm text-forest-700">{result.reason}</p>
                      <div className="mt-3 flex flex-col gap-2">
                        <Link href={`/ydelser/${result.serviceSlug}`} onClick={() => setOpen(false)} className="btn-primary !py-2.5 !text-sm">
                          Læs om {result.serviceTitle}
                        </Link>
                        <Link href="/kontakt" onClick={() => setOpen(false)} className="btn-outline !py-2.5 !text-sm">
                          Få et gratis tilbud
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-4 flex items-center gap-2 border-t border-forest-100 pt-4 text-xs text-forest-500">
                <span>Hellere tale med et menneske?</span>
                <a href={telHref} className="font-semibold text-forest-800 hover:underline">
                  Ring {site.phoneDisplay}
                </a>
                <span>·</span>
                <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" className="font-semibold text-forest-800 hover:underline">
                  Messenger
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
