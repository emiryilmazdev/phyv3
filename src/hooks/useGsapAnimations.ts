'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, SplitText)
}

export function useGsapAnimations() {
  useEffect(() => {
    // Image Reveal Animation
    const revealContainers = document.querySelectorAll('.reveal')
    revealContainers.forEach((container) => {
      const image = container.querySelector('img')
      if (image) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            toggleActions: 'play none none none',
          },
        })
        tl.set(container, { autoAlpha: 1 })
        tl.from(container, 1, {
          xPercent: -100,
          ease: 'power2.out',
        })
        tl.from(
          image,
          1,
          {
            xPercent: 100,
            scale: 1,
            delay: -1,
            ease: 'power2.out',
          },
          '<'
        )
      }
    })

    // Text Animation Style 1
    const textStyle1 = document.querySelectorAll('.text-anime-style-1')
    textStyle1.forEach((element) => {
      const split = new SplitText(element, { type: 'chars, words' })
      gsap.from(split.words, {
        duration: 1,
        delay: 0.5,
        x: 20,
        autoAlpha: 0,
        stagger: 0.05,
        scrollTrigger: { trigger: element, start: 'top 85%' },
      })
    })

    // Text Animation Style 2
    const textStyle2 = document.querySelectorAll('.text-anime-style-2')
    textStyle2.forEach((element) => {
      const split = new SplitText(element, { type: 'chars, words' })
      gsap.from(split.chars, {
        duration: 1,
        delay: 0.1,
        x: 20,
        autoAlpha: 0,
        stagger: 0.03,
        ease: 'power2.out',
        scrollTrigger: { trigger: element, start: 'top 85%' },
      })
    })

    // Text Animation Style 3
    const textStyle3 = document.querySelectorAll('.text-anime-style-3')
    textStyle3.forEach((element: any) => {
      const split = new SplitText(element, {
        type: 'lines,words,chars',
        linesClass: 'split-line',
      })
      gsap.set(element, { perspective: 400 })
      gsap.set(split.chars, {
        opacity: 0,
        x: '50',
      })
      gsap.to(split.chars, {
        scrollTrigger: { trigger: element, start: 'top 90%' },
        x: '0',
        y: '0',
        rotateX: '0',
        opacity: 1,
        duration: 1,
        ease: 'back.out',
        stagger: 0.02,
      })
    })

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])
}
