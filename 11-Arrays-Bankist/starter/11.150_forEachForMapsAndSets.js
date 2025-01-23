// Maps
let currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key} : ${value}`);
});

// Sets
currencies = new Set(['USD', 'EUR', 'GBP']);
currencies.forEach(function (value, _, set) {
  console.log(`${_} : ${value}`);
});

// Sets doesn't contain keys and neither indeces. So as per the notation we should be using a throwaway variable(_) which returns same as "value" variable.
