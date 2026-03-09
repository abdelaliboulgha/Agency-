import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

// TODO: Replace with your actual email address
const CONTACT_EMAIL = 'hello@jerom.agency'

export default function ContactForm() {
  const { t } = useLanguage()
  const [form, setForm] = useState({ name: '', email: '', company: '', budget: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = true
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = true
    if (!form.message.trim()) e.message = true
    return e
  }

  function handleChange(field) {
    return (ev) => {
      setForm((prev) => ({ ...prev, [field]: ev.target.value }))
      setErrors((prev) => ({ ...prev, [field]: false }))
    }
  }

  function handleSubmit(ev) {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length > 0) {
      setErrors(e)
      return
    }
    const budgetDisplay = form.budget ? `$${form.budget}` : 'N/A'
    const subject = encodeURIComponent(`New Project Inquiry from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company || 'N/A'}\nBudget: ${budgetDisplay}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  const inputClass = (field) =>
    `w-full bg-white/5 border ${errors[field] ? 'border-red-500' : 'border-white/10'} rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-accent transition-colors text-sm`

  return (
    <section id="start-project" className="bg-charcoal py-24 md:py-40 px-6 md:px-16 lg:px-24">
      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.p
          className="text-xs font-bold uppercase tracking-[0.3em] text-white/40 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('contact.title')}
        </motion.p>
        <motion.p
          className="text-white/50 text-sm mb-16 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {t('contact.subtitle')}
        </motion.p>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95, rotateX: -10 }}
              transition={{ duration: 0.4 }}
              style={{ perspective: 1000 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <input
                    type="text"
                    placeholder={t('contact.name')}
                    value={form.name}
                    onChange={handleChange('name')}
                    className={inputClass('name')}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                >
                  <input
                    type="email"
                    placeholder={t('contact.email')}
                    value={form.email}
                    onChange={handleChange('email')}
                    className={inputClass('email')}
                  />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <input
                    type="text"
                    placeholder={t('contact.company')}
                    value={form.company}
                    onChange={handleChange('company')}
                    className={inputClass('company')}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                >
                  <input
                    type="number"
                    min="0"
                    max="10000000"
                    placeholder={t('contact.budgetPlaceholder')}
                    value={form.budget}
                    onChange={handleChange('budget')}
                    className={inputClass('budget')}
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <textarea
                  rows={5}
                  placeholder={t('contact.message')}
                  value={form.message}
                  onChange={handleChange('message')}
                  className={`${inputClass('message')} resize-none`}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
                <motion.button
                  type="submit"
                  className="w-full bg-accent text-charcoal font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {t('contact.submit')}
                </motion.button>
              </motion.div>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              className="flex flex-col items-center justify-center py-20 text-center"
              initial={{ opacity: 0, scale: 0.8, rotateX: 30 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
            >
              <motion.div
                className="text-6xl mb-6"
                animate={{ rotateY: [0, 360] }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                🚀
              </motion.div>
              <motion.h3
                className="text-3xl md:text-4xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                {t('contact.success')}
              </motion.h3>
              <motion.p
                className="text-white/50 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                {t('contact.successSub')}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
