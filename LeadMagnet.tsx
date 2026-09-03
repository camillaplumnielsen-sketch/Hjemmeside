'use client';

import { useState } from 'react';
import Link from 'next/link';

/**
 * Lead magnet: gratis guide "7 ting du skal vide før du skifter tag".
 * Fanger e-mail (lead) og giver derefter adgang til guiden.
 */
export function LeadMagnet() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ source: 'lead-magnet-tagguide', email }),
      });
      if (!res.ok) throw new Error();
      setStatus('done');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="container-max py-section">
      <div className="grid overflow-hidden rounded-4xl border border-forest-100 bg-white shadow-lift md:grid-cols-2">
        {/* Visuel side */}
        <div className="relative flex flex-col justify-center bg-forest-800 p-8 text-cream-50 sm:p-12">
          <div className="surface-wood absolute inset-0 opacity-30" aria-hidden />
          <div className="relative">
            <span className="eyebrow text-wood-300">Gratis guide</span>
            <h2 className="mt-4 font-display text-display-md font-semibold text-balance">
              7 ting du skal vide, før du skifter tag
            </h2>
            <ul className="mt-6 space-y-2.5 text-sm text-cream-100/85">
              {[
                'Sådan vælger du det rigtige tagmateriale',
                'Hvad et nyt tag realistisk koster',
                'De 3 dyre fejl folk begår',
                'Hvornår du kan spare på varmen',
              ].map((li) => (
                <li key={li} className="flex items-start gap-2.5">
                  <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 flex-none text-wood-300" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m5 13 4 4L19 7" />
                  </svg>
                  {li}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Formular */}
        <div className="flex flex-col justify-center p-8 sm:p-12">
          {status === 'done' ? (
            <div className="text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-forest-100 text-forest-700">
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m5 13 4 4L19 7" />
                </svg>
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-forest-900">Værsgo – din guide er klar!</h3>
              <p className="mt-2 text-sm text-forest-600">Tak. Du kan læse guiden med det samme her.</p>
              <Link href="/gratis-guide/nyt-tag" className="btn-primary mt-5">
                Åbn guiden
              </Link>
            </div>
          ) : (
            <>
              <h3 className="font-display text-xl font-semibold text-forest-900">Hent guiden gratis</h3>
              <p className="mt-2 text-sm text-forest-600">
                Skriv din e-mail, så får du adgang til guiden med det samme. Ingen forpligtelser.
              </p>
              <form onSubmit={submit} className="mt-5 flex flex-col gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="din@email.dk"
                  className="w-full rounded-2xl border border-forest-200 bg-cream-50 px-4 py-3 text-forest-900 outline-none focus:border-forest-500"
                />
                <button type="submit" disabled={status === 'sending'} className="btn-accent disabled:opacity-50">
                  {status === 'sending' ? 'Sender…' : 'Send mig guiden'}
                </button>
                {status === 'error' && <p className="text-sm text-red-600">Noget gik galt – prøv igen.</p>}
              </form>
              <p className="mt-3 text-xs text-forest-400">Vi sender dig ikke spam. Du kan altid afmelde.</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
