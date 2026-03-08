import { motion } from 'framer-motion'
import MagneticButton from './MagneticButton'
import { useCursor } from '../context/CursorContext'

export default function ExpertiseCard({ card }) {
  const { setIsHovering } = useCursor()

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
      className="py-12 md:py-16 border-t border-charcoal/10 first:border-t-0 group"
    >
      <div className="flex flex-col md:flex-row md:items-start gap-8">
        {/* Index */}
        <span className="text-5xl md:text-7xl font-bold text-charcoal/10 leading-none flex-shrink-0">
          {card.index}
        </span>

        {/* Content */}
        <div className="flex-1">
          <h3
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 group-hover:text-accent transition-colors duration-300"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {card.title}
          </h3>
          <p className="text-charcoal/60 text-base md:text-lg leading-relaxed mb-6 max-w-lg">
            {card.description}
          </p>
          <MagneticButton
            href="#"
            className="inline-flex items-center gap-2 text-sm font-bold tracking-[0.15em] uppercase border-b border-charcoal pb-1 hover:border-accent hover:text-accent transition-colors duration-200"
          >
            Learn More
            <span>→</span>
          </MagneticButton>
        </div>
      </div>
    </motion.div>
  )
}
