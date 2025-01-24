import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'bg-pink-50',
    'bg-blue-50',
    'bg-green-50',
    'bg-purple-50',
    'bg-orange-50',
    'text-pink-500',
    'text-blue-500',
    'text-green-500',
    'text-purple-500',
    'text-orange-500',
    'border-pink-100',
    'border-blue-100',
    'border-green-100',
    'border-purple-100',
    'border-orange-100',
    'from-pink-200',
    'from-sky-200',
    'from-emerald-200',
    'from-fuchsia-200',
    'from-orange-200',
    'via-rose-100',
    'via-indigo-100',
    'via-lime-100',
    'via-purple-100',
    'via-amber-100',
    'to-pink-50',
    'to-blue-50',
    'to-green-50',
    'to-yellow-50',
  ],
  theme: {
    extend: {
      aspectRatio: {
        '1.91/1': '1.91 / 1',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            h2: {
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            h3: {
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
            },
            p: {
              marginTop: '0.75rem',
              marginBottom: '0.75rem',
            },
            ul: {
              marginTop: '0.75rem',
              marginBottom: '0.75rem',
            },
            ol: {
              marginTop: '0.75rem',
              marginBottom: '0.75rem',
            },
            li: {
              marginTop: '0.25rem',
              marginBottom: '0.25rem',
            },
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
