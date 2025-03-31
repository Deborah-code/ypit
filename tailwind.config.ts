import type { Config } from 'tailwindcss'
const { fontFamily } = require('tailwindcss/defaultTheme')
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
    theme: {
      extend: {
        colors: {
          purple: {
            100: '#5100BF',
            50: '#AF8AE2',
            20: '#EEE6F9',
          },
          yellow: {
            100: '#FFD855',
            50: '#FFEBAA',
            30: '#FFF9E6',
          },
          black: {
            100: '#000000',
            70: '#3A3A3A',
            50: '#626262',
            30: '#ADADAD',
          },
          orange: {
            100: "#FA8A1A",
            20: "#FFF4E9"
          },
          white: '#FFFFFF',
          gray: {
            50: '#ECECEC',
            70: '#5B5A5A',
            75: '#D5D5D5',
            150: '#CDCCCE'
          },
          green: 'rgba(49, 255, 142, 0.15)'
          
        },
        linearGradientColors: {
          'purple-yellow': ['91deg', '#5100BF 14.44%', '#FFD855 119.53%'],
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        },
        fontSize: {
          '1': '64px',
          '2': '56px',
          '3': '40px',
          '4': '24px',
          '5': '20px',
          '6': '16px',
          '7': '14px',
          '8': '12px',
          '9': '10px',
        },
        spacing: {
          '1': '96px',
          '2': '72px',
          '3': '64px',
          '4': '56px',
          '5': '48px',
          '6': '40px',
          '7': '32px',
          '8': '24px',
          '9': '16px',
        },
        fontFamily: {
          sans: ['var(--font-sans)', ...fontFamily.sans],
          bigshoulder: ["var(--font-big-shoulders-display)"],
          neue: ['var(--font-neue)'],
        },
        screens: {
          'max-sm': { max: '600px' }, 
        
                },
      },
  },
  plugins: [],
}
export default config
