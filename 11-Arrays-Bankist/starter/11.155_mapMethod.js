// Convert movements array in Euro's to USD
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUSD = 1.1;
const euroToUSDMap = movements.map(function (transaction) {
  return transaction * euroToUSD;
}); // Having call back function and method resembles functional programming.
console.log(movements);
console.log(euroToUSDMap); // Doesn't mutate original array. Returns new array with after map.

// Convert movements array in Euro's to USD and the call back function replaced with arrow function
const euroToUSDMapArrow = movements.map(transaction => transaction * euroToUSD);
console.log('===Arrow function===');
console.log(euroToUSDMapArrow);

// Same using for of loop
const euroToUSDForOf = [];
for (const transaction of movements) {
  euroToUSDForOf.push(transaction * euroToUSD);
}
console.log(euroToUSDForOf);

// Instead printing transactions on to console, store the same onto array using arrow function
const storeTransactionsToArray = movements.map(
  (transaction, i) =>
    `Transaction ${i + 1}: You have a ${
      transaction > 0 ? 'credit' : 'debit'
    } of ${Math.abs(transaction)}`
);
console.log(storeTransactionsToArray);
// This stores the transactions in array instead logging to console unlike printing each transaction to console which is a side effect in functional programming.
