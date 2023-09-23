/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: ["bg-[#DCB280]", "bg-[#C1272D]", "bg-[#FC9925]"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        mulish: ["Mulish"],
        nunito: ["Nunito"],
        raleway: ["Raleway"],
      },
      colors: {
        pred: "#C1272D",
      },
      dropShadow: {
        "3xl": "2px 4px 6px black",
      },
    },
  },
  plugins: [],
};
