/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#060B10",
          900: "#0B1120",
          800: "#111A2C",
          700: "#1B2740",
        },
        emerald: {
          50: "#EBFBF6",
          100: "#D2F4E9",
          300: "#6FDDBF",
          500: "#0FA981",
          600: "#0B8A6A",
          700: "#086C54",
        },
        amber: {
          200: "#FBE3B4",
          400: "#F0B857",
          500: "#E39F2E",
          600: "#C17F1B",
        },
        mist: {
          50: "#F7FAF9",
          100: "#EEF3F1",
          200: "#E2E9E6",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      backgroundImage: {
        "grad-emerald": "linear-gradient(135deg, #0B8A6A 0%, #0FA981 45%, #6FDDBF 100%)",
        "grad-dusk": "linear-gradient(180deg, #0B1120 0%, #111A2C 60%, #0B8A6A 160%)",
        "grad-gold": "linear-gradient(135deg, #E39F2E 0%, #F0B857 100%)",
        "grad-radial-glow": "radial-gradient(circle at 50% 0%, rgba(15,169,129,0.25), transparent 60%)",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(11, 17, 32, 0.15)",
        card: "0 4px 24px rgba(11, 17, 32, 0.06)",
        glow: "0 0 60px rgba(15, 169, 129, 0.35)",
      },
      borderRadius: {
        xl2: "1.25rem",
        xl3: "1.75rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(2deg)" },
        },
        drift: {
          "0%": { transform: "translateX(-6%)" },
          "100%": { transform: "translateX(6%)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: 0.5 },
          "50%": { opacity: 1 },
        },
        dash: {
          to: { strokeDashoffset: 0 },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        drift: "drift 12s ease-in-out infinite alternate",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        dash: "dash 2.4s ease-out forwards",
      },
    },
  },
  plugins: [],
};
