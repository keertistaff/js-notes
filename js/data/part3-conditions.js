/* ==========================================================================
   PART 3: Conditions - Comprehensive Topics Data
   ========================================================================== */

window.TOPIC_DATA_STORE = window.TOPIC_DATA_STORE || {};

window.TOPIC_DATA_STORE["cond-if"] = {
  id: "cond-if",
  title: "If Statement",
  lead: "Master conditional branch execution using the fundamental if statement in JavaScript.",
  intro: "The `if` statement executes a block of code only if a specified condition evaluates to truthy. It is the primary building block of program decision-making.",
  definition: "An `if` statement is a control flow structure that tests an expression and branches execution into a code block when the expression is truthy.",
  whyUse: "Programs need to react differently based on user input, data states, permissions, error checks, and operational conditions.",
  syntax: `if (condition) {
  // block of code to be executed if condition is truthy
}`,
  syntaxExplanation: "The expression inside parentheses `(condition)` is converted to a boolean. If `true`, the code block inside `{}` is executed.",
  simpleExample: `let batteryLevel = 15;
if (batteryLevel < 20) {
  console.log("Warning: Low battery! Connect charger.");
}`,
  expectedOutput: `Warning: Low battery! Connect charger.`,
  realLifeExample: {
    domain: "Banking",
    title: "Overdraft Alert on Low Account Balance",
    scenario: "Sending an automated low-balance warning notification if an account drops below Rs. 1,000.",
    code: `let currentBalance = 750;
const MIN_THRESHOLD = 1000;

if (currentBalance < MIN_THRESHOLD) {
  console.log("ALERT: Your balance (Rs." + currentBalance + ") is below the minimum required balance of Rs." + MIN_THRESHOLD + ".");
  console.log("Please maintain minimum balance to avoid penalty charges.");
}`,
    output: `ALERT: Your balance (Rs.750) is below the minimum required balance of Rs.1000.\nPlease maintain minimum balance to avoid penalty charges.`
  },
  practicalExample: {
    title: "Truthiness in If Condition",
    code: `let username = "Keerti"; // Non-empty string is truthy
if (username) {
  console.log("Welcome to session, " + username);
}`,
    output: `Welcome to session, Keerti`,
    note: "JavaScript automatically converts truthy values to true inside conditional checks."
  },
  commonMistakes: [
    {
      mistake: "Placing a semicolon right after the if condition",
      wrongCode: `let score = 30;
if (score > 50); // The semicolon ends the statement here!
{
  console.log("You passed!"); // ALWAYS executes!
}`,
      correctCode: `let score = 30;
if (score > 50) {
  console.log("You passed!");
}`,
      explanation: "A semicolon after `if (condition);` treats the if block as an empty statement, causing the subsequent block to execute unconditionally."
    }
  ],
  importantPoints: [
    "Falsy values in JS: `false`, `0`, `-0`, `0n`, `''`, `null`, `undefined`, `NaN`.",
    "Everything else (including empty arrays `[]` and empty objects `{}`) is truthy.",
    "Always use curly braces `{}` even for single-line if statements to prevent maintenance bugs."
  ],
  interviewQuestions: [
    {
      question: "Are empty arrays `[]` and empty objects `{}` truthy or falsy in JavaScript?",
      answer: "Both `[]` and `{}` are objects in JavaScript, and all objects are strictly **truthy**, even when empty. Therefore, `if ([])` executes its block."
    }
  ],
  practiceExercises: [
    {
      problem: "Write an if statement that checks if a student's score is greater than or equal to 90 and prints 'Eligible for Scholarship'.",
      hint: "Use `if (score >= 90)`.",
      solution: `let studentScore = 93;
if (studentScore >= 90) {
  console.log("Student Score: " + studentScore + " - Eligible for Scholarship!");
}`
    }
  ]
};

