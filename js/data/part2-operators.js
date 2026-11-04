/* ==========================================================================
   PART 2: JavaScript Operators - Comprehensive Topics Data
   ========================================================================== */

window.TOPIC_DATA_STORE = window.TOPIC_DATA_STORE || {};

window.TOPIC_DATA_STORE["operators-intro"] = {
  id: "operators-intro",
  title: "JavaScript Operators Overview",
  lead: "Understand the fundamentals of operators, operands, unary/binary/ternary forms, operator precedence, and associativity in JavaScript.",
  intro: "Operators are special symbols or keywords that perform operations on values and variables. They allow programs to calculate values, compare conditions, and transform data.",
  definition: "An operator in JavaScript is a character or keyword that takes one or more operands (expressions or values) and produces a calculated result.",
  whyUse: "Operators are the mathematical and logical backbone of all computational programming, from simple addition to complex condition evaluation.",
  syntax: `operand1 operator operand2; // Binary operator
operator operand;             // Unary operator
condition ? expr1 : expr2;    // Ternary operator`,
  syntaxExplanation: "Operators can be Unary (1 operand, e.g., `++x`, `!flag`), Binary (2 operands, e.g., `a + b`, `x === y`), or Ternary (3 operands, e.g., `cond ? a : b`).",
  simpleExample: `let apples = 10;
let oranges = 5;
let totalFruit = apples + oranges;
console.log("Total Fruit:", totalFruit);`,
  expectedOutput: `Total Fruit: 15`,
  realLifeExample: {
    domain: "Restaurant Billing",
    title: "Bill Calculation with Service Fee",
    scenario: "Computing food charges, adding 10% service tip, and dividing among dinner guests.",
    code: `let foodBill = 2400;
let serviceCharge = foodBill * 0.10;
let grandTotal = foodBill + serviceCharge;
let numberOfGuests = 4;
let splitPerGuest = grandTotal / numberOfGuests;

console.log("Food Bill      : Rs." + foodBill);
console.log("Service (10%)  : Rs." + serviceCharge);
console.log("Grand Total    : Rs." + grandTotal);
console.log("Per Guest Split: Rs." + splitPerGuest);`,
    output: `Food Bill      : Rs.2400\nService (10%)  : Rs.240\nGrand Total    : Rs.2640\nPer Guest Split: Rs.660`
  },
  practicalExample: {
    title: "Operator Precedence Demonstration",
    code: `// Multiplication (*) has higher precedence than addition (+)
let result1 = 10 + 5 * 2;   // 10 + 10 = 20
let result2 = (10 + 5) * 2; // 15 * 2 = 30
console.log("Without Parentheses:", result1);
console.log("With Parentheses:   ", result2);`,
    output: `Without Parentheses: 20\nWith Parentheses:    30`,
    note: "Parentheses `()` always have the highest precedence and override default operator ordering."
  },
  commonMistakes: [
    {
      mistake: "Assuming left-to-right evaluation for all operators",
      wrongCode: `let a, b, c;
a = b = c = 5; // Assignment operators evaluate right-to-left!`,
      correctCode: `let c = 5;
let b = c;
let a = b;
console.log(a, b, c);`,
      explanation: "Assignment operators (`=`) and exponentiation (`**`) evaluate right-to-left (right-associative)."
    }
  ],
  importantPoints: [
    "JavaScript operators fall into categories: Arithmetic, Assignment, Comparison, Logical, Bitwise, String, and Special (like `typeof`, `instanceof`, `delete`).",
    "Operator precedence determines which operation runs first in a compound expression.",
    "Always use parentheses to eliminate ambiguity in complex mathematical or boolean expressions."
  ],
  interviewQuestions: [
    {
      question: "What is operator associativity in JavaScript?",
      answer: "Associativity determines the order in which operators of the same precedence level are evaluated. Most operators are left-associative (evaluated left-to-right, e.g. `10 - 5 - 2 = 3`), but assignment and exponentiation are right-associative (e.g. `2 ** 3 ** 2 = 2 ** 9 = 512`)."
    }
  ],
  practiceExercises: [
    {
      problem: "Evaluate without running: What is the value of `5 + 2 * 3 - 8 / 2`?",
      hint: "Evaluate `*` and `/` first, then `+` and `-`.",
      solution: `// 2 * 3 = 6
// 8 / 2 = 4
// 5 + 6 - 4 = 7
let val = 5 + 2 * 3 - 8 / 2;
console.log("Calculated Value:", val); // 7`
    }
  ]
};

