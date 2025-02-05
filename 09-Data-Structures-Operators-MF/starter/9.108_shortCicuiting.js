// &&, || Uses any data types, returns any data types, short circuiting

console.log(3 || 'Kiran');
console.log(0 || 'Kiran');
console.log(true || 0);
console.log(undefined || null);

console.log(0 || undefined || false || true || 0 || 'kiran');

// default values
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  orderPizza: function (ingredient1, ...otherIndgredients) {
    console.log(ingredient1, otherIndgredients);
  },
};

//restaurant.numGuests = 23;
console.log(restaurant.numGuests ? restaurant.numGuests : 10);
console.log(restaurant);

console.log(restaurant.numGuests || 12);

console.log('===============AND=================');

console.log(0 && 'Kiran');
console.log(true && 0);

console.log(true && 'Kiran' && 1 && 0 && undefined);

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('Mushroom', 'Spinach', 'Onions');
// }

restaurant.orderPizza || restaurant.orderPizza('Mushroom', 'Spinach', 'Onions');
