
module.exports = options => {
  const { VueLoaderPlugin } = require('vue-loader')
  // vue supports
  return webpackConfig => {
    webpackConfig.module.rules.push({
      test: /\.vue$/,
      loader: 'vue-loader'
    });
    webpackConfig.plugins.push(new VueLoaderPlugin(options));
  };
};