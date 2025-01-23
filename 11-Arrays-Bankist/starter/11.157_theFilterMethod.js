const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const filterUsingFor = [];
for (const mov of movements) if (mov > 0) filterUsingFor.push(mov);

console.log(filterUsingFor);
// Draw back here is the chaining of methods is not possible

// Using filter method: produce deposits
const filterMethodDeposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(filterMethodDeposits);

// Using filter method: produce withdrawals: Arrow function
const filterMethodWithdrawals = movements.filter(mov => mov < 0);
console.log(filterMethodWithdrawals);
