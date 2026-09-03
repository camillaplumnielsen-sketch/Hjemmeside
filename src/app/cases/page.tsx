import type { Metadata } from 'next';
import { CaseGrid } from '@/components/CaseGrid';
import { SectionHeading } from '@/components/SectionHeading';
import { CTASection } from '@/components/CTASection';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SetHeaderTheme } from '@/components/HeaderTheme';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Cases & projekter – Tømrer i Vejle',
  description:
    'Se udvalgte tømrerprojekter fra Brdr. Larsen: nye tage, tilbygninger, renoveringer og specialopgaver i Vejle, Bredsten og omegn. Lad dig inspirere.',
  path: '/cases',
  keywords: ['tømrer projekter Vejle', 'referencer tømrer Vejle'],
});

export default function CasesPage() {
  return (
    <>
      <SetHeaderTheme theme="dark" />
      <section className="bg-cream-100 pt-[110px]">
        <div className="container-max py-14">
          <Breadcrumbs items={[{ name: 'Forside', path: '/' }, { name: 'Cases', path: '/cases' }]} />
          <div className="mt-8">
            <SectionHeading
              eyebrow="Projektbibliotek"
              title="Vores arbejde taler for sig selv"
              description="Et udvalg af de projekter, vi har løst for kunder i Vejle-området. Filtrér efter type og find inspiration til dit eget."
            />
          </div>
        </div>
      </section>

      <section className="container-max py-section">
        <CaseGrid />
      </section>

      <CTASection />
    </>
  );
}
