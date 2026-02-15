'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'featured', label: 'Featured' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'toolbox', label: 'Toolbox' },
  { id: 'contact', label: 'Contact' },
]

export default function HomeTOC() {
  const [activeId, setActiveId] = useState<string>('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 },
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleClick = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.replaceState(null, '', `#${id}`)
    }
  }

  return (
    <nav
      className="hidden xl:block fixed left-4 2xl:left-8 top-1/2 -translate-y-1/2 z-40"
      aria-label="Page sections"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="bg-gray-900/80 backdrop-blur-lg rounded-xl border border-gray-700/50 shadow-lg p-3"
      >
        <ul className="space-y-1">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => handleClick(id)}
                className={`
                  block w-full text-left text-xs px-3 py-1.5 rounded-lg transition-all duration-200
                  ${
                    activeId === id
                      ? 'bg-cyan-900/30 text-cyan-400 font-semibold'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }
                `}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  )
}
