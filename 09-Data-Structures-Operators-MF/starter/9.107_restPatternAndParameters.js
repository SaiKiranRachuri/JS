// Unpacking using spread operator
const [a, b, arr] = [2, 3, [4, 5]];
console.log(a, b, ...arr);

// Packing using Rest pattern
const [c, d, ...others] = [2, 3, 4, 5];
console.log(others);

// Both Rest pattern and Spread operator on restaurant menu; include a hole
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

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const [firstItem, , ...menu] = [
  ...restaurant.starterMenu,
  ...restaurant.mainMenu,
]; // hole = Bruschetta is not part of rest pattern
console.log(firstItem);
console.log(menu);

// Objects. Separate weekdays and weekends on Opening hours object
const { sat, ...weedays } = restaurant.openingHours;
console.log(weedays);

// Functions; any number of parameters
const add = function (...numbers) {
  console.log(numbers);
};

add(2, 3);
add(2, 3, 4, 5);
add([2, 3], 4, 5);

// Functions; pass packed array as parameter to funtion
const x = [2, 3, 4, 5];
add(...x);

// Method in object and order pizza
restaurant.orderPizza('chicken', 'onions', 'bell peppers');
