const { resolve } = require('path');

const defaults = {
  library: 'App',
  libraryTarget: 'umd',
  publicPath: '/',
  path: './dist',
  filename: 'js/[name].js',
  globalObject: 'this',
};

module.exports = (output = './dist') => {
  if (typeof output === 'string') {
    output = { path: output };
  }
  output = Object.assign({}, defaults, output);
  return webpackConfig => {
    webpackConfig.output = output;
    webpackConfig.output.path = resolve(output.path);
  };
};