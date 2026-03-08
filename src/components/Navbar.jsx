import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MagneticButton from './MagneticButton'
import MobileMenu from './MobileMenu'
import { useCursor } from '../context/CursorContext'

const navLinks = ['What we do', 'Sectors', 'Case studies', 'Who we are', 'Insights', 'Contact']
const languages = ['UK', 'FR', 'DE']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLang, setActiveLang] = useState('UK')
  const { setIsHovering } = useCursor()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className="mx-4 md:mx-8 rounded-2xl backdrop-blur-md bg-white/80 border border-black/10 px-6 py-3 flex items-center justify-between"
        >
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-bold tracking-tight text-charcoal hover:text-accent transition-colors"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            JEROM●
          </a>

          {/* Nav Links - Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm font-medium text-charcoal/70 hover:text-accent transition-colors relative group"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Language toggles - desktop only */}
            <div className="hidden lg:flex items-center gap-2">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setActiveLang(lang)}
                  className={`text-xs font-medium px-2 py-1 rounded transition-colors ${
                    activeLang === lang
                      ? 'text-accent'
                      : 'text-charcoal/50 hover:text-charcoal'
                  }`}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <MagneticButton
              className="hidden md:block bg-charcoal text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-accent hover:text-charcoal transition-colors"
            >
              Start a project
            </MagneticButton>

            {/* Hamburger - mobile */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen(true)}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <span className="w-6 h-0.5 bg-charcoal block" />
              <span className="w-4 h-0.5 bg-charcoal block" />
              <span className="w-6 h-0.5 bg-charcoal block" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} links={navLinks} languages={languages} />}
      </AnimatePresence>
    </>
  )
}
