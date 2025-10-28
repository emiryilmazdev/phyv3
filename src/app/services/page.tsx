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
    title: 'Post-op Physiotherapy & Rehabilitation',
    description: 'Professional rehabilitation support for post-surgical and musculoskeletal system problems.',
    features: [
      'Post-operative rehabilitation',
      'Musculoskeletal system treatment',
      'Pain management',
      'Functional movement training'
    ],
    price: '£65',
    duration: '45-60 min',
    color: '#8E714F'
  },
  {
    id: 2,
    icon: FiZap,
    title: 'Sports Services',
    description: 'Professional support focused on performance, recovery and injury prevention for athletes.',
    features: [
      'Sports injury rehabilitation',
      'Performance enhancing exercises',
      'Sports massage',
      'Kinesio taping'
    ],
    price: '£45',
    duration: '30-45 min',
    color: '#636A55'
  },
  {
    id: 3,
    icon: FiHeart,
    title: 'Women\'s Health & Pilates',
    description: 'Movement therapies specific to women, periodic and appropriate to life stages.',
    features: [
      'Prenatal physiotherapy',
      'Postpartum rehabilitation',
      'Menstrual pain treatment',
      'Women\'s health pilates'
    ],
    price: '£50',
    duration: '45 min',
    color: '#5A5044'
  },
  {
    id: 4,
    icon: FiMonitor,
    title: 'Online & Home Services',
    description: 'Personalized, accessible and flexible session options.',
    features: [
      'Online physiotherapy consultation',
      'Home physiotherapy sessions',
      'Video exercise programs',
      'WhatsApp support line'
    ],
    price: '£40',
    duration: '30-45 min',
    color: '#8E714F'
  },
  {
    id: 5,
    icon: FiHome,
    title: 'Geriatric Physiotherapy',
    description: 'Safe and effective rehabilitation programs specific to elderly individuals.',
    features: [
      'Balance and coordination training',
      'Fall prevention programs',
      'Elderly period exercises',
      'Mobility enhancing treatments'
    ],
    price: '£55',
    duration: '45 min',
    color: '#636A55'
  },
  {
    id: 6,
    icon: FiUsers,
    title: 'Neurological Rehabilitation',
    description: 'Functional recovery programs after neurological diseases.',
    features: [
      'Post-stroke rehabilitation',
      'Parkinson\'s disease support',
      'Multiple sclerosis management',
      'Neurological pain treatment'
    ],
    price: '£70',
    duration: '60 min',
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
                  Our Services
                </h1>
                <nav>
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Services
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="services-page-container">
        <div className="container" style={{ maxWidth: '1200px' }}>

          {/* Hero Section */}
          <motion.div
            className="services-hero-section"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <motion.div
              className="services-badge"
              variants={fadeIn}
            >
              Professional Services
            </motion.div>

            <h2 className="services-hero-title">
              Personalized <span style={{ color: '#8E714F' }}>Physiotherapy Solutions</span>
            </h2>

            <p className="services-hero-description">
              Regain your health with comprehensive physiotherapy services I offer in Milton Keynes.
              I apply evidence-based treatment methods suitable for each patient's unique needs.
            </p>

            <div className="services-hero-buttons">
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link href="/iletisim" className="services-btn-primary">
                  <FiPhone size={16} />
                  Free Assessment
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link href="tel:+447709572412" className="services-btn-secondary">
                  <FiMail size={16} />
                  Contact Now
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
            {services.map((service) => (
              <div key={service.id} className="col-lg-4 col-md-6" style={{ marginBottom: '30px' }}>
                <motion.div
                  className="service-card"
                  variants={fadeIn}
                  whileHover={{
                    y: -8,
                    boxShadow: '0 15px 40px rgba(90, 80, 68, 0.15)'
                  }}
                >
                  {/* Service Header */}
                  <div style={{ marginBottom: '20px' }}>
                    <div
                      className="service-icon-box"
                      style={{
                        background: `linear-gradient(135deg, ${service.color}20, ${service.color}10)`,
                        border: `2px solid ${service.color}30`
                      }}
                    >
                      <service.icon style={{ fontSize: '24px', color: service.color }} />
                    </div>

                    <h3 className="service-title">
                      {service.title}
                    </h3>

                    <p className="service-description">
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
                        Book Now
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
                Package Options
              </motion.div>

              <h2 style={{
                color: '#5A5044',
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                fontWeight: '700',
                marginBottom: '15px'
              }}>
                Affordable <span style={{ color: '#8E714F' }}>Treatment Packages</span>
              </h2>

              <p style={{
                color: '#636A55',
                fontSize: '1rem',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                Save money and achieve more effective results by booking more sessions
              </p>
            </div>

            <div className="row">
              {[
                {
                  name: 'Starter',
                  sessions: '3 Sessions',
                  price: '£180',
                  originalPrice: '£195',
                  savings: '£15 savings',
                  features: [
                    '3 x 45 minute individual sessions',
                    'Detailed initial assessment',
                    'Personal exercise program',
                    'Progress tracking',
                    'WhatsApp support'
                  ],
                  color: '#636A55',
                  popular: false
                },
                {
                  name: 'Standard',
                  sessions: '6 Sessions',
                  price: '£350',
                  originalPrice: '£390',
                  savings: '£40 savings',
                  features: [
                    '6 x 45 minute individual sessions',
                    'Comprehensive assessment',
                    'Personal exercise program',
                    'Weekly progress tracking',
                    'WhatsApp support line',
                    'Home exercise videos'
                  ],
                  color: '#8E714F',
                  popular: true
                },
                {
                  name: 'Premium',
                  sessions: '12 Sessions',
                  price: '£650',
                  originalPrice: '£780',
                  savings: '£130 savings',
                  features: [
                    '12 x 45 minute individual sessions',
                    'Detailed initial and interim assessment',
                    'Personal exercise program',
                    'Weekly progress tracking',
                    '24/7 WhatsApp support',
                    'Home exercise video library',
                    'Nutrition consultation',
                    'Lifestyle coaching'
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
                        Most Popular
                      </div>
                    )}

                    <div style={{ textAlign: 'center', marginBottom: '25px' }}>
                      <h3 style={{
                        fontSize: '1.3rem',
                        fontWeight: '700',
                        marginBottom: '8px',
                        color: pkg.popular ? '#ffffff' : '#5A5044'
                      }}>
                        {pkg.name} Package
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
                        Choose Package
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
                For Your Health
              </span>
            </motion.div>

            <h2 style={{
              color: '#F7F3ED',
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              fontWeight: '700',
              marginBottom: '15px'
            }}>
              Start Regaining Your Health <span style={{ color: '#EFE7DA' }}>Today</span>
            </h2>

            <p style={{
              color: 'rgba(247, 243, 237, 0.9)',
              fontSize: '1rem',
              marginBottom: '25px',
              maxWidth: '500px',
              margin: '0 auto 25px'
            }}>
              Contact me for your free assessment appointment.
              Let's determine the most suitable treatment plan for you together.
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
                  Free Assessment
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