import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

export default function MobileMenu({ onClose, links, languages }) {
  const { language, setLanguage, t } = useLanguage()

  function handleLinkClick(href) {
    onClose()
    setTimeout(() => {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  }

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-charcoal flex flex-col p-8"
      initial={{ opacity: 0, y: '-100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '-100%' }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex justify-between items-center mb-16">
        <span className="text-xl font-bold text-white">JEROM●</span>
        <button onClick={onClose} className="text-white text-3xl leading-none">&times;</button>
      </div>

      <nav className="flex flex-col gap-6">
        {links.map((link, i) => (
          <motion.a
            key={link.href}
            href={link.href}
            className="text-4xl font-bold text-white hover:text-accent transition-colors"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + i * 0.05 }}
            onClick={(e) => { e.preventDefault(); handleLinkClick(link.href) }}
          >
            {link.label}
          </motion.a>
        ))}
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <a
          href="#start-project"
          onClick={(e) => { e.preventDefault(); handleLinkClick('#start-project') }}
          className="bg-accent text-charcoal font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-full text-center hover:bg-white transition-colors"
        >
          {t('nav.startProject')}
        </a>
        <div className="flex gap-4">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              className={`text-sm font-medium transition-colors ${
                language === lang ? 'text-accent' : 'text-white/50 hover:text-accent'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
