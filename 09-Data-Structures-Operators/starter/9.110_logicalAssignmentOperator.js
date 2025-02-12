// ||= Assignment Operator
const rest1 = {
  name: 'Minerva',
  numGuests: 25,
};

const rest2 = {
  name: 'Smackenzzo',
  owner: 'Smack',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

console.log(rest1.numGuests);
console.log(rest2.numGuests);

// Same when numGuests is 0
rest1.numGuests = 0;

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

console.log(rest1.numGuests);
console.log(rest2.numGuests);

// &&= Logical Assignment Operator

// rest1.owner = rest1.owner && 'Anonymous';
// rest2.owner = rest2.owner && 'Anonymous';

rest1.owner &&= 'Anonymous';
rest2.owner &&= 'Anonymous';
console.log(rest1.owner);
console.log(rest2);
