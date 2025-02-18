// 1) sqrt() method, sqrt using **, cubic root using **
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(27 ** (1 / 3));

// 2) max() method: numbers, a string, a symbol; min method
console.log(Math.max(30, 22, 56, 18));
console.log(Math.max(30, 22, '56', 18)); // 56
console.log(Math.max(30, 22, '56px', 18)); // NaN

// 3) calculate radius of circle with a symbol in it
console.log(Math.PI * Number.parseFloat('3.2px') ** 2);

// 4) Math.random() and build a function to use it dynamically
console.log(Math.random()); // 0 to 0.9999
console.log(Math.random() * 6); // 0 to 5.9999
console.log(Math.trunc(Math.random() * 6 + 1)); // 0 to 6

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// max - min + 1 produces number of integers between the specified range: say 0, 3 then the range is 4 numbers
// + min is included to start the range from: 10 or 3 from below function call

console.log(randomInt(10, 20));
console.log(randomInt(0, 3));

// Rounding Integers
// 1) trunc(): removes any decimal part
console.log(Math.trunc(23.3)); // 23

// 2) round(): rounds to nearest integer
console.log(Math.round(23.3)); // 23
console.log(Math.round(23.0)); // 23
console.log(Math.round(23.5)); // 24

// 3) ceil(), floor()
console.log(Math.ceil(23.4)); // 24
console.log(Math.floor(23.3)); // 23

// 4) difference b/w floor and trunc
console.log(Math.trunc(23.3)); // 23
console.log(Math.floor(23.3)); // 23

console.log(Math.floor(-23.3)); // -24: -24, -23.3, - 23, 22, ..0.. 23, 23.3, 24: Floor is always a value lesser next to left of actual value
console.log(Math.trunc(-23.3)); // -23

// 5) Rounding decimals: toFixed and + to convert it to number type as toFixed returns string
console.log((2.7).toFixed(3)); // foFixed(number of decimal places)
console.log((2.7456).toFixed(3)); // 2.746
console.log(+(2.725).toFixed(2)); // 2.73

// Primitives cannot have methods so JS does boxing: converts to object internally and returns back the expected data type
