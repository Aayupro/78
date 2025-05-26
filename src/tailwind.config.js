module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html"
    ],
    theme: {
      extend: {
        colors: {
          primary: "#4F46E5",
          secondary: "#10B981",
          dark: "#1F2937",
          light: "#F9FAFB",
        },
        fontFamily: {
          sans: ['"Poppins"', 'sans-serif'],
          mono: ['"Fira Code"', 'monospace'],
        },
      },
    },
    plugins: [],
  }