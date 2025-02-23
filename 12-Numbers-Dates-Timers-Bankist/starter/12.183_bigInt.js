// ES2020 feature
// Numbers are internally represented as 64 bits i.e., there are 64 1's or 0's to represent a number. Out of these only 53 bits are used to store the digits and the rest are used to store the place of decimal and the signage.
// DB id's and data API's can be extremely huge.

// 1) Maximum number in JS
console.log(2 ** 53 - 1); // 9007199254740991

// 2) Find out max using a method from Number funtion
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// 3) Add or remove numbers on max number and see precision
console.log(2 ** 53 - 1); // 9007199254740991
console.log(2 ** 53 - 5); // 9007199254740987
console.log(2 ** 53 + 3); // 9007199254740996

// 4) Transform a regular number to bigInt by using n char
console.log(5454545454557676545454543545n);

// 5) Using BigInt function: however it is now working for only small numbers when large numbers are used it is storing incorrectly
console.log(BigInt(5454545454557676545454543545));
console.log(BigInt(54545454545));

// 6) Operators on bigInt
console.log(20n + 20n);
console.log(20n * 3n);

// 7) BigInt multiplied by a regular number
// console.log(20n * 3); // Cannot mix with other types error.

// Exemptions:
// 8) Comparision operators: < , ===
console.log(20n > 3); // true
console.log(20n == 20); // true
console.log(20n === 20); // false: types are not equal

// BigInt and concatenating a string
console.log(20n + ' this is big int!!');

// Divisions
console.log(20n / 5n); // 4n
console.log(11n / 3n); // 3n : cuts the decimal part
