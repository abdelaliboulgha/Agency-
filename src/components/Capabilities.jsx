import React from 'react'
import { motion } from 'framer-motion'
import { useCursor } from '../context/CursorContext'
import { useLanguage } from '../context/LanguageContext'

export default function Capabilities() {
  const { setIsHovering } = useCursor()
  const { t } = useLanguage()

  const pillars = [
    {
      title: t('capabilities.brandPower'),
      items: [
        t('capabilities.brandStrategy'),
        t('capabilities.goToMarket'),
        t('capabilities.contentStrategy'),
        t('capabilities.visualIdentity'),
        t('capabilities.brandNaming'),
      ],
    },
    {
      title: t('capabilities.digitalImpact'),
      items: [
        t('capabilities.digitalStrategy'),
        t('capabilities.websites'),
        t('capabilities.webApp'),
        t('capabilities.software'),
        t('capabilities.cms'),
        t('capabilities.seo'),
      ],
    },
    {
      title: t('capabilities.marketingPerf'),
      items: [
        t('capabilities.campaign'),
        t('capabilities.crm'),
        t('capabilities.b2b'),
        t('capabilities.revops'),
        t('capabilities.inbound'),
        t('capabilities.abm'),
      ],
    },
  ]

  return (
    <section id="what-we-do" className="py-24 md:py-40 px-6 md:px-16 lg:px-24 border-t border-black/10">
      <motion.p
        className="text-xs font-bold uppercase tracking-[0.3em] text-charcoal/40 mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {t('capabilities.label')}
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
