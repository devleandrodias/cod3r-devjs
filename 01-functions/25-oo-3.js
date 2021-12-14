function Product(name, price, quantity = 1) {
  this.name = name;
  this.price = price;
  this._quantity = quantity;

  this.getTotalPrice = function () {
    return this.price * this._quantity;
  };
}

Product.prototype.log = function () {
  return `Product => ${this.name.toUpperCase()}`;
};

Object.defineProperty(Product.prototype, "quantity", {
  get: function () {
    return this._quantity * 50;
  },
  set: function (value) {
    if (value < 0) quantity = 1;
  },
});

const p1 = new Product("iPhone", 3534.2, 2);
const p2 = new Product("iMac", 5999.9, 1);

console.log(p1.name);
console.log(p2.price);
console.log(p1.log());
console.log(p1.getTotalPrice());
console.log(p1.quantity);

p1.quantity = -10;

console.log(p1.quantity);

console.log(typeof Product);
console.log(typeof Promise);
console.log(typeof Object);
