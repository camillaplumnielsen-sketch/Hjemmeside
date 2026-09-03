'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CaseCard } from './CaseCard';
import { cases as allCases, caseCategories, type CaseCategory } from '@/data/cases';

type Filter = CaseCategory | 'Alle';

export function CaseGrid({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState<Filter>('Alle');

  const filtered = useMemo(() => {
    const list = filter === 'Alle' ? allCases : allCases.filter((c) => c.category === filter);
    return limit ? list.slice(0, limit) : list;
  }, [filter, limit]);

  const filters: Filter[] = ['Alle', ...caseCategories];

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
              filter === f
                ? 'bg-forest-700 text-cream-50 shadow-soft'
                : 'border border-forest-200 bg-white text-forest-700 hover:border-forest-400'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <CaseCard project={project} index={i} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-forest-500">Ingen projekter i denne kategori endnu.</p>
      )}
    </div>
  );
}
