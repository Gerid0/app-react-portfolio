module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "brand-blue": "#007ace",
        "brand-red": "#ff4136",

        gray: "#4f4f4f",
        late: "#fafafa",
        "dark-blue": "#005250",
        green: "#3f9345",

        primary: "#ffffff",
        "dark-primary": "#262626",

        secondary: "#f3f4f6",
        "dark-secondary": "#303030",

        tertiary: "#aeb2ba",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
