// Coding Challenge 5

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).










HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion. */

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.) Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)

// dogs.forEach(dog => {
//   const recommededFoodPortion = dog.weight ** 0.75 * 28;
//   dog.recommededFoodPortion = recommededFoodPortion;
// });
// console.log(dogs);

dogs.forEach(dog => (dog.recFoodPortion = Math.floor(dog.weight ** 0.75 * 28)));
console.log(dogs);

// 2) Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓

let petSarah = dogs.find(dog => dog.owners.includes('Sarah'));
petSarah.curFood > petSarah.recommededFoodPortion
  ? console.log("Sarah's dog is eating too much.")
  : console.log("Sarah's dog is eating too less.");

petSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(
  `Sarah's dog is eating too ${
    petSarah.curFood > petSarah.recommededFoodPortion ? 'much.' : 'less.'
  }`
);

//   3) Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommededFoodPortion)
  .flatMap(dogEatingTooMuch => dogEatingTooMuch.owners);

const ownersEatTooLess = dogs
  .filter(dog => dog.curFood < dog.recommededFoodPortion)
  .flatMap(dogEatingTooLess => dogEatingTooLess.owners);
console.log(ownersEatTooMuch);
console.log(ownersEatTooLess);

// 4) Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
let str = '';
ownersEatTooMuch.forEach((owner, index, arr) => {
  if (index === ownersEatTooMuch.length - 1) {
    str = str + owner + "'s ";
  } else {
    str = str + owner + ' and ';
  }
});
console.log(str + 'dogs eat too much!');

str = '';
ownersEatTooLess.forEach((owner, index, arr) => {
  if (ownersEatTooLess.length - 1 === index) {
    str = str + owner + "'s ";
  } else {
    str = str + owner + ' and ';
  }
});
console.log(str + `dogs eat too less!`);

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);

// 5) Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
console.log(dogs.some(dog => dog.curFood === dog.recommededFoodPortion));

// 6) Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
const checkeatingOkay = dog =>
  dog.recommededFoodPortion * 0.9 <
  dog.curFood <
  dog.recommededFoodPortion * 1.1;

console.log(dogs.every(checkeatingOkay));

// 7) Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
const dogsEatingOkayAmountOfFood = dogs.filter(checkeatingOkay);
console.log(dogsEatingOkayAmountOfFood);

// 8) Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)
console.log(
  dogs.toSorted((a, b) => a.recommededFoodPortion - b.recommededFoodPortion)
);

const arr = [true, true, true, false];
console.log(arr.some(element => element === true));
console.log(arr.every(element => element === true));

const age = 18;
console.log('Range check:');
console.log(15 < age < 20);
console.log(age > 15 && age < 20);

const dogsGroupedByPortion = Object.groupBy(dogs, dog => {
  if (dog.curFood > dog.recommededFoodPortion) return 'too-much';
  else if (dog.curFood < dog.recommededFoodPortion) return 'too-less';
  else return 'exact';
});
console.log(dogsGroupedByPortion);
console.log(Math.floor(2.186343434));

// Group dogs objects by number of owners
const groupDogsByNumberOfOwners = Object.groupBy(
  dogs,
  dog => `${dog.owners.length} - owner(s)`
);
console.log(groupDogsByNumberOfOwners);
