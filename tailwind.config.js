module.exports = {
  content: ["./src/**/*.{astro,js,ts,jsx,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        titleColor: "var(--color-main-blue)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
