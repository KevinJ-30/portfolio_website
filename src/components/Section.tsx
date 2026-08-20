import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { drawLine, fadeUp, viewportOnce } from '../lib/motion'

interface SectionProps {
  /** Two-digit index shown in the eyebrow, e.g. "01" */
  index?: string
  /** Eyebrow text, rendered uppercase mono */
  label: string
  title?: string
  description?: string
  children: ReactNode
  className?: string
  id?: string
}

/**
 * Standard section header: a hairline that draws in, a numbered mono eyebrow,
 * then the title. Used on every page so the rhythm stays identical throughout.
 */
export default function Section({
  index,
  label,
  title,
  description,
  children,
  className = '',
  id,
}: SectionProps) {
  return (
    <section id={id} className={`section ${className}`}>
      <motion.div
        className="origin-left"
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <hr className="rule" />
      </motion.div>

      <motion.header
        className="grid grid-cols-1 gap-x-10 gap-y-4 pt-6 md:grid-cols-12"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <div className="md:col-span-3">
          <p className="label">
            {index && <span className="text-fg/80">{index}</span>}
            {index && <span className="mx-2 text-fg/45">/</span>}
            {label}
          </p>
        </div>

        {(title || description) && (
          <div className="md:col-span-9">
            {title && <h2 className="text-h2">{title}</h2>}
            {description && (
              <p className="mt-4 max-w-prose text-lead text-fg/70">{description}</p>
            )}
          </div>
        )}
      </motion.header>

      <div className="pt-12 md:pt-16">{children}</div>
    </section>
  )
}
