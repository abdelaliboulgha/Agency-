import { motion } from 'framer-motion'
import MagneticButton from './MagneticButton'
import { useCursor } from '../context/CursorContext'

const socialLinks = [
  { label: 'LinkedIn', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'Twitter/X', href: '#' },
  { label: 'Dribbble', href: '#' },
]

export default function Footer() {
  const { setIsHovering } = useCursor()
  const year = new Date().getFullYear()

  return (
    <footer id="footer" className="bg-charcoal text-white">
      {/* Big CTA section */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-24 md:pt-36 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-white/30 mb-6 block">
            Get in touch
          </span>
          <h2 className="text-6xl sm:text-8xl md:text-[10vw] lg:text-[130px] font-bold tracking-tighter leading-none mb-12 hover:text-accent transition-colors duration-500 cursor-none"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            Let's Talk.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <MagneticButton
              href="mailto:hello@jerom.agency"
              className="inline-flex items-center gap-3 bg-accent text-charcoal font-bold px-8 py-4 rounded-full text-sm hover:bg-white transition-colors duration-300"
            >
              Start a project
              <span>→</span>
            </MagneticButton>
            <MagneticButton
              href="mailto:hello@jerom.agency"
              className="inline-flex items-center gap-3 border border-white/20 text-white font-bold px-8 py-4 rounded-full text-sm hover:border-white transition-colors duration-300"
            >
              hello@jerom.agency
            </MagneticButton>
          </div>
        </motion.div>

        {/* Footer columns */}
        <div className="mt-24 md:mt-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/10 pt-12">
          {/* Logo & tagline */}
          <div className="sm:col-span-2 md:col-span-1">
            <a
              href="#"
              className="text-2xl font-bold hover:text-accent transition-colors duration-200"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              JEROM●
            </a>
            <p className="mt-3 text-sm text-white/40 max-w-xs leading-relaxed">
              A global strategic branding & digital agency creating impactful experiences for ambitious brands.
            </p>
          </div>

          {/* Head Office */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white/30 mb-4">Head Office UK</h4>
            <address className="not-italic text-sm text-white/60 leading-relaxed">
              <p className="font-semibold text-white/80 mb-1">London</p>
              <p>20 Farringdon Street</p>
              <p>London, EC4A 4AB</p>
              <p>United Kingdom</p>
            </address>
          </div>

          {/* Cambridge */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white/30 mb-4">Cambridge Office</h4>
            <address className="not-italic text-sm text-white/60 leading-relaxed">
              <p className="font-semibold text-white/80 mb-1">Cambridge</p>
              <p>15 Bridge Street</p>
              <p>Cambridge, CB2 1UF</p>
              <p>United Kingdom</p>
            </address>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white/30 mb-4">Follow Us</h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    {link.label}
                    <span className="transform -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-200">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-xs text-white/30">
            © {year} JEROM Agency. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Cookie Policy
            </a>
            <a
              href="#"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
