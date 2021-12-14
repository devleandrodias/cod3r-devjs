function generateNumberBetween(min, max, time) {
  if (min > max) {
    [max, min] = [min, max];
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const factor = max - min + 1;
      const random = parseInt(Math.random() * factor) + min;
      resolve(random);
    }, time);
  });
}

console.time("promise");

function generateSeveralNumbers() {
  return Promise.all([
    generateNumberBetween(1, 6, 1000),
    generateNumberBetween(1, 6, 500),
    generateNumberBetween(1, 6, 750),
    generateNumberBetween(1, 6, 200),
  ]);
}

generateSeveralNumbers()
  .then(console.log)
  .then(() => {
    console.timeEnd("promise");
  });
