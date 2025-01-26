"use strict";

const Kiran = {
  firstName: "Sai Kiran",
  lastName: "Rachuri",
  age: 2037 - 1997,
  job: "Student",
  friends: ["Peter", "Bob"],
};

console.log(Kiran);

console.log(Kiran.firstName);

//Bracket Notation
console.log(Kiran["firstName"]);

const nameKey = "Name";
console.log(Kiran["first" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Kiran? Choose b/w firstName, lastName, age."
);

console.log(Kiran.interestedIn);
console.log(Kiran[interestedIn]);

//Mutating an object

Kiran.location = "Hyderabad";
Kiran["instaId"] = "rsk_kiran";

console.log(Kiran);

console.log(
  `${Kiran.firstName} has ${Kiran.friends.length} and his best friend is ${Kiran.friends[0]}`
);
