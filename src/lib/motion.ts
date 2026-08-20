import type { Variants, Transition } from 'framer-motion'

/**
 * The site's motion vocabulary. Everything animates with the same easing and
 * the same small vertical offset, no scaling cards, no floating, no springs.
 * Import these instead of writing inline `initial`/`animate` props.
 */

/** Expo-out. Fast departure, long settle, reads as precise rather than bouncy. */
export const EASE: Transition['ease'] = [0.22, 1, 0.36, 1]

/** Scroll-reveal viewport config. Fires once, slightly before the element lands. */
export const viewportOnce = { once: true, margin: '-15% 0px -10% 0px' } as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease: EASE } },
}

/** Parent for staggered lists. Children should use `fadeUp`. */
export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
}

export const staggerSlow: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

/** Headline words/lines that rise out of an overflow-hidden mask. */
export const maskRise: Variants = {
  hidden: { y: '110%' },
  visible: {
    y: 0,
    transition: { duration: 0.9, ease: EASE },
  },
}

/** Hairline rules that draw in from the left. */
export const drawLine: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.9, ease: EASE },
  },
}

/** Standard page transition applied by the route wrapper. */
export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.3, ease: EASE } },
}
