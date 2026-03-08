import React, { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useCursor } from '../context/CursorContext'

export default function CustomCursor() {
  const { isHovering } = useCursor()
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 200 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX - 20)
      mouseY.set(e.clientY - 20)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [mouseX, mouseY])

  // Don't render on mobile
  if (typeof window !== 'undefined' && window.innerWidth < 768) return null

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
      style={{ x, y }}
    >
      <motion.div
        className="w-10 h-10 rounded-full border-2 border-charcoal"
        animate={{
          scale: isHovering ? 1.5 : 1,
          mixBlendMode: isHovering ? 'difference' : 'normal',
          backgroundColor: isHovering ? '#0A0A0A' : 'transparent',
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  )
}
