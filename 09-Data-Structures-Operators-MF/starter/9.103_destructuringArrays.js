'use strict';

// Data needed for first part of the section
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

// Destructuring an array
const arr = [2, 3, 4, 6];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
const [a, b, c] = arr;
console.log(a, b, c);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Swapping unpacked variables
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return variables from a function
const [starterCourse, mainCourse] = restaurant.order(2, 0);
console.log(starterCourse, mainCourse);

// Nested destructuring
const nested = [2, 3, [5, 6]];
const [x, , [i, j]] = nested;
console.log(x, i);

// Default values for the element that is not present and you access it
const arrTest = [2, 3, 4];
let [e, f, g, h] = arrTest;
console.log(e, f, g, h);

[e = 1, f = 1, g = 1, h = 1] = arrTest;
console.log(e, f, g, h);
