function randomValues(x, y) {
  return new Promise((resolve, reject) => {
    const result = Math.random();
    if (result > 0.5) reject(`Value ${result} reject`);
    else resolve(`Value ${result} resolved`);
  });
}

randomValues().then(console.log).catch(console.error);
randomValues().then(console.log).catch(console.error);
randomValues().then(console.log).catch(console.error);
randomValues().then(console.log).catch(console.error);
randomValues().then(console.log).catch(console.error);
randomValues().then(console.log).catch(console.error);
randomValues().then(console.log).catch(console.error);

randomValues()
  .then(
    (data) => {
      console.log(data);
    },
    (err) => {
      console.error(err);
    }
  )
  .catch(console.error);
