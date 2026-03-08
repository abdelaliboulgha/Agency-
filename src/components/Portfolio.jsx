import { motion } from 'framer-motion'
import PortfolioCard from './PortfolioCard'
import { useCursor } from '../context/CursorContext'

const projects = [
  {
    title: 'Build The Bandwagon',
    category: 'Branding & Digital',
    description: 'A revolutionary platform connecting artists with their audiences through immersive digital experiences.',
    gradient: 'bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-700',
  },
  {
    title: 'Optinet',
    category: 'Web Platform',
    description: 'Next-generation optical networking solutions with a sleek, enterprise-grade digital presence.',
    gradient: 'bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600',
  },
  {
    title: 'DENTON',
    category: 'Brand Identity',
    description: 'Premium law firm branding that commands authority and trust in the digital era.',
    gradient: 'bg-gradient-to-br from-gray-700 via-gray-800 to-black',
  },
  {
    title: 'Equinox',
    category: 'Digital Campaign',
    description: 'High-performance fitness brand campaigns that inspire transformation and elite performance.',
    gradient: 'bg-gradient-to-br from-amber-400 via-orange-500 to-red-600',
  },
  {
    title: 'itc',
    category: 'Technology',
    description: 'Cutting-edge technology consultancy with a bold digital identity that reflects innovation.',
    gradient: 'bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600',
  },
  {
    title: 'Atlas Venture',
    category: 'VC & Fintech',
    description: 'Premium venture capital firm with a refined digital presence that attracts world-class founders.',
    gradient: 'bg-gradient-to-br from-rose-400 via-pink-500 to-fuchsia-600',
  },
]

export default function Portfolio() {
  const { setIsHovering } = useCursor()

  return (
    <section id="portfolio" className="py-24 md:py-36 bg-charcoal">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-white/30">
              Our Work
            </span>
            <h2 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
              View our<br />latest work
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
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-semibold transition-colors group"
          >
            View all projects
            <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-200">→</span>
          </motion.a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project) => (
            <PortfolioCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
