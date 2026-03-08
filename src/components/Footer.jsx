import React from 'react'
import { motion } from 'framer-motion'
import MagneticButton from './MagneticButton'

const socialLinks = ['Twitter', 'LinkedIn', 'Instagram', 'Dribbble']

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      {/* Hero CTA */}
      <div className="px-6 md:px-16 lg:px-24 pt-24 md:pt-40 pb-16 border-b border-white/10">
        <motion.div
          className="flex flex-col md:flex-row md:items-center justify-between gap-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none">
            Let's Talk.
          </h2>
          <MagneticButton className="shrink-0 bg-accent text-charcoal font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white hover:text-charcoal transition-colors">
            Start a project
          </MagneticButton>
        </motion.div>
      </div>

      {/* Footer content */}
      <div className="px-6 md:px-16 lg:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo */}
          <div>
            <p className="text-xl font-bold mb-4">JEROM●</p>
            <p className="text-white/40 text-sm leading-relaxed">
              A global strategic branding & digital agency.
            </p>
          </div>

          {/* Head Office UK */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Head Office UK</p>
            <p className="text-white/70 text-sm leading-relaxed">
              London<br />
              EC2A 4NE<br />
              United Kingdom
            </p>
          </div>

          {/* London */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">London</p>
            <p className="text-white/70 text-sm leading-relaxed">
              123 Shoreditch High Street<br />
              London E1 6JE<br />
              +44 20 1234 5678
            </p>
          </div>

          {/* Cambridge */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Cambridge</p>
            <p className="text-white/70 text-sm leading-relaxed">
              45 King Street<br />
              Cambridge CB1 1LN<br />
              +44 1223 456 789
            </p>
          </div>
        </div>

        {/* Social + Legal */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-8 border-t border-white/10">
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-white/40 text-sm hover:text-accent transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-white/30 text-xs hover:text-white/60 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/30 text-xs hover:text-white/60 transition-colors">
              Cookie Policy
            </a>
            <span className="text-white/30 text-xs">© 2025 JEROM●</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
