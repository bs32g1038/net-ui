const path = require('path');

module.exports = (options, context) => ({
    chainWebpack(config) {
        config.resolve.alias.set('src', __dirname);
        config.resolve.alias.set('assets', path.join(__dirname, 'assets'));
        config.resolve.alias.set('components', path.join(__dirname, 'components'));
        config.resolve.alias.set('vue', 'vue/dist/vue.js');
    },
});
