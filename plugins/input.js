const fs = require('fs');
const { join } = require('path');
const getPages = require('./pages');

const root = process.cwd();

const getEntryFromPkg = () => {
  const filename = join(root, 'package.json');
  const pkg = require(filename);
  return pkg.entry || pkg.source;
};

const getDefaultEntry = () => {
  return getEntryFromPkg() || './src/index.js';
};

module.exports = (entry = getDefaultEntry()) => {
  if (typeof entry === 'string') {
    const stat = fs.statSync(entry);
    if (stat.isDirectory()) {
      entry = getPages(entry);
    } else {
      entry = join(root, entry);
    }
  }
  return webpackConfig => webpackConfig.entry = entry;
};