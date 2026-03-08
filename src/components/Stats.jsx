import React, { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useCountUp } from '../hooks/useCountUp'

function StatItem({ end, suffix = '', label }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { count, startCounting } = useCountUp(end, 2000)

  useEffect(() => {
    if (isInView) startCounting()
  }, [isInView, startCounting])

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-6xl md:text-8xl font-bold text-charcoal mb-2">
        {count}{suffix}
      </div>
      <div className="text-charcoal/50 text-sm font-medium uppercase tracking-widest">{label}</div>
    </motion.div>
  )
}

export default function Stats() {
  return (
    <section className="py-24 md:py-40 px-6 md:px-16 lg:px-24 bg-white border-t border-black/10">
      <motion.p
        className="text-xs font-bold uppercase tracking-[0.3em] text-charcoal/40 mb-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Studio
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 max-w-4xl mx-auto">
        <StatItem end={24} label="Awwward Awards" />
        <StatItem end={20} label="Years of Experience" />
        <StatItem end={400} suffix="+" label="Projects Delivered" />
      </div>
    </section>
  )
}
