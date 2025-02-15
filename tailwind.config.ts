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
        Dark:'#7D1C4A',
        light:'#D17D98',
        mid:'#D17D98',
        lightmid:'#F4CCE9',
        textGray:"#828282",
        backGery:'#eff0f2',
      },
    },
  },
  plugins: [],
} satisfies Config;
