/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // บรรทัดนี้คือตัวบอกให้ Tailwind ไปดึงคลาสมาสร้าง CSS ครับ
  ],
  darkMode: 'class', 
  theme: {
    extend: {},
  },
  plugins: [],
}