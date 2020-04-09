const path = require('path');
const markdownItContainer = require('markdown-it-container');
const striptags = require('./build/strip-tags');
const utils = require('./build/utils');

let markdownIt = require('@vuepress/markdown')({
    plugins: [
        [
            (md, options) => markdownItContainer(md, 'demo', options),
            {
                validate: params => params.trim().match(/^demo\s*(.*)$/),
                render: (tokens, idx) => {
                    // console.log(tokens, idx)
                    if (tokens[idx].nesting === 1) {
                        const html = utils.convertHtml(striptags(tokens[idx + 1].content, 'script'));

                        return `<demo-box>
                                <div slot="demo">${html}</div>
                                <div slot="source-code">`;
                    }

                    // closing tag
                    return '</div></demo-box>';
                },
            },
        ],
    ],
});

markdownIt.renderer.rules.table_open = function() {
    return '<table class="table">';
};
markdownIt.renderer.rules.fence = utils.wrapCustomClass(markdownIt.renderer.rules.fence);

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
        link: [{ rel: 'icon', type: 'image/x-icon', href: '@/assets/logo-at@2x.png' }],
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: ['@net-ui/theme/dist/net.css'],
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
                'net-ui-theme': path.resolve(__dirname, '../packages/net-ui-theme/src'),
            };
            config.module.rules.push({
                test: /\.md$/,
                use: [
                    'vue-loader',
                    {
                        loader: '@vuepress/markdown-loader',
                        options: {
                            markdown: markdownIt,
                            sourceDir: __dirname + '/markdown',
                        },
                    },
                ],
            });
            return config;
        },
    },
};
