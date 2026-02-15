# UI Components

Reusable UI primitives with type-safe variants using CVA (Class Variance Authority).

## Purpose

These components provide a consistent design system with:

- **Type-safe variants** - TypeScript ensures only valid variant combinations
- **Scoped styles** - All styling is component-scoped, preventing CSS bleeding
- **Composable** - Mix and match variants for different use cases
- **Dark mode** - All components support dark mode out of the box

## Components

### Card

Card container with variants for different visual styles and hover effects.

**Variants:**

- `variant`: `default` | `glass` | `elevated`
- `hover`: `none` | `lift` | `glow`
- `padding`: `none` | `sm` | `md` | `lg`

**Usage:**

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
;<Card variant="glass" hover="lift" padding="lg">
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content here</CardContent>
</Card>
```

### Button

Button component with semantic variants and sizes.

**Variants:**

- `variant`: `primary` | `secondary` | `outline` | `ghost` | `destructive`
- `size`: `sm` | `md` | `lg` | `icon`

**Usage:**

```tsx
import { Button } from '@/components/ui/Button'

<Button variant="primary" size="lg">Click me</Button>
<Button variant="outline">Cancel</Button>
```

### Badge

Small inline badge for tags, labels, and status indicators.

**Variants:**

- `variant`: `default` | `primary` | `secondary` | `success` | `warning` | `danger` | `outline`

**Usage:**

```tsx
import { Badge } from '@/components/ui/Badge'

<Badge variant="success">Active</Badge>
<Badge variant="warning">Pending</Badge>
```

### Section

Section wrapper with consistent spacing and background options.

**Variants:**

- `spacing`: `none` | `sm` | `md` | `lg` | `xl`
- `background`: `none` | `default` | `muted` | `accent`
- `container`: `none` | `default` | `wide` | `narrow`

**Usage:**

```tsx
import { Section } from '@/components/ui/Section'
;<Section spacing="lg" background="muted" container="wide">
  Content here
</Section>
```

## Architecture Notes

**DO:**

- Use these components for consistent UI patterns
- Extend variants when needed for new use cases
- Compose components together for complex UIs

**DON'T:**

- Add global utility classes to `globals.css` - extend component variants instead
- Use Tailwind classes directly for styling that should be reusable
- Create new UI primitives without CVA variants

## For AI Agents

When asked to:

- **"Add a card component"** → Use `<Card>` from this folder
- **"Style a button"** → Use `<Button>` with appropriate variant
- **"Add a tag/label"** → Use `<Badge>` component
- **"Add consistent spacing"** → Use `<Section>` wrapper

To find usage: `grep -r "import.*Card" app components`
To add variant: Edit the CVA `variants` object in the component file
