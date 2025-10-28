'use client'

import Link from 'next/link'
import AnimatedDiv from '@/components/ui/AnimatedDiv'
import { FiActivity, FiAward, FiHeart, FiUserCheck, FiZap, FiCalendar } from 'react-icons/fi'

export default function WhatWeDoSection() {
  return (
    <div className="what-we-do bg-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {/* What We Do Content Start */}
              <div className="what-we-do-content">
                {/* Section Title Start */}
                <div className="section-title">
                  <AnimatedDiv delay={0}>
                    <h3>What We Do</h3>
                  </AnimatedDiv>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    Carefully designed <span>perfect comfort</span> for you
                  </h2>
                  <AnimatedDiv delay={0.2}>
                    <p>
                      We designed every detail of our physiotherapy clinic to enhance your comfort and provide the best care.
                      From a peaceful atmosphere to professional service.
                    </p>
                  </AnimatedDiv>
                </div>
                {/* Section Title End */}

                {/* What We Do Button Start */}
                <AnimatedDiv className="what-we-do-btn" delay={0.4}>
                  <Link href="/iletisim" className="btn-default">
                    Get In Touch
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
                    <FiActivity size={32} />
                  </div>
                  <div className="what-do-item-content">
                    <h3>Peaceful Environment</h3>
                    <p>I conduct your treatment process in a calm and peaceful atmosphere where you can feel comfortable.</p>
                  </div>
                </AnimatedDiv>
                {/* What We Do Item End */}

                {/* What We Do Item Start */}
                <AnimatedDiv className="what-we-do-item" delay={0.2}>
                  <div className="icon-box">
                    <FiAward size={32} />
                  </div>
                  <div className="what-do-item-content">
                    <h3>Expert Touch</h3>
                    <p>With my education and experience in physiotherapy, I provide you with the most suitable professional support.</p>
                  </div>
                </AnimatedDiv>
                {/* What We Do Item End */}

                {/* What We Do Item Start */}
                <AnimatedDiv className="what-we-do-item" delay={0.4}>
                  <div className="icon-box">
                    <FiHeart size={32} />
                  </div>
                  <div className="what-do-item-content">
                    <h3>Natural & Phytotherapy Compatible Products</h3>
                    <p>In my applications, I only use body-friendly, natural and phytotherapy-compatible products. I prioritize protecting and supporting your health with natural ingredients.</p>
                  </div>
                </AnimatedDiv>
                {/* What We Do Item End */}

                {/* What We Do Item Start */}
                <AnimatedDiv className="what-we-do-item" delay={0.6}>
                  <div className="icon-box">
                    <FiUserCheck size={32} />
                  </div>
                  <div className="what-do-item-content">
                    <h3>Personalized Approach</h3>
                    <p>Every individual's needs are different. I create treatment plans completely tailored to you, according to your personal goals and body structure.</p>
                  </div>
                </AnimatedDiv>
                {/* What We Do Item End */}

                {/* What We Do Item Start */}
                <AnimatedDiv className="what-we-do-item" delay={0.8}>
                  <div className="icon-box">
                    <FiZap size={32} />
                  </div>
                  <div className="what-do-item-content">
                    <h3>Hygiene and Safety</h3>
                    <p>All areas I use are regularly sterilized. I provide a safe treatment environment by maintaining high hygiene standards.</p>
                  </div>
                </AnimatedDiv>
                {/* What We Do Item End */}

                {/* What We Do Item Start */}
                <AnimatedDiv className="what-we-do-item" delay={1.0}>
                  <div className="icon-box">
                    <FiCalendar size={32} />
                  </div>
                  <div className="what-do-item-content">
                    <h3>Easy Online Appointment</h3>
                    <p>You can easily create your online appointment with just a few clicks by selecting your convenient time.</p>
                  </div>
                </AnimatedDiv>
                {/* What We Do Item End */}
              </div>
              {/* What We Do Item List End */}
            </div>
          </div>
        </div>
      </div>
  )
}