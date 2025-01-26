"use strict";

const friends = ["Michael", "John", "Schedmetan"];

const years = new Array(1997, 1991, 1995);
console.log(friends);
console.log(years);

console.log(friends.length);

console.log(friends[friends.length - 1]);

//Mutation - Partial mutation

friends[friends.length - 1] = "Jay";
console.log(friends);

const kiran = ["Sai Kiran", "Rachuri", 28, friends];
console.log(kiran);

console.log(kiran.length);
