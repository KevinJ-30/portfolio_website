/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--bg) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        'surface-2': 'rgb(var(--surface-2) / <alpha-value>)',
        fg: 'rgb(var(--fg) / <alpha-value>)',
        line: 'var(--line)',
        'line-strong': 'var(--line-strong)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Helvetica Neue', 'sans-serif'],
        display: ['Inter Tight', 'Inter', 'Helvetica Neue', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      fontSize: {
        // Fluid editorial scale — clamp keeps headlines proportional without breakpoints
        display: ['clamp(3rem, 11vw, 8.5rem)', { lineHeight: '0.9', letterSpacing: '-0.045em' }],
        h1: ['clamp(2.25rem, 6vw, 4.25rem)', { lineHeight: '1.02', letterSpacing: '-0.035em' }],
        h2: ['clamp(1.75rem, 3.6vw, 2.75rem)', { lineHeight: '1.1', letterSpacing: '-0.028em' }],
        h3: ['clamp(1.15rem, 1.8vw, 1.5rem)', { lineHeight: '1.25', letterSpacing: '-0.018em' }],
        lead: ['clamp(1.15rem, 1.6vw, 1.4rem)', { lineHeight: '1.6', letterSpacing: '-0.011em' }],
        label: ['0.8125rem', { lineHeight: '1', letterSpacing: '0.11em' }],
      },
      maxWidth: {
        prose: '68ch',
      },
      spacing: {
        section: 'clamp(4.5rem, 11vw, 9rem)',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'none' },
        },
        'wipe-in': {
          from: { transform: 'scaleX(0)' },
          to: { transform: 'scaleX(1)' },
        },
        blink: {
          '0%, 45%': { opacity: '1' },
          '50%, 95%': { opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
        'wipe-in': 'wipe-in 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
        blink: 'blink 1.4s steps(1) infinite',
      },
    },
  },
  plugins: [],
}
