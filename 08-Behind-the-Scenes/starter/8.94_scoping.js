'use strict';

/* 1)  Accessing a global scope variable

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName); // firstName is declared Global so it prints.
  return age;
}

const firstName = 'Kiran';
calcAge(1993);

*/

/* 2) Function accessing variables in current scope and global scope

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    console.log(`${firstName} is born in ${birthYear} and age is ${age}`);
  }
  printAge();
}

const firstName = 'Kiran';
calcAge(1993);
console.log(age); // Outer Scope cannot access inner scope elements
printAge(); // / Outer Scope cannot access inner scope elements

*/

/* 3) Block scope accessing parent scope elements

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName} is born in ${birthYear} and age is ${age}`;
    console.log(output);

    if (1981 >= birthYear <= 1996) {
      const str = `${firstName} you are a Millenial`;
      console.log(str);
      var millenial = true;
    }
  }
  printAge();
  //console.log(str); // Let, const are block scope
  console.log(millenial); // var is Function scope. Should work however, due to some updates not working now
}

const firstName = 'Kiran';
calcAge(1992);

*/

/* 4) Functions are block scope in strict mode

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}, your age is ${age}`;
    console.log(output);

    if (1981 >= birthYear <= 1996) {
      console.log('IF BLOCK!');
      function add(a, b) {
        return a + b;
      }
    }
  }
  printAge();
  add(2, 3); // Function is block scope in strict; however this not working without strict too due to changes to JS
}

const firstName = 'Kiran';
calcAge(1991);

*/
