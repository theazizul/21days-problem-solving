function printNthNumbers(n) {
  for (let index = 1; index <= n; index++) {
    console.log(index);
  }
}

// printNthNumbers(5);

function printNthTo1(n) {
  for (let index = 1; index <= n; index++) {
    console.log(n + 1 - index);
  }
}
// printNthTo1(5)

function printEvenNumbers(n) {
  const formula = (n) => n % 2 === 0;
  for (let index = 1; index <= n; index++) {
    if (formula(index)) {
      console.log(index);
    }
  }
}
//   printEvenNumbers(10)

function sumOfNthNaturalNumbers(n) {
  let sum = 0;
  for (let index = 1; index <= n; index++) {
    sum += index;
  }
  //   console.log(sum);
}

function sumOfNthNaturalNumbers(n) {
  console.log((n * (n + 1)) / 2);
}
// sumOfNthNaturalNumbers(5)

function sumOfAllEvenNumsUpToN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  console.log(sum);
}
function sumOfAllEvenNumsUpToNX(n) {
  console.log((n * (n + 1)) / 2); // formula not works reason all even numbers before N (2+4+6+8) but this formula use for first all 10 even numbers sum
}
// sumOfAllEvenNumsUpToN(10); // 30

function factorialOfN(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  console.log(result);
}
// factorialOfN(5) // 120

//---------- Homeworks -----

function divisilbeBy3And5UptoN(n) {
  for (let i = 3; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log(i);
    }
  }
}
// divisilbeBy3And5UptoN(30); // 15 30

function sumAllEvenNumsUpToN(an) {
  // let sum = 0;
  // for (let i = 1; i <= n; i++) {
  //   if (i % 2 == 1) {
  //     sum += i;
  //   }
  // }
  // console.log(sum);

  // mathematically
  const nthTerm = (an - 2) / 2 + 1;
  console.log(nthTerm);
  const sum = nthTerm * (nthTerm + 1);
  console.log(sum);
}
sumAllEvenNumsUpToN(10); // 25

function sumAllOddNumsUpToNMathematically(an) {
  const nthTerm = (an - 1) / 2 + 1;
  const sum = nthTerm ** 2;
  console.log(sum);
}
// sumAllOddNumsUpToNMathematically(7);

function evenAndPerfectSquares(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0 && Number.isInteger(Math.sqrt(i))) {
      console.log(i);
    }
  }
}
// evenAndPerfectSquares(20); // 4 16
