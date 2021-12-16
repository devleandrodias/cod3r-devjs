const person = {
  // Data can be changed
  name: "Maria",
  height: 1.76,
  address: {
    city: "Vancuver",
  },
};

person.name = "Leandro";
console.log(person);

// Assignment by reference
const newPerson = person;
newPerson.city = "Toronto";
console.log(person);

// Impure function
function changePersonImpure(newPerson) {
  newPerson.name = "Beatriz";
}

// Pure function
function changePersonPure(personTest) {
  const newPerson = { ...personTest };
  newPerson.name = "Thaísa";
  newPerson.city = "New York";
}

changePersonImpure(person);
console.log(person);

changePersonPure(person);
console.log(person);

let a = 3;
let b = a; // Assignment by value (Copy!)

a++;
b++;
b++;

console.log(a);
console.log(b);
