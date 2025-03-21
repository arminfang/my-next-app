import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,css}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      keyframes: {
        move: {},
      },
      spacing: {},
      minHeight: {
        "100vh-56": "calc(100vh - 56px)",
      },
      width: {
        "100": "100%",
      },
      height: {
        "100": "100%",
      },
      zIndex: {
        "1000": "1000",
      },
    },
  },
  plugins: [],
};
export default config;
