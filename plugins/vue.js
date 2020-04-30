const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = options => {
  // vue supports
  return webpackConfig => {
    webpackConfig.module.rules.push({
      test: /\.vue$/,
      loader: 'vue-loader'
    });
    webpackConfig.plugins.push(new VueLoaderPlugin(options));
  };
};