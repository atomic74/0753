const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./templates/**/*.twig'],
  theme: {
    fontFamily: {
      primary: ['Nunito', 'sans-serif'],
      //   secondary: ['ui-sans-serif', 'sans-serif'],
    },
    screens: {
      sm: '450px',
      md: '768px',
      lg: '1024px',
      xl: '1350px',
      // We want the maximum container to stop at 1350px
      // so we set the last breakpoint to the same value
      '2xl': '1350px',
      // The original Tailwind 2xl breakpoint value
      // '2xl': '1536px',
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        brand: {
          // put the custom site color here
          blue: '#01455e',
          wine: '#830137',
          'wine-light': '#854158',
          brown: '#430000',
          gold: '#b4782c',
          beige: '#faf5ef',
          green: '#016367',
          purple: '#3b3d5a',
          text: '#404040',
          link: '#1268c1',
        },
        content: {
          'text': '#404040',
          'link': '#1268c1',
          'h2': '#830137',
          'h3': '#430000',
          'h4': '#854158',
          'divider': '#b4782c',
          image: {
            'caption': '#430000',
            'ring': colors.gray[300],
          },
          table: {
            'heading': '#fff',
            'heading-bg': '#430000',
            'border': '#430000',
            'grid-row': '#430000',
            'grid-column': '#430000',
            'alt-row-bg': '#faf5ef',
          },
          doc: {
            'size': '#797979',
            'description': colors.gray[500],
            'card-bg': colors.white,
            'card-ring': colors.gray[300],
          },
        },
        social: {
          facebook: '#3c5a99',
          linkedin: '#0077b5',
          twitter: '#55acee',
          pinterest: '#cb2027',
        },
      },
    },
    backgroundImage: {
      'pattern-blue': "url('/img/background-blue.png')",
      'pattern-gold': "url('/img/background-gold.png')",
      'pattern-green': "url('/img/background-green.png')",
      'pattern-purple': "url('/img/background-purple.png')",
      'pattern-wine': "url('/img/background-wine-light.png')",
      'chevron-line': "url('/img/chevron-divider-line-segment.png')",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
