import { test, expect } from '@playwright/test'

/**
 * Smoke Tests for CI Pipeline
 *
 * Minimal tests that verify the site works without testing interactive features.
 * These tests should ALWAYS pass regardless of nav link visibility or feature flags.
 *
 * For full E2E tests, run locally: npx playwright test
 */

test.describe('Smoke Tests', () => {
  test('homepage loads without errors', async ({ page }) => {
    // Collect console errors
    const errors: string[] = []
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text())
      }
    })

    await page.goto('/')

    // Page should load
    await expect(page).toHaveTitle(/Rommel Porras/i)

    // No critical console errors (ignore minor warnings)
    const criticalErrors = errors.filter((e) => !e.includes('Warning:') && !e.includes('DevTools'))
    expect(criticalErrors).toHaveLength(0)
  })

  test('homepage has essential content', async ({ page }) => {
    await page.goto('/')

    // Hero section - visible on initial load
    await expect(page.getByRole('heading', { name: /I Build Infrastructure/i })).toBeVisible()

    // Navigation should exist (header nav, not TOC)
    await expect(page.getByRole('navigation').first()).toBeVisible()

    // Page should have main content area
    const main = page.locator('main')
    await expect(main).toBeVisible()

    // Check key sections exist in DOM (using actual IDs from components)
    await expect(page.locator('#home')).toBeAttached()
    await expect(page.locator('#about')).toBeAttached()
    await expect(page.locator('#experience')).toBeAttached()
  })

  test('homepage has no broken images', async ({ page }) => {
    const brokenImages: string[] = []

    page.on('response', (response) => {
      if (response.request().resourceType() === 'image' && !response.ok()) {
        brokenImages.push(response.url())
      }
    })

    await page.goto('/')
    await page.waitForLoadState('networkidle')

    expect(brokenImages).toHaveLength(0)
  })

  test('homelab page loads', async ({ page }) => {
    const response = await page.goto('/homelab/')
    expect(response?.status()).toBe(200)
  })

  test('no horizontal overflow on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')

    const hasHorizontalScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth
    })

    expect(hasHorizontalScroll).toBe(false)
  })
})

test.describe('SEO & Meta', () => {
  test('has proper meta description', async ({ page }) => {
    await page.goto('/')

    const metaDescription = page.locator('meta[name="description"]')
    await expect(metaDescription).toHaveAttribute('content', /.+/)
  })

  test('has Open Graph tags', async ({ page }) => {
    await page.goto('/')

    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', /.+/)
    await expect(page.locator('meta[property="og:description"]')).toHaveAttribute('content', /.+/)
  })

  test('has proper heading hierarchy', async ({ page }) => {
    await page.goto('/')

    // Should have exactly one h1
    const h1Count = await page.locator('h1').count()
    expect(h1Count).toBe(1)

    // H1 should come before H2s
    const firstH1 = await page.locator('h1').first().boundingBox()
    const firstH2 = await page.locator('h2').first().boundingBox()

    if (firstH1 && firstH2) {
      expect(firstH1.y).toBeLessThan(firstH2.y)
    }
  })
})