window.TOPIC_DATA_STORE["operators-arithmetic"] = {
  id: "operators-arithmetic",
  title: "Arithmetic Operators",
  lead: "Master addition (+), subtraction (-), multiplication (*), division (/), modulus (%), exponentiation (**), increment (++), and decrement (--).",
  intro: "Arithmetic operators perform mathematical computations on numeric operands (literals or variables).",
  definition: "Arithmetic operators are binary and unary operators designed for standard mathematical calculations.",
  whyUse: "Used across every business application for billing, geometry, currency conversion, counters, physics simulations, and pagination indexing.",
  syntax: `let sum = a + b;   // Addition
let diff = a - b;  // Subtraction
let prod = a * b;  // Multiplication
let quot = a / b;  // Division
let rem = a % b;   // Modulus (Remainder)
let pow = a ** b;  // Exponentiation
x++;               // Post-increment
--y;               // Pre-decrement`,
  syntaxExplanation: "The modulus operator `%` returns the integer remainder of division. `**` raises the base to the exponent power. `++` increments by 1.",
  simpleExample: `let a = 17;
let b = 5;
console.log("Division:", a / b); // 3.4
console.log("Remainder:", a % b); // 2
console.log("Exponent:", 2 ** 3); // 8`,
  expectedOutput: `Division: 3.4\nRemainder: 2\nExponent: 8`,
  realLifeExample: {
    domain: "Attendance Management",
    title: "Shift Hours & Remaining Minutes Calculator",
    scenario: "Converting an employee's total logged minutes into hours and remaining minutes.",
    code: `let totalMinutesWorked = 515; // 8 hours 35 minutes
let hours = Math.floor(totalMinutesWorked / 60);
let remainingMinutes = totalMinutesWorked % 60;

console.log("Total Logged: " + totalMinutesWorked + " mins");
console.log("Shift Time  : " + hours + " Hours and " + remainingMinutes + " Minutes");`,
    output: `Total Logged: 515 mins\nShift Time  : 8 Hours and 35 Minutes`
  },
  practicalExample: {
    title: "Pre-Increment vs Post-Increment",
    code: `let x = 5;
let y = x++; // Assigns 5 to y, then increments x to 6
console.log("Post-increment: x =", x, ", y =", y);

let p = 5;
let q = ++p; // Increments p to 6, then assigns 6 to q
console.log("Pre-increment:  p =", p, ", q =", q);`,
    output: `Post-increment: x = 6 , y = 5\nPre-increment:  p = 6 , q = 6`,
    note: "Post-increment returns value before incrementing; pre-increment returns value after incrementing."
  },
  commonMistakes: [
    {
      mistake: "Dividing by zero without checking",
      wrongCode: `let result = 100 / 0; // Evaluates to Infinity, not an error!
console.log(result);`,
      correctCode: `let divisor = 0;
if (divisor === 0) {
  console.log("Cannot divide by zero");
} else {
  console.log(100 / divisor);
}`,
      explanation: "JavaScript returns `Infinity` or `-Infinity` when dividing numbers by zero instead of raising an error."
    }
  ],
  importantPoints: [
    "`+` is overloaded: it performs numeric addition if both operands are numbers, but string concatenation if either operand is a string.",
    "`%` is useful for checking even/odd numbers (`num % 2 === 0`).",
    "`**` was introduced in ES2016 as an alternative to `Math.pow()`."
  ],
  interviewQuestions: [
    {
      question: "What is the difference between `x++` and `++x`?",
      answer: "`x++` (postfix) evaluates to the current value of `x` before incrementing it. `++x` (prefix) increments `x` first and then evaluates to the newly incremented value."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a program that tests whether a given year's student roll number is even or odd using the modulus operator.",
      hint: "Check `roll % 2 === 0`.",
      solution: `let rollNumber = 1047;
let isEven = (rollNumber % 2 === 0);
console.log("Roll Number " + rollNumber + " is " + (isEven ? "Even" : "Odd"));`
    }
  ]
};

