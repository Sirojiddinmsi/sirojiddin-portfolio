import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-body)"],
        display: ["var(--font-display)"]
      },
      colors: {
        background: "#090909",
        surface: "#111111",
        foreground: "#F5F5F5",
        muted: "#A3A3A3",
        accent: "#C8A96B",
        line: "rgba(255,255,255,0.08)"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(200, 169, 107, 0.16), 0 24px 80px rgba(0, 0, 0, 0.38)"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
