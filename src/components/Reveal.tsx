import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

interface RevealProps {
  children: ReactNode
  className?: string
  /** Seconds to wait after the element enters the viewport */
  delay?: number
  as?: 'div' | 'section' | 'article' | 'li' | 'header' | 'footer'
}

/**
 * Reveals its children on scroll-in, once. Use for any block that should
 * animate, never hand-roll `initial`/`whileInView` in a page.
 */
export default function Reveal({ children, className, delay = 0, as = 'div' }: RevealProps) {
  const Component = motion[as]

  return (
    <Component
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </Component>
  )
}

/**
 * Parent wrapper that staggers direct `Reveal`-style children.
 * Children must use `variants={fadeUp}` (no initial/whileInView of their own).
 */
export function RevealGroup({
  children,
  className,
  as = 'div',
}: Omit<RevealProps, 'delay'>) {
  const Component = motion[as]

  return (
    <Component
      className={className}
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {children}
    </Component>
  )
}