window.TOPIC_DATA_STORE["operators-assignment"] = {
  id: "operators-assignment",
  title: "Assignment Operators",
  lead: "Master simple assignment (=) and compound assignments (+=, -=, *=, /=, %=, **=, ??=, &&=, ||=).",
  intro: "Assignment operators assign values from their right operand to their left operand, often combining an operation with assignment in shorthand form.",
  definition: "An assignment operator assigns a value to its left operand based on the value of its right operand.",
  whyUse: "Compound assignment operators produce concise, readable, and idiomatic code by avoiding repeated variable names.",
  syntax: `x = y;    // Basic assignment
x += y;   // x = x + y
x -= y;   // x = x - y
x *= y;   // x = x * y
x /= y;   // x = x / y
x %= y;   // x = x % y
x ??= y;  // Nullish coalescing assignment (ES2021)`,
  syntaxExplanation: "`x += 5` evaluates `x + 5` and stores the result back in `x`.",
  simpleExample: `let score = 100;
score += 50; // score = score + 50
score -= 20; // score = score - 20
console.log("Score:", score);`,
  expectedOutput: `Score: 130`,
  realLifeExample: {
    domain: "Banking",
    title: "Cumulative Savings Deposit Ledger",
    scenario: "Accumulating monthly interest into customer deposit accounts using compound assignment.",
    code: `let savingsBalance = 25000;
let monthlyDeposit = 5000;
let interestRate = 0.005; // 0.5% monthly

savingsBalance += monthlyDeposit; // Add monthly deposit
console.log("Balance after deposit: Rs." + savingsBalance);

savingsBalance += savingsBalance * interestRate; // Add interest
console.log("Balance with interest: Rs." + savingsBalance.toFixed(2));`,
    output: `Balance after deposit: Rs.30000\nBalance with interest: Rs.30150.00`
  },
  practicalExample: {
    title: "Logical Assignment Operators (ES2021)",
    code: `let user = { name: "Rohan" };
// Assign default title only if null or undefined (??=)
user.title ??= "Software Engineer";

let config = { timeout: 0 };
// Nullish assignment does NOT overwrite 0 (since 0 is not null/undefined)
config.timeout ??= 3000;

console.log("User Title:", user.title);
console.log("Config Timeout:", config.timeout);`,
    output: `User Title: Software Engineer\nConfig Timeout: 0`,
    note: "`??=` only assigns if the left side is `null` or `undefined`."
  },
  commonMistakes: [
    {
      mistake: "Confusing assignment (=) with equality comparison (===)",
      wrongCode: `let status = "pending";
if (status = "approved") { // Assigns "approved" and evaluates as truthy!
  console.log("Allowed access!");
}`,
      correctCode: `let status = "pending";
if (status === "approved") { // Compares values
  console.log("Allowed access!");
}`,
      explanation: "Single `=` assigns a value; triple `===` compares values."
    }
  ],
  importantPoints: [
    "Assignment operators have very low operator precedence and evaluate right-to-left.",
    "Logical nullish assignment (`??=`) is ideal for setting default configuration options without clobbering `0` or `false`.",
    "String concatenation assignment `str += ' more'` appends text directly."
  ],
  interviewQuestions: [
    {
      question: "What is the difference between `||=` and `??=` in modern JavaScript?",
      answer: "`x ||= y` assigns `y` if `x` is *falsy* (`false`, `0`, `\"\"`, `null`, `undefined`, `NaN`). `x ??= y` assigns `y` *only* if `x` is *nullish* (`null` or `undefined`), preserving valid falsy values like `0` or `false`."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a program that accumulates daily sales: Day 1: 1200, Day 2: 2400, Day 3: 1800 using `+=` on a single totalSales variable.",
      hint: "Start with let totalSales = 0 and add each day's figure.",
      solution: `let totalSales = 0;
totalSales += 1200;
totalSales += 2400;
totalSales += 1800;
console.log("Total 3-Day Sales: Rs." + totalSales);`
    }
  ]
};

