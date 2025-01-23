// Set is an ES6 feature

// Declare a set
const restSet = new Set(['Pasta', 'Pasta', 'Taco', 'Pizza', 'Bread', 'Taco']);
console.log(restSet);

// Declare in console.log statement
console.log(new Set('Kiran'));

// size method
console.log(restSet.size);

// has method
console.log(restSet.has('Taco'));

// add method
restSet.add('Garlic Bread');
restSet.add('Garlic Bread');
console.log(restSet);

// delete
restSet.delete('Garlic Bread');
console.log(restSet);

// clear() method
const mySet = new Set(['Test', 'abc']);
mySet.clear();
console.log(mySet);

const mySetEmpty = new Set();
console.log(mySetEmpty);

// Looping a set
for (const item of restSet) {
  console.log(item);
}

// Array to set conversion
const arr = ['Kiran', 'Jonas', 'Andrei', 'Schedmetman', 'Kiran'];
console.log(new Set(arr));

// Array to Array without duplicates with sets operation in middle
const arr1 = ['Kiran', 'Jonas', 'Andrei', 'Schedmetman', 'Kiran'];
console.log([...new Set(arr1)]);

// Size of an unique array using size method
console.log(new Set(arr).size);

//string.size
console.log(new Set('Kiran').size);
