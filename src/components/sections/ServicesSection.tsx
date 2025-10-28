'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  FiArrowRight,
  FiCheckCircle,
  FiClock
} from 'react-icons/fi'
import { 
  MdHealthAndSafety,
  MdSportsGymnastics,
  MdPregnantWoman,
  MdLaptop
} from 'react-icons/md'
import { useEffect, useState } from 'react'

const services = [
  {
    id: 1,
    icon: MdHealthAndSafety,
    title: 'Post op Fizyoterapi &Rehabilitation',
    description: 'Ameliyat sonrası ve kas-iskelet sistemi problemlerinde profesyonel rehabilitasyon desteği.',
    features: ['Post-operatif rehabilitasyon', 'Kas-iskelet sistemi tedavisi', 'Ağrı yönetimi'],
    price: '£65',
    duration: '45-60 dk',
    color: '#8E714F'
  },
  {
    id: 2,
    icon: MdSportsGymnastics,
    title: 'Sporcu Hizmetleri',
    description: 'Sporcular için performans, iyileşme ve sakatlık önleme odaklı profesyonel destek.',
    features: ['Spor yaralanmaları rehabilitasyonu', 'Performans artırıcı egzersizler', 'Spor masajı'],
    price: '£45',
    duration: '30-45 dk',
    color: '#636A55'
  },
  {
    id: 3,
    icon: MdPregnantWoman,
    title: 'Kadın Sağlığı & Pilates',
    description: 'Kadınlara özel, dönemsel ve yaşam evresine uygun hareket terapileri.',
    features: ['Prenatal fizyoterapi', 'Postpartum rehabilitasyon', 'Regl ağrısı tedavisi'],
    price: '£50',
    duration: '45 dk',
    color: '#5A5044'
  },
  {
    id: 4,
    icon: MdLaptop,
    title: 'Online & Evde Hizmetler',
    description: 'Kişiye özel, erişilebilir ve esnek seans seçenekleri.',
    features: ['Online fizyoterapi danışmanlığı', 'Evde fizyoterapi seansları', 'Video egzersiz programları'],
    price: '£40',
    duration: '30-45 dk',
    color: '#8E714F'
  }
]

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  }

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  return (
    <div className="bg-section dark-section" style={{ 
      padding: '80px 0'
    }}>
      <div className="container">
        
        {/* Section Header */}
        <motion.div 
          style={{ textAlign: 'center', marginBottom: '60px' }}
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
          >
            Hizmetlerimiz
          </motion.div>
          
          <h2 style={{ 
            color: '#F7F3ED', 
            fontSize: 'clamp(2rem, 4vw, 3rem)', 
            fontWeight: '700',
            marginBottom: '20px'
          }}>
            Profesyonel Fizyoterapi Hizmetleri ile <span style={{ color: '#EFE7DA' }}>Sağlığınızı Geri Kazanın</span>
          </h2>
          
          <p style={{ 
            color: '#F7F3ED', 
            fontSize: '1.1rem', 
            maxWidth: '700px', 
            margin: '0 auto',
            lineHeight: '1.7',
            opacity: '0.9'
          }}>
            Milton Keynes'te sunduğum kapsamlı fizyoterapi hizmetleri ile sağlığınızı geri kazanın. 
            Her hastamın benzersiz ihtiyaçlarına uygun, kanıta dayalı tedavi yöntemleri uyguluyorum.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="row"
          style={{ marginBottom: '60px' }}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={stagger}
        >
          {services.map((service, index) => (
            <div key={service.id} className="col-lg-3 col-md-6" style={{ marginBottom: '30px' }}>
              <motion.div
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #fefefe 100%)',
                  borderRadius: '16px',
                  padding: '30px 25px',
                  border: '1px solid #EFE7DA',
                  boxShadow: '0 8px 25px rgba(90, 80, 68, 0.08)',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
                variants={fadeIn}
                whileHover={{ 
                  y: -10,
                  boxShadow: '0 20px 40px rgba(90, 80, 68, 0.15)'
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Hover Background Effect */}
                <motion.div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(135deg, ${service.color}08, ${service.color}03)`,
                    opacity: 0,
                    borderRadius: '16px'
                  }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Service Header */}
                <div style={{ marginBottom: '20px', position: 'relative', zIndex: 1 }}>
                  <motion.div
                    style={{
                      width: '70px',
                      height: '70px',
                      background: `linear-gradient(135deg, ${service.color}30, ${service.color}20)`,
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                      border: `3px solid ${service.color}50`,
                      boxShadow: `0 8px 20px ${service.color}20`
                    }}
                    whileHover={{ 
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.1
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon style={{ fontSize: '32px', color: service.color, fontWeight: 'bold' }} />
                  </motion.div>
                  
                  <h3 style={{ 
                    color: '#5A5044', 
                    fontSize: '1.2rem', 
                    fontWeight: '700',
                    marginBottom: '10px',
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
                <div style={{ marginBottom: '20px', position: 'relative', zIndex: 1 }}>
                  <ul style={{ 
                    listStyle: 'none', 
                    padding: 0, 
                    margin: 0,
                    display: 'grid',
                    gap: '6px'
                  }}>
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '8px',
                        fontSize: '0.8rem',
                        color: '#636A55'
                      }}>
                        <FiCheckCircle style={{ 
                          color: service.color, 
                          fontSize: '10px',
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
                  alignItems: 'center',
                  position: 'relative',
                  zIndex: 1
                }}>
                  <div>
                    <div style={{ 
                      color: service.color, 
                      fontSize: '1.3rem', 
                      fontWeight: '700'
                    }}>
                      {service.price}
                    </div>
                    <div style={{ 
                      color: '#636A55', 
                      fontSize: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <FiClock size={8} />
                      {service.duration}
                    </div>
                  </div>
                  
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link href="/hizmetler" style={{
                      background: service.color,
                      color: '#ffffff',
                      padding: '8px 12px',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      fontWeight: '600',
                      fontSize: '11px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      Detay
                      <FiArrowRight size={10} />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* CTA Section */}
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
          <h3 style={{ 
            color: '#F7F3ED', 
            fontSize: 'clamp(1.5rem, 3vw, 2rem)', 
            fontWeight: '700', 
            marginBottom: '15px'
          }}>
            Sağlığınızı Geri Kazanmaya <span style={{ color: '#EFE7DA' }}>Bugün Başlayın</span>
          </h3>
          
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
                Ücretsiz Değerlendirme
                <FiArrowRight size={14} />
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Link href="/hizmetler" style={{
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
                Tüm Hizmetler
                <FiArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}