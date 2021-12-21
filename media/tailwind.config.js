module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: (theme) => ({
        // phone: "550px",
        phone: "1045px",
      }),
      width: (theme) => ({
        // phone: "1045px",
        phone: "550px",
      }),
      borderRadius: (theme) => ({
        phone: "60px",
      }),
      borderWidth: (theme) => ({
        phone: "14px",
      }),
      fontFamily: {
        'bodoni': ['Bodoni','sans']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
