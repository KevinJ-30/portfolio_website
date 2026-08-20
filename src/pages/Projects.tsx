import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import ProjectCard from '../components/ProjectCard'
import Reveal, { RevealGroup } from '../components/Reveal'
import Section from '../components/Section'
import { archivedProjects, featuredProjects, projects } from '../data/profile'
import { fadeUp } from '../lib/motion'

/* Everything in the header rail is derived from the data, no hand-kept counts. */
const years = projects.flatMap((project) => project.period.match(/\d{4}/g) ?? []).map(Number)
const ongoing = projects.some((project) => /present/i.test(project.period))
const span = `${Math.min(...years)} to ${ongoing ? 'Present' : Math.max(...years)}`
const toolCount = new Set(projects.flatMap((project) => project.technologies)).size

const headerMeta = [
  { label: 'Selected', value: String(featuredProjects.length).padStart(2, '0') },
  { label: 'Archive', value: String(archivedProjects.length).padStart(2, '0') },
  { label: 'Tools', value: String(toolCount) },
  { label: 'Span', value: span },
]

export default function Projects() {
  return (
    <div className="container-x">
      <PageHeader
        eyebrow="02 / Work"
        title="Projects"
        intro="Research code, hackathon builds, and systems with real users. The two most recent are written up in full below, and everything older is in the archive."
        aside={
          <dl className="w-full border-t border-line md:min-w-[11rem]">
            {headerMeta.map((item) => (
              <div
                key={item.label}
                className="flex items-baseline justify-between gap-6 border-b border-line py-3"
              >
                <dt className="label">{item.label}</dt>
                <dd className="font-mono text-base text-fg/85">{item.value}</dd>
              </div>
            ))}
          </dl>
        }
      />

      <Section
        index="01"
        label="Selected"
        title="Recent work"
        description="The two projects currently on my résumé."
      >
        <div className="border-b border-line">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.id}>
              <ProjectCard project={project} variant="featured" index={i + 1} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        index="02"
        label="Archive"
        title="Earlier work"
        description="Hackathon builds, research code, and accessibility projects."
      >
        <RevealGroup className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {archivedProjects.map((project, i) => (
            <motion.div key={project.id} variants={fadeUp} className="h-full">
              <ProjectCard
                project={project}
                variant="archive"
                index={featuredProjects.length + i + 1}
              />
            </motion.div>
          ))}
        </RevealGroup>
      </Section>
    </div>
  )
}
