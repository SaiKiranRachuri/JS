// IIFE : Function that needs only once

const isPrivate = 22;
(function () {
  console.log('This will never run again');
  const isPrivate = 23; // Encapsulation to prevent accidental damage
  console.log(isPrivate); // 23
})();

console.log(isPrivate);

// Same using function expression
(() => console.log('This will also never run again'))();

// Block scope
{
  const isPrivate = 23;
  var isPrivateTwo = 24;
}
console.log(isPrivate); // Not defined. As declared in a block
console.log(isPrivateTwo); //Outputs 24.
