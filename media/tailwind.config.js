module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: (theme) => ({
        phone: "760px",
      }),
      width: (theme) => ({
        phone: "400px",
      }),
      borderRadius: (theme) => ({
        phone: "60px",
      }),
      borderWidth: (theme) => ({
        phone: "14px",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
