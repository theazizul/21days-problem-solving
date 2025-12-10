function findMax(...nums) {
  let max = nums[0];
  nums.forEach((ele) => {
    if (ele > max) {
      max = ele;
    }
  });
  return max;
}

// console.log(findMax(10, 20 ,5));

function findMax2(n1, n2, n3) {
  let max;
  if (n1 > n2 && n1 > n3) {
    max = n1;
    console.log(n1);
  } else if (n2 > n3) {
    max = n2;
    console.log(n2);
  } else {
    max = n3;
    console.log(n3);
  }
  return max;
}
console.log(findMax2(10, 20, 5));
