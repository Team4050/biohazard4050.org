/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,md,mdx}", "./wiki/**/*.{md,mdx}"],
  darkMode: ["class", "[data-theme='dark']"],
  corePlugins: { preflight: false },
  plugins: [require("@tailwindcss/typography")],
  theme: {
    screens: {
      xs: "576px",
      sm: "768px",
      md: "992px",
      lg: "1200px",
      xl: "1400px",
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", "sans-serif"],
      },
      colors: {
        primary: "var(--mantine-color-brand-green-6)",
        primaryLight: "var(--mantine-color-brand-green-6)",
        yellow: "var(--mantine-color-brand-yellow-6)",
        orange: "var(--mantine-color-brand-orange-6)",
        blue: "var(--mantine-color-brand-blue-6)",
        gray: "var(--mantine-color-brand-gray-6)",
        dark: "var(--mantine-color-black)",
        white: "var(--mantine-color-white)",
      },
    },
  },
};
