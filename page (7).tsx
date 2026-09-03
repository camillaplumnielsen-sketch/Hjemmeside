import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { USPSection } from '@/components/USPSection';
import { ServicesGrid } from '@/components/ServicesGrid';
import { SectionHeading } from '@/components/SectionHeading';
import { QuoteCalculator } from '@/components/QuoteCalculator';
import { CaseGrid } from '@/components/CaseGrid';
import { BeforeAfterSlider } from '@/components/BeforeAfterSlider';
import { Testimonials } from '@/components/Testimonials';
import { LeadMagnet } from '@/components/LeadMagnet';
import { FAQ } from '@/components/FAQ';
import { CTASection } from '@/components/CTASection';
import { Reveal } from '@/components/Reveal';
import { SetHeaderTheme } from '@/components/HeaderTheme';
import { JsonLd } from '@/components/JsonLd';
import { generalFaq } from '@/data/faq';
import { faqSchema } from '@/lib/schema';

export default function HomePage() {
  return (
    <>
      <SetHeaderTheme theme="light" />
      <JsonLd data={faqSchema(generalFaq)} />
      <Hero />
      <USPSection />

      {/* Ydelser */}
      <section className="container-max pt-section pb-8">
        <SectionHeading
          eyebrow="Vores ydelser"
          title="Alt inden for tømrer- og snedkerarbejde"
          description="Fra nyt tag til gennemgribende renovering – vi løser opgaven med kvalitet, overblik og respekt for dit hjem."
        />
        <div className="mt-12">
          <ServicesGrid />
        </div>
      </section>

      {/* Tilbudsberegner */}
      <section className="surface-wood py-section">
        <div className="container-max grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Prisoverslag på sekunder"
              title="Hvad koster dit projekt?"
              description="Prøv vores tilbudsberegner og få et indikativt prisinterval med det samme. Vil du have en fast pris, kommer vi gerne forbi til en gratis besigtigelse."
            />
            <ul className="mt-8 space-y-4">
              {[
                'Uforpligtende og gratis',
                'Svar med det samme',
                'Efterfulgt af et fast, skriftligt tilbud',
              ].map((li) => (
                <li key={li} className="flex items-center gap-3 text-forest-700">
                  <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-forest-700 text-cream-50">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m5 13 4 4L19 7" />
                    </svg>
                  </span>
                  {li}
                </li>
              ))}
            </ul>
          </div>
          <Reveal delay={0.1}>
            <QuoteCalculator />
          </Reveal>
        </div>
      </section>

      {/* Cases */}
      <section className="container-max py-section">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Udvalgte projekter"
            title="Se hvad vi har bygget"
            description="Rigtige projekter fra Vejle, Bredsten og omegn. Kvalitet du kan se – og kunder der anbefaler os videre."
          />
          <Link href="/cases" className="btn-outline hidden sm:inline-flex">
            Se alle cases
          </Link>
        </div>
        <div className="mt-12">
          <CaseGrid limit={6} />
        </div>
        <div className="mt-8 sm:hidden">
          <Link href="/cases" className="btn-outline w-full">
            Se alle cases
          </Link>
        </div>
      </section>

      {/* Før / efter */}
      <section className="bg-forest-950 py-section text-cream-50">
        <div className="container-max grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              light
              eyebrow="Før / efter"
              title="Forvandlingen taler for sig selv"
              description="Træk i håndtaget og se, hvordan vi løfter et slidt tag til noget, der holder i generationer."
            />
            <Link href="/cases" className="btn-accent mt-8">
              Udforsk vores cases
            </Link>
          </div>
          <Reveal delay={0.1}>
            <BeforeAfterSlider tone="roof" seed={1} />
          </Reveal>
        </div>
      </section>

      {/* Anmeldelser */}
      <section className="container-max py-section">
        <SectionHeading
          align="center"
          eyebrow="Kundeanmeldelser"
          title="Tilfredse kunder i hele Vejle-området"
          description="Tillid bygges ét projekt ad gangen. Her er, hvad vores kunder siger."
        />
        <div className="mt-12">
          <Testimonials limit={3} />
        </div>
        <div className="mt-10 text-center">
          <Link href="/kundeanmeldelser" className="btn-outline">
            Læs alle anmeldelser
          </Link>
        </div>
      </section>

      {/* Lead magnet */}
      <LeadMagnet />

      {/* FAQ */}
      <section className="container-max py-section">
        <SectionHeading align="center" eyebrow="Ofte stillede spørgsmål" title="Godt at vide" />
        <div className="mt-12">
          <FAQ items={generalFaq} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
