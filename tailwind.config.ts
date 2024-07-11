import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Poppins: ["var(--font-Poppins)"],
        Roboto: ["var(--font-Roboto)"],
        Inter: ["var(--font-inter)"],
      },
    },
    screens: {
      'mobile': '1px',
      'mobile-410': '410px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'sm': '580px',
      'laptop': '890px',
      'desktop-1030w': '1030px',
      'desktop': '1290px',
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;