
/**
 * Print Hollow Square Pattern
Input: Rows = 5
Output:
*****
*   *
*   *
*   *
*****
 */

function hollowSquare(rows) {
  for (let i = 1; i <= rows; i++) {
    let line = "";
    for (let j = 1; j <= rows; j++) {
      if (i == 1 || i == rows) {
        line += "*";
      } else if (j == 1 || j == rows) line += "*";
      else line += " ";
    }

    console.log(line);
  }
}
hollowSquare(15);