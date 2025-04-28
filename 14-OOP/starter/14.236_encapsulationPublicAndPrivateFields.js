// 1) PUBLIC fields
// 2) PRIVATE fields
// 3) PUBLIC methods
// 4) PRIVATE methods
// 5) Static version of above all 4.

class Account {
  locale = navigator.language;
  bank = 'Bankist';
  // Public fields generic to all instances

  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // this.pin = pin;
    this.#pin = pin;

    // this.movements = []; // Not parameterised but still this property can exist;
    // this.locale = navigator.language;
  }

  // Public interface (API)

  getMovements() {
    return this.#movements;
  } // A PUBLIC method

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  #approveLoan(val) {
    return true;
  }
  // Shouldn't be accessible

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Your requested Loan has been sanctioned.`);
    }
  }

  static test() {
    console.log('TEST');
  }
}

const acc1 = new Account('Kiran', 'EUR', 1111);
console.log(acc1);

acc1.deposit(100);
acc1.withdraw(140);

acc1.movements = []; // Accidental update can erase all the data
// After making private this line 50 creates a new blank property.
console.log(acc1.movements);

// acc1.#movements = []; // Error cannot be accessed outside class
console.log(acc1.getMovements());

// acc1.#approveLoan();

Account.test(); // Static methods are accessible only on class but NOT on the instances.
acc1.test(); // Error
