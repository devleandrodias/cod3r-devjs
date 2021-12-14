function awaitFor2Seconds(time = 2000) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Executing promise..");
      resolve();
    }, time);
  });
}

async function exec() {
  await awaitFor2Seconds();
  await awaitFor2Seconds();
  await awaitFor2Seconds();
  await awaitFor2Seconds();
  await awaitFor2Seconds();
}

exec();
