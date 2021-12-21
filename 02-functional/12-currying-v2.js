function textWithLengthBetween(min) {
  return function (max) {
    return function (err) {
      return function (text) {
        // Lazy Evaluation
        const length = (text || "").trim().length;
        if (length < min || length > max) throw err;
      };
    };
  };
}

const p1 = { name: "iPhone 13 Pro Max", description: "iPhone", price: 1899.9 };

const forcarTamanhoPadrao = textWithLengthBetween(5)(200);

forcarTamanhoPadrao("Invalid name!")(p1.name);
forcarTamanhoPadrao("Invalid description!")(p1.description);
