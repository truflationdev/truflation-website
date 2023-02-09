// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxt/content"],
  runtimeConfig: {
    contentKey: process.env.GHOST_CONTENT_API_KEY,
    public: {
      gtagId: process.env.GTAG_ID,
    },
  },
  // ssr: false,
});
