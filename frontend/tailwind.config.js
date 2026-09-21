/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'bg-deep': '#0d1b12',
        'bg-mid': '#16301f',
        'ink': '#f3ecd9',
        'ink-dim': '#c9c2a8',
        'gold': '#c9a75b',
        'gold-bright': '#e6c777',
      },
      fontFamily: {
        amiri: ['Amiri', 'serif'],
        jost: ['Jost', 'sans-serif'],
      },
      keyframes: {
        rise: {
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        draw: {
          to: { strokeDashoffset: '0' },
        },
        pulse2: {
          '0%': { boxShadow: '0 0 0 0 rgba(230,199,119,0.55)' },
          '70%': { boxShadow: '0 0 0 9px rgba(230,199,119,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(230,199,119,0)' },
        },
        drift1: {
          '0%, 100%': { transform: 'translate(0,0) rotate(0deg)' },
          '50%': { transform: 'translate(-14px,18px) rotate(18deg)' },
        },
        drift2: {
          '0%, 100%': { transform: 'translate(0,0) rotate(0deg)' },
          '50%': { transform: 'translate(16px,-14px) rotate(-14deg)' },
        },
      },
      animation: {
        rise: 'rise 0.9s cubic-bezier(0.22,1,0.36,1) forwards',
        draw: 'draw 1.4s 0.9s cubic-bezier(0.22,1,0.36,1) forwards',
        pulse2: 'pulse2 2.4s ease-out infinite',
        drift1: 'drift1 13s ease-in-out infinite',
        drift2: 'drift2 17s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}