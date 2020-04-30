
module.exports = (watch, options) => {
  watch = watch === undefined ? false : true;
  return webpackConfig => {
    webpackConfig.watch = !!watch;
    webpackConfig.watchOptions = Object.assign({
      aggregateTimeout: 300,
      ignored: /node_modules/,
      poll: 1000
    }, options);
  };
};