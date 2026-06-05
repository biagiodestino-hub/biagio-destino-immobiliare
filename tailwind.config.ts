import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#091f38",
        "navy-soft": "#0e2e4f",
        sand: "#e8d6b8",
        "sand-light": "#f6f0e2",
        gold: "#c79e52",
        mist: "#f6f7f8",
        stone: "#d9e0e3",
        whatsapp: "#16ab5c",
        ink: "#1f262e"
      },
      boxShadow: {
        premium: "0 18px 44px -24px rgba(9,31,56,0.32)",
        soft: "0 14px 30px -22px rgba(9,31,56,0.28)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
