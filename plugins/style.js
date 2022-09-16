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
  px2rem = 100,
  plugins = [],
  extract = `css/[name].css`
} = {}) => {

  px2rem && plugins.push(pxtorem({
    rootValue: px2rem,
    propList: ['font-size', 'padding*', 'margin*', 'width', 'height']
  }));

  const postcssLoader = {
    loader: require.resolve('postcss-loader'),
    options: {
      postcssOptions: {
        // parser,
        plugins,
      }
    }
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