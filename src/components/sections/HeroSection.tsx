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
                  <h3>Expert Physiotherapy in Milton Keynes</h3>
                  <h1 className="text-anime-style-2" data-cursor="-opaque">
                    Regain your mobility, <span>get rid of your pain</span>
                  </h1>
                  <p>
                    Together with Simal Ongun, regain your health with evidence-based physiotherapy methods. 
                    Expert approach in musculoskeletal problems, sports injuries and chronic pain treatment.
                  </p>
                </div>
                {/* Section Title End */}

                {/* Hero Button Start */}
                <div className="hero-btn">
                  <Link href="/contact" className="btn-default btn-highlighted">
                    Get In Touch
                  </Link>
                  <Link href="/services" className="btn-default border-btn">
                    Our Services
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
                  <Image src="/images/hero-image.png" alt="Simal Ongun Physiotherapist" width={600} height={500} />
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