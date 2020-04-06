const path = require('path');

module.exports = (options, context) => ({
    themeConfig: {
        pages: [
            {
                path: '/guide',
                title: '指南',
                layout: 'Guide',
            },
            {
                lastUpdated: 1524027677000,
                path: '/',
                title: 'VuePress',
                frontmatter: {},
            },
        ],
    },
});
