'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { List, X, Phone } from '@phosphor-icons/react'

const navLinks = [
  { label: 'Treatments', href: '#treatments' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const PHONE = '07494 729 630'
const TEL = '+447494729630'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 32)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-ink-950/92 backdrop-blur-md border-b border-gold-900/40'
            : 'bg-ink-950/70 backdrop-blur-sm'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-16 md:h-20 gap-4">
          <a href="#" className="flex items-center gap-3 min-w-0" aria-label="Mobile Massage Therapist Cheshire">
            <Logo />
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[12px] tracking-[0.2em] uppercase text-ink-200 hover:text-gold-400 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${TEL}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-gold-600/60 text-gold-300 text-[12px] font-semibold tracking-[0.15em] uppercase rounded-sm hover:bg-gold-600 hover:text-ink-950 hover:border-gold-600 active:scale-[0.97] transition-all"
              onClick={() => {
                if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
                  window.gtag('event', 'tel_link_click', { event_category: 'navbar' })
                }
              }}
            >
              <Phone weight="fill" className="w-4 h-4" />
              {PHONE}
            </a>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden w-11 h-11 flex items-center justify-center text-gold-400 rounded-sm border border-gold-700/60 bg-ink-900"
            aria-label="Open menu"
            aria-expanded={isOpen}
          >
            <List weight="bold" className="w-5 h-5" />
          </button>
        </nav>
      </header>

      {/* Mobile Menu — SOLID ink-950 background, never transparent */}
      <div
        className={`md:hidden fixed inset-0 z-[60] transition-opacity duration-400 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="absolute inset-0 bg-ink-950" />
        <div className="absolute inset-0 radial-spot pointer-events-none" />

        <div className="relative h-full flex flex-col bg-ink-950">
          <div className="flex items-center justify-between gap-4 h-16 px-5 border-b border-gold-900/40 bg-ink-950">
            <Logo />
            <button
              onClick={() => setIsOpen(false)}
              className="w-11 h-11 flex items-center justify-center text-gold-400 rounded-sm border border-gold-700/60 bg-ink-900 flex-shrink-0"
              aria-label="Close menu"
            >
              <X weight="bold" className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center px-6 sm:px-8 -mt-8 bg-ink-950">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center justify-between py-5 border-b border-gold-900/30"
                  style={{
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? 'translateX(0)' : 'translateX(-16px)',
                    transition: `opacity 500ms ease ${i * 70 + 100}ms, transform 500ms cubic-bezier(0.16, 1, 0.3, 1) ${i * 70 + 100}ms`,
                  }}
                >
                  <span className="font-heading italic text-3xl sm:text-4xl text-ink-50 group-hover:text-gold-300 transition-colors">
                    {link.label}
                  </span>
                  <span className="font-body text-[11px] tracking-[0.3em] uppercase text-gold-600 group-hover:text-gold-400 transition-colors">
                    0{i + 1}
                  </span>
                </a>
              ))}
            </nav>

            <div
              className="mt-10"
              style={{
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'translateY(0)' : 'translateY(12px)',
                transition: `opacity 500ms ease 420ms, transform 500ms cubic-bezier(0.16, 1, 0.3, 1) 420ms`,
              }}
            >
              <a
                href={`tel:${TEL}`}
                onClick={() => {
                  setIsOpen(false)
                  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
                    window.gtag('event', 'tel_link_click', { event_category: 'mobile_menu' })
                  }
                }}
                className="flex items-center justify-center gap-3 w-full py-4 bg-gold-600 text-ink-950 font-semibold tracking-[0.1em] uppercase text-sm rounded-sm active:scale-[0.98] transition-transform"
              >
                <Phone weight="fill" className="w-5 h-5" />
                Call {PHONE}
              </a>
              <p className="text-center text-[11px] tracking-[0.3em] uppercase text-gold-700 mt-4">
                Crewe &middot; Nantwich &middot; Cheshire
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function Logo() {
  return (
    <div className="flex items-center gap-3 min-w-0">
      <Image
        src="/logo-mark.png"
        alt="Mobile Massage Therapist Cheshire"
        width={390}
        height={135}
        priority
        className="h-10 md:h-12 w-auto flex-shrink-0"
      />
      <div className="hidden sm:flex flex-col leading-none min-w-0">
        <span className="font-heading text-[16px] md:text-[18px] text-ink-50 tracking-tight truncate">
          Mobile Massage
        </span>
        <span className="font-body text-[10px] tracking-[0.35em] uppercase text-gold-500 mt-1 truncate">
          Cheshire
        </span>
      </div>
    </div>
  )
}
