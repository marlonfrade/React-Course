// Declaring an array
const numbers = [1, 2, 3];

// Now we want to duplicate each number of this array in another array
// The do that we'll use the map method for array
const doubleNumArray = numbers.map((num) => {
  return num * 2;
});

// With map method, we'll pass a callback function that applies to each element
// The logic we want, then we return the value or the logic that we expect to receive

// To check it out
console.log("first array:", numbers);
console.log("result:", doubleNumArray);
