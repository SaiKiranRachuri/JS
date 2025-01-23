// Airline Lufthanza object
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

lufthansa.book('Lflight1', 'Kiran');
console.log(lufthansa);

// New Airline
const euroWings = {
  airline: 'Eurowings',
  airlineCode: 'E123',
  bookings: [],
};

// PROBLEM: doesn't work
const book = lufthansa.book; // book is now a normal copy function and returns undefined due to scoping
// book('Eflight1', 'Jonas');

// SOLUTION: Explicitly tell JS which object has to be invoked
// call method
book.call(euroWings, 'Eflight1', 'Jonas'); // this keyword has been set at euroWings object here
console.log(euroWings);

book.call(lufthansa, 'Eflight2', 'Smith');

// New Airline
const swiss = {
  airline: 'Swiss',
  airlineCode: 'S123',
  bookings: [],
};

book.call(swiss, 'Sflight1', 'Jonas');

// apply method: same as apply but parameters are of array type
const flightData = ['Sflight1', 'xyz'];
book.apply(swiss, flightData); // apply had become obsolette so same can be achieved using call method as below.

book.call(swiss, ...flightData);
