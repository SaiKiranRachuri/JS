// IIFE : Function that needs only once

(function () {
  console.log('This will never run again');
  const isPrivate = 23; // Encapsulation to prevent accidental damage
})();

// console.log(isPrivate);

// Same using function expression
(() => console.log('This will also never run again'))();

// Block scope
{
  //   const isPrivate = 23;
  var isPrivateTwo = 24;
}
// console.log(isPrivate);
console.log(isPrivateTwo);
