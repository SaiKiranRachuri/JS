// Object.create(proto) allows to delegate the behaviour of prototype and it is the another way of creating objects like we did constructor functions and ES6Classes

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const kiran = Object.create(PersonProto);
kiran.fullName = 'Sai Kiran';
kiran.birthYear = 1997;
kiran.calcAge();
console.log(kiran.__proto__ === PersonProto); // true

const john = Object.create(PersonProto);
// A better way of initializing data rather than lines 15, 16 is using init method in prototype.
john.init('John', 1997);
john.calcAge();
