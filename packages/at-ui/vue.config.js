const path = require('path');
module.exports = {
    lintOnSave: false,
    configureWebpack: {
        resolve: {
            alias: {
                src: path.join(__dirname, 'src'),
                assets: path.join(__dirname, 'src/assets'),
                components: path.join(__dirname, 'src/components'),
                stylesheet: path.resolve(__dirname, '../at-ui-style'),
                'at-ui': __dirname,
                'at-ui-lib': path.join(__dirname, 'src/index.js'),
                'at-ui-locale-zh': path.join(__dirname, 'src/locale/lang/zh-CN.js'),
                'at-ui-locale-en': path.join(__dirname, 'src/locale/lang/en-US.js'),
                'at-ui-style': 'stylesheet/src/index.scss',
                vue: 'vue/dist/vue.js',
            },
        },
    },
};
