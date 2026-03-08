import { motion } from 'framer-motion'
import { useCursor } from '../context/CursorContext'

const pillars = [
  {
    title: 'Brand Power',
    items: [
      'Brand Strategy & Positioning',
      'Go-To-Market Strategy',
      'Content Strategy',
      'Visual Identity',
      'Brand Naming',
    ],
  },
  {
    title: 'Digital Impact',
    items: [
      'Digital Strategy',
      'Websites & Platforms',
      'Web App Development',
      'Software Development',
      'CMS',
      'SEO Systems',
    ],
  },
  {
    title: 'Marketing Performance',
    items: [
      'Campaign Strategy',
      'CRM Implementation',
      'B2B Lead Gen',
      'RevOps',
      'Inbound Marketing',
      'ABM',
    ],
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const pillarVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] },
  },
}

export default function Capabilities() {
  const { setIsHovering } = useCursor()

  return (
    <section id="capabilities" className="py-24 md:py-36 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-charcoal/40">
            What We Do
          </span>
          <h2 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            OUR CAPABILITIES
          </h2>
        </motion.div>

        {/* Pillars */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16"
        >
          {pillars.map((pillar) => (
            <motion.div key={pillar.title} variants={pillarVariants}>
              <h3 className="text-xl md:text-2xl font-bold mb-6 pb-4 border-b border-charcoal/10">
                {pillar.title}
              </h3>
              <ul className="space-y-3">
                {pillar.items.map((item) => (
                  <li
                    key={item}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    className="group relative text-charcoal/70 text-sm md:text-base font-medium py-1 hover:text-charcoal transition-colors duration-200"
                  >
                    <span className="relative">
                      {item}
                      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent group-hover:w-full transition-all duration-300" />
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
