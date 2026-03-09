import React from 'react'
import { motion } from 'framer-motion'
import Marquee from './Marquee'
import TextReveal from './TextReveal'
import { useCursor } from '../context/CursorContext'
import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const { setIsHovering } = useCursor()
  const { t } = useLanguage()

  const headlineLines = [
    <span key="1" className="block">{t('hero.line1')}</span>,
    <span key="2" className="block">{t('hero.line2')}</span>,
    <span key="3" className="block">{t('hero.line3')}</span>,
    <span key="4" className="block">{t('hero.line4')}</span>,
  ]

  function scrollToCaseStudies() {
    const el = document.querySelector('#case-studies')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Marquee background */}
      <div className="absolute inset-0 flex flex-col justify-center pointer-events-none">
        <Marquee />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-16 lg:px-24 pt-32 pb-24">
        <motion.p
          className="text-sm font-medium text-charcoal/50 uppercase tracking-widest mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {t('hero.subtitle')}
        </motion.p>

        <TextReveal
          lines={headlineLines}
          className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] text-charcoal max-w-5xl mb-12"
        />

        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          {/* Play Showreel button — scrolls to case studies */}
          <motion.button
            className="relative w-32 h-32 rounded-full border-2 border-charcoal flex items-center justify-center text-xs font-bold uppercase tracking-widest text-charcoal hover:bg-accent hover:border-accent transition-colors"
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={scrollToCaseStudies}
          >
            <span className="text-center leading-tight whitespace-pre-line">{t('hero.playShowreel')}</span>
          </motion.button>

          <div className="text-sm text-charcoal/50 max-w-sm">
            {t('hero.tagline')}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <span className="text-xs text-charcoal/40 uppercase tracking-widest">{t('hero.scroll')}</span>
        <motion.div
          className="w-px h-12 bg-charcoal/20"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top' }}
        />
      </motion.div>
    </section>
  )
}
