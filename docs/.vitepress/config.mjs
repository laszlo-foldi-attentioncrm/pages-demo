import { defineConfig } from 'vitepress'

export default defineConfig({
    base: '/pages-demo/',
    title: 'Docs Demo',
    description: 'Demo for creating public static github pages with VitePress.',
    appearance: true,
    head: [
        [ 'link', { rel: 'stylesheet',  href: 'https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap' } ],
        [ 'link', { rel: 'icon', href: '/public/fav_icon.png' } ]
    ]
})