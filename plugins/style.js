const postcss = require('precss');
const pxtorem = require('postcss-pxtorem');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const cssLoader = {
  loader: require.resolve('css-loader')
};

const styleLoader = {
  loader: require.resolve('style-loader')
};

const resolveUrlLoader =
  require.resolve('resolve-url-loader');

module.exports = ({
  plugins = [
    postcss(),
    pxtorem({
      rootValue: 100,
      propList: ['font-size', 'padding*', 'margin*', 'width', 'height']
    }),
  ],
  extract = `css/[name].css`,
  ...options
} = {}) => {
  const postcssLoader = {
    loader: require.resolve('postcss-loader'),
    options: Object.assign({
      plugins: () => plugins
    }, options)
  };
  const cssConfig = {
    test: /\.css$/,
    use: [
      extract ? MiniCssExtractPlugin.loader : styleLoader,
      cssLoader,
      resolveUrlLoader,
      postcssLoader
    ]
  };
  return webpackConfig => {
    webpackConfig.module.rules.push(cssConfig);
    extract && webpackConfig.plugins.push(new MiniCssExtractPlugin({ filename: extract }));
  };
};