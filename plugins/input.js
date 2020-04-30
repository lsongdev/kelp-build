const fs = require('fs');
const glob = require('glob');

const getName = (filename, dir = '') =>
  filename
    .replace(new RegExp(`^${dir}/`), '')
    .replace(/\/index\..*$/, '') // trim index.*$
    .replace(/\..*$/, '')        // trim .ext$

const filesToEntry = (dir, files) =>
  files.reduce((pages, filename) => {
    const name = getName(filename, dir);
    pages[name] = filename;
    return pages;
  }, {});

const getFiles = (dir = '.') => {
  const files = glob.sync(`${dir}/**/*.@(jsx?|vue)`);
  return filesToEntry(dir, files);
};

module.exports = (src = './src/pages') => {
  if (typeof src === 'string') {
    const stat = fs.statSync(src);
    if (stat.isDirectory()) {
      src = getFiles(src);
    } else {
      src = filesToEntry(src, [src]);
    }
  }
  return webpackConfig => webpackConfig.entry = src;
};