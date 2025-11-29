#!/usr/bin/env node
     const input=Number(process.argv[2])
// Sum of All Even Numbers up to N

// Input: 10
// Output: 30 (2+4+6+8+10)
// ✨ Combines loops + condition + accumulation.

let sum = 0;
for (let i = 1; i <= input; i++) {
  if(i % 2 === 0){
     sum+=i
  }
}
console.log(sum);