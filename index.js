const build = require('./build');
const vue = require('./plugins/vue');
const input = require('./plugins/input');
const react = require('./plugins/react');
const style = require('./plugins/style');
const alias = require('./plugins/alias');
const watch = require('./plugins/watch');
const image = require('./plugins/image');
const output = require('./plugins/output');
const analyzer = require('./plugins/analyzer');
const typescript = require('./plugins/typescript');

module.exports = (config = {}, callback) => {
  return build([
    vue(),
    image(),
    input(config.input),
    react(config.react),
    style(config.style),
    alias(config.alias),
    watch(config.watch),
    output(config.output),
    config.report && analyzer(config.report),
    config.typescript && typescript(config.typescript),
  ].concat(config.plugins), callback);
};