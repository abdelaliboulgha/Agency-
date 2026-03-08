import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const sectors = [
  { name: 'VC & Private Equity', gradient: 'from-violet-600 to-indigo-800' },
  { name: 'SaaS', gradient: 'from-sky-500 to-cyan-700' },
  { name: 'Energy', gradient: 'from-amber-500 to-yellow-700' },
  { name: 'Property', gradient: 'from-stone-500 to-neutral-700' },
  { name: 'Food', gradient: 'from-green-500 to-emerald-700' },
  { name: 'Retail', gradient: 'from-rose-500 to-red-700' },
]

export default function Sectors() {
  const [hovered, setHovered] = useState(null)

  return (
    <section className="py-24 md:py-40 px-6 md:px-16 lg:px-24 border-t border-black/10 relative overflow-hidden">
      {/* Background image reveal */}
      <AnimatePresence>
        {hovered !== null && (
          <motion.div
            key={hovered}
            className={`absolute inset-0 bg-gradient-to-br ${sectors[hovered].gradient} -z-10`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.08 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>

      <motion.p
        className="text-xs font-bold uppercase tracking-[0.3em] text-charcoal/40 mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Sectors
      </motion.p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {sectors.map((sector, i) => (
          <motion.div
            key={sector.name}
            className={`relative p-8 md:p-10 rounded-2xl border border-black/10 cursor-default transition-all duration-300 ${
              hovered === i ? 'border-charcoal' : ''
            }`}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <span className="text-lg md:text-2xl font-bold text-charcoal">{sector.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
