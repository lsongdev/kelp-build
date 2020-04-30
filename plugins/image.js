
module.exports = () => {
  return webpackConfig => {
    webpackConfig.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: 'img/[name].[ext]',
      }
    });
  };
};