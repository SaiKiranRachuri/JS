'use strict';

// Only function declaration or expression is used. Arrow functions are NOT used for constructor functions because 'this' keyword produces unexpected results.
const Person = function (firstName, birthYear) {
  console.log(this); // Person object is returned
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never DO this
  // This creates 10K copies if there are 10K Persons which is a latency problem
  //   this.calcAge = function () {
  //     console.log(2037 - birthYear);
  //   };
};

const kiran = new Person('Sai Kiran', 1997);
// New Operator does these 4 steps in the background
// 1) New {} is created
// 2) Function is called, this = {}
// 3) {} is linked to prototype
// 4) Automatically returns {}

console.log('Kiran object:', kiran);

const jonas = new Person('Jonas', 1994);
console.log(jonas);

console.log(kiran instanceof Person); // True: still a classical OOP
const jake = 'abc';
console.log(jake instanceof Person); // False

// Prototypes
console.log(Person.prototype); // already has calcAge function despite defined later as in below.

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

console.log(kiran); // has calcAge function due to prototype inheritance
kiran.calcAge(); // reusing the calcAge function for 10K objects

console.log(kiran.__proto__); // has calcAge and constructor details
console.log(kiran.__proto__ === Person.prototype); // true

console.log(Person.prototype.isPrototypeOf(kiran)); // true

Person.prototype.species = 'Homo Sapeins'; // adding a property to prototype
console.log(kiran.species);

console.log(kiran.hasOwnProperty('firstName')); //true
console.log(kiran.hasOwnProperty('species')); //false

console.log(`Kiran's prototype: `, kiran.__proto__); // constructor function
console.log(`Person prototype:`, Person.prototype); // constructor function

console.log(kiran.__proto__.__proto__); // object: Person's proto of proto
console.log(kiran.__proto__.__proto__.__proto__); // null refer to images 14.221

console.dir(Person.prototype.constructor); // constructor function

const arr = [2, 4, 5, 4];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); // true
console.log(arr.__proto__.__proto__); // object
console.log(arr.__proto__.__proto__.__proto__); // null

// adding a method to array prototype
Array.prototype.unique = function () {
  return [...new Set(this)];
};
// Bad practise as JS may be implement other functionality with same name and also other dev's might create the same functionality with different names.

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.log(h1);
console.dir(h1); // observe its prototypes

console.dir(x => x + 1); // Function is also an object. Observe its prototypes and inherited methods.
