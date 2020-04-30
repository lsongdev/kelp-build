

module.exports = (externals = {}) => {
  return webpackConfig => {
    webpackConfig.externals = webpackConfig.externals || {};
    Object.assign(webpackConfig.externals, externals);
  };
};