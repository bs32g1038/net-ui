const path = require('path');
module.exports = {
    lintOnSave: false,
    configureWebpack: {
        resolve: {
            alias: {
                src: path.join(__dirname, 'src'),
                assets: path.join(__dirname, 'src/assets'),
                components: path.join(__dirname, 'src/components'),
                stylesheet: path.resolve(__dirname, '../net-ui-theme'),
                'net-ui': __dirname,
                'net-ui-lib': path.join(__dirname, 'src/index.js'),
                'net-ui-theme': 'stylesheet/src/index.scss',
                vue: 'vue/dist/vue.js',
            },
        },
    },
};
