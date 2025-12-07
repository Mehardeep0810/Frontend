
const num = parseInt(process.argv[2]);

if (isNaN(num)) {
  console.log("Usage: node isPrime.js <number>");
  process.exit(1);
}

function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(`${num} is ${isPrime(num) ? "Prime" : "Not Prime"}`);
