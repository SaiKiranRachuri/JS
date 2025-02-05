'use strict';

/*
// var firstName = 'Kiran'; // Var creats a property on window object
const kiran = {
  firstName: 'Sai Kiran',
  year: 1997,

  calcAge: function () {
    console.log(this);
    console.log(this.firstName);
  },

  arrowFunc: () => {
    console.log(this);
    console.log(this.firstName); // firstName doesn't exist in window so logs undefined. Accessing a property that doesn't exist in an object refers to undefined NOT an error.
  },
};

kiran.calcAge();
kiran.arrowFunc();
*/

// Regular function inside a method

const kiran = {
  firstName: 'Sai Kiran',
  year: 1997,

  calcAge: function () {
    console.log('This keyword inside a method:');
    console.log(this);
    console.log(this.firstName);

    // Problem;
    // const funcInsideAMethod = function () {
    //   console.log('This keyword inside a function inside method:');
    //   console.log(this);
    // };

    // Solution 1: use extra variable
    // const self = this;
    // const funcInsideAMethod = function () {
    //   console.log('This keyword inside a function inside method:');
    //   console.log(self);
    // };

    // Solution 2: use arrow function
    const funcInsideAMethod = () => {
      console.log('This keyword inside a function inside method:'); // As arrow function borrows lexical scope
      console.log(this);
    };

    funcInsideAMethod();
  },
};

kiran.calcAge();

// Arguments keyword for function expression and arrow function
console.log('========================ARGUMENTS KEYWORD=====================');

const addExp = function (a, b) {
  console.log(arguments);
  return a + b;
};

console.log(addExp(2, 3));
console.log(addExp(2, 3, 5, 6));

const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

console.log(addArrow(5, 5, 6));
