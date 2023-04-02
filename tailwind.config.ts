import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#996DFF",
        secondPurple: "#8257E5",
      },
    },
  },
  plugins: [],
} satisfies Config;
