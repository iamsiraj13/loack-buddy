/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 1024px) { ... }

        lg: "1024px",
        // => @media (min-width: 1280px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
        xxl: "1400px",
        // => @media (min-width: 1540px) { ... }
        "2xl": "1540px",
        // => @media (min-width: 1540px) { ... }
      },
    },
  },
  plugins: [],
};
