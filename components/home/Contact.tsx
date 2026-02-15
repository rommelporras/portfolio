'use client'

import { motion } from 'framer-motion'
import ContactForm from './ContactForm'
import { Card } from '@/components/ui/Card'

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-ghd-bg relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs font-extrabold uppercase tracking-widest text-ghd-accent-green text-center mb-4">
            GET IN TOUCH
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-ghd-text-primary mb-4">
            Get In Touch
          </h2>
          <p className="text-center text-ghd-text-muted mb-12 max-w-2xl mx-auto">
            I&apos;m always interested in hearing about new opportunities, collaborations, or just
            having a chat about technology.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.a
                href="https://linkedin.com/in/rommelporras"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="block"
              >
                <Card
                  variant="elevated"
                  padding="lg"
                  className="rounded-xl hover:shadow-glow-cyan hover:scale-105 hover:-translate-y-1 h-full bg-ghd-surface/80 border-blue-900/20"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-ghd-text-primary">LinkedIn</h3>
                      <p className="text-ghd-text-muted">Connect with me</p>
                    </div>
                  </div>
                  <p className="text-ghd-text-body">278 connections &bull; 291 followers</p>
                </Card>
              </motion.a>

              <motion.a
                href="https://github.com/rommelporras"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="block"
              >
                <Card
                  variant="elevated"
                  padding="lg"
                  className="rounded-xl hover:shadow-glow-cyan hover:scale-105 hover:-translate-y-1 h-full bg-ghd-surface/80 border-gray-700/20"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-ghd-text-muted rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-ghd-bg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-ghd-text-primary">GitHub</h3>
                      <p className="text-ghd-text-muted">Check out my code</p>
                    </div>
                  </div>
                  <p className="text-ghd-text-body">Open source projects & contributions</p>
                </Card>
              </motion.a>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <Card variant="elevated" padding="lg" className="rounded-xl">
                <h3 className="text-2xl font-bold text-ghd-text-primary mb-4">
                  Based in the Philippines
                </h3>
                <p className="text-ghd-text-body mb-6">Santa Rosa, Laguna, Philippines</p>
                <p className="text-ghd-text-muted mb-4">
                  DevOps Consultant at{' '}
                  <span className="font-semibold text-cyan-400">Hexagon AB</span>
                </p>
                <div className="flex flex-col items-center gap-2 text-sm text-ghd-text-muted">
                  <a
                    href="mailto:hello@rommelporras.com"
                    className="font-mono hover:text-cyan-400 transition-colors"
                  >
                    hello@rommelporras.com
                  </a>
                </div>
              </Card>
            </motion.div>

            <ContactForm />
          </div>
        </motion.div>
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-12 pt-8 border-t border-ghd-border"
      >
        <div className="container mx-auto px-6">
          <div className="text-center text-ghd-text-muted">
            <p className="mb-2">&copy; {new Date().getFullYear()} Rommel Porras</p>
            <p className="text-sm">Self-hosted - RCP Homelab</p>
          </div>
        </div>
      </motion.footer>
    </section>
  )
}

export default Contact
