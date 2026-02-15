'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card } from '@/components/ui/Card'

interface Certification {
  name: string
  issuer: string
  credlyUrl: string
  badgeUrl: string
  earnedDate: string
  category: 'associate' | 'practitioner' | 'professional' | 'specialty'
}

const certifications: Certification[] = [
  {
    name: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services',
    credlyUrl: 'https://www.credly.com/badges/e8b95b1f-e420-4959-ad9b-0541fecf71e2/',
    badgeUrl: '/certifications/aws-certified-ai-practitioner.png',
    earnedDate: 'Oct 2025',
    category: 'practitioner',
  },
  {
    name: 'AWS Certified Developer – Associate',
    issuer: 'Amazon Web Services',
    credlyUrl: 'https://www.credly.com/badges/4346793e-94ce-4d67-9965-7e74fa98503a/',
    badgeUrl: '/certifications/aws-certified-developer-associate.png',
    earnedDate: 'Sep 2025',
    category: 'associate',
  },
  {
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    credlyUrl: 'https://www.credly.com/badges/3ae30cd9-87e6-4813-82df-e0ff884c8f51/',
    badgeUrl: '/certifications/aws-certified-solutions-architect-associate.png',
    earnedDate: 'Oct 2020 (Expired)',
    category: 'associate',
  },
]

export default function CertificationBadges() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  }

  return (
    <div className="mt-16">
      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold mb-3 text-ghd-text-primary">AWS Certifications</h3>
        <p className="text-lg text-ghd-text-muted">
          Industry-recognized certifications validating cloud expertise
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certifications.map((cert, index) => (
          <motion.a
            key={cert.name}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={cardVariants}
            href={cert.credlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Card
              variant="default"
              padding="md"
              className="text-center cursor-pointer hover:shadow-glow-amber hover:-translate-y-3 relative overflow-hidden h-full flex flex-col"
            >
              <div className="relative w-40 h-40 mx-auto mb-6 shrink-0">
                <Image
                  src={cert.badgeUrl}
                  alt={`${cert.name} badge`}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                  unoptimized
                />
              </div>

              {/* Fixed heights keep cards aligned across the grid */}
              <h4 className="text-base font-bold mb-3 text-ghd-text-primary group-hover:text-amber-400 transition-colors duration-200 h-14 flex items-center justify-center leading-tight px-2">
                {cert.name}
              </h4>

              <p className="text-sm text-ghd-text-muted mb-4 h-5 flex items-center justify-center">
                {cert.issuer}
              </p>

              <div className="mb-4 flex justify-center">
                <span className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold bg-amber-500/10 text-amber-400 border-amber-500/20">
                  Earned {cert.earnedDate}
                </span>
              </div>

              {/* Pushes verify link to bottom of card */}
              <div className="grow" />

              <div className="flex items-center justify-center gap-2 text-sm font-medium text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200 mt-auto">
                <span>Verify on Credly</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </Card>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-10 max-w-3xl mx-auto text-center"
      >
        <Card variant="default" padding="md" className="bg-amber-500/5 border border-amber-500/20">
          <div className="flex items-start gap-3">
            <svg
              className="w-6 h-6 text-amber-400 shrink-0 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div className="text-left">
              <div className="font-bold text-amber-400 mb-1">Verified Credentials</div>
              <p className="text-sm text-amber-400/80">
                All certifications are verified by Credly and can be validated by clicking each
                badge. These credentials demonstrate proficiency in AWS cloud services and
                development best practices.
              </p>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}
