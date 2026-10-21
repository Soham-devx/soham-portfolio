'use client'

import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn('flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground', className)}>
      <span aria-hidden="true" className="size-1.5 bg-signal" />
      {children}
    </p>
  )
}

export function Tag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-sm border border-border px-2 py-0.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground',
        className,
      )}
    >
      {children}
    </span>
  )
}

export const buttonPrimary =
  'group inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-[filter,transform] hover:brightness-95 active:translate-y-px'

export const buttonSecondary =
  'group inline-flex h-11 items-center justify-center gap-2 rounded-md border border-border bg-transparent px-5 text-sm font-medium text-foreground transition-colors hover:border-foreground/40 hover:bg-muted'
