'use strict';

const flightNum = 'H123';
const Kiran = {
  name: 'Sai Kiran',
  passportNum: 5346789,
};

const checkIn = function (fNum, passenger) {
  fNum = 'H456';
  passenger.passportNum = 1234567;

  if (passenger.passportNum === 5346789) {
    alert('Checked In.');
  } else {
    alert('Wrong passport.');
  }
  // console.log(passenger);
};

checkIn(flightNum, Kiran);
console.log(flightNum);
console.log(Kiran.passportNum); // PassportNum changes as Kiran is an object(reference type)

// Above is same as doing.....
// const fNum = flightNum; // Same like copy; doesn't has affect on original data
// const passenger = kiran;

const newPassport = function (passenger) {
  passenger.passportNum = Math.trunc(Math.random() * 1000);
};

newPassport(Kiran);
checkIn(flightNum, Kiran);
