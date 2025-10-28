'use client'

import Link from 'next/link'
import Image from 'next/image'
import AnimatedDiv from '@/components/ui/AnimatedDiv'
import { FaWhatsapp } from 'react-icons/fa'
import { FiHelpCircle, FiActivity, FiTarget, FiArrowRight } from 'react-icons/fi'

export default function JoinUsSection() {
  return (
    <div className="join-us">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-lg-1 order-2">
            {/* Join Us Image Start */}
            <div className="join-us-image">
              <figure>
                <Image src="/images/hero-image.png" alt="Join Us" width={600} height={800} />
              </figure>
            </div>
            {/* Join Us Image End */}
          </div>

          <div className="col-lg-6 order-lg-2 order-1">
            {/* Join Us Content Start */}
            <div className="join-us-content">
              {/* Section Title Start */}
              <div className="section-title">
                <AnimatedDiv delay={0}>
                  <h3>Bize Katılın</h3>
                </AnimatedDiv>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  İyileştirici dokunuş, bütüncül bakım, <span>kalıcı sağlık</span>
                </h2>
                <AnimatedDiv delay={0.2}>
                  <p>
                  Sadece tedavi değil - vücudu rahatlatmak, zihni yenilemek ve iç dengeyi 
                    restore etmek için tasarlanmış kişiselleştirilmiş sağlık deneyimleri sunuyoruz.
                  </p>
                </AnimatedDiv>
              </div>
              {/* Section Title End */}

              {/* Unified Contact Container */}
              <AnimatedDiv 
                delay={0.4}
                className="join-us-contact-container"
              >
                {/* Header Section */}
                <div className="join-us-header-section">
                  <div className="join-us-icon-box">
                    <FiHelpCircle size={28} style={{ color: '#ffffff' }} />
                  </div>
                  <div>
                    <h3 className="join-us-title">
                      Yardıma İhtiyacınız Var mı?
                    </h3>
                    <p className="join-us-subtitle">
                      Size özel çözümler sunuyoruz
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="join-us-description">
                  Size özel hazırladığım tedavi planlarıyla sağlık hedeflerinize ulaşmanızda yanınızdayım.
Kapsamlı fizyoterapi ve kişisel rehabilitasyon yaklaşımlarımla, doğal yöntemleri destekleyerek iyileşme sürecinizi hızlandırıyorum.
                </p>

                {/* Services List */}
                <div style={{ marginBottom: '30px' }}>
                  <h4 className="join-us-services-title">
                    Hizmetlerimiz
                  </h4>
                  <div className="join-us-services-list">
                    <div className="join-us-service-item">
                      <div className="join-us-service-icon">
                        <FiActivity size={16} style={{ color: '#ffffff' }} />
                      </div>
                      Kapsamlı Fizyoterapi
                    </div>
                    <div className="join-us-service-item">
                      <div className="join-us-service-icon">
                        <FiTarget size={16} style={{ color: '#ffffff' }} />
                      </div>
                      Kişisel Rehabilitasyon
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="join-us-action-buttons">
                  {/* Contact Button */}
                  <Link 
                    href="/iletisim" 
                    className="btn-default join-us-contact-btn"
                  >
                    Daha Fazla Öğren
                    <FiArrowRight size={18} />
                  </Link>

                  {/* WhatsApp Button */}
                  <a 
                    href="https://wa.me/447709572412" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="join-us-whatsapp-btn"
                  >
                    <FaWhatsapp size={24} style={{ color: '#ffffff' }} />
                    <div>
                      <div className="join-us-whatsapp-title">
                        WhatsApp
                      </div>
                      <div className="join-us-whatsapp-subtitle">
                        Hızlı İletişim
                      </div>
                    </div>
                  </a>
                </div>
              </AnimatedDiv>
              {/* Join Us Item Box End */}
            </div>
            {/* Join Us Content End */}
          </div>
        </div>
      </div>
    </div>
  )
}