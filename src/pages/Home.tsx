import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Reveal, { RevealGroup } from '../components/Reveal'
import Section from '../components/Section'
import ProfileCard from '../components/ProfileCard'
import { drawLine, fadeIn, fadeUp, maskRise, stagger } from '../lib/motion'
import {
  archivedProjects,
  education,
  experiences,
  facts,
  featuredProjects,
  profile,
  skills,
  stats,
} from '../data/profile'

/**
 * Home is the index: name, current roles, numbers, profile, selected work,
 * and the stack.
 */

/** The name set as display type, one line per mask. */
const headline = ['Kevin', 'Jacob']

/** Location, graduating, current role. Languages belong on the About page. */
const heroMeta = facts.filter((fact) => fact.label !== 'Languages')

/** `as const` gives three separate readonly tuples, so widen them to map safely. */
const skillGroups = Object.entries(skills) as [string, readonly string[]][]

/** Earliest role on record, order-independent. */
const firstYear = experiences
  .reduce((earliest, exp) => (exp.sortKey < earliest ? exp.sortKey : earliest), experiences[0].sortKey)
  .slice(0, 4)

const pad = (n: number) => String(n).padStart(2, '0')

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[88vh] flex-col justify-end pb-16 pt-28 md:pt-32">
        {/* Column guides, the only texture in the hero */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden md:block
                     [mask-image:linear-gradient(to_bottom,transparent,black_22%,black)]"
        >
          <div className="container-x h-full">
            <div className="grid h-full grid-cols-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="border-r border-line first:border-l" />
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="container-x relative w-full"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="label-strong" variants={fadeIn}>
            {profile.role}
            <span className="mx-2.5 text-fg/45">/</span>
            {education.shortSchool}
          </motion.p>

          <motion.h1 className="mt-7 text-display md:mt-9" variants={stagger}>
            {headline.map((line, i) => (
              <span
                key={line}
                className={`block overflow-hidden ${i > 0 ? '-mt-[0.32em]' : ''}`}
              >
                <motion.span className="block pb-[0.14em] leading-[1.1]" variants={maskRise}>
                  {line}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.div className="mt-10 origin-left" variants={drawLine}>
            <hr className="rule" />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-x-10 gap-y-8 pt-7 md:grid-cols-12"
            variants={fadeUp}
          >
            <div className="md:col-span-6">
              <p className="max-w-prose text-lead text-fg/70">{profile.tagline}</p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link to="/projects" className="btn">
                  Selected work
                  <span aria-hidden="true">→</span>
                </Link>
                <a
                  href={profile.resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  Résumé
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>

            <dl className="grid content-start gap-3 md:col-span-4 md:col-start-9">
              {heroMeta.map((fact) => (
                <div key={fact.label} className="flex items-baseline gap-4">
                  <dt className="label w-24 shrink-0">{fact.label}</dt>
                  <dd className="font-mono text-label uppercase leading-[1.5] text-fg/85">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.p
            className="mt-12 flex items-center gap-3 text-fg/65 md:mt-16"
            variants={fadeIn}
          >
            <span className="label">Scroll</span>
            <span aria-hidden="true" className="h-px w-10 bg-line" />
            <span aria-hidden="true" className="text-sm leading-none">
              ↓
            </span>
          </motion.p>
        </motion.div>
      </section>

      <div className="container-x">
        {/* ── 01 Currently ───────────────────────────────────────────────── */}
        <Section
          index="01"
          label="Experience"
          title="Where I've worked"
          description={`Engineering internships and research positions, going back to ${firstYear}.`}
        >
          <RevealGroup as="div">
            <ul className="border-t border-line">
              {experiences.map((exp, i) => (
                <motion.li key={exp.id} variants={fadeUp} className="border-b border-line">
                  <Link
                    to="/timeline"
                    className="group grid grid-cols-[2.5rem_1fr_1.5rem] items-baseline gap-x-3 gap-y-2
                               py-5 transition-colors duration-300 ease-editorial hover:bg-surface
                               lg:grid-cols-12 lg:gap-x-6 lg:py-6"
                  >
                    <span className="label col-start-1 row-start-1 lg:col-span-1">
                      {pad(i + 1)}
                    </span>

                    <span
                      className="col-start-2 row-start-1 font-display text-h3 font-semibold
                                 lg:col-span-4 lg:col-start-2"
                    >
                      {exp.shortOrg}
                    </span>

                    <span
                      className="col-start-2 row-start-2 text-base leading-snug text-fg/75
                                 lg:col-span-3 lg:col-start-6 lg:row-start-1"
                    >
                      {exp.role}
                    </span>

                    <span
                      className="col-start-2 row-start-3 font-mono text-label uppercase leading-[1.5] text-fg/65
                                 lg:col-span-3 lg:col-start-9 lg:row-start-1"
                    >
                      {exp.start} to {exp.end}
                    </span>

                    <span
                      aria-hidden="true"
                      className="col-start-3 row-start-1 justify-self-end text-fg/65 transition-transform
                                 duration-300 ease-editorial group-hover:translate-x-1
                                 lg:col-span-1 lg:col-start-12"
                    >
                      ↗
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </RevealGroup>

          <Reveal className="flex items-baseline justify-between gap-6 pt-6">
            <p className="label">Full detail on each role</p>
            <Link to="/timeline" className="link-line label-strong">
              Experience ↗
            </Link>
          </Reveal>
        </Section>

        {/* ── 02 By the numbers ──────────────────────────────────────────── */}
        <Section index="02" label="Numbers">
          <RevealGroup as="div">
            <dl className="grid grid-cols-2 border-l border-t border-line md:grid-cols-4">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  className="flex flex-col gap-3 border-b border-r border-line p-5 md:p-7"
                >
                  <dd className="order-1 font-display text-h1 font-semibold">{stat.value}</dd>
                  <dt className="order-2 label leading-[1.6]">{stat.label}</dt>
                </motion.div>
              ))}
            </dl>
          </RevealGroup>
        </Section>

        {/* ── 03 Profile ─────────────────────────────────────────────────── */}
        <Section index="03" label="Profile">
          <ProfileCard />
        </Section>

        {/* ── 04 Selected work ───────────────────────────────────────────── */}
        <Section
          index="04"
          label="Selected work"
          title="Recent projects"
          description="Two systems with real users. Older work is in the archive."
        >
          <RevealGroup as="div">
            {featuredProjects.map((project, i) => (
              <motion.article key={project.id} variants={fadeUp}>
                <Link
                  to="/projects"
                  className="group grid grid-cols-1 gap-x-10 gap-y-6 border-t border-line py-10
                             transition-colors duration-300 ease-editorial hover:border-line-strong
                             md:grid-cols-12 md:py-14"
                >
                  <p className="label md:col-span-1">{pad(i + 1)}</p>

                  <div className="md:col-span-5">
                    <h3 className="text-h2">{project.title}</h3>
                    <p className="mt-4 label leading-[1.6]">{project.context}</p>
                    <p className="mt-2 label leading-[1.6]">{project.period}</p>
                  </div>

                  <div className="md:col-span-6">
                    <p className="max-w-prose text-lead text-fg/75">{project.summary}</p>

                    <ul className="mt-7 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <li key={tech} className="chip">
                          {tech}
                        </li>
                      ))}
                    </ul>

                    <p className="mt-8 inline-flex items-center gap-2 text-base text-fg/85 transition-colors duration-300 ease-editorial group-hover:text-fg">
                      View project
                      <span
                        aria-hidden="true"
                        className="inline-block transition-transform duration-300 ease-editorial group-hover:translate-x-1"
                      >
                        ↗
                      </span>
                    </p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </RevealGroup>

          <Reveal className="flex items-baseline justify-between gap-6 border-t border-line pt-6">
            <p className="label">{pad(archivedProjects.length)} more in the archive</p>
            <Link to="/projects" className="link-line label-strong">
              All work ↗
            </Link>
          </Reveal>
        </Section>

        {/* ── 05 Capabilities ────────────────────────────────────────────── */}
        <Section index="05" label="Skills" title="Tools I work with">
          <RevealGroup as="div">
            <dl className="border-t border-line">
              {skillGroups.map(([category, items]) => (
                <motion.div
                  key={category}
                  variants={fadeUp}
                  className="grid grid-cols-1 gap-x-10 gap-y-4 border-b border-line py-7 md:grid-cols-12 md:py-8"
                >
                  <dt className="label leading-[1.6] md:col-span-3">{category}</dt>
                  <dd className="flex flex-wrap gap-2 md:col-span-9">
                    {items.map((item) => (
                      <span key={item} className="chip chip-interactive">
                        {item}
                      </span>
                    ))}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </RevealGroup>
        </Section>

      </div>
    </>
  )
}
