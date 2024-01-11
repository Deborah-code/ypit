import type { Config } from 'tailwindcss'

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
          white: '#FFFFFF',
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
      },
  },
  plugins: [],
}
export default config
