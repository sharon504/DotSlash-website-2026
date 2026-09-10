import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: "var(--surface)",
        "surface-muted": "var(--surface-muted)",
        "foreground-muted": "var(--foreground-muted)",
        "foreground-subtle": "var(--foreground-subtle)",
        primary: "#0D52BD",
        "primary-hover": "#0A4298",
        "primary-active": "#08377E",
        border: "#DCDCDC",
        "border-dark": "#202020",
        "logo-light": "#ECECEC",
      },
      fontFamily: {
        display: ['"Clash Display"', '"Satoshi"', "sans-serif"],
        body: ["Satoshi", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;