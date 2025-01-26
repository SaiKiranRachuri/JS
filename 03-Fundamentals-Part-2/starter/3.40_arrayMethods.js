"use strict";

const friends = ["John", "Peter", "Bob", "Harris"];

//Add elements
let newLength = friends.push("Jake"); //at the end
console.log(newLength);
console.log(friends);
newLength = friends.push("test");

friends.unshift("Harley"); //at the beginning of array
console.log(friends);

//Remove elements
let removedElement = friends.pop(); //removes from end
console.log(friends);
console.log(removedElement);

removedElement = friends.shift(); //removes from begining
console.log(friends);
console.log(removedElement);

//To figure out index of an element
console.log(friends.indexOf("Bob"));
console.log(friends.indexOf("kiran"));

//To know if element is present or not
console.log(friends.includes("kiran"));
