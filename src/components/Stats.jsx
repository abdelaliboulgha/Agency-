import { motion } from 'framer-motion'
import { useCountUp } from '../hooks/useCountUp'

function StatItem({ end, suffix = '', label }) {
  const { count, ref } = useCountUp(end, 2000)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
      className="flex flex-col"
    >
      <span className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none">
        {count}{suffix}
      </span>
      <span className="mt-3 text-sm md:text-base font-medium text-charcoal/50 uppercase tracking-[0.2em]">
        {label}
      </span>
    </motion.div>
  )
}

export default function Stats() {
  return (
    <section id="about" className="py-24 md:py-36 bg-charcoal text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 md:mb-28"
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-white/30">
            Studio
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-2xl text-white/80">
            A decade of award-winning work, building brands that endure.
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 md:gap-8 border-t border-white/10 pt-12">
          <StatItem end={24} label="Awwward Awards" />
          <StatItem end={20} label="Years of Experience" />
          <StatItem end={400} suffix="+" label="Projects Delivered" />
        </div>
      </div>
    </section>
  )
}
