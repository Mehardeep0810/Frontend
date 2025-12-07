function numberToWeekday(num) {
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  if (num >= 0 && num <= 6) {
    console.log(days[num]);
  } else {
    console.log("Enter a number between 0 and 6.");
  }
}

numberToWeekday(0); 
numberToWeekday(3); 
