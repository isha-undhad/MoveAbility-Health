import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0ea5b7", // teal / turquoise (brand)
          teal: "#0ea5b7",
        },
        secondary: {
          DEFAULT: "#0b2a4a", // deep navy (brand)
          navy: "#0b2a4a",
        },
      },
    },
  },
  plugins: [],
};

export default config;
