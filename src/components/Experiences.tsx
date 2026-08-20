import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import type { ReactNode } from 'react'
import Reveal from './Reveal'
import { experiences } from '../data/profile'
import { EASE, fadeIn, viewportOnce } from '../lib/motion'

/**
 * Vertical chronology. A hairline spine runs between a mono meta rail and the
 * content column on desktop, and sits at the far left once the row stacks.
 *
 * The primitives below (`ChronologyList`, `ChronologyItem`, `ChronologyKicker`)
 * are shared with the Education block on the Timeline page so both sections sit
 * on exactly the same spine.
 */

/** Vertical counterpart to `drawLine`, the spine grows downward. */
const drawSpine: Variants = {
  hidden: { scaleY: 0 },
  visible: { scaleY: 1, transition: { duration: 0.9, ease: EASE } },
}

const MONTHS: Record<string, string> = {
  Jan: '01',
  Feb: '02',
  Mar: '03',
  Apr: '04',
  May: '05',
  Jun: '06',
  Jul: '07',
  Aug: '08',
  Sep: '09',
  Oct: '10',
  Nov: '11',
  Dec: '12',
}

/** "May 2026" → "2026-05". Returns undefined for open-ended values like "Present". */
function toDateTime(value: string): string | undefined {
  const [month, year] = value.split(' ')
  const numeral = MONTHS[month]
  return numeral && /^\d{4}$/.test(year) ? `${year}-${numeral}` : undefined
}

function DateLabel({ value, className }: { value: string; className?: string }) {
  const machine = toDateTime(value)

  if (!machine) return <span className={className}>{value}</span>
  return (
    <time dateTime={machine} className={className}>
      {value}
    </time>
  )
}

export function ChronologyList({ children }: { children: ReactNode }) {
  return <ol className="relative border-b border-line">{children}</ol>
}

interface ChronologyItemProps {
  start: string
  /** Omit for a single-point entry */
  end?: string
  location: string
  /** Mono qualifier above the dates, e.g. "Expected" */
  qualifier?: string
  /** Filled node marker instead of a hollow one */
  current?: boolean
  children: ReactNode
}

export function ChronologyItem({
  start,
  end,
  location,
  qualifier,
  current = false,
  children,
}: ChronologyItemProps) {
  return (
    <li className="relative border-t border-line pb-12 pt-7 md:pb-16 md:pt-9">
      {/* Spine, one segment per row, so the line grows as you scroll */}
      <motion.span
        aria-hidden
        className="absolute left-1 top-0 h-full w-px origin-top bg-line md:left-[9.75rem]"
        variants={drawSpine}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      />

      {/* Node, straddles the intersection of the rule and the spine */}
      <motion.span
        aria-hidden
        className={`absolute -top-1 left-0 h-2 w-2 md:left-[9.5rem] ${
          current ? 'bg-fg' : 'border border-line-strong bg-bg'
        }`}
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      />

      <Reveal className="grid grid-cols-1 gap-y-5 pl-8 md:grid-cols-[8.5rem_minmax(0,1fr)] md:gap-x-10 md:pl-0">
        <div>
          {qualifier && <p className="label mb-2">{qualifier}</p>}

          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 md:flex-col md:items-start md:gap-y-1.5">
            <DateLabel value={start} className="label-strong" />
            {end && (
              <>
                <span aria-hidden className="label text-fg/45 md:hidden">
                  to
                </span>
                <span aria-hidden className="hidden h-3 w-px bg-line md:block" />
                <DateLabel value={end} className="label" />
              </>
            )}
          </div>

          <p className="label mt-2 md:mt-5">{location}</p>
        </div>

        <div className="min-w-0">{children}</div>
      </Reveal>
    </li>
  )
}

/** Category line at the top of an entry: "RESEARCH · CURRENT". */
export function ChronologyKicker({ category, flag }: { category: string; flag?: string }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
      <span className="label">{category}</span>
      {flag && (
        <>
          <span aria-hidden className="h-3 w-px bg-line" />
          <span className="label-strong flex items-center gap-2">
            <span aria-hidden className="h-1.5 w-1.5 bg-fg" />
            {flag}
          </span>
        </>
      )}
    </div>
  )
}

export default function Experiences() {
  return (
    <ChronologyList>
      {experiences.map((experience) => (
        <ChronologyItem
          key={experience.id}
          start={experience.start}
          end={experience.end}
          location={experience.location}
          current={experience.current}
        >
          <ChronologyKicker
            category={experience.kind}
            flag={experience.current ? 'Current' : undefined}
          />

          <h3 className="mt-4 text-h3">{experience.role}</h3>
          <p className="mt-1.5 max-w-prose text-fg/75">{experience.org}</p>

          <ul className="mt-6 max-w-prose space-y-3">
            {experience.bullets.map((bullet) => (
              <li
                key={bullet}
                className="relative pl-6 text-base leading-relaxed text-fg/70 before:absolute before:left-0 before:top-[0.72em] before:h-px before:w-3 before:bg-line-strong before:content-['']"
              >
                {bullet}
              </li>
            ))}
          </ul>

          <ul className="mt-7 flex flex-wrap gap-2">
            {experience.skills.map((skill) => (
              <li key={skill} className="chip">
                {skill}
              </li>
            ))}
          </ul>
        </ChronologyItem>
      ))}
    </ChronologyList>
  )
}
