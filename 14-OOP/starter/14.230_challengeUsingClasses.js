// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

// Using classes
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  // Methods are added to prototype property(PersonCl)
  accelerate() {
    this.speed += 5;
    console.log(`${this.make} is moving with a speed of ${this.speed}`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is moving with a speed of ${this.speed}`);
  }

  get speedUS() {
    this.speed /= 1.6;
    console.log(`${this.make} is moving with a speed of ${this.speed} mi/h.`);
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new Car('Ford', 90);
ford.accelerate();
ford.brake();
ford.speedUS;

ford.speedUS = 50; // Use the property name
ford.speedUS;

// Using Object.create
// const CarProto = {
//     accelerate(){
//         this.speed += 5;
//         console.log(`${this.make} is going at a speed of ${this.speed}`);

//     },

//     brake(speed){
//         this.speed -= 5;
//         console.log(`${this.make} is going at a speed of ${this.speed}`);

//     },

//     init(make, speed){
//         this.make = make;
//         this.speed = speed;
//     },
// }

// const ford = Object.create(CarProto);
// ford.init("Ford", 90);
// ford.accelerate();
// ford.brake();
