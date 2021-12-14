function generateNumberBetween(min, max) {
  if (min > max) {
    // Destructing
    [max, min] = [min, max];
  }

  return new Promise((resolve, reject) => {
    const factor = max - min + 1;

    const random = parseInt(Math.random() * factor) + min;

    resolve(random);
  });
}

generateNumberBetween(10, 30)
  .then((x) => x * 10)
  .then((x) => `Number generated ${x}`)
  .then(console.log);
