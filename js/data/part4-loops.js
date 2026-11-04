/* ==========================================================================
   PART 4: Loops - Comprehensive Topics Data
   ========================================================================== */

window.TOPIC_DATA_STORE = window.TOPIC_DATA_STORE || {};

window.TOPIC_DATA_STORE["loops-intro"] = {
  id: "loops-intro",
  title: "Loops Introduction",
  lead: "Understand the purpose of loops, iteration patterns, termination conditions, and algorithmic repetition.",
  intro: "Loops are programming structures used to execute a block of code repeatedly as long as a specified condition remains true. They eliminate redundant code and automate repetitive tasks.",
  definition: "A loop is a fundamental control flow structure that repeats a sequence of instructions until a designated stopping criterion is met.",
  whyUse: "Loops allow traversing arrays of records, processing table rows, polling data streams, searching collections, and animating graphics without repeating code lines.",
  syntax: `// General concept of loops
for (initialization; condition; update) {
  // repeated logic
}`,
  syntaxExplanation: "Every well-formed loop has three critical components: initialization of counter/state, condition check before or after iteration, and an update/increment step preventing infinite loops.",
  simpleExample: `for (let i = 1; i <= 3; i++) {
  console.log("Iteration #" + i);
}`,
  expectedOutput: `Iteration #1\nIteration #2\nIteration #3`,
  realLifeExample: {
    domain: "Student Management",
    title: "Batch Student Roll Call",
    scenario: "Iterating through an examination hall roll sheet to verify student desk allocation.",
    code: `let studentRolls = [101, 102, 103, 104, 105];

console.log("=== EXAM DESK ALLOCATION ===");
for (let i = 0; i < studentRolls.length; i++) {
  let deskNumber = i + 1;
  console.log("Desk #" + deskNumber + " => Student Roll: " + studentRolls[i]);
}`,
    output: `=== EXAM DESK ALLOCATION ===\nDesk #1 => Student Roll: 101\nDesk #2 => Student Roll: 102\nDesk #3 => Student Roll: 103\nDesk #4 => Student Roll: 104\nDesk #5 => Student Roll: 105`
  },
  practicalExample: {
    title: "Summing Numbers in an Array",
    code: `let dailyProfits = [1200, 1500, 1800, 1100, 2000];
let totalProfit = 0;

for (let i = 0; i < dailyProfits.length; i++) {
  totalProfit += dailyProfits[i];
}
console.log("5-Day Total Profit: Rs." + totalProfit);`,
    output: `5-Day Total Profit: Rs.7600`,
    note: "Accumulators combined with loops calculate totals, averages, and statistics."
  },
  commonMistakes: [
    {
      mistake: "Creating an infinite loop by forgetting the update step",
      wrongCode: `// Warning: Will freeze browser thread!
let i = 0;
while (i < 5) {
  console.log(i);
  // Missing i++ causes infinite execution!
}`,
      correctCode: `let i = 0;
while (i < 5) {
  console.log(i);
  i++; // Increment counter
}`,
      explanation: "Without an update that eventually causes the condition to evaluate to false, loops run infinitely, freezing the browser tab."
    }
  ],
  importantPoints: [
    "JavaScript supports multiple loop flavors: `for`, `while`, `do...while`, `for...in`, `for...of`, and array methods like `.forEach()`.",
    "Always ensure loop termination conditions are reachable.",
    "Choose `for` when iteration count is known in advance; choose `while` when looping depends on external conditions."
  ],
  interviewQuestions: [
    {
      question: "Which loop is fastest in JavaScript?",
      answer: "A standard `for` loop with a cached length (`for (let i = 0, len = arr.length; i < len; i++)`) or decrementing while loop (`while (len--)`) is traditionally the most optimized by JIT engines, though modern V8 engines optimize `for...of` and `forEach` closely."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a loop that prints the multiplication table of 7 from 7x1 to 7x5.",
      hint: "Iterate from i = 1 to 5.",
      solution: `for (let i = 1; i <= 5; i++) {
  console.log(\`7 x \${i} = \${7 * i}\`);
}`
    }
  ]
};

