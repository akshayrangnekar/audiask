/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: '#6b69ff',
        secondary: '#f7c059',
        tertiary: '#fe7475',
        quaternary: '#3a855d', // Fourth color

        'primary-inverse': '#ffffff',
        'secondary-inverse': '#000000',
        'tertiary-inverse': '#000000',
        'quaternary-inverse': '#000000',

        // Duller version of primary-inverse
        'primary-inverse-dull': '#cccccc',
      },
    },
  },
  plugins: [],
};
