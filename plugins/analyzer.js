const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = (options = { analyzerMode: 'static' }) => {
  return webpackConfig => {
    const analyzer = new BundleAnalyzerPlugin(options);
    webpackConfig.plugins.push(analyzer);
  };
}