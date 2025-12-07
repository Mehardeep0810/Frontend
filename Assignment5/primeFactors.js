
const num = parseInt(process.argv[2]);

if (isNaN(num) || num <= 1) {
  console.log("Usage: node primeFactors.js <number>");
  process.exit(1);
}

function primeFactors(n) {
  const factors = [];


  while (n % 2 === 0) {
    factors.push(2);
    n = n / 2;
  }


  for (let i = 3; i * i <= n; i += 2) {
    while (n % i === 0) {
      factors.push(i);
      n = n / i;
    }
  }

  if (n > 2) {
    factors.push(n);
  }

  return factors;
}

console.log(`Prime factors of ${num}: ${primeFactors(num).join(", ")}`);
