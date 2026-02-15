import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import CopyButton from '@/components/shared/CopyButton'

/**
 * Simple unit tests for CopyButton component
 * Basic smoke tests to verify Vitest setup is working
 */
describe('CopyButton - Simple Tests', () => {
  const mockCode = 'console.log("Hello, World!")'

  it('should render without crashing', () => {
    render(<CopyButton code={mockCode} />)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('should have accessible label', () => {
    render(<CopyButton code={mockCode} />)

    const button = screen.getByRole('button', { name: /copy code to clipboard/i })
    expect(button).toBeInTheDocument()
  })

  it('should render a button element', () => {
    render(<CopyButton code={mockCode} />)

    const button = screen.getByRole('button')
    expect(button.tagName).toBe('BUTTON')
  })

  it('should display copy icon (SVG)', () => {
    render(<CopyButton code={mockCode} />)

    const button = screen.getByRole('button')
    const svg = button.querySelector('svg')

    expect(svg).toBeInTheDocument()
  })

  it('should receive code prop', () => {
    const testCode = 'test code'
    render(<CopyButton code={testCode} />)

    // Component should render (indirectly confirms prop is received)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })
})
