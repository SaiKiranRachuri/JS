//Getting an element at particular index
let arr = ['a', 'b', 'c', 'd'];
console.log(arr[3]);

//Getting last element using length and slice
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]); //Because slice returns an array of elements

//Getting last/any element using "at" method
console.log(arr.at(-1));
console.log(arr.at(2));

//at method for strings
console.log('Kiran'.at(-1));
console.log('Kiran'.at(3));
