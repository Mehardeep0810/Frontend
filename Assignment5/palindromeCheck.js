

function isPalindrome(num) {
  const str = num.toString();
  return str === str.split("").reverse().join("");
}

const num1 = 121;
const num2 = 12321;

console.log(`${num1} is ${isPalindrome(num1) ? "" : "not "}a palindrome`);
console.log(`${num2} is ${isPalindrome(num2) ? "" : "not "}a palindrome`);
