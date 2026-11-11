import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#f0f9f9',
          100: '#DCEEEE', // Primary Light (Soft Teal)
          600: '#1F7778', // Primary (Deep Teal)
          700: '#15595A', // Primary Dark (Dark Teal)
          900: '#0d3738',
        },
        gold: {
          400: '#E5BF6B',
          500: '#D6A84F', // Accent (Warm Gold)
          600: '#A77A25', // Accent Dark (Bronze)
        },
        charcoal: {
          800: '#233336',
          900: '#172325', // Dark (Charcoal)
        },
        slate: {
          50: '#F2F5F5', // Light Grey (Mist Grey)
          500: '#536466', // Medium Grey (Slate Grey)
        },
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
