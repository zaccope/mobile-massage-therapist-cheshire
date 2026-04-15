import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm off-black base — never pure #000
        ink: {
          950: '#0B0A08',
          900: '#121110',
          800: '#1A1816',
          700: '#26231F',
          600: '#35312B',
          500: '#4A443C',
          400: '#6B6458',
          300: '#938B7D',
          200: '#C1BAAC',
          100: '#E6E0D4',
          50: '#F5F1E8',
        },
        // Desaturated antique gold — drawn from the poster, toned down from neon
        gold: {
          900: '#5C4A1F',
          800: '#7A6026',
          700: '#9B7A2E',
          600: '#B8913A',
          500: '#CDA24A',
          400: '#DAB260',
          300: '#E5C481',
          200: '#EED8A8',
          100: '#F6E9CB',
          50: '#FBF5E6',
        },
      },
      fontFamily: {
        heading: ['var(--font-serif)', 'Playfair Display', 'Georgia', 'serif'],
        body: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
