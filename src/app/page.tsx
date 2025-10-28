import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ServicesSection from '@/components/sections/ServicesSection'
import WhatWeDoSection from '@/components/sections/WhatWeDoSection'
import PricingSection from '@/components/sections/PricingSection'
import BookAppointmentSection from '@/components/sections/BookAppointmentSection'
import FaqsSection from '@/components/sections/FaqsSection'
import JoinUsSection from '@/components/sections/JoinUsSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import BlogSection from '@/components/sections/BlogSection'


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section id="anasayfa">
          <HeroSection />
        </section>
        <section id="hakkimda">
          <AboutSection />
        </section>
        <section id="hizmetler">
          <ServicesSection />
        </section>
        <section id="neler-yapiyoruz">
          <WhatWeDoSection />
        </section>
        <section id="fiyatlar">
          <PricingSection />
        </section>
        <section id="randevu">
          <BookAppointmentSection />
        </section>
        <section id="sss">
          <FaqsSection />
        </section>
        <section id="bize-katilin">
          <JoinUsSection />
        </section>
        <section id="yorumlar">
          <TestimonialsSection />
        </section>
        <section id="blog">
          <BlogSection />
        </section>
      </main>

      <Footer />
    </>
  )
}