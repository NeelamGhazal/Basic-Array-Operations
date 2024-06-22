// 1. Basic Array Operations
// Create an array called fruits that contains the names of four different fruits. Perform the following operations:
// * Add a new fruit to the end of the array.
// * Remove the first fruit from the array.
// * Add a new fruit to the beginning of the array.
// * Find the index of a fruit and remove that fruit using the index.
// // Example usage and operations on the 'fruits' array
import chalk from "chalk";
let fruits = ['Apple', 'Mango', 'Strawberry', 'Grapes'];
console.log(chalk.cyanBright.bold("\n'Orignal Array'"));
console.log(fruits);
// add a new fruit to the end of the array
fruits.push('Orange');
console.log(chalk.cyanBright.bold("\n'Added at the end'"));
console.log(fruits);
// Remove the first fruit from the array
fruits.shift();
console.log(chalk.cyanBright.bold("\n'Removed at the beginning'"));
console.log(fruits);
// Add a new fruit to the beginning of the array.
fruits.unshift('Cherry');
console.log(chalk.cyanBright.bold("\n'Added at the beginning"));
console.log(fruits);
// Find the index of a fruit and remove that fruit using the index.
// Find the index of a fruit
console.log(chalk.cyanBright.bold("\n'Finding the index and removing the fruit'"));
let fruitIndex = fruits.indexOf('Strawberry');
console.log(chalk.yellowBright.bold('Index of "Strawberry":'), chalk.greenBright.bold(fruitIndex));
fruits.splice(fruits.indexOf("Strawberry"), 1);
console.log(chalk.yellowBright.bold('Fruit removed:'), fruits);
