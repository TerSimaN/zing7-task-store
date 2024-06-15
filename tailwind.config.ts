import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'store-gray': {
          50: '#F9FAFB',
          100: '#F4F6F8',
          300: '#C4CDD5',
          400: '#919EAB',
          450: '#959EAD',
          500: '#637381',
          600: '#5A7184',
          650: '#454F5B',
          800: '#212B36',
          900: '#161D25',
        },
        'store-blue': {
          600: '#5C6AC4',
          700: '#47C1BF',
          750: '#43467F',
          900: '#006FBB',
        },
        'store-red': {
          600: '#DE3618',
        },
        'store-orange': {
          500: '#EEC200',
        }
      },
      fontFamily: {
        rubik: ['var(--font-rubik)'],
        roboto: ['var(--font-roboto)']
      }
    },
    container: {
      padding: {
        xl: '0rem'
      },
      center: true,
      screens: {
        sm: '1110px'
      }
    }
  },
  plugins: [],
};
export default config;