window.TOPIC_DATA_STORE["loop-for"] = {
  id: "loop-for",
  title: "For Loop",
  lead: "Master the classic 3-expression for loop, indexing, nested loops, and array traversals.",
  intro: "The `for` loop is the most commonly used looping construct in JavaScript. It bundles initialization, condition, and increment/decrement into a single concise header.",
  definition: "A count-controlled loop executing a block of statements a predetermined number of times based on loop counters.",
  whyUse: "Ideal for iterating through numeric ranges, indexing array items, generating coordinates, and building matrix grids.",
  syntax: `for (initialization; condition; increment) {
  // code block
}`,
  syntaxExplanation: "1. Initialization runs once at start. 2. Condition is tested before each iteration. 3. Code block executes if true. 4. Increment runs after each block completion.",
  simpleExample: `for (let count = 1; count <= 4; count++) {
  console.log("Count is: " + count);
}`,
  expectedOutput: `Count is: 1\nCount is: 2\nCount is: 3\nCount is: 4`,
  realLifeExample: {
    domain: "Employee Management",
    title: "Department Salary Increase Distribution",
    scenario: "Applying an annual 8% cost-of-living increment across department employee records.",
    code: `let employees = [
  { name: "Pooja", salary: 50000 },
  { name: "Kunal", salary: 65000 },
  { name: "Sameer", salary: 80000 }
];

console.log("=== SALARY REVISION LIST ===");
for (let i = 0; i < employees.length; i++) {
  let emp = employees[i];
  let hike = emp.salary * 0.08;
  let revisedSalary = emp.salary + hike;
  console.log(emp.name + ": Old = Rs." + emp.salary + " | Revised = Rs." + revisedSalary);
}`,
    output: `=== SALARY REVISION LIST ===\nPooja: Old = Rs.50000 | Revised = Rs.54000\nKunal: Old = Rs.65000 | Revised = Rs.70200\nSameer: Old = Rs.80000 | Revised = Rs.86400`
  },
  practicalExample: {
    title: "Nested For Loop Matrix Table",
    code: `// Printing a 2x3 coordinate grid
for (let row = 1; row <= 2; row++) {
  for (let col = 1; col <= 3; col++) {
    console.log("Cell (" + row + ", " + col + ")");
  }
}`,
    output: `Cell (1, 1)\nCell (1, 2)\nCell (1, 3)\nCell (2, 1)\nCell (2, 2)\nCell (2, 3)`,
    note: "Inner loops run completely for every single iteration of the outer loop."
  },
  commonMistakes: [
    {
      mistake: "Off-by-one errors when looping over arrays",
      wrongCode: `let items = ["A", "B", "C"];
for (let i = 0; i <= items.length; i++) { // items[3] is undefined!
  console.log(items[i]);
}`,
      correctCode: `let items = ["A", "B", "C"];
for (let i = 0; i < items.length; i++) { // Strict less-than (<)
  console.log(items[i]);
}`,
      explanation: "Array indices are zero-based, running from `0` to `length - 1`. Using `<=` leads to an extra loop iteration accessing `undefined`."
    }
  ],
  importantPoints: [
    "Any of the three expressions in `for (;;)` can be omitted, but omitting condition creates an infinite loop.",
    "Using `let` in the loop header creates a distinct block scope for each iteration.",
    "Reverse loops `for (let i = arr.length - 1; i >= 0; i--)` are useful for removing items without index displacement."
  ],
  interviewQuestions: [
    {
      question: "What is the closure issue with `var` inside a for loop versus `let`?",
      answer: "With `var i = 0`, a single function-scoped variable is shared across all iterations, so asynchronous callbacks (like `setTimeout`) see the final value of `i`. With `let i = 0`, each iteration receives a fresh lexical binding."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a for loop that calculates the factorial of 5 (5! = 5 * 4 * 3 * 2 * 1).",
      hint: "Multiply an accumulator initialized at 1.",
      solution: `let num = 5;
let fact = 1;
for (let i = 1; i <= num; i++) {
  fact *= i;
}
console.log("5! =", fact); // 120`
    }
  ]
};

