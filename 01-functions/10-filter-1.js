const cart = [
  {
    name: "iPhone",
    price: 1342.22,
    quantity: 2,
  },
  {
    name: "iMac",
    price: 1999.9,
    quantity: 3,
  },
  {
    name: "macbook air 2021 M1",
    price: 2299,
    quantity: 5,
  },
];

const getProductName = (x) => x.name;
const qtdGreaterThan2 = (x) => x.quantity > 2;
const transformToUpperCase = (x) => x.toUpperCase();

const stock = cart
  .filter(qtdGreaterThan2)
  .map(getProductName)
  .map(transformToUpperCase);

console.log(stock);
