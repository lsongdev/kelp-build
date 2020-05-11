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

const getPages = (dir = '.') => {
  const files = glob.sync(`${dir}/**/*.@(js|ts|jsx|vue|tsx)`);
  return filesToEntry(dir, files);
};

module.exports = getPages;