window.TOPIC_DATA_STORE["loop-while"] = {
  id: "loop-while",
  title: "While Loop",
  lead: "Master condition-controlled repetition, state-dependent iteration, and dynamic termination with while loops.",
  intro: "The `while` loop checks its condition *before* executing the block. If the condition is false initially, the block is never executed.",
  definition: "A pre-test control flow statement that repeatedly executes a block as long as its boolean condition remains true.",
  whyUse: "Best when the number of iterations is unknown in advance, such as reading lines from a stream, awaiting user input, or random trial simulations.",
  syntax: `while (condition) {
  // statements
  // state modification
}`,
  syntaxExplanation: "The condition is tested before entering the loop. If true, the code executes, and the condition is re-evaluated. If false, the loop terminates immediately.",
  simpleExample: `let count = 3;
while (count > 0) {
  console.log("Countdown:", count);
  count--;
}
console.log("Launch!");`,
  expectedOutput: `Countdown: 3\nCountdown: 2\nCountdown: 1\nLaunch!`,
  realLifeExample: {
    domain: "Banking",
    title: "Loan Repayment Amortization Schedule",
    scenario: "Simulating monthly loan payoff until outstanding principal is completely cleared.",
    code: `let principal = 5000;
let monthlyPayment = 1500;
let month = 1;

console.log("=== LOAN PAYOFF SCHEDULE ===");
while (principal > 0) {
  let payment = Math.min(monthlyPayment, principal);
  principal -= payment;
  console.log("Month #" + month + ": Paid Rs." + payment + " | Remaining: Rs." + principal);
  month++;
}`,
    output: `=== LOAN PAYOFF SCHEDULE ===\nMonth #1: Paid Rs.1500 | Remaining: Rs.3500\nMonth #2: Paid Rs.1500 | Remaining: Rs.2000\nMonth #3: Paid Rs.1500 | Remaining: Rs.500\nMonth #4: Paid Rs.500 | Remaining: Rs.0`
  },
  practicalExample: {
    title: "Random Dice Roll Until 6 is Reached",
    code: `let rollCount = 0;
let dice = 0;

while (dice !== 6 && rollCount < 10) {
  rollCount++;
  // Simulating random roll
  dice = (rollCount === 4) ? 6 : (rollCount % 5) + 1;
  console.log("Roll #" + rollCount + " produced: " + dice);
}
console.log("Found 6 after " + rollCount + " roll(s)!");`,
    output: `Roll #1 produced: 2\nRoll #2 produced: 3\nRoll #3 produced: 4\nRoll #4 produced: 6\nFound 6 after 4 roll(s)!`,
    note: "While loops excel at non-deterministic, event-driven stopping conditions."
  },
  commonMistakes: [
    {
      mistake: "Never updating the condition variable inside the while loop body",
      wrongCode: `let connected = false;
while (!connected) {
  console.log("Attempting reconnect..."); // Runs forever!
}`,
      correctCode: `let attempts = 0;
let connected = false;
while (!connected && attempts < 3) {
  attempts++;
  console.log("Attempt #" + attempts + " connecting...");
  if (attempts === 2) connected = true;
}`,
      explanation: "Ensure there is always a guaranteed termination condition or maximum retry guard."
    }
  ],
  importantPoints: [
    "A `while` loop might execute zero times if the condition is false right from the start.",
    "Always include a safeguard condition (like a max attempts counter) to prevent browser freezes.",
    "Use while loops when waiting for queues to empty (`while (queue.length > 0)`)."
  ],
  interviewQuestions: [
    {
      question: "What is the key difference between while and do-while loops?",
      answer: "A `while` loop checks the condition *before* executing the block (zero or more executions). A `do-while` loop executes the block *first* before checking the condition (guaranteed at least one execution)."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a while loop that doubles a number starting from 1 until it exceeds 100, printing each step.",
      hint: "while (num <= 100) { num *= 2; }",
      solution: `let val = 1;
while (val <= 100) {
  console.log("Current Value: " + val);
  val *= 2;
}
console.log("Final Exceeded Value: " + val);`
    }
  ]
};

