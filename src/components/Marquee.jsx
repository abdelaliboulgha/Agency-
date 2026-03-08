export default function Marquee() {
  const text = 'Experiences with Impact • '
  const repeated = text.repeat(10)

  return (
    <div className="absolute inset-0 flex items-center overflow-hidden select-none pointer-events-none">
      <div className="marquee-track text-[12vw] md:text-[10vw] font-bold text-charcoal/5 whitespace-nowrap leading-none uppercase tracking-tighter">
        <span>{repeated}</span>
        <span aria-hidden="true">{repeated}</span>
      </div>
    </div>
  )
}
