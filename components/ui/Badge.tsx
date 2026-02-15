import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-ghd-bg',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-ghd-text-primary text-ghd-bg',
        primary: 'border-transparent bg-cyan-600 text-white',
        secondary: 'border-transparent bg-ghd-surface text-ghd-text-body',
        success: 'border-transparent bg-emerald-600 text-white',
        warning: 'border-transparent bg-amber-600 text-white',
        danger: 'border-transparent bg-red-600 text-white',
        outline: 'border border-ghd-border text-ghd-text-body bg-transparent',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => {
    return <div ref={ref} className={cn(badgeVariants({ variant }), className)} {...props} />
  },
)

Badge.displayName = 'Badge'

export { Badge, badgeVariants }
