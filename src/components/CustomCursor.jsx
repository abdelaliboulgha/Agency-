import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useCursor } from '../context/CursorContext'

export default function CustomCursor() {
  const { isHovering } = useCursor()
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 200 }
  const springX = useSpring(cursorX, springConfig)
  const springY = useSpring(cursorY, springConfig)

  useEffect(() => {
    const isMobile = window.innerWidth < 768
    if (isMobile) return

    const moveCursor = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [cursorX, cursorY])

  // Don't render on mobile
  if (typeof window !== 'undefined' && window.innerWidth < 768) return null

  return (
    <>
      {/* Main cursor ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          willChange: 'transform',
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          mixBlendMode: isHovering ? 'difference' : 'normal',
        }}
        transition={{ duration: 0.15 }}
      >
        <div
          className={`rounded-full border-2 transition-all duration-150 ${
            isHovering
              ? 'w-10 h-10 border-white bg-white/10'
              : 'w-6 h-6 border-charcoal'
          }`}
        />
      </motion.div>

      {/* Dot cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          willChange: 'transform',
        }}
      >
        <div className="w-1 h-1 rounded-full bg-charcoal" />
      </motion.div>
    </>
  )
}
