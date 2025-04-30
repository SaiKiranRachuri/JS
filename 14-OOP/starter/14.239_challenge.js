// *
// 1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
// 2. Make the 'charge' property private;
// 3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

// DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

// GOOD LUCK 😀

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed = this.speed + 10;
  console.log(`The car ${this.make} is going at speed of ${this.speed} kmph.`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`The car ${this.make} is going at speed of ${this.speed} kmph.`);
  return this;
};

class EVCl extends Car {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `The car ${this.make} is going at a speed of ${
        this.speed
      }kmph with a current batter charge of ${this.#charge}%.`
    );
    return this;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
// console.log(rivian.#charge); // cannot be accessed as #charge is private
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

// rivian.speed(); Also access getters and setters if present on parent class

// const EV = function (make, speed, charge) {
//   // this.make = make;
//   // this.speed = speed;
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   //   this.charge = this.charge - 1;
//   this.charge--;
//   console.log(
//     `The car ${this.make} is going at a speed of ${this.speed}kmph with a current batter charge of ${this.charge}%.`
//   );
// };
