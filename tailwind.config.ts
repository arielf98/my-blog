import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "hero": "url(/bg-hero.jpg)"
      },
      colors: {
        "custom-black": "#232536",
        "custom-secondary": "#FFD050",
        "lavender": "#F4F0F8",
        "purple": "#592EA9",
        "medium-gray": "#6D6E76",
        "dark-grey": "#4C4C4C",
        "light-yellow": "#FBF6EA",
      },
    },
  },
  plugins: [],
};
export default config;