window.TOPIC_DATA_STORE["loop-do-while"] = {
  id: "loop-do-while",
  title: "Do While Loop",
  lead: "Master post-test loops guaranteeing at least one execution cycle in JavaScript.",
  intro: "The `do...while` loop is a variant of the while loop. This loop will execute the code block once, *before* checking if the condition is true, then it will repeat as long as the condition holds.",
  definition: "A post-test loop structure that guarantees execution of its body at least once regardless of initial condition truthiness.",
  whyUse: "Ideal for menus, user input validation prompts, and retry sequences where an action must happen at least once before testing.",
  syntax: `do {
  // statements executed at least once
} while (condition);`,
  syntaxExplanation: "The block runs first. Afterwards, `condition` is evaluated. If true, the loop repeats; if false, it ends. Note the mandatory trailing semicolon.",
  simpleExample: `let i = 10;
do {
  console.log("i is: " + i);
  i++;
} while (i < 5); // Condition false, but ran once!`,
  expectedOutput: `i is: 10`,
  realLifeExample: {
    domain: "Banking",
    title: "ATM PIN Verification with Retry Limit",
    scenario: "Prompting user for 4-digit PIN at least once, allowing up to 3 attempts before locking card.",
    code: `let maxAttempts = 3;
let attempt = 0;
let isPinValid = false;

console.log("=== ATM CARD INSERTED ===");
do {
  attempt++;
  console.log("Attempt #" + attempt + ": Processing entered PIN...");
  // Simulated third attempt success
  if (attempt === 2) {
    isPinValid = true;
    console.log("PIN Verified! Access granted.");
  } else {
    console.log("Incorrect PIN. Please try again.");
  }
} while (!isPinValid && attempt < maxAttempts);`,
    output: `=== ATM CARD INSERTED ===\nAttempt #1: Processing entered PIN...\nIncorrect PIN. Please try again.\nAttempt #2: Processing entered PIN...\nPIN Verified! Access granted.`
  },
  practicalExample: {
    title: "Data Polling Simulation",
    code: `let retries = 0;
let dataReceived = false;

do {
  retries++;
  console.log("Checking server status... (Ping " + retries + ")");
  if (retries === 1) dataReceived = true;
} while (!dataReceived && retries < 5);`,
    output: `Checking server status... (Ping 1)`,
    note: "Guarantees that at least one network status check ping is dispatched."
  },
  commonMistakes: [
    {
      mistake: "Omitting the semicolon at the end of while (condition);",
      wrongCode: `do {
  console.log("Hello");
} while (false) // Missing semicolon can cause ASI parsing confusion`,
      correctCode: `do {
  console.log("Hello");
} while (false);`,
      explanation: "Unlike other control blocks, `do...while` must conclude with a semicolon after the closing parenthesis."
    }
  ],
  importantPoints: [
    "Guaranteed to execute at least once.",
    "Variables declared inside the `do { ... }` block are NOT visible in the `while (condition)` expression.",
    "Declare condition variables outside the `do` block."
  ],
  interviewQuestions: [
    {
      question: "Can a do-while loop condition access variables declared inside its block?",
      answer: "No. The `while (condition)` expression exists outside the block's lexical scope. Variables tested in the condition must be declared *before* the `do` statement."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a do-while loop that generates a random number between 1 and 6 until it rolls an even number.",
      hint: "do { roll = ... } while (roll % 2 !== 0);",
      solution: `let roll;
let steps = 0;
do {
  steps++;
  roll = (steps === 3) ? 4 : (steps * 3); // Simulated rolls: 3, 6, 4
  console.log("Step " + steps + ": Rolled " + roll);
} while (roll % 2 !== 0);
console.log("Found even roll: " + roll);`
    }
  ]
};

