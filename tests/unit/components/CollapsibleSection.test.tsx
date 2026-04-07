import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CollapsibleSection } from '@/components/homelab/CollapsibleSection'

describe('CollapsibleSection', () => {
  const defaultProps = {
    emoji: '⚙️',
    title: 'Platform Infrastructure',
    hint: 'K8s, Cilium, ArgoCD, Vault...',
    count: 18,
    accentColor: 'violet' as const,
  }

  it('renders title and count badge', () => {
    render(
      <CollapsibleSection {...defaultProps}>
        <div>child content</div>
      </CollapsibleSection>,
    )
    expect(screen.getByText('Platform Infrastructure')).toBeInTheDocument()
    expect(screen.getByText('18 services')).toBeInTheDocument()
  })

  it('renders children in the DOM when collapsed (SSR safety)', () => {
    render(
      <CollapsibleSection {...defaultProps}>
        <div data-testid="child">child content</div>
      </CollapsibleSection>,
    )
    expect(screen.getByTestId('child')).toBeInTheDocument()
  })

  it('starts collapsed by default', () => {
    render(
      <CollapsibleSection {...defaultProps}>
        <div>child content</div>
      </CollapsibleSection>,
    )
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('starts expanded when defaultOpen is true', () => {
    render(
      <CollapsibleSection {...defaultProps} defaultOpen>
        <div>child content</div>
      </CollapsibleSection>,
    )
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('aria-expanded', 'true')
  })

  it('toggles on click', async () => {
    const user = userEvent.setup()
    render(
      <CollapsibleSection {...defaultProps}>
        <div>child content</div>
      </CollapsibleSection>,
    )
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('aria-expanded', 'false')
    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('toggles on Enter key', async () => {
    const user = userEvent.setup()
    render(
      <CollapsibleSection {...defaultProps}>
        <div>child content</div>
      </CollapsibleSection>,
    )
    const button = screen.getByRole('button')
    button.focus()
    await user.keyboard('{Enter}')
    expect(button).toHaveAttribute('aria-expanded', 'true')
  })

  it('toggles on Space key', async () => {
    const user = userEvent.setup()
    render(
      <CollapsibleSection {...defaultProps}>
        <div>child content</div>
      </CollapsibleSection>,
    )
    const button = screen.getByRole('button')
    button.focus()
    await user.keyboard(' ')
    expect(button).toHaveAttribute('aria-expanded', 'true')
  })

  it('has aria-controls linking to content panel', () => {
    render(
      <CollapsibleSection {...defaultProps}>
        <div>child content</div>
      </CollapsibleSection>,
    )
    const button = screen.getByRole('button')
    const controlsId = button.getAttribute('aria-controls')
    expect(controlsId).toBeTruthy()
    expect(document.getElementById(controlsId!)).toBeInTheDocument()
  })

  it('shows hint text and emoji', () => {
    render(
      <CollapsibleSection {...defaultProps}>
        <div>child content</div>
      </CollapsibleSection>,
    )
    expect(screen.getByText('K8s, Cilium, ArgoCD, Vault...')).toBeInTheDocument()
    expect(screen.getByText('⚙️')).toBeInTheDocument()
  })
})
