/* Write your code below. Good luck! 🙂 */

"use strict";

const mark = {
  fullName: "Mark Miller",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 75,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

mark.calcBMI() > john.calcBMI()
  ? console.log(
      `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${
        john.fullName
      }'s BMI (${john.calcBMI()}`
    )
  : console.log(
      `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${
        mark.fullName
      }'s BMI (${mark.calcBMI()}).`
    );

// console.log(`${mark.calcBMI() > john.calcBMI()} ?
//     ${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${
//   miller.fullName
// }'s BMI (${miller.calcBMI()}) :
//     ${miller.fullName}'s BMI (${miller.calcBMI()}) is higher than ${
//   mark.fullName
// }'s BMI (${mark.calcBMI()})
//     `);
