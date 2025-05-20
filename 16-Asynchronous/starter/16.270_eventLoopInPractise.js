// console.log('Test Start');
// setTimeout(() => console.log('Zero second timer'), 0); // A zero second timer call back to excute immediately at zero second.
// Promise.resolve('Resolve promise').then(res => console.log(res));
// // Resolve promise to execute immediately
// console.log('Test End');
// Here call back and the microtask promise both has to execute at same time. However, as microtask - promise has precedence than call back it executes first.

console.log('Test Start');
setTimeout(() => console.log('Zero second timer'), 0);
Promise.resolve('Resolve promise 1').then(res => console.log(res));
Promise.resolve('Resolve promise 2').then(res => {
  for (let i = 1; i < 1000000000; i++) {}
  console.log(res);
});

console.log('Test End');
