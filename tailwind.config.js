/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      dropShadow: {
        '2xl': '0 0px 15px rgba(255,255,255, 0.50)',
        '3xl': '0 0px 25px rgba(255,255,255, 0.50)',
        '4xl': '0 0px 30px rgba(255,255,255, 0.50)',
      },
      keyframes: {
        dropShadowPulse: {
          '0%, 100%': {
            filter: 'drop-shadow(0 0px 10px rgba(255,255,255, 0.50))',
          },
          '50%': { filter: 'drop-shadow(0 0px 30px rgba(255,255,255, 0.50))' },
        },
      },
      animation: {
        dropShadowPulse: 'dropShadowPulse 3s infinite',
      },
    },
  },
  plugins: [],
};
