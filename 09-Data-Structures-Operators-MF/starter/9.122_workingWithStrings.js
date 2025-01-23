// Accessing a string at a particular position
const myString = 'Kiran';
console.log(myString[0]);
console.log(myString[4]);

// Accessing a string directlyy at a particular position
console.log('Kiran'[3]);

// Length of a string variable
console.log(myString.length);

// Length of string itself
console.log('SAIKIRAN'.length);

// Methods: indexOf(), lastIndexOf()
const airline = 'TAP AIR PORTUGAL';
console.log(airline.indexOf('R'));
console.log(airline.lastIndexOf('R'));

// Occurrence of a word using indexOf()
console.log(airline.indexOf('PORTUGAL'));

// slice() extraction of a string or substring; slice with start and end params; length = end param - start param
console.log(airline.slice(3));
console.log(airline.slice(-2));

console.log(airline.slice(1, -1));
console.log(airline.slice(3, 7));

// slice() extraction without knowing the actual string; indexOf and lastIndexOf
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// Check middle seat
const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  if (seat.slice(-1) === 'B' || seat.slice(-1) === 'E') {
    console.log('Not the middle seat!😞');
  } else {
    console.log('You are lucky! 😊');
  }
};
checkMiddleSeat('11B');
checkMiddleSeat('3A');
checkMiddleSeat('4D');

// Why methods work on primitive type: String
console.log(new String('Kiran'));
console.log(typeof new String('Kiran'));
console.log(typeof new String('Kiran').slice(-1));
