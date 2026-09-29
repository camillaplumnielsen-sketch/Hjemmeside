import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SetHeaderTheme } from '@/components/HeaderTheme';
import { buildMetadata } from '@/lib/seo';
import { site, mailHref } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Privatlivspolitik',
  description: 'Læs hvordan Tømrerfirmaet Brdr. Larsen ApS behandler dine personoplysninger, når du bruger vores kontaktformular.',
  path: '/privatlivspolitik',
});

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-10 font-display text-2xl font-semibold text-forest-900">{children}</h2>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 text-pretty leading-relaxed text-forest-600">{children}</p>;
}

function Ul({ children }: { children: React.ReactNode }) {
  return <ul className="mt-4 space-y-2 text-forest-600">{children}</ul>;
}

function Li({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2.5">
      <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-wood-400" aria-hidden="true" />
      <span className="leading-relaxed">{children}</span>
    </li>
  );
}

export default function PrivatlivspolitikPage() {
  return (
    <>
      <SetHeaderTheme theme="dark" />
      <section className="bg-cream-100 pt-[110px]">
        <div className="container-max py-14">
          <Breadcrumbs items={[{ name: 'Forside', path: '/' }, { name: 'Privatlivspolitik', path: '/privatlivspolitik' }]} />
          <h1 className="mt-8 max-w-3xl font-display text-display-md font-semibold text-forest-900 text-balance">
            Privatlivspolitik
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-lg text-forest-600">
            {site.legalName} · Kærbøllinghusevej 44, 7182 Bredsten · CVR {site.cvr}
            <br />
            Telefon: {site.phoneDisplay} · E-mail:{' '}
            <a href={mailHref} className="underline decoration-forest-300 underline-offset-2 hover:text-forest-800">
              {site.email}
            </a>
          </p>
        </div>
      </section>

      <section className="container-max py-section">
        <div className="mx-auto max-w-2xl">
          <P>
            {site.legalName} er dataansvarlig for de personoplysninger, vi modtager via {site.url.replace('https://', '')}.
            Har du spørgsmål til, hvordan vi behandler dine oplysninger, er du velkommen til at kontakte os.
          </P>

          <H2>Hvilke oplysninger vi indsamler</H2>
          <P>Når du udfylder vores kontaktformular, modtager vi de oplysninger, du selv giver os:</P>
          <Ul>
            <Li>navn og telefonnummer</Li>
            <Li>e-mail og adresse, hvis du oplyser dem</Li>
            <Li>hvilken ydelse henvendelsen drejer sig om, og din beskrivelse af opgaven</Li>
            <Li>billeder af projektet, hvis du uploader dem</Li>
            <Li>om du ønsker en besigtigelse</Li>
          </Ul>
          <P>
            Vi beder dig om ikke at skrive følsomme oplysninger i beskrivelsen, f.eks. helbredsoplysninger eller
            CPR-nummer.
          </P>

          <H2>Formål og retsgrundlag</H2>
          <P>
            Vi bruger oplysningerne til at besvare din henvendelse, aftale en eventuel besigtigelse og give dig et
            tilbud. Behandlingen sker, fordi du har bedt os om det forud for en eventuel aftale
            (databeskyttelsesforordningens artikel 6, stk. 1, litra b).
          </P>
          <P>
            Bliver henvendelsen til en opgave, bruger vi oplysningerne til at udføre og fakturere opgaven. Vi gemmer
            dem desuden af hensyn til bogføringsloven og eventuelle krav i forbindelse med mangler (artikel 6, stk.
            1, litra b og c samt f).
          </P>

          <H2>Hvem vi deler oplysningerne med</H2>
          <P>
            Vi sælger aldrig dine oplysninger og videregiver dem ikke til andre, medmindre det er nødvendigt for at
            løse opgaven. Vi bruger følgende leverandører (databehandlere), som behandler oplysninger på vores
            vegne:
          </P>
          <Ul>
            <Li>Vercel Inc. – drift af hjemmesiden og kontaktformularen</Li>
            <Li>Resend – afsendelse af formularens indhold til vores e-mail</Li>
            <Li>Microsoft (Outlook) – modtagelse og opbevaring af e-mails</Li>
          </Ul>
          <P>
            Vercel og Resend er placeret i USA. Overførslen sker på grundlag af EU-US Data Privacy Framework eller
            EU-Kommissionens standardkontraktbestemmelser. Microsoft behandler som udgangspunkt data inden for EU.
          </P>

          <H2>Hvor længe vi gemmer oplysningerne</H2>
          <Ul>
            <Li>Henvendelser, der ikke fører til en opgave, sletter vi senest 6 måneder efter sidste kontakt.</Li>
            <Li>
              Oplysninger om udførte opgaver gemmer vi i 5 år efter regnskabsårets udløb af hensyn til
              bogføringsloven. Sagsoplysninger kan dog gemmes i op til 10 år, så længe der kan rejses krav om
              mangler ved arbejdet.
            </Li>
          </Ul>

          <H2>Cookies</H2>
          <P>
            Hjemmesiden bruger ikke cookies til statistik, analyse eller markedsføring, og vi sporer ikke dine
            besøg. Derfor beder vi dig heller ikke om at acceptere cookies.
          </P>

          <H2>Dine rettigheder</H2>
          <P>Du har ret til:</P>
          <Ul>
            <Li>få indsigt i de oplysninger, vi har om dig</Li>
            <Li>få rettet forkerte oplysninger</Li>
            <Li>få slettet dine oplysninger, når vi ikke længere har pligt til at gemme dem</Li>
            <Li>gøre indsigelse mod eller få begrænset behandlingen</Li>
            <Li>få udleveret dine oplysninger i et almindeligt format (dataportabilitet)</Li>
          </Ul>
          <P>
            Kontakt os på{' '}
            <a href={mailHref} className="underline decoration-forest-300 underline-offset-2 hover:text-forest-800">
              {site.email}
            </a>
            , hvis du vil gøre brug af dine rettigheder.
          </P>

          <H2>Klage</H2>
          <P>
            Du kan klage til Datatilsynet, Carl Jacobsens Vej 35, 2500 Valby,{' '}
            <a
              href="https://www.datatilsynet.dk"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-forest-300 underline-offset-2 hover:text-forest-800"
            >
              www.datatilsynet.dk
            </a>
            .
          </P>

          <p className="mt-10 text-sm text-forest-400">Senest opdateret: 29.09.2026</p>

          <Link href="/kontakt" className="mt-10 inline-flex btn-outline">
            Tilbage til kontakt
          </Link>
        </div>
      </section>
    </>
  );
}
