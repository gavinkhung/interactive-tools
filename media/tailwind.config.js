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
        bodoni: ["Bodoni", "sans"],
      },
      keyframes: {
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        on: {
          "0%": { backgroundColor: "black" },
          "100%": { backgroundColor: "transparent" },
        },

        disappear: {
          "0%": { display: "block" },
          "50%": {
            backgroundColor: "transparent",
          },
          "100%": {
            display: "none",
            zIndex: "0",
            backgroundColor: "transparent",
          },
        },
      },
      animation: {
        on: "on 1s ease-in-out 0s 1 normal forwards",
        disappear: "disappear 2s ease-in-out 0s 1 normal forwards",
        fade: "fade 1s ease-in-out 0s 1 normal forwards",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
