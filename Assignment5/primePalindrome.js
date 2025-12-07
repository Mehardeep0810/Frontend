

function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

function getPalindrome(num) {
  return parseInt(num.toString().split("").reverse().join(""));
}

const num = parseInt(process.argv[2]);

if (isNaN(num)) {
  console.log("Usage: node primePalindrome.js <number>");
  process.exit(1);
}

if (isPrime(num)) {
  console.log(`${num} is Prime`);
  const pal = getPalindrome(num);
  console.log(`Palindrome of ${num} is ${pal}`);
  if (isPrime(pal)) {
    console.log(`${pal} is also Prime`);
  } else {
    console.log(`${pal} is not Prime`);
  }
} else {
  console.log(`${num} is not Prime`);
}
