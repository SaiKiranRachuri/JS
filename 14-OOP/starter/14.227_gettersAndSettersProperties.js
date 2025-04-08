// Getters and Setters are the properties of any object and called as accessor properties unlike the other data properties.
// These are mainly used for data validations

const account = {
    owner: "Kiran",
    movements: [200, 250, 120, 600],

    get latest(){
        return this.movements.slice(-1).pop();
        // pop removes the element from array, to keep it intact we copy using slice and pop
    },

    set latest(movement){
        this.movements.push(movement);
    }
}

console.log(account.latest); // 600
account.latest = 50;
console.log(account.movements); // [200, 250, 120, 600, 50]

// Getters and setters on ES6classes

class Person{
    constructor(fullName, birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    calcAge(){
        return 2037 - this.birthYear;
    }

    greet(){
        console.log(`Hey ${this.fullName}`); 
    }

    get age(){
        return 2037 - this.birthYear;
    }


    // Setting a property that already exists
    set fullName(name){
        if(name.includes(' ')){
            this._fullName = name; // Results in maximum stack error as we are trying to set a property that exists. So we replace fullName with _fullName(convention) altogether as a new variable to prevent the error.
        }
        else{
            alert("Not a full name.");
        }


    }

    get fullName(){
        this._fullName;
    }
    // explicitly replacing fullName with _fullName;
  
}

const kiran = new Person("Sai Kiran", 1997);
console.log(`Kiran's age: `, kiran.calcAge());

console.log(`Kiran's age using accessor property: `,kiran.age);

kiran.greet(); // undefined. To prevent we use get property.


const john = new Person("John", 1997); // With the validation we defined fullName is set only when it includes space.








