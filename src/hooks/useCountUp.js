import { useState, useEffect, useRef } from 'react'

export function useCountUp(end, duration = 2000, start = 0) {
  const [count, setCount] = useState(start)
  const [isActive, setIsActive] = useState(false)
  const countRef = useRef(start)
  const startTimeRef = useRef(null)

  const startCounting = () => setIsActive(true)

  useEffect(() => {
    if (!isActive) return

    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp
      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      countRef.current = Math.floor(eased * (end - start) + start)
      setCount(countRef.current)
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [isActive, end, start, duration])

  return { count, startCounting }
}
