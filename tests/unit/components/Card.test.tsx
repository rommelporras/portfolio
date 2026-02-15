import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Card } from '@/components/ui/Card'
import { createRef } from 'react'

describe('Card', () => {
  it('renders children', () => {
    render(<Card>Content</Card>)
    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('applies default variant classes', () => {
    render(<Card data-testid="card">Content</Card>)
    const card = screen.getByTestId('card')
    expect(card).toHaveClass('bg-ghd-surface')
  })

  it('applies glass variant', () => {
    render(
      <Card variant="glass" data-testid="card">
        Glass
      </Card>,
    )
    expect(screen.getByTestId('card')).toHaveClass('backdrop-blur-xl')
  })

  it('applies elevated variant', () => {
    render(
      <Card variant="elevated" data-testid="card">
        Elevated
      </Card>,
    )
    expect(screen.getByTestId('card')).toHaveClass('shadow-xl')
  })

  it('applies hover lift variant', () => {
    render(
      <Card hover="lift" data-testid="card">
        Lift
      </Card>,
    )
    expect(screen.getByTestId('card')).toHaveClass('hover:-translate-y-2')
  })

  it('applies hover glow variant', () => {
    render(
      <Card hover="glow" data-testid="card">
        Glow
      </Card>,
    )
    expect(screen.getByTestId('card')).toHaveClass('hover:border-cyan-500/30')
  })

  it('applies padding variant', () => {
    render(
      <Card padding="lg" data-testid="card">
        Large
      </Card>,
    )
    expect(screen.getByTestId('card')).toHaveClass('p-8')
  })

  it('applies default padding of md', () => {
    render(<Card data-testid="card">Default Padding</Card>)
    expect(screen.getByTestId('card')).toHaveClass('p-6')
  })

  it('forwards ref', () => {
    const ref = createRef<HTMLDivElement>()
    render(<Card ref={ref}>Ref</Card>)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('merges custom className', () => {
    render(
      <Card className="custom" data-testid="card">
        Custom
      </Card>,
    )
    expect(screen.getByTestId('card')).toHaveClass('custom')
  })

  it('spreads additional props', () => {
    render(<Card data-testid="test-card">Props</Card>)
    expect(screen.getByTestId('test-card')).toBeInTheDocument()
  })
})
