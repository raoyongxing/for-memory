// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: false },
    devServer: {
        host: "0.0.0.0",
        port: 3000
    },
    app: {
        head: {
            title: 'Khufu Memory',
            meta: [
                { name: 'description', content: '一个旨在延长生命社会意义长度的空想家协会' },
                { name: 'keywords', content: 'Khufu, khufuliver, memory, 空想家协会, 生命' }
            ],
            link: [
                { rel: 'icon', type: 'image/svg+xml', href: '/fac-icon.svg' },
            ]
        },
    },
    modules: ['@nuxtjs/i18n', '@nuxtjs/tailwindcss', '@nuxt/icon'],
    i18n: {
        locales: [
            {
                code: 'en',
                file: 'en.json',
                name: 'English'
            },
            {
                code: 'zh',
                file: 'zh.json',
                name: '简体中文'
            }
        ],
        pages: {
            diary: {
                en: '/diary',
                zh: '/diary'
            },
            voice: {
                en: '/voice',
                zh: '/voice'
            }
        },
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root' // recommended
        },
        defaultLocale: 'zh',
        langDir: 'locales',
    },
    ssr: true,
})