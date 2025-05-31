/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx}", "./index.html"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" }
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#2C3E50",
          50: "#8FA8C1",
          100: "#7E9BB8",
          200: "#5C81A6",
          300: "#46637F",
          400: "#395169",
          500: "#2C3E50",
          600: "#1F2B37",
          700: "#12181F",
          800: "#050607",
          900: "#000000",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "#E74C3C",
          50: "#FADBD8",
          100: "#F8CAC5",
          200: "#F4A99F",
          300: "#F08779",
          400: "#EC6553",
          500: "#E74C3C",
          600: "#D12B1A",
          700: "#A22114",
          800: "#73170E",
          900: "#440E08",
          foreground: "hsl(var(--secondary-foreground))"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
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
        "slide-from-left": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-to-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide-from-left": "slide-from-left 0.3s ease-out",
        "slide-to-left": "slide-to-left 0.3s ease-out"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
}
