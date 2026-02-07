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
// console.log(isLeapYear(2024));

// Progressive slab Pattern for bill, tax , total, bonuses

// code patttern 1
function tax(income) {
  let tax = 0;
  if (income <= 250000) {
    tax = 0;
  } else if (income <= 500000) {
    tax = (income - 250000) * 0.05;
  } else if (income <= 1000000) {
    tax = (500000 - 250000) * 0.05 + (1000000 - income) * 0.2;
  } else {
    tax = 250000 * 0.05 + 1000000 * 0.2 + (income - 1000000) * 0.3;
  }
  return tax;
}
// console.log(tax(7500), "tax");

// code pattern 2
function tax2(income) {
  let tax = 0;
  if (income > 1000000) {
    tax += (income - 1000000) * 0.3;
    income = 1000000;
  }
  if (income > 500000) {
    tax += (income - 500000) * 0.2;
    income = 500000;
  }
  if (income > 250000) {
    tax += (income - 250000) * 0.05;
    income = 250000;
  }
  if (income <= 250000) {
    tax += 0;
  }
  return tax;
}

// console.log(tax2(750000), "tax");

// pattern 03
function calculateTax(income) {
  const slabs = [
    { limit: 250000, rate: 0 },
    { limit: 500000, rate: 0.05 },
    { limit: 1000000, rate: 0.2 },
    { limit: Infinity, rate: 0.3 },
  ];
  let tax = 0;
  let prevLimit = 0;

  for (const slab of slabs) {
    if (income > slab.limit) {
      tax += (slab.limit - prevLimit) * slab.rate;
      prevLimit = slab.limit;
    } else {
      tax += (income - prevLimit) * slab.rate;
      break;
    }
  }

  return tax;
}

// console.log(calculateTax(750000));

function incomeTax(income) {
  const slabs = [
    { limit: 250000, rate: 0 },
    { limit: 500000, rate: 0.05 },
    { limit: 1000000, rate: 0.2 },
    { limit: Infinity, rate: 0.3 },
  ];
  let tax = 0;
  let prevLimit = 0;
  for (const { limit, rate } of slabs) {
    if (income > limit) {
      tax += (limit - prevLimit) * rate;
      prevLimit = limit;
    } else {
      tax += (income - prevLimit) * rate;
      break;
    }
  }
  return tax;
}

// console.log(incomeTax(750000));

function incomeTaxx(income) {
  const slabs = [
    { limit: 250000, rate: 0 },
    { limit: 500000, rate: 0.05 },
    { limit: 1000000, rate: 0.2 },
    { limit: Infinity, rate: 0.3 },
  ];
  let tax = 0;
  let prevLimit = 0;
  for (const { limit, rate } of slabs) {
    if (income > limit) {
      tax += (limit - prevLimit) * rate;
      prevLimit = limit;
    } else {
      tax += (income - prevLimit) * rate;
      break;
    }
  }
  return tax
}
console.log(incomeTaxx(750000));