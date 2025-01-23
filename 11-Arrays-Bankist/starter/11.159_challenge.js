/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

*/

const calcAverageHumanAge = function (ages) {
  const humanAges = ages
    .map((age, i) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((humanAge, i) => humanAge >= 18)
    .reduce((acc, humanAge, i, arr) => acc + humanAge / arr.length, 0);
  // if we divide entire reduce method by arr param then it produces abrupt results as arr param is not accessible outside reduce method. So solution is at lines 29 to 32.
  console.log(humanAges);
};
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

/*
Average of 2 numbers:

2, 3
= (2+3)/2 === 2/2 + 3/2

*/
