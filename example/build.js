const build = require('../build');
const vue = require('../plugins/vue');
const source = require('../plugins/source');
const react = require('../plugins/react');
const style = require('../plugins/style');
const alias = require('../plugins/alias');
const watch = require('../plugins/watch');
const image = require('../plugins/image');
const output = require('../plugins/output');
const analyzer = require('../plugins/analyzer');
const typescript = require('../plugins/typescript');

build()
.use(source('./src'))
.use(vue())
.use(react())
.use(style())
.use(image())
.use(alias())
.use(output())
.use(watch(false))
.use(analyzer())
.use(typescript())
.run((err, stats) => {
  if (err) return console.error('[JSX]', err.message);
  const { startTime, endTime, compilation } = stats;
  if (stats && compilation.errors) {
    compilation.errors.forEach(e => {
      console.error('[ERR]', e.message);
    });
  }
  console.log('[JSX] Javascript compile success, cost %sms', endTime - startTime);
})