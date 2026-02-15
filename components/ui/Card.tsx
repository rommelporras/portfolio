import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const cardVariants = cva('rounded-lg border transition-all duration-300 text-ghd-text-body', {
  variants: {
    variant: {
      default: 'bg-ghd-surface border border-ghd-border shadow-lg shadow-black/20',
      glass:
        'bg-ghd-surface/95 backdrop-blur-xl border border-ghd-border shadow-md shadow-black/20',
      elevated: 'bg-ghd-surface border border-ghd-border shadow-xl shadow-black/30',
    },
    hover: {
      none: '',
      lift: 'hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/40',
      glow: 'hover:border-cyan-500/30 hover:shadow-glow-cyan-sm',
    },
    padding: {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    },
  },
  defaultVariants: {
    variant: 'default',
    hover: 'none',
    padding: 'md',
  },
})

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, hover, padding, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, hover, padding }), className)}
        {...props}
      />
    )
  },
)
Card.displayName = 'Card'

export { Card }
