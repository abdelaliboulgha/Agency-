import React from 'react'
import { motion } from 'framer-motion'

const insights = [
  {
    date: 'Feb 2025',
    tag: 'Branding',
    title: 'The Future of Brand Identity in the Digital Age',
    gradient: 'from-violet-500 to-indigo-600',
  },
  {
    date: 'Jan 2025',
    tag: 'Strategy',
    title: 'How to Build a Go-To-Market Strategy That Actually Works',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    date: 'Dec 2024',
    tag: 'Design',
    title: 'Motion Design: Why Animation Is Now a Business Imperative',
    gradient: 'from-rose-500 to-pink-600',
  },
]

export default function Insights() {
  return (
    <section className="py-24 md:py-40 px-6 md:px-16 lg:px-24 border-t border-black/10">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-charcoal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Latest Insights
        </motion.h2>
        <motion.a
          href="#"
          className="text-charcoal/50 text-sm font-medium hover:text-accent transition-colors"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          View all articles →
        </motion.a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {insights.map((item, i) => (
          <motion.article
            key={item.title}
            className="group cursor-default"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <div className={`rounded-2xl aspect-video bg-gradient-to-br ${item.gradient} mb-6 overflow-hidden`}>
              <div className="w-full h-full group-hover:scale-105 transition-transform duration-500 bg-gradient-to-br opacity-90 from-black/0 to-black/20" />
            </div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-bold uppercase tracking-widest text-charcoal/40">{item.date}</span>
              <span className="w-1 h-1 rounded-full bg-charcoal/20" />
              <span className="text-xs font-bold uppercase tracking-widest text-accent">{item.tag}</span>
            </div>
            <h3 className="text-lg font-bold text-charcoal group-hover:text-accent transition-colors leading-snug">
              {item.title}
            </h3>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
