"use strict";

// One liner
const calcAge = (birthYear) => 2037 - birthYear;
console.log(calcAge(1997));

//Multi liner function

const yearsUntillRetirement = (birthYear) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return retirement;
};

console.log(yearsUntillRetirement(1997));

// Multi liner with multiple parameters

const yearsUntillRetirement2 = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;

  return `${firstName} has ${retirement} years for retirement!`;
};

console.log(yearsUntillRetirement2(1997, "Kiran"));
console.log(yearsUntillRetirement2(1991, "Sai"));
