function incomeTax(income) {
  const slabs = [
    { limit: 250000, rate: 0 },
    { limit: 500000, rate: 0.05 },
    { limit: 1000000, rate: 0.2 },
    { limit: Infinity, rate: 0.3 },
  ];
  let tax = 0;
  let prevLimit = 0;
  for (const { limit, rate } of slabs) {
    if (income > limit) {
      tax += (limit - prevLimit) * rate;
      prevLimit = limit;
    } else {
      tax += (income - prevLimit) * rate;
      break;
    }
  }
  return tax;
}
console.log(incomeTax(750000));

// shiping cost calculations

// Input:  Weight = 8 kg
// Output: Shipping Cost = ₹460

// Statements
// Base Price = ₹100
// Extra Rate = ₹60
// Premium Rate = ₹40

function shippingCost(weight) {
  if (typeof weight !== "number" && weight < 1) {
    return "Invalid weight";
  }
  const BASE_PRICE = 100;
  const EXTRA_RATE = 60;
  const PREMIUM_RATE = 40;
  if (weight <= 1) {
    return BASE_PRICE;
  }
  if (weight <= 5) {
    return BASE_PRICE + (weight - 1) * EXTRA_RATE;
  }
  return BASE_PRICE + 4 * EXTRA_RATE + (weight - 5) * PREMIUM_RATE;
}
console.log(shippingCost(8));

function shippingCost2(weight) {
  const slabs = [
    { limit: 1, rate: 100 },
    { limit: 5, rate: 60 },
    { limit: Infinity, rate: 40 },
  ];
  let cost = 0;
  let prevLimit = 0;

  for (const { limit, rate } of slabs) {
    if (weight >= limit) {
      cost += (limit - prevLimit) * rate;
      prevLimit = limit;
    } else {
      cost += (weight - prevLimit) * rate;
      break;
    }
  }
  return cost;
}
console.log(shippingCost2(8), "expected: 460");
