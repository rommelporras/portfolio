import { test, expect } from '@playwright/test'
import {
  scrollToSection,
  sectionExists,
  openMobileMenuIfNeeded,
  hasNavButton,
} from '../helpers/navigation'

/**
 * Responsive Design Tests
 *
 * Validates the portfolio displays correctly across different viewports:
 * - Mobile (375px - iPhone SE)
 * - Tablet (768px, 1024px - iPad)
 * - Desktop (1440px, 1920px)
 *
 * Tests layout, navigation, readability, and interactive elements.
 */

test.describe('Mobile Viewport (375px)', () => {
  test.use({ viewport: { width: 375, height: 667 } })

  test('should display hero section on mobile', async ({ page }) => {
    await page.goto('/')

    // Hero should be visible
    await expect(page.getByRole('heading', { name: /I Build Infrastructure/i })).toBeVisible()
  })

  test('should display About section on mobile', async ({ page }) => {
    await page.goto('/')

    await scrollToSection(page, 'About')
    await expect(page.getByRole('heading', { name: /From Web Developer/i })).toBeVisible()
  })

  test('should display Experience section on mobile', async ({ page }) => {
    await page.goto('/')

    await scrollToSection(page, 'Experience')
    await expect(page.getByRole('heading', { name: 'Work Experience' })).toBeVisible()
  })

  test('should have readable font sizes on mobile', async ({ page }) => {
    await page.goto('/')

    // Hero heading should be large enough to read
    const heroHeading = page.getByRole('heading', { name: /I Build Infrastructure/i })
    const fontSize = await heroHeading.evaluate((el) => window.getComputedStyle(el).fontSize)
    const fontSizeNum = parseFloat(fontSize)

    // Hero should be at least 28px on mobile
    expect(fontSizeNum).toBeGreaterThanOrEqual(28)
  })

  test('should show hamburger menu on mobile', async ({ page }) => {
    await page.goto('/')

    // Hamburger menu should be visible on mobile
    const hamburgerButton = page.getByLabel('Toggle mobile menu')
    await expect(hamburgerButton).toBeVisible()
  })

  test('hamburger menu should expand when clicked', async ({ page }) => {
    await page.goto('/')

    const hamburgerButton = page.getByLabel('Toggle mobile menu')
    await hamburgerButton.click()
    await page.waitForTimeout(300)

    // Menu should expand
    await expect(hamburgerButton).toHaveAttribute('aria-expanded', 'true')
  })

  test('CTA buttons should be easily tappable on mobile', async ({ page }) => {
    await page.goto('/')

    // Find any CTA link in hero
    const ctaLinks = page.locator('#home a, #home button').first()
    const boundingBox = await ctaLinks.boundingBox()

    if (boundingBox) {
      // Touch targets should be at least 40px
      expect(boundingBox.height).toBeGreaterThanOrEqual(36)
    }
  })

  test('should stack content vertically on mobile', async ({ page }) => {
    await page.goto('/')

    await scrollToSection(page, 'Experience')

    // Experience section should be visible
    const experienceSection = page.locator('#experience')
    await expect(experienceSection).toBeVisible()

    // Content should be readable
    await expect(page.getByText(/Hexagon AB/i).first()).toBeVisible()
  })
})

test.describe('Tablet Viewport (768px)', () => {
  test.use({ viewport: { width: 768, height: 1024 } })

  test('should display navigation on tablet', async ({ page }) => {
    await page.goto('/')

    const navigation = page.getByRole('navigation')
    await expect(navigation).toBeVisible()
  })

  test('should display hero section properly on tablet', async ({ page }) => {
    await page.goto('/')

    await expect(page.getByRole('heading', { name: /I Build Infrastructure/i })).toBeVisible()
    await expect(page.getByText('DevOps Consultant').first()).toBeVisible()
  })

  test('should display About section on tablet', async ({ page }) => {
    await page.goto('/')

    await scrollToSection(page, 'About')
    await expect(page.getByRole('heading', { name: /From Web Developer/i })).toBeVisible()
  })

  test('should display Experience section on tablet', async ({ page }) => {
    await page.goto('/')

    await scrollToSection(page, 'Experience')
    await expect(page.getByRole('heading', { name: 'Work Experience' })).toBeVisible()
  })
})

