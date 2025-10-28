'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { 
  FiArrowRight, FiAward, FiHeart, FiTarget
} from 'react-icons/fi'
import { 
  HiAcademicCap
} from 'react-icons/hi'
import { 
  MdHealthAndSafety, MdLocalHospital, MdVerified
} from 'react-icons/md'

export default function AboutSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section 
      ref={sectionRef}
      style={{ 
        position: 'relative',
        padding: '120px 0'
      }}
    >

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Ultra Minimal Header */}
        <motion.div 
          style={{ 
            textAlign: 'center', 
            marginBottom: '80px',
            maxWidth: '600px',
            margin: '0 auto 80px'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.div
            style={{
              width: '60px',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #8E714F, transparent)',
              margin: '0 auto 30px',
              borderRadius: '1px'
            }}
            initial={{ width: 0 }}
            animate={isInView ? { width: '60px' } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          />
          
          <motion.h2 
            style={{ 
              color: '#2A2A2A', 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
              fontWeight: '300',
              marginBottom: '25px',
              lineHeight: '1.1',
              letterSpacing: '-0.02em'
            }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Şimal Ongun
          </motion.h2>

          <motion.p 
            style={{ 
              color: '#8E714F', 
              fontSize: '18px', 
              fontWeight: '500',
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              marginBottom: '0'
            }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Fizyoterapist
          </motion.p>
        </motion.div>

        {/* Floating Profile Image */}
        <motion.div 
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '60px'
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <motion.div
            style={{
              position: 'relative',
              width: '280px',
              height: '280px'
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            {/* Floating Ring Animation */}
            <motion.div
              style={{
                position: 'absolute',
                inset: '-20px',
                border: '1px solid rgba(142, 113, 79, 0.2)',
                borderRadius: '50%',
                borderTopColor: '#8E714F',
                borderRightColor: '#8E714F'
              }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            {/* Main Image */}
            <div style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '8px solid #FFFFFF',
              boxShadow: '0 30px 80px rgba(0, 0, 0, 0.1)',
              position: 'relative',
              zIndex: 2
            }}>
              <Image 
                src="/images/simbo.png" 
                alt="Şimal Ongun" 
                width={280}
                height={280}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Minimal Badge */}
            <motion.div
              style={{
                position: 'absolute',
                bottom: '20px',
                right: '20px',
                width: '60px',
                height: '60px',
                background: '#8E714F',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '6px solid #FFFFFF',
                boxShadow: '0 10px 30px rgba(142, 113, 79, 0.3)',
                zIndex: 3
              }}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
              whileHover={{ rotate: 360 }}
            >
              <MdVerified style={{ color: '#FFFFFF', fontSize: '30px' }} />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Minimal Content Grid */}
        <div className="row justify-content-center">
          <div className="col-lg-10">

            {/* Ultra Minimal Stats */}
            <motion.div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '40px',
                marginBottom: '60px',
                textAlign: 'center'
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              {[
                { value: 2, suffix: '+', label: 'Yıl Deneyim' },
                { value: 300, suffix: '+', label: 'Mutlu Hasta' },
                { value: 100, suffix: '%', label: 'Başarı Oranı' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  style={{
                    padding: '0',
                    border: 'none',
                    background: 'transparent'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.3 + index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                >
                  <motion.div 
                    style={{
                      fontSize: 'clamp(3rem, 6vw, 5rem)',
                      fontWeight: '200',
                      color: '#8E714F',
                      lineHeight: '1',
                      marginBottom: '10px',
                      letterSpacing: '-0.02em'
                    }}
                    initial={{ scale: 0.5 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 1.5 + index * 0.2, type: "spring", stiffness: 100 }}
                  >
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </motion.div>
                  <div style={{
                    fontSize: '14px',
                    color: '#666',
                    fontWeight: '400',
                    letterSpacing: '0.5px'
                  }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Minimal Content */}
            <motion.div
              style={{
                textAlign: 'center',
                maxWidth: '600px',
                margin: '0 auto'
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.8, duration: 0.8 }}
            >
              <p style={{
                fontSize: '20px',
                lineHeight: '1.6',
                color: '#444',
                marginBottom: '25px',
                fontWeight: '300'
              }}>
                Milton Keynes'te{' '}
                <span style={{ 
                  color: '#8E714F',
                  fontWeight: '500'
                }}>
                  fizyoterapi ve rehabilitasyon
                </span>{' '}
                hizmeti veriyorum. Istanbul Bezmialem Üniversitesi'nde başladığım yolculuğumu London Middlesex University'de yüksek lisansla sürdürdüm. Özel hastane deneyimimle birlikte kas-iskelet sistemi, nörolojik rehabilitasyon ve spor yaralanmaları üzerine yoğunlaştım. Her bireyin iyileşme sürecine özgü bir yol olduğuna inanıyor, tedavilerimi bu anlayışla planlıyorum.
              </p>

              <motion.div
                style={{
                  width: '40px',
                  height: '2px',
                  background: '#8E714F',
                  margin: '30px auto',
                  borderRadius: '1px'
                }}
                initial={{ width: 0 }}
                animate={isInView ? { width: '40px' } : {}}
                transition={{ delay: 2.2, duration: 0.8 }}
              />



              {/* Ultra Minimal CTA */}
              <motion.div 
                style={{ 
                  display: 'flex', 
                  gap: '20px', 
                  justifyContent: 'center',
                  flexWrap: 'wrap'
                }}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 2.5, duration: 0.8 }}
              >
                <motion.div 
                  whileHover={{ y: -3 }} 
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/hakkimda"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px',
                      background: '#8E714F',
                      color: '#FFFFFF',
                      padding: '15px 30px',
                      borderRadius: '50px',
                      textDecoration: 'none',
                      fontWeight: '400',
                      fontSize: '15px',
                      border: 'none',
                      boxShadow: '0 8px 30px rgba(142, 113, 79, 0.2)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <span>Daha Fazla Bilgi</span>
                    <motion.div
                      animate={{ x: [0, 3, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <FiArrowRight size={16} />
                    </motion.div>
                  </Link>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -3 }} 
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/iletisim"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px',
                      background: 'transparent',
                      color: '#8E714F',
                      padding: '15px 30px',
                      borderRadius: '50px',
                      textDecoration: 'none',
                      fontWeight: '400',
                      fontSize: '15px',
                      border: '1px solid #8E714F',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <span>Randevu Al</span>
                    <FiArrowRight size={16} />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>


      </div>
    </section>
  )
}
