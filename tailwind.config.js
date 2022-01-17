module.exports = {
  mode: 'jit',
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
       
        lg: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px',
       
      },
      background: {
        yellow: {
          50: '#fffbec'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
