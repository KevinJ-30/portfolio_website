import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import ExperiencesComponent, {
  ChronologyItem,
  ChronologyKicker,
  ChronologyList,
} from '../components/Experiences'
import { education, experiences } from '../data/profile'

/** Everything in the header rail is derived from the data, never hardcoded. */
const firstYear = Math.min(...experiences.map((experience) => Number(experience.sortKey.slice(0, 4))))
const industryCount = experiences.filter((experience) => experience.kind === 'industry').length
const researchCount = experiences.length - industryCount

const headerMeta = [
  { label: 'Active since', value: String(firstYear) },
  { label: 'Roles', value: String(experiences.length) },
  { label: 'Industry', value: String(industryCount) },
  { label: 'Research', value: String(researchCount) },
]

export default function Timeline() {
  return (
    <div className="container-x">
      <PageHeader
        eyebrow="03 / Experience"
        title="Roles and research"
        intro={`Engineering internships and research positions since ${firstYear}, listed newest first.`}
        aside={
          <dl className="w-full border-t border-line">
            {headerMeta.map((row) => (
              <div
                key={row.label}
                className="flex items-baseline justify-between gap-6 border-b border-line py-3"
              >
                <dt className="label">{row.label}</dt>
                <dd className="font-mono text-base text-fg/85">{row.value}</dd>
              </div>
            ))}
          </dl>
        }
      />

      <Section index="01" label="Chronology">
        <ExperiencesComponent />
      </Section>

      <Section index="02" label="Education">
        <ChronologyList>
          <ChronologyItem
            qualifier="Expected"
            start={education.graduation}
            location={education.location}
            current
          >
            <ChronologyKicker category="Degree" flag="In progress" />

            <h3 className="mt-4 text-h3">{education.degree}</h3>
            <p className="mt-1.5 max-w-prose text-fg/75">{education.school}</p>

            <dl className="mt-6 grid max-w-prose grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
              <div>
                <dt className="label">GPA</dt>
                <dd className="mt-2 font-mono text-base text-fg/85">{education.gpa} / 4.00</dd>
              </div>
              <div>
                <dt className="label">Concentrations</dt>
                <dd className="mt-2 text-base text-fg/75">{education.concentrations.join(', ')}</dd>
              </div>
            </dl>

            <ul className="mt-7 flex flex-wrap gap-2">
              {education.courses.map((course) => (
                <li key={course} className="chip">
                  {course}
                </li>
              ))}
            </ul>
          </ChronologyItem>
        </ChronologyList>
      </Section>
    </div>
  )
}
