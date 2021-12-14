/**
 * -*-*-*- CHALLENGE -*-*-*-
 *
 * 1. Fragile true
 * 2. Total: Quantity * Price
 * 3. Average total
 */

const products = [
  {
    name: "iPhone",
    price: 1342.22,
    quantity: 2,
    isFragile: false,
  },
  {
    name: "iMac",
    price: 1999.9,
    quantity: 3,
    isFragile: true,
  },
  {
    name: "macbook air 2021 M1",
    price: 2299,
    quantity: 5,
    isFragile: true,
  },
];

const initialValue = { quantity: 0, total: 0, average: 0 };

const getFragileProducts = (x) => x.isFragile;
const getTotalByProduct = (x) => x.price * x.quantity;
const getAverage = (pv, cv) => {
  const total = pv.total + cv;
  const quantity = pv.quantity + 1;
  const average = newTotal / newQuantity;

  return { quantity, total, average };
};

const average = products
  .filter(getFragileProducts)
  .map(getTotalByProduct)
  .reduce(getAverage, initialValue);

console.log(average);
