import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Badge } from '@/components/ui/Badge'
import { createRef } from 'react'

describe('Badge', () => {
  it('renders with default variant', () => {
    render(<Badge>Default</Badge>)
    expect(screen.getByText('Default')).toBeInTheDocument()
  })

  it('renders with specified variant', () => {
    render(<Badge variant="primary">Primary</Badge>)
    const badge = screen.getByText('Primary')
    expect(badge).toHaveClass('bg-cyan-600')
  })

  it('forwards ref', () => {
    const ref = createRef<HTMLDivElement>()
    render(<Badge ref={ref}>With Ref</Badge>)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('merges custom className', () => {
    render(<Badge className="custom-class">Custom</Badge>)
    expect(screen.getByText('Custom')).toHaveClass('custom-class')
  })

  it('spreads additional props', () => {
    render(<Badge data-testid="test-badge">Props</Badge>)
    expect(screen.getByTestId('test-badge')).toBeInTheDocument()
  })
})
