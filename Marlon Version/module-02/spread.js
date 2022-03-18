// Declaring an array to use the spread and turns into a new array getting this array below
const numbers = [1, 2, 3];

// The new array using the spread sintax
const newNumbers = [...numbers, 4];
// To view if this will work, log it
console.log("New Numbers Array:", newNumbers);

// Now Using Objects
const person = {
  name: "Marlon",
};

// Adding information using the spread operator
const newPerson = { ...person, age: 24 };

console.log("🚀 ~ file: spread.js ~ line 17 ~ newPerson", newPerson);
