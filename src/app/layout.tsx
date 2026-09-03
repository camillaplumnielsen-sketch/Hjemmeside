import type { Metadata, Viewport } from 'next';
import { Inter, Fraunces } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { HeaderThemeProvider } from '@/components/HeaderTheme';
import { Footer } from '@/components/Footer';
import { StickyMobileCTA } from '@/components/StickyMobileCTA';
import { AIAssistant } from '@/components/AIAssistant';
import { JsonLd } from '@/components/JsonLd';
import { localBusinessSchema } from '@/lib/schema';
import { site } from '@/lib/site';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  axes: ['opsz'],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.legalName} – Tømrer i Vejle & Bredsten`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.legalName,
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  keywords: [
    'tømrer Vejle',
    'tømrer Bredsten',
    'tømrerfirma Vejle',
    'nyt tag Vejle',
    'tagrenovering Vejle',
    'tilbygning Vejle',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'da_DK',
    url: site.url,
    siteName: site.legalName,
    title: `${site.legalName} – Kvalitetshåndværk siden 2007`,
    description: site.description,
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: site.legalName }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.legalName} – Tømrer i Vejle & Bredsten`,
    description: site.description,
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  themeColor: '#0f261c',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="da" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="min-h-screen">
        <JsonLd data={localBusinessSchema()} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-forest-800 focus:px-5 focus:py-3 focus:text-cream-50"
        >
          Spring til indhold
        </a>
        <HeaderThemeProvider>
          <Header />
          <main id="main">{children}</main>
        </HeaderThemeProvider>
        <Footer />
        <StickyMobileCTA />
        <AIAssistant />
      </body>
    </html>
  );
}
