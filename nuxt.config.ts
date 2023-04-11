export default defineNuxtConfig({
  css: ["~/assets/css/index.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
