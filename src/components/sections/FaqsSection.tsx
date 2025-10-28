'use client'

import Image from 'next/image'
import Link from 'next/link'
import AnimatedDiv from '@/components/ui/AnimatedDiv'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

export default function FaqsSection() {
  return (
    <>
      <style jsx>{`
        .accordion-button::after {
          display: none !important;
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
                  <h3>Sıkça Sorulan Sorular</h3>
                </AnimatedDiv>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  İlk kez gelen ve <span>düzenli hastalarımız</span> için faydalı cevaplar
                </h2>
              </div>
              {/* Section Title End */}

              {/* FAQ Accordion Start */}
              <div className="faq-accordion" id="faqaccordion">
                {/* FAQ Item Start */}
                <AnimatedDiv className="accordion-item" delay={0}>
                  <h2 className="accordion-header" id="heading1">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse1"
                      aria-expanded="false"
                      aria-controls="collapse1"
                      style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                    >
                      <span>1. Fizyoterapi seansları nasıl ilerliyor?</span>
                      <FiChevronDown size={20} />
                    </button>
                  </h2>
                  <div
                    id="collapse1"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading1"
                    data-bs-parent="#faqaccordion"
                  >
                    <div className="accordion-body">
                      <p>
                        Her seans, bireyin ihtiyacına göre planlanır. İlk seansta duruş, hareket açıklığı ve kas kuvveti değerlendirilir; ardından kişiye özel egzersiz programı oluşturulur.
                      </p>
                    </div>
                  </div>
                </AnimatedDiv>
                {/* FAQ Item End */}

                {/* FAQ Item Start */}
                <AnimatedDiv className="accordion-item" delay={0.1}>
                  <h2 className="accordion-header" id="heading2">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse2"
                      aria-expanded="true"
                      aria-controls="collapse2"
                      style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                    >
                      <span>2. GLP-1 (Mounjaro, Ozempic vb.) kullananlar için özel bir egzersiz programınız var mı?</span>
                      <FiChevronUp size={20} />
                    </button>
                  </h2>
                  <div
                    id="collapse2"
                    className="accordion-collapse collapse show"
                    aria-labelledby="heading2"
                    data-bs-parent="#faqaccordion"
                  >
                    <div className="accordion-body">
                      <p>
                        Evet. GLP-1 ilaçlarını kullanan bireylerde kas kaybını önlemek, postürü korumak ve metabolizmayı desteklemek için özel egzersiz protokolleri uygulanır.
                      </p>
                      <p>
                        🔗 Detaylı okumak için → <Link href="/blog/glp-1-egzersiz-programi" style={{ color: '#8E714F', fontWeight: '600' }}>GLP-1 ile Egzersiz Programı Blog Yazısı</Link>
                      </p>
                    </div>
                  </div>
                </AnimatedDiv>
                {/* FAQ Item End */}  
              {/* FAQ Item Start */}
                <AnimatedDiv className="accordion-item" delay={0.2}>
                  <h2 className="accordion-header" id="heading3">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse3"
                      aria-expanded="false"
                      aria-controls="collapse3"
                      style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                    >
                      <span>3. Evde veya online seans alabilir miyim?</span>
                      <FiChevronDown size={20} />
                    </button>
                  </h2>
                  <div
                    id="collapse3"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading3"
                    data-bs-parent="#faqaccordion"
                  >
                    <div className="accordion-body">
                      <p>
                        Evet. Milton Keynes çevresinde ev ziyaretleri yapılabilir; şehir dışında yaşayanlar için ise online bire bir seanslar düzenlenmektedir.
                      </p>
                    </div>
                  </div>
                </AnimatedDiv>
                {/* FAQ Item End */}

                {/* FAQ Item Start */}
                <AnimatedDiv className="accordion-item" delay={0.3}>
                  <h2 className="accordion-header" id="heading4">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse4"
                      aria-expanded="false"
                      aria-controls="collapse4"
                      style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                    >
                      <span>4. Kadın sağlığı ve pilates programlarınız neleri kapsıyor?</span>
                      <FiChevronDown size={20} />
                    </button>
                  </h2>
                  <div
                    id="collapse4"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading4"
                    data-bs-parent="#faqaccordion"
                  >
                    <div className="accordion-body">
                      <p>
                        Hamilelik öncesi ve sonrası pilates, pelvik taban egzersizleri ve regl dönemi ağrısı için hareket terapileri yer alır.
                      </p>
                      <p>
                        🔗 Detaylı okumak için → <Link href="/blog/kadin-sagligi-pilates" style={{ color: '#8E714F', fontWeight: '600' }}>Kadın Sağlığı Pilates Blog Yazısı</Link>
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
                  <h3>Rahatla, Cevaplarımız Var</h3>
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