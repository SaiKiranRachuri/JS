// flat() method: Nested arrays are removed and converted to single array
let arr = [[1, 2], [3, 4, 5], 6, 7, 8];
console.log(arr.flat());

// level of deep in flat() method
arr = [[1, [2]], [[3, 4], 5], 6, 7, 8];
console.log(arr.flat()); //Default it is level 1
console.log(arr.flat(2));

// In bankist data construct an array with movements from all accounts and calculate the sum
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const overallMovements = accounts.map(acc => acc.movements);
console.log(overallMovements);
console.log(overallMovements.flat().reduce((acc, mov) => acc + mov, 0));

// Same using chaining of methods
const overallMovementsUsingChainingOfMethods = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallMovementsUsingChainingOfMethods);

// Do the same using flatMap() method
const overallMovementsUsingFlatMap = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallMovementsUsingFlatMap);
