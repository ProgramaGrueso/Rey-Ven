/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rey: {
          dark: "#0A0A0A",
          surface: "#111111",
          card: "#181818",
          border: "#262626",
          gold: "#F59E0B",
          goldDark: "#D97706",
          goldLight: "#FBBF24",
          goldGlow: "rgba(245, 158, 11, 0.15)",
          cream: "#FAF8F5",
          redAccent: "#DC2626"
        }
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 10px rgba(245, 158, 11, 0.2)' },
          '100%': { boxShadow: '0 0 25px rgba(245, 158, 11, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}