window.TOPIC_DATA_STORE["loop-break"] = {
  id: "loop-break",
  title: "Break Statement",
  lead: "Terminate loops and switch statements prematurely when specific targets or conditions are met.",
  intro: "The `break` statement jumps out of a loop or switch block immediately, transferring execution to the first statement following the loop.",
  definition: "A jump statement that halts the enclosing `for`, `while`, `do...while`, or `switch` construct and terminates its execution.",
  whyUse: "Stops unnecessary iterations once a search target is located, saving memory and CPU execution cycles.",
  syntax: `for (let i = 0; i < 100; i++) {
  if (i === 5) {
    break; // Exits loop when i is 5
  }
}`,
  syntaxExplanation: "When the JavaScript engine hits `break`, it immediately aborts the current loop without finishing the rest of the body or running the update expression.",
  simpleExample: `for (let i = 1; i <= 10; i++) {
  if (i === 4) {
    console.log("Found 4! Halting loop.");
    break;
  }
  console.log("Checking:", i);
}`,
  expectedOutput: `Checking: 1\nChecking: 2\nChecking: 3\nFound 4! Halting loop.`,
  realLifeExample: {
    domain: "E-commerce",
    title: "Inventory Stock Search",
    scenario: "Searching warehouse catalogue for a specific SKU and exiting immediately when located.",
    code: `let inventory = [
  { sku: "SKU-001", name: "Keyboard" },
  { sku: "SKU-002", name: "Wireless Mouse" },
  { sku: "SKU-003", name: "USB-C Hub" },
  { sku: "SKU-004", name: "Monitor Arm" }
];

let searchTarget = "SKU-002";
let foundProduct = null;

for (let i = 0; i < inventory.length; i++) {
  console.log("Inspecting item at index " + i + ": " + inventory[i].sku);
  if (inventory[i].sku === searchTarget) {
    foundProduct = inventory[i];
    console.log("Match found! Breaking loop early.");
    break; // No need to inspect SKU-003 or SKU-004
  }
}

console.log("Found Product:", foundProduct.name);`,
    output: `Inspecting item at index 0: SKU-001\nInspecting item at index 1: SKU-002\nMatch found! Breaking loop early.\nFound Product: Wireless Mouse`
  },
  practicalExample: {
    title: "Labeled Break in Nested Loops",
    code: `outerLoop: for (let r = 1; r <= 3; r++) {
  for (let c = 1; c <= 3; c++) {
    if (r === 2 && c === 2) {
      console.log("Breaking directly out of outer loop from (" + r + "," + c + ")");
      break outerLoop;
    }
    console.log("Point: (" + r + ", " + c + ")");
  }
}`,
    output: `Point: (1, 1)\nPoint: (1, 2)\nPoint: (1, 3)\nPoint: (2, 1)\nBreaking directly out of outer loop from (2,2)`,
    note: "Labels allow breaking out of multiple nested loops simultaneously."
  },
  commonMistakes: [
    {
      mistake: "Using break outside of a loop or switch",
      wrongCode: `if (userAuthenticated) {
  break; // SyntaxError: Illegal break statement!
}`,
      correctCode: `// Use return inside functions or use break only inside loops/switch
if (userAuthenticated) {
  return;
}`,
      explanation: "`break` can only be used inside loops or switch blocks (or with labeled statements)."
    }
  ],
  importantPoints: [
    "`break` terminates only the *innermost* loop unless a labeled statement is used.",
    "Significantly enhances algorithmic efficiency by preventing pointless iterations.",
    "In array operations, methods like `.find()` or `.some()` have built-in short-circuit break behavior."
  ],
  interviewQuestions: [
    {
      question: "Can you break out of a `forEach()` loop in JavaScript?",
      answer: "No. You cannot use `break` inside an `Array.prototype.forEach()` callback. If you need early termination, use a standard `for`, `for...of`, `Array.prototype.some()`, or `Array.prototype.find()`."
    }
  ],
  practiceExercises: [
    {
      problem: "Search an array of test scores for the first score below passing (40), print its index, and break.",
      hint: "if (scores[i] < 40) { ... break; }",
      solution: `let scores = [78, 85, 92, 34, 60, 41];
for (let i = 0; i < scores.length; i++) {
  if (scores[i] < 40) {
    console.log("First failing score found: " + scores[i] + " at index " + i);
    break;
  }
}`
    }
  ]
};

