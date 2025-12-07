function digitToWord(num) {
  const words = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"];
  if (num >= 0 && num <= 9) {
    console.log(words[num]);
  } else {
    console.log("Please enter a single digit number (0–9).");
  }
}

digitToWord(5); 
