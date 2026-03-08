import React from 'react'
import { motion } from 'framer-motion'
import MagneticButton from './MagneticButton'

export default function ExpertiseCard({ number, title, description }) {
  return (
    <motion.div
      className="border border-black/10 rounded-2xl p-10 md:p-14 bg-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="text-7xl md:text-8xl font-bold text-black/5">{number}</span>
      <h3 className="text-2xl md:text-3xl font-bold text-charcoal mt-4 mb-4">{title}</h3>
      <p className="text-charcoal/60 text-base leading-relaxed mb-8">{description}</p>
      <MagneticButton className="text-sm font-bold uppercase tracking-widest border border-charcoal px-6 py-3 rounded-full hover:bg-accent hover:border-accent transition-colors">
        Learn More
      </MagneticButton>
    </motion.div>
  )
}
