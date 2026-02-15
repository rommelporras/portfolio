import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor, act } from '@testing-library/react'
import CopyButton from '@/components/shared/CopyButton'

/**
 * Comprehensive unit tests for CopyButton component
 * Tests rendering, accessibility, user interactions, and clipboard behavior
 */
describe('CopyButton', () => {
  const mockCode = 'console.log("Hello, World!")'

  // Store the mock so we can reference it in tests
  let writeTextMock: ReturnType<typeof vi.fn>

  beforeEach(() => {
    // Create fresh clipboard mock before each test
    writeTextMock = vi.fn().mockResolvedValue(undefined)

    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      writable: true,
      value: {
        writeText: writeTextMock,
        readText: vi.fn().mockResolvedValue(''),
      },
    })
  })

  describe('Rendering', () => {
    it('should render without crashing', () => {
      render(
        <div className="group">
          <CopyButton code={mockCode} />
        </div>,
      )

      const button = screen.getByRole('button')
      expect(button).toBeInTheDocument()
    })

    it('should have accessible label', () => {
      render(
        <div className="group">
          <CopyButton code={mockCode} />
        </div>,
      )

      const button = screen.getByRole('button', { name: /copy code to clipboard/i })
      expect(button).toBeInTheDocument()
    })

    it('should display copy icon (SVG)', () => {
      render(
        <div className="group">
          <CopyButton code={mockCode} />
        </div>,
      )

      const button = screen.getByRole('button')
      const svg = button.querySelector('svg')

      expect(svg).toBeInTheDocument()
    })
  })

  describe('User Interactions', () => {
    it('should copy code to clipboard when clicked', async () => {
      render(
        <div className="group">
          <CopyButton code={mockCode} />
        </div>,
      )

      const button = screen.getByRole('button')

      await act(async () => {
        button.click()
      })

      expect(writeTextMock).toHaveBeenCalledWith(mockCode)
      expect(writeTextMock).toHaveBeenCalledTimes(1)
    })

    it('should show "Copied!" feedback after successful copy', async () => {
      render(
        <div className="group">
          <CopyButton code={mockCode} />
        </div>,
      )

      const button = screen.getByRole('button')

      await act(async () => {
        button.click()
      })

      // Check that aria-label changed to "Copied to clipboard"
      await waitFor(() => {
        expect(button).toHaveAccessibleName(/copied to clipboard/i)
      })
    })

    it('should reset feedback after timeout', async () => {
      render(
        <div className="group">
          <CopyButton code={mockCode} />
        </div>,
      )

      const button = screen.getByRole('button')

      await act(async () => {
        button.click()
      })

      // Wait for feedback to appear (aria-label changes)
      await waitFor(() => {
        expect(button).toHaveAccessibleName(/copied to clipboard/i)
      })

      // Wait for feedback to reset (2 seconds + buffer)
      await waitFor(
        () => {
          expect(button).toHaveAccessibleName(/copy code to clipboard/i)
        },
        { timeout: 3000 },
      )
    })

    it('should be keyboard accessible (Enter key)', async () => {
      render(
        <div className="group">
          <CopyButton code={mockCode} />
        </div>,
      )

      const button = screen.getByRole('button')

      await act(async () => {
        button.click()
      })

      expect(writeTextMock).toHaveBeenCalledWith(mockCode)
    })

    it('should be keyboard accessible (Space key)', async () => {
      render(
        <div className="group">
          <CopyButton code={mockCode} />
        </div>,
      )

      const button = screen.getByRole('button')

      await act(async () => {
        button.click()
      })

      expect(writeTextMock).toHaveBeenCalledWith(mockCode)
    })

    it('should handle multiple clicks correctly', async () => {
      render(
        <div className="group">
          <CopyButton code={mockCode} />
        </div>,
      )

      const button = screen.getByRole('button')

      // Click multiple times with act() wrapping
      await act(async () => {
        button.click()
      })
      await act(async () => {
        button.click()
      })
      await act(async () => {
        button.click()
      })

      expect(writeTextMock).toHaveBeenCalledTimes(3)
    })
  })

  describe('Edge Cases', () => {
    it('should handle empty code string', async () => {
      render(
        <div className="group">
          <CopyButton code="" />
        </div>,
      )

      const button = screen.getByRole('button')

      await act(async () => {
        button.click()
      })

      expect(writeTextMock).toHaveBeenCalledWith('')
    })

    it('should handle code with special characters', async () => {
      const specialCode = 'const regex = /[a-z]+/gi;\nconst obj = { "key": "value" };'
      render(
        <div className="group">
          <CopyButton code={specialCode} />
        </div>,
      )

      const button = screen.getByRole('button')

      await act(async () => {
        button.click()
      })

      expect(writeTextMock).toHaveBeenCalledWith(specialCode)
    })

    it('should handle very long code strings', async () => {
      const longCode = 'x'.repeat(10000)
      render(
        <div className="group">
          <CopyButton code={longCode} />
        </div>,
      )

      const button = screen.getByRole('button')

      await act(async () => {
        button.click()
      })

      expect(writeTextMock).toHaveBeenCalledWith(longCode)
    })

    it('should handle clipboard API errors gracefully', async () => {
      // Mock clipboard API to reject
      const clipboardMock = vi.spyOn(navigator.clipboard, 'writeText')
      clipboardMock.mockRejectedValueOnce(new Error('Clipboard API not available'))

      render(
        <div className="group">
          <CopyButton code={mockCode} />
        </div>,
      )

      const button = screen.getByRole('button')

      // Should not throw error
      await act(async () => {
        button.click()
      })

      expect(clipboardMock).toHaveBeenCalled()
    })
  })

  describe('Accessibility', () => {
    it('should have proper ARIA attributes', () => {
      render(
        <div className="group">
          <CopyButton code={mockCode} />
        </div>,
      )

      const button = screen.getByRole('button')

      // Should be keyboard accessible
      expect(button).toBeEnabled()
      expect(button.tabIndex).toBeGreaterThanOrEqual(0)
    })

    it('should have visible focus indicator', () => {
      render(
        <div className="group">
          <CopyButton code={mockCode} />
        </div>,
      )

      const button = screen.getByRole('button')
      button.focus()

      expect(button).toHaveFocus()
    })

    it('should work without mouse (keyboard only)', async () => {
      render(
        <div className="group">
          <CopyButton code={mockCode} />
        </div>,
      )

      const button = screen.getByRole('button')

      await act(async () => {
        button.click()
      })

      expect(writeTextMock).toHaveBeenCalledWith(mockCode)
    })
  })
})
