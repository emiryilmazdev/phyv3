import Link from 'next/link'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa'
import AnimatedDiv from '@/components/ui/AnimatedDiv'
import AnimatedText from '@/components/ui/AnimatedText'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

export default function HeroSection() {
  return (
    <div className="hero bg-section dark-section">
      {/* Hero Section Start */}
      <div className="hero-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              {/* Hero Content Start */}
              <div className="hero-content">
                {/* Section Title Start */}
                <div className="section-title">
                  <h3>Milton Keynes'te Uzman Fizyoterapi</h3>
                  <h1 className="text-anime-style-2" data-cursor="-opaque">
                    Hareket kabiliyetinizi geri kazanın, <span>ağrılarınızdan kurtulun</span>
                  </h1>
                  <p>
                    Şimal Ongun ile birlikte, kanıta dayalı fizyoterapi yöntemleriyle sağlığınızı geri kazanın. 
                    Kas-iskelet sistemi problemleri, spor yaralanmaları ve kronik ağrı tedavisinde uzman yaklaşım.
                  </p>
                </div>
                {/* Section Title End */}

                {/* Hero Button Start */}
                <div className="hero-btn">
                  <Link href="/iletisim" className="btn-default btn-highlighted">
                    İletişime Geç
                  </Link>
                  <Link href="/hizmetler" className="btn-default border-btn">
                    Hizmetlerimiz
                  </Link>
                </div>
                {/* Hero Button End */}
              </div>
              {/* Hero Content End */}
            </div>

            <div className="col-lg-6">
              {/* Hero Image Start */}
              <div className="hero-img">
                <figure>
                  <Image src="/images/hero-image.png" alt="Şimal Ongun Fizyoterapist" width={600} height={500} />
                </figure>

                {/* Hero Rating Box Start */}
                <div className="hero-rating-box">
                  <div className="hero-rating-header">
                    <Image src="/images/icon-google.svg" alt="Google" width={24} height={24} />
                    <p>Google Rating</p>
                  </div>
                  <div className="hero-rating-body">
                    <div className="hero-rating-star">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <div className="hero-rating-counter">
                      <p>
                        <AnimatedCounter end={4.9} duration={2} /> (30 Reviews)
                      </p>
                    </div>
                  </div>
                </div>
                {/* Hero Rating Box End */}
              </div>
              {/* Hero Image End */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}