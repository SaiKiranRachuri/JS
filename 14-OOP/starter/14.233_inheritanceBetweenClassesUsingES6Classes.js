class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    return 2037 - this.birthYear;
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Setting a property that already exists
  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name; // Results in maximum stack error as we are trying to set a property that exists. So we replace fullName with _fullName(convention) altogether as a new variable to prevent the error.
    } else {
      alert('Not a full name.');
    }
  }

  get fullName() {
    this._fullName;
  }
  // explicitly replacing fullName with _fullName;
}

class Student extends Person {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear); // Always need to happen first
    this.course = course;
  }
  // This constructor function is created as there is an additional property called course in Student class. Else entire constructor function can be omitted.

  introduce() {
    console.log(`I am ${this._fullName} pursuing ${this.course}.`);
  }

  calcAge() {
    console.log(`I am ${2037 - this.birthYear} years old.`);
  }
}

const kiran = new Student('Sai Kiran', 1997, 'Computer Science');
// const john = new Student("John", 1997); // Works when there is no additional property.
kiran.introduce();
kiran.calcAge();
