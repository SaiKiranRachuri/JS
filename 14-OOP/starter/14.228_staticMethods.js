// Examples of static methods
Number.parseFloat(12); // Method on the constructor function.

// However, the below doesn't work.
// 12.parseFloat();


// Creating a method on constructor function
const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  
}

const kiran = new Person("Kiran", 1997);
Person.hey = function(){
    console.log("Hey there👌");
}

Person.hey(); // works
kiran.hey(); // Doesn't work.