'use client'

import { Card } from '@/components/ui/Card'

interface ExperienceFiltersProps {
  filterType: 'all' | 'tech' | 'role' | 'year'
  selectedFilter: string
  allTags: string[]
  allYears: number[]
  totalCount: number
  onFilterChange: (type: 'all' | 'tech' | 'role' | 'year', value: string) => void
}

export default function ExperienceFilters({
  filterType,
  selectedFilter,
  allTags,
  allYears,
  totalCount,
  onFilterChange,
}: ExperienceFiltersProps) {
  const activeClass = 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30'
  const inactiveClass =
    'bg-ghd-surface text-ghd-text-muted border border-ghd-border hover:bg-ghd-elevated hover:text-ghd-text-body'

  return (
    <Card variant="glass" padding="md" className="rounded-xl">
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className="text-sm font-semibold text-ghd-text-muted">Filter by:</span>
        <button
          onClick={() => onFilterChange('all', 'all')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            filterType === 'all' ? activeClass : inactiveClass
          }`}
        >
          All ({totalCount})
        </button>
      </div>

      <div className="mb-4">
        <p className="text-xs font-semibold text-ghd-text-muted mb-2 uppercase">Tech Stack</p>
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => onFilterChange('tech', tag)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                filterType === 'tech' && selectedFilter === tag ? activeClass : inactiveClass
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold text-ghd-text-muted mb-2 uppercase">Year</p>
        <div className="flex flex-wrap gap-2">
          {allYears.map((year) => (
            <button
              key={year}
              onClick={() => onFilterChange('year', year.toString())}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                filterType === 'year' && selectedFilter === year.toString()
                  ? activeClass
                  : inactiveClass
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>
    </Card>
  )
}
