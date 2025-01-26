"use strict";

const bioData = {
  firstName: "Sai Kiran",
  lastName: "Rachuri",
  birthYear: "1997",
  friends: ["Michael", "Peter", "Bob"],
  hasDriversLicense: true,

  //   calcAge: function (birthYear) {
  //     return 2037 - birthYear;
  //   },

  //   calcAge: function () {
  //     //console.log(bioData);
  //     return 2037 - this.birthYear; //or bioData.birthYear can be used however violates DRY and have to update everywhere.
  //   },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
};

// console.log(bioData.birthYear);

// console.log(bioData.calcAge(1997));
// console.log(bioData["calcAge"](1997));

console.log(bioData.calcAge());

console.log(bioData.age);
console.log(bioData.age);
console.log(bioData.age);
