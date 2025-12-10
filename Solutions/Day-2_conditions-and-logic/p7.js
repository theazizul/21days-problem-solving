function incomeTax(income) {
  if (income <= 250000) return 0;
  else if (income <= 500000) {
    return (500000 - 250000) * 0.05;
  } else if (income <= 1000000) {
    return (500000 - 250000) * 0.05 + (income - 500000) * 0.2;
  } else {
    return (
      (500000 - 250000) * 0.05 +
      (1000000 - 500000) * 0.2 +
      (income - 1000000) * 0.3
    );
  }
}

console.log(incomeTax(1009000));
