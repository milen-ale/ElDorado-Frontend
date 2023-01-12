const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./index.html', './src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        osans: ['Open Sans', 'sans-serif'],
        'osans-light': ['Open Sans Light', 'sans-serif'],
        'osans-condensed': ['Open Sans Condensed', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.19em',
      },
      screens: {
        smax: { max: '767px' },
        sl: { max: '500px' },
      },
    },
  },
  plugins: [],
});
