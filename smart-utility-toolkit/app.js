const isEven = require("./modules/isEven");
const log = require("./modules/logger");

log("Checking numbers...");

console.log("10 is even:", isEven(10));
console.log("7 is even:", isEven(7));
console.log("20 is even:", isEven(20));
console.log("15 is even:", isEven(15));

log("Number checking completed.");