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
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
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
    return this;
  }

  static test() {
    console.log('TEST');
  }
}

const acc1 = new Account('Kiran', 'EUR', 1111);
console.log(acc1);

acc1.deposit(100);
acc1.withdraw(140);

acc1
  .deposit(3000)
  .deposit(200)
  .withdraw(800)
  .withdraw(10)
  .requestLoan(100000)
  .getMovements();
// acc1.deposit(3000) is computed and becomes instance and deposit(200) becomes instance and withdraw(800) and so on...
// acc1.deposit(3000) current object and so on
console.log(acc1);

const movs = acc1
  .deposit(3000)
  .deposit(200)
  .withdraw(800)
  .withdraw(10)
  .getMovements(); // getMovements() is a classfield and the methods after it cannot be chained so it is always at last.
console.log(movs);
