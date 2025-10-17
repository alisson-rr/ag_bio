/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'teal': {
          DEFAULT: '#2C7464',
          light: '#3a8e7d',
          dark: '#235c4f',
        },
        'rose': {
          DEFAULT: '#FEA5A4',
          light: '#ffc4c3',
          dark: '#fe8685',
        },
        'charcoal': {
          DEFAULT: '#292726',
          light: '#3d3b39',
        },
        'cream': '#F5F0EB',
      },
      fontFamily: {
        'display': ['"Red Hat Display"', 'sans-serif'],
        'sans': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
