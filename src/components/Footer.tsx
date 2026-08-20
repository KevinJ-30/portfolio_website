import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import { profile } from '../data/profile'

const links = [
  { label: 'Email', href: `mailto:${profile.email}`, value: profile.email },
  { label: 'GitHub', href: profile.github, value: 'KevinJ-30' },
  { label: 'LinkedIn', href: profile.linkedin, value: 'kevin-jacob1' },
  { label: 'Résumé', href: profile.resumePdf, value: 'PDF' },
]

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-x py-16 md:py-24">
        <Reveal>
          <div className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="label">Contact</p>
              <h2 className="mt-5 max-w-[12ch] text-h2">Get in touch</h2>
              <p className="mt-5 max-w-prose text-fg/70">
                I'm open to software engineering and ML research roles. Email is the fastest
                way to reach me.
              </p>
            </div>

            <div className="md:col-span-4 md:col-start-9">
              <ul className="space-y-0">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className="group flex items-baseline justify-between gap-6 border-b border-line py-4"
                    >
                      <span className="label transition-colors duration-300 ease-editorial group-hover:text-fg/80">
                        {link.label}
                      </span>
                      <span className="flex items-center gap-2 text-base text-fg/85 transition-colors duration-300 ease-editorial group-hover:text-fg">
                        {link.value}
                        <span className="inline-block transition-transform duration-300 ease-editorial group-hover:translate-x-1">
                          ↗
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 sm:flex-row sm:items-center">
          <p className="label">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className="label">
            <Link to="/" className="link-line">
              Built with React &amp; Tailwind
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
