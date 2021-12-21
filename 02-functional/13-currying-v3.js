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

function applyValidation(fn) {
  return function (value) {
    try {
      fn(value);
    } catch (error) {
      return { error };
    }
  };
}

const p1 = { name: "iPhone 13 Pro Max", description: "iPhone", price: 1899.9 };
const p2 = { name: "macbook air 2020 M1", description: "iMac", price: 1899.9 };

const forcarTamanhoPadrao = textWithLengthBetween(5)(200);
const forcarNomeProdutoValido = forcarTamanhoPadrao("Invalid product name!");
const validarNomeProduto = applyValidation(forcarNomeProdutoValido);

validarNomeProduto(p1.name);
validarNomeProduto(p2.name);
