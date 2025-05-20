const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Your lottery draw is happening...');
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('You won🥇');
    } else {
      reject(new Error('You lost the money 💩'));
    }
  }, 2000);
});

// Promise is a construtor function and a parameter function inside is a executer function with states resolve and reject that can be the output of promise.

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));
