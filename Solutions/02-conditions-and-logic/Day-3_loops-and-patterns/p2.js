const rows = 5;
//
for (let i = 1; i <= 2 * rows - 1; i += 2) {
  let pyramid = "";
  const currentRaw = (i + 1) / 2;
  for (let j = 1; j <= rows + currentRaw-1; j++) {
    if (j <= rows - currentRaw) {
      pyramid += " ";
    } else pyramid += "*";
  }
  console.log(pyramid);
}
