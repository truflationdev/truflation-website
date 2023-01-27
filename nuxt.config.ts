// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxt/content"],
  runtimeConfig: {
    // Private config that is only available on the server
    apiSecret: process.env.GHOST_CONTENT_API_KEY,
    // Config within public will be also exposed to the client
    public: {
      apiBase: "/api",
    },
  },
});
