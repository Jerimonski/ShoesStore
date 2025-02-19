/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-gray": "#eeeeee",
        "dark-gray": "#5a5a5a",
        "smoke-gray": "#F3F4F6",
      },
    },
  },
  plugins: [],
}
