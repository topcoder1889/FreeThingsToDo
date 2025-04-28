/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: '#3a8bbb',
          secondary: '#2c3e50',
          accent: '#f5f5f5',
          light: '#ffffff',
          dark: '#333333',
          success: '#6bc7b8',
        },
        fontFamily: {
          main: ['Inter', 'Segoe UI', 'sans-serif'],
        },
        boxShadow: {
          custom: '0 8px 30px rgba(0,0,0,0.08)',
        },
      },
    },
    plugins: [],
  } 