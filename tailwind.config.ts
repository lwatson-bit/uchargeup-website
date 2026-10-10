import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Montserrat for headings (closest free match to the "CHARGE UP"
        // wordmark); Geist for body and UI, the same face as the console.
        display: ["Montserrat Variable", "Montserrat", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["Geist Variable", "Geist", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        // Every blue is sampled from the logo PNG: #317AA4 is the wordmark.
        // The four bar colors are deliberately NOT here; they belong to the
        // logo and to Juice only.
        brand: {
          50: "#EEF4F8",
          100: "#DCE9F1",
          500: "#317AA4",
          600: "#28678B",
          700: "#1F5F84",
        },
        ink: "#0F1B2A",
        surface: {
          0: "#FFFFFF",
          1: "#F6F8FA",
        },
        line: "#E2E8F0",
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        // the one bespoke shadow: under the kiosk render on the hero stage
        soft: "0 24px 48px -24px rgb(15 27 42 / 0.25)",
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
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
