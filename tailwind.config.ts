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
    extend: {},
  },
  plugins: [],
};
export default config;

