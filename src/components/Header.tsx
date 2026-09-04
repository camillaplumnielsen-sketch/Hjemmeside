'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Logo } from './Logo';
import { useHeaderTheme } from './HeaderTheme';
import { navigation, telHref, site } from '@/lib/site';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const theme = useHeaderTheme();
  // Lys tekst når headeren er transparent over en mørk hero (og menuen er lukket)
  const lightText = !scrolled && !open && theme === 'light';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Luk mobilmenu ved navigation
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lås scroll når menu er åben
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-forest-100 bg-cream-50/90 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-max flex h-[70px] items-center justify-between">
        <Logo light={lightText} />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hovedmenu">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                lightText
                  ? isActive(item.href)
                    ? 'text-cream-50'
                    : 'text-cream-100/80 hover:text-cream-50'
                  : isActive(item.href)
                    ? 'text-forest-900'
                    : 'text-forest-600 hover:text-forest-900'
              }`}
            >
              {item.label}
              {isActive(item.href) && (
                <motion.span
                  layoutId="nav-active"
                  className={`absolute inset-0 -z-10 rounded-full ${lightText ? 'bg-cream-50/15' : 'bg-forest-100'}`}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div
            className={`hidden items-center gap-2 sm:flex ${
              lightText ? 'text-cream-50' : 'text-forest-800'
            }`}
          >
            <PhoneIcon />
            <div className="flex flex-col leading-tight text-xs font-semibold">
              <a href={telHref} className="hover:underline">
                Dennis {site.phoneDisplay}
              </a>
              <a href="tel:+4520960287" className="hover:underline">
                Kenneth 20 96 02 87
              </a>
            </div>
          </div>
          <Link
            href="/kontakt"
            className={`hidden rounded-full px-6 py-2.5 text-sm font-semibold shadow-soft transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:shadow-lift sm:inline-flex ${
              lightText ? 'bg-cream-50 text-forest-900 hover:bg-white' : 'bg-forest-700 text-cream-50 hover:bg-forest-800'
            }`}
          >
            Få et tilbud
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`flex h-10 w-10 items-center justify-center rounded-full border lg:hidden ${
              lightText ? 'border-cream-50/30 text-cream-50' : 'border-forest-200 text-forest-800'
            }`}
            aria-label={open ? 'Luk menu' : 'Åbn menu'}
            aria-expanded={open}
          >
            <BurgerIcon open={open} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 top-[70px] border-b border-forest-100 bg-cream-50 shadow-lift lg:hidden"
          >
            <nav className="container-max flex flex-col gap-1 py-4" aria-label="Mobilmenu">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-xl px-4 py-3 text-base font-medium ${
                    isActive(item.href) ? 'bg-forest-100 text-forest-900' : 'text-forest-700'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-3 flex flex-col gap-3 border-t border-forest-100 pt-4">
                <a href={telHref} className="btn-outline w-full">
                  <PhoneIcon /> Ring Dennis {site.phoneDisplay}
                </a>
                <a href="tel:+4520960287" className="btn-outline w-full">
                  <PhoneIcon /> Ring Kenneth 20 96 02 87
                </a>
                <Link href="/kontakt" className="btn-primary w-full">
                  Få et gratis tilbud
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <path
        d="M6.5 3.5 9 4l1 4-2 1.5a11 11 0 0 0 5 5L14.5 12l4 1 .5 2.5a2 2 0 0 1-2.2 2.4A15.5 15.5 0 0 1 4.1 5.7 2 2 0 0 1 6.5 3.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BurgerIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      {open ? (
        <>
          <line x1="6" y1="6" x2="18" y2="18" />
          <line x1="18" y1="6" x2="6" y2="18" />
        </>
      ) : (
        <>
          <line x1="4" y1="8" x2="20" y2="8" />
          <line x1="4" y1="16" x2="20" y2="16" />
        </>
      )}
    </svg>
  );
}
