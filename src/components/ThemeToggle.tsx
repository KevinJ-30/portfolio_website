import { motion } from 'framer-motion'
import { EASE } from '../lib/motion'
import { useTheme } from '../lib/theme'

/**
 * A single circle, half-filled. Rotating it 180° reads as day/night without
 * introducing a second icon or any colour.
 */
export default function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggle } = useTheme()

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      className={`group grid h-9 w-9 place-items-center border border-line
                  transition-colors duration-300 ease-editorial hover:border-fg ${className}`}
    >
      <motion.svg
        width="15"
        height="15"
        viewBox="0 0 16 16"
        aria-hidden="true"
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.65, ease: EASE }}
      >
        <circle cx="8" cy="8" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.25" />
        <path d="M8 1.5 A6.5 6.5 0 0 1 8 14.5 Z" fill="currentColor" />
      </motion.svg>
    </button>
  )
}
