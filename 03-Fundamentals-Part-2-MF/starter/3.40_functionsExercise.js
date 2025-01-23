/* Write your code below. Good luck! 🙂 */

"use strict";

const calcTip = (bill) =>
  50 >= bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;

const bills = new Array(125, 555, 44);
console.log(calcTip(bills[0]));
// const tips = new Array(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]));

// const totals = new Array(
//   bills[0] + tips[0],
//   bills[1] + tips[1],
//   bills[2] + tips[2]
// );

// console.log(totals);
