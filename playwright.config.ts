import { defineConfig, devices } from '@playwright/test'

/**
 * Playwright configuration for rommelporras.github.io portfolio
 *
 * This config is optimized for a static Next.js portfolio site with:
 * - Responsive design testing (mobile, tablet, desktop)
 * - Dark mode support
 * - External link validation
 * - Performance and accessibility checks
 */
export default defineConfig({
  // Test directory
  testDir: './tests/e2e',

  // Maximum time one test can run (30 seconds is plenty for static site)
  timeout: 30 * 1000,

  // Run tests in parallel for faster execution
  fullyParallel: true,

  // Fail the build on CI if you accidentally left test.only in the source code
  forbidOnly: !!process.env.CI,

  // Retry failed tests on CI (network issues, flaky animations)
  retries: process.env.CI ? 2 : 0,

  // Number of workers (use 1 on CI for stability, more locally for speed)
  workers: process.env.CI ? 1 : undefined,

  // Reporter configuration
  reporter: [
    // Console output during test run
    ['list'],
    // HTML report for detailed results
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    // JSON for CI integration if needed
    ['json', { outputFile: 'test-results.json' }],
  ],

  // Shared settings for all projects
  use: {
    // Base URL for all tests (development server)
    baseURL: process.env.BASE_URL || 'http://localhost:3000',

    // Collect trace on first retry for debugging
    trace: 'on-first-retry',

    // Take screenshot on failure
    screenshot: 'only-on-failure',

    // Record video on first retry
    video: 'retain-on-failure',

    // Maximum time for each action (click, fill, etc.)
    actionTimeout: 30 * 1000,

    // Ignore HTTPS errors (not needed for localhost)
    ignoreHTTPSErrors: true,
  },

  // Test projects for different browsers and viewports
  projects: [
    // Desktop Chrome (most users)
    {
      name: 'chromium-desktop',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1440, height: 900 },
      },
    },

    // Mobile Safari (iPhone)
    {
      name: 'mobile-safari',
      use: {
        ...devices['iPhone 12'],
        viewport: { width: 390, height: 844 },
      },
    },

    // Mobile Chrome (Android)
    {
      name: 'mobile-chrome',
      use: {
        ...devices['Pixel 5'],
        viewport: { width: 393, height: 851 },
      },
    },

    // Tablet (iPad)
    {
      name: 'tablet-ipad',
      use: {
        ...devices['iPad Pro'],
        viewport: { width: 1024, height: 1366 },
      },
    },

    // Desktop Firefox (cross-browser testing)
    {
      name: 'firefox-desktop',
      use: {
        ...devices['Desktop Firefox'],
        viewport: { width: 1440, height: 900 },
      },
    },

    // Desktop Safari (macOS users)
    {
      name: 'webkit-desktop',
      use: {
        ...devices['Desktop Safari'],
        viewport: { width: 1440, height: 900 },
      },
    },
  ],

  // Web server configuration
  // In CI: serve static build (faster, no file descriptor issues)
  // Locally: use dev server for hot reloading
  webServer: {
    command: process.env.CI ? 'npx serve out -l 3000' : 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000, // 2 minutes for Next.js to start
    stdout: 'ignore',
    stderr: 'pipe',
  },
})
