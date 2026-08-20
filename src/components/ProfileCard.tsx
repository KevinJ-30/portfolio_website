import { motion } from 'framer-motion'
import Reveal, { RevealGroup } from './Reveal'
import { fadeUp } from '../lib/motion'
import { education, profile } from '../data/profile'
import headshot from '../assets/KevinJacob_Headshot.jpg'

/**
 * The "who I am" strip on the home page, a bordered portrait against a
 * column of bio, education, and contact rows. Not a floating card.
 */

/** Last path segment of a profile URL, e.g. "KevinJ-30" */
const handle = (url: string) => url.replace(/\/+$/, '').split('/').pop() ?? url

const contactLinks = [
  { label: 'GitHub', value: handle(profile.github), href: profile.github, external: true },
  { label: 'LinkedIn', value: handle(profile.linkedin), href: profile.linkedin, external: true },
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, external: false },
]

const educationRows = [
  { label: 'Education', value: `${education.degree}, ${education.school}` },
  { label: 'Focus', value: education.concentrations.join(' / ') },
  { label: 'Graduating', value: `${education.graduation} · GPA ${education.gpa}` },
]

export default function ProfileCard() {
  return (
    <div className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-12">
      <Reveal className="md:col-span-4">
        <figure className="group m-0">
          <div className="overflow-hidden border border-line bg-surface">
            <img
              src={headshot}
              alt={`Portrait of ${profile.name}`}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover object-center grayscale
                         transition duration-700 ease-editorial group-hover:grayscale-0"
            />
          </div>
          <figcaption className="mt-3 flex items-baseline justify-between gap-4">
            <span className="label">{profile.location}</span>
            <span className="label">{education.shortSchool}</span>
          </figcaption>
        </figure>
      </Reveal>

      <RevealGroup as="div" className="md:col-span-7 md:col-start-6">
        <motion.div variants={fadeUp}>
          <h2 className="text-h2">{profile.name}</h2>
          <p className="mt-4 label-strong">{profile.role}</p>
          <p className="mt-6 max-w-prose text-lead text-fg/75">{profile.bio}</p>
        </motion.div>

        <motion.dl variants={fadeUp} className="mt-10 border-t border-line">
          {educationRows.map((row) => (
            <div
              key={row.label}
              className="flex flex-col gap-1 border-b border-line py-4
                         sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
            >
              <dt className="label shrink-0">{row.label}</dt>
              <dd className="text-base text-fg/85 sm:text-right">{row.value}</dd>
            </div>
          ))}
        </motion.dl>

        <motion.ul variants={fadeUp} className="mt-10 border-t border-line">
          {contactLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group flex items-baseline justify-between gap-6 border-b border-line py-4"
              >
                <span className="label transition-colors duration-300 ease-editorial group-hover:text-fg/80">
                  {link.label}
                </span>
                <span className="flex items-center gap-2 text-base text-fg/85 transition-colors duration-300 ease-editorial group-hover:text-fg">
                  <span className="break-all">{link.value}</span>
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform duration-300 ease-editorial group-hover:translate-x-1"
                  >
                    ↗
                  </span>
                </span>
              </a>
            </li>
          ))}
        </motion.ul>

        <motion.div variants={fadeUp} className="mt-10">
          <a
            href={profile.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            Résumé
            <span aria-hidden="true">↓</span>
          </a>
        </motion.div>
      </RevealGroup>
    </div>
  )
}
