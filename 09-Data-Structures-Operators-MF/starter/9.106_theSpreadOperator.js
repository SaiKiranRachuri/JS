// Iterables: Arrays, Strings, Maps, Sets; NOT Objects. Spread Operator works only on Iterables however since ES2018 ... works on objects too.

// Unpack array and add elements before array in a new array
const arr = [5, 6, 7];
const badArr = [1, 2, 3, 4, arr[0], arr[1], arr[2]];
const newArr = [1, 2, 3, 4, ...arr];
console.log(newArr);

// Adding an item to Mainmenu in a new array
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  orderPasta: function (ingredient1, ingredient2, ingredient3) {
    console.log(
      `Received your pasta order with ingredients ${ingredient1}, ${ingredient2} and ${ingredient3}.`
    );
  },
};

const mainMenuNew = ['Crossaint', ...restaurant.mainMenu];
console.log(mainMenuNew);

// Copy Array
const starterMenuCopy = [...restaurant.starterMenu];
console.log(starterMenuCopy);

// Join 2 Arrays
const starterMenu = ['Crossaint', 'McPizza'];
const joinArray = [...starterMenu, ' ', ...restaurant.starterMenu];
console.log(joinArray);

// Unpack string iterable
const str = 'Kiran';
const strArr = [...str];
console.log(...str);
console.log(strArr);

// ... doesn't work on template literal
// console.log(`${...str}`);
// As ${} is an expression and cannot have comma separated values

// Pass array params to function
const ingredientsArr = ['Cheese', 'Mayo', 'Sausage'];
restaurant.orderPasta(...ingredientsArr);

// ... on objects - add elements
const restaurantNew = { ...restaurant, founder: 'John', foundedIn: 1997 };
console.log(restaurantNew);

// copy objects
const restaurantCopy = { ...restaurantNew };
console.log(restaurantCopy);

// Update copy
restaurantCopy.founder = 'Kiran';
console.log(restaurantCopy);
console.log(restaurantNew); // Doesn't make changes to original object.
