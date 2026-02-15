'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import type { Tool } from '@/types/tools'

interface ToolCardProps {
  tool: Tool
}

export default function ToolCard({ tool }: ToolCardProps) {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{
        duration: 0.3,
        layout: { duration: 0.3 },
      }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <Card
        variant="glass"
        padding="md"
        className="relative group cursor-pointer hover:shadow-glow-cyan hover:-translate-y-2 transition-all duration-300 h-full flex flex-col"
      >
        {tool.logo ? (
          <div className="w-12 h-12 mb-4">
            <img
              src={tool.logo}
              alt={`${tool.name} logo`}
              width={48}
              height={48}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="text-5xl mb-4">{tool.icon}</div>
        )}

        <h3 className="text-xl font-bold mb-2 text-ghd-text-primary">{tool.name}</h3>

        <div className="mb-3">
          <Badge
            variant="secondary"
            className="bg-ghd-surface border border-ghd-border text-ghd-text-muted font-mono text-xs"
          >
            {tool.category}
          </Badge>
        </div>

        <p className="text-sm text-ghd-text-muted mb-4 flex-grow">{tool.description}</p>

        <div className="mt-auto">
          <div className="mb-3">
            <Badge
              variant="secondary"
              className={`font-mono text-xs ${
                tool.tier === 'Daily Driver'
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                  : tool.tier === 'Proficient'
                    ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                    : tool.tier === 'Experienced'
                      ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                      : 'bg-ghd-surface text-ghd-text-muted border border-ghd-border'
              }`}
            >
              {tool.tier}
            </Badge>
          </div>

          <div className="flex items-center gap-2 text-sm text-ghd-text-muted">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="font-mono">
              {tool.yearsUsed} {tool.yearsUsed === 1 ? 'year' : 'years'} experience
            </span>
          </div>

          {tool.certifications && tool.certifications.length > 0 && (
            <p className="mt-3 text-xs text-amber-400 font-mono">
              ✓ {tool.certifications.join(' · ')}
            </p>
          )}
        </div>
      </Card>

      {/* Hover tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 bottom-full mb-2 z-10 pointer-events-none"
          >
            <Card variant="glass" padding="sm" className="shadow-2xl border border-ghd-border">
              <div className="text-xs font-semibold text-cyan-400 font-mono mb-1">
                REAL-WORLD EXAMPLE
              </div>
              <p className="text-sm text-ghd-text-body">{tool.realWorldExample}</p>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
