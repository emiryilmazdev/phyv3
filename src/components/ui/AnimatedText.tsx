'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedTextProps {
    children: ReactNode
    className?: string
    delay?: number
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'
}

export default function AnimatedText({
    children,
    className = '',
    delay = 0,
    as: Component = 'div'
}: AnimatedTextProps) {
    // Split text into characters for animation
    const text = typeof children === 'string' ? children : ''
    const chars = text.split('')

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: {
                staggerChildren: 0.03,
                delayChildren: delay,
                ease: [0.25, 0.46, 0.45, 0.94]
            },
        }),
    }

    const child = {
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            x: 20,
        },
    }

    // Always render with simple fade animation for complex content
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay }}
        >
            {children}
        </motion.div>
    )
}
