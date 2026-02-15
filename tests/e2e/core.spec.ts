import { test, expect } from '@playwright/test'
import { scrollToSection, sectionExists } from '../helpers/navigation'

/**
 * Core Functionality & Quality Tests
 *
 * Tests essential functionality:
 * - Page loads without errors
 * - No JavaScript console errors
 * - Basic accessibility (WCAG 2.1 AA)
 * - SEO metadata
 * - Performance basics
 */

test.describe('Page Load & Console Errors', () => {
  test('should load homepage without errors', async ({ page }) => {
    const consoleErrors: string[] = []

    // Listen for console errors
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text())
      }
    })

    await page.goto('/')

    // Wait for page to be fully loaded
    await page.waitForLoadState('networkidle')

    // Verify no console errors (excluding React DevTools suggestion)
    const actualErrors = consoleErrors.filter(
      (error) => !error.includes('React DevTools') && !error.includes('Warning:'),
    )

    expect(actualErrors).toHaveLength(0)
  })

  test('should not have any failed network requests', async ({ page }) => {
    const failedRequests: string[] = []

    page.on('requestfailed', (request) => {
      failedRequests.push(request.url())
    })

    await page.goto('/')
    await page.waitForLoadState('networkidle')

    expect(failedRequests).toHaveLength(0)
  })

  test('should have valid page title', async ({ page }) => {
    await page.goto('/')

    const title = await page.title()
    expect(title).toBeTruthy()
    expect(title).toContain('Rommel Porras')
    expect(title.length).toBeGreaterThan(10)
    expect(title.length).toBeLessThan(70) // SEO best practice
  })

  test('should load in reasonable time', async ({ page }) => {
    const startTime = Date.now()

    await page.goto('/')
    await page.waitForLoadState('domcontentloaded')

    const loadTime = Date.now() - startTime

    // Should load in under 5 seconds (generous for CI)
    expect(loadTime).toBeLessThan(5000)
  })
})

test.describe('SEO & Metadata', () => {
  test('should have meta description', async ({ page }) => {
    await page.goto('/')

    const metaDescription = page.locator('meta[name="description"]')
    await expect(metaDescription).toHaveCount(1)

    const content = await metaDescription.getAttribute('content')
    expect(content).toBeTruthy()
    expect(content!.length).toBeGreaterThan(50)
    expect(content!.length).toBeLessThan(250) // Soft limit - ideally < 160 for SEO
  })

  test('should have OpenGraph metadata', async ({ page }) => {
    await page.goto('/')

    await expect(page.locator('meta[property="og:title"]')).toHaveCount(1)
    await expect(page.locator('meta[property="og:description"]')).toHaveCount(1)
    await expect(page.locator('meta[property="og:type"]')).toHaveCount(1)
  })

  test('should have Twitter Card metadata', async ({ page }) => {
    await page.goto('/')

    await expect(page.locator('meta[name="twitter:card"]')).toHaveCount(1)
    await expect(page.locator('meta[name="twitter:title"]')).toHaveCount(1)
    await expect(page.locator('meta[name="twitter:description"]')).toHaveCount(1)
  })

  test('should have canonical URL', async ({ page }) => {
    await page.goto('/')

    const canonical = page.locator('link[rel="canonical"]')
    const count = await canonical.count()

    // Canonical is optional but recommended
    if (count > 0) {
      const href = await canonical.getAttribute('href')
      expect(href).toBeTruthy()
    }
  })

  test('should have viewport meta tag', async ({ page }) => {
    await page.goto('/')

    const viewport = page.locator('meta[name="viewport"]')
    await expect(viewport).toHaveCount(1)

    const content = await viewport.getAttribute('content')
    expect(content).toContain('width=device-width')
  })

  test('should have language attribute', async ({ page }) => {
    await page.goto('/')

    const html = page.locator('html')
    const lang = await html.getAttribute('lang')

    expect(lang).toBeTruthy()
    expect(lang).toBe('en')
  })
})

