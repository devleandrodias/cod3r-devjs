function generateNumbers() {
  return {
    start(fn, interval = 1000) {
      let number = 0;

      const i = setInterval(function () {
        fn(number++);
      }, interval);

      return {
        stop() {
          clearInterval(i);
        },
      };
    },
  };
}

const temp1 = generateNumbers();
const temp2 = generateNumbers();

const exec11 = temp1.start((number) => {
  console.log(`#1 ${number * 2}`);
}, 500);

const exec12 = temp1.start((number) => {
  console.log(`#1 ${number * 2}`);
}, 1000);

const exec2 = temp2.start((number) => {
  console.log(`#2 ${number + 100}`);
}, 2000);

setTimeout(() => {
  exec11.stop();
  exec2.stop();
}, 20000);

setTimeout(() => {
  exec12.stop();
}, 5000);
