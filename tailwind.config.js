/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          burgundy: 'hsl(345, 75%, 25%)',
          gold: 'hsl(45, 80%, 48%)',
          dark: 'hsl(222, 47%, 11%)',
          card: 'hsl(223, 47%, 16%)',
          light: 'hsl(210, 20%, 98%)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Lora', 'serif'],
      },
      boxShadow: {
        premium: '0 8px 30px rgba(0, 0, 0, 0.04)',
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
      },
      backdropBlur: {
        premium: '8px',
      }
    },
  },
  plugins: [],
}
