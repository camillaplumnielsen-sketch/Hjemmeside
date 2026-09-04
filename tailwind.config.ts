import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Mørkegrøn – primær identitet
        forest: {
          50: '#eef4f0',
          100: '#d5e5db',
          200: '#a9c9b6',
          300: '#7aab8d',
          400: '#4f8a66',
          500: '#356c4b',
          600: '#27553a',
          700: '#1f4331',
          800: '#173326',
          900: '#0f261c',
          950: '#081711',
        },
        // Træfarver – accent
        wood: {
          50: '#faf5ee',
          100: '#f2e6d3',
          200: '#e4caa6',
          300: '#d3a971',
          400: '#c68f4e',
          500: '#b8783c',
          600: '#a15f31',
          700: '#84492b',
          800: '#6d3c29',
          900: '#5b3324',
          950: '#331a12',
        },
        cream: {
          50: '#fdfcf9',
          100: '#faf7f0',
          200: '#f4eee1',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2rem, 6vw, 5.25rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.25rem, 4.5vw, 3.75rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.75rem, 3vw, 2.75rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
      },
      maxWidth: {
        content: '1240px',
      },
      spacing: {
        section: 'clamp(4rem, 9vw, 8rem)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        soft: '0 2px 8px -2px rgba(15, 38, 28, 0.08), 0 12px 32px -8px rgba(15, 38, 28, 0.12)',
        lift: '0 12px 40px -12px rgba(15, 38, 28, 0.28)',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        shimmer: 'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
