// Calculate all deposits and convert to USD using chaining of methods
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');

// CODE BEGINS HERE...

const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter((mov, i) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0); //After reduce chaining is not possible as reduce produces a single value NOT an array.
  labelSumIn.textContent = `${incomes}€`;

  const out = movements
    .filter((mov, i) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = movements
    .filter(mov => mov > 0)
    .map((deposit, i, arr) => (deposit * 1.2) / 100)
    .filter(interest => interest >= 1)
    .reduce((acc, mov, i, arr) => acc + mov, 0);
  labelSumInterest.textContent = `${interest}€`;
};
calcDisplaySummary(account1.movements);

// Chaining of methods is not a good produce when huge arrays are involved as it can drain the performance.
// splice and reverse methods while chaining must be used in caution as it mutates the original array,
