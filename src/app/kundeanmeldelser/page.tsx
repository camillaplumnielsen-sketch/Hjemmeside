import type { Metadata } from 'next';
import { Testimonials } from '@/components/Testimonials';
import { SectionHeading } from '@/components/SectionHeading';
import { CTASection } from '@/components/CTASection';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { SetHeaderTheme } from '@/components/HeaderTheme';
import { buildMetadata } from '@/lib/seo';
import { testimonials } from '@/data/testimonials';
import { site } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Kundeanmeldelser – Tømrer i Vejle',
  description:
    'Læs anmeldelser fra kunder i Vejle, Bredsten og omegn. Brdr. Larsen har en gennemsnitlig bedømmelse på 4,9 stjerner. Se hvorfor kunderne anbefaler os.',
  path: '/kundeanmeldelser',
  keywords: ['anmeldelser tømrer Vejle', 'Brdr. Larsen anmeldelser'],
});

function reviewSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: site.legalName,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: site.rating.value,
      reviewCount: site.rating.count,
      bestRating: 5,
    },
    review: testimonials.map((t) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: t.name },
      reviewRating: { '@type': 'Rating', ratingValue: t.rating, bestRating: 5 },
      reviewBody: t.quote,
    })),
  };
}

export default function ReviewsPage() {
  return (
    <>
      <SetHeaderTheme theme="dark" />
      <JsonLd data={reviewSchema()} />
      <section className="bg-cream-100 pt-[110px]">
        <div className="container-max py-14">
          <Breadcrumbs items={[{ name: 'Forside', path: '/' }, { name: 'Kundeanmeldelser', path: '/kundeanmeldelser' }]} />
          <div className="mt-8">
            <SectionHeading
              eyebrow="Kundeanmeldelser"
              title="Tilliden er hårdt tjent"
              description="Vi er stolte af vores anmeldelser – de er skabt af rigtige kunder og rigtige projekter i Vejle-området."
            />
          </div>
        </div>
      </section>

      <section className="container-max py-section">
        <Testimonials />
      </section>

      <CTASection title="Bliv vores næste tilfredse kunde" />
    </>
  );
}
