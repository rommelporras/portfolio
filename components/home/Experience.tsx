'use client'

import { motion } from 'framer-motion'
import { useState, useMemo } from 'react'
import { experiences } from '@/data/experience'
import { Card } from '@/components/ui/Card'
import ExperienceFilters from '@/components/home/ExperienceFilters'
import ExperienceCard from '@/components/home/ExperienceCard'

const Experience = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all')
  const [filterType, setFilterType] = useState<'all' | 'tech' | 'role' | 'year'>('all')

  const allTags = useMemo(() => {
    const tags = new Set<string>()
    experiences.forEach((exp) => exp.tags.forEach((tag) => tags.add(tag)))
    return Array.from(tags).sort()
  }, [])

  const allYears = useMemo(() => {
    return Array.from(new Set(experiences.map((exp) => exp.year)))
      .sort()
      .reverse()
  }, [])

  const filteredExperiences = useMemo(() => {
    if (filterType === 'all' || selectedFilter === 'all') {
      return experiences
    }

    if (filterType === 'tech') {
      return experiences.filter((exp) => exp.tags.includes(selectedFilter))
    }

    if (filterType === 'year') {
      return experiences.filter((exp) => exp.year.toString() === selectedFilter)
    }

    if (filterType === 'role') {
      return experiences.filter((exp) =>
        exp.role.toLowerCase().includes(selectedFilter.toLowerCase()),
      )
    }

    return experiences
  }, [selectedFilter, filterType])

  const handleFilterChange = (type: 'all' | 'tech' | 'role' | 'year', value: string) => {
    setFilterType(type)
    setSelectedFilter(value)
  }

  return (
    <section id="experience" className="py-24 bg-ghd-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-2">
            <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-ghd-accent-green">
              WORK EXPERIENCE
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-ghd-text-primary font-mono mb-8">
            Work Experience
          </h2>

          <div className="max-w-4xl mx-auto mb-8">
            <ExperienceFilters
              filterType={filterType}
              selectedFilter={selectedFilter}
              allTags={allTags}
              allYears={allYears}
              totalCount={experiences.length}
              onFilterChange={handleFilterChange}
            />
          </div>

          <div className="max-w-6xl mx-auto">
            {filteredExperiences.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-ghd-text-muted">No experiences found matching your filter.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredExperiences.map((exp, index) => (
                  <ExperienceCard key={index} experience={exp} index={index} />
                ))}
              </div>
            )}
          </div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-6xl mx-auto mt-12"
          >
            <h3 className="text-3xl font-bold text-ghd-text-primary font-mono mb-6">Education</h3>
            <Card variant="elevated" padding="md" hover="lift" className="rounded-xl">
              <h4 className="text-xl font-bold text-ghd-text-primary mb-2">
                Bachelor of Science in Information Technology
              </h4>
              <p className="text-lg text-ghd-text-primary font-semibold mb-1">
                STI College Southwoods
              </p>
              <p className="font-mono text-sm text-cyan-500/70">
                Carmona, Cavite &bull; June 2010 - March 2014
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
