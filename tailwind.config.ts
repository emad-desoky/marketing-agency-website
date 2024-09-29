import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

const addVariablesForColors = ({ addBase, theme }: { addBase: any; theme: any }) => {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
};

const config: Config = {
  darkMode: ["class"], // Enable dark mode using the 'class' strategy
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // Adding custom keyframes and animations
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
      // Adding custom font family
      fontFamily: {
        nourd: ['Nourd', 'sans-serif'], // Add the Nourd font family here
      },
      // Defining font weights
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        heavy: 800,
      },
      // Custom letter spacing and line height
      letterSpacing: {
        'custom-negative': '-74px', // Custom letter spacing
      },
      lineHeight: {
        'tight': '1', // Custom line height
      },
      // Extend colors if needed
      colors: {
        // Define custom colors here if needed
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors, // Adding the color variables plugin here
  ],
};

export default config;
