//Summarise an object using method

"use strict";

const bioData = {
  firstName: "Sai Kiran",
  lastName: "Rachuri",
  birthYear: 1997,
  hasDriversLicense: false,

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  summary: function () {
    return `${this.firstName} is ${this.calcAge()} years old and has ${
      this.hasDriversLicense ? "a" : "no"
    } Drivers license.`;
  },
};

console.log(bioData.calcAge());

console.log(bioData.age);
console.log(bioData.summary());
