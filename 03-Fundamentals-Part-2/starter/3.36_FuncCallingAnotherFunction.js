"use strict";

function cutPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);

  return `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces!`;
}

console.log(fruitProcessor(4, 4));
