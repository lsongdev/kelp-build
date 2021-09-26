const os = require('os');
const HappyPack = require('happypack');

const babelLoader =
  require.resolve('babel-loader');

const dynamicImport =
  '@babel/plugin-syntax-dynamic-import';

const babelDecorators = [
  "@babel/plugin-proposal-decorators", {
    legacy: true
  }];

const objectRestSpread =
  '@babel/plugin-proposal-object-rest-spread'


const importPlugin = [
  'babel-plugin-import', {
    style: "css",
    libraryName: "antd"
  }
];

const resolvePlugin = plugin =>
  Array.isArray(plugin)
    ? (plugin[0] = require.resolve(plugin[0]), plugin)
    : require.resolve(plugin);

module.exports = ({ presets = [], plugins = [], loose = true } = {}) => {

  // fix loose options
  // https://github.com/rails/webpacker/issues/3008
  const babelEnv = [
    '@babel/preset-env', { loose }
  ];
  const classProperties = [
    '@babel/plugin-proposal-class-properties', { loose }
  ];
  const babel = {
    loader: babelLoader,
    options: {
      presets: [babelEnv]
        .map(resolvePlugin)
        .concat(presets),
      plugins: [
        importPlugin,
        dynamicImport,
        babelDecorators,
        classProperties,
        objectRestSpread
      ]
        .map(resolvePlugin)
        .concat(plugins)
    }
  };
  const happypack = new HappyPack({
    threads: os.cpus().length,
    loaders: [babel]
  });
  return webpackConfig => {
    webpackConfig.plugins.push(happypack);
  };
};
