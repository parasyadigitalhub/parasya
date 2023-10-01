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
        web: "linear-gradient(180deg, #070707 -14.5%, rgba(0, 0, 0, 0.38) 46.65%, rgba(27, 27, 27, 0.76) 112.29%), url('/webcover.png'), lightgray 50% / cover no-repeat;",
      },
      background: {},
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
