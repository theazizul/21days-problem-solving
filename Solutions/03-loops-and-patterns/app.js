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
printPyramidPattern(5);

function printInvertedPyramidPattern(rows) {
  for (let i = 2 * rows - 1; i >= 1; i -= 2) {
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
printInvertedPyramidPattern(5);
