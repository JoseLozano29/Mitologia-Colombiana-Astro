/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        fondo: '#F9F5EB',
        texto: '#2D2A24',
        primario: '#2A4D3E',
        acento: '#C7AD7B',
        marron: '#9B7B5C',
        tarjeta: '#FFFFFFD9',
      },
      fontFamily: {
        titulos: ['Playfair Display', 'serif'],
        cuerpo: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};