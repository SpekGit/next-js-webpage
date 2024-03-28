import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "color-secondary": "#036ea4",
        "color-primary": "#071c44",
        "color-black": "#221f1f",
        "transition": "all ease-in-out 0.3s",
        "extra-extra_small": "374px",
        "extra-small": "425px",
        "small": "576px",
        "medium": "768px",
        "large": "992px",
        "extra-large": "1200px",
        "extra-extra-large": "1400px",
        "extra-extra-extra-large": "1600px",
        "border-radius": "15px",

        'video-cover': "linear-gradient(0deg, rgba(7, 28, 68, .69), rgba(7, 28, 68, .7));",
      },
      fontSize: {
        'timer-num': ['64px', '53px'],
      }
    },
  },
  plugins: [],
};
export default config;
