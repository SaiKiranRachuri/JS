const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

/* Write your code below. Good luck! 🙂 */

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

let i;
for (i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + calcTip(bills[i]));
}

console.log(tips, totals);

const calcAverage = function (arr) {
  let i;
  let sum = 0;
  let avg = 0;
  for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  //   avg = sum / arr.length;
  return sum / arr.length;
};

console.log(calcAverage(totals));
