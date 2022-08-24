/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
    //...custom theme
    daisyui: {
      themes: [
        {
          mytheme: {
            primary: "#a991f7",
            secondary: "#f6d860",
            accent: "#37cdbe",
            neutral: "#191d25",
            "base-100": "#ffffff",
            "base-200": "#909090",
          },
        },
        "light",
        "cupcake",
      ],
    },
  plugins: [require("daisyui")],
}
