
let stake = 100;
const goal = 200;
let bets = 0;
let wins = 0;

while (stake > 0 && stake < goal) {
  bets++;
  let betResult = Math.random() < 0.5 ? "Lose" : "Win";
  if (betResult === "Win") {
    stake++;
    wins++;
  } else {
    stake--;
  }
}

console.log(`Final Stake: Rs ${stake}`);
console.log(`Total Bets: ${bets}`);
console.log(`Total Wins: ${wins}`);
