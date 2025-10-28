'use client'

import Link from 'next/link'
import AnimatedDiv from '@/components/ui/AnimatedDiv'
import { FiActivity, FiAward, FiHeart, FiUserCheck, FiZap, FiCalendar } from 'react-icons/fi'

export default function WhatWeDoSection() {
  return (
    <>
      <style jsx>{`
        .icon-box svg {
          color: white !important;
          stroke: white !important;
          fill: white !important;
        }
        .icon-box {
          color: white !important;
        }
      `}</style>
      <div className="what-we-do bg-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {/* What We Do Content Start */}
              <div className="what-we-do-content">
                {/* Section Title Start */}
                <div className="section-title">
                  <AnimatedDiv delay={0}>
                    <h3>Neler Yapıyoruz</h3>
                  </AnimatedDiv>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    Sizin için özenle tasarlanmış <span>mükemmel konfor</span>
                  </h2>
                  <AnimatedDiv delay={0.2}>
                    <p>
                      Fizyoterapi kliniğimizin her detayını rahatlığınızı artırmak ve en iyi bakımı sunmak için tasarladık.
                      Huzur verici atmosferden profesyonel hizmete kadar.
                    </p>
                  </AnimatedDiv>
                </div>
                {/* Section Title End */}

                {/* What We Do Button Start */}
                <AnimatedDiv className="what-we-do-btn" delay={0.4}>
                  <Link href="/iletisim" className="btn-default">
                    İletişime Geç
                  </Link>
                </AnimatedDiv>
                {/* What We Do Button End */}
              </div>
              {/* What We Do Content End */}
            </div>

            <div className="col-lg-6">
              {/* What We Do Item List Start */}
              <div className="what-we-do-item-list">
                {/* What We Do Item Start */}
                <AnimatedDiv className="what-we-do-item" delay={0}>
                  <div className="icon-box">
                    <FiActivity size={32} style={{ color: 'white' }} />
                  </div>
                  <div className="what-do-item-content">
                    <h3>Huzurlu Ortam</h3>
                    <p>En yüksek hijyen standartlarını karşılayan temiz, sterilize edilmiş alanlar.</p>
                  </div>
                </AnimatedDiv>
                {/* What We Do Item End */}

                {/* What We Do Item Start */}
                <AnimatedDiv className="what-we-do-item" delay={0.2}>
                  <div className="icon-box">
                    <FiAward size={32} style={{ color: 'white' }} />
                  </div>
                  <div className="what-do-item-content">
                    <h3>Uzman Terapistler</h3>
                    <p>Alanında deneyimli, sertifikalı fizyoterapistlerle profesyonel hizmet.</p>
                  </div>
                </AnimatedDiv>
                {/* What We Do Item End */}

                {/* What We Do Item Start */}
                <AnimatedDiv className="what-we-do-item" delay={0.4}>
                  <div className="icon-box">
                    <FiHeart size={32} style={{ color: 'white' }} />
                  </div>
                  <div className="what-do-item-content">
                    <h3>Doğal Ürünler</h3>
                    <p>Tedavilerimizde doğal ve güvenli ürünler kullanarak sağlığınızı koruyoruz.</p>
                  </div>
                </AnimatedDiv>
                {/* What We Do Item End */}

                {/* What We Do Item Start */}
                <AnimatedDiv className="what-we-do-item" delay={0.6}>
                  <div className="icon-box">
                    <FiUserCheck size={32} style={{ color: 'white' }} />
                  </div>
                  <div className="what-do-item-content">
                    <h3>Kişisel Tedavi</h3>
                    <p>Her hastaya özel, bireysel ihtiyaçlara göre tasarlanmış tedavi programları.</p>
                  </div>
                </AnimatedDiv>
                {/* What We Do Item End */}

                {/* What We Do Item Start */}
                <AnimatedDiv className="what-we-do-item" delay={0.8}>
                  <div className="icon-box">
                    <FiZap size={32} style={{ color: 'white' }} />
                  </div>
                  <div className="what-do-item-content">
                    <h3>Hijyenik Tesisler</h3>
                    <p>En yüksek hijyen standartlarını karşılayan temiz, güvenli tedavi ortamları.</p>
                  </div>
                </AnimatedDiv>
                {/* What We Do Item End */}

                {/* What We Do Item Start */}
                <AnimatedDiv className="what-we-do-item" delay={1.0}>
                  <div className="icon-box">
                    <FiCalendar size={32} style={{ color: 'white' }} />
                  </div>
                  <div className="what-do-item-content">
                    <h3>Kolay Online Randevu</h3>
                    <p>Pratik online randevu sistemi ile kolayca randevunuzu planlayın.</p>
                  </div>
                </AnimatedDiv>
                {/* What We Do Item End */}
              </div>
              {/* What We Do Item List End */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}