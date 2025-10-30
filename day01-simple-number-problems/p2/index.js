#!/usr/bin/env node
// Print Numbers from N to 1 without changing the loop condition of above question

// Input: 5
// Output: 5 4 3 2 1
// ✨ Thinking creatively and manipulating logic within the loop

const range = Number(process.argv[2]);

for (let i = 1; i <= range; i++) {
  console.log(range - (i - 1));
}

for (let i = 1; i <= range; i++) {
  console.log(range - i + 1);
}
let count = 1;
while (count <= range) {
  console.log(range - (count - 1));
  count++;
}
