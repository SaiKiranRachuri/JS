// Code begins at 33....

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

// 1) includes method: Equality
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements.includes(-130)); // true

// 2) some method: Condition
console.log(movements.some(mov => mov > 1000)); // true

// 3) every method
console.log('===Every method===');
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

// using some method implement request loan module: line 220

const btnLogin = document.querySelector('.login__btn');
const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const labelWelcome = document.querySelector('.welcome');
const containerApp = document.querySelector('.app');

const containerMovements = document.querySelector('.movements');

const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');

const btnTransfer = document.querySelector('.form__btn--transfer');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');

const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
const btnClose = document.querySelector('.form__btn--close');

const btnLoan = document.querySelector('.form__btn--loan');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');

const btnSort = document.querySelector('.btn--sort');

// Functions
const computeUsernames = function (accounts) {
  accounts.forEach(function (account) {
    account.userName = account.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

computeUsernames(accounts);

const displayMovements = function (movements, sort = false) {
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  console.log(`Sort button: ${movs}`);
  // splice method is used a create a copy instead mutating movements original array
  containerMovements.innerHTML = '';
  movs.forEach(function (mov, i, arr) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
              <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
              <div class="movements__value">${mov}</div>
            </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const displayBalance = function (account) {
  account.balance = account.movements.reduce((acc, curr) => acc + curr, 0);
  // adding a property balance to current account.
  // console.log(account.balance);
  labelBalance.textContent = `${account.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov, i) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0); //After reduce chaining is not possible as reduce produces a single value NOT an array.
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter((mov, i) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map((deposit, i, arr) => (deposit * acc.interestRate) / 100)
    .filter(interest => interest >= 1)
    .reduce((acc, mov, i, arr) => acc + mov, 0);
  labelSumInterest.textContent = `${interest}€`;
};

// btnLogin.addEventListener('click', function (e) {
//   e.preventDefault();
//   // To prevent the form from submitting.
//   console.log('Button login clicked.');
// });
// // One of the property of forms is that when one of the field is entered/edited and on clicking enter the button event is triggered. So here enter key also works.

const updateUI = function (acc) {
  displayMovements(acc.movements);
  displayBalance(acc);
  calcDisplaySummary(acc);
};

let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  // Get currentAccount details respective to the username provided in button
  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );
  //   console.log('Fetching object with respective username successful');
  // console.log(currentAccount);

  // Validate pin and login
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // "?." optional chaining here means it validates for pin only if currentAccount details are fetched at line 62. i.e., if a random username is provided it avoids unintended errors.
    // console.log('Login successful');

    // Welcome message update
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }!`;

    // Set login page opacity to true
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur(); // To remove cursor focus point after login

    // Update movements

    // Update summary

    // Calc interests dynamically based on the current object

    updateUI(currentAccount);
  }
});
// 2) Implement transfers: Get object details based on the input in Transfer to input field.

let receiversAccount;
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  // console.log('Transfers submit clicked.');
  receiversAccount = accounts.find(
    acc => acc.userName === inputTransferTo.value
  );

  const amount = Number(inputTransferAmount.value);
  console.log(amount, receiversAccount);

  inputTransferTo.value = inputTransferAmount.value = '';

  // 3) Debit the inputted amount from current account and add it in receivers account; before debit validate if current account has enough funds
  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiversAccount &&
    receiversAccount?.userName !== currentAccount.userName
  ) {
    // receiversAccount condition exists or not is checked if a random username is inputted it still transfers
    currentAccount.movements.push(-amount);
    receiversAccount.movements.push(amount);

    updateUI(currentAccount);
  }
});

// 4) Close current account after validating current account creds
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    // Using findIndex method figure out the index to delete from accounts array
    const index = accounts.findIndex(
      acc => acc.userName === inputCloseUsername.value
    );
    console.log(index);

    accounts.splice(index, 1); // second param defines no of elements to delete
    containerApp.style.opacity = 0;

    // Difference b/w indexOf and findIndex
    // indexOf fetches index of an element; ex: indexOf(23). findIndex fetches index based on a condition looping over array.
  }
  inputClosePin.value = inputCloseUsername.value = '';
});

// Request loan module
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  let amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
});

// movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
// The some() method returns true (and stops) if the function returns true for one of the array elements.
// The some() method returns false if the function returns false for all of the array elements.

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
