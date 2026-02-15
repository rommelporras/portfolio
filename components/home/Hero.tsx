'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import StatCounter from '@/components/shared/StatCounter'

const ParticleEffect = dynamic(() => import('@/components/shared/ParticleEffect'), {
  ssr: false,
})

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-ghd-bg"
    >
      <div className="opacity-30">
        <ParticleEffect />
      </div>

      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.6, 0.4],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut' as const,
          }}
        />

        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.6, 0.4, 0.6],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut' as const,
            delay: 2,
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-md h-112 bg-emerald-500/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut' as const,
            delay: 4,
          }}
        />

        <motion.div
          className="absolute top-20 left-20 w-56 h-56 bg-cyan-400/12 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut' as const,
            delay: 1,
          }}
        />

        <motion.div
          className="absolute bottom-20 right-20 w-60 h-60 bg-violet-400/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.4, 0.6, 0.4],
            x: [0, -40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: 'easeInOut' as const,
            delay: 3,
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-mono text-xs font-extrabold uppercase tracking-widest text-ghd-text-muted mb-6 text-center"
          >
            DevOps Engineer • 10+ Years • 3x AWS Certified
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-mono font-extrabold tracking-tight mb-6 text-center"
          >
            <span className="text-ghd-text-primary">I Build Infrastructure</span>
            <br />
            <span className="bg-linear-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              That Scales
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-ghd-text-muted mb-10 max-w-2xl mx-auto text-center leading-relaxed"
          >
            From manual deployments to automated CI/CD pipelines. I help companies ship faster,
            scale reliably, and sleep better.
          </motion.p>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10"
          >
            <div className="bg-ghd-surface/80 border border-ghd-border rounded-lg px-5 py-3 text-center">
              <StatCounter
                value={99.95}
                suffix="%"
                decimals={2}
                className="font-mono text-2xl md:text-3xl font-bold text-cyan-400"
              />
              <p className="font-mono text-xs uppercase tracking-wider text-ghd-text-muted mt-1">
                <a
                  href="https://status.rommelporras.com/status/homelab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Uptime Achieved
                </a>
              </p>
            </div>
            <div className="bg-ghd-surface/80 border border-ghd-border rounded-lg px-5 py-3 text-center">
              <StatCounter
                value={10}
                suffix="+"
                decimals={0}
                className="font-mono text-2xl md:text-3xl font-bold text-cyan-400"
              />
              <p className="font-mono text-xs uppercase tracking-wider text-ghd-text-muted mt-1">
                Years in DevOps
              </p>
            </div>
            <div className="bg-ghd-surface/80 border border-ghd-border rounded-lg px-5 py-3 text-center">
              <StatCounter
                value={30}
                suffix="+"
                decimals={0}
                className="font-mono text-2xl md:text-3xl font-bold text-cyan-400"
              />
              <p className="font-mono text-xs uppercase tracking-wider text-ghd-text-muted mt-1">
                CI/CD Pipelines Built
              </p>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <a
              href="#contact"
              className="bg-cyan-600 hover:bg-cyan-500 text-white font-medium px-6 py-3 rounded-lg transition-colors inline-flex items-center gap-2"
            >
              Get In Touch
              <span className="text-lg">→</span>
            </a>
            <a
              href="/homelab"
              className="border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-medium px-6 py-3 rounded-lg transition-colors bg-transparent inline-flex items-center gap-2"
            >
              Explore My Homelab
              <span className="text-lg">🏠</span>
            </a>
          </motion.div>

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center"
          >
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-1.5 inline-flex items-center gap-3">
              <motion.div
                className="w-3 h-3 rounded-full bg-emerald-400"
                animate={{
                  opacity: [1, 0.5, 1],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut' as const,
                }}
              />
              <span className="font-mono text-sm text-emerald-400">
                Currently: DevOps Consultant @ Hexagon AB
              </span>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12 flex items-center justify-center gap-6"
          >
            <a
              href="https://linkedin.com/in/rommelporras"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ghd-text-muted hover:text-cyan-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://github.com/rommelporras"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ghd-text-muted hover:text-cyan-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