window.TOPIC_DATA_STORE["cond-if-else"] = {
  id: "cond-if-else",
  title: "If Else Statement",
  lead: "Handle binary decision making with if-else conditional branches in JavaScript.",
  intro: "Use the `if...else` statement to execute one block of code if a condition is true, and an alternate block if that same condition is false.",
  definition: "`if...else` is a two-way selection control structure offering alternative execution paths for truthy and falsy condition results.",
  whyUse: "Most real-world scenarios require handling both the success path and the failure/fallback path (e.g., Valid/Invalid, Authenticated/Unauthenticated).",
  syntax: `if (condition) {
  // executed if condition is true
} else {
  // executed if condition is false
}`,
  syntaxExplanation: "When `condition` evaluates to true, the first block runs. When it evaluates to false, execution falls into the `else` block.",
  simpleExample: `let isRaining = false;
if (isRaining) {
  console.log("Take an umbrella.");
} else {
  console.log("Enjoy the sunny weather!");
}`,
  expectedOutput: `Enjoy the sunny weather!`,
  realLifeExample: {
    domain: "Attendance Management",
    title: "Employee Shift Punching Status",
    scenario: "Marking an employee as On-Time or Late depending on their punch timestamp.",
    code: `let punchHour = 9;
let punchMinute = 18;
// Shift cutoff is 9:15 AM
let isLate = (punchHour > 9) || (punchHour === 9 && punchMinute > 15);

if (isLate) {
  console.log("Status: Marked LATE (Punched at " + punchHour + ":" + punchMinute + "). Grace period exceeded.");
} else {
  console.log("Status: ON-TIME. Have a productive shift!");
}`,
    output: `Status: Marked LATE (Punched at 9:18). Grace period exceeded.`
  },
  practicalExample: {
    title: "User Authentication Check",
    code: `let isLoggedIn = false;
let userRole = "guest";

if (isLoggedIn) {
  console.log("Redirecting to User Dashboard...");
} else {
  console.log("Access Denied! Redirecting to Login Screen.");
}`,
    output: `Access Denied! Redirecting to Login Screen.`,
    note: "Binary branches prevent unauthorized user access."
  },
  commonMistakes: [
    {
      mistake: "Writing condition after the else keyword",
      wrongCode: `let age = 15;
if (age >= 18) {
  console.log("Adult");
} else (age < 18) { // SyntaxError! else cannot take a condition
  console.log("Minor");
}`,
      correctCode: `let age = 15;
if (age >= 18) {
  console.log("Adult");
} else { // Use else without condition or else if (age < 18)
  console.log("Minor");
}`,
      explanation: "`else` represents the default fallback and cannot take condition parentheses. Use `else if` when testing an explicit second condition."
    }
  ],
  importantPoints: [
    "Only one of the two blocks (`if` or `else`) will ever execute, never both.",
    "Variables declared with `let` inside the `if` block are not accessible within the `else` block.",
    "Useful for binary states like Active/Inactive, Valid/Invalid, Logged In/Logged Out."
  ],
  interviewQuestions: [
    {
      question: "When should you use an if-else statement versus a ternary operator?",
      answer: "Use ternary operators for simple, single-expression assignments or inline returns (e.g., `let x = cond ? a : b`). Use `if-else` statements when executing multi-line statements, side effects (logging, file I/O, DOM manipulation), or complex logic."
    }
  ],
  practiceExercises: [
    {
      problem: "Write an if-else program checking if an applicant's age is 18 or older to print whether they can apply for a Driving License.",
      hint: "Use `if (age >= 18) { ... } else { ... }`.",
      solution: `let applicantAge = 17;
if (applicantAge >= 18) {
  console.log("Eligible for permanent Driving License.");
} else {
  let waitYears = 18 - applicantAge;
  console.log("Not eligible yet. Please apply after " + waitYears + " year(s).");
}`
    }
  ]
};

