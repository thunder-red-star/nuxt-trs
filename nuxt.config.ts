import {defineNuxtConfig} from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    head: {
        link: [
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap&display=swap'
            }
        ],
    },
    buildModules: [
        '~/modules/google-fonts'
    ],
    googleFonts: {
        display: 'swap',
        useStylesheet: true,
        inject: true,
        download: true,
        families: {
            'Inter': [300, 400, 500, 600, 700],
            'Open Sans': [300, 400, 500, 600, 700]
        },
    },
})
