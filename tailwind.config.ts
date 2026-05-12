import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        gold: {
          DEFAULT: "#C9A84C",
          light: "#E8C76A",
          bright: "#F0C040",
          dark: "#9C7B2E",
          deep: "#6B5210",
        },
        cream: "#FDFDFD",
        "cream-dark": "#F5F3EE",
      },
      letterSpacing: {
        widest: "0.25em",
        "ultra-wide": "0.4em",
      },
    },
  },
  plugins: [],
};

export default config;
