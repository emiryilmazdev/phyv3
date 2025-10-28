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
                <Image src="/images/logo.png" alt="Şimal Ongun Logo" width={150} height={50} />
              </div>
              {/* Footer Logo End */}

              {/* About Footer Content Start */}
              <div className="about-footer-content">
                <p>
                  Milton Keynes'te profesyonel fizyoterapi hizmetleri ile sağlığınızı geri kazanın. 
                  Kanıta dayalı tedavi yöntemleri ve kişisel yaklaşımla hizmetinizdeyiz.
                </p>
              </div>
              {/* About Footer Content End */}

              {/* Footer Contact Details Start */}
              <div className="footer-contact-details">
                {/* Footer Contact Item Start */}
                <div className="footer-contact-item">
                  <div className="icon-box">
                    <FaPhone size={24} />
                  </div>
                  <div className="footer-contact-item-content">
                    <h3>Acil Destek</h3>
                    <p>
                      Lorem ipsum dolor
                    </p>
                  </div>
                </div>
                {/* Footer Contact Item End */}

                {/* Footer Contact Item Start */}
                <div className="footer-contact-item">
                  <div className="icon-box">
                    <FaEnvelope size={24} />
                  </div>
                  <div className="footer-contact-item-content">
                    <h3>E-posta Gönder</h3>
                    <p>
                      <a href="mailto:simalongun22@gmail.com">simalongun22@gmail.com</a>
                    </p>
                  </div>
                </div>
                {/* Footer Contact Item End */}
              </div>
              {/* Footer Contact Details End */}
            </div>
            {/* About Footer End */}
          </div>

          <div className="col-lg-6">
            {/* Footer Newsletter Box Start */}
            <div className="footer-newsletter-box">
              <h3>Bilgiler</h3>
              
              {/* Footer Info Compact Start */}
              <div className="footer-info-compact">
                <div className="row">
                  <div className="col-md-6">
                    <div className="info-item">
                      <div className="info-header">
                        <FaClock size={16} />
                        <h4>Çalışma Saatleri</h4>
                      </div>
                      <div className="info-content">
                        <p>Pzt-Cum: 09:00-18:00</p>
                        <p>Cumartesi: 09:00-15:00</p>
                        <p>Pazar: Kapalı</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-item">
                      <div className="info-header">
                        <FaMapMarkerAlt size={16} />
                        <h4>Konum</h4>
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
                <div className="social-text">
                  <p>Sosyal Medya</p>
                </div>
                <ul>
                  <li>
                    <a href="https://instagram.com/simalongun" target="_blank" rel="noopener noreferrer">
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/in/simalongun" target="_blank" rel="noopener noreferrer">
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/447709572412" target="_blank" rel="noopener noreferrer">
                      <FaWhatsapp />
                    </a>
                  </li>
                  <li>
                    <a href="mailto:simalongun22@gmail.com">
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
                  <li><Link href="/">Ana Sayfa</Link></li>
                  <li><Link href="/hakkimda">Hakkımda</Link></li>
                  <li><Link href="/hizmetler">Hizmetler</Link></li>
                  <li><Link href="/blog">Blog</Link></li>
                  <li><Link href="/iletisim">İletişim</Link></li>
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