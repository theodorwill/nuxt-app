// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        '@nuxtjs/supabase'
    ],
    css: [
        'vuetify/styles/main.sass',
        '@mdi/font/css/materialdesignicons.min.css'
    ],
    build: {
        transpile: ['vuetify']
    },
})
