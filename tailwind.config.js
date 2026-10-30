/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bmw: {
          dark: '#0b0c10',
          darker: '#07080a',
          card: '#151922',
          cardHover: '#1c2230',
          border: '#2a3342',
          mBlue: '#0066B1',
          mLightBlue: '#00a3e0',
          mDarkBlue: '#002B49',
          mRed: '#E30613',
          mDarkRed: '#A6000B',
          silver: '#C5C6C7',
          platinum: '#E5E7EB',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'm-stripe': 'linear-gradient(135deg, #0066B1 0%, #0066B1 33.33%, #002B49 33.33%, #002B49 66.66%, #E30613 66.66%, #E30613 100%)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: 1, filter: 'drop-shadow(0 0 15px rgba(0, 102, 177, 0.8))' },
          '50%': { opacity: 0.6, filter: 'drop-shadow(0 0 5px rgba(0, 102, 177, 0.3))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
