'use client'

import { useState, useId, useCallback } from 'react'
import { motion } from 'framer-motion'

const SECTION_COLORS = {
  violet: { badge: 'bg-violet-900/30 text-violet-400', hover: 'hover:bg-violet-900/10' },
  cyan: { badge: 'bg-cyan-900/30 text-cyan-400', hover: 'hover:bg-cyan-900/10' },
  emerald: { badge: 'bg-emerald-900/30 text-emerald-400', hover: 'hover:bg-emerald-900/10' },
  orange: { badge: 'bg-orange-900/30 text-orange-400', hover: 'hover:bg-orange-900/10' },
  sky: { badge: 'bg-sky-900/30 text-sky-400', hover: 'hover:bg-sky-900/10' },
  rose: { badge: 'bg-rose-900/30 text-rose-400', hover: 'hover:bg-rose-900/10' },
  amber: { badge: 'bg-amber-900/30 text-amber-400', hover: 'hover:bg-amber-900/10' },
  slate: { badge: 'bg-slate-900/30 text-slate-400', hover: 'hover:bg-slate-900/10' },
} as const

interface CollapsibleSectionProps {
  emoji: string
  title: string
  hint: string
  count: number
  accentColor: keyof typeof SECTION_COLORS
  defaultOpen?: boolean
  children: React.ReactNode
}

const EXPAND_TRANSITION = { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }
const COLLAPSE_TRANSITION = { duration: 0.2, ease: [0.22, 1, 0.36, 1] as const }

export function CollapsibleSection({
  emoji,
  title,
  hint,
  count,
  accentColor,
  defaultOpen = false,
  children,
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const id = useId()
  const contentId = `section-${id}`
  const colors = SECTION_COLORS[accentColor]

  const toggle = useCallback(() => setIsOpen((prev) => !prev), [])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        toggle()
      }
    },
    [toggle],
  )

  return (
    <div className="mb-8">
      <div
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={toggle}
        onKeyDown={handleKeyDown}
        className={`flex items-center justify-between gap-4 min-h-[44px] px-4 py-3 rounded-lg border border-ghd-border bg-ghd-surface cursor-pointer transition-colors duration-150 ${colors.hover} focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:outline-none`}
      >
        <div className="flex items-center gap-3 min-w-0">
          <span className="text-2xl shrink-0">{emoji}</span>
          <h3 className="text-xl font-bold text-ghd-text-primary mb-0">{title}</h3>
          <span className={`text-xs font-mono px-2 py-0.5 rounded-full shrink-0 ${colors.badge}`}>
            {count} {count === 1 ? 'service' : 'services'}
          </span>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-sm text-ghd-text-muted hidden md:block">{hint}</span>
          <motion.svg
            className="w-5 h-5 text-ghd-text-muted shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={isOpen ? EXPAND_TRANSITION : COLLAPSE_TRANSITION}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </motion.svg>
        </div>
      </div>

      <motion.div
        id={contentId}
        role="region"
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={isOpen ? EXPAND_TRANSITION : COLLAPSE_TRANSITION}
        className="overflow-hidden"
      >
        <div className="pt-4">{children}</div>
      </motion.div>
    </div>
  )
}
