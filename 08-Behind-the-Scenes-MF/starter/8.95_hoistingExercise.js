//====================Hoisting in Practice=======================

// Hoisting examples for variables
/*
console.log(firstName); // O/P: undefined
//console.log(age); // O/P: Cannot access age even before initialization
console.log(birthYear); // O/P: Cannot access birthyear even before initialization

var firstName = 'Kiran';
let age = 28;
const birthYear = 1997;
*/

// Hoisting examples of functions

console.log(funcDeclaration(2, 3)); // O/P: 5
function funcDeclaration(a, b) {
  return a + b;
}

//console.log(funcExp(5, 6)); // Cannot access 'funcExp' before initialization
const funcExp = function (a, b) {
  return a + b;
};

//console.log(funcArrow(5, 5)); // Cannot access 'funcArrow' before initialization
let funcArrow = (a, b) => a + b;

// console.log(funcArrowSub(3, 1)); //"funcArrowSub is not a function"; undefined(3, 1)
var funcArrowSub = (a, b) => a - b;

//==========Bug due to creating variable with var==============

console.log(`IF CONDITION: ${!numberOfProducts}`); //!0 = true

console.log(numberOfProducts); //Undefined

if (!numberOfProducts) {
  emptyCart();
}

var numberOfProducts = 10;

function emptyCart() {
  console.log('All products are deleted!');
}

// window object

var x = 1; // Var creates a property on window object
let y = 2;
const z = 3;

console.log(x === window.x); // Checking if x is a property on window object
console.log(y === window.y); // Checking if y is a property on window object
console.log(z === window.z); // Checking if z is a property on window object
