import React from 'react'
import { motion } from 'framer-motion'
import ExpertiseCard from './ExpertiseCard'

const cards = [
  {
    number: '01',
    title: 'Digital First Branding',
    description: 'We build brands that are born digital, designed for modern audiences, and built to scale across every touchpoint and platform.',
  },
  {
    number: '02',
    title: 'Web & Digital Products',
    description: 'From complex web applications to polished marketing sites, we craft digital products that perform beautifully and convert powerfully.',
  },
  {
    number: '03',
    title: 'Immersive Digital Experiences',
    description: 'Interactive storytelling, motion-rich interfaces, and data-driven personalization that captivates and converts.',
  },
]

export default function Expertise() {
  return (
    <section className="py-24 md:py-40 px-6 md:px-16 lg:px-24 border-t border-black/10">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Sticky headline */}
        <div className="lg:w-2/5">
          <div className="lg:sticky lg:top-32">
            <motion.p
              className="text-xs font-bold uppercase tracking-[0.3em] text-charcoal/40 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Our Expertise
            </motion.p>
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              Digital expertise that moves brands forward.
            </motion.h2>
          </div>
        </div>

        {/* Scrolling cards */}
        <div className="lg:w-3/5 flex flex-col gap-8">
          {cards.map((card) => (
            <ExpertiseCard key={card.number} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
