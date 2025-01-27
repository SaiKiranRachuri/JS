const calcAge = function (birthYear) {
  //   debugger;
  console.warn('This function takes number as argument/actual values.');
  if (typeof birthYear !== Number) {
    console.error('You have passed argument other than number type.');
  }
  return 2037 - birthYear;
};

console.log(calcAge('Kiran'));
console.log(calcAge(1997));

// Object in table form

const Kiran = {
  firstName: 'Kiran',
  age: 30,
  friends: ['Jonas', 'Kumar'],
};
console.table(Kiran);
