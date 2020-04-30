const path = require('path');

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
  plugins: [],
  // @docs https://github.com/webpack/webpack/issues/3066
  resolveLoader: {
    modules: [
      path.join(__dirname, '../node_modules'),
      path.join(root, 'node_modules'),
    ]
  }
};