window.TOPIC_DATA_STORE["loop-continue"] = {
  id: "loop-continue",
  title: "Continue Statement",
  lead: "Skip the current loop iteration and jump directly to the next iteration cycle.",
  intro: "The `continue` statement breaks one iteration in the loop, if a specified condition occurs, and continues with the next iteration in the loop.",
  definition: "A loop control statement that skips remaining statements in the current iteration and advances the loop counter to the next pass.",
  whyUse: "Filtering unwanted elements, skipping corrupted rows, avoiding nested if-statements, and processing only eligible records.",
  syntax: `for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Skip even numbers
  }
  console.log(i); // Only prints odd numbers
}`,
  syntaxExplanation: "When `continue` is reached, the remaining statements in the current iteration body are bypassed. For a `for` loop, the increment expression is evaluated next.",
  simpleExample: `for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // Skips number 3
  }
  console.log("Number: " + i);
}`,
  expectedOutput: `Number: 1\nNumber: 2\nNumber: 4\nNumber: 5`,
  realLifeExample: {
    domain: "Attendance Management",
    title: "Skipping Weekend Holidays in Attendance Calculation",
    scenario: "Computing employee monthly working days while skipping Saturday and Sunday calendar dates.",
    code: `let calendarDays = [
  { day: 1, type: "weekday" },
  { day: 2, type: "weekday" },
  { day: 3, type: "weekend" },
  { day: 4, type: "weekend" },
  { day: 5, type: "weekday" }
];

let workDaysCounted = 0;
for (let i = 0; i < calendarDays.length; i++) {
  if (calendarDays[i].type === "weekend") {
    console.log("Day " + calendarDays[i].day + " is a weekend. Skipping attendance.");
    continue;
  }
  workDaysCounted++;
  console.log("Day " + calendarDays[i].day + " logged as working day.");
}

console.log("Total Working Days Logged: " + workDaysCounted);`,
    output: `Day 1 logged as working day.\nDay 2 logged as working day.\nDay 3 is a weekend. Skipping attendance.\nDay 4 is a weekend. Skipping attendance.\nDay 5 logged as working day.\nTotal Working Days Logged: 3`
  },
  practicalExample: {
    title: "Sanitizing Corrupt Records",
    code: `let transactions = [100, -50, null, 250, undefined, 400];
let validTotal = 0;

for (let i = 0; i < transactions.length; i++) {
  let tx = transactions[i];
  if (tx === null || tx === undefined || tx <= 0) {
    continue; // Skip corrupted/negative entries
  }
  validTotal += tx;
}
console.log("Clean Valid Transaction Sum: Rs." + validTotal);`,
    output: `Clean Valid Transaction Sum: Rs.750`,
    note: "Continue statements act as guard clauses at the top of loop bodies."
  },
  commonMistakes: [
    {
      mistake: "Using continue in a while loop before incrementing the counter",
      wrongCode: `let i = 0;
while (i < 5) {
  if (i === 2) {
    continue; // BUG: Jumps to while condition without i++ -> Infinite loop!
  }
  console.log(i);
  i++;
}`,
      correctCode: `let i = 0;
while (i < 5) {
  if (i === 2) {
    i++; // Must increment before continue!
    continue;
  }
  console.log(i);
  i++;
}`,
      explanation: "In `while` loops, `continue` jumps to the condition directly. If your counter increment is after `continue`, an infinite loop occurs."
    }
  ],
  importantPoints: [
    "In a `for` loop, `continue` jumps directly to the increment/update expression.",
    "In a `while` loop, `continue` jumps directly to the condition test.",
    "Improves readability by eliminating deeply nested `if` blocks (Guard Clause pattern)."
  ],
  interviewQuestions: [
    {
      question: "What is the guard clause pattern and how does `continue` facilitate it?",
      answer: "The guard clause pattern checks for invalid or uninteresting conditions at the top of a loop or function and exits early (via `continue` or `return`), keeping the main business logic unnested and clean."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a for loop from 1 to 10 that prints only numbers that are NOT divisible by 3 using the `continue` statement.",
      hint: "if (i % 3 === 0) continue;",
      solution: `for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) {
    continue;
  }
  console.log("Allowed: " + i);
}`
    }
  ]
};

