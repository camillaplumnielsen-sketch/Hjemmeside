# Brdr. Larsen – hjemmeside

Konverteringsoptimeret website for **Tømrerfirmaet Brdr. Larsen ApS** – lokal tømrer i Bredsten, Vejle og omegn.

Bygget med **Next.js 14 (App Router)**, **TypeScript**, **TailwindCSS** og **Framer Motion**. Premium, mørkegrønt design med træaccenter, mobile-first, hurtig loadtid og fuld SEO-opsætning.

## Kom i gang

```bash
npm install
npm run dev      # udvikling på http://localhost:3000
npm run build    # produktionsbuild
npm run start    # kør produktionsbuild
npm run lint
```

Kopiér `.env.example` til `.env.local` og udfyld:

```
NEXT_PUBLIC_SITE_URL=https://www.brdrlarsen.dk
LEAD_NOTIFICATION_EMAIL=kontakt@brdrlarsen.dk
```

## Funktioner

- **Forside** med video-klar hero, USP'er, ydelser, cases, før/efter, anmeldelser, lead magnet og FAQ.
- **Interaktiv tilbudsberegner** (`QuoteCalculator`) – flertrinsflow der genererer leads.
- **Dedikerede SEO-ydelsessider** under `/ydelser/[slug]` (nyt tag, renovering, tilbygninger, vinduer/døre, carporte, specialløsninger).
- **Case-bibliotek** med filtrering (`/cases`) og detaljesider med **før/efter-slider** og galleri.
- **Lokale SEO-landingssider**: `/tomrer-vejle`, `/nyt-tag-vejle`, `/tagrenovering-vejle`, `/tilbygning-vejle`.
- **Konverteringsfeatures**: klikbart telefonnummer overalt, sticky mobil-CTA, "book gratis besigtigelse", billed-upload i kontaktformular, AI-lignende projektassistent, lead magnet (gratis tag-guide), smart FAQ og Messenger-link.
- **SEO**: `generateMetadata`, canonical, Open Graph, Twitter cards, JSON-LD (LocalBusiness, Service, FAQ, Review, Breadcrumb), `sitemap.xml`, `robots.txt` og manifest.

## Struktur

```
src/
├── app/                 # sider, layout, API-route, sitemap/robots/manifest
│   ├── ydelser/[slug]/  # dynamiske SEO-ydelsessider
│   ├── cases/[slug]/    # case-detaljer
│   ├── api/lead/        # modtager leads (kobles til e-mail/CRM/Supabase)
│   └── ...
├── components/          # UI- og feature-komponenter
├── data/                # mock data: services, cases, testimonials, faq, pricing
└── lib/                 # site-konstanter, SEO-helpers, schema (JSON-LD)
```

## Tilpasning inden lancering

1. **Kontaktinfo & CVR**: redigér `src/lib/site.ts` (telefon, e-mail, adresse, koordinater, rating).
2. **Rigtige billeder/video**: erstat de procedurelle SVG-scener (`SceneImage`) med rigtige projektfotos, og læg `public/hero.mp4` ind (fjern kommentaren i `Hero.tsx`) for videobaggrund.
3. **Leads**: kobl `src/app/api/lead/route.ts` til e-mail (fx Resend), et CRM eller Supabase.
4. **Domæne**: sæt `NEXT_PUBLIC_SITE_URL` så sitemap, canonical og OG-tags peger korrekt.

> Priser i tilbudsberegneren (`src/data/pricing.ts`) er vejledende og bør justeres til virksomhedens faktiske niveau.
