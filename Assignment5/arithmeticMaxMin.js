function arithmeticOps(a, b, c) {
  const results = [];

  results.push(a + b * c);   // 1. a + b * c
  results.push(a % b + c);   // 2. a % b + c
  results.push(c + a / b);   // 3. c + a / b
  results.push(a * b + c);   // 4. a * b + c

  console.log("Results:", results);

  const max = Math.max(...results);
  const min = Math.min(...results);

  console.log("Maximum:", max);
  console.log("Minimum:", min);
}

arithmeticOps(5, 3, 2);
