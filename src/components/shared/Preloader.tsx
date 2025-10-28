'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false)
      }, 300)
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    // Fallback - 3 saniye sonra kaldır
    const fallbackTimer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => {
      window.removeEventListener('load', handleLoad)
      clearTimeout(fallbackTimer)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div 
      className="preloader" 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: isLoading ? 1 : 0,
        transition: 'opacity 0.6s ease',
      }}
    >
      <div className="loading-container">
        <div className="loading"></div>
        <div id="loading-icon">
          <Image src="/images/loader.svg" alt="Yükleniyor" width={66} height={66} />
        </div>
      </div>
    </div>
  )
}