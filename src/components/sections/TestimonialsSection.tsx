'use client'

import Image from 'next/image'
import { FaStar } from 'react-icons/fa'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { AiOutlineLike, AiOutlineShareAlt } from 'react-icons/ai'
import ModernCarousel from '@/components/ui/ModernCarousel'
import AnimatedDiv from '@/components/ui/AnimatedDiv'

export default function TestimonialsSection() {
  return (
    <>
      <style jsx>{`
        .exact-google-review {
          min-height: 240px !important;
          display: flex !important;
          flex-direction: column !important;
          justify-content: space-between !important;
        }
        
        .exact-review-content {
          flex: 1 !important;
          display: flex !important;
          align-items: center !important;
        }
        
        .exact-review-content p {
          margin: 0 !important;
          line-height: 1.5 !important;
        }
        
        .testimonial-item {
          height: 240px !important;
          padding: 18px !important;
          box-sizing: border-box !important;
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) !important;
          transform: translateX(0) !important;
        }
        
        .testimonial-slider {
          overflow: hidden !important;
          position: relative !important;
        }
        
        .testimonial-slider .swiper-slide {
          opacity: 0.7 !important;
          transform: scale(0.95) !important;
          transition: all 0.8s ease !important;
        }
        
        .testimonial-slider .swiper-slide-active {
          opacity: 1 !important;
          transform: scale(1) !important;
        }
        
        .testimonial-slider .swiper-slide-next,
        .testimonial-slider .swiper-slide-prev {
          opacity: 0.5 !important;
          transform: scale(0.9) !important;
        }
        
        .exact-google-review {
          background: rgba(255, 255, 255, 0.9) !important;
          border-radius: 15px !important;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1) !important;
          transition: all 0.5s ease !important;
        }
        
        .exact-google-review:hover {
          transform: translateY(-5px) !important;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15) !important;
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .swiper-slide-active .exact-google-review {
          animation: slideIn 0.8s ease-out !important;
        }
      `}</style>
      <div className="our-testimonials bg-section dark-section">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-6">
            {/* Section Title Start */}
            <div className="section-title">
              <AnimatedDiv delay={0}>
                <h3>Google Yorumları</h3>
              </AnimatedDiv>
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                Hastalarımızın <span>Google'daki</span> gerçek deneyimleri
              </h2>
            </div>
            {/* Section Title End */}
          </div>

          <div className="col-lg-6">
            {/* Satisfy Client Box Start */}
            <AnimatedDiv className="satisfy-client-box" delay={0.2}>
              {/* Satisfy Client Images Start */}
              <div className="satisfy-client-images">
                <div className="satisfy-client-image">
                  <figure className="image-anime">
                    <Image src="/images/satisfy-client-img-1.jpg" alt="Client" width={80} height={80} />
                  </figure>
                </div>
                <div className="satisfy-client-image">
                  <figure className="image-anime">
                    <Image src="/images/satisfy-client-img-2.jpg" alt="Client" width={80} height={80} />
                  </figure>
                </div>
                <div className="satisfy-client-image">
                  <figure className="image-anime">
                    <Image src="/images/satisfy-client-img-3.jpg" alt="Client" width={80} height={80} />
                  </figure>
                </div>
                <div className="satisfy-client-image">
                  <figure className="image-anime">
                    <Image src="/images/satisfy-client-img-4.jpg" alt="Client" width={80} height={80} />
                  </figure>
                </div>
                <div className="satisfy-client-image">
                  <figure className="image-anime">
                    <Image src="/images/satisfy-client-img-5.jpg" alt="Client" width={80} height={80} />
                  </figure>
                </div>
              </div>
              {/* Satisfy Client Images End */}

              {/* Google Rating Content Start */}
              <div className="goolge-rating-content">
                <div className="icon-rating">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p>4.9 (30+ Google Yorumu)</p>
              </div>
              {/* Google Rating Content End */}
            </AnimatedDiv>
            {/* Satisfy Client Box End */}
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-5">
            {/* Our Testimonial Image Start */}
            <div className="testimonial-image">
              <figure className="image-anime reveal">
                <Image src="/images/testimonial-image.jpg" alt="Testimonial" width={600} height={800} />
              </figure>

              {/* Google Rating Box Start */}
              <div className="goolge-rating-box">
                <div className="icon-box">
                  <Image src="/images/icon-google.svg" alt="Google" width={48} height={48} />
                </div>

                {/* Google Rating Content Start */}
                <div className="goolge-rating-content">
                  <div className="icon-rating">
                    <p>4.9</p>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p>Google Yorumları</p>
                </div>
                {/* Google Rating Content End */}
              </div>
              {/* Google Rating Box End */}
            </div>
            {/* Our Testimonial Image End */}
          </div>

          <div className="col-lg-7">
            {/* EXACT Google Reviews Slider Start */}
            <ModernCarousel 
              className="testimonial-slider" 
              autoplay={true} 
              autoplayDelay={4000}
              loop={true}
              effect="slide"
              speed={800}
            >
              {/* EXACT Google Review 1 */}
              <div className="testimonial-item exact-google-review">
                {/* Header with profile and menu */}
                <div className="exact-google-header">
                  <div className="exact-profile-section">
                    <div className="exact-avatar-container">
                      <div className="exact-avatar">
                        <Image src="/images/author-1.jpg" alt="Songül Gül" width={40} height={40} />
                      </div>
                      <div className="exact-google-badge">
                        <Image src="/images/icon-google.svg" alt="Google" width={16} height={16} />
                      </div>
                    </div>
                    <div className="exact-user-info">
                      <h3 className="exact-username">Songül Gül</h3>
                      <p className="exact-review-count">3 yorum</p>
                    </div>
                  </div>
                  <div className="exact-menu-dots">
                    <BiDotsVerticalRounded size={20} />
                  </div>
                </div>

                {/* Rating and Time - ALL 5 STARS */}
                <div className="exact-rating-section">
                  <div className="exact-stars">
                    <FaStar className="exact-star-filled" />
                    <FaStar className="exact-star-filled" />
                    <FaStar className="exact-star-filled" />
                    <FaStar className="exact-star-filled" />
                    <FaStar className="exact-star-filled" />
                  </div>
                  <span className="exact-time">bir hafta önce</span>
                  <span className="exact-new-badge">YENİ</span>
                </div>

                {/* Review Content */}
                <div className="exact-review-content">
                  <p>
                    Şimal Hanım ile çalışmak gerçekten harika bir deneyimdi. Kalça ameliyatım
                    sonrası yürümekte zorlanıyordum. Onun profesyonel yaklaşımı ve sabırlı
                    tedavi süreci sayesinde sadece 8 haftada eski formuma kavuştum. Hem
                    fiziksel hem de mental olarak kendimi çok daha iyi hissediyorum.
                  </p>
                </div>

                {/* Actions */}
                <div className="exact-actions">
                  <button className="exact-action-btn">
                    <AiOutlineLike size={16} />
                  </button>
                  <button className="exact-action-btn">
                    <AiOutlineShareAlt size={16} />
                  </button>
                </div>
              </div>

              {/* EXACT Google Review 2 */}
              <div className="testimonial-item exact-google-review">
                <div className="exact-google-header">
                  <div className="exact-profile-section">
                    <div className="exact-avatar-container">
                      <div className="exact-avatar">
                        <Image src="/images/author-2.jpg" alt="Ayşe Demir" width={40} height={40} />
                      </div>
                      <div className="exact-google-badge">
                        <Image src="/images/icon-google.svg" alt="Google" width={16} height={16} />
                      </div>
                    </div>
                    <div className="exact-user-info">
                      <h3 className="exact-username">Ayşe Demir</h3>
                      <p className="exact-review-count">5 yorum</p>
                    </div>
                  </div>
                  <div className="exact-menu-dots">
                    <BiDotsVerticalRounded size={20} />
                  </div>
                </div>

                <div className="exact-rating-section">
                  <div className="exact-stars">
                    <FaStar className="exact-star-filled" />
                    <FaStar className="exact-star-filled" />
                    <FaStar className="exact-star-filled" />
                    <FaStar className="exact-star-filled" />
                    <FaStar className="exact-star-filled" />
                  </div>
                  <span className="exact-time">2 hafta önce</span>
                </div>

                <div className="exact-review-content">
                  <p>
                    Doğum sonrası pilates seansları hayat kurtardı! Şimal Hanım'ın uzman
                    yaklaşımı sayesinde core kaslarım güçlendi ve postür problemlerim
                    düzeldi. Diastasis recti sorunu tamamen iyileşti. Hem fiziksel hem de
                    ruhsal olarak kendimi çok daha güçlü hissediyorum.
                  </p>
                </div>

                <div className="exact-actions">
                  <button className="exact-action-btn">
                    <AiOutlineLike size={16} />
                  </button>
                  <button className="exact-action-btn">
                    <AiOutlineShareAlt size={16} />
                  </button>
                </div>
              </div>

              {/* EXACT Google Review 3 */}
              <div className="testimonial-item exact-google-review">
                <div className="exact-google-header">
                  <div className="exact-profile-section">
                    <div className="exact-avatar-container">
                      <div className="exact-avatar">
                        <Image src="/images/author-3.jpg" alt="Can Yılmaz" width={40} height={40} />
                      </div>
                      <div className="exact-google-badge">
                        <Image src="/images/icon-google.svg" alt="Google" width={16} height={16} />
                      </div>
                    </div>
                    <div className="exact-user-info">
                      <h3 className="exact-username">Can Yılmaz</h3>
                      <p className="exact-review-count">2 yorum</p>
                    </div>
                  </div>
                  <div className="exact-menu-dots">
                    <BiDotsVerticalRounded size={20} />
                  </div>
                </div>

                <div className="exact-rating-section">
                  <div className="exact-stars">
                    <FaStar className="exact-star-filled" />
                    <FaStar className="exact-star-filled" />
                    <FaStar className="exact-star-filled" />
                    <FaStar className="exact-star-filled" />
                    <FaStar className="exact-star-filled" />
                  </div>
                  <span className="exact-time">1 ay önce</span>
                </div>

                <div className="exact-review-content">
                  <p>
                    Futbol yaralanması sonrası sahaya dönüş sürecim Şimal Hanım sayesinde çok
                    hızlı oldu. Spor-spesifik egzersizler ve dry needling tedavisi ile kas
                    gerginliklerim tamamen geçti. Performansım eskisinden bile daha iyi.
                  </p>
                </div>

                <div className="exact-actions">
                  <button className="exact-action-btn">
                    <AiOutlineLike size={16} />
                  </button>
                  <button className="exact-action-btn">
                    <AiOutlineShareAlt size={16} />
                  </button>
                </div>
              </div>
            </ModernCarousel>
            {/* Google Reviews Slider End */}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}