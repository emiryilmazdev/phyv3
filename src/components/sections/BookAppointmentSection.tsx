'use client'

import { useState } from 'react'
import Image from 'next/image'
import AnimatedDiv from '@/components/ui/AnimatedDiv'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

export default function BookAppointmentSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    date: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic here
  }

  return (
    <div className="book-appointment">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            {/* Section Title Start */}
            <div className="section-title section-title-center">
              <AnimatedDiv delay={0}>
                <h3>İletişime Geç</h3>
              </AnimatedDiv>
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                Fizyoterapi hizmetlerimiz için <span>iletişime geçin</span>
              </h2>
            </div>
            {/* Section Title End */}
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            {/* Appointment Image Start */}
            <div className="appointment-image">
              <figure className="image-anime reveal" style={{ overflow: 'hidden', borderRadius: '20px' }}>
                <img
                  src="/images/appointment-image.jpg"
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </figure>

              {/* Appointment Info List Start */}
              <div className="appointment-timing-box">
                <h3>Çalışma Saatleri:</h3>
                <ul>
                  <li>Pazartesi - Cuma ( 09:00 - 21:00 )</li>
                  <li>Cumartesi ( 09:00 - 14:00 )</li>
                  <li>Pazar ( Kapalı )</li>
                </ul>
              </div>
              {/* Appointment Info List End */}
            </div>
            {/* Appointment Image End */}
          </div>

          <div className="col-lg-6">
            {/* Book Appointment Form Start */}
            <AnimatedDiv className="appointment-form" delay={0.2}>
              <form onSubmit={handleSubmit} id="appointmentForm">
                <div className="row">
                  <div className="form-group col-md-6 mb-4">
                    <input
                      type="text"
                      name="firstName"
                      className="form-control"
                      placeholder="Ad"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group col-md-6 mb-4">
                    <input
                      type="text"
                      name="lastName"
                      className="form-control"
                      placeholder="Soyad"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group col-md-12 mb-4">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="E-posta Adresi"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group col-md-12 mb-4">
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      placeholder="Telefon Numarası"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group col-md-6 mb-4">
                    <select
                      name="service"
                      className="form-control form-select"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="" disabled>Hizmet Seçin</option>
                      <option value="physiotherapy_rehabilitation">Fizyoterapi & Rehabilitasyon</option>
                      <option value="sports_services">Sporcu Hizmetleri</option>
                      <option value="womens_health_pilates">Kadın Sağlığı & Pilates</option>
                      <option value="home_online_services">Evde & Online Hizmetler</option>
                    </select>
                  </div>

                  <div className="form-group col-md-6 mb-5">
                    <input
                      type="date"
                      name="date"
                      className="form-control"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <button type="submit" className="btn-default">
                      <span>Mesaj Gönder</span>
                    </button>
                  </div>
                </div>
              </form>
            </AnimatedDiv>
            {/* Book Appointment Form End */}
          </div>

          <div className="col-lg-12">
            {/* Benefit Counter List Start */}
            <div className="benefit-counter-list">
              {/* Benefit Counter Item Start */}
              <div className="benefit-counter-item">
                <div className="icon-box">
                  <Image src="/images/icon-benefit-counter-1.svg" alt="Icon" width={50} height={50} />
                </div>
                <div className="benefit-counter-content">
                  <h2><AnimatedCounter end={5} suffix="+" /></h2>
                  <p>Yıl Deneyim</p>
                </div>
              </div>
              {/* Benefit Counter Item End */}

              {/* Benefit Counter Item Start */}
              <div className="benefit-counter-item">
                <div className="icon-box">
                  <Image src="/images/icon-benefit-counter-2.svg" alt="Icon" width={50} height={50} />
                </div>
                <div className="benefit-counter-content">
                  <h2><AnimatedCounter end={300} suffix="+" /></h2>
                  <p>Mutlu Hasta</p>
                </div>
              </div>
              {/* Benefit Counter Item End */}

              {/* Benefit Counter Item Start */}
              <div className="benefit-counter-item">
                <div className="icon-box">
                  <Image src="/images/icon-benefit-counter-3.svg" alt="Icon" width={50} height={50} />
                </div>
                <div className="benefit-counter-content">
                  <h2><AnimatedCounter end={100} suffix="%" /></h2>
                  <p>Hasta Memnuniyeti</p>
                </div>
              </div>
              {/* Benefit Counter Item End */}

              {/* Benefit Counter Item Start */}
              <div className="benefit-counter-item">
                <div className="icon-box">
                  <Image src="/images/icon-benefit-counter-4.svg" alt="Icon" width={50} height={50} />
                </div>
                <div className="benefit-counter-content">
                  <h2><AnimatedCounter end={1} /></h2>
                  <p>Uzman Terapist</p>
                </div>
              </div>
              {/* Benefit Counter Item End */}
            </div>
            {/* Benefit Counter List End */}
          </div>
        </div>
      </div>
    </div>
  )
}