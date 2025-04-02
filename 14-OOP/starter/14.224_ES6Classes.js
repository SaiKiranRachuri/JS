// Classes are a special type of functions so we can create classes using class declaration and expression like we did in functions


// class expression
// class PersonCl = class {

// }



// Class declaration
class PersonCl  {
    constructor(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;

    }

    // Methods are added to prototype property(PersonCl)
    calcAge(){
        console.log(2037 - this.birthYear);
    }

    greet(){
        console.log(`Hey ${this.firstName}!`);
    }
}

const jessica = new PersonCl("Jessica", 1997);
console.log(jessica.__proto__ === PersonCl.prototype); // true

// PersonCl.prototype.greet = function(){
//     console.log(`Hey ${this.firstName}!`);
// }

jessica.greet();

// IMPORTANT POINTS
// 1) Classes are NOT hoisted: cannot be accessed before declaration
// 2) First class citizens: Can be passed and returned to/from functions
// 3) Classes are executed in strict mode: despite not declared strict
