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
        primary: '#ffffff',
        secondary: '#2C2C2C',
        background: '#EFEFEF',
        accent: '#157F1F'
      },

      fontFamily: {
        roboto: ['var(--font-roboto)', 'helvetica', 'sans-serif']
      }
    },
  },

  plugins: [
    require('daisyui')
  ],

  daisyui: {
    themes: []
  },
} satisfies Config;
