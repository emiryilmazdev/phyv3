'use client'

import React, { useState, useEffect } from 'react'
import { FaWhatsapp, FaTimes } from 'react-icons/fa'

interface WhatsAppWidgetProps {
    phoneNumber?: string
    message?: string
    position?: 'bottom-right' | 'bottom-left'
}

const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({
    phoneNumber = '+447123456789', // UK telefon numarası formatı
    message = 'Hello! I would like to get information about physiotherapy services.',
    position = 'bottom-right'
}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Sayfa yüklendikten 2 saniye sonra widget'ı göster
        const timer = setTimeout(() => {
            setIsVisible(true)
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    // Widget dışına tıklandığında kapat
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Element
            if (isOpen && !target.closest('.whatsapp-widget')) {
                setIsOpen(false)
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isOpen])

    const handleWhatsAppClick = () => {
        const encodedMessage = encodeURIComponent(message)
        const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`
        window.open(whatsappUrl, '_blank')
    }

    if (!isVisible) return null

    return (
        <>
            {/* Overlay - Chat açıkken arka planı karart */}
            {isOpen && (
                <div
                    className="whatsapp-overlay"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* WhatsApp Floating Button */}
            <div
                className={`whatsapp-widget ${position} ${isOpen ? 'expanded' : ''}`}
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: position === 'bottom-right' ? '20px' : 'auto',
                    left: position === 'bottom-left' ? '20px' : 'auto',
                    zIndex: 1000,
                    transition: 'all 0.3s ease-in-out'
                }}
            >
                {/* Expanded Chat Box */}
                {isOpen && (
                    <div className="whatsapp-chat-box">
                        <div className="whatsapp-header">
                            <div className="whatsapp-profile">
                                <div className="whatsapp-avatar">
                                    <img
                                        src="/images/simbo.avif"
                                        alt="Simal Ongun - Fizyoterapist"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement
                                            target.src = "/images/simbo.png"
                                        }}
                                    />
                                    <div className="online-indicator"></div>
                                </div>
                                <div className="whatsapp-info">
                                    <h4>Simal Ongun</h4>
                                    <p>Physiotherapist & Rehabilitation Specialist</p>
                                    <span className="online-status">Online - Usually replies within a few minutes</span>
                                </div>
                            </div>
                            <button
                                className="close-btn"
                                onClick={() => setIsOpen(false)}
                                aria-label="Close"
                            >
                                <FaTimes />
                            </button>
                        </div>

                        <div className="whatsapp-body">
                            <div className="chat-message">
                                <p>Hello! 👋 I'm Simal Ongun</p>
                                <p>I provide physiotherapy and rehabilitation services in Milton Keynes. How can I help you?</p>
                                <span className="message-time">Just now</span>
                            </div>

                            <div className="quick-actions">
                                <button
                                    className="action-btn whatsapp-btn"
                                    onClick={handleWhatsAppClick}
                                >
                                    <FaWhatsapp />
                                    Message via WhatsApp
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Main WhatsApp Button - Sadece chat kapalıyken göster */}
                {!isOpen && (
                    <>
                        <button
                            className="whatsapp-main-btn"
                            onClick={() => setIsOpen(true)}
                            aria-label="Contact via WhatsApp"
                        >
                            <FaWhatsapp />
                            <div className="pulse-ring"></div>
                        </button>

                        {/* Notification Badge */}
                        <div className="notification-badge">
                            <span>1</span>
                        </div>
                    </>
                )}
            </div>

            {/* Styles */}
            <style jsx>{`
        .whatsapp-widget {
          font-family: var(--default-font, 'Plus Jakarta Sans', sans-serif);
        }

        .whatsapp-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.3);
          z-index: 999;
          backdrop-filter: blur(2px);
          -webkit-backdrop-filter: blur(2px);
          animation: fadeIn 0.2s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .whatsapp-chat-box {
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
          width: 320px;
          margin-bottom: 15px;
          overflow: hidden;
          transform: translateY(20px);
          opacity: 0;
          animation: slideUp 0.3s ease-out forwards;
        }

        @keyframes slideUp {
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .whatsapp-header {
          background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
          padding: 16px 20px;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          position: relative;
        }

        .whatsapp-profile {
          display: flex;
          align-items: center;
          gap: 12px;
          flex: 1;
        }

        .whatsapp-avatar {
          position: relative;
          display: inline-block;
          margin-left: 0;
          z-index: 1;
        }

        .whatsapp-avatar figure {
          display: block;
          width: 62px;
          height: 62px;
          border: 1px solid var(--secondary-color, #F7F3ED);
          border-radius: 50%;
          margin: 0;
        }

        .whatsapp-avatar img {
          width: 62px;
          height: 62px;
          border-radius: 50%;
          border: 1px solid var(--secondary-color, #F7F3ED);
          object-fit: cover;
          object-position: center center;
          aspect-ratio: 1 / 1;
          transition: all 0.3s ease;
        }

        .online-indicator {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 18px;
          height: 18px;
          background: #4CAF50;
          border: 3px solid #ffffff;
          border-radius: 50%;
          z-index: 1;
        }

        .whatsapp-info h4 {
          color: #ffffff;
          font-size: 17px;
          font-weight: 700;
          margin: 0 0 4px 0;
          line-height: 1.2;
        }

        .whatsapp-info p {
          color: rgba(255, 255, 255, 0.95);
          font-size: 13px;
          margin: 0 0 6px 0;
          line-height: 1.3;
        }

        .online-status {
          color: rgba(255, 255, 255, 0.85);
          font-size: 11px;
          display: flex;
          align-items: center;
          gap: 6px;
          line-height: 1.2;
        }

        .online-status::before {
          content: '';
          width: 8px;
          height: 8px;
          background: #4CAF50;
          border-radius: 50%;
          display: inline-block;
        }

        .close-btn {
          background: rgba(255, 255, 255, 0.15);
          border: none;
          color: #ffffff;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .close-btn:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: scale(1.05);
        }

        .whatsapp-body {
          padding: 20px;
        }

        .chat-message {
          background: #F0F2F5;
          border-radius: 12px 12px 12px 4px;
          padding: 16px;
          margin-bottom: 20px;
          position: relative;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }

        .chat-message::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: -8px;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 0 8px 8px 0;
          border-color: transparent #F0F2F5 transparent transparent;
        }

        .chat-message p {
          color: #1f2937;
          font-size: 14px;
          line-height: 1.5;
          margin: 0 0 10px 0;
          font-weight: 400;
        }

        .chat-message p:last-of-type {
          margin-bottom: 8px;
        }

        .message-time {
          color: #6b7280;
          font-size: 11px;
          display: block;
          text-align: right;
          margin-top: 4px;
          font-weight: 400;
        }

        .quick-actions {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .action-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 20px;
          border: none;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .whatsapp-btn {
          background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
          color: #ffffff;
          box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
        }

        .whatsapp-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
        }

        .whatsapp-main-btn {
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
          border: none;
          border-radius: 50%;
          color: #ffffff;
          font-size: 26px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          z-index: 2;
        }

        .whatsapp-main-btn:hover {
          transform: scale(1.08) translateY(-2px);
          box-shadow: 0 12px 35px rgba(37, 211, 102, 0.5);
        }

        .whatsapp-main-btn:active {
          transform: scale(1.02);
        }

        .pulse-ring {
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          border: 2px solid #25D366;
          border-radius: 50%;
          animation: pulse 2s infinite;
          z-index: -1;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }

        .notification-badge {
          position: absolute;
          top: -5px;
          right: -5px;
          background: #FF4444;
          color: #ffffff;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 600;
          border: 2px solid #ffffff;
          animation: bounce 2s infinite;
          z-index: 10;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-5px);
          }
          60% {
            transform: translateY(-3px);
          }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .whatsapp-chat-box {
            width: 300px;
          }
          
          .whatsapp-main-btn {
            width: 58px;
            height: 58px;
            font-size: 24px;
          }

          .whatsapp-header {
            padding: 14px 16px;
          }

          .whatsapp-info h4 {
            font-size: 16px;
          }

          .whatsapp-info p {
            font-size: 12px;
          }
        }

        @media (max-width: 480px) {
          .whatsapp-widget.bottom-right {
            right: 16px;
            bottom: 16px;
          }
          
          .whatsapp-chat-box {
            width: calc(100vw - 50px);
            max-width: 320px;
          }

          .whatsapp-main-btn {
            width: 56px;
            height: 56px;
            font-size: 22px;
          }

          .whatsapp-body {
            padding: 16px;
          }

          .action-btn {
            padding: 12px 16px;
            font-size: 13px;
          }

          .whatsapp-profile {
            gap: 10px;
          }

          .whatsapp-avatar img {
            width: 50px;
            height: 50px;
            object-position: center center;
            aspect-ratio: 1 / 1;
          }

          .whatsapp-avatar figure {
            width: 50px;
            height: 50px;
          }

          .online-indicator {
            width: 14px;
            height: 14px;
            border: 2px solid #ffffff;
          }
        }

        @media (max-width: 360px) {
          .whatsapp-chat-box {
            width: calc(100vw - 32px);
          }

          .whatsapp-widget.bottom-right {
            right: 12px;
            bottom: 12px;
          }
        }
      `}</style>
        </>
    )
}

export default WhatsAppWidget