
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
        background: '#1C181E',
        foreground: '#F5F3F7',
        card: {
          DEFAULT: '#251F29',
          foreground: '#F5F3F7',
        },
        popover: {
          DEFAULT: '#251F29',
          foreground: '#F5F3F7',
        },
        primary: {
          DEFAULT: '#442C70',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#2D2430',
          foreground: '#F5F3F7',
        },
        muted: {
          DEFAULT: '#352B38',
          foreground: '#A194A8',
        },
        accent: {
          DEFAULT: '#5538F2',
          foreground: '#FFFFFF',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: '#352B38',
        input: '#352B38',
        ring: '#5538F2',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
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
