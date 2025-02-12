// Create an empty map and add values
const restMap = new Map();
restMap.set('name', 'Minerva');
restMap.set(1, 'Begumpet');

// .set returns the map itself
console.log(restMap.set(2, 'Himayath Nagar'));

// Chain adding of entries
restMap
  .set('Categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('Open', 11)
  .set('Close', 23)
  .set(true, 'We are open.')
  .set(false, 'We are closed.');

console.log('Restaurant Map:');
console.log(restMap);

// get method
console.log(restMap.get('Categories'));

// current time is 21 and see if it is open
let time = 9;
console.log(
  restMap.get(time > restMap.get('Open') && time < restMap.get('Close'))
);

// has method
console.log(restMap.has('Categories'));

// delete method
const myMap = new Map();
myMap.set('name', 'ABC');
myMap.set(1, 'SR Nagar');

myMap.delete(1);
console.log(myMap);

// size
console.log(restMap.size);

// clear
// restMap.clear();
console.log(restMap);

// Array as a key
const arrayMap = new Map();
arrayMap.set([1, 2], 'Array is my Key');
console.log(arrayMap);
console.log(arrayMap.get([1, 2]));

//    Solution
const arrayMaps = new Map();
const arr = [1, 2];
arrayMaps.set(arr, 'Array is my Key');
console.log(arrayMaps);
console.log(arrayMaps.get(arr));

// rest.Set(document............)
restMap.set(document.querySelector('h1'), 'Heading');
