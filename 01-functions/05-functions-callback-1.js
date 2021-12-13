const sum = (x, y) => console.log(x + y);
const sub = (x, y) => console.log(x - y);

// Callback
function exec(fn, x, y) {
  return fn(x, y);
}

exec(sum, 56, 26);
exec(sub, 182, 27);

exec((x, y) => console.log(x * y), 25, 2);

const fn = () => console.log("EXEC...");

setInterval(fn, 1000);
