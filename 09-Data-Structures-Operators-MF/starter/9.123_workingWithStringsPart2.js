// Uppercase to lowercase vice versa
let myString = 'KIRAN';
console.log(myString.toLowerCase());
console.log(myString);

// Directly on a string
console.log('kiran'.toUpperCase());

// Fix capitalization in kIrAn string
myString = 'kIrAn';
const myLowerCaseString = myString.toLowerCase();
const capitalizedString =
  myLowerCaseString[0].toUpperCase() + myLowerCaseString.slice(1);
console.log(capitalizedString);

// Compare emails
const actualEmail = 'kiran@gmail.com';
const userInputEmail = '  Kiran@gmail.com \n';
const correctUserInputEmail = userInputEmail.toLowerCase().trim();
console.log(correctUserInputEmail);
console.log(actualEmail === correctUserInputEmail);

// Replace character, word
myString = 'sai';
console.log(myString.replace('s', 'c'));

myString =
  'Passengers travelling to Coimbatore please be ready to board at door 12. Board at door 12';
console.log(myString.replace('door', 'gate'));
console.log(myString.replaceAll('door', 'gate'));

// Replace all using a regular expression
console.log(myString.replace(/door/g, 'gate'));

// includes, startswith methods
console.log(myString.includes('Passenger'));
console.log(myString.startsWith('P'));

// check baggage
const checkBaggage = function (items) {
  if (
    items.toLowerCase().includes('knife') ||
    items.toLowerCase().includes('gun')
  ) {
    console.log('You are NOT allowed to board the plane.');
  } else {
    console.log('You are Welcome');
  }
};
checkBaggage('I am carrying a laptop, Knife and a gun!');
checkBaggage('I am carrying clothes.');
