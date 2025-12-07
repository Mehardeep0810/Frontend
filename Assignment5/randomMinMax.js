function randomMinMax() {
  let values = [];
  for (let i = 0; i < 5; i++) {
    let num = Math.floor(Math.random() * 900) + 100; // 100–999
    values.push(num);
  }
  console.log("Values:", values);

  let min = Math.min(...values);
  let max = Math.max(...values);

  console.log("Minimum:", min);
  console.log("Maximum:", max);
}

randomMinMax();
