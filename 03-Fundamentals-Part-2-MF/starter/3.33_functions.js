function logger() {
  console.log("My Name is Kiran");
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);

  const juice = `Juice with ${apples} apples and ${oranges} oranges!`;
  return juice;
}

fruitProcessor(5, 3); //arguments/actual arguments
const result = fruitProcessor(5, 3);
console.log(result);

console.log(fruitProcessor(5, 8));
