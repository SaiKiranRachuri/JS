// setTimeout

setTimeout(() => console.log('Here is your pizza 🍕'), 3000);
console.log('Order confirmed.');
// 3000 milliseconds is 3 seconds
// Arrow function is not executed immediately, it is registered and then executed after 3 seconds. However, meanwhile the next lines are executed which is Asynchronous execution

// Arrow function is not called explicitly, it is implicitly called by JS engine so it is not possible to call the function with params like we usually do. So to achieve it we pass the arguments as well in function definition only.

setTimeout(
  (ingredient1, ingredient2) =>
    console.log(
      `Here is your pizza 🍕 with ingredients ${ingredient1} and ${ingredient2}`
    ),
  3000,
  'spinach',
  'paneer'
);
console.log('Order confirmed.');

// Stop the execution even before the timer

const ingredients = ['spinach', 'paneer'];
const pizzaTimer = setTimeout(
  (ingredient1, ingredient2) =>
    console.log(
      `Here is your pizza with ingredients ${ingredient1} and ${ingredient2}`
    ),
  3000,
  ...ingredients
);

if (ingredients.includes('paneer')) clearTimeout(pizzaTimer);

// setInterval: To execute a function again and again after a scheduled time

setInterval(() => {
  const now = new Date();
  console.log(now);
}, 1000);

// Building a clock
setInterval(() => {
  const now = new Date();
  console.log(`${now.getSeconds()}`);
}, 3000);
