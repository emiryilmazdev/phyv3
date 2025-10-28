import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Lora } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import GsapAnimations from '@/components/shared/GsapAnimations'
import LenisScrolling from '@/components/shared/LenisScrolling'
import Preloader from '@/components/shared/Preloader'


const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
  preload: true,
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
  preload: true,
})

export const viewport = {
  themeColor: '#8E714F',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://simalongun.com'),
  title: {
    default: 'Şimal Ongun - Fizyoterapist & Rehabilitasyon Uzmanı',
    template: '%s | Şimal Ongun Fizyoterapi'
  },
  description: 'Milton Keynes\'te uzman fizyoterapi hizmetleri. Kas-iskelet sistemi problemleri, spor yaralanmaları ve kronik ağrı tedavisinde profesyonel yaklaşım.',
  keywords: [
    'fizyoterapi',
    'rehabilitasyon', 
    'Milton Keynes',
    'spor yaralanmaları',
    'kas-iskelet sistemi',
    'ağrı tedavisi',
    'fizyoterapist',
    'Şimal Ongun',
    'UK fizyoterapi',
    'İngiltere rehabilitasyon'
  ],
  authors: [{ name: 'Şimal Ongun', url: 'https://simalongun.com' }],
  creator: 'Şimal Ongun',
  publisher: 'Şimal Ongun Fizyoterapi',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://simalongun.com',
    title: 'Şimal Ongun - Fizyoterapist & Rehabilitasyon Uzmanı',
    description: 'Milton Keynes\'te uzman fizyoterapi hizmetleri. Kas-iskelet sistemi problemleri, spor yaralanmaları ve kronik ağrı tedavisinde profesyonel yaklaşım.',
    siteName: 'Şimal Ongun Fizyoterapi',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Şimal Ongun - Fizyoterapist & Rehabilitasyon Uzmanı',
    description: 'Milton Keynes\'te uzman fizyoterapi hizmetleri.',
  },
  verification: {
    google: 'G-0NQ025S2FX',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        <link href="/css/custom.css" rel="stylesheet" media="screen" />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0NQ025S2FX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0NQ025S2FX');
          `}
        </Script>
      </head>
      <body className={`${plusJakartaSans.variable} ${lora.variable}`}>
        <Preloader />
        {children}

        {/* GSAP Animations - Now using npm version */}
        <GsapAnimations />

        {/* Lenis Smooth Scrolling */}
        <LenisScrolling />

        {/* Vercel Analytics & Speed Insights */}
        <Analytics />
        <SpeedInsights />

        {/* Bootstrap JS artık npm'den geliyor, script tag'ine gerek yok */}
      </body>
    </html>
  )
}