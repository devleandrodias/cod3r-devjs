function composition(...functions) {
  return function (value) {
    return functions.reduce(async (pv, cv) => {
      if (Promise.resolve(pv) === pv) {
        return cv(await pv);
      } else {
        return cv(pv);
      }
    }, value);
  };
}

function upperCase(text) {
  return text.toUpperCase();
}

function printText(text) {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve(`=== ${text} ===`);
    }, 3000);
  });
}

const toEmphasize = composition(upperCase, printText);

toEmphasize("stop").then(console.log);
toEmphasize("go").then(console.log);
