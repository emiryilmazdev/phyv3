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
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                  border: '1px solid #e9ecef',
                  borderRadius: '25px',
                  padding: '40px',
                  boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.1)'
                }}
              >
                {/* Header Section */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px' }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, var(--accent-color) 0%, var(--primary-color) 100%)',
                    borderRadius: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 25px rgba(142, 113, 79, 0.3)'
                  }}>
                    <FiHelpCircle size={28} style={{ color: '#ffffff' }} />
                  </div>
                  <div>
                    <h3 style={{ 
                      margin: '0 0 8px 0', 
                      fontSize: '24px', 
                      fontWeight: '700',
                      color: 'var(--primary-color)'
                    }}>
                      Yardıma İhtiyacınız Var mı?
                    </h3>
                    <p style={{ 
                      margin: 0, 
                      fontSize: '16px',
                      color: 'var(--text-color)',
                      opacity: 0.8
                    }}>
                      Size özel çözümler sunuyoruz
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p style={{ 
                  marginBottom: '30px', 
                  lineHeight: '1.7',
                  color: 'var(--text-color)',
                  fontSize: '16px'
                }}>
                  Size özel hazırladığım tedavi planlarıyla sağlık hedeflerinize ulaşmanızda yanınızdayım.
Kapsamlı fizyoterapi ve kişisel rehabilitasyon yaklaşımlarımla, doğal yöntemleri destekleyerek iyileşme sürecinizi hızlandırıyorum.
                </p>

                {/* Services List */}
                <div style={{ marginBottom: '30px' }}>
                  <h4 style={{ 
                    fontSize: '18px', 
                    fontWeight: '600', 
                    color: 'var(--primary-color)',
                    marginBottom: '20px'
                  }}>
                    Hizmetlerimiz
                  </h4>
                  <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '12px',
                      fontSize: '15px',
                      color: 'var(--text-color)'
                    }}>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        background: 'var(--accent-color)',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <FiActivity size={16} style={{ color: '#ffffff' }} />
                      </div>
                      Kapsamlı Fizyoterapi
                    </div>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '12px',
                      fontSize: '15px',
                      color: 'var(--text-color)'
                    }}>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        background: 'var(--accent-color)',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <FiTarget size={16} style={{ color: '#ffffff' }} />
                      </div>
                      Kişisel Rehabilitasyon
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                  {/* Contact Button */}
                  <Link 
                    href="/iletisim" 
                    className="btn-default" 
                    style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '10px',
                      fontSize: '16px',
                      padding: '15px 30px',
                      flex: '1',
                      minWidth: '200px',
                      justifyContent: 'center'
                    }}
                  >
                    Daha Fazla Öğren
                    <FiArrowRight size={18} />
                  </Link>

                  {/* WhatsApp Button */}
                  <a 
                    href="https://wa.me/447709572412" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      textDecoration: 'none', 
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '15px 25px',
                      background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                      borderRadius: '12px',
                      boxShadow: '0 8px 25px rgba(37, 211, 102, 0.25)',
                      transition: 'all 0.3s ease',
                      flex: '1',
                      minWidth: '200px',
                      justifyContent: 'center'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px)'
                      e.currentTarget.style.boxShadow = '0 12px 35px rgba(37, 211, 102, 0.35)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(37, 211, 102, 0.25)'
                    }}
                  >
                    <FaWhatsapp size={24} style={{ color: '#ffffff' }} />
                    <div>
                      <div style={{ 
                        color: '#ffffff', 
                        fontSize: '16px',
                        fontWeight: '700'
                      }}>
                        WhatsApp
                      </div>
                      <div style={{ 
                        color: 'rgba(255, 255, 255, 0.9)', 
                        fontSize: '12px'
                      }}>
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