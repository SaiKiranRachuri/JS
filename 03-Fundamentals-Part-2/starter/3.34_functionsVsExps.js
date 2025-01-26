//Function Declaration VS /Expressions

"use strict";

function calcAge(birthYear) {
  return 2037 - birthYear;
}

console.log(calcAge(1997)); //This statement can be written even before declaring the function and still produces a value

//=======================================

const calcAge1 = function (
  birthYear // //Anonymous function - function without name
) {
  return 2037 - birthYear;
};

console.log(calcAge1(1991));
