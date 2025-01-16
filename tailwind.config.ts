import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: '80rem', // 1280px
      },
      fontFamily: {
        staatliches: ['Staatliches', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        stratos: '#010338',
        'electric-violet': '#FA03FF',
        purple: '#562AD0',
        turquoise: '#2AD8BF',
        'athens-gray': '#F7F7F7',
        'selective-yellow': '#FFB800',
        'midnight-blue': '#261A65',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
} satisfies Config;
