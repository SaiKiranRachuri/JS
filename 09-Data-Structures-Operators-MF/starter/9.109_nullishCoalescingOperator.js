const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

restaurant.numGuests = 0;
restaurant.numGuests = undefined;
const guests = restaurant.numGuests || 10; // This returns 10 even if above statement doesn't exist
console.log(guests);

//Nullish : Null and undefined (NOT 0 or '')
console.log(restaurant.numGuests ?? 10); // Replacement to above problem returns actual value
