const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./index.html', './src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        osans: ['Open Sans', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.19em',
      },
      screens: {
        smax: { max: '767px' },
        sl: { max: '500px' },
        tablet: { min: '768px', max: '820px',  },
      },
    },
  },
  plugins: [],
});
