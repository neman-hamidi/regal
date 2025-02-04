/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        praimary: "#B19276",
        secondary : "#3C3D45",
        mainGray : "#F2F2F3",
      },
      fontFamily: {
        "yekan-SemiBold": "yekan-SemiBold",
        "yekan-Regular": "yekan-Regular",
      },
      spacing: {
        "9/10": "90%",
      },
    },
  },
  plugins: [],
};
