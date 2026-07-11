/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#fafafa",
        primary: "#7c3aed",
        "primary-hover": "#6d28d9",
        secondary: "#0ea5e9",
        "secondary-hover": "#0284c7",
        accent: "#ff2d78",
        "accent-hover": "#e11d6b",
        surface: "#121212",
        "surface-hover": "#1a1a1a",
        "surface-elevated": "#1e1e1e",
        muted: "#262626",
        "muted-foreground": "#a3a3a3",
        border: "rgba(255, 255, 255, 0.08)",
        "border-hover": "rgba(255, 255, 255, 0.12)",
        "border-strong": "rgba(255, 255, 255, 0.15)",
        glass: "rgba(255, 255, 255, 0.04)",
        "glass-hover": "rgba(255, 255, 255, 0.06)",
        "glass-border": "rgba(255, 255, 255, 0.08)",
        success: "#22c55e",
        warning: "#f59e0b",
        error: "#ef4444",
        info: "#3b82f6",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      boxShadow: {
        "glow-primary": "0 0 20px rgba(124, 58, 237, 0.3)",
        "glow-secondary": "0 0 20px rgba(14, 165, 233, 0.3)",
        "glow-accent": "0 0 20px rgba(255, 45, 120, 0.3)",
        card: "0 1px 3px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.2)",
        "card-hover": "0 4px 12px rgba(124, 58, 237, 0.15), 0 2px 4px rgba(0, 0, 0, 0.3)",
      },
      borderRadius: {
        sm: "0.375rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.5rem",
        full: "9999px",
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "slide-up": "slide-up 0.5s ease-out",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(124, 58, 237, 0.3)" },
          "50%": { boxShadow: "0 0 30px rgba(124, 58, 237, 0.5)" },
        },
      },
    },
  },
  plugins: [],
};