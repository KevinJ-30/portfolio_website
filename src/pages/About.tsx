import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import Reveal, { RevealGroup } from '../components/Reveal'
import { fadeUp } from '../lib/motion'
import { education, experiences, facts, interests } from '../data/profile'

/** Personal prose lives here. Everything factual comes from `data/profile`. */
const reading = [
  {
    title: "Dante's Inferno",
    meta: 'Dante Alighieri · 14th century',
    note: 'Nine circles, terza rima, and a punishment scheme that stays internally consistent the whole way down. I picked it up for the allegory and stayed for how tightly the structure holds together.',
  },
]

const watching = {
  src: 'https://www.youtube.com/embed/LCEmiRjPEtQ',
  title: 'Currently watching',
  note: 'What I have had on this week.',
}

export default function About() {
  const current = experiences.filter((experience) => experience.current)

  return (
    <div className="container-x">
      <PageHeader
        eyebrow="04 / About"
        title="Background"
        intro="I work on graph privacy research at Georgia Tech, subjective NLP research at Georgia State, and ML tooling at Apple."
        aside={
          <div className="w-full md:min-w-[15rem]">
            <p className="label">Currently</p>
            <ul className="mt-5 space-y-3">
              {current.map((experience) => (
                <li key={experience.id} className="border-t border-line pt-3">
                  <p className="text-base text-fg/85">{experience.shortOrg}</p>
                  <p className="label mt-2">{experience.kind}</p>
                </li>
              ))}
            </ul>
          </div>
        }
      />

      {/* 01 Narrative */}
      <Section index="01" label="Bio">
        <div className="grid grid-cols-1 gap-x-10 md:grid-cols-12">
          <RevealGroup as="article" className="md:col-span-9 md:col-start-4">
            <motion.p variants={fadeUp} className="max-w-prose text-lead leading-[1.6] text-fg/85">
              I started doing research in high school, building an iPhone app that converted text to
              braille using haptic feedback. Getting it to work was one problem. Finding out whether
              it was actually readable by the people it was meant for was a much harder one, and that
              is the part that got me interested in research.
            </motion.p>

            <motion.p variants={fadeUp} className="mt-7 max-w-prose leading-[1.85] text-fg/75">
              These days I do that in two places. At Georgia Tech&rsquo;s Graph Computation and
              Machine Learning Lab, I work on differential privacy for graph neural networks, trying
              to keep the privacy guarantees meaningful on graphs with millions of nodes and hundreds
              of millions of edges. At Georgia State&rsquo;s Assistive Intelligence Lab, I work on
              subjective NLP: modeling individual annotators rather than collapsing them into a
              majority label, and figuring out when people genuinely disagree versus when a label is
              just wrong.
            </motion.p>

            <motion.p variants={fadeUp} className="mt-7 max-w-prose leading-[1.85] text-fg/75">
              The rest of my time goes to engineering work. I am a software engineering intern at
              Apple, where I build ML pipelines and internal tooling: clustering support requests
              into issue categories, stripping PII before anything gets embedded, and getting metrics
              in front of the people who need them. Before that I was at Vantaca and HOAi, building
              LangGraph agents and hosted MCP servers.
            </motion.p>

            <motion.p variants={fadeUp} className="mt-7 max-w-prose leading-[1.85] text-fg/75">
              The two sides feed each other more than I expected. Research makes me careful about
              what I claim, and shipping makes me care whether anyone can use the result.
            </motion.p>
          </RevealGroup>
        </div>
      </Section>

      {/* 02 Quick facts */}
      <Section index="02" label="Quick facts">
        <RevealGroup className="border-t border-line">
          {facts.map((fact) => (
            <motion.div
              key={fact.label}
              variants={fadeUp}
              className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 border-b border-line py-5 md:py-6"
            >
              <span className="label">{fact.label}</span>
              <span className="ml-auto text-right font-display text-lead text-fg">{fact.value}</span>
            </motion.div>
          ))}
        </RevealGroup>
      </Section>

      {/* 03 Education */}
      <Section index="03" label="Education" title={education.school}>
        <div className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <h3 className="text-h3">{education.degree}</h3>
            <p className="label mt-4">{education.location}</p>
          </Reveal>

          <Reveal delay={0.06} className="md:col-span-8">
            <dl className="border-t border-line">
              <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 border-b border-line py-4">
                <dt className="label">Graduating</dt>
                <dd className="ml-auto text-right font-display text-fg">{education.graduation}</dd>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 border-b border-line py-4">
                <dt className="label">GPA</dt>
                <dd className="ml-auto text-right font-display text-fg">{education.gpa}</dd>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 border-b border-line py-4">
                <dt className="label">Concentrations</dt>
                <dd className="ml-auto text-right font-display text-fg">
                  {education.concentrations.join(' · ')}
                </dd>
              </div>
            </dl>

            <p className="label mt-10">Selected coursework</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {education.courses.map((course) => (
                <li key={course} className="chip chip-interactive">
                  {course}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* 04 Interests */}
      <Section
        index="04"
        label="Interests"
        title="What I work on"
        description="Four areas I keep coming back to, across research and engineering."
      >
        <RevealGroup className="border-t border-line">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              variants={fadeUp}
              className="grid grid-cols-1 gap-x-10 gap-y-3 border-b border-line py-8 md:grid-cols-12 md:py-10"
            >
              <p className="label md:col-span-2">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="text-h3 md:col-span-4">{interest.title}</h3>
              <p className="max-w-prose text-fg/70 md:col-span-6">{interest.description}</p>
            </motion.div>
          ))}
        </RevealGroup>
      </Section>

      {/* 05 Reading and watching */}
      <Section
        index="05"
        label="Currently"
        title="Reading and watching"
        description="Updated more often than the résumé."
      >
        <div className="grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="label">Reading</p>
            <div className="mt-6 border-t border-line">
              {reading.map((book) => (
                <article key={book.title} className="border-b border-line py-7">
                  <h3 className="text-h3">{book.title}</h3>
                  <p className="label mt-3">{book.meta}</p>
                  <p className="mt-5 max-w-prose text-fg/70">{book.note}</p>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="md:col-span-7">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
              <p className="label">Watching</p>
              <p className="label">Colour on hover ↗</p>
            </div>

            <div className="group mt-6 border border-line bg-surface p-2 transition-colors duration-500 ease-editorial hover:border-line-strong focus-within:border-line-strong md:p-3">
              <div className="aspect-video w-full overflow-hidden bg-surface-2 grayscale transition-[filter] duration-500 ease-editorial group-hover:grayscale-0 group-focus-within:grayscale-0">
                <iframe
                  className="h-full w-full border-0"
                  src={watching.src}
                  title={watching.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>

            <p className="mt-6 max-w-prose text-fg/70">{watching.note}</p>
          </Reveal>
        </div>
      </Section>
    </div>
  )
}
