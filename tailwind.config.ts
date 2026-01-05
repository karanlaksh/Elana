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
        mauve: {
          50: '#faf8fc',
          100: '#f5f0f9',
          200: '#ebe2f3',
          300: '#dcc9e9',
          400: '#c8a8db',
          500: '#b389ca',
          600: '#9B7EBD',
          700: '#7d5a9a',
          800: '#674d7f',
          900: '#564168',
        },
      },
    },
  },
  plugins: [],
};
export default config;