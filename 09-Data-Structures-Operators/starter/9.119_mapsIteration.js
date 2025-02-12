// Declare map in a different way: Array of arrays
const question = new Map([
  ['Question', 'Which is the best programming language?.'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['Correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Incorrect 😞'],
]); // Array of arrays is same as output from Object.entries() method.

console.log(question); // Just displays data in {}, doesn't mean it is object.

// Convert Objects to map
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
console.log(Object.entries(openingHours));
const objectToMap = new Map(Object.entries(openingHours));
console.log(objectToMap);

// Iterating Map: question
console.log('===========================================');
console.log(question.get('Question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}
const answer = Number(prompt('Your answer please:'));
console.log(question.get(question.get('Correct') === answer));

// Convert map to Array of arrays back
console.log([...question]);

// keys, values, entries methods on map
console.log(question.keys());
console.log([...question.values()]); //Unpack to avoid map iterator in output
// console.log(question.entries());
console.log([...question]); // Same as above line:50
