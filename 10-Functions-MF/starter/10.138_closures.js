const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`Passenger count: ${passengerCount}`);
  };
};

const booker = secureBooking();

booker(); // Passenger count: 1
booker(); // Passenger count: 2
booker(); // Passenger count: 3

console.dir(booker);
