function leapYearCheck(year) {
  if (year < 1000 || year > 9999) {
    console.log("Year must be a 4-digit number.");
    return;
  }

  let isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

  if (isLeap) {
    console.log(year + " is a Leap Year");
  } else {
    console.log(year + " is not a Leap Year");
  }
}

leapYearCheck(2024); 
leapYearCheck(2025); 
