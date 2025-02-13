// Function to make a str as single word using replace method and regular exp
const oneWord = function (str) {
  return str.replace(/ /g, '');
};

// console.log(oneWord('Javascript is the best.'));

// Function to make first word to uppercase and join using space
const firstWordToUppercase = function (str) {
  const [firstWord, ...others] = str.split(' ');
  return [firstWord.toUpperCase(), ...others].join(' ');
  //   const output = firstWord.replace(firstWord, firstWord.toUpperCase());
  //   console.log(output);
  //   console.log(firstWord);
};
// console.log(firstWordToUppercase('Javascript is the best.'));

// Transformer function: HOF
const transformer = function (str, fn) {
  console.log(`The original string: ${str}`);
  console.log(`The transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};
transformer('Javascript is the best', oneWord); // oneWord call back function is abstract to transformer.
transformer('Javascript is the best', firstWordToUppercase);

// high5 function with high5 as call back
const high5 = function () {
  console.log('🙌');
};
document.body.addEventListener('click', high5); //Click on the body

// foreach() in arrays: call backs all the time....
['Kiran', 'Jonas', 3].forEach(high5);
