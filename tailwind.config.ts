import type { Config } from "tailwindcss";

import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          background: colors.pink[50],
          text: colors.purple[950],
        },
        dark: {
          background: colors.green[950],
          text: colors.red[50],
        },
      },
    },
  },
  plugins: [],
  darkmode: "class",
};

export default config;
