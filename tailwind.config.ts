import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#003B73",
        brand: "#005CB9",
        ice: "#39A8FF",
        mist: "#F4F7FA"
      },
      boxShadow: {
        premium: "0 24px 70px rgba(0, 59, 115, 0.18)",
        glass: "0 18px 60px rgba(0, 59, 115, 0.14)"
      },
      backgroundImage: {
        "radial-ice": "radial-gradient(circle at top left, rgba(57,168,255,0.32), transparent 36%), radial-gradient(circle at bottom right, rgba(0,92,185,0.24), transparent 42%)"
      }
    }
  },
  plugins: []
};

export default config;
