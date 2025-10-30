#!/usr/bin/env node
/**
 Print All Even Numbers from 1 to N

Input: 10
Output: 2 4 6 8 10
-> Introduces conditional checks inside loops.
 */
const range = Number(process.argv[2]);
for (let index = 1; index <= range; index++) {
  if (index % 2 === 0) console.log(index);
}
