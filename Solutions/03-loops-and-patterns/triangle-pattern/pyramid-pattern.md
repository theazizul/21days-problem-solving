
We will solve this step-by-step using **JavaScript** and build good thinking habits from day 1.

Today's problem: Print this pyramid (for rows = 5)

```
    *
   ***
  *****
 *******
*********
```

### Step-by-step thinking (very important for beginners)

1. How many rows? → 5 (given)
2. In which row how many stars (*) do we need?

   Row number → stars  
   1 → 1  
   2 → 3  
   3 → 5  
   4 → 7  
   5 → 9  

   Pattern: **stars = 2 × row - 1**

3. How many spaces before the stars in each row?

   Row 1 → 4 spaces  
   Row 2 → 3 spaces  
   Row 3 → 2 spaces  
   Row 4 → 1 space  
   Row 5 → 0 spaces  

   Pattern: **spaces = total_rows - current_row**

Now we can write the logic:

```js
let rows = 5;

for(let i = 1; i <= rows; i++) {
    // 1. print spaces
    // 2. print stars
    // 3. go to next line
}
```

### Solution – 3 different styles (you can choose any)

**Style 1: Most beginner friendly (using repeat())**

```javascript
let rows = 5;

for (let i = 1; i <= rows; i++) {
    let spaces = rows - i;           // 4,3,2,1,0
    let starsCount = 2 * i - 1;      // 1,3,5,7,9
    
    let line = " ".repeat(spaces) + "*".repeat(starsCount);
    console.log(line);
}
```

**Style 2: Using nested loops (classic way – teaches loop thinking)**

```javascript
let rows = 5;

for (let i = 1; i <= rows; i++) {
    let line = "";
    
    // print spaces
    for (let j = 1; j <= rows - i; j++) {
        line += " ";
    }
    
    // print stars
    for (let j = 1; j <= 2 * i - 1; j++) {
        line += "*";
    }
    
    console.log(line);
}
```

**Style 3: One-liner inside loop (short & modern)**

```javascript
let rows = 5;

for (let i = 1; i <= rows; i++) {
    console.log(" ".repeat(rows - i) + "*".repeat(2 * i - 1));
}
```

All three will give the same output.

### Your mini-task for today (Day 1):

1. Copy any one of the codes above
2. Run it in your browser console or in VS Code (node)
3. Now change `rows = 5` to `rows = 7` → see what happens
4. Try to understand: why `2 * i - 1` gives odd numbers?

Tomorrow we will do another pattern (maybe reverse pyramid or diamond).
 