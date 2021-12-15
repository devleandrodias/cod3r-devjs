function removeBlankLines(array) {
  return array.filter((el) => el.trim());
}

function removeUsingRegExp(pattern) {
  return function (array) {
    return array.filter((el) => !el.match(new RegExp(pattern)));
  };
}

function removeCaracters(caracters) {
  return function (array) {
    return array.map((el) => {
      return caracters.reduce((x, y) => {
        return x.split(y).join("").trim();
      }, el);
    });
  };
}

module.exports = {
  removeCaracters,
  removeBlankLines,
  removeUsingRegExp,
};
