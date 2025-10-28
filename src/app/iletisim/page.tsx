'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { useState } from 'react'
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi'
import { IoLogoLinkedin, IoLogoInstagram } from 'react-icons/io'
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    // Form validasyonu
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitMessage('❌ Lütfen tüm gerekli alanları doldurun.')
      setIsSubmitting(false)
      return
    }

    // E-posta formatı kontrolü
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setSubmitMessage('❌ Lütfen geçerli bir e-posta adresi girin.')
      setIsSubmitting(false)
      return
    }

    try {
      // Web3Forms API ile gerçek form gönderimi
      const formDataToSend = new FormData()
      formDataToSend.append("access_key", "a109fdde-8d94-49f1-8d3c-79bf044c9678")
      formDataToSend.append("name", `${formData.firstName.trim()} ${formData.lastName.trim()}`)
      formDataToSend.append("email", formData.email.trim())
      formDataToSend.append("phone", formData.phone.trim())
      formDataToSend.append("message", formData.message.trim())
      formDataToSend.append("subject", "Şimal Ongun Fizyoterapi - Yeni İletişim Formu")
      formDataToSend.append("from_name", "Şimal Ongun Website")

      console.log('Gönderilen veriler:', {
        name: `${formData.firstName.trim()} ${formData.lastName.trim()}`,
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        message: formData.message.trim()
      })

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      })

      const data = await response.json()
      console.log('API Yanıtı:', data)

      if (data.success) {
        setSubmitMessage('✅ Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.')
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          message: ''
        })
      } else {
        console.error('API Hatası:', data)
        setSubmitMessage(`❌ Hata: ${data.message || 'Mesaj gönderilirken bir hata oluştu.'}`)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitMessage('❌ Ağ hatası: Lütfen internet bağlantınızı kontrol edin ve tekrar deneyin.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Header />

      {/* Page Header Start */}
      <div className="page-header bg-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="text-anime-style-2" data-cursor="-opaque">
                  İletişim <span>Bilgileri</span>
                </h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Ana Sayfa</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      İletişim
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* Page Contact Us Start */}
      <div className="page-contact-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/* Contact Us Content Start */}
              <div className="contact-us-content">
                {/* Section Title Start */}
                <div className="section-title">
                  <h3 className="wow fadeInUp">İletişim</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    Bizimle <span>iletişime geçin</span>
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    Sağlığınızı geri kazanma yolculuğunuzda size destek olmak için buradayız.
                    Sorularınız için bize ulaşın, danışmanlık alın veya randevu planlayın.
                  </p>
                </div>
                {/* Section Title End */}

                {/* Contact Info Box Start */}
                <div className="contact-info-box wow fadeInUp" data-wow-delay="0.4s">
                  {/* Contact Info List Start */}
                  <div className="contact-info-list">
                    {/* Contact Info Item Start */}
                    <div className="contact-info-item">
                      <div className="icon-box">
                        <FiPhone size={24} />
                      </div>
                      <div className="contact-item-content">
                        <h3>Telefon</h3>
                        <p>
                          <a href="tel:+447123456789">+44 7123 456 789</a>
                        </p>
                      </div>
                    </div>
                    {/* Contact Info Item End */}

                    {/* Contact Info Item Start */}
                    <div className="contact-info-item">
                      <div className="icon-box">
                        <FiMail size={24} />
                      </div>
                      <div className="contact-item-content">
                        <h3>E-posta</h3>
                        <p>
                          <a href="mailto:info@simalongun.com">info@simalongun.com</a>
                        </p>
                      </div>
                    </div>
                    {/* Contact Info Item End */}

                    {/* Contact Info Item Start */}
                    <div className="contact-info-item">
                      <div className="icon-box">
                        <FiMapPin size={24} />
                      </div>
                      <div className="contact-item-content">
                        <h3>Konum</h3>
                        <p>Milton Keynes, İngiltere</p>
                      </div>
                    </div>
                    {/* Contact Info Item End */}

                    {/* Contact Info Item Start */}
                    <div className="contact-info-item">
                      <div className="icon-box">
                        <FiClock size={24} />
                      </div>
                      <div className="contact-item-content">
                        <h3>Çalışma Saatleri</h3>
                        <p>Pazartesi - Cuma: 09:00 - 18:00</p>
                        <p>Cumartesi: 09:00 - 14:00</p>
                      </div>
                    </div>
                    {/* Contact Info Item End */}
                  </div>
                  {/* Contact Info List End */}

                  {/* Contact Social List Start */}
                  <div className="contact-social-links">
                    <h3>Sosyal medyada takip edin:</h3>
                    <ul>
                      <li>
                        <a href="https://instagram.com/simalongun" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                          <IoLogoInstagram size={20} color="#ffffff" />
                        </a>
                      </li>
                      <li>
                        <a href="https://linkedin.com/in/simalongun" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                          <IoLogoLinkedin size={20} color="#ffffff" />
                        </a>
                      </li>
                      <li>
                        <a href="https://wa.me/447709572412" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                          <FaWhatsapp size={20} color="#ffffff" />
                        </a>
                      </li>
                      <li>
                        <a href="mailto:simalongun22@gmail.com" aria-label="E-posta">
                          <FaEnvelope size={20} color="#ffffff" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* Contact Social List End */}
                </div>
                {/* Contact Info Box End */}
              </div>
              {/* Contact Us Content End */}
            </div>

            <div className="col-lg-6">
              {/* Contact Us Form Start */}
              <div className="contact-us-form">
                {/* Section Title Start */}
                <div className="section-title">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    Bize mesaj gönderin
                  </h2>
                </div>
                {/* Section Title End */}

                {/* Contact Form Start */}
                <div className="contact-form">
                  <form onSubmit={handleSubmit} className="wow fadeInUp" data-wow-delay="0.2s">
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

                      <div className="form-group col-md-6 mb-4">
                        <input
                          type="tel"
                          name="phone"
                          className="form-control"
                          placeholder="Telefon Numarası"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="form-group col-md-6 mb-4">
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

                      <div className="form-group col-md-12 mb-5">
                        <textarea
                          name="message"
                          className="form-control"
                          rows={6}
                          placeholder="Mesajınızı buraya yazın... (Hangi hizmetimizle ilgili bilgi almak istiyorsunuz, şikayetleriniz neler, randevu talebiniz var mı?)"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="col-md-12">
                        <button
                          type="submit"
                          className="btn-default"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? '📤 Gönderiliyor...' : '📨 Mesaj Gönder'}
                        </button>
                        {submitMessage && (
                          <div className={`contact-form-message mt-3 ${submitMessage.includes('✅') ? 'success' : 'error'}`}>
                            {submitMessage}
                          </div>
                        )}
                      </div>
                    </div>
                  </form>
                </div>
                {/* Contact Form End */}
              </div>
              {/* Contact Us Form End */}
            </div>

            <div className="col-lg-12">
              {/* Google Map IFrame Start */}
              <div className="google-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39312.29685706952!2d-0.7918450872802734!3d52.04172484368896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876550d5c6b5c3f%3A0x4b9c6c0f8b9c6c0f!2sMilton%20Keynes%2C%20UK!5e0!3m2!1sen!2str!4v1703158537552!5m2!1sen!2str"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Milton Keynes Haritası"
                />
              </div>
              {/* Google Map IFrame End */}
            </div>
          </div>
        </div>
      </div>
      {/* Page Contact Us End */}

      <Footer />
    </>
  )
}