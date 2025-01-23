// This is same as call method however, this will not call the function. This will just have the this keyword set for an object

const lufthansa = {
  airline: 'Lufthansa',
  airlineCode: 'A123',
  bookings: [],
  book(flightCode, passengerName) {
    console.log(
      `${passengerName} had booked seat(s) at airline: ${this.airline}, airline code: ${this.airlineCode} flight code: ${flightCode}`
    );
    this.bookings.push({ flight: `${flightCode}`, passengerName });
  },
};

lufthansa.book('LF1', 'Kiran');
console.log(lufthansa);

const book = lufthansa.book;

// New Airline
const euroWings = {
  airline: 'Eurowings',
  airlineCode: 'E123',
  bookings: [],
};

// New Airline
const swiss = {
  airline: 'Swiss',
  airlineCode: 'S123',
  bookings: [],
};

// The bind has only airlines preset i.e., the this keyword set to eurowings object
const bookEW = book.bind(euroWings);
bookEW('EF2', 'Ram');

//Taking it further, Partial application: Parameters are preset. The bind has flight number also preset.
const bookEWF3 = book.bind(euroWings, 'EF3');
bookEWF3('Chander');
console.log(euroWings);

// With event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  this.planes++;
  console.log(this.planes);
  console.log(this);
};
lufthansa.buyPlane(); // Here this is set to Lufthansa

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane); // Here the this is set to the buy class not the airline object.

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// Preset rate
const addTaxVat = addTax.bind(null, 0.2); // null inplace of this as there is no this here
console.log(addTaxVat(300));

// Same rewriting using the concept of function returning another function
const addTaxRewrite = function (rate) {
  return function (value) {
    // console.log(`${value + value * rate}`);
    return value + value * rate;
  };
};

const output = addTaxRewrite(0.1);
console.log(output(200));
console.log(addTaxRewrite(0.2)(300)); // Refer 10.133 module
