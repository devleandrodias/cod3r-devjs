function textWithLengthBetween(min, max, err, text) {
  const length = (text || "").trim().length;

  if (length < min || length > max) throw err;
}

const p1 = { name: "iPhone 13 Pro Max", price: 1899.9 };

textWithLengthBetween(5, 200, "Invalid name!", p1.name);
