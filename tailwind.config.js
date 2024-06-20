// module.exports = {
//   purge: ["./src/**/*.{js,jsx}"],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [require("daisyui")],
// };

module.exports = {
  purge: ["./src/**/*.{js,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        "pulse-scale": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.5)" },
        },
      },
      animation: {
        "pulse-scale": "pulse-scale 1s ease-in-out infinite",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
