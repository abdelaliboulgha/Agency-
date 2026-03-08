import { motion } from 'framer-motion'
import ExpertiseCard from './ExpertiseCard'

const cards = [
  {
    index: '01',
    title: 'Digital First Branding',
    description:
      'We craft brand identities built for the digital age — flexible, scalable systems that resonate across every touchpoint and drive authentic connections with your audience.',
  },
  {
    index: '02',
    title: 'Web & Digital Products',
    description:
      'From stunning marketing sites to complex web applications, we design and engineer digital products that perform at the highest level and delight users at every interaction.',
  },
  {
    index: '03',
    title: 'Immersive Digital Experiences',
    description:
      'We push the boundaries of what is possible on the web, creating immersive, interactive experiences that captivate audiences and position your brand at the forefront of innovation.',
  },
]

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 md:py-36 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          {/* Sticky left */}
          <div className="md:w-2/5 lg:w-1/3">
            <div className="md:sticky md:top-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-xs font-semibold tracking-[0.3em] uppercase text-charcoal/40">
                  Our Expertise
                </span>
                <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                  Digital expertise that moves brands forward.
                </h2>
              </motion.div>
            </div>
          </div>

          {/* Scrolling right */}
          <div className="md:w-3/5 lg:w-2/3">
            {cards.map((card) => (
              <ExpertiseCard key={card.index} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
