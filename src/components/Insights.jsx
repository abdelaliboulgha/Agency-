import { motion } from 'framer-motion'
import { useCursor } from '../context/CursorContext'

const insights = [
  {
    date: 'Feb 28, 2025',
    category: 'Branding',
    title: 'The Art of Brand Positioning in a Saturated Digital Market',
    description: 'How top-tier agencies are helping ambitious brands cut through the noise with bold, differentiated positioning strategies.',
    gradient: 'bg-gradient-to-br from-violet-400 to-indigo-600',
    readTime: '5 min read',
  },
  {
    date: 'Feb 14, 2025',
    category: 'Digital Strategy',
    title: 'Web Performance as a Competitive Advantage in 2025',
    description: 'Loading speed, core web vitals, and immersive interaction design are no longer optional — they\'re the baseline for digital excellence.',
    gradient: 'bg-gradient-to-br from-cyan-400 to-blue-600',
    readTime: '7 min read',
  },
  {
    date: 'Jan 30, 2025',
    category: 'Marketing',
    title: 'ABM in the Age of AI: Smarter B2B Lead Generation',
    description: 'Account-based marketing has evolved. AI-driven personalization is enabling precision targeting at scale for B2B brands.',
    gradient: 'bg-gradient-to-br from-emerald-400 to-teal-600',
    readTime: '6 min read',
  },
]

export default function Insights() {
  const { setIsHovering } = useCursor()

  return (
    <section id="insights" className="py-24 md:py-36 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-charcoal/40">
              Latest Thinking
            </span>
            <h2 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Insights
            </h2>
          </motion.div>

          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="inline-flex items-center gap-2 text-charcoal/50 hover:text-charcoal text-sm font-semibold transition-colors group"
          >
            View all articles
            <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-200">→</span>
          </motion.a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight, i) => (
            <motion.article
              key={insight.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="group cursor-none"
            >
              {/* Image */}
              <div className={`${insight.gradient} rounded-xl aspect-[16/10] mb-6 overflow-hidden`}>
                <div className="w-full h-full opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out" />
              </div>

              {/* Meta */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold tracking-[0.15em] uppercase text-accent">
                  {insight.category}
                </span>
                <span className="text-charcoal/20">•</span>
                <span className="text-xs text-charcoal/40">{insight.date}</span>
                <span className="text-charcoal/20">•</span>
                <span className="text-xs text-charcoal/40">{insight.readTime}</span>
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold leading-snug mb-3 group-hover:text-accent transition-colors duration-300">
                {insight.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-charcoal/60 leading-relaxed">
                {insight.description}
              </p>

              {/* Read more */}
              <div className="mt-4 inline-flex items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase text-charcoal/40 group-hover:text-charcoal transition-colors duration-200">
                Read article
                <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
