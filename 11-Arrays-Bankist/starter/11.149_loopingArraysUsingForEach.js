const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//Loop using for of
for (const [i, transaction] of movements.entries()) {
  transaction > 0
    ? console.log(
        `Transaction: ${
          i + 1
        } Your account has been credited with ${transaction}`
      )
    : console.log(
        `Transaction: ${i + 1} Your account has been debited with ${Math.abs(
          transaction
        )}`
      );
}

console.log('=====FOREACH=====');

//Loop using forEach method
movements.forEach(function (transaction, index, array) {
  transaction > 0
    ? console.log(
        `Transaction: ${
          index + 1
        } Your account has been credited with ${transaction}`
      )
    : console.log(
        `Transaction: ${
          index + 1
        } Your account has been debited with ${Math.abs(transaction)}`
      );
  console.log(array);
});
// 0 : function(200)
// 1 : function(-450)
// ......

// The only difference between for of and forEach is that continue and break statements cannot be applied when using forEach.
