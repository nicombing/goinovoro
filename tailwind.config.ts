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
        brand: {
          blue: "#0009F2", // From Brikken exact blue
          "blue-dark": "#0008D0",
        },
        splash: {
          pastel: "#E2E4E9", // From user request
        },
        text: {
          dark: "#333333",
          muted: "#787878",
        },
      },
      fontFamily: {
        neue: ["var(--font-neue)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.02em",
        widest: "0.1em",
      },
    },
  },
  plugins: [],
};
export default config;
