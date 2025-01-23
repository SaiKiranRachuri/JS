// Coding Challenge #4

/*
This time, Julia and Kate are studying the activity levels of different dog breeds.
 
YOUR TASKS:

 
*/

const breeds = [
  {
    breed: 'German Shepherd',
    averageWeight: 32,
    activities: ['fetch', 'swimming'],
  },
  {
    breed: 'Dalmatian',
    averageWeight: 24,
    activities: ['running', 'fetch', 'agility'],
  },
  {
    breed: 'Labrador',
    averageWeight: 28,
    activities: ['swimming', 'fetch'],
  },
  {
    breed: 'Beagle',
    averageWeight: 12,
    activities: ['digging', 'fetch'],
  },
  {
    breed: 'Husky',
    averageWeight: 28,
    activities: ['running', 'agility', 'swimming'],
  },
  {
    breed: 'Bulldog',
    averageWeight: 36,
    activities: ['sleeping'],
  },
  {
    breed: 'Poodle',
    averageWeight: 18,
    activities: ['agility', 'fetch'],
  },
];

arr = [{}, {}, {}];

// 1. Store the the average weight of a "Husky" in a variable "huskyWeight"
const huskyWeight = breeds.find(obj => obj.breed === 'Husky').averageWeight;
console.log(huskyWeight);
// find() method returns a first element that passes a test.

// 2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
const dogBothActivities = breeds.find(
  obj => obj.activities.includes('running') && obj.activities.includes('fetch')
).breed;
console.log(dogBothActivities);

// 3. Create an array "allActivities" of all the activities of all the dog breeds
const allActivities = breeds.map(obj => obj.activities).flat();
console.log(allActivities);

const allActivitiesUsingFlatMap = breeds.flatMap(obj => obj.activities);
console.log(allActivitiesUsingFlatMap);

// 4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
const uniqueActivities = [...new Set(allActivities)];
console.log(uniqueActivities);

// 5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
const breedsHavingSwimmingActivity = breeds.filter(obj =>
  obj.activities.includes('swimming')
);
const activities = breedsHavingSwimmingActivity
  .map(obj => obj.activities)
  .flat();
let swimmingAdjacent = [...new Set(activities)];

// Chaining...
swimmingAdjacent = [
  ...new Set(
    breeds
      .filter(obj => obj.activities.includes('swimming'))
      .flatMap(obj => obj.activities)
      .filter(activity => activity !== 'swimming')
  ),
];
console.log(swimmingAdjacent);

// 6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
console.log(breeds.every(obj => obj.averageWeight > 10));

// 7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".
console.log(breeds.some(obj => obj.activities.length >= 3));

// BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.
const breedshavingFetchActivity = Math.max(
  ...breeds
    .filter(obj => obj.activities.includes('fetch'))
    .map(obj => obj.averageWeight)
);
console.log(breedshavingFetchActivity);
