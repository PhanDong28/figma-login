/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx, ts}"],
  theme: {
    extend: {
      FontFamily: {
        sans: [
          "Inter var, sans-serif",
          { 
            fontFeatureSettings: '"cv11", "ss01"',
            fontVariationSettings: '"opsz" 32'
          },
        ],
      },
    },
  },
  plugins: [],
}