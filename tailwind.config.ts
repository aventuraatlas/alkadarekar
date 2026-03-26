
import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['PT Sans', 'sans-serif'],
        headline: ['Alegreya', 'serif'],
        code: ['monospace'],
      },
      colors: {
        background: '#14110E',
        foreground: '#F7F5F2',
        card: {
          DEFAULT: '#1F1A16',
          foreground: '#F7F5F2',
        },
        popover: {
          DEFAULT: '#1F1A16',
          foreground: '#F7F5F2',
        },
        primary: {
          DEFAULT: '#F59E0B',
          foreground: '#14110E',
        },
        secondary: {
          DEFAULT: '#26211C',
          foreground: '#F7F5F2',
        },
        muted: {
          DEFAULT: '#332C26',
          foreground: '#A89F94',
        },
        accent: {
          DEFAULT: '#FBBF24',
          foreground: '#14110E',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: '#332C26',
        input: '#332C26',
        ring: '#F59E0B',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'reveal': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'reveal': 'reveal 1.5s ease-in-out forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