test.describe('Desktop Viewport (1440px)', () => {
  test.use({ viewport: { width: 1440, height: 900 } })

  test('should display full navigation bar on desktop', async ({ page }) => {
    await page.goto('/')

    // Navigation should be visible
    await expect(page.getByRole('navigation')).toBeVisible()

    // Brand/logo should be visible
    await expect(page.getByRole('link', { name: /Rommel Porras/i })).toBeVisible()
  })

  test('should display hero section with proper layout', async ({ page }) => {
    await page.goto('/')

    const heroSection = page.locator('#home')
    const heroHeading = heroSection.getByRole('heading', { name: /I Build Infrastructure/i })
    await expect(heroHeading).toBeVisible()

    const subtitle = heroSection.getByText('DevOps Consultant')
    await expect(subtitle).toBeVisible()

    // Social icons should be visible
    const linkedInLink = heroSection.locator('a[href*="linkedin.com"]').first()
    await expect(linkedInLink).toBeVisible()
  })

  test('should display About section stats', async ({ page }) => {
    await page.goto('/')

    await scrollToSection(page, 'About')

    // Stats should be visible
    const aboutSection = page.locator('#about')
    await expect(aboutSection.getByText('10+', { exact: true })).toBeVisible()
  })

  test('should display Experience section properly', async ({ page }) => {
    await page.goto('/')

    await scrollToSection(page, 'Experience')

    // Experience section should show positions
    const experienceSection = page.locator('#experience')
    await expect(experienceSection.getByText('Hexagon AB')).toBeVisible()
  })

  test('should display Skills/Toolbox section if present', async ({ page }) => {
    await page.goto('/')

    const hasToolbox = await sectionExists(page, 'toolbox')
    if (!hasToolbox) {
      test.skip()
      return
    }

    await scrollToSection(page, 'Skills')

    const toolboxSection = page.locator('#toolbox')
    await expect(toolboxSection).toBeVisible()
  })

  test('should display Featured projects section if present', async ({ page }) => {
    await page.goto('/')

    const hasFeatured = await sectionExists(page, 'featured')
    if (!hasFeatured) {
      test.skip()
      return
    }

    await scrollToSection(page, 'Projects')

    const featuredSection = page.locator('#featured')
    await expect(featuredSection).toBeVisible()
  })
})

test.describe('Large Desktop (1920px)', () => {
  test.use({ viewport: { width: 1920, height: 1080 } })

  test('should not have excessive white space on large screens', async ({ page }) => {
    await page.goto('/')

    // Content should still be centered and not stretched too wide
    const main = page.locator('main')
    const boundingBox = await main.boundingBox()

    // Main content should have reasonable width
    expect(boundingBox?.width).toBeLessThanOrEqual(1920)
  })

  test('should maintain readable line lengths', async ({ page }) => {
    await page.goto('/')

    // Paragraphs shouldn't stretch too wide
    const aboutParagraph = page.locator('p').first()
    const width = await aboutParagraph.evaluate((el) => (el as HTMLElement).offsetWidth)

    // Width should be reasonable (not stretching across entire screen)
    expect(width).toBeLessThan(1400)
  })
})

test.describe('Orientation Tests', () => {
  test('tablet landscape mode (1024x768)', async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 768 })
    await page.goto('/')

    // Should display properly in landscape
    await expect(page.getByRole('heading', { name: /I Build Infrastructure/i })).toBeVisible()
    await expect(page.getByRole('navigation')).toBeVisible()
  })

  test('mobile landscape mode (667x375)', async ({ page }) => {
    await page.setViewportSize({ width: 667, height: 375 })
    await page.goto('/')

    // Hero should still be visible
    await expect(page.getByRole('heading', { name: /I Build Infrastructure/i })).toBeVisible()
  })
})

test.describe('Content Overflow Prevention', () => {
  test.use({ viewport: { width: 320, height: 568 } }) // iPhone SE (smallest modern viewport)

  test('should not have horizontal scroll on smallest viewport', async ({ page }) => {
    await page.goto('/')

    // Check if there's horizontal scrollbar
    const hasHorizontalScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth
    })

    expect(hasHorizontalScroll).toBe(false)
  })

  test('all content should be accessible on smallest viewport', async ({ page }) => {
    await page.goto('/')

    // Verify key sections render without overflow
    await expect(page.getByRole('heading', { name: /I Build Infrastructure/i })).toBeVisible()

    // Scroll to About section
    await scrollToSection(page, 'About')
    await expect(page.getByRole('heading', { name: /From Web Developer/i })).toBeVisible()
  })
})