window.TOPIC_DATA_STORE["loop-control-flow"] = {
  id: "loop-control-flow",
  title: "Control Flow",
  lead: "Master execution sequence, branch predictability, call stacks, and exception interrupts in JavaScript.",
  intro: "Control flow is the order in which individual statements, instructions, or function calls are executed or evaluated. JavaScript runs top-to-bottom sequentially unless altered by conditionals, loops, functions, or asynchronous events.",
  definition: "The order in which the computer executes statements in a script, governed by sequential execution, conditional branching, iteration, and function invocations.",
  whyUse: "Understanding control flow allows structuring predictable programs, managing asynchronous promises, and debugging logical branches.",
  syntax: `// 1. Sequential flow
statement1();
statement2();

// 2. Branching flow
if (condition) { pathA(); } else { pathB(); }

// 3. Iterative flow
for (item of items) { process(item); }`,
  syntaxExplanation: "Default flow is linear. Control statements (`if`, `switch`, `for`, `while`, `try...catch`, `return`, `throw`) redirect the instruction pointer.",
  simpleExample: `console.log("Step 1: Application Start");
let status = "ready";
if (status === "ready") {
  console.log("Step 2: Initialize Core Services");
}
console.log("Step 3: Ready for User Interactions");`,
  expectedOutput: `Step 1: Application Start\nStep 2: Initialize Core Services\nStep 3: Ready for User Interactions`,
  realLifeExample: {
    domain: "Restaurant Billing",
    title: "Order Fulfillment Workflow Pipeline",
    scenario: "Guiding a food delivery order sequentially through validation, kitchen prep, rider dispatch, and delivery.",
    code: `let order = {
  id: "ORD-991",
  paymentReceived: true,
  itemsPrepared: true,
  riderAssigned: true
};

console.log("1. Receiving Order " + order.id);
if (!order.paymentReceived) {
  console.log("Payment pending. Halting workflow.");
} else {
  console.log("2. Payment confirmed. Sending ticket to kitchen.");
  if (order.itemsPrepared) {
    console.log("3. Food prepared & packed.");
    if (order.riderAssigned) {
      console.log("4. Rider out for delivery!");
    }
  }
}
console.log("Order Pipeline Complete.");`,
    output: `1. Receiving Order ORD-991\n2. Payment confirmed. Sending ticket to kitchen.\n3. Food prepared & packed.\n4. Rider out for delivery!\nOrder Pipeline Complete.`
  },
  practicalExample: {
    title: "Early Return to Flatten Control Flow",
    code: `function processPayment(amount, userBalance) {
  // Guard clauses flatten control flow
  if (amount <= 0) return "Invalid amount";
  if (userBalance < amount) return "Insufficient balance";

  return "Payment of Rs." + amount + " successful!";
}

console.log(processPayment(-50, 1000));
console.log(processPayment(500, 200));
console.log(processPayment(300, 1000));`,
    output: `Invalid amount\nInsufficient balance\nPayment of Rs.300 successful!`,
    note: "Early returns prevent deeply nested if-else ladders."
  },
  commonMistakes: [
    {
      mistake: "Assuming asynchronous callbacks execute in sequential order with synchronous code",
      wrongCode: `console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C"); // Prints A, then C, then B!`,
      correctCode: `// Realize that asynchronous tasks enter the event loop queue
console.log("A");
console.log("C");
setTimeout(() => console.log("B (Asynchronous)"), 0);`,
      explanation: "Even with a 0ms delay, `setTimeout` pushes the callback to the Task Queue, which executes *after* the current synchronous call stack clears."
    }
  ],
  importantPoints: [
    "JavaScript has a single-threaded synchronous execution call stack.",
    "Exceptions (`throw new Error()`) interrupt normal control flow and jump to the nearest enclosing `catch` block.",
    "Functions return control back to their invocation site via the `return` statement."
  ],
  interviewQuestions: [
    {
      question: "What is the Call Stack in JavaScript?",
      answer: "The Call Stack is a LIFO (Last-In, First-Out) data structure used by the JavaScript engine to keep track of function execution contexts. When a function is called, it is pushed onto the stack. When it returns, it is popped off."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a function that validates a user registration: check username length >= 3, password length >= 6, and email contains '@'. Use early returns.",
      hint: "if (user.length < 3) return false; ...",
      solution: `function validateUser(username, password, email) {
  if (username.length < 3) return "Username too short";
  if (password.length < 6) return "Password must be at least 6 characters";
  if (!email.includes("@")) return "Invalid email address";
  return "Validation successful";
}
console.log(validateUser("Jo", "pass123", "jo@test.com"));
console.log(validateUser("John", "secret123", "john@example.com"));`
    }
  ]
};
