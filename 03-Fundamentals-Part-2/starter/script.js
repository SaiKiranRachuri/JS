"use strict";
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true; //By using strict it throws an undefined error for the variable in console

if (hasDriversLicense) console.log("I can drive.");

// const interface = 10; //Reserved word in JS for future implementation. So it throws error

const private = 20;
// Throws console error unexpected strict mode reserved word
