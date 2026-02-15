import { Page } from '@playwright/test'

/**
 * Section ID mapping - maps logical section names to actual DOM IDs
 * This allows tests to use semantic names while adapting to implementation
 */
const SECTION_IDS: Record<string, string> = {
  home: 'home',
  about: 'about',
  experience: 'experience',
  skills: 'toolbox', // Skills section is implemented as #toolbox
  toolbox: 'toolbox',
  projects: 'featured', // Projects section is implemented as #featured
  featured: 'featured',
  contact: 'contact', // May not exist - handled gracefully
}

/**
 * Helper function to open the mobile hamburger menu if on a mobile viewport
 * @param page - Playwright page object
 */
export async function openMobileMenuIfNeeded(page: Page): Promise<boolean> {
  const viewport = page.viewportSize()
  const isMobile = viewport && viewport.width < 1024 // lg breakpoint

  if (isMobile) {
    // Check if hamburger menu button is visible
    const hamburgerButton = page.getByLabel('Toggle mobile menu')
    const isVisible = await hamburgerButton.isVisible().catch(() => false)

    if (isVisible) {
      // Check if menu is already open
      const ariaExpanded = await hamburgerButton.getAttribute('aria-expanded')

      if (ariaExpanded !== 'true') {
        await hamburgerButton.click()
        // Wait for mobile menu animation
        await page.waitForTimeout(300)
        return true
      }
    }
  }
  return false
}

/**
 * Scroll directly to a section by its ID
 * This is the primary navigation method - doesn't depend on nav button visibility
 * @param page - Playwright page object
 * @param sectionId - Section ID (supports both semantic names and actual IDs)
 */
export async function scrollToSection(page: Page, sectionId: string): Promise<void> {
  // Map semantic name to actual ID if needed
  const actualId = SECTION_IDS[sectionId.toLowerCase()] || sectionId.toLowerCase()

  const section = page.locator(`#${actualId}`)
  const exists = (await section.count()) > 0

  if (!exists) {
    throw new Error(`Section #${actualId} does not exist on the page`)
  }

  await section.scrollIntoViewIfNeeded()
  // Wait for smooth scroll animation
  await page.waitForTimeout(500)
}

/**
 * Check if a navigation button exists and is visible
 * @param page - Playwright page object
 * @param buttonName - Name of the navigation button
 */
export async function hasNavButton(page: Page, buttonName: string): Promise<boolean> {
  const button = page.getByRole('button', { name: buttonName })
  return await button.isVisible().catch(() => false)
}

/**
 * Navigate to a section by clicking the navigation button if available,
 * otherwise fall back to direct scroll
 * @param page - Playwright page object
 * @param sectionName - Name of the section (e.g., 'About', 'Skills', 'Projects')
 */
export async function navigateToSection(page: Page, sectionName: string): Promise<void> {
  const buttonExists = await hasNavButton(page, sectionName)

  if (buttonExists) {
    // Try using navigation button
    await openMobileMenuIfNeeded(page)
    await page.getByRole('button', { name: sectionName }).click()
    await page.waitForTimeout(500)
  } else {
    // Fall back to direct scroll
    await scrollToSection(page, sectionName)
  }
}

/**
 * Check if a section exists on the page
 * @param page - Playwright page object
 * @param sectionName - Semantic section name
 */
export async function sectionExists(page: Page, sectionName: string): Promise<boolean> {
  const actualId = SECTION_IDS[sectionName.toLowerCase()] || sectionName.toLowerCase()
  const section = page.locator(`#${actualId}`)
  return (await section.count()) > 0
}

/**
 * Get all available navigation buttons
 * @param page - Playwright page object
 */
export async function getAvailableNavButtons(page: Page): Promise<string[]> {
  const navButtons = page.getByRole('navigation').getByRole('button')
  const count = await navButtons.count()
  const buttons: string[] = []

  for (let i = 0; i < count; i++) {
    const text = await navButtons.nth(i).textContent()
    if (text) buttons.push(text.trim())
  }

  return buttons
}
