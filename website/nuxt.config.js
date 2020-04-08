const path = require('path');

export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: ['net-ui-style/css/at.css'],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: ['~/plugins/index.js'],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [],
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {
            config.resolve.alias = {
                ...config.resolve.alias,
                'net-ui-theme': path.resolve(__dirname, '../packages/at-ui-style/src'),
            };
            config.module.rules.push({
                test: /\.md$/,
                use: [
                    'vue-loader',
                    {
                        loader: '@vuepress/markdown-loader',
                        options: {
                            content: 'test',
                            sourceDir: __dirname + '/markdown',
                        },
                    },
                ],
            });
        },
    },
};
