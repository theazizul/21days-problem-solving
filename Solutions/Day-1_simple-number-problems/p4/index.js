#!node
const input = Number(process.argv[2]);

// Sum of First N Natural Numbers

// Input: 5
// Output: 15
// ✨ Encourages cumulative addition and variable usage.

// let sum = 0;
// for (let i = 1; i <= input; i++) {
//   sum += i;
// }

// console.log(sum);

console.log((input * (input + 1)) / 2); // applied series formula n(n+1)/2
