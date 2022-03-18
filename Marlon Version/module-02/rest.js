// The rest operator we will use with less frequency, and can be used inside functions or arrow functions
const filter = (...args) => {
  return args.filter((el) => el === 1);
};

// With the rest operator we can pass a rest operator of the args, which will get as array and inside then we return
// the args by filtering it where the element inside this array should be equal to one.
// Passing below the args inside de log, we expect to see [1] as result of it
console.log("🚀 ~ file: rest.js ~ line 5 ~ filter ~ filter", filter(1, 2, 3));
