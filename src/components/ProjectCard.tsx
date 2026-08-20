import type { Project } from '../data/profile'

interface ProjectCardProps {
  project: Project
  /**
   * `featured`, a full-width, purely typographic editorial entry.
   * `archive`, a compact card led by its screenshot.
   */
  variant: 'featured' | 'archive'
  /** 1-based position in the catalogue, rendered as a zero-padded mono numeral */
  index: number
}

interface ProjectLink {
  label: string
  href: string
}

/** Optional urls, collapsed into a render-ready list in a fixed order. */
function collectLinks(project: Project): ProjectLink[] {
  const links: ProjectLink[] = []
  if (project.liveUrl) links.push({ label: 'Live', href: project.liveUrl })
  if (project.demoUrl) links.push({ label: 'Demo', href: project.demoUrl })
  if (project.githubUrl) links.push({ label: 'Source', href: project.githubUrl })
  return links
}

function ProjectLinks({
  links,
  title,
  className = '',
}: {
  links: ProjectLink[]
  title: string
  className?: string
}) {
  if (links.length === 0) return null

  return (
    <ul className={`flex flex-wrap items-center gap-x-7 gap-y-3 ${className}`}>
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${link.label}: ${title} (opens in a new tab)`}
            className="link-line group/link inline-flex items-baseline gap-1.5 font-mono text-label uppercase
                       text-fg/80 transition-colors duration-300 ease-editorial hover:text-fg"
          >
            {link.label}
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-300 ease-editorial
                         group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
            >
              ↗
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}

function TechList({ technologies, className = '' }: { technologies: string[]; className?: string }) {
  if (technologies.length === 0) return null

  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {technologies.map((tech) => (
        <li key={tech} className="chip chip-interactive">
          {tech}
        </li>
      ))}
    </ul>
  )
}

/**
 * Presentational only, every string comes from `project`. The two variants
 * exist because featured projects carry no screenshot: that entry has to look
 * deliberately typographic rather than like a card with a missing image.
 */
export default function ProjectCard({ project, variant, index }: ProjectCardProps) {
  const numeral = String(index).padStart(2, '0')
  const links = collectLinks(project)

  if (variant === 'featured') {
    return (
      <article
        id={project.id}
        className="group scroll-mt-24 border-t border-line transition-colors duration-500
                   ease-editorial hover:border-line-strong hover:bg-surface md:scroll-mt-32"
      >
        <div className="grid grid-cols-1 gap-x-10 gap-y-8 py-12 md:grid-cols-12 md:py-16 lg:py-20">
          {/* Meta rail */}
          <div className="md:col-span-3">
            <div className="flex items-baseline gap-5 md:block">
              <span
                className="font-mono text-[2rem] leading-none tracking-tight text-fg/45
                           transition-colors duration-500 ease-editorial group-hover:text-fg/65 md:text-[2.75rem]"
              >
                {numeral}
              </span>
              <div className="md:mt-7">
                <p className="label leading-[1.7]">{project.context}</p>
                <p className="label mt-2 leading-[1.7]">{project.period}</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-8">
            <h3 className="text-h2">{project.title}</h3>
            <p className="mt-5 max-w-prose text-lead text-fg/75">{project.summary}</p>

            {project.bullets.length > 0 && (
              <ul className="mt-9 max-w-prose">
                {project.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="border-t border-line py-4 text-base leading-relaxed text-fg/70 last:border-b md:text-base"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            )}

            <TechList technologies={project.technologies} className="mt-8" />
            <ProjectLinks links={links} title={project.title} className="mt-8" />
          </div>
        </div>
      </article>
    )
  }

  return (
    <article
      id={project.id}
      className="group flex h-full scroll-mt-24 flex-col border border-line transition-colors
                 duration-500 ease-editorial hover:border-line-strong hover:bg-surface md:scroll-mt-32"
    >
      <div className="aspect-[16/10] w-full overflow-hidden border-b border-line bg-surface-2">
        {project.image ? (
          <img
            src={project.image}
            alt={`Screenshot of ${project.title}, ${project.context}`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-center grayscale transition duration-700
                       ease-editorial group-hover:scale-[1.03] group-hover:grayscale-0"
          />
        ) : (
          /* No screenshot, fall back to the numeral on the system's only texture */
          <div className="dot-grid flex h-full w-full items-center justify-center">
            <span className="font-mono text-[2rem] leading-none tracking-tight text-fg/45">
              {numeral}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-baseline justify-between gap-4">
          <span className="label-strong">{numeral}</span>
          <span className="label text-right leading-[1.7]">{project.period}</span>
        </div>

        <h3 className="mt-5 text-h3">{project.title}</h3>
        <p className="label mt-3 leading-[1.7]">{project.context}</p>
        <p className="mt-4 text-base leading-relaxed text-fg/70">{project.summary}</p>

        <TechList technologies={project.technologies} className="mb-7 mt-5" />
        <ProjectLinks
          links={links}
          title={project.title}
          className="mt-auto border-t border-line pt-5"
        />
      </div>
    </article>
  )
}
