import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useCursor } from '../context/CursorContext'

export default function CustomCursor() {
  const { isHovering } = useCursor()
  const [isDarkBg, setIsDarkBg] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 200 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX - 12)
      mouseY.set(e.clientY - 12)

      // Detect dark background
      const el = document.elementFromPoint(e.clientX, e.clientY)
      if (el) {
        const darkParent = el.closest('.bg-charcoal')
        setIsDarkBg(!!darkParent)
      }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [mouseX, mouseY])

  // Don't render on mobile
  if (typeof window !== 'undefined' && window.innerWidth < 768) return null

  const borderColor = isDarkBg ? '#FFFFFF' : '#0A0A0A'
  const fillColor = isDarkBg ? '#FFFFFF' : '#0A0A0A'

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
      style={{ x, y }}
    >
      <motion.div
        className="w-6 h-6 rounded-full border-2"
        style={{ borderColor }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? fillColor : 'transparent',
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  )
}
