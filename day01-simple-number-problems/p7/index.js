#!/usr/bin/env node
     const input=Number(process.argv[2])
/**
 * Print Squares of Numbers from 1 to N

Input: 5
Output: 1 4 9 16 25
✨ Introduces arithmetic pattern generation.
 */

for (let i = 1; i <= input; i++) {
  console.log(i ** 2);
  console.log(Math.pow(i,2));
}