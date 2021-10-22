const fs = require('fs');
const { join } = require('path');
const pages = require('./pages');

const root = process.cwd();

const getEntryFromPkg = () => {
  try {
    const filename = join(root, 'package.json');
    const pkg = require(filename);
    return pkg.entry || pkg.source;
  } catch (e) {
    if (e.code !== 'MODULE_NOT_FOUND')
      throw e;
  }
};

const getDefaultEntry = () => {
  return getEntryFromPkg() || './src/index.js';
};

module.exports = (entry = getDefaultEntry()) => {
  if (typeof entry === 'string') {
    const stat = fs.statSync(entry);
    if (stat.isDirectory()) return pages(dir);
    entry = join(root, entry);
  }
  return webpackConfig => webpackConfig.entry = entry;
};