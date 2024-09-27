import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        "light-gray": "var(--light-gray)",
        "dark-gray": "var(--dark-gray)",
      },
      backgroundImage: {
        "gradient-overlay": "linear-gradient(0deg, #000 13%, transparent 50%);",
      },
    },
  },
  plugins: [],
};
export default config;
