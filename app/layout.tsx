import type { Metadata } from 'next'
import { Playfair_Display, Outfit } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Analytics from '@/components/Analytics'
import './globals.css'

const serif = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const sans = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://mobile-massage-therapist-cheshire.vercel.app'),
  title: 'Mobile Massage Therapist Cheshire | Relax, Recover, Recharge — Crewe & Nantwich',
  description:
    'Professional mobile massage therapy across Crewe, Nantwich and the wider Cheshire area. Relaxing, deep tissue and sports massage in the comfort of your own home. Book your appointment today.',
  keywords: [
    'mobile massage Cheshire',
    'mobile massage therapist Crewe',
    'mobile massage Nantwich',
    'deep tissue massage Cheshire',
    'sports massage Crewe',
    'home massage Cheshire',
    'massage therapist near me',
  ],
  openGraph: {
    title: 'Mobile Massage Therapist Cheshire — Relax, Recover, Recharge',
    description:
      'Professional mobile massage across Crewe, Nantwich and Cheshire. Treatments in the comfort of your home.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Mobile Massage Therapist Cheshire',
  },
  robots: {
    index: false,
    follow: false,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
  name: 'Mobile Massage Therapist Cheshire',
  telephone: '+447494729630',
  description:
    'Fully qualified mobile massage therapist serving Crewe, Nantwich and the wider Cheshire area. Relaxing, deep tissue and sports massage delivered in the comfort of your own home.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Crewe',
    addressRegion: 'Cheshire',
    addressCountry: 'GB',
  },
  areaServed: [
    { '@type': 'City', name: 'Crewe' },
    { '@type': 'City', name: 'Nantwich' },
    { '@type': 'AdministrativeArea', name: 'Cheshire' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-ink-950 text-ink-100 antialiased">
        <div className="pointer-events-none fixed inset-0 grain opacity-60 z-[1]" />
        <Analytics />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
