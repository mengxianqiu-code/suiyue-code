/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Noto Serif SC"', 'serif'],
        display: ['"Playfair Display"', 'serif'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.8s ease-out',
      }
    },
  },
  plugins: [],
  corePlugins: {
    // Preflight (base styles reset) can sometimes conflict with Mini Programs, 
    // but disabling it might break Tailwind utilities.
    // We keep it enabled but might need to adjust base styles in app.css
    preflight: false, 
  }
}