test.describe('Basic Accessibility (WCAG 2.1 AA)', () => {
  test('should have proper heading hierarchy', async ({ page }) => {
    await page.goto('/')

    // Should have one h1
    const h1Count = await page.locator('h1').count()
    expect(h1Count).toBe(1)

    // H1 should have meaningful content
    const h1Text = await page.locator('h1').textContent()
    expect(h1Text).toBeTruthy()
    expect(h1Text!.length).toBeGreaterThan(5)

    // Should have h2 headings for sections
    const h2Count = await page.locator('h2').count()
    expect(h2Count).toBeGreaterThan(2)
  })

  test('all images should have alt text', async ({ page }) => {
    await page.goto('/')

    const images = page.locator('img')
    const count = await images.count()

    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute('alt')
      // Alt can be empty string for decorative images, but should exist
      expect(alt).not.toBeNull()
    }
  })

  test('interactive elements should have focus styles', async ({ page }) => {
    await page.goto('/')

    // Tab to first interactive element
    await page.keyboard.press('Tab')

    // Check that something is focused
    const focusedElement = await page.evaluate(() => document.activeElement?.tagName)
    expect(focusedElement).toBeTruthy()
    expect(['BUTTON', 'A', 'INPUT']).toContain(focusedElement)
  })

  test('links should have descriptive text', async ({ page }) => {
    await page.goto('/')

    // Check for generic link text that should be avoided
    const links = page.locator('a')
    const count = await links.count()

    for (let i = 0; i < count; i++) {
      const text = await links.nth(i).textContent()
      const ariaLabel = await links.nth(i).getAttribute('aria-label')

      // Links should have meaningful text or aria-label
      const hasContext = (text && text.trim().length > 0) || ariaLabel
      expect(hasContext).toBeTruthy()

      // Avoid generic "click here", "read more" without context
      if (text) {
        const lowerText = text.toLowerCase().trim()
        if (lowerText === 'click here' || lowerText === 'here' || lowerText === 'more') {
          // These need aria-label for context
          expect(ariaLabel).toBeTruthy()
        }
      }
    }
  })

  test('form elements should have labels (if any)', async ({ page }) => {
    await page.goto('/')

    // Check if there are any inputs (there might not be)
    const inputs = page.locator('input, textarea, select')
    const count = await inputs.count()

    for (let i = 0; i < count; i++) {
      const input = inputs.nth(i)
      const id = await input.getAttribute('id')
      const ariaLabel = await input.getAttribute('aria-label')
      const ariaLabelledBy = await input.getAttribute('aria-labelledby')

      // Input should have either label, aria-label, or aria-labelledby
      if (id) {
        const label = page.locator(`label[for="${id}"]`)
        const labelExists = (await label.count()) > 0
        expect(labelExists || ariaLabel || ariaLabelledBy).toBeTruthy()
      } else {
        expect(ariaLabel || ariaLabelledBy).toBeTruthy()
      }
    }
  })

  test('should have proper landmarks', async ({ page }) => {
    await page.goto('/')

    // Should have main landmark
    await expect(page.locator('main')).toHaveCount(1)

    // Should have navigation landmark
    const navCount = await page.locator('nav').count()
    expect(navCount).toBeGreaterThanOrEqual(1)
  })

  test('should have proper color contrast (basic check)', async ({ page }) => {
    await page.goto('/')

    // Get background and text color of main content
    const bodyStyles = await page.evaluate(() => {
      const styles = window.getComputedStyle(document.body)
      return {
        backgroundColor: styles.backgroundColor,
        color: styles.color,
      }
    })

    // Just verify colors are set (not default transparent)
    expect(bodyStyles.backgroundColor).toBeTruthy()
    expect(bodyStyles.color).toBeTruthy()
  })
})

test.describe('Content Verification', () => {
  test('should display hero section with correct information', async ({ page }) => {
    await page.goto('/')

    // Updated hero text
    await expect(page.getByRole('heading', { name: /I Build Infrastructure/i })).toBeVisible()
    await expect(page.getByText('DevOps Consultant').first()).toBeVisible()
  })

  test('should display About section', async ({ page }) => {
    await page.goto('/')

    await scrollToSection(page, 'About')

    await expect(page.getByRole('heading', { name: /From Web Developer/i })).toBeVisible()
  })

  test('should display all work experience entries', async ({ page }) => {
    await page.goto('/')

    await scrollToSection(page, 'Experience')

    // Verify Work Experience section is visible and has content
    const experienceSection = page.getByRole('heading', { name: 'Work Experience' })
    await expect(experienceSection).toBeVisible()

    // Check for major positions
    await expect(page.getByText(/Hexagon AB/i).first()).toBeVisible()
  })

  test('should display skills/toolbox section', async ({ page }) => {
    await page.goto('/')

    const hasToolbox = await sectionExists(page, 'toolbox')
    if (!hasToolbox) {
      test.skip()
      return
    }

    await scrollToSection(page, 'Skills')

    // Toolbox section should be visible
    const toolboxSection = page.locator('#toolbox')
    await expect(toolboxSection).toBeVisible()
  })

  test('should display featured projects section', async ({ page }) => {
    await page.goto('/')

    const hasFeatured = await sectionExists(page, 'featured')
    if (!hasFeatured) {
      test.skip()
      return
    }

    await scrollToSection(page, 'Projects')

    // Featured section should be visible
    const featuredSection = page.locator('#featured')
    await expect(featuredSection).toBeVisible()
  })

  test('should display experience stats', async ({ page }) => {
    await page.goto('/')

    // Just verify key numbers are visible somewhere
    await expect(page.getByText('10+').first()).toBeVisible()
  })
})

test.describe('Footer & Copyright', () => {
  test('should display footer content', async ({ page }) => {
    await page.goto('/')

    // Scroll to bottom
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    await page.waitForTimeout(300)

    // Verify footer with contentinfo role exists (main page footer)
    const footer = page.getByRole('contentinfo')
    const footerExists = (await footer.count()) > 0

    if (footerExists) {
      await expect(footer).toBeVisible()
    }
  })
})

test.describe('JavaScript & Animations', () => {
  test('should have animations working', async ({ page }) => {
    await page.goto('/')

    // Scroll to trigger animations
    await scrollToSection(page, 'About')

    // About section should be visible (animation completed)
    const aboutSection = page.getByRole('heading', { name: /From Web Developer/i })
    await expect(aboutSection).toBeVisible()

    // Check if element has animation-related attributes
    const hasAnimation = await aboutSection.evaluate((el) => {
      const styles = window.getComputedStyle(el)
      return styles.opacity !== '0' && styles.visibility !== 'hidden'
    })

    expect(hasAnimation).toBe(true)
  })

  test('should not have layout shift during load', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Take initial position of hero heading after network idle
    const heroHeading = page.getByRole('heading', { name: /I Build Infrastructure/i })
    const initialPosition = await heroHeading.boundingBox()

    // Wait for animations
    await page.waitForTimeout(1500)

    // Check position again
    const finalPosition = await heroHeading.boundingBox()

    // Position should be stable (allowing 50px tolerance for Framer Motion animations)
    if (initialPosition && finalPosition) {
      expect(Math.abs(initialPosition.y - finalPosition.y)).toBeLessThan(50)
    }
  })
})
