// Ex: 1
const numbers = [1, 2, 5, 6, -4, 1];
const sum = numbers.reduce((x, y) => x + y);
console.log(sum);

// Ex: 2
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

const getTotalPrice = (x) => x.quantity * x.price;
const getTotalCart = (x, y) => x + y;

const totalCart = cart.map(getTotalPrice).reduce(getTotalCart);

console.log(
  `Total product prices in cart: ${totalCart.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })}`
);
