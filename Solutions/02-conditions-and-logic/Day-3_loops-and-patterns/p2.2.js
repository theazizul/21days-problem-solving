// 1
const rows = 5;

for (let i = 1; i <= rows; i++) {
  let spaces = " ".repeat(rows - i);
  let stars = "*".repeat(2 * i - 1);
  console.log(spaces + stars);
}

for (let i = 1; i <= rows; i++) {
  let line = "";

  // spaces add
  for (let s = 1; s <= rows - i; s++) {
    line += " ";
  }

  // stars add
  for (let star = 1; star <= 2 * i - 1; star++) {
    line += "*";
  }

  console.log(line);
}

// const rows = 5;

for (let i = 1; i <= rows; i++) {
  let line = "";

  for (let j = 1; j <= rows + (i - 1); j++) {
    if (j <= rows - i) {
      line += " ";
    } else {
      line += "*";
    }
  }

  console.log(line);
}

// const rows = 5;
let i = 1;

let spaces = rows - 1;
let stars = 1;

while (i <= rows) {
  let line = "";

  // manually build space part
  let s = spaces;
  while (s > 0) {
    line += " ";
    s--;
  }

  // manually build star part
  let st = stars;
  while (st > 0) {
    line += "*";
    st--;
  }

  console.log(line);

  spaces--; // space কমে
  stars += 2; // star বাড়ে (odd sequence)
  i++;
}

// const rows = 5;
  i = 0;
  line = "";

for (let k = 0; k < rows * rows; k++) {
  if (k % rows === 0 && k !== 0) {
    console.log(line);
    line = "";
    i++;
  }

  if (i < rows) {
    if (k % rows < rows - i - 1) {
      line += " ";
    } else {
      line += "*";
    }
  }
}

console.log(line);

// const rows = 5;

function repeatChar(char, count) {
  return count && char + repeatChar(char, count - 1);
}

function pyramid(n) {
  return (
    n &&
    pyramid(n - 1) +
      repeatChar(" ", rows - n) +
      repeatChar("*", 2 * n - 1) +
      "\n"
  );
}

console.log(pyramid(rows));

  pyramid = (n) =>
  n && pyramid(n - 1) + " ".repeat(5 - n) + "*".repeat(2 * n - 1) + "\n";

console.log(pyramid(5));

for (let i = 0; i < rows; i++) {
  let line = "";
  for (let j = 0; j < rows * 2; j++) {
    // bitwise trick: compare distance from center
    if (Math.abs(j - (rows - 1)) <= i) line += "*";
    else line += " ";
  }
  console.log(line.trimEnd());
}
