import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import { EASE } from '../lib/motion'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { path: '/', label: 'Index', index: '01' },
  { path: '/projects', label: 'Work', index: '02' },
  { path: '/timeline', label: 'Experience', index: '03' },
  { path: '/about', label: 'About', index: '04' },
  { path: '/resume', label: 'Resume', index: '05' },
]

export default function Navbar() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.4 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile sheet on navigation
  useEffect(() => setMenuOpen(false), [location.pathname])

  // Lock scroll behind the mobile sheet
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50"
        initial={{ y: -64 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <div
          className={`transition-colors duration-500 ease-editorial ${
            scrolled || menuOpen
              ? 'border-b border-line bg-bg/80 backdrop-blur-xl'
              : 'border-b border-transparent'
          }`}
        >
          <nav className="container-x flex h-16 items-center justify-between md:h-20">
            <Link
              to="/"
              className="font-display text-[0.95rem] font-semibold uppercase tracking-[0.14em]"
            >
              Kevin Jacob
            </Link>

            <div className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="group relative px-3.5 py-2 font-mono text-label uppercase"
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span
                      className={`transition-colors duration-300 ease-editorial ${
                        isActive ? 'text-fg' : 'text-fg/65 group-hover:text-fg'
                      }`}
                    >
                      {item.label}
                    </span>
                    <span
                      className={`absolute inset-x-3.5 bottom-1 h-px origin-left bg-fg transition-transform
                                  duration-500 ease-editorial ${
                                    isActive
                                      ? 'scale-x-100'
                                      : 'scale-x-0 group-hover:scale-x-100'
                                  }`}
                    />
                  </Link>
                )
              })}
              <span className="mx-3 h-4 w-px bg-[var(--line)]" />
              <ThemeToggle />
            </div>

            <div className="flex items-center gap-3 md:hidden">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                className="grid h-9 w-9 place-items-center border border-line transition-colors
                           duration-300 ease-editorial hover:border-fg"
              >
                <span className="relative block h-[9px] w-4">
                  <motion.span
                    className="absolute left-0 top-0 block h-px w-full bg-fg"
                    animate={menuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.4, ease: EASE }}
                  />
                  <motion.span
                    className="absolute bottom-0 left-0 block h-px w-full bg-fg"
                    animate={menuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.4, ease: EASE }}
                  />
                </span>
              </button>
            </div>
          </nav>
        </div>

        {/* Scroll progress hairline */}
        <motion.div
          className="h-px origin-left bg-fg"
          style={{ scaleX: progress }}
        />
      </motion.header>

      {/* Mobile sheet */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-bg md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <div className="container-x flex h-full flex-col justify-center">
              <ul className="space-y-1">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.path}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 * i + 0.08, duration: 0.55, ease: EASE }}
                  >
                    <Link
                      to={item.path}
                      className="flex items-baseline gap-5 border-b border-line py-5"
                    >
                      <span className="label w-8">{item.index}</span>
                      <span
                        className={`font-display text-[2rem] font-semibold tracking-[-0.03em] ${
                          location.pathname === item.path ? 'text-fg' : 'text-fg/50'
                        }`}
                      >
                        {item.label}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
