import React from 'react'
import { motion } from 'framer-motion'
import { useCursor } from '../context/CursorContext'

const pillars = [
  {
    title: 'Brand Power',
    items: ['Brand Strategy & Positioning', 'Go-To-Market Strategy', 'Content Strategy', 'Visual Identity', 'Brand Naming'],
  },
  {
    title: 'Digital Impact',
    items: ['Digital Strategy', 'Websites & Platforms', 'Web App Development', 'Software Development', 'CMS', 'SEO Systems'],
  },
  {
    title: 'Marketing Performance',
    items: ['Campaign Strategy', 'CRM Implementation', 'B2B Lead Gen', 'RevOps', 'Inbound Marketing', 'ABM'],
  },
]

export default function Capabilities() {
  const { setIsHovering } = useCursor()

  return (
    <section className="py-24 md:py-40 px-6 md:px-16 lg:px-24 border-t border-black/10">
      <motion.p
        className="text-xs font-bold uppercase tracking-[0.3em] text-charcoal/40 mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Our Capabilities
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-2xl font-bold mb-8 text-charcoal">{pillar.title}</h3>
            <ul className="space-y-0 divide-y divide-black/10">
              {pillar.items.map((item) => (
                <li
                  key={item}
                  className="py-4 text-charcoal/60 text-sm font-medium hover:text-accent cursor-default transition-colors group"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <span className="relative">
                    {item}
                    <span className="absolute -bottom-0 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
