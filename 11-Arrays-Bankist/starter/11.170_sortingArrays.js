// Sorting strings using sort method
const names = ['Sai Kiran', 'Siri', 'Jonas', 'Pavan', 'Kishore'];
names.sort();
console.log(names); // sort method mutates the original array

// Sorting numbers
let movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// [450, 200, -400, 3000, -650, -130, 70, 1300];
movements.sort();
console.log(movements); // sorts treating the elements as strings

// Sorting in ascending order
movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
movements.sort((a, b) => {
  if (a > b) return 1; // swap values
  if (b > a) return -1; // keep values
  // return > 0  a, b
  // return < 0, b, a
});
console.log(movements);
console.log(movements.reverse()); // also mutates orginal array
console.log(movements);

// Sorting in descending order
movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
movements.sort((a, b) => {
  if (a > b) return -1;
  if (b > a) return 1;
  // return > 0  a, b
  // return < 0, b, a
});

// Sorting in ascending order: other way
movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
movements.sort((a, b) => a - b);
console.log(movements);

// Sorting in descending order: other way
movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
movements.sort((a, b) => b - a);
console.log(movements);
