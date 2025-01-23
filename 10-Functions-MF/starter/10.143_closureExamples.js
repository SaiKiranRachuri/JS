// Example 1

let f;
const g = function () {
  const a = 2;
  f = function () {
    console.log(a * 3);
  };
};

g();
f();

console.dir(f);

const h = function () {
  const b = 3;
  f = function () {
    console.log(b * 3);
  };
};

// Reassigning f function
h();
f();
console.dir(f);
