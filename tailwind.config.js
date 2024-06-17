/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  //cor feia: 0c0035
  theme: {
    extend: {
      colors: {
        global: {
          DEFAULT: '#120120',
        },
      },
      backgroundColor: {
        'global': '#120120',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'quemSomos':
          'url(https://th.bing.com/th/id/R.b63720d6bb6f956e1af673d457e526a1?rik=WisjidSXmDd6uQ&pid=ImgRaw&r=0)',
      },
      dropShadow: {
        '2xl': '0 0px 15px rgba(255,255,255, 0.50)',
        '3xl': '0 0px 25px rgba(255,255,255, 0.50)',
        '4xl': '0 0px 30px rgba(255,255,255, 0.50)',
      },
      keyframes: {
        dropShadowPulse: {
          '0%, 100%': {
            filter: 'drop-shadow(0 0px 5px rgba(255,255,255, 1))',
          },
          '50%': { filter: 'drop-shadow(0 0px 40px rgba(255,255,255, 1))' },
        },
      },
      animation: {
        dropShadowPulse: 'dropShadowPulse 3s infinite',
      },
    },
  },
  plugins: [],
};