window.TOPIC_DATA_STORE["operators-comparison"] = {
  id: "operators-comparison",
  title: "Comparison Operators",
  lead: "Master equality (== vs ===), inequality (!= vs !==), greater than (>), less than (<), and relational comparisons.",
  intro: "Comparison operators compare two operands and evaluate to a boolean value (`true` or `false`). They govern all decision making in JavaScript.",
  definition: "Comparison operators test relationships between values, returning `true` if the condition holds and `false` otherwise.",
  whyUse: "Every authentication check, age verification, budget limit, validation rule, and search algorithm depends on accurate comparisons.",
  syntax: `a === b;  // Strict equality (type & value)
a !== b;  // Strict inequality
a == b;   // Loose equality (with type coercion)
a != b;   // Loose inequality
a > b;    // Greater than
a < b;    // Less than
a >= b;   // Greater than or equal to
a <= b;   // Less than or equal to`,
  syntaxExplanation: "Strict equality `===` checks both value and type without coercion. Loose equality `==` attempts to convert types before comparing.",
  simpleExample: `console.log(5 === "5"); // false (number vs string)
console.log(5 == "5");  // true (type coercion)
console.log(10 > 5);    // true
console.log(20 <= 20);  // true`,
  expectedOutput: `false\ntrue\ntrue\ntrue`,
  realLifeExample: {
    domain: "Student Management",
    title: "Exam Grade Eligibility Check",
    scenario: "Verifying whether a student meets the minimum cutoff score of 75% for honors distinction.",
    code: `let studentMarks = 82;
let distinctionCutoff = 75;
let passingCutoff = 40;

let hasPassed = studentMarks >= passingCutoff;
let hasDistinction = studentMarks >= distinctionCutoff;

console.log("Student Score: " + studentMarks + "%");
console.log("Passed Exam?   " + hasPassed);
console.log("Honors List?   " + hasDistinction);`,
    output: `Student Score: 82%\nPassed Exam?   true\nHonors List?   true`
  },
  practicalExample: {
    title: "Object Comparison Trap (Reference vs Value)",
    code: `let studentA = { id: 101 };
let studentB = { id: 101 };
let studentC = studentA;

console.log("studentA === studentB:", studentA === studentB); // false! Different memory references
console.log("studentA === studentC:", studentA === studentC); // true! Same memory reference`,
    output: `studentA === studentB: false\nstudentA === studentC: true`,
    note: "Comparison operators compare objects by memory reference, not by property contents."
  },
  commonMistakes: [
    {
      mistake: "Using loose equality (==) leading to unexpected coercion bugs",
      wrongCode: `console.log(0 == false); // true!
console.log("" == 0);     // true!
console.log(null == undefined); // true!`,
      correctCode: `console.log(0 === false); // false
console.log("" === 0);     // false
console.log(null === undefined); // false`,
      explanation: "Always use strict equality `===` and strict inequality `!==` to avoid unexpected type coercion pitfalls."
    }
  ],
  importantPoints: [
    "Always prefer strict equality (`===`) over loose equality (`==`).",
    "`NaN === NaN` evaluates to `false`! Use `Number.isNaN(val)` to check for NaN.",
    "Strings are compared lexicographically according to Unicode standard values."
  ],
  interviewQuestions: [
    {
      question: "Why does `0.1 + 0.2 === 0.3` return false in JavaScript?",
      answer: "JavaScript uses the IEEE 754 standard for 64-bit floating point arithmetic. Numbers like 0.1 and 0.2 cannot be represented precisely in binary, resulting in `0.1 + 0.2 = 0.30000000000000004`, which is strictly not equal to `0.3`. Use `Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON`."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a function that checks if a user's age is at least 18 and strictly below 60 for employment eligibility.",
      hint: "Use `>=` and `<` with logical AND `&&`.",
      solution: `function isEligibleToWork(age) {
  return age >= 18 && age < 60;
}
console.log("Age 25:", isEligibleToWork(25));
console.log("Age 16:", isEligibleToWork(16));
console.log("Age 65:", isEligibleToWork(65));`
    }
  ]
};

