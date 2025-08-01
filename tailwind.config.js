/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#f3f4f6',
        card: '#ffffff',
        primary: '#3b82f6',
        accent: '#14b8a6',
        secondary: '#e5e7eb',
        warning: '#f59e0b',
        muted: '#d1d5db',
        'muted-foreground': '#6b7280',
        foreground: '#111827',
      },
    },
  },
  plugins: [],
}