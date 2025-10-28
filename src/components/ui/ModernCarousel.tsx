'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { motion } from 'framer-motion'

interface CarouselProps {
  children: React.ReactNode[]
  autoplay?: boolean
  autoplayDelay?: number
  loop?: boolean
  className?: string
  effect?: string
  speed?: number
}

export default function ModernCarousel({
  children,
  autoplay = true,
  autoplayDelay = 5000,
  loop = true,
  className = '',
  effect = 'slide',
  speed = 800
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop },
    autoplay ? [Autoplay({ delay: autoplayDelay })] : []
  )
  
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi: any) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className={`embla ${className}`}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {children.map((child, index) => (
            <div className="embla__slide" key={index}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {child}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <div className="testimonial-btn">
        <button
          className="testimonial-button-prev"
          onClick={scrollPrev}
          disabled={prevBtnDisabled}
        />
        <button
          className="testimonial-button-next"
          onClick={scrollNext}
          disabled={nextBtnDisabled}
        />
      </div>

      <style jsx>{`
        .embla {
          position: relative;
        }
        .embla__viewport {
          overflow: hidden;
        }
        .embla__container {
          display: flex;
        }
        .embla__slide {
          flex: 0 0 100%;
          min-width: 0;
        }
      `}</style>
    </div>
  )
}