'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { SceneImage } from './SceneImage';
import { site, telHref } from '@/lib/site';

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-forest-950 pt-[70px] text-cream-50">
      {/* Baggrund: video hvis tilgængelig, ellers stiliseret scene.
          Læg /public/hero.mp4 (tag-/droneoptagelser) ind for at aktivere video. */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 12, ease: 'easeOut' }}
          className="h-full w-full"
        >
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/hero-poster.svg"
          >
            {/* <source src="/hero.mp4" type="video/mp4" /> */}
          </video>
          <div className="absolute inset-0">
            <SceneImage tone="hero" variant="neutral" className="h-full w-full object-cover" rounded={false} />
          </div>
        </motion.div>
        {/* Læselags-gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/70 to-forest-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/80 to-transparent" />
        <div className="noise-overlay absolute inset-0 opacity-[0.04]" />
      </div>

      <div className="container-max relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cream-50/20 bg-cream-50/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cream-100 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-wood-400" />
            Tømrer i Trekantsområdet
          </span>

          <h1 className="mt-6 font-display text-display-xl font-semibold text-balance">
            Kvalitetshåndværk
            <span className="block text-wood-300">siden 2007</span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-cream-100/85">
            Tømrer- og entreprenørfirma med håndværk i højsædet – fra første skitse til sidste søm. Vi hjælper private
            og erhverv med tømrer-, tag- og entreprenøropgaver i Bredsten, Vejle, Jelling, Give – hele Vejle Kommune.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/kontakt" className="btn-accent w-full sm:w-auto">
              Få et tilbud
              <ArrowIcon />
            </Link>
            <Link href="/cases" className="btn-ghost-light w-full sm:w-auto">
              Se projekter
            </Link>
            <a href={telHref} className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-cream-100 sm:ml-2 sm:mt-0">
              eller ring {site.phoneDisplay}
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll-indikator */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-cream-50/30 p-1.5"
        >
          <span className="h-2 w-1 rounded-full bg-cream-50/60" />
        </motion.div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
