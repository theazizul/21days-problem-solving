/** Sum of All Even Numbers up to N

Input: 10
Output: 30 (2+4+6+8+10)
✨ Combines loops + condition + accumulation. */

let result = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    result += i;
  }
}
console.log(result);
