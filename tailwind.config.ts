import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#01204e",
          "primary-light": "hsl(var(--primary-light))",
          foreground: "hsl(var(--primary-foreground))",
        },

        secondary: {
          DEFAULT: "#30bced",
          "secondary-light": "hsl(var(--secondary-light))",
          "secondary-dark": "hsl(var(--secondary-dark))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      screens: {
        "2xs": "320px",
        // min 320 max 575px
        xs: "460px",

        sm: "576px",
        // => @media (min-width: 576px max 767px) { ... }

        md: "768px",
        // => @media (min-width: 768px max 991px) { ... }

        lg: "992px",
        // => @media (min-width: 992px max 1239px) { ... }

        xl: "1240px",
        // => @media (min-width: 1240px 1535px) { ... }

        "2xl": "1536px",

        "3xl": "1836px",

        "4xl": "2060px",

        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
