import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Lora } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import GsapAnimations from '@/components/shared/GsapAnimations'
import LenisScrolling from '@/components/shared/LenisScrolling'
import Preloader from '@/components/shared/Preloader'
import WhatsAppWidget from '@/components/ui/WhatsAppWidget'


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
    default: 'Simal Ongun - Physiotherapist & Rehabilitation Specialist',
    template: '%s | Simal Ongun Physiotherapy'
  },
  description: 'Expert physiotherapy services in Milton Keynes. Professional approach to musculoskeletal problems, sports injuries and chronic pain treatment.',
  keywords: [
    'physiotherapy',
    'rehabilitation', 
    'Milton Keynes',
    'sports injuries',
    'musculoskeletal system',
    'pain treatment',
    'physiotherapist',
    'Simal Ongun',
    'UK physiotherapy',
    'England rehabilitation'
  ],
  authors: [{ name: 'Simal Ongun', url: 'https://simalongun.com' }],
  creator: 'Simal Ongun',
  publisher: 'Simal Ongun Physiotherapy',
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
    locale: 'en_GB',
    url: 'https://simalongun.com',
    title: 'Simal Ongun - Physiotherapist & Rehabilitation Specialist',
    description: 'Expert physiotherapy services in Milton Keynes. Professional approach to musculoskeletal problems, sports injuries and chronic pain treatment.',
    siteName: 'Simal Ongun Physiotherapy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simal Ongun - Physiotherapist & Rehabilitation Specialist',
    description: 'Expert physiotherapy services in Milton Keynes.',
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
    <html lang="en">
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

        {/* Umami Analytics */}
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="d1f181dd-9abf-44e2-9f0f-694f1cda229b"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${plusJakartaSans.variable} ${lora.variable}`}>
        <Preloader />
        {children}

        {/* WhatsApp Widget - Sağ altta sabit */}
        <WhatsAppWidget 
          phoneNumber="+447123456789"
          message="Merhaba! Fizyoterapi hizmetleri hakkında bilgi almak istiyorum."
        />

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