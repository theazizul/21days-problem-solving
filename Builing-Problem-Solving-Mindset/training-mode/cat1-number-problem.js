function getSquare(num) {
  return num * num;
}

function max(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num3) {
    return num2;
  } else return num3;
}

function isPrimeNum(num) {
  const range = num / 2;
  for (let i = 2; i <= range; i++) {
    if (num % i == 0) return false;
  }
  return true;
}
 
// function reverseNum(num ) {
//   return Number(num.toString().split("").reverse().join("")
//  )}
// console.log( reverseNum(21));

function reverseNum(num) {
  let n = Math.abs(num);
  let rev = 0;

  while (n > 0) {
    rev = rev * 10 + (n % 10);
    n = Math.floor(n / 10);
  }

  return num < 0 ? -rev : rev;
}
 
console.log(reverseNum(1012));