function Product(name, price, quantity = 1) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;

  this.getTotalPrice = function () {
    return this.price * this.quantity;
  };
}

const p1 = new Product("iPhone", 3534.2);
const p2 = new Product("iMac", 5999.9);

console.log(p1.name);
console.log(p2.price);
console.log(p1.getTotalPrice());

console.log(typeof Product);
console.log(typeof Promise);
console.log(typeof Object);
