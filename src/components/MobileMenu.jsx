import { motion, AnimatePresence } from 'framer-motion'
import { useCursor } from '../context/CursorContext'

const navLinks = [
  { label: 'What we do', href: '#capabilities' },
  { label: 'Sectors', href: '#sectors' },
  { label: 'Case studies', href: '#portfolio' },
  { label: 'Who we are', href: '#about' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact', href: '#footer' },
]

const overlayVariants = {
  hidden: { clipPath: 'inset(0 0 100% 0)', opacity: 0 },
  visible: {
    clipPath: 'inset(0 0 0% 0)',
    opacity: 1,
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    clipPath: 'inset(0 0 100% 0)',
    opacity: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
}

const linkVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.1 + i * 0.07, duration: 0.5, ease: [0.33, 1, 0.68, 1] },
  }),
}

export default function MobileMenu({ isOpen, onClose }) {
  const { setIsHovering } = useCursor()

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-40 bg-charcoal flex flex-col justify-center px-8 md:hidden"
        >
          <nav className="flex flex-col gap-6">
            {navLinks.map((link, i) => (
              <div key={link.label} className="overflow-hidden">
                <motion.a
                  href={link.href}
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  onClick={onClose}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="block text-4xl font-bold text-white hover:text-accent transition-colors duration-200"
                >
                  {link.label}
                </motion.a>
              </div>
            ))}
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="mt-12 flex gap-4"
          >
            {['UK', 'FR', 'DE'].map((lang) => (
              <button
                key={lang}
                className="text-white/50 text-sm font-medium hover:text-white transition-colors"
              >
                {lang}
              </button>
            ))}
          </motion.div>

          <motion.a
            href="#footer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            onClick={onClose}
            className="mt-6 inline-block bg-accent text-charcoal font-bold px-6 py-3 rounded-full text-sm w-fit"
          >
            Start a project
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
