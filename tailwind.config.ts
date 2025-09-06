import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#7C3AED",
          muted: "#2A2A36"
        },
      },
      boxShadow: {
        soft: "0 10px 25px rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [],
} satisfies Config;
