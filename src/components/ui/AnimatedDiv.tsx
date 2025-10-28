'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedDivProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
  duration?: number
  style?: React.CSSProperties
  onMouseEnter?: (e: any) => void
  onMouseLeave?: (e: any) => void
}

export default function AnimatedDiv({ 
  children, 
  className = '', 
  delay = 0, 
  direction = 'up',
  duration = 0.6,
  style,
  onMouseEnter,
  onMouseLeave
}: AnimatedDivProps) {
  const getInitialState = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 50 }
      case 'down':
        return { opacity: 0, y: -50 }
      case 'left':
        return { opacity: 0, x: -50 }
      case 'right':
        return { opacity: 0, x: 50 }
      case 'fade':
        return { opacity: 0 }
      default:
        return { opacity: 0, y: 50 }
    }
  }

  const getAnimateState = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { opacity: 1, y: 0 }
      case 'left':
      case 'right':
        return { opacity: 1, x: 0 }
      case 'fade':
        return { opacity: 1 }
      default:
        return { opacity: 1, y: 0 }
    }
  }

  return (
    <motion.div
      className={className}
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      initial={getInitialState()}
      whileInView={getAnimateState()}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ 
        duration, 
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  )
}