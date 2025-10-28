import Link from 'next/link'
import Image from 'next/image'
import { FaInstagram, FaLinkedinIn, FaWhatsapp, FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="main-footer bg-section dark-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            {/* About Footer Start */}
            <div className="about-footer">
              {/* Footer Logo Start */}
              <div className="footer-logo">
                <Image src="/images/logo.png" alt="Simal Ongun Logo" width={150} height={50} />
              </div>
              {/* Footer Logo End */}

              {/* About Footer Content Start */}
              <div className="about-footer-content">
                <p>
                  Regain your health with professional physiotherapy services in Milton Keynes. 
                  We are at your service with evidence-based treatment methods and personal approach.
                </p>
              </div>
              {/* About Footer Content End */}

              {/* Footer Contact Details Start */}
              <div className="footer-contact-details-grid">
                <div className="row">
                  <div className="col-md-6">
                    {/* Footer Contact Item Start */}
                    <div className="footer-contact-item">
                      <div className="icon-box">
                        <FaPhone size={24} />
                      </div>
                      <div className="footer-contact-item-content">
                        <h3>Emergency Support</h3>
                        <p>
                          <a href="tel:+447709572412">+44 7709 572412</a>
                        </p>
                      </div>
                    </div>
                    {/* Footer Contact Item End */}
                  </div>
                  
                  <div className="col-md-6">
                    {/* Footer Contact Item Start */}
                    <div className="footer-contact-item">
                      <div className="icon-box">
                        <FaEnvelope size={24} />
                      </div>
                      <div className="footer-contact-item-content">
                        <h3>Send Email</h3>
                        <p>
                          <a href="mailto:simalongun22@gmail.com">simalongun22@gmail.com</a>
                        </p>
                      </div>
                    </div>
                    {/* Footer Contact Item End */}
                  </div>
                </div>
              </div>
              {/* Footer Contact Details End */}
            </div>
            {/* About Footer End */}
          </div>

          <div className="col-lg-6">
            {/* Footer Newsletter Box Start */}
            <div className="footer-newsletter-box">
              <h3>Information</h3>
              
              {/* Footer Info Compact Start */}
              <div className="footer-info-compact">
                <div className="row">
                  <div className="col-md-6">
                    <div className="info-item">
                      <div className="info-header">
                        <FaClock size={16} />
                        <h4>Working Hours</h4>
                      </div>
                      <div className="info-content">
                        <p>Mon-Fri: 09:00-18:00</p>
                        <p>Saturday: 09:00-15:00</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-item">
                      <div className="info-header">
                        <FaMapMarkerAlt size={16} />
                        <h4>Location</h4>
                      </div>
                      <div className="info-content">
                        <p>Milton Keynes</p>
                        <p>Buckinghamshire</p>
                        <p>United Kingdom</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Footer Info Compact End */}

              {/* Footer Social Link Start */}
              <div className="footer-social-links">
                <h3>Social Media</h3>
                <ul>
                  <li>
                    <a href="https://instagram.com/simalongun" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/in/simalongun" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/447709572412" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                      <FaWhatsapp />
                    </a>
                  </li>
                  <li>
                    <a href="mailto:simalongun22@gmail.com" aria-label="E-posta">
                      <FaEnvelope />
                    </a>
                  </li>
                </ul>
              </div>
              {/* Footer Social Link End */}
            </div>
            {/* Footer Newsletter Box End */}
          </div>

          <div className="col-lg-12">
            {/* Footer Copyright Start */}
            <div className="footer-copyright">
              {/* Footer Links Start */}
              <div className="footer-links">
                <ul>
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/about">About</Link></li>
                  <li><Link href="/services">Services</Link></li>
                  <li><Link href="/blog">Blog</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                </ul>
              </div>
              {/* Footer Links End */}

              {/* Footer Copyright Text Start */}
              <div className="footer-copyright-text">
                <p>Copyright © 2025 All Rights Reserved.</p>
              </div>
              {/* Footer Copyright Text End */}
            </div>
            {/* Footer Copyright End */}
          </div>
        </div>
      </div>
    </footer>
  )
}