const crypto = require("crypto");

function rollDice() {
    return crypto.randomInt(1, 7);
}

console.log("Dice Rolled:", rollDice());

console.log("Multiple Dice Rolls:");

for (let i = 1; i <= 5; i++) {
    console.log("Roll", i + ":", rollDice());
}