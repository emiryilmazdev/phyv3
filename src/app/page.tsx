import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ServicesSection from '@/components/sections/ServicesSection'
import WhatWeDoSection from '@/components/sections/WhatWeDoSection'

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
        <section id="home">
          <HeroSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="services">
          <ServicesSection />
        </section>
        <section id="what-we-do">
          <WhatWeDoSection />
        </section>

        <section id="appointment">
          <BookAppointmentSection />
        </section>
        <section id="faq">
          <FaqsSection />
        </section>
        <section id="join-us">
          <JoinUsSection />
        </section>
        <section id="testimonials">
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