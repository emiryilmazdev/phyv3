import Link from 'next/link'
import AnimatedDiv from '@/components/ui/AnimatedDiv'
import { FiCheck, FiX, FiClock } from 'react-icons/fi'

export default function PricingSection() {
  return (
    <div className="our-pricing bg-section dark-section">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            {/* Section Title Start */}
            <div className="section-title section-title-center">
              <AnimatedDiv delay={0}>
                <h3>Fiyat Planları</h3>
              </AnimatedDiv>
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                Her ihtiyaca uygun şeffaf ve <span>esnek paketler</span>
              </h2>
            </div>
            {/* Section Title End */}
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            {/* Pricing Box Start */}
            <AnimatedDiv className="pricing-box" delay={0}>
              {/* Pricing Header Start */}
              <div className="pricing-header">
                <h3>Temel Plan</h3>
              </div>
              {/* Pricing Header End */}

              {/* Pricing Content Start */}
              <div className="pricing-content">
                <h2>£45 <span>Seans</span></h2>
                <p>Fizyoterapi hizmetlerimizin temel paketinde kaliteli bakım ve profesyonel yaklaşım.</p>
              </div>
              {/* Pricing Content End */}

              {/* Pricing Button Start */}
              <div className="pricing-btn">
                <Link href="/iletisim" className="btn-default">
                  Planı Seç
                </Link>
              </div>
              {/* Pricing Button End */}

              {/* Pricing List Start */}
              <div className="pricing-list">
                <ul>
                  <li>45 dakika bireysel seans</li>
                  <li>Temel değerlendirme</li>
                  <li>Egzersiz önerileri</li>
                </ul>
              </div>
              {/* Pricing List End */}
            </AnimatedDiv>
            {/* Pricing Box End */}
          </div>

          <div className="col-lg-4 col-md-6">
            {/* Pricing Box Start */}
            <AnimatedDiv className="pricing-box highlighted-box" delay={0.2}>
              {/* Pricing Header Start */}
              <div className="pricing-header">
                <h3>Standart Plan</h3>
              </div>
              {/* Pricing Header End */}

              {/* Pricing Content Start */}
              <div className="pricing-content">
                <h2>£65 <span>Seans</span></h2>
                <p>En popüler paketimiz ile kapsamlı fizyoterapi hizmeti ve kişisel takip.</p>
              </div>
              {/* Pricing Content End */}

              {/* Pricing Button Start */}
              <div className="pricing-btn">
                <Link href="/iletisim" className="btn-default">
                  Planı Seç
                </Link>
              </div>
              {/* Pricing Button End */}

              {/* Pricing List Start */}
              <div className="pricing-list">
                <ul>
                  <li>60 dakika bireysel seans</li>
                  <li>Detaylı değerlendirme</li>
                  <li>Kişisel egzersiz programı</li>
                </ul>
              </div>
              {/* Pricing List End */}
            </AnimatedDiv>
            {/* Pricing Box End */}
          </div>

          <div className="col-lg-4 col-md-6">
            {/* Pricing Box Start */}
            <AnimatedDiv className="pricing-box" delay={0.4}>
              {/* Pricing Header Start */}
              <div className="pricing-header">
                <h3>Premium Plan</h3>
              </div>
              {/* Pricing Header End */}

              {/* Pricing Content Start */}
              <div className="pricing-content">
                <h2>£85 <span>Seans</span></h2>
                <p>En kapsamlı hizmet paketi ile premium fizyoterapi deneyimi ve sürekli destek.</p>
              </div>
              {/* Pricing Content End */}

              {/* Pricing Button Start */}
              <div className="pricing-btn">
                <Link href="/iletisim" className="btn-default">
                  Planı Seç
                </Link>
              </div>
              {/* Pricing Button End */}

              {/* Pricing List Start */}
              <div className="pricing-list">
                <ul>
                  <li>75 dakika bireysel seans</li>
                  <li>Kapsamlı değerlendirme</li>
                  <li>Özel egzersiz programı</li>
                </ul>
              </div>
              {/* Pricing List End */}
            </AnimatedDiv>
            {/* Pricing Box End */}
          </div>

          <div className="col-lg-12">
            {/* Pricing Benefit List Start */}
            <AnimatedDiv className="pricing-benefit-list" delay={0.6}>
              <ul>
                <li>
                  <FiCheck size={24} />
                  Ücretsiz ilk değerlendirme
                </li>
                <li>
                  <FiX size={24} />
                  Gizli ücret yok
                </li>
                <li>
                  <FiClock size={24} />
                  İstediğiniz zaman iptal edebilirsiniz
                </li>
              </ul>
            </AnimatedDiv>
            {/* Pricing Benefit List End */}
          </div>
        </div>
      </div>
    </div>
  )
}