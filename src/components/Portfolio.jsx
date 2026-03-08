import React from 'react'
import { motion } from 'framer-motion'
import PortfolioCard from './PortfolioCard'

const projects = [
  { title: 'Build The Bandwagon', description: 'Brand Strategy & Digital Platform', gradient: 'bg-gradient-to-br from-violet-600 to-indigo-700' },
  { title: 'Optinet', description: 'Web App Development & SEO', gradient: 'bg-gradient-to-br from-emerald-500 to-teal-700' },
  { title: 'DENTON', description: 'Visual Identity & Campaign', gradient: 'bg-gradient-to-br from-rose-500 to-pink-700' },
  { title: 'Equinox', description: 'Digital Strategy & Content', gradient: 'bg-gradient-to-br from-amber-500 to-orange-700' },
  { title: 'itc', description: 'Brand Naming & Positioning', gradient: 'bg-gradient-to-br from-sky-500 to-blue-700' },
  { title: 'Atlas Venture', description: 'Website & Brand Identity', gradient: 'bg-gradient-to-br from-stone-600 to-zinc-800' },
]

export default function Portfolio() {
  return (
    <section className="bg-charcoal py-24 md:py-40 px-6 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-white max-w-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          View our latest work
        </motion.h2>
        <motion.a
          href="#"
          className="text-white/50 text-sm font-medium hover:text-accent transition-colors underline-offset-4 hover:underline"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          View all projects →
        </motion.a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <PortfolioCard key={project.title} {...project} index={i} />
        ))}
      </div>
    </section>
  )
}
