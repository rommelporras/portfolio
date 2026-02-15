'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Card } from '@/components/ui/Card'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY

    if (!accessKey) {
      setStatus('error')
      setErrorMessage('Contact form is not configured. Please contact me directly via email.')
      setTimeout(() => setStatus('idle'), 5000)
      return
    }

    try {
      // Web3Forms API: https://web3forms.com
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New message from ${formData.name} - Portfolio Contact Form`,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        throw new Error(result.message || 'Failed to send message')
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage(
        error instanceof Error ? error.message : 'Failed to send message. Please try again.',
      )
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="max-w-2xl mx-auto"
    >
      <Card variant="glass" padding="lg">
        <h3 className="text-2xl font-bold text-ghd-text-primary mb-6">Send Me a Message</h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-ghd-text-body mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-ghd-bg border border-ghd-border rounded-lg text-ghd-text-primary placeholder-ghd-text-dim focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all"
              placeholder="John Doe"
              disabled={status === 'submitting'}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-ghd-text-body mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-ghd-bg border border-ghd-border rounded-lg text-ghd-text-primary placeholder-ghd-text-dim focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all"
              placeholder="john@example.com"
              disabled={status === 'submitting'}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-ghd-text-body mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 bg-ghd-bg border border-ghd-border rounded-lg text-ghd-text-primary placeholder-ghd-text-dim focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all resize-none"
              placeholder="Tell me about your project or just say hi..."
              disabled={status === 'submitting'}
            />
          </div>

          <motion.button
            type="submit"
            disabled={status === 'submitting'}
            whileHover={{ scale: status === 'submitting' ? 1 : 1.02 }}
            whileTap={{ scale: status === 'submitting' ? 1 : 0.98 }}
            className={`w-full px-6 py-4 rounded-lg font-medium transition-all ${
              status === 'submitting'
                ? 'bg-ghd-surface text-ghd-text-muted cursor-not-allowed'
                : 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg hover:shadow-xl'
            }`}
          >
            {status === 'submitting' ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </motion.button>

          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400"
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium">
                  Message sent successfully! I&apos;ll get back to you soon.
                </span>
              </div>
            </motion.div>
          )}

          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400"
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium">
                  {errorMessage || 'Failed to send message. Please try again.'}
                </span>
              </div>
            </motion.div>
          )}
        </form>

        <div className="mt-8 pt-6 border-t border-ghd-border">
          <p className="text-sm text-ghd-text-muted mb-4">
            Prefer email? You can also reach me directly at:
          </p>
          <a
            href="mailto:hello@rommelporras.com"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            hello@rommelporras.com
          </a>
        </div>
      </Card>
    </motion.div>
  )
}