window.TOPIC_DATA_STORE["cond-else-if"] = {
  id: "cond-else-if",
  title: "Else If Statement",
  lead: "Chain multiple conditional evaluations sequentially using else-if ladders in JavaScript.",
  intro: "The `else if` statement allows testing multiple conditions in sequence. As soon as one condition evaluates to true, its block executes and the remainder of the ladder is skipped.",
  definition: "An `else if` ladder is a multi-way branch structure evaluating conditions sequentially from top to bottom until a matching truthy expression is encountered.",
  whyUse: "Real-world business rules frequently feature more than two states, such as grading scales (A, B, C, D, F), shipping tiers, or salary slabs.",
  syntax: `if (condition1) {
  // code 1
} else if (condition2) {
  // code 2
} else if (condition3) {
  // code 3
} else {
  // fallback code
}`,
  syntaxExplanation: "Conditions are evaluated in order. The first truthy condition runs; all subsequent conditions are ignored. The final `else` is optional.",
  simpleExample: `let marks = 85;
if (marks >= 90) {
  console.log("Grade: A+");
} else if (marks >= 80) {
  console.log("Grade: A");
} else if (marks >= 70) {
  console.log("Grade: B");
} else {
  console.log("Grade: C or below");
}`,
  expectedOutput: `Grade: A`,
  realLifeExample: {
    domain: "Student Management",
    title: "Academic Grade Point System",
    scenario: "Computing university letter grades and GPA ranking from semester examination marks.",
    code: `let studentMarks = 76;
let letterGrade = "";
let gpa = 0.0;

if (studentMarks >= 90) {
  letterGrade = "A+"; gpa = 4.0;
} else if (studentMarks >= 80) {
  letterGrade = "A";  gpa = 3.7;
} else if (studentMarks >= 70) {
  letterGrade = "B";  gpa = 3.0;
} else if (studentMarks >= 60) {
  letterGrade = "C";  gpa = 2.0;
} else if (studentMarks >= 50) {
  letterGrade = "D";  gpa = 1.0;
} else {
  letterGrade = "F";  gpa = 0.0;
}

console.log("Marks: " + studentMarks + " | Grade: " + letterGrade + " | GPA: " + gpa);`,
    output: `Marks: 76 | Grade: B | GPA: 3.0`
  },
  practicalExample: {
    title: "E-Commerce Customer Loyalty Tiers",
    code: `let totalSpent = 12500;
let tier = "";
let discountRate = 0;

if (totalSpent >= 25000) {
  tier = "Platinum"; discountRate = 20;
} else if (totalSpent >= 10000) {
  tier = "Gold"; discountRate = 12;
} else if (totalSpent >= 5000) {
  tier = "Silver"; discountRate = 5;
} else {
  tier = "Bronze"; discountRate = 0;
}

console.log("Spent: Rs." + totalSpent + " => Member Tier: " + tier + " (" + discountRate + "% discount)");`,
    output: `Spent: Rs.12500 => Member Tier: Gold (12% discount)`,
    note: "Order matters! Start with the most restrictive condition down to the least restrictive."
  },
  commonMistakes: [
    {
      mistake: "Ordering conditions incorrectly in an else-if ladder",
      wrongCode: `let marks = 95;
if (marks >= 50) { // Matches first! Never reaches A+!
  console.log("Grade: Pass");
} else if (marks >= 90) {
  console.log("Grade: A+");
}`,
      correctCode: `let marks = 95;
if (marks >= 90) { // Check highest threshold first
  console.log("Grade: A+");
} else if (marks >= 50) {
  console.log("Grade: Pass");
}`,
      explanation: "Evaluation stops at the first true condition. Broader conditions must appear after more specific conditions."
    }
  ],
  importantPoints: [
    "Only the block of the *first* matching truthy condition will execute.",
    "If no condition evaluates to true, the final `else` block executes.",
    "Keep ladders concise; consider `switch` statements or object lookup tables if evaluating a single discrete variable against many values."
  ],
  interviewQuestions: [
    {
      question: "How can object lookups replace long else-if chains?",
      answer: "Instead of chaining 10 `else if` checks on a string key, an object dictionary (e.g. `const rates = { US: 5, UK: 7, IN: 2 }; return rates[country] ?? defaultRate;`) offers O(1) performance and cleaner, declarative code."
    }
  ],
  practiceExercises: [
    {
      problem: "Write an else-if ladder that categorizes traffic signal lights ('red' -> 'Stop', 'yellow' -> 'Prepare to Stop', 'green' -> 'Go', any other -> 'Invalid light').",
      hint: "Compare string values with `===`.",
      solution: `let light = "yellow";
if (light === "red") {
  console.log("Action: Stop immediately.");
} else if (light === "yellow") {
  console.log("Action: Slow down, prepare to stop.");
} else if (light === "green") {
  console.log("Action: Proceed safely.");
} else {
  console.log("Action: Signal malfunction / Unknown light.");
}`
    }
  ]
};

