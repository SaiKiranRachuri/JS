/* Write your code below. Good luck! 🙂 */
"use strict";

const calcAverage = (compete1, compete2, compete3) =>
  (compete1 + compete2 + compete3) / 3;

const checkWinner = (avgDolphis, avgKoalas) => {
  if (avgDolphis >= 2 * avgKoalas) {
    return `Dolphis win (${avgDolphis}) vs (${avgKoalas})`;
  } else if (avgKoalas >= 2 * avgDolphis) {
    return `Koalas win (${avgKoalas}) vs (${avgDolphis})`;
  } else {
    return `No team wins...`;
  }
};

const scoreDolphins = calcAverage(85, 54, 41);
console.log(`Dolphis average: ${scoreDolphins}`);
const scoreKoalas = calcAverage(23, 34, 27);
console.log(`Koalas average: ${scoreKoalas}`);

console.log(checkWinner(scoreDolphins, scoreKoalas));
