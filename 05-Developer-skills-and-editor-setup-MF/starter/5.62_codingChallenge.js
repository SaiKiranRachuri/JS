'use strict';

// [22, 23, 24]
//... 22°C in 1 day ...23°C in 2 days ... 24°C in 3 days ...

const printForecast = function (arr) {
  let i = 0;
  let str = '';
  for (i = 0; i < arr.length; i++) {
    str += ` ${arr[i]}°C in ${i + 1} days...`;
  }
  return '...' + str;
};

console.log(printForecast([17, 21, -23]));
