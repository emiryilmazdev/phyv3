'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedDiv from '@/components/ui/AnimatedDiv'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

export default function FaqsSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(2) // Second FAQ open by default

  const toggleFaq = (faqNumber: number) => {
    setOpenFaq(openFaq === faqNumber ? null : faqNumber)
  }
  return (
    <>
      <style jsx>{`
        .accordion-button::after {
          display: none !important;
        }
        
        .accordion-collapse {
          transition: all 0.3s ease-in-out;
          overflow: hidden;
        }
        
        .accordion-collapse:not(.show) {
          max-height: 0;
          opacity: 0;
        }
        
        .accordion-collapse.show {
          max-height: 500px;
          opacity: 1;
        }
        
        .accordion-button {
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .accordion-button:hover {
          background-color: rgba(142, 113, 79, 0.05);
        }
      `}</style>
      <div className="our-faqs bg-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/* Faqs Content Start */}
              <div className="faqs-content">
                {/* Section Title Start */}
                <div className="section-title">
                  <AnimatedDiv delay={0}>
                    <h3>Frequently Asked Questions</h3>
                  </AnimatedDiv>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    Helpful answers for <span>first-time and regular patients</span>
                  </h2>
                </div>
                {/* Section Title End */}

                {/* FAQ Accordion Start */}
                <div className="faq-accordion" id="faqaccordion">
                  {/* FAQ Item Start */}
                  <AnimatedDiv className="accordion-item" delay={0}>
                    <h2 className="accordion-header" id="heading1">
                      <button
                        className={`accordion-button ${openFaq !== 1 ? 'collapsed' : ''}`}
                        type="button"
                        onClick={() => toggleFaq(1)}
                        aria-expanded={openFaq === 1}
                        aria-controls="collapse1"
                        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                      >
                        <span>1. How do physiotherapy sessions progress?</span>
                        {openFaq === 1 ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
                      </button>
                    </h2>
                    <div
                      id="collapse1"
                      className={`accordion-collapse collapse ${openFaq === 1 ? 'show' : ''}`}
                      aria-labelledby="heading1"
                    >
                      <div className="accordion-body">
                        <p>
                          Each session is planned according to the individual's needs. In the first session, posture, range of motion and muscle strength are evaluated; then a personalized exercise program is created.
                        </p>
                      </div>
                    </div>
                  </AnimatedDiv>
                  {/* FAQ Item End */}

                  {/* FAQ Item Start */}
                  <AnimatedDiv className="accordion-item" delay={0.1}>
                    <h2 className="accordion-header" id="heading2">
                      <button
                        className={`accordion-button ${openFaq !== 2 ? 'collapsed' : ''}`}
                        type="button"
                        onClick={() => toggleFaq(2)}
                        aria-expanded={openFaq === 2}
                        aria-controls="collapse2"
                        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                      >
                        <span>2. Do you have a special exercise program for GLP-1 (Mounjaro, Ozempic etc.) users?</span>
                        {openFaq === 2 ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
                      </button>
                    </h2>
                    <div
                      id="collapse2"
                      className={`accordion-collapse collapse ${openFaq === 2 ? 'show' : ''}`}
                      aria-labelledby="heading2"
                    >
                      <div className="accordion-body">
                        <p>
                          Yes. Special exercise protocols are applied to prevent muscle loss, maintain posture and support metabolism in individuals using GLP-1 medications.
                        </p>
                        <p>
                          🔗 For detailed reading → <Link href="/blog/glp-1-exercise-program" style={{ color: '#8E714F', fontWeight: '600' }}>GLP-1 Exercise Program Blog Post</Link>
                        </p>
                      </div>
                    </div>
                  </AnimatedDiv>
                  {/* FAQ Item End */}
                  {/* FAQ Item Start */}
                  <AnimatedDiv className="accordion-item" delay={0.2}>
                    <h2 className="accordion-header" id="heading3">
                      <button
                        className={`accordion-button ${openFaq !== 3 ? 'collapsed' : ''}`}
                        type="button"
                        onClick={() => toggleFaq(3)}
                        aria-expanded={openFaq === 3}
                        aria-controls="collapse3"
                        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                      >
                        <span>3. Can I have home or online sessions?</span>
                        {openFaq === 3 ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
                      </button>
                    </h2>
                    <div
                      id="collapse3"
                      className={`accordion-collapse collapse ${openFaq === 3 ? 'show' : ''}`}
                      aria-labelledby="heading3"
                    >
                      <div className="accordion-body">
                        <p>
                          Yes. Home visits can be made around Milton Keynes; online one-to-one sessions are organized for those living outside the city.
                        </p>
                      </div>
                    </div>
                  </AnimatedDiv>
                  {/* FAQ Item End */}

                  {/* FAQ Item Start */}
                  <AnimatedDiv className="accordion-item" delay={0.3}>
                    <h2 className="accordion-header" id="heading4">
                      <button
                        className={`accordion-button ${openFaq !== 4 ? 'collapsed' : ''}`}
                        type="button"
                        onClick={() => toggleFaq(4)}
                        aria-expanded={openFaq === 4}
                        aria-controls="collapse4"
                        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                      >
                        <span>4. What do your women's health and pilates programs cover?</span>
                        {openFaq === 4 ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
                      </button>
                    </h2>
                    <div
                      id="collapse4"
                      className={`accordion-collapse collapse ${openFaq === 4 ? 'show' : ''}`}
                      aria-labelledby="heading4"
                    >
                      <div className="accordion-body">
                        <p>
                          It includes pre and post-pregnancy pilates, pelvic floor exercises and movement therapies for menstrual pain.
                        </p>
                        <p>
                          🔗 For detailed reading → <Link href="/blog/womens-health-pilates" style={{ color: '#8E714F', fontWeight: '600' }}>Women's Health Pilates Blog Post</Link>
                        </p>
                      </div>
                    </div>
                  </AnimatedDiv>
                  {/* FAQ Item End */}


                </div>
                {/* FAQ Accordion End */}
              </div>
              {/* Faqs Content End */}
            </div>

            <div className="col-lg-6">
              {/* Faqs Image Box Start */}
              <div className="faqs-image-box">
                <div className="faq-image">
                  <figure className="image-anime reveal">
                    <Image src="/images/faq-image.jpg" alt="FAQ" width={600} height={800} />
                  </figure>
                </div>

                {/* Faqs CTA Box Start */}
                <div className="faqs-cta-box">
                  <div className="icon-box">
                    <Image src="/images/icon-faqs-cta.svg" alt="Icon" width={60} height={60} />
                  </div>
                  <div className="faqs-cta-box-content">
                    <h3>Relax, We Have Answers</h3>
                  </div>
                </div>
                {/* Faqs CTA Box End */}
              </div>
              {/* Faqs Image Box End */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}