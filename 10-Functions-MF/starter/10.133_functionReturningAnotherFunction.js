// Function: greet returning another function along with greet and name
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetMessage = greet('Hi'); // This variable has address/definition of returning function now
greetMessage('Kiran');

// Other way of calling greet function with greet and name
greet('Hello')('kiran');

// Same using arrow functions
const greetArrow = greeting => name =>
  console.log(`Arrow function: ${greeting} ${name}`);
greetArrow('Hej')('Kiran');
