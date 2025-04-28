class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;

    this.movements = []; // Not parameterised but still this property can exist;
    this.locale = navigator.language;
  }

  // Public interface
  deposit(val) {
    this.movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Your requested Loan has been sanctioned.`);
    }
  }
}

const acc1 = new Account('Kiran', 'EUR', 1111);
console.log(acc1);
// acc1.movements.push(100);
// acc1.movements.push(-140);
acc1.deposit(100);
acc1.withdraw(140); // Notice abstraction here; user should never be cared about the negative sign.
console.log(acc1);
console.log(acc1.pin); // Should be inaccessible

acc1.requestLoan(1000);
console.log(acc1);

acc1.approveLoan(1000); // Should be inaccessible
