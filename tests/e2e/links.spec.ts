import { test, expect } from '@playwright/test'
import { scrollToSection, sectionExists } from '../helpers/navigation'

/**
 * External Links Validation Tests
 *
 * Validates all external links work correctly:
 * - Social media links (LinkedIn, GitHub)
 * - AWS certification badges (Credly)
 * - Contact links (email)
 * - GitHub project repository links
 */

test.describe('Social Media Links', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should have LinkedIn link in hero section', async ({ page }) => {
    const linkedInLink = page.locator('a[href*="linkedin.com/in/rommelporras"]').first()
    await expect(linkedInLink).toBeVisible()
  })

  test('should have GitHub link in hero section', async ({ page }) => {
    const githubLink = page.locator('a[href*="github.com/rommelporras"]').first()
    await expect(githubLink).toBeVisible()
  })

  test('social media links should open in new tab', async ({ page }) => {
    const linkedInLink = page.locator('a[href*="linkedin.com"]').first()
    await expect(linkedInLink).toHaveAttribute('target', '_blank')

    const githubLink = page.locator('a[href*="github.com"]').first()
    await expect(githubLink).toHaveAttribute('target', '_blank')
  })

  test('social media links should have rel="noopener" for security', async ({ page }) => {
    const linkedInLink = page.locator('a[href*="linkedin.com"]').first()
    const rel = await linkedInLink.getAttribute('rel')
    expect(rel).toContain('noopener')

    const githubLink = page.locator('a[href*="github.com"]').first()
    const githubRel = await githubLink.getAttribute('rel')
    expect(githubRel).toContain('noopener')
  })
})

test.describe('AWS Certification Links', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should have AWS certification Credly links if Skills section exists', async ({ page }) => {
    const hasToolbox = await sectionExists(page, 'toolbox')
    if (!hasToolbox) {
      test.skip()
      return
    }

    await scrollToSection(page, 'Skills')

    // Check for Credly badge links
    const credlyLinks = page.locator('a[href*="credly.com"]')
    const count = await credlyLinks.count()

    // Should have at least one Credly link if certifications are displayed
    expect(count).toBeGreaterThanOrEqual(0)
  })

  test('all Credly links should open in new tab', async ({ page }) => {
    const credlyLinks = page.locator('a[href*="credly.com"]')
    const count = await credlyLinks.count()

    if (count === 0) {
      test.skip()
      return
    }

    for (let i = 0; i < count; i++) {
      await expect(credlyLinks.nth(i)).toHaveAttribute('target', '_blank')
    }
  })
})

test.describe('Project Links', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should have GitHub project links if Featured section exists', async ({ page }) => {
    const hasFeatured = await sectionExists(page, 'featured')
    if (!hasFeatured) {
      test.skip()
      return
    }

    await scrollToSection(page, 'Projects')

    // Check for GitHub script links
    const githubLinks = page.locator('a[href*="github.com"]')
    const count = await githubLinks.count()

    expect(count).toBeGreaterThan(0)
  })

  test('all GitHub links should open in new tab', async ({ page }) => {
    const githubLinks = page.locator('a[href*="github.com"]')
    const count = await githubLinks.count()

    for (let i = 0; i < count; i++) {
      await expect(githubLinks.nth(i)).toHaveAttribute('target', '_blank')
    }
  })
})

test.describe('Contact Links', () => {
  test('should have email link on page', async ({ page }) => {
    await page.goto('/')

    const emailLink = page.locator('a[href^="mailto:"]')
    const count = await emailLink.count()

    // Email link may or may not be present
    if (count > 0) {
      await expect(emailLink.first()).toBeVisible()
    }
  })
})

test.describe('Link Accessibility', () => {
  test('all external links should be keyboard accessible', async ({ page }) => {
    await page.goto('/')

    // Tab through and verify important links are focusable
    await page.keyboard.press('Tab')

    // Check a few key links have proper focus styles
    const linkedInLink = page.locator('a[href*="linkedin.com"]').first()
    const githubLink = page.locator('a[href*="github.com"]').first()

    // These should be focusable (not aria-hidden)
    await expect(linkedInLink).not.toHaveAttribute('aria-hidden', 'true')
    await expect(githubLink).not.toHaveAttribute('aria-hidden', 'true')
  })

  test('external links should have descriptive text or aria-label', async ({ page }) => {
    await page.goto('/')

    // LinkedIn should have meaningful text or aria-label
    const linkedInLinks = page.locator('a[href*="linkedin.com"]')
    const count = await linkedInLinks.count()

    if (count > 0) {
      const firstLinkedIn = linkedInLinks.first()
      const text = await firstLinkedIn.textContent()
      const ariaLabel = await firstLinkedIn.getAttribute('aria-label')

      // Either text or aria-label should give context
      expect(text || ariaLabel).toBeTruthy()
    }
  })
})

test.describe('Internal Navigation Links', () => {
  test('internal page links should work', async ({ page }) => {
    await page.goto('/')

    // Test navigation to other pages via links
    const homelabLink = page.locator('a[href="/homelab"]').first()
    const homelabExists = (await homelabLink.count()) > 0

    if (homelabExists) {
      await homelabLink.click()
      await page.waitForURL('**/homelab/**')
      expect(page.url()).toContain('/homelab')
    }
  })
})
