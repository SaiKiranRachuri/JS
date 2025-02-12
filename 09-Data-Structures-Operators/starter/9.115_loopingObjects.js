// Looping through object using object.Keys()
const openingHours = {
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
};

for (const day of Object.keys(openingHours)) {
  console.log(day);
}

const keys = Object.keys(openingHours); // Returns an array with keys
console.log(keys);

// open on number of days using array
console.log(`We are open on ${keys.length} days.`);

// open on days print to console using a string
let openStr = `We are open on ${keys.length} days:`;
for (const day of keys) {
  openStr += ` ${day}`;
}
console.log(openStr);

// object.values
const values = Object.values(openingHours);
console.log(values);

// object.entries
const entries = Object.entries(openingHours);
console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(`On ${day}, we are open at ${open} close at ${close}`);
}