window.TOPIC_DATA_STORE["cond-ternary"] = {
  id: "cond-ternary",
  title: "Ternary Operator",
  lead: "Write clean, expressive, and compact conditional expressions using the ternary (? :) operator.",
  intro: "The ternary operator is JavaScript's only operator that takes three operands. It is frequently used for concise variable initialization and inline template logic.",
  definition: "A compact operator evaluating a condition and returning one of two values: `condition ? expressionIfTrue : expressionIfFalse`.",
  whyUse: "Saves lines of boilerplate code, can be embedded directly within template literals, return statements, and variable assignments.",
  syntax: `const result = condition ? exprIfTrue : exprIfFalse;`,
  syntaxExplanation: "If `condition` is truthy, `exprIfTrue` is evaluated and returned. If falsy, `exprIfFalse` is evaluated and returned.",
  simpleExample: `let speed = 75;
let speedStatus = speed > 60 ? "Over speeding!" : "Normal speed";
console.log(speedStatus);`,
  expectedOutput: `Over speeding!`,
  realLifeExample: {
    domain: "Restaurant Billing",
    title: "Complimentary Delivery Determination",
    scenario: "Applying delivery fee or free delivery tag in restaurant bill preview.",
    code: `let subtotal = 450;
let deliveryCost = subtotal >= 500 ? 0 : 50;

console.log("Order Subtotal: Rs." + subtotal);
console.log("Delivery Fee  : Rs." + deliveryCost + (deliveryCost === 0 ? " (Free Delivery)" : ""));
console.log("Total Payable : Rs." + (subtotal + deliveryCost));`,
    output: `Order Subtotal: Rs.450\nDelivery Fee  : Rs.50\nTotal Payable : Rs.500`
  },
  practicalExample: {
    title: "Inline Template Strings with Ternary",
    code: `let itemsCount = 1;
console.log(\`You have \${itemsCount} item\${itemsCount === 1 ? '' : 's'} in your cart.\`);

itemsCount = 3;
console.log(\`You have \${itemsCount} item\${itemsCount === 1 ? '' : 's'} in your cart.\`);`,
    output: `You have 1 item in your cart.\nYou have 3 items in your cart.`,
    note: "Ternary operators format plural words seamlessly within template literals."
  },
  commonMistakes: [
    {
      mistake: "Using ternary operator for complex multi-line actions without returning a value",
      wrongCode: `// Bad style: using ternary instead of an if statement for side effects
isLoggedIn ? (showDashboard(), logUser()) : (showLogin(), clearStorage());`,
      correctCode: `// Good style: use standard if-else for side effects
if (isLoggedIn) {
  showDashboard();
  logUser();
} else {
  showLogin();
  clearStorage();
}`,
      explanation: "Ternary operators are intended for returning expressions, not for running convoluted side-effect statements."
    }
  ],
  importantPoints: [
    "The ternary operator is an expression, not a statement.",
    "Parentheses around conditions are optional but greatly improve readability.",
    "Avoid nesting multiple ternary operators; it makes code brittle and difficult to debug."
  ],
  interviewQuestions: [
    {
      question: "Can you omit the `else` (false) branch in a ternary operator?",
      answer: "No. The ternary operator strictly requires both the `:` and the false branch expression. If you only want to execute on true, use `if` or short-circuit evaluation `condition && doSomething()`."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a one-line ternary expression that checks if a bank account balance is non-negative and returns 'Active', else 'Overdrawn'.",
      hint: "balance >= 0 ? ... : ...",
      solution: `let balance = -120;
let status = balance >= 0 ? "Active" : "Overdrawn";
console.log("Account Status: " + status);`
    }
  ]
};

