import React from 'react'

export default function Marquee({ text = 'Experiences with Impact', repeat = 6 }) {
  const items = Array(repeat).fill(text)

  return (
    <div className="overflow-hidden whitespace-nowrap select-none">
      <div className="inline-flex animate-marquee will-change-transform">
        {items.map((item, i) => (
          <span
            key={i}
            className="inline-block mx-8 text-6xl md:text-8xl font-bold text-black/5 uppercase tracking-widest"
          >
            {item} ●
          </span>
        ))}
        {items.map((item, i) => (
          <span
            key={`dup-${i}`}
            className="inline-block mx-8 text-6xl md:text-8xl font-bold text-black/5 uppercase tracking-widest"
            aria-hidden="true"
          >
            {item} ●
          </span>
        ))}
      </div>
    </div>
  )
}
