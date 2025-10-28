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

    // Form validation
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitMessage('❌ Please fill in all required fields.')
      setIsSubmitting(false)
      return
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setSubmitMessage('❌ Please enter a valid email address.')
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
      formDataToSend.append("subject", "Simal Ongun Physiotherapy - New Contact Form")
      formDataToSend.append("from_name", "Simal Ongun Website")

      console.log('Sent data:', {
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
      console.log('API Response:', data)

      if (data.success) {
        setSubmitMessage('✅ Your message has been sent successfully! We will get back to you as soon as possible.')
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          message: ''
        })
      } else {
        console.error('API Error:', data)
        setSubmitMessage(`❌ Error: ${data.message || 'An error occurred while sending the message.'}`)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitMessage('❌ Network error: Please check your internet connection and try again.')
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
                  Contact <span>Information</span>
                </h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Contact
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
                  <h3 className="wow fadeInUp">Contact</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    Get in <span>touch with us</span>
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    We are here to support you on your journey to regain your health.
                    Contact us for your questions, get consultation or schedule an appointment.
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
                        <h3>Phone</h3>
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
                        <h3>Email</h3>
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
                        <h3>Location</h3>
                        <p>Milton Keynes, United Kingdom</p>
                      </div>
                    </div>
                    {/* Contact Info Item End */}

                    {/* Contact Info Item Start */}
                    <div className="contact-info-item">
                      <div className="icon-box">
                        <FiClock size={24} />
                      </div>
                      <div className="contact-item-content">
                        <h3>Working Hours</h3>
                        <p>Monday - Friday: 09:00 - 18:00</p>
                        <p>Saturday: 09:00 - 14:00</p>
                      </div>
                    </div>
                    {/* Contact Info Item End */}
                  </div>
                  {/* Contact Info List End */}

                  {/* Contact Social List Start */}
                  <div className="contact-social-links">
                    <h3>Follow us on social media:</h3>
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
                    Send us a message
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
                          placeholder="First Name"
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
                          placeholder="Last Name"
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
                          placeholder="Phone Number"
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
                          placeholder="Email Address"
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
                          placeholder="Write your message here... (Which service would you like information about, what are your complaints, do you have an appointment request?)"
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
                          {isSubmitting ? '📤 Sending...' : '📨 Send Message'}
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
                  title="Milton Keynes Map"
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