window.TOPIC_DATA_STORE["cond-switch"] = {
  id: "cond-switch",
  title: "Switch Statement",
  lead: "Master multi-branch value matching, break statements, default cases, and fall-through behavior.",
  intro: "The `switch` statement evaluates an expression and matches its value against various `case` clauses, executing statements associated with the first match.",
  definition: "A multi-way branch statement that compares an expression against multiple discrete values using strict equality (`===`).",
  whyUse: "Clean, organized alternative to repetitive `if...else if` chains when comparing a single expression against known discrete values (e.g., status codes, days of week, menu options).",
  syntax: `switch (expression) {
  case value1:
    // statements
    break;
  case value2:
    // statements
    break;
  default:
    // fallback statements
}`,
  syntaxExplanation: "`switch` performs strict equality (`===`) checks against each `case`. The `break` statement exits the switch. If `break` is omitted, execution falls through into subsequent cases.",
  simpleExample: `let dayNumber = 3;
let dayName = "";

switch (dayNumber) {
  case 1: dayName = "Monday"; break;
  case 2: dayName = "Tuesday"; break;
  case 3: dayName = "Wednesday"; break;
  default: dayName = "Other Day";
}
console.log("Day:", dayName);`,
  expectedOutput: `Day: Wednesday`,
  realLifeExample: {
    domain: "Banking",
    title: "ATM Menu Transaction Routing",
    scenario: "Executing different banking procedures based on customer keypad option selection.",
    code: `let selectedOption = "BALANCE_INQUIRY";
let userBalance = 18450.00;

switch (selectedOption) {
  case "WITHDRAW":
    console.log("Please enter cash withdrawal amount.");
    break;
  case "DEPOSIT":
    console.log("Please insert currency into the deposit slot.");
    break;
  case "BALANCE_INQUIRY":
    console.log("Your current available balance is: Rs." + userBalance);
    break;
  case "MINI_STATEMENT":
    console.log("Printing last 5 transactions...");
    break;
  default:
    console.log("Invalid option selected. Please choose from main menu.");
}`,
    output: `Your current available balance is: Rs.18450`
  },
  practicalExample: {
    title: "Intentional Case Fall-Through",
    code: `let day = "Saturday";
let dayType = "";

switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    dayType = "Weekday (Workday)";
    break;
  case "Saturday":
  case "Sunday":
    dayType = "Weekend (Rest Day)";
    break;
  default:
    dayType = "Invalid Day";
}
console.log(day + " is a " + dayType);`,
    output: `Saturday is a Weekend (Rest Day)`,
    note: "Omitting break between matching cases groups them under a shared action."
  },
  commonMistakes: [
    {
      mistake: "Forgetting the break statement accidentally",
      wrongCode: `let tier = "Silver";
switch (tier) {
  case "Silver":
    console.log("Silver benefits"); // Executes!
  case "Gold":
    console.log("Gold benefits");   // ACCIDENTALLY executes due to missing break!
}`,
      correctCode: `let tier = "Silver";
switch (tier) {
  case "Silver":
    console.log("Silver benefits");
    break;
  case "Gold":
    console.log("Gold benefits");
    break;
}`,
      explanation: "Without `break`, execution continues unconditionally into the next case regardless of whether that case matches."
    }
  ],
  importantPoints: [
    "`switch` uses strict equality (`===`), so `case '5':` will NOT match the number `5`.",
    "`default` can be placed anywhere, but is conventionally located at the end.",
    "Block-scoped variables declared with `let` inside a switch must be enclosed in curly braces `{}` within cases."
  ],
  interviewQuestions: [
    {
      question: "How does comparison in a switch statement differ from if (x == y)?",
      answer: "`switch` performs strict equality (`===`) checks without type coercion. For instance, `case '10'` will never match numeric `10`."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a switch statement taking an HTTP status code (200, 400, 404, 500) and printing appropriate messages ('OK', 'Bad Request', 'Not Found', 'Internal Server Error').",
      hint: "Use case 200: ... break;",
      solution: `let httpStatus = 404;
switch (httpStatus) {
  case 200: console.log("200: OK"); break;
  case 400: console.log("400: Bad Request"); break;
  case 404: console.log("404: Not Found"); break;
  case 500: console.log("500: Internal Server Error"); break;
  default:  console.log(httpStatus + ": Unrecognized HTTP Code");
}`
    }
  ]
};

