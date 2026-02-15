# CLAUDE.md

Coding guide for this repository. Every line prevents a mistake — if it's obvious from the code, it doesn't belong here.

## Git Policy

**NEVER commit, push, or run any git write operations.** User controls all git ops via `/commit` or explicit commands. This applies to subagents too.

When the user commits: use conventional commits (`feat:`, `fix:`, `docs:`, `refactor:`, `chore:`). No AI attribution, no co-authored-by lines.

## Commands

```bash
bun run dev              # Dev server (localhost:3000)
bun run build            # Static export → /out
bun run lint             # ESLint
bun run typecheck        # TypeScript strict check
bun run format:check     # Prettier
bun run test:unit        # Vitest (add --run for CI, --watch for dev)
bun run test:e2e         # Playwright (all browsers + mobile)
bun run test             # Unit (--run) + E2E combined
```

Always use `bun`, never `npm`.

## Documentation Lookup

Check Context7 BEFORE using WebFetch for any library docs. Use the exact version from `package.json`.

## Architecture Decisions

- **Static export only**: `output: 'export'`, `trailingSlash: true`, `images: { unoptimized: true }`. No server-side features (no API routes, no SSR, no middleware).
- **Dark-only theme**: GitHub Dark palette (`ghd-*` tokens in `globals.css`). No light mode, no theme toggle.
- **No state management library**: Local state and props only. No context providers, no stores.
- **Data lives in `/data`**: Structured content separated from components. Types in `/types`. Never hardcode content in JSX.

## Component Patterns

### UI Primitives (`components/ui/`)

CVA + forwardRef pattern. All follow this exact structure:

```tsx
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const fooVariants = cva('base-classes', {
  variants: { variant: { ... }, size: { ... } },
  defaultVariants: { variant: 'primary', size: 'md' },
})

interface FooProps extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof fooVariants> {}

const Foo = React.forwardRef<HTMLDivElement, FooProps>(
  ({ className, variant, size, ...props }, ref) => (
    <div ref={ref} className={cn(fooVariants({ variant, size }), className)} {...props} />
  ),
)
Foo.displayName = 'Foo'

export { Foo, fooVariants }
export type { FooProps }
```

Named exports only. Export both the component and its variants. Barrel-export from `index.ts`.

### Feature Components (`components/home/`, `components/homelab/`)

```tsx
'use client'

export default function ComponentName() { ... }
```

- `'use client'` at top for any component using hooks, events, or Framer Motion
- Default export for feature components, named exports for UI primitives
- Props interface: `interface ComponentNameProps { ... }` (colocated, not in `/types`)

### Naming

| What              | Convention  | Example                        |
| ----------------- | ----------- | ------------------------------ |
| Component files   | PascalCase  | `ExperienceCard.tsx`           |
| Data/config files | kebab-case  | `experience.ts`                |
| Test files        | `.test.tsx` | `Button.test.tsx`              |
| Props interfaces  | `*Props`    | `CardProps`                    |
| Config constants  | UPPER_SNAKE | `VIEWPORT_CONFIG`              |
| Motion variants   | camelCase   | `fadeInUp`                     |
| Event handlers    | `on*`       | `onClose`, `onScrollToSection` |

### Import Order

```tsx
'use client' // 1. Directive (if needed)

import * as React from 'react' // 2. React
import { motion } from 'framer-motion' // 3. External packages
import Image from 'next/image'

import { Card } from '@/components/ui' // 4. Internal @/ imports
import { cn } from '@/lib/utils'
import { experiences } from '@/data/experience'
import type { Experience } from '@/types' // 5. Type-only imports last
```

## Framer Motion Rules

- **Use `whileInView` prop**, not `useInView` hook
- **Always set** `viewport={{ once: true, margin: '-100px' }}` (use `VIEWPORT_CONFIG` from `lib/animations.ts`)
- **Reuse presets** from `lib/animations.ts`: `fadeInUp`, `fadeInUpWithDelay()`, `staggerContainer()`, `scaleIn`, `DRAWER_TRANSITION`
- **Staggered children**: Parent uses `staggerChildren: 0.1`, children use `variants` object
- **Exit animations**: Wrap conditional renders in `<AnimatePresence>`
- **Durations**: 0.2s (micro), 0.3s (standard), 0.5–0.8s (entrance)

## Color System

Defined as CSS custom properties in `globals.css`. Use Tailwind classes, not raw hex.

| Token              | Usage                   | Tailwind class          |
| ------------------ | ----------------------- | ----------------------- |
| `ghd-bg`           | Page background         | `bg-ghd-bg`             |
| `ghd-surface`      | Card backgrounds        | `bg-ghd-surface`        |
| `ghd-elevated`     | Hover/elevated surfaces | `bg-ghd-elevated`       |
| `ghd-border`       | Default borders         | `border-ghd-border`     |
| `ghd-text-primary` | Headings, emphasis      | `text-ghd-text-primary` |
| `ghd-text-body`    | Body text (default)     | `text-ghd-text-body`    |
| `ghd-text-muted`   | Captions, secondary     | `text-ghd-text-muted`   |

**Accent colors**: `cyan-*` for primary actions/links, `emerald-*` for success states, `amber-*` for warnings. Toast accents use `ctp-*` tokens.

## Tailwind Class Order

Layout → Spacing → Sizing → Colors → Borders → Effects → Transitions → Responsive → Pseudo-states

```tsx
// Good
'flex items-center gap-4 px-6 py-3 w-full bg-ghd-surface text-ghd-text-body border border-ghd-border rounded-lg shadow-sm transition-colors duration-200 lg:w-auto hover:bg-ghd-elevated'
```

## Accessibility

- Semantic HTML: `<button>` for actions, `<a>` for navigation, `<nav>`, `<main>`, `<section>`
- All interactive elements: `focus-visible:ring-2 focus-visible:ring-cyan-500`
- Icon-only buttons: must have `aria-label`
- Expandable menus: `aria-expanded` that toggles
- Respect `prefers-reduced-motion`: handled globally in `globals.css`
- Page sections use `id` attributes for anchor navigation (mapped in `tests/helpers/navigation.ts`)

## Testing

### What to Unit Test (Vitest)

- UI primitive variants, sizes, and states
- Component rendering with different props
- User interactions (clicks, keyboard events) via `@testing-library/user-event`
- Edge cases (empty data, error states)
- Accessibility attributes (ARIA states, roles)

### What to E2E Test (Playwright)

- Page loads without console errors
- Responsive behavior across viewports (375px, 768px, 1440px, 1920px)
- Navigation and section scrolling
- External links are valid
- Mobile menu open/close

### Query Priority

1. `getByRole()` — always preferred
2. `getByLabel()` — for form elements
3. `getByTestId()` — last resort

### Test Setup

`tests/setup.ts` mocks Framer Motion, Next.js (router, link, image), and browser APIs (IntersectionObserver, ResizeObserver, matchMedia, clipboard). These are available in all unit tests automatically.

E2E helpers live in `tests/helpers/navigation.ts` — use `scrollToSection()`, `openMobileMenuIfNeeded()`, etc. instead of writing raw selectors.
