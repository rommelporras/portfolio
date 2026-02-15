'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useCallback } from 'react'

const commands = [
  {
    id: 'home',
    label: 'Home',
    icon: '🏠',
    action: () => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }),
  },
  {
    id: 'about',
    label: 'About',
    icon: '👤',
    action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }),
  },
  {
    id: 'experience',
    label: 'Experience',
    icon: '💼',
    action: () => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }),
  },
  {
    id: 'skills',
    label: 'Skills',
    icon: '⚡',
    action: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }),
  },
  {
    id: 'featured',
    label: 'Featured Work',
    icon: '🚀',
    action: () => document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' }),
  },
  {
    id: 'contact',
    label: 'Contact',
    icon: '📧',
    action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }),
  },
  {
    id: 'email',
    label: 'Copy Email',
    icon: '📋',
    action: () => {
      navigator.clipboard.writeText('hello@rommelporras.com')
      alert('✅ Email copied to clipboard!')
    },
  },
  {
    id: 'linkedin',
    label: 'Open LinkedIn',
    icon: '🔗',
    action: () => window.open('https://linkedin.com/in/rommelporras', '_blank'),
  },
  {
    id: 'github',
    label: 'Open GitHub',
    icon: '💻',
    action: () => window.open('https://github.com/rommelporras', '_blank'),
  },
]

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)

  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(search.toLowerCase()),
  )

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(true)
        setSearch('')
        setSelectedIndex(0)
      }

      if (e.key === 'Escape') {
        setIsOpen(false)
        setSearch('')
      }

      if (isOpen && e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex((prev) => (prev + 1) % filteredCommands.length)
      }
      if (isOpen && e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length)
      }

      if (isOpen && e.key === 'Enter' && filteredCommands[selectedIndex]) {
        e.preventDefault()
        filteredCommands[selectedIndex].action()
        setIsOpen(false)
        setSearch('')
      }
    },
    [isOpen, filteredCommands, selectedIndex],
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-1/4 left-1/2 -translate-x-1/2 w-full max-w-lg z-50 px-4"
          >
            <div className="bg-ghd-surface/95 backdrop-blur-xl border border-ghd-border rounded-2xl shadow-2xl overflow-hidden">
              <div className="flex items-center gap-3 p-4 border-b border-ghd-border">
                <span className="text-ghd-accent-green font-mono font-bold text-lg">&gt;</span>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value)
                    setSelectedIndex(0)
                  }}
                  placeholder="Type a command or search..."
                  className="flex-1 bg-transparent text-ghd-text-primary placeholder-ghd-text-dim outline-none text-lg"
                  autoFocus
                />
                <kbd className="px-2 py-1 bg-ghd-bg border-ghd-border text-ghd-text-muted text-xs rounded border">
                  ESC
                </kbd>
              </div>

              <div className="max-h-96 overflow-y-auto p-2">
                {filteredCommands.length === 0 ? (
                  <div className="text-center py-8 text-ghd-text-muted">No commands found</div>
                ) : (
                  filteredCommands.map((cmd, index) => (
                    <motion.button
                      key={cmd.id}
                      onClick={() => {
                        cmd.action()
                        setIsOpen(false)
                        setSearch('')
                      }}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        index === selectedIndex
                          ? 'bg-cyan-500/10 text-cyan-400'
                          : 'text-ghd-text-body hover:bg-ghd-elevated'
                      }`}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.15 }}
                    >
                      <span className="text-2xl">{cmd.icon}</span>
                      <span className="flex-1 font-medium">{cmd.label}</span>
                      {index === selectedIndex && (
                        <kbd className="px-2 py-1 bg-ghd-surface border-ghd-border text-ghd-text-muted text-xs rounded border">
                          ↵
                        </kbd>
                      )}
                    </motion.button>
                  ))
                )}
              </div>

              <div className="flex items-center justify-between px-4 py-3 bg-ghd-bg/50 border-t border-ghd-border text-xs text-ghd-text-muted">
                <div className="flex items-center gap-2">
                  <kbd className="px-2 py-1 bg-ghd-surface rounded border border-ghd-border">
                    ↑↓
                  </kbd>
                  <span>Navigate</span>
                </div>
                <div className="flex items-center gap-2">
                  <kbd className="px-2 py-1 bg-ghd-surface rounded border border-ghd-border">↵</kbd>
                  <span>Select</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
