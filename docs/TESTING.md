# Testing Guide

## Commands

```bash
bun run test:unit            # Run all unit tests once
bun run test:unit:watch      # Watch mode (re-runs on file changes)
bun run test:unit:ui         # Vitest browser UI
bun run test:unit:coverage   # Generate coverage report
bun run test:e2e             # Run all Playwright tests (6 browsers)
bun run test:e2e:headed      # Run with visible browser
bun run test:e2e:debug       # Debug mode with inspector
bun run test:e2e:chromium    # Desktop Chrome only (fastest)
bun run test:e2e:mobile      # Mobile Safari + Chrome only
bun run test:e2e:report      # Open last HTML report
bun run test                 # Unit (--run) + E2E combined
```

## Test Structure

```
tests/
├── setup.ts                          # Global mocks (Framer Motion, Next.js, browser APIs)
├── helpers/
│   └── navigation.ts                 # E2E helpers (scrollToSection, openMobileMenu, etc.)
├── unit/
│   └── components/
│       ├── Button.test.tsx
│       ├── Badge.test.tsx
│       ├── Card.test.tsx
│       ├── CopyButton.test.tsx
│       └── CopyButton.simple.test.tsx
└── e2e/
    ├── smoke.spec.ts                 # Page loads, no console errors (runs in CI)
    ├── core.spec.ts                  # SEO metadata, accessibility
    ├── navigation.spec.ts            # Nav items, smooth scrolling, mobile menu
    ├── responsive.spec.ts            # Layout across 4 viewport sizes
    └── links.spec.ts                 # External link validation (LinkedIn, GitHub, Credly)
```

## Browser Projects

Playwright runs tests across 6 configurations:

| Project          | Device Base     | Viewport  |
| ---------------- | --------------- | --------- |
| chromium-desktop | Desktop Chrome  | 1440x900  |
| firefox-desktop  | Desktop Firefox | 1440x900  |
| webkit-desktop   | Desktop Safari  | 1440x900  |
| mobile-safari    | iPhone 12       | 390x844   |
| mobile-chrome    | Pixel 5         | 393x851   |
| tablet-ipad      | iPad Pro        | 1024x1366 |

## Unit Tests (Vitest)

### What's Mocked

`tests/setup.ts` provides global mocks so unit tests run without a browser:

- **Framer Motion** -- all `motion.*` components render as plain HTML, hooks return stubs
- **Next.js** -- `next/navigation` (router), `next/image` (renders `<img>`), `next/link` (renders `<a>`)
- **Browser APIs** -- IntersectionObserver, ResizeObserver, matchMedia, localStorage, scrollTo, clipboard

These are available in all unit tests automatically. You don't need to import or configure them.

### Writing a Unit Test

Place tests in `tests/unit/components/ComponentName.test.tsx`:

```tsx
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from '@/components/ui'

describe('Button', () => {
  it('renders with primary variant by default', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button')).toHaveClass('bg-cyan-600')
  })

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()

    render(<Button onClick={handleClick}>Click me</Button>)
    await user.click(screen.getByRole('button'))

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
```

### Query Priority

1. `screen.getByRole()` -- always preferred (enforces semantic HTML)
2. `screen.getByLabelText()` -- for form elements
3. `screen.getByText()` -- when role isn't available
4. `screen.getByTestId()` -- last resort

### Coverage

Generate a report with `bun run test:unit:coverage`. Opens at `coverage/index.html`.

Current thresholds in `vitest.config.ts`:

| Metric     | Threshold |
| ---------- | --------- |
| Lines      | 5%        |
| Functions  | 4%        |
| Branches   | 2%        |
| Statements | 5%        |

Coverage reporters include Cobertura format for GitLab MR diff visualization.

## E2E Tests (Playwright)

### How It Runs

- **Locally**: Playwright starts `bun run dev` automatically, tests run against `localhost:3000`
- **CI**: Builds static export first, serves with `npx serve out -l 3000`

### E2E Test Breakdown

| Test File            | What It Validates                                        |
| -------------------- | -------------------------------------------------------- |
| `smoke.spec.ts`      | Pages load, no console errors. Runs automatically in CI. |
| `core.spec.ts`       | SEO meta tags, accessibility attributes                  |
| `navigation.spec.ts` | Nav links, smooth scrolling, mobile hamburger menu       |
| `responsive.spec.ts` | Layout integrity at mobile, tablet, desktop viewports    |
| `links.spec.ts`      | External links resolve (LinkedIn, GitHub, Credly)        |

### Using E2E Helpers

`tests/helpers/navigation.ts` provides reusable functions:

```ts
import { scrollToSection, openMobileMenuIfNeeded, sectionExists } from '../helpers/navigation'

test('can navigate to experience section', async ({ page }) => {
  await page.goto('/')
  await scrollToSection(page, 'experience')
  await expect(page.locator('#experience')).toBeInViewport()
})
```

Available helpers: `scrollToSection()`, `openMobileMenuIfNeeded()`, `hasNavButton()`, `navigateToSection()`, `sectionExists()`.

## CI/CD Integration

Tests run in the GitLab CI pipeline on every push to `develop` and on merge requests:

| CI Job           | What Runs                               | Trigger   |
| ---------------- | --------------------------------------- | --------- |
| `test:unit`      | Vitest with coverage + JUnit reports    | Automatic |
| `test:e2e:smoke` | Smoke tests on chromium-desktop         | Automatic |
| `test:e2e:full`  | All tests across all 6 browser projects | Manual    |

Unit test results and coverage appear directly in GitLab merge request diffs. See [Deployment Guide](DEPLOYMENT.md) for the full pipeline.

## Suggested Test Coverage Expansion

Areas without unit test coverage:

1. **ContactForm** -- form validation, submission states, error handling
2. **Navigation** -- mobile menu toggle, section scrolling
3. **ExperienceCard** -- rendering with different data shapes
4. **Hero** -- CTA button behavior
