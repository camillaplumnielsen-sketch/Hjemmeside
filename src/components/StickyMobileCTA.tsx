'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { telHref, site } from '@/lib/site';

/** Fast handlingslinje i bunden på mobil – altid ét tryk fra at ringe eller få tilbud. */
export function StickyMobileCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-forest-100 bg-cream-50/95 p-3 backdrop-blur-lg transition-transform duration-300 lg:hidden ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}
    >
      <div className="flex gap-3">
        <a href={telHref} className="btn-outline flex-1 !py-3">
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
            <path d="M6.5 3.5 9 4l1 4-2 1.5a11 11 0 0 0 5 5L14.5 12l4 1 .5 2.5a2 2 0 0 1-2.2 2.4A15.5 15.5 0 0 1 4.1 5.7 2 2 0 0 1 6.5 3.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          </svg>
          Ring {site.phoneDisplay}
        </a>
        <Link href="/kontakt" className="btn-primary flex-1 !py-3">
          Få et tilbud
        </Link>
      </div>
    </div>
  );
}
