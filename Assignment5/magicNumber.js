
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Think of a number between 1 and 100, I will guess it!");

let low = 1, high = 100;

function ask() {
  if (low === high) {
    console.log(`Your magic number is ${low}!`);
    rl.close();
    return;
  }

  let mid = Math.floor((low + high) / 2);
  rl.question(`Is your number less than or equal to ${mid}? (yes/no): `, (answer) => {
    if (answer.toLowerCase().startsWith("y")) {
      high = mid;
    } else {
      low = mid + 1;
    }
    ask();
  });
}

ask();
