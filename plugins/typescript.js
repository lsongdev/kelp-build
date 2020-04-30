
// tsx supports
module.exports = () => {
  return webpackConfig => {
    webpackConfig.resolve.extensions.push('.ts', '.tsx');
    webpackConfig.module.rules.push({
      test: /\.tsx?$/,
      loader: require.resolve('ts-loader')
    });
  }
}