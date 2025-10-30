#!/usr/bin/env node
// Print Numbers from 1 to N
// Input: 5
// Output: 1 2 3 4 5
const range = Number(process.argv[2]);

for (let i = 1; i <= range; i++) {
  console.log(range);
}
let count = 1;
while (count <= range) {
  console.log(count);
  count++;
}
