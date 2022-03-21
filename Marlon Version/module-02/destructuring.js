// Example of Array Destructuring
const numbers = [1, 2, 3];
// Destructuring the first and second element of the array above
[num1, num2] = numbers;
console.log(num1, num2);
// return 1,2

// If you want to destructuring the first and the third element, you can do
[num1, , num3] = numbers;
console.log(num1, num3);
// Return 1,3
