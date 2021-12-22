function filterExtensionFile(pattern) {
  return function (files) {
    return files.filter((el) => el.endsWith(pattern));
  };
}

module.exports = filterExtensionFile;
