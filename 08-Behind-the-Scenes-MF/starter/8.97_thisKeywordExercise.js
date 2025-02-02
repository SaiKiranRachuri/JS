'use strict';

console.log(`This Keyword in global scope: ${this}`);

// This Keyword inside a arrow function
const calcAgeArrow = birthYear => {
  console.log(
    `This Keyword inside a arrow function: ${this}. Due to lexical borrowing of this from global scope.`
  );
  return 2037 - birthYear;
};

calcAgeArrow(1997);

// This Keyword inside a function declaration
function calcAgeDecl(birthYear) {
  const age = 2037 - birthYear;
  console.log(`This Keyword inside a function declaration: ${this}`);
}

calcAgeDecl(1997);

// This Keyword inside a function expression
const calcAgeExp = function (birthYear) {
  const age = 2037 - birthYear;
  console.log(`This Keyword inside a function expression: ${this}`);
};

calcAgeExp(1997);

// This Keyword inside a method i.e., inside a function in an object
const kiran = {
  firstName: 'Sai Kiran',
  year: 1997,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year); // Refers to the object that is being called
  },
};

kiran.calcAge();

const kiranCopy = {
  firstName: 'Sai Kiran',
  year: 2017,
};

kiranCopy.calcAge = kiran.calcAge;
kiranCopy.calcAge(); // When calcAge is borrowed from kiran object into kiranCopy the output expectation should be 2037 - this.year but this outputs 2017 - this.year due to the object that is being called here.

const func = kiran.calcAge;
func(); // Behaves like a normal function call of declaration/expression
