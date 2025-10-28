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
                  <h3>Join Us</h3>
                </AnimatedDiv>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Healing touch, holistic care, <span>lasting health</span>
                </h2>
                <AnimatedDiv delay={0.2}>
                  <p>
                    Not just treatment - we offer personalized health experiences designed to 
                    relax the body, renew the mind and restore inner balance.
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
                      Do You Need Help?
                    </h3>
                    <p className="join-us-subtitle">
                      We offer personalized solutions for you
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="join-us-description">
                  I am here to help you reach your health goals with personalized treatment plans I prepare for you.
                  With my comprehensive physiotherapy and personal rehabilitation approaches, I accelerate your healing process by supporting natural methods.
                </p>

                {/* Services List */}
                <div style={{ marginBottom: '30px' }}>
                  <h4 className="join-us-services-title">
                    Our Services
                  </h4>
                  <div className="join-us-services-list">
                    <div className="join-us-service-item">
                      <div className="join-us-service-icon">
                        <FiActivity size={16} style={{ color: '#ffffff' }} />
                      </div>
                      Comprehensive Physiotherapy
                    </div>
                    <div className="join-us-service-item">
                      <div className="join-us-service-icon">
                        <FiTarget size={16} style={{ color: '#ffffff' }} />
                      </div>
                      Personal Rehabilitation
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
                    Learn More
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
                        Quick Contact
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