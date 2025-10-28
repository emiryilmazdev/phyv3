'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiGlobe,
  FiBriefcase,
  FiHeart,
  FiTarget,
  FiTrendingUp,
  FiCheckCircle,
  FiStar,
  FiUsers,
  FiClock
} from 'react-icons/fi'
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { useEffect, useState } from 'react'

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({ years: 0, countries: 0, patients: 0 })

  useEffect(() => {
    setIsVisible(true)

    // Counter animation
    const animateCounters = () => {
      const duration = 2000
      const steps = 60
      const stepDuration = duration / steps

      let currentStep = 0
      const timer = setInterval(() => {
        currentStep++
        const progress = currentStep / steps

        setCounters({
          years: Math.floor(2 * progress),
          countries: Math.floor(4 * progress),
          patients: Math.floor(100 * progress)
        })

        if (currentStep >= steps) {
          clearInterval(timer)
          setCounters({ years: 2, countries: 4, patients: 100 })
        }
      }, stepDuration)
    }

    const timeout = setTimeout(animateCounters, 500)
    return () => clearTimeout(timeout)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" as const }
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
                  About <span>Simal Ongun</span>
                </h1>
                <nav>
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      About
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="about-page-container">
        <div className="container" style={{ maxWidth: '1100px', padding: '0 20px' }}>

          {/* Hero Section */}
          <motion.div
            className="about-hero-card"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            whileHover={{
              boxShadow: '0 8px 30px rgba(90, 80, 68, 0.12)',
              y: -2
            }}
          >
            <div className="row align-items-center">
              <div className="col-lg-3">
                <div style={{ textAlign: 'center' }}>
                  <div className="about-profile-image">
                    <Image
                      src="/images/simbo.png"
                      alt="Simal Ongun"
                      width={120}
                      height={120}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div className="about-profile-badge">
                      <FiCheckCircle style={{ color: '#ffffff', fontSize: '10px' }} />
                    </div>
                  </div>

                  <h2 style={{
                    color: '#5A5044',
                    fontSize: '18px',
                    marginBottom: '4px',
                    fontWeight: '600'
                  }}>
                    Simal Ongun
                  </h2>

                  <p style={{
                    color: '#8E714F',
                    fontSize: '13px',
                    fontWeight: '500',
                    marginBottom: '2px'
                  }}>
                    MSK Assistant & Health Advisor
                  </p>

                  <p style={{
                    color: '#636A55',
                    fontSize: '11px',
                    marginBottom: '15px'
                  }}>
                    Bupa Hospitals - Milton Keynes
                  </p>

                  <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
                    <a
                      href="https://instagram.com/simalongun"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: '28px',
                        height: '28px',
                        background: '#ffffff',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#000000',
                        textDecoration: 'none',
                        border: '1px solid #EFE7DA'
                      }}
                    >
                      <FaInstagram style={{ fontSize: '12px' }} />
                    </a>
                    <a
                      href="https://linkedin.com/in/simalongun"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: '28px',
                        height: '28px',
                        background: '#ffffff',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#000000',
                        textDecoration: 'none',
                        border: '1px solid #EFE7DA'
                      }}
                    >
                      <FaLinkedinIn style={{ fontSize: '12px' }} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div
                  style={{
                    display: 'inline-block',
                    background: '#8E714F',
                    color: '#ffffff',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '10px',
                    fontWeight: '600',
                    marginBottom: '15px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}
                >
                  Professional Physiotherapist
                </div>

                <h1 style={{
                  color: '#5A5044',
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  lineHeight: '1.2',
                  marginBottom: '15px'
                }}>
                  <span style={{ color: '#8E714F' }}>Physiotherapy</span> Specialist in Milton Keynes
                </h1>

                <p style={{
                  color: '#636A55',
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  I am a physiotherapist specialized in orthopedics and rehabilitation with international experience gained in four different countries.
                  I currently work at a private hospital and continue my work on musculoskeletal disorders.
                </p>

                <div style={{ display: 'flex', gap: '10px', marginBottom: '0', flexWrap: 'wrap' }}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link href="/contact" style={{
                      background: 'linear-gradient(135deg, #8E714F 0%, #7A6142 100%)',
                      color: '#ffffff',
                      padding: '8px 16px',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      fontWeight: '500',
                      fontSize: '13px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      boxShadow: '0 2px 8px rgba(142, 113, 79, 0.3)',
                      transition: 'all 0.2s ease'
                    }}>
                      <FiPhone size={12} />
                      Get In Touch
                    </Link>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link href="/services" style={{
                      background: 'transparent',
                      color: '#8E714F',
                      padding: '8px 16px',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      fontWeight: '500',
                      fontSize: '13px',
                      border: '1px solid #8E714F',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'all 0.2s ease'
                    }}>
                      <FiBriefcase size={12} />
                      My Services
                    </Link>
                  </motion.div>
                </div>
              </div>

              <div className="col-lg-3">
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '12px'
                }}>
                  {[
                    { value: `${counters.years}+`, label: 'Years Experience', icon: FiClock },
                    { value: `${counters.countries}`, label: 'Countries', icon: FiGlobe },
                    { value: `${counters.patients}+`, label: 'Happy Patients', icon: FiUsers }
                  ].map((stat, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      background: '#F7F3ED',
                      padding: '10px 12px',
                      borderRadius: '8px'
                    }}>
                      <div
                        style={{
                          width: '28px',
                          height: '28px',
                          background: '#8E714F',
                          borderRadius: '6px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <motion.div
                          animate={{
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.2
                          }}
                        >
                          <stat.icon style={{ color: '#ffffff', fontSize: '12px' }} />
                        </motion.div>
                      </div>

                      <div>
                        <div style={{
                          color: '#8E714F',
                          fontSize: '1.1rem',
                          fontWeight: '700',
                          lineHeight: '1'
                        }}>
                          {stat.value}
                        </div>
                        <div style={{
                          color: '#636A55',
                          fontSize: '0.75rem',
                          fontWeight: '500'
                        }}>
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Two Column Layout - Story & Values */}
          <div className="row" style={{ marginBottom: '40px' }}>
            {/* My Story */}
            <div className="col-lg-6">
              <motion.div
                style={{
                  background: '#ffffff',
                  borderRadius: '12px',
                  padding: '30px',
                  height: '100%',
                  border: '1px solid #EFE7DA'
                }}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeIn}
              >
                <h2 style={{
                  color: '#5A5044',
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  marginBottom: '20px'
                }}>
                  My <span style={{ color: '#8E714F' }}>Story</span>
                </h2>

                <p style={{
                  color: '#636A55',
                  fontSize: '0.9rem',
                  lineHeight: '1.6',
                  marginBottom: '15px'
                }}>
                  My journey in physiotherapy began with a passion for helping people regain their freedom of movement and improve their quality of life.
                  After my undergraduate education, I specialized in orthopedics, rehabilitation and physiotherapy for special populations through experiences gained in different countries.
                </p>

                <p style={{
                  color: '#636A55',
                  fontSize: '0.9rem',
                  lineHeight: '1.6',
                  marginBottom: '15px'
                }}>
                  I currently work at Bupa Hospitals in Milton Keynes, continuing my work on the treatment of musculoskeletal disorders and healthy aging.
                  Every day, I do my best to reduce patients' pain and improve their quality of life.
                </p>

                <p style={{
                  color: '#636A55',
                  fontSize: '0.9rem',
                  lineHeight: '1.6',
                  marginBottom: 0
                }}>
                  For me, physiotherapy is not just a profession, but an opportunity to give hope to people
                  and touch their lives.
                </p>
              </motion.div>
            </div>

            {/* Core Values */}
            <div className="col-lg-6">
              <motion.div
                style={{
                  background: '#ffffff',
                  borderRadius: '12px',
                  padding: '30px',
                  height: '100%',
                  border: '1px solid #EFE7DA'
                }}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeIn}
              >
                <h2 style={{
                  color: '#5A5044',
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  marginBottom: '20px'
                }}>
                  My Values & <span style={{ color: '#8E714F' }}>Approach</span>
                </h2>

                <div style={{ display: 'grid', gap: '15px' }}>
                  {[
                    {
                      icon: FiHeart,
                      title: 'Empathy & Understanding',
                      description: 'I listen to each patient\'s story and try to understand their pain'
                    },
                    {
                      icon: FiTarget,
                      title: 'Goal-Oriented Treatment',
                      description: 'Personalized treatment plans in line with your goals'
                    },
                    {
                      icon: FiStar,
                      title: 'Quality & Excellence',
                      description: 'I focus on achieving the best results with the most up-to-date methods'
                    },
                    {
                      icon: FiTrendingUp,
                      title: 'Continuous Development',
                      description: 'I continuously improve myself to provide you with better service'
                    }
                  ].map((item, index) => (
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px'
                      }}
                    >
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          background: '#8E714F',
                          borderRadius: '6px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        <item.icon style={{ fontSize: '14px', color: '#ffffff' }} />
                      </div>

                      <div>
                        <h3 style={{
                          color: '#5A5044',
                          fontSize: '0.95rem',
                          fontWeight: '600',
                          marginBottom: '4px'
                        }}>
                          {item.title}
                        </h3>

                        <p style={{
                          color: '#636A55',
                          fontSize: '0.85rem',
                          lineHeight: '1.4',
                          margin: 0
                        }}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Professional Journey & Contact */}
          <div className="row">
            {/* Professional Journey */}
            <div className="col-lg-8">
              <motion.div
                style={{
                  background: '#ffffff',
                  borderRadius: '12px',
                  padding: '30px',
                  border: '1px solid #EFE7DA',
                  marginBottom: '20px',
                  height: '100%'
                }}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeIn}
              >
                <h2 style={{
                  color: '#5A5044',
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  marginBottom: '25px'
                }}>
                  Professional <span style={{ color: '#8E714F' }}>Journey</span>
                </h2>

                <div style={{ display: 'grid', gap: '20px' }}>
                  {[
                    {
                      year: '2025 – Present',
                      title: 'MSK Assistant & Health Advisor',
                      company: 'Private Hospital, Milton Keynes, United Kingdom',
                      description: 'I work on musculoskeletal system assessments, rehabilitation planning and lifestyle counseling. I support patients\' recovery processes in collaboration with multidisciplinary teams.'
                    },
                    {
                      year: '2020 – 2024',
                      title: 'Physiotherapist',
                      company: 'Various Clinics and Sports Centers (Turkey, Netherlands, Lithuania)',
                      description: 'I gained international experience in orthopedics, athlete health, geriatrics and neurological rehabilitation. I developed a holistic treatment perspective by observing patient care approaches in different countries.'
                    },
                    {
                      year: '🎓 2023 – 2024',
                      title: 'Master\'s Degree (MSc) – Exercise & Physical Activity for Special Populations and Healthy Ageing',
                      company: 'Middlesex University, London — Graduated with Honours',
                      description: 'I specialized in healthy aging, exercise planning and rehabilitation in special populations.'
                    },
                    {
                      year: '🎓 2018 – 2022',
                      title: 'Physiotherapy and Rehabilitation Bachelor\'s Degree (BSc Hons)',
                      company: 'Bezmialem Vakıf University, Istanbul — Graduated with Honours',
                      description: 'I studied at Kauno Kolegija, Lithuania within the scope of the Erasmus program. I gained intensive clinical practice experience in orthopedic and neurological rehabilitation.'
                    }
                  ].map((item, index) => (
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        gap: '15px',
                        paddingBottom: index < 3 ? '20px' : '0',
                        borderBottom: index < 3 ? '1px solid #EFE7DA' : 'none'
                      }}
                    >
                      <div
                        style={{
                          width: '6px',
                          height: '6px',
                          background: '#8E714F',
                          borderRadius: '50%',
                          marginTop: '8px',
                          flexShrink: 0
                        }}
                      />

                      <div style={{ flex: 1 }}>
                        <div style={{
                          fontSize: '10px',
                          color: '#8E714F',
                          fontWeight: '600',
                          marginBottom: '4px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px'
                        }}>
                          {item.year}
                        </div>

                        <h3 style={{
                          color: '#5A5044',
                          fontSize: '0.95rem',
                          fontWeight: '600',
                          marginBottom: '4px'
                        }}>
                          {item.title}
                        </h3>

                        <div style={{
                          color: '#8E714F',
                          fontSize: '0.85rem',
                          fontWeight: '500',
                          marginBottom: '6px'
                        }}>
                          {item.company}
                        </div>

                        <p style={{
                          color: '#636A55',
                          fontSize: '0.85rem',
                          lineHeight: '1.4',
                          margin: 0
                        }}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Contact Cards */}
            <div className="col-lg-4">
              <motion.div
                style={{
                  background: '#ffffff',
                  borderRadius: '12px',
                  padding: '30px',
                  border: '1px solid #EFE7DA',
                  marginBottom: '20px',
                  height: '100%'
                }}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeIn}
              >
                <h2 style={{
                  color: '#5A5044',
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  marginBottom: '20px'
                }}>
                  Contact <span style={{ color: '#8E714F' }}>Me</span>
                </h2>

                <div style={{ display: 'grid', gap: '12px' }}>
                  {[
                    { icon: FiPhone, label: 'Phone', value: '+44 7709572412', link: 'tel:+447709572412' },
                    { icon: FiMail, label: 'Email', value: 'simalongun22@gmail.com', link: 'mailto:simalongun22@gmail.com' },
                    { icon: FiMapPin, label: 'Location', value: 'Milton Keynes, UK', link: '#' },
                    { icon: FiGlobe, label: 'Experience', value: '4 Countries', link: '#' }
                  ].map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        background: '#F7F3ED',
                        padding: '12px',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <div
                        style={{
                          width: '28px',
                          height: '28px',
                          background: '#8E714F',
                          borderRadius: '6px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <item.icon style={{ fontSize: '12px', color: '#ffffff' }} />
                      </div>

                      <div>
                        <div style={{
                          fontSize: '10px',
                          color: '#636A55',
                          fontWeight: '500',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          marginBottom: '2px'
                        }}>
                          {item.label}
                        </div>

                        <div style={{
                          fontSize: '12px',
                          fontWeight: '600',
                          color: '#5A5044'
                        }}>
                          {item.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Final CTA */}
          <motion.div
            style={{
              background: '#5A5044',
              borderRadius: '12px',
              padding: '30px',
              textAlign: 'center',
              marginTop: '40px'
            }}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <h2 style={{
              color: '#ffffff',
              fontSize: '1.3rem',
              fontWeight: '600',
              marginBottom: '10px'
            }}>
              I'm Here For <span style={{ color: '#EFE7DA' }}>Your Health</span>
            </h2>

            <p style={{
              color: 'rgba(247, 243, 237, 0.8)',
              fontSize: '0.9rem',
              marginBottom: '20px'
            }}>
              Regain your health with professional physiotherapy services.
            </p>

            <div style={{
              display: 'flex',
              gap: '10px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href="/contact" style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
                  color: '#5A5044',
                  padding: '10px 20px',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '13px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                  transition: 'all 0.2s ease'
                }}>
                  <FiPhone size={12} />
                  Get In Touch
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href="/services" style={{
                  background: 'rgba(247, 243, 237, 0.1)',
                  color: '#ffffff',
                  padding: '10px 20px',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '13px',
                  border: '1px solid rgba(247, 243, 237, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.2s ease'
                }}>
                  <FiBriefcase size={12} />
                  My Services
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