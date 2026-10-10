import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import Reveal, { RevealGroup } from '../components/Reveal'
import { fadeUp } from '../lib/motion'
import {
  archivedProjects,
  education,
  experiences,
  featuredProjects,
  honors,
  profile,
  publications,
  skills,
} from '../data/profile'

/** Bumped by hand whenever the PDF is re-exported. */
const UPDATED = 'October 2026'

/** Newest first, independent of the order things sit in the data file. */
const timeline = [...experiences].sort((a, b) => b.sortKey.localeCompare(a.sortKey))

const contact = [
  { label: 'Location', value: profile.location },
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'GitHub', value: 'KevinJ-30', href: profile.github },
  { label: 'LinkedIn', value: 'kevin-jacob1', href: profile.linkedin },
]

/* The page grid. A left meta rail runs the full length of the document so every
   date, category, and section number hangs off the same line. */
const RAIL = 'md:col-span-4 lg:col-span-3'
const BODY = 'md:col-span-8 lg:col-span-9'
const ROW =
  'grid grid-cols-1 gap-x-10 gap-y-6 border-t border-line py-9 last:border-b md:grid-cols-12 md:py-12'

function Bullets({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-7 max-w-prose space-y-3.5">
      {items.map((item) => (
        <li key={item} className="flex gap-4 text-base leading-relaxed text-fg/75">
          <span aria-hidden="true" className="mt-[0.72em] h-px w-3 shrink-0 bg-line-strong" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function Chips({ items, className = '' }: { items: readonly string[]; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((item) => (
        <li key={item} className="chip chip-interactive">
          {item}
        </li>
      ))}
    </ul>
  )
}

export default function Resume() {
  return (
    <div className="container-x">
      <PageHeader
        eyebrow="05 / Resume"
        title="Résumé"
        intro="Every role, project, and course in one place. The PDF is the one-page version."
        aside={
          <div className="flex flex-col items-start gap-4 md:items-end">
            <a
              href={profile.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <span>Download PDF</span>
              <span aria-hidden="true">↓</span>
            </a>
            <p className="label">Updated {UPDATED}</p>
          </div>
        }
      />

      {/* Masthead: the contact block a printed CV would carry at the top */}
      <Reveal className="border-y border-line py-7">
        <dl className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
          {contact.map((item) => (
            <div key={item.label}>
              <dt className="label">{item.label}</dt>
              <dd className="mt-2.5 break-words text-base text-fg/85">
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="link-line"
                  >
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <Section index="01" label="Education">
        <Reveal>
          <article className={ROW}>
            <div className={RAIL}>
              <p className="label-strong">Expected {education.graduation}</p>
              <p className="label mt-2.5">{education.location}</p>
            </div>

            <div className={BODY}>
              <h3 className="text-h3">{education.degree}</h3>
              <p className="mt-2 text-fg/70">{education.school}</p>

              <dl className="mt-8 grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
                <div className="border-t border-line pt-3.5">
                  <dt className="label">GPA</dt>
                  <dd className="mt-2.5 font-mono text-base text-fg/85">{education.gpa}</dd>
                </div>
                <div className="border-t border-line pt-3.5">
                  <dt className="label">Concentrations</dt>
                  <dd className="mt-2.5 text-base text-fg/85">
                    {education.concentrations.join(', ')}
                  </dd>
                </div>
              </dl>

              <p className="label mt-9">Selected coursework</p>
              <Chips items={education.courses} className="mt-4" />
            </div>
          </article>
        </Reveal>
      </Section>

      <Section index="02" label="Experience">
        <RevealGroup>
          {timeline.map((exp) => (
            <motion.article key={exp.id} variants={fadeUp} className={ROW}>
              <div className={RAIL}>
                <p className="label-strong">
                  {exp.start} to {exp.end}
                </p>
                <p className="label mt-2.5">{exp.location}</p>
                <p className="label mt-2.5">{exp.kind === 'research' ? 'Research' : 'Industry'}</p>
                {exp.current && (
                  <p className="label mt-4 flex items-center gap-2 text-fg/85">
                    <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 bg-fg" />
                    Current
                  </p>
                )}
              </div>

              <div className={BODY}>
                <h3 className="text-h3">{exp.role}</h3>
                <p className="mt-2 max-w-prose text-fg/70">{exp.org}</p>
                <Bullets items={exp.bullets} />
                <Chips items={exp.skills} className="mt-7" />
              </div>
            </motion.article>
          ))}
        </RevealGroup>
      </Section>

      <Section index="03" label="Publications">
        <ul>
          {publications.map((pub, index) => (
            <Reveal
              key={pub.title}
              as="li"
              delay={index * 0.06}
              className="grid grid-cols-1 gap-x-10 gap-y-4 border-t border-line py-9 last:border-b md:grid-cols-12 md:py-12"
            >
              <div className={RAIL}>
                <p className="label-strong">{pub.venue}</p>
              </div>
              <div className={BODY}>
                <h3 className="text-h3">{pub.title}</h3>
                <p className="mt-3 max-w-prose text-fg/70">{pub.authors}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section index="04" label="Projects">
        <RevealGroup>
          {featuredProjects.map((project) => (
            <motion.article key={project.id} variants={fadeUp} className={ROW}>
              <div className={RAIL}>
                <p className="label-strong">{project.period}</p>
                <p className="label mt-2.5">{project.context}</p>
              </div>

              <div className={BODY}>
                <h3 className="text-h3">{project.title}</h3>
                <p className="mt-3 max-w-prose text-fg/75">{project.summary}</p>
                <Chips items={project.technologies} className="mt-7" />
              </div>
            </motion.article>
          ))}

          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 gap-x-10 gap-y-6 border-y border-line py-9 md:grid-cols-12 md:py-12"
          >
            <div className={RAIL}>
              <p className="label-strong">Archive</p>
              <p className="label mt-2.5">{archivedProjects.length} more</p>
            </div>

            <div className={BODY}>
              <ul>
                {archivedProjects.map((project) => (
                  <li
                    key={project.id}
                    className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 border-t border-line py-4 first:border-t-0 first:pt-0"
                  >
                    <span className="text-base text-fg/85">{project.title}</span>
                    <span className="label">{project.period}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-7 text-base text-fg/75">
                <Link to="/projects" className="link-line text-fg/85">
                  Full case studies on the projects page →
                </Link>
              </p>
            </div>
          </motion.div>
        </RevealGroup>
      </Section>

      <Section index="05" label="Skills">
        <dl>
          {Object.entries(skills).map(([category, items], index) => (
            <Reveal
              key={category}
              delay={index * 0.06}
              className="grid grid-cols-1 gap-x-10 gap-y-4 border-t border-line py-7 last:border-b md:grid-cols-12 md:py-9"
            >
              <dt className={`label-strong md:pt-1 ${RAIL}`}>{category}</dt>
              <dd className={BODY}>
                <Chips items={items} />
              </dd>
            </Reveal>
          ))}
        </dl>
      </Section>

      <Section index="06" label="Honors">
        <ul>
          {honors.map((honor, index) => (
            <Reveal
              key={honor.title}
              as="li"
              delay={index * 0.06}
              className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 border-t border-line py-6 last:border-b"
            >
              <h3 className="text-lg">{honor.title}</h3>
              <p className="label">{honor.detail}</p>
            </Reveal>
          ))}
        </ul>
      </Section>
    </div>
  )
}
