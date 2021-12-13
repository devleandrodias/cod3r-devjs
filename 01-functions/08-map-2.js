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

// Names
const names = cart.map((x) => x.name);
console.log(names);

// Values
const values = cart.map((x) => Number((x.quantity * x.price).toFixed(2)));
console.log(values);

// Products
const products = cart.map((x) => ({
  name: x.name,
  total: Number((x.quantity * x.price).toFixed(2)),
}));

console.log(products);
