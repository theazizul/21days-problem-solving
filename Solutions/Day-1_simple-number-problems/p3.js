/** Sum of First N Natural Numbers

Input: 5
Output: 15
✨ Encourages cumulative addition and variable usage.
 */

function sumOfNaturalNum(range) {
  let sum = 0;
  for (let i = 1; i <= range; i++) {
    sum += i;
  }
  console.log(sum);
}
sumOfNaturalNum(5)