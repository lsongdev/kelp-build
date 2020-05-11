
module.exports = externals => {
  return webpackConfig => {
    webpackConfig.externals = externals;
  };
};