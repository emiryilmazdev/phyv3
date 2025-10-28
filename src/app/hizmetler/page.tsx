'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  FiActivity, 
  FiZap, 
  FiHeart, 
  FiMonitor, 
  FiHome, 
  FiUsers,
  FiPhone,
  FiMail,
  FiCheckCircle,
  FiStar,
  FiClock,
  FiTarget
} from 'react-icons/fi'
import { useEffect, useState } from 'react'

const services = [
  {
    id: 1,
    icon: FiActivity,
    title: 'Fizyoterapi & Rehabilitasyon',
    description: 'Ameliyat sonrası ve kas-iskelet sistemi problemlerinde profesyonel rehabilitasyon desteği.',
    features: [
      'Post-operatif rehabilitasyon',
      'Kas-iskelet sistemi tedavisi',
      'Ağrı yönetimi',
      'Fonksiyonel hareket eğitimi'
    ],
    price: '£65',
    duration: '45-60 dk',
    color: '#8E714F'
  },
  {
    id: 2,
    icon: FiZap,
    title: 'Sporcu Hizmetleri',
    description: 'Sporcular için performans, iyileşme ve sakatlık önleme odaklı profesyonel destek.',
    features: [
      'Spor yaralanmaları rehabilitasyonu',
      'Performans artırıcı egzersizler',
      'Spor masajı',
      'Kinezyo taping'
    ],
    price: '£45',
    duration: '30-45 dk',
    color: '#636A55'
  },
  {
    id: 3,
    icon: FiHeart,
    title: 'Kadın Sağlığı & Pilates',
    description: 'Kadınlara özel, dönemsel ve yaşam evresine uygun hareket terapileri.',
    features: [
      'Prenatal fizyoterapi',
      'Postpartum rehabilitasyon',
      'Regl ağrısı tedavisi',
      'Kadın sağlığı pilates'
    ],
    price: '£50',
    duration: '45 dk',
    color: '#5A5044'
  },
  {
    id: 4,
    icon: FiMonitor,
    title: 'Online & Evde Hizmetler',
    description: 'Kişiye özel, erişilebilir ve esnek seans seçenekleri.',
    features: [
      'Online fizyoterapi danışmanlığı',
      'Evde fizyoterapi seansları',
      'Video egzersiz programları',
      'WhatsApp destek hattı'
    ],
    price: '£40',
    duration: '30-45 dk',
    color: '#8E714F'
  },
  {
    id: 5,
    icon: FiHome,
    title: 'Geriatrik Fizyoterapi',
    description: 'Yaşlı bireylere özel, güvenli ve etkili rehabilitasyon programları.',
    features: [
      'Denge ve koordinasyon eğitimi',
      'Düşme önleme programları',
      'Yaşlılık dönem egzersizleri',
      'Mobilite artırıcı tedaviler'
    ],
    price: '£55',
    duration: '45 dk',
    color: '#636A55'
  },
  {
    id: 6,
    icon: FiUsers,
    title: 'Nörolojik Rehabilitasyon',
    description: 'Nörolojik hastalıklar sonrası fonksiyonel iyileşme programları.',
    features: [
      'İnme sonrası rehabilitasyon',
      'Parkinson hastalığı desteği',
      'Multiple skleroz yönetimi',
      'Nörolojik ağrı tedavisi'
    ],
    price: '£70',
    duration: '60 dk',
    color: '#5A5044'
  }
]

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  }

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <>
      <Header />
      
      {/* Page Header */}
      <div className="page-header bg-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="text-anime-style-2" data-cursor="-opaque">
                  Hizmetlerimiz <span>& Fiyatlar</span>
                </h1>
                <nav>
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Ana Sayfa</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Hizmetler
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>  
    {/* Main Content */}
      <div style={{ 
        background: '#F7F3ED',
        padding: '50px 0'
      }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          
          {/* Hero Section */}
          <motion.div 
            style={{ 
              background: 'linear-gradient(135deg, #ffffff 0%, #fefefe 100%)',
              borderRadius: '16px',
              padding: '50px 40px',
              marginBottom: '50px',
              border: '1px solid #EFE7DA',
              boxShadow: '0 8px 30px rgba(90, 80, 68, 0.1)',
              textAlign: 'center'
            }}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <motion.div
              style={{
                display: 'inline-block',
                background: '#8E714F',
                color: '#ffffff',
                padding: '8px 20px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: '600',
                marginBottom: '20px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
              variants={fadeIn}
            >
              Profesyonel Hizmetler
            </motion.div>
            
            <h2 style={{ 
              color: '#5A5044', 
              fontSize: 'clamp(2rem, 4vw, 3rem)', 
              fontWeight: '700',
              marginBottom: '20px'
            }}>
              Size Özel <span style={{ color: '#8E714F' }}>Fizyoterapi Çözümleri</span>
            </h2>
            
            <p style={{ 
              color: '#636A55', 
              fontSize: '1.1rem', 
              maxWidth: '700px', 
              margin: '0 auto 30px',
              lineHeight: '1.7'
            }}>
              Milton Keynes'te sunduğum kapsamlı fizyoterapi hizmetleri ile sağlığınızı geri kazanın. 
              Her hastamın benzersiz ihtiyaçlarına uygun, kanıta dayalı tedavi yöntemleri uyguluyorum.
            </p>

            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link href="/iletisim" style={{
                  background: 'linear-gradient(135deg, #8E714F 0%, #7A6142 100%)',
                  color: '#ffffff',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 15px rgba(142, 113, 79, 0.3)'
                }}>
                  <FiPhone size={16} />
                  Ücretsiz Değerlendirme
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link href="tel:+447709572412" style={{
                  background: 'transparent',
                  color: '#8E714F',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '14px',
                  border: '2px solid #8E714F',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <FiMail size={16} />
                  Hemen İletişim
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            className="row"
            style={{ marginBottom: '50px' }}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={stagger}
          >
            {services.map((service, index) => (
              <div key={service.id} className="col-lg-4 col-md-6" style={{ marginBottom: '30px' }}>
                <motion.div
                  style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #fefefe 100%)',
                    borderRadius: '16px',
                    padding: '30px 25px',
                    border: '1px solid #EFE7DA',
                    boxShadow: '0 8px 25px rgba(90, 80, 68, 0.08)',
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  variants={fadeIn}
                  whileHover={{ 
                    y: -8,
                    boxShadow: '0 15px 40px rgba(90, 80, 68, 0.15)'
                  }}
                >
                  {/* Service Header */}
                  <div style={{ marginBottom: '20px' }}>
                    <div
                      style={{
                        width: '60px',
                        height: '60px',
                        background: `linear-gradient(135deg, ${service.color}20, ${service.color}10)`,
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '15px',
                        border: `2px solid ${service.color}30`
                      }}
                    >
                      <service.icon style={{ fontSize: '24px', color: service.color }} />
                    </div>
                    
                    <h3 style={{ 
                      color: '#5A5044', 
                      fontSize: '1.2rem', 
                      fontWeight: '700',
                      marginBottom: '8px',
                      lineHeight: '1.3'
                    }}>
                      {service.title}
                    </h3>
                    
                    <p style={{ 
                      color: '#636A55', 
                      fontSize: '0.9rem',
                      lineHeight: '1.5',
                      marginBottom: '15px'
                    }}>
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div style={{ marginBottom: '20px' }}>
                    <ul style={{ 
                      listStyle: 'none', 
                      padding: 0, 
                      margin: 0,
                      display: 'grid',
                      gap: '8px'
                    }}>
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '8px',
                          fontSize: '0.85rem',
                          color: '#636A55'
                        }}>
                          <FiCheckCircle style={{ 
                            color: service.color, 
                            fontSize: '12px',
                            flexShrink: 0
                          }} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing & CTA */}
                  <div style={{ 
                    borderTop: '1px solid #EFE7DA',
                    paddingTop: '20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div>
                      <div style={{ 
                        color: service.color, 
                        fontSize: '1.4rem', 
                        fontWeight: '700'
                      }}>
                        {service.price}
                      </div>
                      <div style={{ 
                        color: '#636A55', 
                        fontSize: '0.8rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}>
                        <FiClock size={10} />
                        {service.duration}
                      </div>
                    </div>
                    
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link href="/iletisim" style={{
                        background: service.color,
                        color: '#ffffff',
                        padding: '8px 16px',
                        borderRadius: '6px',
                        textDecoration: 'none',
                        fontWeight: '600',
                        fontSize: '12px'
                      }}>
                        Randevu Al
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>        
  {/* Package Section */}
          <motion.div 
            style={{ marginBottom: '50px' }}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <motion.div
                style={{
                  display: 'inline-block',
                  background: '#636A55',
                  color: '#ffffff',
                  padding: '6px 16px',
                  borderRadius: '16px',
                  fontSize: '11px',
                  fontWeight: '600',
                  marginBottom: '15px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
              >
                Paket Seçenekleri
              </motion.div>
              
              <h2 style={{ 
                color: '#5A5044', 
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', 
                fontWeight: '700',
                marginBottom: '15px'
              }}>
                Uygun Fiyatlı <span style={{ color: '#8E714F' }}>Tedavi Paketleri</span>
              </h2>
              
              <p style={{ 
                color: '#636A55', 
                fontSize: '1rem', 
                maxWidth: '600px', 
                margin: '0 auto'
              }}>
                Daha fazla seans alarak hem tasarruf edin hem de daha etkili sonuçlar elde edin
              </p>
            </div>

            <div className="row">
              {[
                {
                  name: 'Başlangıç',
                  sessions: '3 Seans',
                  price: '£180',
                  originalPrice: '£195',
                  savings: '£15 tasarruf',
                  features: [
                    '3 x 45 dakika bireysel seans',
                    'Detaylı başlangıç değerlendirmesi',
                    'Kişisel egzersiz programı',
                    'İlerleme takibi',
                    'WhatsApp destek'
                  ],
                  color: '#636A55',
                  popular: false
                },
                {
                  name: 'Standart',
                  sessions: '6 Seans',
                  price: '£350',
                  originalPrice: '£390',
                  savings: '£40 tasarruf',
                  features: [
                    '6 x 45 dakika bireysel seans',
                    'Kapsamlı değerlendirme',
                    'Kişisel egzersiz programı',
                    'Haftalık ilerleme takibi',
                    'WhatsApp destek hattı',
                    'Ev egzersiz videoları'
                  ],
                  color: '#8E714F',
                  popular: true
                },
                {
                  name: 'Premium',
                  sessions: '12 Seans',
                  price: '£650',
                  originalPrice: '£780',
                  savings: '£130 tasarruf',
                  features: [
                    '12 x 45 dakika bireysel seans',
                    'Detaylı başlangıç ve ara değerlendirme',
                    'Kişisel egzersiz programı',
                    'Haftalık ilerleme takibi',
                    '24/7 WhatsApp destek',
                    'Ev egzersiz video kütüphanesi',
                    'Beslenme danışmanlığı',
                    'Yaşam tarzı koçluğu'
                  ],
                  color: '#5A5044',
                  popular: false
                }
              ].map((pkg, index) => (
                <div key={index} className="col-lg-4 col-md-6" style={{ marginBottom: '20px' }}>
                  <motion.div
                    style={{
                      background: pkg.popular 
                        ? 'linear-gradient(135deg, #8E714F 0%, #7A6142 100%)' 
                        : 'linear-gradient(135deg, #ffffff 0%, #fefefe 100%)',
                      borderRadius: '16px',
                      padding: '30px 25px',
                      border: pkg.popular ? 'none' : '1px solid #EFE7DA',
                      boxShadow: pkg.popular 
                        ? '0 15px 40px rgba(142, 113, 79, 0.3)' 
                        : '0 8px 25px rgba(90, 80, 68, 0.08)',
                      height: '100%',
                      position: 'relative',
                      color: pkg.popular ? '#ffffff' : '#5A5044'
                    }}
                    whileHover={{ 
                      y: -8,
                      boxShadow: pkg.popular 
                        ? '0 20px 50px rgba(142, 113, 79, 0.4)' 
                        : '0 15px 40px rgba(90, 80, 68, 0.15)'
                    }}
                  >
                    {pkg.popular && (
                      <div style={{
                        position: 'absolute',
                        top: '-10px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: '#F7F3ED',
                        color: '#8E714F',
                        padding: '4px 16px',
                        borderRadius: '12px',
                        fontSize: '11px',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}>
                        <FiStar size={10} style={{ marginRight: '4px' }} />
                        En Popüler
                      </div>
                    )}

                    <div style={{ textAlign: 'center', marginBottom: '25px' }}>
                      <h3 style={{ 
                        fontSize: '1.3rem', 
                        fontWeight: '700',
                        marginBottom: '8px',
                        color: pkg.popular ? '#ffffff' : '#5A5044'
                      }}>
                        {pkg.name} Paket
                      </h3>
                      
                      <div style={{ marginBottom: '10px' }}>
                        <span style={{ 
                          fontSize: '2.2rem', 
                          fontWeight: '800',
                          color: pkg.popular ? '#ffffff' : pkg.color
                        }}>
                          {pkg.price}
                        </span>
                        <span style={{ 
                          fontSize: '0.9rem',
                          color: pkg.popular ? 'rgba(255,255,255,0.8)' : '#636A55',
                          marginLeft: '8px'
                        }}>
                          / {pkg.sessions}
                        </span>
                      </div>
                      
                      <div style={{ 
                        fontSize: '0.85rem',
                        color: pkg.popular ? 'rgba(255,255,255,0.9)' : '#8E714F',
                        fontWeight: '600'
                      }}>
                        {pkg.savings}
                      </div>
                    </div>

                    <ul style={{ 
                      listStyle: 'none', 
                      padding: 0, 
                      margin: '0 0 25px 0',
                      display: 'grid',
                      gap: '10px'
                    }}>
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} style={{ 
                          display: 'flex', 
                          alignItems: 'flex-start', 
                          gap: '8px',
                          fontSize: '0.85rem',
                          color: pkg.popular ? 'rgba(255,255,255,0.9)' : '#636A55'
                        }}>
                          <FiCheckCircle style={{ 
                            color: pkg.popular ? '#F7F3ED' : pkg.color, 
                            fontSize: '12px',
                            flexShrink: 0,
                            marginTop: '2px'
                          }} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link href="/iletisim" style={{
                        display: 'block',
                        background: pkg.popular ? '#ffffff' : pkg.color,
                        color: pkg.popular ? '#8E714F' : '#ffffff',
                        padding: '12px 20px',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        fontWeight: '600',
                        fontSize: '14px',
                        textAlign: 'center',
                        boxShadow: pkg.popular ? '0 4px 15px rgba(0,0,0,0.1)' : 'none'
                      }}>
                        Paketi Seç
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div 
            style={{
              background: 'linear-gradient(135deg, #5A5044 0%, #8E714F 50%, #636A55 100%)',
              borderRadius: '16px',
              padding: '40px 30px',
              textAlign: 'center'
            }}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <motion.div
              style={{
                display: 'inline-block',
                background: 'rgba(247, 243, 237, 0.2)',
                padding: '6px 16px',
                borderRadius: '16px',
                marginBottom: '20px'
              }}
            >
              <span style={{ 
                color: '#F7F3ED', 
                fontSize: '11px', 
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                <FiTarget size={10} style={{ marginRight: '4px' }} />
                Sağlığınız İçin
              </span>
            </motion.div>
            
            <h2 style={{ 
              color: '#F7F3ED', 
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', 
              fontWeight: '700', 
              marginBottom: '15px'
            }}>
              Sağlığınızı Geri Kazanmaya <span style={{ color: '#EFE7DA' }}>Bugün Başlayın</span>
            </h2>
            
            <p style={{ 
              color: 'rgba(247, 243, 237, 0.9)', 
              fontSize: '1rem', 
              marginBottom: '25px',
              maxWidth: '500px',
              margin: '0 auto 25px'
            }}>
              Ücretsiz değerlendirme randevunuz için benimle iletişime geçin. 
              Size en uygun tedavi planını birlikte belirleyelim.
            </p>
            
            <div style={{ 
              display: 'flex', 
              gap: '15px', 
              justifyContent: 'center', 
              flexWrap: 'wrap'
            }}>
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Link href="/iletisim" style={{
                  background: '#F7F3ED', 
                  color: '#5A5044', 
                  padding: '12px 24px',
                  borderRadius: '8px', 
                  textDecoration: 'none', 
                  fontWeight: '600',
                  fontSize: '14px',
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                }}>
                  <FiPhone size={16} />
                  Ücretsiz Değerlendirme
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Link href="tel:+447709572412" style={{
                  background: 'transparent', 
                  color: '#F7F3ED', 
                  padding: '12px 24px',
                  borderRadius: '8px', 
                  textDecoration: 'none', 
                  fontWeight: '600',
                  fontSize: '14px',
                  border: '2px solid rgba(247, 243, 237, 0.3)',
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px'
                }}>
                  <FiMail size={16} />
                  +44 7709572412
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </>
  )
}