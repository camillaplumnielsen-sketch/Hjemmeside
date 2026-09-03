import Link from 'next/link';
import { SetHeaderTheme } from '@/components/HeaderTheme';

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-cream-100 pt-[70px]">
      <SetHeaderTheme theme="dark" />
      <div className="container-max py-section text-center">
        <p className="font-display text-7xl font-semibold text-forest-200">404</p>
        <h1 className="mt-4 font-display text-display-md font-semibold text-forest-900">Siden blev ikke fundet</h1>
        <p className="mx-auto mt-4 max-w-md text-forest-600">
          Beklager – vi kunne ikke finde den side, du ledte efter. Måske er den flyttet eller fjernet.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-primary">
            Til forsiden
          </Link>
          <Link href="/kontakt" className="btn-outline">
            Kontakt os
          </Link>
        </div>
      </div>
    </section>
  );
}
