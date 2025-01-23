'use strict';

let age = 30;
let oldAge = age;

age = 31; // Creates new address with updated value
console.log(`Age: ${age}`);
console.log(`Old Age: ${oldAge}`);

// Objects

const me = {
  firstName: 'Kiran',
  age: 28,
};

const frnd = me;
frnd.age = 30; // Overriding const is possible for references types like objects.

console.log(me.age);
console.log(frnd.age);
