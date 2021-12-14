let p = new Promise(function (resolve, err) {
  resolve([1, 2, 4]);
});

p.then((value) => value.map((x) => x * 2))
  .then(function (result) {
    return result.reduce((x, y) => x + y);
  })
  .then(console.log);
