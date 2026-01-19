/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // v2 Design System with CSS Variables
        dark: {
          bg: "var(--bg-color)",
          card: "var(--card-color)",
          input: "var(--input-color)",
        },
        primary: {
          DEFAULT: "var(--primary-start)",
          purple: "var(--primary-end)",
        },
        accent: {
          pink: "var(--primary-start)",
          purple: "var(--primary-end)",
          yellow: "#fbbf24", // For stars
        },
        // Add gray palette override if needed for text-muted
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, var(--primary-start), var(--primary-end))',
        'gradient-blob': 'linear-gradient(135deg, var(--blob-color) 0%, var(--primary-end) 100%)',
      },
      borderColor: {
        DEFAULT: "var(--border-color)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        'twinkle': 'twinkle 3s ease-in-out infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: 0.2, transform: 'scale(0.8)' },
          '50%': { opacity: 1, transform: 'scale(1.2)' },
        },
      },
    },
  },
  plugins: [],
};