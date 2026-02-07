 **Calculate Income Tax Based on Slabs**

* **Input:** `Income = ₹7,50,000`
* **Output:** `Tax = ₹62,500`
* ✨ *Applies progressive slab logic similar to electricity bill but with financial context.*
* Example Logic (example slabs):

  * 1 Up to ₹2,50,000 → No tax
  * ₹2,50,001 – ₹5,00,000 → 5%
  * ₹5,00,001 – ₹10,00,000 → 20%
  * Above ₹10,00,000 → 30%
* 🔍 *Requires cumulative calculation using nested `if–else` or multiple slab loops.*
---
Below are **practical JS solution patterns** for this problem. Each represents a **distinct thinking model**, not just syntax variation.

---

## 1️⃣ Hard-coded nested `if–else` (beginner, exam-style)

**Idea:** Directly encode slab logic.

```js
function calculateTax(income) {
  let tax = 0;

  if (income <= 250000) {
    tax = 0;
  } else if (income <= 500000) {
    tax = (income - 250000) * 0.05;
  } else if (income <= 1000000) {
    tax =
      (500000 - 250000) * 0.05 +
      (income - 500000) * 0.20;
  } else {
    tax =
      (500000 - 250000) * 0.05 +
      (1000000 - 500000) * 0.20 +
      (income - 1000000) * 0.30;
  }

  return tax;
}
```

✔ Easy to understand
✖ Not scalable, logic duplication

---

## 2️⃣ Progressive subtraction (cleaner math logic)

**Idea:** Deduct slab by slab.

```js
function calculateTax(income) {
  let tax = 0;

  if (income > 250000) {
    tax += Math.min(income - 250000, 250000) * 0.05;
  }
  if (income > 500000) {
    tax += Math.min(income - 500000, 500000) * 0.20;
  }
  if (income > 1000000) {
    tax += (income - 1000000) * 0.30;
  }

  return tax;
}
```

✔ No nesting
✔ Clear progressive logic
✖ Still semi-hardcoded

---

## 3️⃣ Slab array + loop (most common real-world approach)

**Idea:** Data-driven slabs.

```js
const slabs = [
  { limit: 250000, rate: 0 },
  { limit: 500000, rate: 0.05 },
  { limit: 1000000, rate: 0.20 },
  { limit: Infinity, rate: 0.30 }
];

function calculateTax(income) {
  let tax = 0;
  let prevLimit = 0;

  for (const slab of slabs) {
    if (income > slab.limit) {
      tax += (slab.limit - prevLimit) * slab.rate;
      prevLimit = slab.limit;
    } else {
      tax += (income - prevLimit) * slab.rate;
      break;
    }
  }

  return tax;
}
```

✔ Scalable
✔ Industry-standard
✔ Slabs easily changeable

---

## 4️⃣ Functional style (`reduce`)

**Idea:** Declarative + loop abstraction.

```js
function calculateTax(income) {
  const slabs = [
    [250000, 0],
    [500000, 0.05],
    [1000000, 0.20],
    [Infinity, 0.30]
  ];

  let prev = 0;

  return slabs.reduce((tax, [limit, rate]) => {
    if (income > prev) {
      tax += (Math.min(income, limit) - prev) * rate;
      prev = limit;
    }
    return tax;
  }, 0);
}
```

✔ Functional mindset
✖ Slightly harder to read for beginners

---

## 5️⃣ Recursive slab processing (conceptual / academic)

**Idea:** Treat slabs as recursive steps.

```js
function calculateTax(income, slabs, i = 0, prev = 0) {
  if (i >= slabs.length || income <= prev) return 0;

  const [limit, rate] = slabs[i];
  const taxable = Math.min(income, limit) - prev;

  return (
    taxable * rate +
    calculateTax(income, slabs, i + 1, limit)
  );
}
```

✔ Shows recursion thinking
✖ Overkill for production

---

## 6️⃣ Mathematical formula (least readable)

**Idea:** Direct arithmetic expression.

✔ Fast
✖ Hard to maintain
✖ Error-prone
(Usually **not recommended**)

---

## ✅ Summary

| Method                  | Use Case            |
| ----------------------- | ------------------- |
| `if–else`               | Exams, beginners    |
| Progressive subtraction | Clean logic         |
| Slab + loop             | **Best real-world** |
| Functional              | FP mindset          |
| Recursive               | Concept learning    |
| Formula                 | Rare / unsafe       |

👉 **Total meaningful JS approaches:** **6**
 

 ---
 
 ## Pattern of this problem

This problem follows a **well-known reusable problem pattern**.

### **Pattern name**

**Progressive Slab / Range-based Accumulation**

(also called **Tiered Calculation Pattern**)

---

## Core pattern (abstract form)

> **Input value crosses multiple ranges →
> Each range contributes partially →
> Final result = sum of all contributions**

Mathematically:

```
result = Σ (min(input, upperBoundᵢ) − lowerBoundᵢ) × rateᵢ
```

This is the **entire pattern**.

---

## Why this pattern exists

Because:

* One condition is **not enough**
* Each range applies **independently**
* Later ranges **do not overwrite** earlier ones
* Calculation is **cumulative**, not exclusive

That’s the key distinction.

---

## Mental model (important)

Think of it like:

* Filling buckets level by level
* Each level has its own price/rate
* You can’t skip lower levels

This is **not decision-based logic**,
this is **accumulation-based logic**.

---

## Where this pattern is used (very common)

### 1️⃣ Income tax (you saw it)

* Slabs
* Progressive rates

---

### 2️⃣ Electricity / water / gas bills

* First 100 units → cheap
* Next 200 units → medium
* Rest → expensive

---

### 3️⃣ Salary deductions / bonuses

* Base pay → fixed
* Performance range → % bonus
* Extra → higher %

---

### 4️⃣ Shipping cost calculation

* First 1 kg → base price
* Next 4 kg → extra rate
* Above → premium rate

---

### 5️⃣ Cloud pricing (AWS, GCP, Azure)

* Free tier
* Pay-as-you-go slabs
* Volume discounts

---

### 6️⃣ Grading systems

* 0–40 → fail
* 41–60 → pass
* 61–80 → good
* 81–100 → excellent

(when **partial credit matters**)

---

### 7️⃣ Commission systems

* First 10 sales → 5%
* Next 20 → 10%
* Above → 15%

---

## How to recognize this pattern quickly

Ask these **3 questions**:

1. Does input span **multiple ranges**?
2. Does each range **add something**, not replace?
3. Is final output a **sum of parts**?

If **YES**,
👉 use **progressive slab pattern**

---

## Why `if–else` works first

Because `if–else` mimics human reasoning:

> “First this part, then next part, then next…”

Later we just:

* remove duplication
* generalize with data + loops

---

## One-liner takeaway

> **Whenever value crosses tiers and each tier contributes partially →
> this pattern applies.**

---
 