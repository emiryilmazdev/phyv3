'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

export default function LenisScrolling() {
    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        })

        // Use requestAnimationFrame to continuously update the scroll
        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        // Handle anchor links
        const handleAnchorClick = (e: Event) => {
            const target = e.target as HTMLAnchorElement

            if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
                e.preventDefault()

                const targetId = target.getAttribute('href')?.substring(1)
                const targetElement = document.getElementById(targetId || '')

                if (targetElement) {
                    lenis.scrollTo(targetElement, {
                        offset: -100, // Offset for fixed header
                        duration: 1.5,
                    })
                }
            }
        }

        // Add event listeners
        document.addEventListener('click', handleAnchorClick)

        // Cleanup
        return () => {
            document.removeEventListener('click', handleAnchorClick)
            lenis.destroy()
        }
    }, [])

    return null
}