const row = 10;
for (let i = 1; i <= row; i++) {
  let str = "";

  // creating string for each loop
  for (let j = 1; j <= i; j++) {
    str = str + "*";
  }
      console.log(str, i);
}
// pattern hocche each loop er modde ekta string banate hobe ekon kivabe banaba etay tumar logic

for (let i = 1; i <= row; i++) {
  let str = "";

  // creating string for each loop
  for (let j = row; j >= i; j--) {
    str = str + "*";
  }
  // console.log(str, row + 1 - i);
}

 