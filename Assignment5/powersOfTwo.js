
const n = parseInt(process.argv[2]);

if (isNaN(n)) {
  console.log("Usage: node powersOfTwo.js <n>");
  process.exit(1);
}

for (let i = 0; i <= n; i++) {
  console.log(`2^${i} = ${Math.pow(2, i)}`);
}
