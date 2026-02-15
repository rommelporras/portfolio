'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { toolbox, categories } from '@/data/toolbox'
import CertificationBadges from './CertificationBadges'
import ToolCard from './ToolCard'
import { Card } from '@/components/ui/Card'

export default function Toolbox() {
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const filteredTools =
    activeCategory === 'All' ? toolbox : toolbox.filter((tool) => tool.category === activeCategory)

  return (
    <section id="toolbox" className="py-24 bg-ghd-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-ghd-accent-green">
            MY TOOLBOX
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-ghd-text-primary mt-3 mb-4">
            My Toolbox
          </h2>
          <p className="text-lg text-ghd-text-body max-w-3xl mx-auto">
            10+ years of hands-on experience with industry-leading DevOps tools. Each tool backed by
            real-world production deployments.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium font-mono transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 shadow-lg scale-105'
                  : 'bg-ghd-surface text-ghd-text-muted border border-ghd-border hover:bg-ghd-elevated hover:text-ghd-text-body'
              }`}
            >
              {category}
              {category !== 'All' && (
                <span className="ml-2 text-sm opacity-75">
                  ({toolbox.filter((t) => t.category === category).length})
                </span>
              )}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.name} tool={tool} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card variant="glass" padding="md" className="text-center">
            <div className="font-mono text-3xl font-bold text-cyan-400 mb-2">{toolbox.length}</div>
            <div className="text-sm text-ghd-text-muted font-mono">Production Tools</div>
          </Card>
          <Card variant="glass" padding="md" className="text-center">
            <div className="font-mono text-3xl font-bold text-cyan-400 mb-2">10+</div>
            <div className="text-sm text-ghd-text-muted font-mono">Years Experience</div>
          </Card>
          <Card variant="glass" padding="md" className="text-center">
            <div className="font-mono text-3xl font-bold text-cyan-400 mb-2">3x</div>
            <div className="text-sm text-ghd-text-muted font-mono">AWS Certified</div>
          </Card>
          <Card variant="glass" padding="md" className="text-center">
            <div className="font-mono text-3xl font-bold text-cyan-400 mb-2">30+</div>
            <div className="text-sm text-ghd-text-muted font-mono">Pipelines Built</div>
          </Card>
        </div>

        <CertificationBadges />
      </div>
    </section>
  )
}
