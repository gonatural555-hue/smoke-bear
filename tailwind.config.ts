import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#0D0D0C",
        "charcoal-soft": "#151311",
        "black-smoke": "#090807",
        cream: "#F1E4CF",
        "cream-soft": "#E8D8BE",
        paper: "#EFE2CB",
        copper: "#B65A32",
        "copper-dark": "#8F3F22",
        "burnt-orange": "#D16035",
        wood: "#5B3826",
        walnut: "#2A1B14",
        bordo: "#4A1412",
        petrol: "#0E4C55",
        "petrol-dark": "#07343B",
        "gold-aged": "#B58A4A",
        "muted-text": "#B9A994",
      },
      fontFamily: {
        display: ["var(--font-rye)", "serif"],
        nav: ["var(--font-oswald)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        "site": "1440px",
      },
      boxShadow: {
        ember: "0 24px 80px rgba(9, 8, 7, 0.45)",
        card: "0 18px 50px rgba(13, 13, 12, 0.22)",
      },
      backgroundImage: {
        "paper-noise":
          "radial-gradient(circle at 12% 18%, rgba(91,56,38,0.10), transparent 24%), radial-gradient(circle at 82% 12%, rgba(181,138,74,0.10), transparent 22%), linear-gradient(180deg, #F1E4CF 0%, #E8D8BE 100%)",
        "charcoal-texture":
          "radial-gradient(circle at 18% 10%, rgba(182,90,50,0.18), transparent 24%), radial-gradient(circle at 80% 8%, rgba(14,76,85,0.18), transparent 26%), linear-gradient(180deg, #151311 0%, #090807 100%)",
        "smoke-fade":
          "linear-gradient(90deg, rgba(9,8,7,0.92) 0%, rgba(9,8,7,0.76) 42%, rgba(9,8,7,0.32) 100%)",
      },
    },
  },
  plugins: [typography],
};

export default config;
