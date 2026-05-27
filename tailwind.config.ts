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
        "neon-blue": "#00d4ff",
        "neon-red": "#ff0040",
        "neon-white": "#e0e0e0",
        "dark-bg": "#050505",
      },
      fontFamily: {
        cyber: ["Orbitron", "sans-serif"],
        rajdhani: ["Rajdhani", "sans-serif"],
        "mono-tech": ["Share Tech Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;