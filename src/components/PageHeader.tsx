import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { EASE, drawLine, fadeUp, maskRise } from '../lib/motion'

interface PageHeaderProps {
  /** Mono eyebrow, e.g. "WORK" or "002, ABOUT" */
  eyebrow: string
  title: string
  intro?: string
  /** Optional right-hand meta column (counts, dates, links) */
  aside?: ReactNode
}

/**
 * The top of every non-home page. Title rises out of a mask, rule draws in,
 * intro fades up behind it.
 */
export default function PageHeader({ eyebrow, title, intro, aside }: PageHeaderProps) {
  return (
    <header className="pb-14 pt-32 md:pb-20 md:pt-44">
      <motion.p
        className="label-strong"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        {eyebrow}
      </motion.p>

      <div className="mt-5 overflow-hidden pb-[0.12em]">
        <motion.h1
          className="text-h1"
          variants={maskRise}
          initial="hidden"
          animate="visible"
        >
          {title}
        </motion.h1>
      </div>

      <motion.div
        className="mt-8 origin-left"
        variants={drawLine}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.15 }}
      >
        <hr className="rule" />
      </motion.div>

      {(intro || aside) && (
        <motion.div
          className="grid grid-cols-1 gap-x-10 gap-y-6 pt-7 md:grid-cols-12"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.25, duration: 0.65, ease: EASE }}
        >
          {intro && (
            <p className="max-w-prose text-lead text-fg/75 md:col-span-8">{intro}</p>
          )}
          {aside && <div className="md:col-span-4 md:justify-self-end">{aside}</div>}
        </motion.div>
      )}
    </header>
  )
}
