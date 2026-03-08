import React from 'react'
import { motion } from 'framer-motion'

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const lineVariant = {
  hidden: { y: '110%', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function TextReveal({ lines, className = '' }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {lines.map((line, i) => (
        <div key={i} className="overflow-hidden">
          <motion.div variants={lineVariant}>{line}</motion.div>
        </div>
      ))}
    </motion.div>
  )
}
