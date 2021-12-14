// Using callback
setTimeout(function () {
  console.log("Executing callback 1..");

  setTimeout(function () {
    console.log("Executing callback 2..");

    setTimeout(function () {
      console.log("Executing callback 3..");
    }, 2000);
  }, 2000);
}, 2000);

// Using Promise
function awaitPromisse(time = 2000) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Executing promise..");
      resolve();
    }, time);
  });
}

awaitPromisse().then(awaitPromisse).then(awaitPromisse);
