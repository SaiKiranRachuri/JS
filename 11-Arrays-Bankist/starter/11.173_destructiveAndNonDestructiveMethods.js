// destructive: mutates original array. ex: reverse()
let arr = [5, 2, 5, 6, 7, 4];
arr.reverse();
console.log(arr); // Mutates original arr array

// solution
arr = [5, 2, 5, 6, 7, 4];
arr.slice().reverse();
console.log(arr);

// Non - destructive method: toReversed(), toSorted(), toSpliced()
arr = [5, 2, 5, 6, 7, 4];
arr.toReversed();
console.log(arr);

arr[1] = 2000;
console.log(arr);
const newUpdatedArray = arr.with(1, 200);
console.log(newUpdatedArray);
