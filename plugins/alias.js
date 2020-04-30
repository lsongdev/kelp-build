
module.exports = (alias = {}) => {
  alias['~'] = process.cwd();
  return webpackConfig => {
    webpackConfig.resolve.alias = alias;
  };
};