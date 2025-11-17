/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f9f9',
          100: '#b3f0f0',
          200: '#80e6e6',
          300: '#4ddddd',
          400: '#26d4d4',
          500: '#00bfbf', // Main tropical turquoise
          600: '#00a6a6',
          700: '#008c8c',
          800: '#007373',
          900: '#005959',
        },
        secondary: {
          50: '#faf8f5',
          100: '#f5f0e8',
          200: '#ebe0d0',
          300: '#e0d1b8',
          400: '#d6c1a0',
          500: '#c9ab7e', // Warm sand beige
          600: '#b8976a',
          700: '#a68357',
          800: '#8a6d47',
          900: '#6e5738',
        },
        accent: {
          50: '#ffe9e6',
          100: '#ffccc4',
          200: '#ffa599',
          300: '#ff7e6e',
          400: '#ff6150',
          500: '#ff5a47', // Coral
          600: '#f54433',
          700: '#e63527',
          800: '#d4271b',
          900: '#b81a0f',
        },
        background: {
          DEFAULT: '#fafaf8',
          dark: '#1a1a1a',
        },
        text: {
          primary: '#1a1a1a',
          secondary: '#6b7280',
          light: '#9ca3af',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'island': '0 10px 40px rgba(0, 191, 191, 0.1)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      backgroundImage: {
        'tropical-gradient': 'linear-gradient(135deg, #00bfbf 0%, #00a6a6 50%, #008c8c 100%)',
        'sunset-gradient': 'linear-gradient(135deg, #ff5a47 0%, #ff7e6e 50%, #ffa599 100%)',
        'sand-gradient': 'linear-gradient(180deg, #fafaf8 0%, #f5f0e8 100%)',
        'glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}
