'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.classList.remove('mobile-menu-open')
    }
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    // Prevent body scroll when mobile menu is open
    if (!mobileMenuOpen) {
      document.body.classList.add('mobile-menu-open')
    } else {
      document.body.classList.remove('mobile-menu-open')
    }
  }
  return (
    <header className="main-header bg-section">
      <div className="header-sticky">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            {/* Logo Start */}
            <Link className="navbar-brand" href="/">
              <Image src="/images/logo.png" alt="Şimal Ongun Logo" width={180} height={60} />
            </Link>
            {/* Logo End */}

            {/* Main Menu Start */}
            <div className="collapse navbar-collapse main-menu">
              <div className="nav-menu-wrapper">
                <ul className="navbar-nav mr-auto" id="menu">
                  <li className="nav-item">
                    <Link className="nav-link" href="/">Ana Sayfa</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/hakkimda">Hakkımda</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/hizmetler">Hizmetler</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/blog">Blog</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/iletisim">İletişim</Link>
                  </li>
                  <li className="nav-item highlighted-menu">
                    <Link className="nav-link" href="/iletisim">İletişime Geç</Link>
                  </li>
                </ul>
              </div>

              {/* Header Btn Start */}
              <div className="header-btn">
                <Link href="/iletisim" className="btn-default btn-highlighted">
                  İletişime Geç
                </Link>
              </div>
              {/* Header Btn End */}
            </div>
            {/* Main Menu End */}

            {/* Modern Mobile Menu Toggle */}
            <button
              className="navbar-toggle"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className={`hamburger-icon ${mobileMenuOpen ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
        </nav>

        {/* Modern Mobile Menu */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <ul className="mobile-menu-list">
            <li className="mobile-menu-item">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                Ana Sayfa
              </Link>
            </li>
            <li className="mobile-menu-item">
              <Link href="/hakkimda" onClick={() => setMobileMenuOpen(false)}>
                Hakkımda
              </Link>
            </li>
            <li className="mobile-menu-item">
              <Link href="/hizmetler" onClick={() => setMobileMenuOpen(false)}>
                Hizmetler
              </Link>
            </li>
            <li className="mobile-menu-item">
              <Link href="/blog" onClick={() => setMobileMenuOpen(false)}>
                Blog
              </Link>
            </li>
            <li className="mobile-menu-item">
              <Link href="/iletisim" onClick={() => setMobileMenuOpen(false)}>
                İletişim
              </Link>
            </li>
            <li className="mobile-menu-item mobile-menu-cta">
              <Link href="/iletisim" onClick={() => setMobileMenuOpen(false)}>
                İletişime Geç
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}