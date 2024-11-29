/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Include all files in the src folder
    "./pages/**/*.{js,ts,jsx,tsx}", // Include all files in the pages folder
    "./components/**/*.{js,ts,jsx,tsx}", // Include all files in the components folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
