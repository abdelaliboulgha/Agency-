import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MagneticButton from './MagneticButton'
import MobileMenu from './MobileMenu'
import { useCursor } from '../context/CursorContext'

const navLinks = [
  { label: 'What we do', href: '#capabilities' },
  { label: 'Sectors', href: '#sectors' },
  { label: 'Case studies', href: '#portfolio' },
  { label: 'Who we are', href: '#about' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact', href: '#footer' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { setIsHovering } = useCursor()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'backdrop-blur-xl bg-white/10 border-b border-white/10 shadow-sm'
            : 'backdrop-blur-md bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className="text-xl md:text-2xl font-bold tracking-tight text-charcoal hover:text-accent transition-colors"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            JEROM●
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="text-sm font-medium text-charcoal/70 hover:text-charcoal transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex gap-2 mr-2">
              {['UK', 'FR', 'DE'].map((lang) => (
                <button
                  key={lang}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="text-xs font-medium text-charcoal/50 hover:text-charcoal transition-colors px-1"
                >
                  {lang}
                </button>
              ))}
            </div>
            <MagneticButton
              href="#footer"
              className="bg-charcoal text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-accent hover:text-charcoal transition-colors duration-300"
            >
              Start a project
            </MagneticButton>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 45 }}
                  className="w-6 h-px bg-charcoal origin-center"
                  style={{ translateY: 4 }}
                />
              ) : (
                <>
                  <motion.span key="line1" className="block w-6 h-px bg-charcoal" />
                  <motion.span key="line2" className="block w-4 h-px bg-charcoal" />
                </>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
