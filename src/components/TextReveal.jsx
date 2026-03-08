import { motion } from 'framer-motion'

export default function TextReveal({ children, className = '', delay = 0 }) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.33, 1, 0.68, 1],
        }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  )
}
