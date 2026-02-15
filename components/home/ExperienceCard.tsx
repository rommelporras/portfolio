'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import type { Experience } from '@/types/experience'

interface ExperienceCardProps {
  experience: Experience
  index: number
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        variant="elevated"
        padding="md"
        hover="glow"
        className="rounded-xl h-full flex flex-col"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4 mb-4">
          <div className="min-w-0">
            <h3 className="text-xl font-bold text-ghd-text-primary mb-1">{experience.role}</h3>
            <p className="text-base text-cyan-400 font-semibold">{experience.company}</p>
          </div>
          <div className="sm:text-right shrink-0">
            <p className="font-mono text-xs text-cyan-500/70">{experience.period}</p>
            <p className="text-xs text-ghd-text-muted">{experience.location}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-ghd-text-muted mb-4">{experience.description}</p>

        {/* Highlights */}
        <ul className="space-y-2 mb-4 grow">
          {experience.highlights.map((highlight, idx) => (
            <li key={idx} className="flex items-start">
              <svg
                className="w-4 h-4 text-cyan-500 mr-2 mt-0.5 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm text-ghd-text-body">{highlight}</span>
            </li>
          ))}
        </ul>

        {/* Tech Stack */}
        {experience.techStack && (
          <div className="pt-4 border-t border-ghd-border mt-auto">
            <p className="font-mono text-xs font-semibold text-ghd-text-muted mb-2">TECH STACK</p>
            <p className="text-xs text-ghd-text-muted">{experience.techStack}</p>
          </div>
        )}
      </Card>
    </motion.div>
  )
}
