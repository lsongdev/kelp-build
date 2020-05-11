#!/usr/bin/env node

const build = require('..');
const pkg = require('../package');
const argv = require('kelp-argv');

var config = {};

try {
  // kelp-build.config.js
  const root = process.cwd();
  config = require(`${root}/kbuild.config`);
} catch (e) {
  if (e.code !== 'MODULE_NOT_FOUND') throw e;
}

build(Object.assign(config, argv()), (err, stats) => {
  if (err) return console.error(`[${pkg.name}]`, err.message);
  const { startTime, endTime, compilation } = stats;
  compilation && compilation.errors.forEach(e => {
    console.error(`[${pkg.name}]`, e.message);
  });
  console.log('[kelp-build] Javascript compile success, cost %sms', endTime - startTime);
});