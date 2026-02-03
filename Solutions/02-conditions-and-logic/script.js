function findTheMax(n1, n2, n3) {
  if (n1 > n2 && n1 > n3) {
    return n1;
  } else if (n2 > n3) return n2;
  else return n3;
}
// console.log(findTheMax(20,50,20));

function checkNumberValue(n) {
  if (typeof n !== "number") return "Invalid";
  if (n > 0) return "Positive";
  else if (n < 0) return "Negative";
  else if (n == 0) return "Zero";
}
// console.log(checkNumberValue(10));

function calcElecticityBill(unit) {
  if (unit <= 100) {
    const PER_UNIT = 5;
    return unit * PER_UNIT;
  }
  if (unit <= 200) {
    return 100 * 5 + (unit - 100) * 7;
  }
  if (unit <= 300) {
    return 100 * 5 + 100 * 7 + (unit - 200) * 10;
  }
  return 100 * 5 + 100 * 7 + 100 * 10 + (unit - 300) * 12;
}
// console.log(calcElecticityBill(230)); // 1500

function isVowel(char) {
  char = char.toLowerCase();

  //   if (
  //     char === "a" ||
  //     char === "e" ||
  //     char === "i" ||
  //     char === "o" ||
  //     char === "u"
  //   )
  //     return "Vowel";
  //   else return "Constant";

  const VOWEL_LIST = "aeiou";
  if (VOWEL_LIST.includes(char)) {
    return "Vowel";
  } else return "Constant";
}

// console.log(isVowel("e"));

function isLeapYear(year) {
  if (year % 4 === 0 || year % 400 === 0 || year % 100 !== 0) return true;
  else false;
}
console.log(isLeapYear(2024));
