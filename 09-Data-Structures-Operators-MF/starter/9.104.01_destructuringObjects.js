const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //   order: function (starterIndex, mainIndex) {
  //     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  //   },

  //   orderDeliveryFood: function (obj) {
  //     console.log(obj);
  //   },

  // Destructure object directly in parameters itself
  orderDeliveryFood: function ({
    starterIndex,
    mainIndex,
    deliveryTime: d = '60 mins',
    location: l,
  }) {
    console.log(
      `Your order ${this.starterMenu[starterIndex]}, ${this.mainMenu[mainIndex]} will be delivered in ${d} at ${l}.`
    );
  },
};

restaurant.orderDeliveryFood({
  starterIndex: 2,
  mainIndex: 1,
  deliveryTime: '22:00',
  location: 'SR Nagar',
});
