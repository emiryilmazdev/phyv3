import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Lora } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import Image from 'next/image'
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

export const metadata: Metadata = {
  title: 'Şimal Ongun - Fizyoterapist & Rehabilitasyon Uzmanı',
  description: 'Milton Keynes\'te uzman fizyoterapi hizmetleri. Kas-iskelet sistemi problemleri, spor yaralanmaları ve kronik ağrı tedavisinde profesyonel yaklaşım.',
  keywords: 'fizyoterapi, rehabilitasyon, Milton Keynes, spor yaralanmaları, kas-iskelet sistemi',
  authors: [{ name: 'Şimal Ongun' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.png" />
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