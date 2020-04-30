const babel = require('./babel');
const externals = require('./externals');

module.exports = ({ useExternals = true } = {}) => {
  const setup = babel({
    presets: ['@babel/preset-react']
  });
  return webpackConfig => {
    useExternals && externals({
      'react': 'React',
      'react-dom': 'ReactDOM',
    })(webpackConfig);
    webpackConfig.resolve.extensions.push('.jsx');
    webpackConfig.module.rules.push({
      test: /\.jsx?$/,
      // ignore node_modules *.js files, but not exclude jsx;
      exclude: /node_modules\/.+\.js$/,
      loader: require.resolve('happypack/loader')
    });
    return setup(webpackConfig);
  };
};