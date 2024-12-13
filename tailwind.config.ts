import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
 content: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,ts,tsx}"],
 theme: {
  extend: {
   fontFamily: {
    geist: ["Geist Mono", ...fontFamily.mono],
   },
   colors: {
    background: "#101110",
   },
   animation: {
    rays: "rotate-hue 20s ease-out infinite",
   },
   keyframes: {
    "rotate-hue": {
     "0%": {
      filter: "hue-rotate(540deg) saturate(7.3)",
     },
     to: {
      filter: "hue-rotate(180deg) saturate(7.3)",
     },
    },
   },
  },
 },
} satisfies Config;
