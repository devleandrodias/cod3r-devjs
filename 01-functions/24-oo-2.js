// Syntactic sugar
class AppleProduct {
  constructor(name, price, quantity = 1) {
    this._name = name;
    this._price = price;
    this._quantity = quantity;
  }

  getTotalPrice() {
    return this.quantity * this.price;
  }
}

const macbook = new AppleProduct("Macbook Air 2021 M1", 1990.9, 4);

console.log(macbook.name);
console.log(macbook.price);
console.log(macbook.getTotalPrice());
