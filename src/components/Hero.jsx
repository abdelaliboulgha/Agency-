import { motion } from 'framer-motion'
import TextReveal from './TextReveal'
import Marquee from './Marquee'
import { useCursor } from '../context/CursorContext'

const headlineLines = [
  'A global strategic',
  'branding & digital agency',
  'expertly creating impactful',
  'experiences for ambitious brands.',
]

export default function Hero() {
  const { setIsHovering } = useCursor()

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      <Marquee />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full">
        {/* Tag */}
        <TextReveal delay={0.2}>
          <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-charcoal/50 mb-8 md:mb-12">
            Strategic Branding & Digital Agency
          </span>
        </TextReveal>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight max-w-5xl">
          {headlineLines.map((line, i) => (
            <TextReveal key={i} delay={0.3 + i * 0.1}>
              <span className="block">{line}</span>
            </TextReveal>
          ))}
        </h1>

        {/* CTA Row */}
        <div className="mt-12 md:mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          {/* Play Showreel */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="relative w-28 h-28 md:w-32 md:h-32 rounded-full border-2 border-charcoal flex items-center justify-center group hover:bg-charcoal transition-colors duration-300"
          >
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 rounded-full border border-charcoal/30"
            />
            <span className="text-xs font-semibold text-charcoal group-hover:text-white transition-colors duration-300 text-center leading-tight">
              Play<br />Showreel
            </span>
          </motion.button>

          {/* Brief description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="max-w-xs text-sm md:text-base text-charcoal/60 leading-relaxed"
          >
            We partner with ambitious brands to craft digital experiences that drive growth and leave lasting impressions.
          </motion.p>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-charcoal/40">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-charcoal/40 to-transparent"
        />
      </motion.div>
    </section>
  )
}
