'use client';

import { useState } from 'react';
import { services } from '@/data/services';

type FilePreview = { name: string; url: string; size: number };

export function ContactForm({ defaultService }: { defaultService?: string }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  const [inspection, setInspection] = useState(true);
  const [files, setFiles] = useState<FilePreview[]>([]);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    service: defaultService ?? '',
    message: '',
  });

  const onFiles = (list: FileList | null) => {
    if (!list) return;
    const next = Array.from(list)
      .slice(0, 6)
      .filter((f) => f.type.startsWith('image/'))
      .map((f) => ({ name: f.name, url: URL.createObjectURL(f), size: f.size }));
    setFiles((prev) => [...prev, ...next].slice(0, 6));
  };

  const removeFile = (name: string) => setFiles((prev) => prev.filter((f) => f.name !== name));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'kontaktformular',
          bookInspection: inspection,
          attachments: files.map((f) => f.name),
          ...form,
        }),
      });
      if (!res.ok) throw new Error('fejl');
      setStatus('done');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'done') {
    return (
      <div className="rounded-3xl border border-forest-100 bg-white p-8 text-center shadow-soft sm:p-12">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-forest-100 text-forest-700">
          <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m5 13 4 4L19 7" />
          </svg>
        </span>
        <h3 className="mt-5 font-display text-2xl font-semibold text-forest-900">Tak for din henvendelse!</h3>
        <p className="mx-auto mt-3 max-w-md text-forest-600">
          Vi har modtaget din besked og vender tilbage hurtigst muligt – som regel samme dag. Har du travlt, er du altid
          velkommen til at ringe.
        </p>
      </div>
    );
  }

  const field = 'w-full rounded-2xl border border-forest-200 bg-cream-50 px-4 py-3 text-forest-900 outline-none transition-colors focus:border-forest-500 focus:bg-white';

  return (
    <form onSubmit={submit} className="rounded-3xl border border-forest-100 bg-white p-6 shadow-soft sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-forest-700">Navn *</label>
          <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={field} placeholder="Dit navn" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-forest-700">Telefon *</label>
          <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={field} placeholder="Dit telefonnummer" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-forest-700">E-mail</label>
          <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={field} placeholder="din@email.dk" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-forest-700">Adresse</label>
          <input value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} className={field} placeholder="Vej og by" />
        </div>
      </div>

      <div className="mt-4">
        <label className="mb-1.5 block text-sm font-medium text-forest-700">Hvad drejer det sig om?</label>
        <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className={field}>
          <option value="">Vælg ydelse…</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Andet">Andet / ved ikke endnu</option>
        </select>
      </div>

      <div className="mt-4">
        <label className="mb-1.5 block text-sm font-medium text-forest-700">Beskriv din opgave</label>
        <textarea
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={field}
          placeholder="Fortæl kort om dit projekt – så vender vi bedst muligt forberedt tilbage."
        />
      </div>

      {/* Billed-upload */}
      <div className="mt-4">
        <label className="mb-1.5 block text-sm font-medium text-forest-700">Upload billeder af projektet (valgfrit)</label>
        <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-forest-300 bg-cream-50 px-4 py-6 text-center transition-colors hover:border-forest-500">
          <svg viewBox="0 0 24 24" className="h-7 w-7 text-forest-500" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 16V4m0 0L8 8m4-4 4 4" />
            <path d="M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
          </svg>
          <span className="text-sm text-forest-600">
            <span className="font-semibold text-forest-800">Klik for at uploade</span> eller træk billeder hertil
          </span>
          <span className="text-xs text-forest-400">JPG eller PNG · op til 6 billeder</span>
          <input type="file" accept="image/*" multiple className="hidden" onChange={(e) => onFiles(e.target.files)} />
        </label>

        {files.length > 0 && (
          <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-6">
            {files.map((f) => (
              <div key={f.name} className="group relative aspect-square overflow-hidden rounded-xl border border-forest-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={f.url} alt={f.name} className="h-full w-full object-cover" />
                <button
                  type="button"
                  onClick={() => removeFile(f.name)}
                  className="absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-forest-900/80 text-cream-50 opacity-0 transition-opacity group-hover:opacity-100"
                  aria-label={`Fjern ${f.name}`}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Book besigtigelse */}
      <label className="mt-5 flex cursor-pointer items-start gap-3 rounded-2xl bg-cream-100 p-4">
        <input type="checkbox" checked={inspection} onChange={(e) => setInspection(e.target.checked)} className="mt-0.5 h-5 w-5 flex-none accent-forest-700" />
        <span>
          <span className="block text-sm font-semibold text-forest-900">Book en gratis besigtigelse</span>
          <span className="block text-sm text-forest-600">Vi kigger forbi, ser på opgaven og giver dig et fast tilbud – helt uforpligtende.</span>
        </span>
      </label>

      <button type="submit" disabled={status === 'sending'} className="btn-accent mt-6 w-full disabled:opacity-50">
        {status === 'sending' ? 'Sender…' : 'Få et uforpligtende tilbud'}
      </button>
      {status === 'error' && <p className="mt-3 text-center text-sm text-red-600">Noget gik galt. Prøv igen, eller ring til os.</p>}
      <p className="mt-3 text-center text-xs text-forest-400">Vi behandler dine oplysninger fortroligt og kontakter dig hurtigst muligt.</p>
    </form>
  );
}
