'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
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
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// Slice method
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));

// shallow copy
console.log(arr.slice());
console.log([...arr]); // both are same however use slice copy when there is chaining of other functions need to be applied to array

console.log('===========SPLICE===========');

//Splice method: Mutates original array unlike slice
arr = ['a', 'b', 'c', 'd', 'e'];

arr.splice(2);
console.log(arr);

//Remove last element from array
arr.splice(-1);
console.log(arr);

//Remove few last 3 elements from array
arr = ['a', 'b', 'c', 'd', 'e'];
arr.splice(-3);
console.log(arr);

//Splice with second parameter: number of elements that you wish to delete
arr = ['a', 'b', 'c', 'd', 'e'];
arr.splice(2, 2);
console.log(arr);

//Reverse method: does mutate original array
arr = [5, 4, 3, 2, 1];
arr.reverse();
console.log(arr);

//Concat method
arr = [1, 2, 3, 4, 5, 6];
let arr2 = [7, 8, 9, 10];
console.log(arr.concat(arr2));

//Same using spread operator
console.log([...arr, ...arr2]);

//Join
arr = ['S', 'A', 'I', 'K', 'I', 'R', 'A', 'N'];
console.log(arr.join(' '));
