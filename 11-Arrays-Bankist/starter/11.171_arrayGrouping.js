// Group movements array: deposits and withdrawals
let movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const groupedMovements = Object.groupBy(movements, movement =>
  movement > 0 ? 'deposit' : 'withdrawal'
);
console.log(groupedMovements);
// Returns an object with keys deposit and withdrawal; values as array deposits and withdrawals

// Group accounts by their activity level
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300, 300],
  interestRate: 1.2, // %
  pin: 1111,
  type: 'premium',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'premium',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'basic',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [100, 200],
  interestRate: 1,
  pin: 4444,
  type: 'standard',
};

const accounts = [account1, account2, account3, account4];

const accountsActivity = Object.groupBy(accounts, acc => {
  const movementsCount = acc.movements.length;
  if (movementsCount > 8) return 'very active';
  if (movementsCount <= 5) return 'active';
  if (movementsCount > 2) return 'moderate';
  return 'inactive';
});
console.log(accountsActivity);

// Group accounts by type
const groupAccountsByType = Object.groupBy(accounts, account => account.type);
console.log(groupAccountsByType);

const groupAccountsByTypeUsingDestructuring = Object.groupBy(
  accounts,
  ({ type }) => type
);
console.log(groupAccountsByTypeUsingDestructuring);
