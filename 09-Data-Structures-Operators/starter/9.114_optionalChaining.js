const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
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
  },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderTest(x, y) {
    return x, y;
  },
};

// Check for open property exists on monday property of OpeningHours object
// console.log(restaurant.openingHours.mon.open);

// Tackle the error in above statement
console.log(restaurant.openingHours.mon?.open);

// Check for open property exists and also OpeningHours property
console.log(restaurant.openingHours?.mon?.open);

// Looping through weekdays array and logging the restaurant object timings for each day
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  //   console.log(restaurant.openingHours[day]?.open);
}

// Tackle undefined problem using short circuiting
for (const day of days) {
  console.log(
    `On ${day} we are open at ${restaurant.openingHours[day]?.open || 'Closed'}`
  );
}

// Tackle closed on sat problem
for (const day of days) {
  console.log(
    `On ${day} we are open at ${restaurant.openingHours[day]?.open ?? 'Closed'}`
  );
}

// Optional chaining on methods
console.log(restaurant.order?.(0, 1) || "Method doesn't exist");
console.log(restaurant.orderPasta?.(0, 1) || "Method doesn't exist");
console.log(restaurant.orderTest?.() ?? 'Sorry! Method exists but not defined');

// Opetional chaining on Arrays
let rest = [{ name: 'Minerva', Location: 'Begumpet' }];
console.log(rest[0]?.name);

rest = [];
console.log(rest[0]?.name || 'Empty array');

rest = [{ name: null, Location: 'Begumpet' }];
console.log(rest[0]?.name ?? 'Name is not defined');