window.TOPIC_DATA_STORE["cond-booleans"] = {
  id: "cond-booleans",
  title: "Booleans",
  lead: "Master boolean primitive values (true and false), Boolean() constructor, truthy and falsy semantics.",
  intro: "A JavaScript Boolean represents one of two values: `true` or `false`. Booleans are at the heart of all logic, loops, comparisons, and conditional operations.",
  definition: "A primitive data type in JavaScript having one of two literal values: `true` or `false`.",
  whyUse: "Flags, state toggles (modal open/closed, sound muted/unmuted, user active/inactive) and condition results require boolean types.",
  syntax: `let isActive = true;
let hasAccess = false;
let isTruthy = Boolean(expression);`,
  syntaxExplanation: "`Boolean()` converts any value into its boolean equivalent according to JavaScript truthy/falsy conversion rules.",
  simpleExample: `console.log(Boolean("Hello")); // true (non-empty string)
console.log(Boolean(""));      // false (empty string)
console.log(Boolean(0));       // false
console.log(Boolean(-1));      // true`,
  expectedOutput: `true\nfalse\nfalse\ntrue`,
  realLifeExample: {
    domain: "Attendance Management",
    title: "Biometric Verification State",
    scenario: "Tracking security clearance status for biometric entry turnstiles.",
    code: `let isBadgeScanned = true;
let isPinValid = true;
let isSuspended = false;

let accessGranted = isBadgeScanned && isPinValid && !isSuspended;

console.log("Badge Valid?     " + isBadgeScanned);
console.log("PIN Verified?    " + isPinValid);
console.log("Account Active?  " + !isSuspended);
console.log("Turnstile Open?  " + accessGranted);`,
    output: `Badge Valid?     true\nPIN Verified?    true\nAccount Active?  true\nTurnstile Open?  true`
  },
  practicalExample: {
    title: "Double NOT (!!) Shorthand for Boolean Casting",
    code: `let userToken = "eyJhbGciOiJIUzI1Ni...";
let isAuthenticated = !!userToken;

let emptyField = "";
let hasContent = !!emptyField;

console.log("Authenticated:", isAuthenticated);
console.log("Has Content:  ", hasContent);`,
    output: `Authenticated: true\nHas Content:   false`,
    note: "The `!!` idiom casts any value to a strict boolean primitive."
  },
  commonMistakes: [
    {
      mistake: "Creating Boolean wrapper objects with `new Boolean(false)`",
      wrongCode: `let flag = new Boolean(false);
if (flag) { // Executes! Because all objects are truthy in JS!
  console.log("This prints even though value is false!");
}`,
      correctCode: `let flag = false; // Always use primitive boolean literals
if (flag) {
  console.log("Will not print");
}`,
      explanation: "`new Boolean(false)` creates an Object, and all objects in JavaScript evaluate to truthy in boolean context."
    }
  ],
  importantPoints: [
    "Only 8 values are falsy in JS: `false`, `0`, `-0`, `0n`, `''`, `null`, `undefined`, `NaN`.",
    "The string `'false'` is TRUTHY because it is a non-empty string!",
    "`Boolean()` without `new` produces a primitive boolean value."
  ],
  interviewQuestions: [
    {
      question: "Why does `Boolean('false')` evaluate to true?",
      answer: "In JavaScript, any non-empty string is converted to `true` by truthy evaluation. The characters inside the string are irrelevant; only an empty string `''` converts to `false`."
    }
  ],
  practiceExercises: [
    {
      problem: "Predict and test the boolean values of: `Boolean([])`, `Boolean({})`, `Boolean(0)`, `Boolean('0')`.",
      hint: "Objects and non-empty strings are truthy; zero is falsy.",
      solution: `console.log("[]  :", Boolean([]));   // true
console.log("{}  :", Boolean({}));   // true
console.log("0   :", Boolean(0));    // false
console.log("'0' :", Boolean('0'));  // true`
    }
  ]
};

