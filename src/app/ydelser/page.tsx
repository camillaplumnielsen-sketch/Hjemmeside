import type { Metadata } from 'next';
import { ServicesGrid } from '@/components/ServicesGrid';
import { SectionHeading } from '@/components/SectionHeading';
import { CTASection } from '@/components/CTASection';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SetHeaderTheme } from '@/components/HeaderTheme';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Ydelser – Tømrer i Vejle',
  description:
    'Se alle ydelser hos Brdr. Larsen: nyt tag, renovering, tilbygninger, vinduer og døre, carporte og specialløsninger i Vejle, Bredsten og omegn.',
  path: '/ydelser',
  keywords: ['tømrer ydelser Vejle', 'håndværker Vejle'],
});

export default function YdelserPage() {
  return (
    <>
      <SetHeaderTheme theme="dark" />
      <section className="bg-cream-100 pt-[110px]">
        <div className="container-max py-14">
          <Breadcrumbs items={[{ name: 'Forside', path: '/' }, { name: 'Ydelser', path: '/ydelser' }]} />
          <div className="mt-8">
            <SectionHeading
              eyebrow="Ydelser"
              title="Tømrerarbejde i høj kvalitet – hele vejen rundt"
              description="Uanset opgavens størrelse løser vi den med samme grundighed. Vælg en ydelse og læs mere om proces, fordele og priser."
            />
          </div>
        </div>
      </section>

      <section className="container-max py-section">
        <ServicesGrid />
      </section>

      <CTASection />
    </>
  );
}
