function calcElectriticyBill(units) {
  if (units <= 100) {
    return units * 5;
  } else if (units <= 200) {
    return 100 * 5 + (units - 100 * 7);
  } else if (units <= 300) {
    return 100 * 5 + 100 * 7 + (units - 200) * 10;
  } else return 100 * 5 + 100 * 7 + 100 * 10 + (300 - units) * 12;
}
console.log(calcElectriticyBill(230));
