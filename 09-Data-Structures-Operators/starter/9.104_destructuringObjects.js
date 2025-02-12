const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

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
};

// Destructuring restaurant Object
// const { name, openingHours, mainMenu } = restaurant;
// console.log(name, openingHours, mainMenu); // Random order is fine and hole is not required like in arrays.

// Giving variable names different than property names
// const {
//   name: restaurantName,
//   openingHours: hours,
//   mainMenu: main,
// } = restaurant;
// console.log(restaurantName, hours, main);

// Default value for property and different than property name combined
// const {
//   name,
//   openingHours: hours,
//   restaurantRating = 3,
//   restaurantReviews = [],
// } = restaurant;
// console.log(name, hours, restaurantRating, restaurantReviews);

// Mutating already declared variables and common as properties in object; swapping
let a = 111;
let b = 222;

const obj = {
  a: 23,
  b: 27,
};

({ a, b } = obj); // Without paranthesis {a, b} is treated as block and cannot assign anything to block;
console.log(a, b);
({ a, b } = { b, a });
console.log(a, b);

// 5) Nested objects; friday
const { name, openingHours } = restaurant;
const {
  fri,
  sat: { open: o, close: c },
} = openingHours;
console.log(fri, o);
