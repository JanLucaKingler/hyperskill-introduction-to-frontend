console.log("Earned amount:");
console.log("Bubblegum: $202");
console.log("Toffee: $118");
console.log("Ice cream: $2250");
console.log("Milk chocolate: $1680");
console.log("Doughnut: $1075");
console.log("Pancake: $80");

console.log("Income: $5405");
console.log("Staff expenses:");
const input = require('sync-input');

let expenses = input('Expenses');
let otherExpenses = input('Other expenses');

let netIncome = (5405 - otherExpenses) - expenses;
console.log("Net Income: " +netIncome);
