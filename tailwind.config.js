/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],

  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        // Main Theme
        background: "#050816",
        surface: "#0B1120",
        card: "#111827",

        // Brand Colors
        primary: "#00E5FF",
        secondary: "#8B5CF6",
        accent: "#38BDF8",

        // Text
        text: "#FFFFFF",
        muted: "#94A3B8",

        // Borders
        border: "#1E293B",

        // Status
        success: "#22C55E",
        warning: "#F59E0B",
        danger: "#EF4444",

        // Optional grayscale
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
      },

      fontFamily: {
        sans: ["Sora", "sans-serif"],
        heading: ["Space Grotesk", "sans-serif"],
      },

      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "32px",
      },

      boxShadow: {
        glow: "0 0 30px rgba(0,229,255,0.25)",
        glowPurple: "0 0 30px rgba(139,92,246,0.25)",
        card: "0 12px 40px rgba(0,0,0,0.35)",
      },

      backgroundImage: {
        hero:
          "radial-gradient(circle at top,#00E5FF22 0%,transparent 45%), radial-gradient(circle at bottom,#8B5CF622 0%,transparent 45%)",

        aurora:
          "linear-gradient(135deg,#00E5FF,#8B5CF6,#050816)",

        glass:
          "linear-gradient(180deg,rgba(255,255,255,.08),rgba(255,255,255,.02))",
      },

      keyframes: {
        float: {
          "0%,100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-12px)",
          },
        },

        glow: {
          from: {
            boxShadow: "0 0 10px #00E5FF",
          },
          to: {
            boxShadow: "0 0 35px #00E5FF",
          },
        },

        fadeUp: {
          from: {
            opacity: "0",
            transform: "translateY(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        pulseSlow: {
          "0%,100%": {
            opacity: ".6",
          },
          "50%": {
            opacity: "1",
          },
        },
      },

      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        fadeUp: "fadeUp .8s ease forwards",
        pulseSlow: "pulseSlow 5s infinite",
      },
    },
  },

  plugins: [],
};