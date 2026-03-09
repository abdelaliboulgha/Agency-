import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import MagneticButton from './MagneticButton'
import { useLanguage } from '../context/LanguageContext'

export default function ExpertiseCard({ number, title, description }) {
  const { t } = useLanguage()
  const ref = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  function handleMouseMove(e) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const rotateY = ((e.clientX - cx) / (rect.width / 2)) * 5
    const rotateX = -((e.clientY - cy) / (rect.height / 2)) * 5
    setTilt({ x: rotateX, y: rotateY })
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={ref}
      className="border border-black/10 rounded-2xl p-10 md:p-14 bg-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX: tilt.x, rotateY: tilt.y }}
      style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
    >
      <span className="text-7xl md:text-8xl font-bold text-black/5">{number}</span>
      <h3 className="text-2xl md:text-3xl font-bold text-charcoal mt-4 mb-4">{title}</h3>
      <p className="text-charcoal/60 text-base leading-relaxed mb-8">{description}</p>
      <MagneticButton
        className="text-sm font-bold uppercase tracking-widest border border-charcoal px-6 py-3 rounded-full hover:bg-accent hover:border-accent transition-colors"
        onClick={() => {
          const el = document.querySelector('#what-we-do')
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        {t('expertise.learnMore')}
      </MagneticButton>
    </motion.div>
  )
}
