// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port: 3007
  },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@pinia/nuxt', '@vueuse/nuxt', '@pinia-plugin-persistedstate/nuxt', 'nuxt-rating'],
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
  components: {
    global: true,
    dirs: ['~/components'],
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  runtimeConfig: {
    public: {
      APP_API: process.env.VUE_APP_API_DOMAIN
    }
  },
})
