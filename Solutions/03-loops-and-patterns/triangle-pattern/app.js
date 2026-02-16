//  print right-angled star triangle

// Input: Rows = 5

// Output:
// *
// **
// ***
// ****
// *****
function rightAngledTriangle(rows) {
  for (let i = 1; i <= rows; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += "*";
    }
    console.log(line + i);
  }
}
// rightAngledTriangle(5);

// Print Inverted Right-Angled Triangle
// Input: Rows = 5

// Output:
// *****
// ****
// ***
// **
// *

function invertedRightAnglesTriangle(rows) {
  for (let i = 1; i <= rows; i++) {
    let line = "";
    for (let j = 1; j <= rows - i + 1; j++) {
      line += "*";
    }
    console.log(`r${i}`, line);
  }
}
// invertedRightAnglesTriangle(5);

//Print Pyramid Pattern
// Input: Rows = 5
// Output:
//     *
//    ***
//   *****
//  *******
// *********

function printPyramidPattern(rows) {
  for (let i = 1; i <= rows * 2 - 1; i += 2) {
    const currentRow = (i + 1) / 2;

    let line = "";
    // console.log(currentRow);
    for (let j = 1; j <= rows + currentRow - 1; j++) {
      if (j <= rows - currentRow) line += " ";
      else line += "*";
    }
    console.log(line);
  }
}
// printPyramidPattern(5);

function printPyramidPattern(rows) {
  for (let i = 1; i <= rows * 2 - 1; i += 2) {
    const currentRow = (i + 1) / 2;
    let str = "";
    for (let j = 1; j <= rows + currentRow - 1; j++) {
      if (j <= rows - currentRow) str += " ";
      else str += "*";
    }
    console.log(str);
  }
}
// printPyramidPattern(5);

// clean code // code aesthetic
function pyramid(rows) {
  let pyramid = "";
  for (let i = 1; i <= rows; i++) {
    // spaces
    for (let j = 1; j <= rows - i; j++) {
      pyramid += " ";
    }
    // stars
    for (let k = 1; k <= i * 2 - 1; k++) {
      pyramid += "*";
    }
    pyramid += "\n";
  }
  console.log(pyramid);
}
// pyramid(5);

function pyramid2(rows) {
  let str = "";
  for (let i = 1; i <= rows; i++) {
    str += " ".repeat(rows - i);

    str += "*".repeat(i * 2 - 1);
    str += "\n";
  }
  console.log(str);
}
// pyramid2(5);

function invertedPyramid(rows) {
  for (let i = rows; i >= 1; i--) {
    let line = "";
    line += " ".repeat(rows - i);
    line += "*".repeat(i * 2 - 1);
    console.log(line);
  }
}
// invertedPyramid(15);

                                                                                                                      
