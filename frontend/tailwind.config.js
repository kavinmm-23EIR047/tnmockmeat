/** @type {import('tailwindcss').Config} */
export default {
  content: ['./frontend/index.html', './frontend/src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        parchment: '#E9DFC9',
        sand: '#C9B99B',
        olive: '#B8C1A2',
        sage: '#858B72',
        bark: '#6B624F',
        olivewood: '#23291D',
        chilli: '#B4432D',
        turmeric: '#DCA534'
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'Sora', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Manrope', 'Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 22px 70px rgba(35, 41, 29, 0.12)',
        crisp: '0 14px 34px rgba(35, 41, 29, 0.16)',
        insetLine: 'inset 0 0 0 1px rgba(35, 41, 29, 0.08)'
      }
    }
  },
  plugins: []
};
