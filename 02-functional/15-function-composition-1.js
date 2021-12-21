function composition(...functions) {
  return function (value) {
    return functions.reduce((pv, cv) => {
      return cv(pv);
    }, value);
  };
}

function upperCase(text) {
  return text.toUpperCase();
}

function printText(text) {
  return `=== ${text} ===`;
}

const toEmphasize = composition(upperCase, printText);

console.log(toEmphasize("stop"));
console.log(toEmphasize("go"));
