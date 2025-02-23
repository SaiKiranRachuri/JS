// ES 2021 feature: Numeric Separator
// Numeric separtors are for readability of a extremely huge number: diameter of solar system

let priceOfKeyboard = 126000;
priceOfKeyboard = 1_26_000;
console.log(priceOfKeyboard);

// const PI = 3.1415;
// const PI = 3._1415; // does work this way
// console.log(PI);

console.log(parseInt('1_26_000')); // 1
console.log(Number('1_26_000')); // NaN
