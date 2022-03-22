//   Reference and Primitive Types Refresher

// By Using const, we can reassign a value like below
const number = 1;
const num2 = number;

console.log(num2);

//Now numbers, strings, booleans, these are so-called primitive types whenever you reassign or you store
// a variable in another variable.
// It will copy the value, objects and arrays are reference types.

const person = {
  name: "Marlon",
};

const secondPerson1 = person;

console.log(secondPerson);
// Expect to return the object of person we declared

// Now if we change the value of the person
person.name = "Frade";
console.log(secondPerson);
// Expect to receive Frade in the console

// But the best way to do that is by spreading, to get just the values, and never get the entire object
const secondPerson2 = {
  ...person,
};
