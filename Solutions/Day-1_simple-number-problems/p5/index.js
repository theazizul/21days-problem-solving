#!/usr/bin/env node
const input = Number(process.argv[2]);
/**
 Product (Factorial) of N

Input: 5
Output: 120
✨ Reinforces loop control with multiplication logic.
 */
//   n = n(n-1)
if(input === 0 || input === 1){
     console.log(1);
     return 1
}
let f = 1;
for (let i = 1; i <= input; i++) {
  f *=i
}
console.log(f);
