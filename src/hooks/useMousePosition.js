import { useEffect, useRef } from 'react'

export function useMousePosition() {
  const position = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const update = (e) => {
      position.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', update)
    return () => window.removeEventListener('mousemove', update)
  }, [])

  return position
}
