'use strict';

const bookings = [];
const airplane = function (
  planeNum,
  numPassengers = 3 * 1,
  price = 1100 * numPassengers
) {
  //ES5
  //numPassengers = numPassengers || 2;
  //price = price || 999;

  const booking = {
    planeNum,
    numPassengers,
    price,
  };
  bookings.push(booking);
};

airplane('H123');
airplane('H123', 20);
airplane('H123', undefined, 1100);

console.log(bookings);
