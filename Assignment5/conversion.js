
const choice = parseInt(process.argv[2]);
const value = parseFloat(process.argv[3]);

switch (choice) {
  case 1: 
    if (value >= 0 && value <= 100) {
      const degF = (value * 9/5) + 32;
      console.log(`${value} °C = ${degF} °F`);
    } else {
      console.log("Enter Celsius between 0 and 100");
    }
    break;

  case 2: 
    if (value >= 32 && value <= 212) {
      const degC = (value - 32) * 5/9;
      console.log(`${value} °F = ${degC} °C`);
    } else {
      console.log("Enter Fahrenheit between 32 and 212");
    }
    break;

  default:
    console.log("Invalid choice. Use 1 for °C→°F or 2 for °F→°C");
}
