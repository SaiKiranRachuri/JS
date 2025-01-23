// split method: split at string by a character or space
let myString = 'Thailand+is+a+beautiful+place';
console.log(myString.split('+')); // Returns array of words after split

// join: salutation, firstName and lastName
const nameArray = ['Mr.', 'Sai Kiran', 'Rachuri'];
console.log(nameArray.join(' '));

// function to capitalize each starting character of word and add it to array in ways by using slice and replace methods

const capitalizeString = function (text) {
  const splitArray = text.split(' ');
  let capitalizedArray = [];
  for (const word of splitArray) {
    // capitalizedArray.push(word[0].toUpperCase() + word.slice(1));
    capitalizedArray.push(word.replace(word[0], word[0].toUpperCase()));
  }
  return capitalizedArray.join(' ');
};

console.log(capitalizeString('thailand is a beautiful place'));

// Padding: padStart() and padEnd()
myString = 'Thailand';
console.log(myString.padStart('20', '*').padEnd('35', '+'));

// Mask credit card number
const maskCreditCardNumber = function (text) {
  //   const convertToString = String(text);
  const convertToString = text + ''; // +: N --> S
  const lastFourCharacters = convertToString.slice(-4);
  return lastFourCharacters.padStart(convertToString.length, 'x');
};
console.log(maskCreditCardNumber('48574549584059405'));
console.log(maskCreditCardNumber(48574549584059405));
console.log(maskCreditCardNumber(34545));

// Repeat message
const message =
  'All the flights are delayed due to bad weather..Sorry for inconvenience. ';
console.log(message.repeat(5));

// Function to display the planes waiting
const planesWaiting = function (n) {
  console.log(`There are ${n} planes waiting in line ${'✈️'.repeat(n)}`);
};
planesWaiting(3);
planesWaiting(8);
