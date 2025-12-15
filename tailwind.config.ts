import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // Exclude backup directories (fast-glob supports negation with !)
    "!./src/app/_api_backup/**",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'float': {
          '0%, 100%': { 
            transform: 'translateY(0px) scale(1)', 
            opacity: '0.7' 
          },
          '50%': { 
            transform: 'translateY(-20px) scale(1.2)', 
            opacity: '1' 
          },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out both',
        'float': 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;

