// Dates are other forms of objects so methods does exist on dates

// 1) using new constructor
console.log(new Date()); // Current date with time stamp

// 2) Parsing string
console.log(new Date('Feb 24 2025 19:30:11'));

// parsing date
console.log(new Date('January 1, 1997'));

// parsing movementsDates from Bankist app
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-07-26T17:01:17.194Z',
    '2020-07-28T23:36:17.929Z',
    '2020-08-01T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

console.log(new Date(account1.movementsDates[0]));

// 3) Parsing Year, month, Date, Hours, Minutes, Seconds
console.log(new Date(2037, 1, 1, 19, 38, 22)); // Sun Feb 01 2037 19:38:22 GMT+0530 (India Standard Time): Returned Feb month because months in Date object is zero based like arrays

// 4) Auto correcting of dates
console.log(new Date(2037, 10, 31)); // Tue Dec 01 2037 00:00:00 GMT+0530 (India Standard Time): As November month doesn't have 31st it goes to next day

// 5) Start date: (0)
console.log(new Date(0)); // Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)

// 6) 3rd day after start date (milliseconds as paramter)
console.log(new Date(3 * 24 * 60 * 60 * 1000));

// 7) getFullYear and getMonth, getDate, getDay, getHours, mins and seconds
const future = new Date(2037, 10, 30, 19, 46);
console.log(future.getFullYear()); // 2037
console.log(future.getMonth()); // 10
console.log(future.getDate()); // 30
console.log(future.getSeconds()); // 0 as seconds is defined

// 8) toISOString, getTime
console.log(future.toISOString()); // 2037-11-30T14:16:00.000Z: Format of movementDates

// 9) Date.now()
console.log(Date.now()); // current date in milliseconds
console.log(new Date(1740406753483));

// 10) setFullYear, setMonth etc..
console.log(future.setFullYear(2038)); // outputs in milliseconds
