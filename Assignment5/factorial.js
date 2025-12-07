
const num = parseInt(process.argv[2]);

if (isNaN(num) || num < 0) {
  console.log("Usage: node factorial.js <number>");
  process.exit(1);
}

let fact = 1;
for (let i = 1; i <= num; i++) {
  fact *= i;
}

console.log(`${num}! = ${fact}`);
