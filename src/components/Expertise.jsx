import React from 'react'
import { motion } from 'framer-motion'
import ExpertiseCard from './ExpertiseCard'
import { useLanguage } from '../context/LanguageContext'

export default function Expertise() {
  const { t } = useLanguage()

  const cards = [
    {
      number: '01',
      title: t('expertise.card1.title'),
      description: t('expertise.card1.desc'),
    },
    {
      number: '02',
      title: t('expertise.card2.title'),
      description: t('expertise.card2.desc'),
    },
    {
      number: '03',
      title: t('expertise.card3.title'),
      description: t('expertise.card3.desc'),
    },
  ]

  return (
    <section id="who-we-are" className="py-24 md:py-40 px-6 md:px-16 lg:px-24 border-t border-black/10">
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
              {t('expertise.label')}
            </motion.p>
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {t('expertise.title')}
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
