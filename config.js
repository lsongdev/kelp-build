const path = require('path');
const webpack = require('webpack');

const root = process.cwd();
const { NODE_ENV: env = 'development' } = process.env;

module.exports = {
  mode: env,
  module: {
    rules: []
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env)
   })
  ],
  // @docs https://github.com/webpack/webpack/issues/3066
  resolveLoader: {
    modules: [
      path.join(__dirname, '../node_modules'),
      path.join(root, 'node_modules'),
    ]
  }
};