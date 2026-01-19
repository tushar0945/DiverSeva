/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // ✅ DriveU Theme Colors
        primary: "#090852", // Primary Navy (CTAs / headings)
        secondary: "#09081A", // Deep navy / near black
        accent: "#67DAAF", // Brand green
        background: "#FFFFFF", // Main background
        surface: "#F6F6F6", // Cards / sections bg
        border: "#E9E9E7", // Borders / dividers
        muted: "#354456", // Muted text/icons

        // ✅ System
        danger: "#EF4444", // Error
        success: "#67DAAF", // Same as accent (confirm)
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
