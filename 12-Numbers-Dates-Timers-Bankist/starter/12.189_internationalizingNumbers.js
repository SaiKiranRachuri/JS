// Internationalizing a number
const number = 2345678.118;
console.log(new Intl.NumberFormat().format(number));
// US
console.log('US:    ', new Intl.NumberFormat('en-US').format(number));
// Germany
console.log('Germany: ', new Intl.NumberFormat('de-DE').format(number));
// Syria
console.log('Syria: ', new Intl.NumberFormat('ar-SY').format(number));
// Browser
console.log(
  'Browser:   ',
  new Intl.NumberFormat(navigator.language).format(number)
);

options = {
  style: 'currency',
  unit: 'mile-per-hour',
  currency: 'EUR',
};
// style: unit, percent, currency
// unit: mile-per-hour

console.log(
  'Browser:   ',
  new Intl.NumberFormat('de-DE', options).format(number)
);
console.log(
  'Browser:   ',
  new Intl.NumberFormat(navigator.language, options).format(number)
);

// Format numbers in our Bankist app based on locale and add currency of choice
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2025-02-22T17:01:17.194Z',
    '2025-02-28T23:36:17.929Z',
    '2025-02-26T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'en-AU', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-24T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const formatMovementDates = function (date, locale) {
  const calcDaysPassed = (date1, date2) => {
    console.log(`Date - Date2: ${date1 - date2}`);
    Math.round(Math.abs(date1 - date2) / (24 * 60 * 60 * 1000));
  };

  const daysPassed = calcDaysPassed(new Date(), new Date(date));
  // console.log(daysPassed);
  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed === 2) return 'Two days ago';
  if (daysPassed === 3) return 'Three days ago';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const movementDate = new Date(date);
  // // console.log(movementDate);
  // const ddDate = `${movementDate.getDate()}`.padStart(2, 0);
  // const mmDate = `${movementDate.getMonth() + 1}`.padStart(2, 0);
  // const yyDate = movementDate.getFullYear();

  console.log(locale);

  return new Intl.DateTimeFormat(locale).format(new Date(date));
};

const formattedCurrencyAndNumbers = function (value, locale, currency) {
  console.log(value);
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const combinedMovementsWithDates = acc.movements.map((mov, i) => ({
    movement: mov,
    date: acc.movementsDates.at(i),
  }));

  //   console.log(combinedMovementsWithDates);

  if (sort) combinedMovementsWithDates.sort((a, b) => a.movement - b.movement);

  //   const movs = sort
  //     ? acc.movements.slice().sort((a, b) => a - b)
  //     : acc.movements;

  combinedMovementsWithDates.forEach(function (obj, i) {
    const { movement, date } = obj;
    const type = movement > 0 ? 'deposit' : 'withdrawal';

    const movDate = formatMovementDates(date, acc.locale);

    // const mov = new Intl.NumberFormat(acc.locale, {
    //   style: 'currency',
    //   currency: acc.currency,
    // }).format(movement);

    const mov = formattedCurrencyAndNumbers(movement, acc.locale, acc.currency);

    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div> 
    
          <div class ="movements__date">${movDate}</div>
    
          <div class="movements__value">${mov}€</div>
          
        </div>
      `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  //   labelBalance.textContent = `${acc.balance}€`;
  labelBalance.textContent = formattedCurrencyAndNumbers(
    acc.balance,
    acc.locale,
    acc.currency
  );
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  //   labelSumIn.textContent = `${incomes}€`;
  labelSumIn.textContent = formattedCurrencyAndNumbers(
    incomes,
    acc.locale,
    acc.currency
  );

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  //   labelSumOut.textContent = `${Math.abs(out)}€`;
  labelSumOut.textContent = formattedCurrencyAndNumbers(
    Math.abs(out),
    acc.locale,
    acc.currency
  );
  console.log(Math.abs(out));

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

// To fake login

// currentAccount = account1;
// console.log(currentAccount);
// containerApp.style.opacity = 100;
// updateUI(currentAccount);

// DD/MM/YYYY HH:MM
// const now = new Date();
// const date = `${now.getDate()}`;
// const month = `${now.getMonth() + 1}`;
// const hours = `${now.getHours()}`;
// const minutes = `${now.getMinutes()}`;
// labelDate.textContent = `${date.padStart(2, 0)}/${month.padStart(
//   2,
//   0
// )}/${now.getFullYear()}, ${hours.padStart(2, 0)}:${minutes.padStart(2, 0)}`;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    // const now = new Date();
    // const date = `${now.getDate()}`;
    // const month = `${now.getMonth() + 1}`;
    // const hours = `${now.getHours()}`;
    // const minutes = `${now.getMinutes()}`;
    // labelDate.textContent = `${date.padStart(2, 0)}/${month.padStart(
    //   2,
    //   0
    // )}/${now.getFullYear()}, ${hours.padStart(2, 0)}:${minutes.padStart(2, 0)}`;

    let options = {
      hour: 'numeric',
      minute: 'numeric',
      // day: 'numeric',
      // month: 'long', // numeric, long, short, 2-digit
      // year: 'numeric', // 2-digit
      // weekday: 'long', // short
    };

    // labelDate.textContent = new Intl.DateTimeFormat('en-UK', options).format(
    //   now
    // );

    // Getting language from browser instead hard coding
    // const locale = navigator.language;
    // labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(
    //   now
    // );

    // Displaying date as per the locale region from account object
    const now = new Date();
    console.log(now);
    console.log(currentAccount.locale);
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    currentAccount.movementsDates.push(new Date());
    receiverAcc.movementsDates.push(new Date());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = +inputLoanAmount.value;

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});
