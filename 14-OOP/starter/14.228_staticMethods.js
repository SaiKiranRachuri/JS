// Examples of static methods
Number.parseFloat(12); // Method on the constructor function. // Static on the number constructor

// However, the below doesn't work.
// 12.parseFloat();

// Creating a static method on constructor function
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const kiran = new Person('Kiran', 1997);
Person.hey = function () {
  console.log('Hey there👌');
};

Person.hey(); // Works
// kiran.hey(); // Doesn't work.

// Array method on constructore function
console.log(Array.from(document.querySelectorAll('h1')));

// [1, 2, 3].from(); // Doesn't work. from is NOT a functioln

// Creating a static method on ES6 class
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods are added to prototype property(PersonCl): called instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}!`);
  }

  // static methods
  static hey() {
    console.log('Hey there!');
  }
}

PersonCl.hey();

const john = new PersonCl('John', 1997);
// john.hey(); // hey is NOT a function
