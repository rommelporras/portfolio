'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { aboutContent } from '@/data/about'
import { Card } from '@/components/ui/Card'

const About = () => {
  return (
    <section id="about" className="py-24 bg-ghd-bg relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-ghd-accent-green">
            ABOUT
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-ghd-text-primary font-mono mb-4 mt-3">
            {aboutContent.sectionTitle.line1}{' '}
            <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              {aboutContent.sectionTitle.line2}
            </span>
          </h2>
        </motion.div>

        {/* Left / Right column layout */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {aboutContent.storyArcs.map((arc, index) => (
              <Card
                key={index}
                variant="default"
                padding="md"
                className="hover:border-ghd-border-hover transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-xs text-ghd-text-muted">{arc.period}</span>
                  <div
                    className={`h-px flex-1 bg-linear-to-r ${arc.gradientFrom} to-transparent`}
                  />
                </div>
                <p className="text-ghd-text-body leading-relaxed">{arc.story}</p>
              </Card>
            ))}

            {/* Homelab callout */}
            <div className="border-l-2 border-violet-400 bg-violet-500/5 p-4 rounded-r-lg">
              <h3 className="font-bold text-xl text-ghd-text-primary mb-4 flex items-center gap-2">
                {aboutContent.homelabSection.title}
                <span className="text-2xl">{aboutContent.homelabSection.emoji}</span>
              </h3>
              <p className="text-ghd-text-body leading-relaxed mb-4 font-medium">
                {aboutContent.homelabSection.description}
              </p>
              <div className="mb-4 p-4 bg-violet-500/10 rounded-lg">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {aboutContent.homelabSection.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-ghd-accent-green">✓</span>
                      <span className="text-ghd-text-body">{feature.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a
                href={aboutContent.homelabSection.ctaUrl}
                className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
              >
                {aboutContent.homelabSection.ctaText}
                <span className="text-lg">&rarr;</span>
              </a>
              <p className="text-ghd-text-body leading-relaxed mt-4 pt-4 border-t border-ghd-border">
                {aboutContent.homelabSection.remoteWorkNote}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <Card variant="default" padding="lg" className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-2xl p-[3px] bg-linear-to-br from-cyan-500 via-blue-500 to-violet-500 shadow-2xl group">
                <Image
                  src="/avatar.png"
                  alt="Rommel Porras - DevOps Consultant"
                  width={192}
                  height={192}
                  className="w-full h-full rounded-2xl object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>

              <div className="space-y-2">
                <p className="font-mono text-sm md:text-xs lg:text-sm text-ghd-text-muted flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {aboutContent.location.city}
                </p>
                <p className="font-mono text-sm md:text-xs lg:text-sm text-ghd-text-muted flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {aboutContent.location.timezone}
                </p>
              </div>
            </Card>

            <motion.div
              className="grid grid-cols-2 gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.6,
                  },
                },
              }}
            >
              {aboutContent.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Card
                    variant="default"
                    padding="md"
                    className="text-center hover:scale-105 transition-transform duration-200"
                  >
                    <div className={`font-mono text-2xl font-bold ${stat.color} mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-ghd-text-muted text-sm">{stat.label}</div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Card variant="default" padding="md">
                <h3 className="text-lg font-bold text-ghd-text-primary font-mono mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  {aboutContent.githubActivity.title}
                </h3>
                <a
                  href="https://github.com/rommelporras"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 font-mono text-sm"
                >
                  View GitHub Activity &rarr;
                </a>
              </Card>
            </motion.div>

            <div className="space-y-3">
              <a
                href={aboutContent.quickLinks.contact.url}
                className="block w-full px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white text-center rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                {aboutContent.quickLinks.contact.text}
              </a>
              <a
                href={aboutContent.quickLinks.homelab.url}
                className="block w-full px-6 py-3 bg-ghd-surface border border-ghd-border hover:border-ghd-border-hover text-cyan-400 hover:text-cyan-300 text-center rounded-lg font-medium transition-colors duration-200"
              >
                {aboutContent.quickLinks.homelab.text}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
