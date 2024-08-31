import type { Config } from "tailwindcss";
import {nextui} from '@nextui-org/theme';

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        mono: ['var(--font-roboto-mono)'],
        cairo: ['var(--font-cairo)'],
        exo_2: ['var(--font-exo-2)'],
        josefin_sans: ['var(--font-josefin-sans)'],
        maven_pro: ['var(--font-maven-pro)'],
        ubuntu: ['var(--font-ubuntu)'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui(
      {
        addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
        defaultTheme: "light", // default theme from the themes object
        defaultExtendTheme: "light", // default theme to extend on custom themes
        layout: {}, // common layout tokens (applied to all themes)
        themes: {
          light: {
            colors: {
              background: "#FFFFFF",
              foreground: "#312107",
              primary: {
                foreground: "#312107",
                DEFAULT: "#f5a524",
              },
            }, // light theme colors
          },
          dark: {
            colors: {
              background: "#18181b",
              foreground: "#ECEDEE",
              primary: {
                foreground: "#312107",
                DEFAULT: "#f5a524",
              },
            },
          }, // dark theme colors
        },
      }
    )
  ],
};

export default config;
