/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor:{
        'primario': '#ff0386',
        'secondario': '#62439a',
        'terciario': '#ff0074'
      },
      colors:{
        'primario': '#ff0386',
        'secondario': '#62439a',
        'terciario': '#ff0074'
      },
      
      animation: {
        'neon-pulse': 'neonPulse 3s linear infinite',
      },
      keyframes: {
        neonPulse: {
          '0%': { borderColor: '#ff0386', boxShadow: '0 0 15px #ff0386' },
          '33%': { borderColor: '#62439a', boxShadow: '0 0 15px #62439a' },
          '66%': { borderColor: '#ff0074', boxShadow: '0 0 15px #ff0074' },
          '100%': { borderColor: '#ff0386', boxShadow: '0 0 15px #ff0386' }
        },
      }
    },
  },
  plugins: [],
}
