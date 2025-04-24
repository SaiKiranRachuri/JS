const Person = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  },
};

const Student = Object.create(Person); // Prototype linking

Student.init = function (fullName, birthYear, course) {
  Person.init.call(this, fullName, birthYear);
  this.course = course;
};

Student.introduce = function () {
  console.log(`I am ${this.fullName} pursuing ${this.course}`);
};

// Student.calcAge = function () {
//   console.log(`I am ${2037 - this.birthYear} years old.`);
// };

const kiran = Object.create(Student); // Object creation

kiran.init('Sai Kiran', 1997, 'Computer Science');
kiran.introduce();
kiran.calcAge();
kiran.calcAge();
