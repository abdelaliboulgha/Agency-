import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useCursor } from '../context/CursorContext'

export default function PortfolioCard({ title, description, gradient, index }) {
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
      className="relative overflow-hidden rounded-2xl aspect-[4/3] group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1 }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Parallax background */}
      <motion.div
        className={`absolute inset-[-8%] ${gradient} will-change-transform`}
        style={{ y }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />

      {/* Content slides up on hover */}
      <div className="absolute inset-0 flex flex-col justify-end p-8">
        <motion.div
          className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
        >
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-white/70 text-sm">{description}</p>
        </motion.div>
      </div>

      {/* Always visible number */}
      <div className="absolute top-6 right-6 text-white/30 text-sm font-bold">
        {String(index + 1).padStart(2, '0')}
      </div>
    </motion.div>
  )
}
