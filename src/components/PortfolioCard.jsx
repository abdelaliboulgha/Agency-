import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useCursor } from '../context/CursorContext'

export default function PortfolioCard({ project }) {
  const ref = useRef(null)
  const { setIsHovering } = useCursor()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-none"
    >
      {/* Background gradient image */}
      <div className={`absolute inset-0 ${project.gradient}`} />

      {/* Parallax overlay */}
      <motion.div
        style={{ y, willChange: 'transform' }}
        className="absolute inset-0 scale-110"
      >
        <div className={`w-full h-full ${project.gradient} opacity-80`} />
      </motion.div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-charcoal/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content revealed on hover */}
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
        <div className="transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
          <span className="text-white/60 text-xs font-semibold tracking-[0.2em] uppercase mb-2 block">
            {project.category}
          </span>
          <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
            {project.title}
          </h3>
          <p className="text-white/70 text-sm">
            {project.description}
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-accent text-sm font-semibold">
            View project
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Title visible when not hovering */}
      <div className="absolute top-6 left-6 group-hover:opacity-0 transition-opacity duration-300">
        <span className="text-white/80 text-xs font-semibold tracking-[0.2em] uppercase">
          {project.title}
        </span>
      </div>
    </motion.div>
  )
}
