import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCursor } from '../context/CursorContext'

const sectors = [
  {
    name: 'VC & Private Equity',
    gradient: 'from-slate-700 via-slate-800 to-charcoal',
    description: 'Digital presence for the world\'s leading investment firms',
  },
  {
    name: 'SaaS',
    gradient: 'from-violet-600 via-purple-700 to-indigo-800',
    description: 'Scalable brand and digital systems for high-growth SaaS',
  },
  {
    name: 'Energy',
    gradient: 'from-amber-500 via-orange-600 to-red-700',
    description: 'Powering the transition to sustainable energy brands',
  },
  {
    name: 'Property',
    gradient: 'from-teal-500 via-emerald-600 to-green-700',
    description: 'Premium real estate branding and marketing platforms',
  },
  {
    name: 'Food',
    gradient: 'from-rose-400 via-pink-500 to-fuchsia-600',
    description: 'Delicious brand identities for food and beverage leaders',
  },
  {
    name: 'Retail',
    gradient: 'from-cyan-500 via-blue-600 to-indigo-700',
    description: 'Omnichannel retail experiences that convert and delight',
  },
]

export default function Sectors() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const { setIsHovering } = useCursor()

  return (
    <section id="sectors" className="py-24 md:py-36 bg-white relative overflow-hidden">
      {/* Background gradient that transitions on hover */}
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            key={hoveredIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.06 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className={`absolute inset-0 bg-gradient-to-br ${sectors[hoveredIndex].gradient} pointer-events-none`}
          />
        )}
      </AnimatePresence>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-charcoal/40">
            Industries
          </span>
          <h2 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Sectors we serve
          </h2>
        </motion.div>

        {/* Sectors list */}
        <div className="divide-y divide-charcoal/10">
          {sectors.map((sector, i) => (
            <motion.div
              key={sector.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onMouseEnter={() => {
                setHoveredIndex(i)
                setIsHovering(true)
              }}
              onMouseLeave={() => {
                setHoveredIndex(null)
                setIsHovering(false)
              }}
              className="py-6 md:py-8 flex flex-col md:flex-row md:items-center justify-between gap-3 group cursor-none"
            >
              <div className="flex items-center gap-6">
                <span className="text-xs font-semibold text-charcoal/30 tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold group-hover:text-accent transition-colors duration-300">
                  {sector.name}
                </h3>
              </div>
              <p className="text-charcoal/50 text-sm md:text-base max-w-xs md:text-right ml-8 md:ml-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {sector.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
