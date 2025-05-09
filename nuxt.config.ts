// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  components: [
    {
      path: '~/components', // Path to your components
      pathPrefix: false, // Disable prefixing the component name with the path
    }
  ],
runtimeConfig : {
  privateKey : 'secretKey',
  public: {
  API_URL: process.env.API_URL,
  API_BASE_URL: process.env.API_BASE_URL,
  }
}})