window.TOPIC_DATA_STORE["operators-conditional"] = {
  id: "operators-conditional",
  title: "Conditional Operators",
  lead: "Master the Ternary Operator (? :), Nullish Coalescing (??), and Optional Chaining (?.).",
  intro: "Conditional operators provide concise inline syntax for selecting between alternative values or safely traversing nested object properties based on conditions.",
  definition: "The conditional (ternary) operator takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy, followed by a colon (:), and finally the expression to execute if falsy.",
  whyUse: "Ternary operators allow inline expressions, cleanly assigning dynamic variables or rendering JSX/HTML strings without verbose `if-else` blocks.",
  syntax: `// 1. Ternary Operator
let result = condition ? valueIfTrue : valueIfFalse;

// 2. Nullish Coalescing
let value = input ?? defaultValue;

// 3. Optional Chaining
let city = user?.address?.city;`,
  syntaxExplanation: "The ternary operator evaluates the condition. If truthy, `valueIfTrue` is returned; otherwise, `valueIfFalse` is returned.",
  simpleExample: `let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log("Status:", status);`,
  expectedOutput: `Status: Adult`,
  realLifeExample: {
    domain: "E-commerce",
    title: "Shipping Charge Determination",
    scenario: "Applying free shipping for orders above Rs. 999, otherwise charging a flat Rs. 70 shipping fee.",
    code: `let cartAmount = 1450;
const FREE_SHIPPING_THRESHOLD = 999;
const STANDARD_SHIPPING_FEE = 70;

let shippingFee = cartAmount >= FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING_FEE;
let finalPayable = cartAmount + shippingFee;

console.log("Cart Amount  : Rs." + cartAmount);
console.log("Shipping Fee : Rs." + shippingFee + (shippingFee === 0 ? " (Free Shipping!)" : ""));
console.log("Final Amount : Rs." + finalPayable);`,
    output: `Cart Amount  : Rs.1450\nShipping Fee : Rs.0 (Free Shipping!)\nFinal Amount : Rs.1450`
  },
  practicalExample: {
    title: "Safe Object Navigation with Optional Chaining",
    code: `let customer = {
  id: "CUST-901",
  profile: {
    name: "Sneha",
    // address is omitted
  }
};

// Safe access prevents: Cannot read properties of undefined
let pinCode = customer?.profile?.address?.pinCode ?? "Not Provided";
console.log("Customer Pin Code:", pinCode);`,
    output: `Customer Pin Code: Not Provided`,
    note: "`?.` halts evaluation and returns `undefined` if reference is nullish, preventing runtime errors."
  },
  commonMistakes: [
    {
      mistake: "Deeply nesting ternary operators, rendering code unreadable",
      wrongCode: `let category = age < 13 ? "Child" : age < 20 ? "Teen" : age < 60 ? "Adult" : "Senior"; // Hard to parse`,
      correctCode: `function getCategory(age) {
  if (age < 13) return "Child";
  if (age < 20) return "Teen";
  if (age < 60) return "Adult";
  return "Senior";
}`,
      explanation: "Nested ternary operators degrade readability. Use standard `if-else` or `switch` statements for multi-branch logic."
    }
  ],
  importantPoints: [
    "The ternary operator is an *expression*, meaning it returns a value and can be assigned directly to variables.",
    "`??` only falls back on `null` or `undefined`, unlike `||` which falls back on any falsy value.",
    "Optional chaining `?.` works with properties, array indices (`arr?.[0]`), and method invocations (`func?.()`)."
  ],
  interviewQuestions: [
    {
      question: "What is the difference between the Nullish Coalescing Operator (??) and the OR Operator (||)?",
      answer: "`||` returns the right-hand operand if the left operand is *falsy* (`false`, `0`, `\"\"`, `null`, `undefined`, `NaN`). `??` returns the right-hand operand *only* if the left operand is *nullish* (`null` or `undefined`). For example, `0 || 10` yields `10`, whereas `0 ?? 10` yields `0`."
    }
  ],
  practiceExercises: [
    {
      problem: "Use a ternary operator to assign an attendance mark: If presence percentage is >= 75, assign 'Eligible for Exam', else 'Shortage of Attendance'.",
      hint: "presence >= 75 ? 'Eligible' : 'Shortage'",
      solution: `let attendancePercentage = 68;
let examEligibility = attendancePercentage >= 75 ? "Eligible for Exam" : "Shortage of Attendance";
console.log("Attendance: " + attendancePercentage + "% => " + examEligibility);`
    }
  ]
};
