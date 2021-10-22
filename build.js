const webpack = require('webpack');
const baseConfig = require('./config');

const build = (plugins, callback) => {
  const webpackConfig = Object.assign({}, baseConfig);
  for (const plugin of plugins) {
    if (typeof plugin === 'function') {
      plugin(webpackConfig);
    }
  }
  if (!webpackConfig.entry)
    return console.error('[@kelpjs/build] webpack require "entry" field');
  if (Object.keys(webpackConfig.entry).length === 0)
    return console.error('[@kelpjs/build] webpack will do nothing');
  return webpack(webpackConfig, callback);
}

module.exports = build;