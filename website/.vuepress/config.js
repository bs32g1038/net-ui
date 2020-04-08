const path = require('path');

module.exports = (options, context) => ({
    themeConfig: {
        pages: [
            {
                path: '/',
                components: require('./theme/contents/home.vue'),
            },
            {
                path: '/guide',
                title: '指南',
                layout: 'Guide',
            },
        ],
    },
});