window.TOPIC_DATA_STORE["cond-logical"] = {
  id: "cond-logical",
  title: "Logical Operators",
  lead: "Master logical AND (&&), OR (||), NOT (!), short-circuit evaluation, and default assignments.",
  intro: "Logical operators connect boolean expressions together. In JavaScript, `&&` and `||` do not necessarily return booleans—they return the actual value of one of their operands via short-circuit evaluation.",
  definition: "Operators used to perform logical operations on values or expressions: AND (`&&`), OR (`||`), and NOT (`!`).",
  whyUse: "Validating complex multi-field criteria, verifying preconditions, providing fallback values, and conditionally executing callbacks.",
  syntax: `expr1 && expr2; // Logical AND: returns expr2 if expr1 truthy, else expr1
expr1 || expr2; // Logical OR: returns expr1 if expr1 truthy, else expr2
!expr;          // Logical NOT: inverts boolean truthiness`,
  syntaxExplanation: "In short-circuiting: `&&` halts at the first falsy operand; `||` halts at the first truthy operand.",
  simpleExample: `console.log(true && false); // false
console.log(true || false); // true
console.log(!true);         // false
console.log("Cat" && "Dog");// "Dog"
console.log("" || "Guest"); // "Guest"`,
  expectedOutput: `false\ntrue\nfalse\nDog\nGuest`,
  realLifeExample: {
    domain: "E-commerce",
    title: "Checkout Validation Rules",
    scenario: "Authorizing order checkout only when cart has items, stock exists, and delivery address is confirmed.",
    code: `let cartItemCount = 3;
let allItemsInStock = true;
let isAddressConfirmed = true;
let isAccountFlaggedForFraud = false;

let canCheckout = (cartItemCount > 0) && allItemsInStock && isAddressConfirmed && !isAccountFlaggedForFraud;

console.log("Checkout Permitted? " + canCheckout);`,
    output: `Checkout Permitted? true`
  },
  practicalExample: {
    title: "Short-Circuit Guard Evaluation",
    code: `let user = {
  name: "Amit",
  logActivity: function(msg) { console.log(this.name + ": " + msg); }
};

// Safe invocation: checks if function exists before executing
user && user.logActivity && user.logActivity("Logged in at 10 AM");`,
    output: `Amit: Logged in at 10 AM`,
    note: "Short-circuit `&&` acts as a guard condition before running methods."
  },
  commonMistakes: [
    {
      mistake: "Using || when 0 or empty string is a valid business value",
      wrongCode: `let score = 0; // Valid test score of zero
let displayScore = score || 100; // Bug: evaluates 0 as falsy, displaying 100!
console.log(displayScore);`,
      correctCode: `let score = 0;
let displayScore = score ?? 100; // Correct: ?? checks only null/undefined
console.log(displayScore);`,
      explanation: "`||` treats `0` as falsy, unintentionally triggering the fallback. Use nullish coalescing `??` when `0` is a valid input."
    }
  ],
  importantPoints: [
    "Logical AND (`&&`) has higher operator precedence than Logical OR (`||`).",
    "`&&` returns the first falsy value, or the last value if all are truthy.",
    "`||` returns the first truthy value, or the last value if all are falsy."
  ],
  interviewQuestions: [
    {
      question: "What is Short-Circuit evaluation in JavaScript?",
      answer: "Short-circuit evaluation means JavaScript stops evaluating an expression as soon as the outcome is guaranteed. In `A && B`, if `A` is falsy, `B` is never evaluated. In `A || B`, if `A` is truthy, `B` is never evaluated."
    }
  ],
  practiceExercises: [
    {
      problem: "Write an expression using `&&` and `||` that checks if an employee is eligible for bonus: (Years worked > 2 OR Sales > 500000) AND (Disciplinary strikes === 0).",
      hint: "Use grouping parentheses: `(years > 2 || sales > 500000) && strikes === 0`.",
      solution: `let years = 3;
let sales = 420000;
let strikes = 0;
let bonusEligible = (years > 2 || sales > 500000) && (strikes === 0);
console.log("Bonus Eligible:", bonusEligible);`
    }
  ]
};
