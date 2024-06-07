import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      background: "var(--background)",
      contrast: "var(--contrast)",
      text: "var(--text)",
      accent: "var(--accent)",
    },
  },
  plugins: [],
  darkmode: "media",
};

export default config;