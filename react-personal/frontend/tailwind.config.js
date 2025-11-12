/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // dark surface color used by `dark:bg-ink`
        ink: "#0b0f19",
      },
      backgroundImage: {
        // used by `bg-blue-grad`
        "blue-grad":
          "radial-gradient(60rem 60rem at 50% -10%, rgba(56,189,248,.35), transparent 60%), radial-gradient(40rem 40rem at 110% 10%, rgba(147,197,253,.25), transparent 60%)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
