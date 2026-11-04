/* ==========================================================================
   PART 1: JavaScript Fundamentals - Comprehensive Topics Data
   ========================================================================== */

window.TOPIC_DATA_STORE = window.TOPIC_DATA_STORE || {};

window.TOPIC_DATA_STORE["js-home"] = {
  id: "js-home",
  title: "JavaScript Home",
  lead: "Welcome to the JS Learning Hub! JavaScript is the world's most popular programming language, powering interactive web pages, servers, mobile apps, and enterprise systems.",
  intro: "JavaScript is the programming language of the Web. It is easy to learn and incredibly versatile. Alongside HTML and CSS, it forms the core foundation of modern web technologies.",
  definition: "JavaScript (JS) is a high-level, interpreted or Just-In-Time (JIT) compiled, multi-paradigm programming language with dynamic typing, prototype-based object-orientation, and first-class functions.",
  whyUse: "JavaScript transforms static HTML/CSS web pages into interactive, dynamic digital experiences. It runs natively in every modern web browser without any plugins or complex setup.",
  syntax: "// Basic JavaScript structure\nconsole.log('Welcome to JS Learning Hub!');",
  syntaxExplanation: "`console.log()` is a built-in JavaScript method that prints messages or variable values directly to the browser debugging console or terminal.",
  simpleExample: `let greeting = "Hello, JavaScript Learner!";
console.log(greeting);`,
  expectedOutput: `Hello, JavaScript Learner!`,
  realLifeExample: {
    domain: "Student Management",
    title: "Student Portal Welcome Message",
    scenario: "Displaying a personalized welcome message and current semester information on a university student portal dashboard.",
    code: `let studentName = "Aarav Sharma";
let course = "Full Stack Web Development";
let semester = 3;

console.log("Welcome back, " + studentName + "!");
console.log("Enrolled Course: " + course);
console.log("Current Semester: " + semester);`,
    output: `Welcome back, Aarav Sharma!
Enrolled Course: Full Stack Web Development
Current Semester: 3`
  },
  practicalExample: {
    title: "Greeting Based on Time of Day",
    code: `let currentHour = 14; // 2:00 PM
let welcomeMsg = currentHour < 12 ? "Good Morning" : "Good Afternoon";
console.log(welcomeMsg + ", welcome to JavaScript training!");`,
    output: `Good Afternoon, welcome to JavaScript training!`,
    note: "Ternary operators allow quick condition checking to render dynamic greetings."
  },
  commonMistakes: [
    {
      mistake: "Confusing Java with JavaScript",
      wrongCode: `// Java and JavaScript are NOT the same language!
// Java is statically typed, compiled to bytecode for the JVM.`,
      correctCode: `// JavaScript is dynamically typed, executed natively in browsers or Node.js.
console.log("JavaScript runs directly in modern browsers!");`,
      explanation: "JavaScript was named to ride on Java's marketing popularity in 1995, but their syntax, runtime models, and designs are completely distinct."
    }
  ],
  importantPoints: [
    "JavaScript was created in 1995 by Brendan Eich at Netscape in just 10 days.",
    "ECMAScript (ES) is the official standard specification; JavaScript is the implementation.",
    "Modern JavaScript can run both on the client-side (browsers) and server-side (Node.js, Deno, Bun).",
    "JS is single-threaded and event-driven with non-blocking I/O via the Event Loop."
  ],
  interviewQuestions: [
    {
      question: "What is the difference between ECMAScript and JavaScript?",
      answer: "ECMAScript is the standard specification maintained by ECMA International (TC39 committee) that defines the language rules. JavaScript is a concrete programming language that implements the ECMAScript standard along with browser Web APIs."
    },
    {
      question: "Is JavaScript an interpreted or compiled language?",
      answer: "Modern JavaScript uses Just-In-Time (JIT) compilation. Engines like Google V8 parse source code into an Abstract Syntax Tree (AST), compile it into bytecode, and optimize hot code into machine code on the fly."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a program that stores your name, favorite programming language, and goal in variables, then logs them in one readable sentence.",
      hint: "Use `let` keyword and string concatenation with `+` or backticks.",
      solution: `let name = "Rohan";
let language = "JavaScript";
let goal = "become an expert Full Stack Engineer";
console.log(\`Hi, my name is \${name}. I am mastering \${language} to \${goal}!\`);`
    }
  ]
};

window.TOPIC_DATA_STORE["js-intro"] = {
  id: "js-intro",
  title: "JavaScript Introduction",
  lead: "Discover what JavaScript is, its rich history, how it works under the hood, and how it powers modern internet applications.",
  intro: "JavaScript is the engine of the web. While HTML provides the structural skeleton and CSS provides aesthetic styling, JavaScript brings logic, behavior, interactivity, and life to web applications.",
  definition: "JavaScript is a lightweight, cross-platform, single-threaded, weakly typed, dynamic programming language equipped with first-class functions and prototype-based object model.",
  whyUse: "Without JavaScript, websites are static documents. JavaScript enables dynamic content updates, interactive forms, animations, data fetching from remote servers, and rich UI interactions without page reloads.",
  syntax: `// Declaring a function and invoking it
function greetUser(username) {
  return "Welcome, " + username;
}
console.log(greetUser("Keerti"));`,
  syntaxExplanation: "The `function` keyword declares reusable blocks of executable logic that can accept parameters and return output values.",
  simpleExample: `let appName = "JS Learning Hub";
let totalLessons = 243;
console.log("App: " + appName);
console.log("Lessons: " + totalLessons);`,
  expectedOutput: `App: JS Learning Hub\nLessons: 243`,
  realLifeExample: {
    domain: "Banking",
    title: "Account Balance Notification",
    scenario: "Calculating account balance after a deposit transaction and alerting the customer.",
    code: `let currentBalance = 5420.50;
let depositAmount = 1200.00;
let newBalance = currentBalance + depositAmount;

console.log("Transaction Type: Credit");
console.log("Deposited Amount: $" + depositAmount);
console.log("Updated Account Balance: $" + newBalance);`,
    output: `Transaction Type: Credit\nDeposited Amount: $1200\nUpdated Account Balance: $6620.5`
  },
  practicalExample: {
    title: "E-Commerce Discount Calculator",
    code: `let productPrice = 2500;
let discountPercent = 15;
let discountAmount = (productPrice * discountPercent) / 100;
let finalPrice = productPrice - discountAmount;

console.log("Original: Rs. " + productPrice);
console.log("Discount: Rs. " + discountAmount);
console.log("Final Payable: Rs. " + finalPrice);`,
    output: `Original: Rs. 2500\nDiscount: Rs. 375\nFinal Payable: Rs. 2125`,
    note: "Arithmetic operators in JavaScript calculate dynamic values instantly."
  },
  commonMistakes: [
    {
      mistake: "Treating numbers and strings identically during addition",
      wrongCode: `let price = "100";
let tax = 18;
console.log(price + tax); // Result is "10018" (String concatenation!)`,
      correctCode: `let price = "100";
let tax = 18;
console.log(Number(price) + tax); // Result is 118 (Numeric addition)`,
      explanation: "The `+` operator performs string concatenation if any operand is a string. Explicitly convert strings to numbers using `Number()` or `parseInt()`."
    }
  ],
  importantPoints: [
    "JavaScript runs in client environments (browsers like Chrome, Firefox, Safari) and server environments (Node.js).",
    "ECMAScript 6 (ES6 / ES2015) introduced modern features like arrow functions, classes, let/const, promises, and modules.",
    "JavaScript is backward compatible: older JS code continues to run on modern browsers."
  ],
  interviewQuestions: [
    {
      question: "What are the core features of JavaScript?",
      answer: "Dynamic typing, prototype-based inheritance, first-class functions (functions can be passed as arguments, assigned to variables, and returned), event-driven asynchronous model, and widespread platform support."
    },
    {
      question: "What is the role of JavaScript engine in browsers?",
      answer: "The JavaScript engine (such as Google V8, SpiderMonkey, or JavaScriptCore) reads, parses, compiles, optimizes, and executes JavaScript code into machine code for the host CPU."
    }
  ],
  practiceExercises: [
    {
      problem: "Calculate the total bill for a restaurant order: 2 Burgers at Rs. 150 each, 1 Fries at Rs. 90, with 5% GST added.",
      hint: "Multiply quantities by prices, calculate 5% tax, and sum the amounts.",
      solution: `let burgers = 2 * 150;
let fries = 1 * 90;
let subtotal = burgers + fries;
let gst = subtotal * 0.05;
let grandTotal = subtotal + gst;
console.log("Subtotal: Rs. " + subtotal);
console.log("GST (5%): Rs. " + gst);
console.log("Grand Total: Rs. " + grandTotal);`
    }
  ]
};

window.TOPIC_DATA_STORE["where-to"] = {
  id: "where-to",
  title: "Where To Write JavaScript",
  lead: "Understand internal scripts, external JS files, inline event handlers, and best placement practices within HTML documents.",
  intro: "JavaScript can be embedded directly within HTML documents or maintained in separate external `.js` files. Knowing where and how to include scripts is vital for web page performance and clean code architecture.",
  definition: "JavaScript code is integrated into HTML via the `<script>` tag, either as inline code between `<script>...</script>` or referenced through the `src` attribute `<script src='app.js'></script>`.",
  whyUse: "Separating JavaScript into external files promotes modularity, browser caching, code reusability across multiple HTML pages, and cleaner team collaboration.",
  syntax: `<!-- Internal JavaScript in HTML -->
<script>
  console.log("Running inline script");
</script>

<!-- External JavaScript File -->
<script src="js/script.js" defer></script>`,
  syntaxExplanation: "The `src` attribute specifies the URL or relative path of an external file. The `defer` attribute tells the browser to parse HTML concurrently and execute JS only after the DOM is fully constructed.",
  simpleExample: `// Sample content in external app.js
let siteName = "JS Learning Hub";
console.log("Loaded external script for: " + siteName);`,
  expectedOutput: `Loaded external script for: JS Learning Hub`,
  realLifeExample: {
    domain: "E-commerce",
    title: "Optimized Script Loading for Shopping Cart",
    scenario: "Loading analytics, payment gateways, and shopping cart logic efficiently without blocking hero banners.",
    code: `// Simulating deferred execution
console.log("1. DOM elements loaded");
console.log("2. External cart script executed with defer");
console.log("3. Checkout button initialized");`,
    output: `1. DOM elements loaded\n2. External cart script executed with defer\n3. Checkout button initialized`
  },
  practicalExample: {
    title: "Placement Before Closing Body Tag",
    code: `// Placing scripts before </body> ensures DOM elements exist
let elementExists = true;
if (elementExists) {
  console.log("DOM is ready. Safe to bind event listeners!");
}`,
    output: `DOM is ready. Safe to bind event listeners!`,
    note: "Always place scripts either before the closing `</body>` tag or in the `<head>` with the `defer` keyword."
  },
  commonMistakes: [
    {
      mistake: "Accessing HTML elements in `<head>` before the DOM has loaded",
      wrongCode: `<!-- Inside <head> without defer -->
<script>
  // Throws: Cannot read properties of null (reading 'addEventListener')
  document.getElementById("myBtn").addEventListener("click", run);
</script>`,
      correctCode: `<!-- Using defer in <head> -->
<script src="app.js" defer></script>
<!-- Or listening for DOMContentLoaded -->
<script>
  document.addEventListener("DOMContentLoaded", () => {
    console.log("Document ready!");
  });
</script>`,
      explanation: "If a script runs before the browser parses the HTML elements, element lookups return `null`."
    }
  ],
  importantPoints: [
    "External scripts cannot contain `<script>` tags inside the `.js` file.",
    "External scripts are cached by web browsers, reducing page load times on subsequent visits.",
    "`async` executes scripts immediately once downloaded (out of order), while `defer` executes scripts in document order after HTML parsing completes."
  ],
  interviewQuestions: [
    {
      question: "What is the difference between `async` and `defer` attributes in `<script>`?",
      answer: "`async` downloads the script asynchronously and executes it the moment download completes, potentially blocking HTML parsing. `defer` downloads asynchronously but guarantees execution only after HTML parsing is complete, preserving script execution order."
    }
  ],
  practiceExercises: [
    {
      problem: "Explain where you should place a Google Analytics tracking script versus your main interactive application script.",
      hint: "Analytics usually runs asynchronously in `<head>` with `async`, while interactive app logic uses `defer`.",
      solution: `// Analytics: <script async src="https://analytics.example.com/tag.js"></script>
// Main App: <script defer src="js/app.js"></script>
console.log("Analytics runs async; core business UI runs with defer.");`
    }
  ]
};

window.TOPIC_DATA_STORE["js-output"] = {
  id: "js-output",
  title: "JavaScript Output",
  lead: "Master all methods to display and inspect data in JavaScript: console, innerHTML, document.write(), window.alert(), and textContent.",
  intro: "JavaScript does not have built-in print functions like other languages. Instead, it interacts with browser interfaces, web consoles, and HTML elements to display data.",
  definition: "JavaScript output mechanisms are APIs provided by the browser environment (`console`, `document`, `window`) to render values for users or developers.",
  whyUse: "Displaying output is necessary for rendering user interfaces, informing users of status, debugging errors, and inspecting variables during development.",
  syntax: `// 1. Browser Console
console.log("Developer Output");

// 2. Modifying HTML element content
// document.getElementById("demo").innerHTML = "Hello";

// 3. User Alert Dialog
// window.alert("Alert Message");`,
  syntaxExplanation: "`console.log()` is used for debugging; `element.innerHTML` or `element.textContent` updates HTML content; `window.alert()` creates a modal popup.",
  simpleExample: `let score = 95;
console.log("Test Score:", score);
console.info("Status: Passed with Distinction");`,
  expectedOutput: `Test Score: 95\nStatus: Passed with Distinction`,
  realLifeExample: {
    domain: "Attendance Management",
    title: "Employee Clock-in Confirmation",
    scenario: "Formatting and logging an employee's daily clock-in confirmation record.",
    code: `let empId = "EMP-1042";
let empName = "Priya Sen";
let timeStamp = "09:02:15 AM";
let status = "Present (On-Time)";

console.log("=== ATTENDANCE PUNCH RECORD ===");
console.log("Employee ID   : " + empId);
console.log("Name          : " + empName);
console.log("Clock-In Time : " + timeStamp);
console.log("Status        : " + status);`,
    output: `=== ATTENDANCE PUNCH RECORD ===
Employee ID   : EMP-1042
Name          : Priya Sen
Clock-In Time : 09:02:15 AM
Status        : Present (On-Time)`
  },
  practicalExample: {
    title: "Console Logging Object Tables",
    code: `let students = [
  { id: 101, name: "Suresh", marks: 88 },
  { id: 102, name: "Anita", marks: 94 }
];
console.log("Total Students: " + students.length);
students.forEach(s => console.log(s.id + " | " + s.name + " | " + s.marks));`,
    output: `Total Students: 2\n101 | Suresh | 88\n102 | Anita | 94`,
    note: "`console.table()` can also be used in browser developer tools for tabular display."
  },
  commonMistakes: [
    {
      mistake: "Using document.write() after an HTML document has finished loading",
      wrongCode: `// Calling document.write() in an event listener
button.onclick = function() {
  document.write("This completely overwrites the whole page!");
};`,
      correctCode: `button.onclick = function() {
  outputElement.textContent = "Updates specific element safely!";
};`,
      explanation: "`document.write()` clears and completely deletes the existing HTML document if executed after the document is loaded."
    }
  ],
  importantPoints: [
    "`console.log()` is non-blocking and safe for production debugging (though should be cleaned up).",
    "`textContent` is faster and safer than `innerHTML` when inserting plain text because it prevents XSS (Cross-Site Scripting) attacks.",
    "`window.alert()` halts JavaScript thread execution until the user clicks OK."
  ],
  interviewQuestions: [
    {
      question: "What is the security difference between innerHTML and textContent?",
      answer: "`innerHTML` parses string content as HTML, meaning unsanitized user input can inject malicious `<script>` tags or inline handlers (XSS vulnerabilities). `textContent` inserts strings strictly as plain text without parsing HTML tags."
    }
  ],
  practiceExercises: [
    {
      problem: "Write code to log an invoice receipt with product name, quantity, unit price, and total amount formatted cleanly.",
      hint: "Use console.log with formatted strings.",
      solution: `let item = "Wireless Mouse";
let qty = 2;
let unitPrice = 450;
let total = qty * unitPrice;
console.log(\`INVOICE: \${item} x \${qty} @ Rs.\${unitPrice} = Rs.\${total}\`);`
    }
  ]
};

window.TOPIC_DATA_STORE["js-syntax"] = {
  id: "js-syntax",
  title: "JavaScript Syntax",
  lead: "Learn the foundational grammar, lexical conventions, casing rules, literals, and keywords of JavaScript.",
  intro: "JavaScript syntax is the set of rules defining how JavaScript programs are constructed and interpreted. It borrows heavy grammatical style from C and Java.",
  definition: "JavaScript syntax encompasses tokens, keywords, identifiers, literals, operators, expressions, and statements that make up valid JavaScript source code.",
  whyUse: "Proper syntax ensures that the JavaScript engine can parse and execute code without throwing `SyntaxError` exceptions.",
  syntax: `// Variable declaration & assignment
let variableName = value;

// Function syntax
function functionName(param1, param2) {
  return param1 + param2;
}`,
  syntaxExplanation: "Variables are defined with `let`, `const`, or `var`. Identifiers must start with a letter, underscore (`_`), or dollar sign (`$`). JavaScript is strictly case-sensitive.",
  simpleExample: `let x = 10;
let y = 20;
let sum = x + y;
console.log("Sum: " + sum);`,
  expectedOutput: `Sum: 30`,
  realLifeExample: {
    domain: "Restaurant Billing",
    title: "Table Order Syntax Validation",
    scenario: "Declaring order items with clean camelCase naming conventions and calculating table bill.",
    code: `let tableNumber = 4;
let dishName = "Paneer Tikka";
let dishQuantity = 2;
let pricePerDish = 220;

let tableBill = dishQuantity * pricePerDish;
console.log("Table #" + tableNumber + " ordered " + dishQuantity + "x " + dishName);
console.log("Total Amount: Rs. " + tableBill);`,
    output: `Table #4 ordered 2x Paneer Tikka\nTotal Amount: Rs. 440`
  },
  practicalExample: {
    title: "Case Sensitivity in JavaScript",
    code: `let studentName = "Vikram";
let StudentName = "Neha";

console.log("studentName: " + studentName);
console.log("StudentName: " + StudentName);`,
    output: `studentName: Vikram\nStudentName: Neha`,
    note: "JavaScript treats `studentName` and `StudentName` as two completely distinct identifiers."
  },
  commonMistakes: [
    {
      mistake: "Starting variable names with numbers or reserved keywords",
      wrongCode: `let 1stPlace = "Gold"; // SyntaxError: Invalid or unexpected token
let default = 100;     // SyntaxError: Unexpected token 'default'`,
      correctCode: `let firstPlace = "Gold";
let defaultValue = 100;`,
      explanation: "Variable names cannot begin with numerals and cannot reuse reserved language keywords like `default`, `class`, `function`, or `return`."
    }
  ],
  importantPoints: [
    "JavaScript uses camelCase naming convention for variables and functions (e.g., `calculateTotalAmount`).",
    "PascalCase is reserved for Classes and Constructor functions (e.g., `StudentManager`).",
    "Semicolons are optional due to Automatic Semicolon Insertion (ASI), but explicitly including them prevents subtle bugs."
  ],
  interviewQuestions: [
    {
      question: "What is Automatic Semicolon Insertion (ASI) in JavaScript?",
      answer: "ASI is a JavaScript engine feature that automatically inserts semicolons at line breaks where a statement appears complete. However, relying on it can lead to bugs, especially with `return` statements followed by a newline."
    }
  ],
  practiceExercises: [
    {
      problem: "Correct the syntax errors in this snippet: `let user-name = 'Karan'; let 2ndAge = 25;`",
      hint: "Hyphens are parsed as subtraction, and variable names cannot begin with digits.",
      solution: `let userName = 'Karan'; // camelCase without hyphen
let secondAge = 25;     // Starts with letter
console.log(userName + " is " + secondAge);`
    }
  ]
};

window.TOPIC_DATA_STORE["js-statements"] = {
  id: "js-statements",
  title: "JavaScript Statements",
  lead: "Master JavaScript instructions, statement types, execution order, and code blocks.",
  intro: "A computer program is a list of 'instructions' to be executed by a computer. In a programming language, these programming instructions are called statements.",
  definition: "A JavaScript statement is a command that performs an action. Statements are separated by semicolons and executed sequentially from top to bottom.",
  whyUse: "Statements give structure to code, managing control flow, variable bindings, function calls, conditional branches, and iterative execution.",
  syntax: `let a, b, c;  // Statement 1: Declaration
a = 5;        // Statement 2: Assignment
b = 10;       // Statement 3: Assignment
c = a + b;    // Statement 4: Arithmetic computation`,
  syntaxExplanation: "Each statement is evaluated in sequence. Code blocks wrapped inside curly braces `{ ... }` group multiple statements together.",
  simpleExample: `let firstName = "Deepa";
let lastName = "Kaur";
let fullName = firstName + " " + lastName;
console.log("Full Name: " + fullName);`,
  expectedOutput: `Full Name: Deepa Kaur`,
  realLifeExample: {
    domain: "Banking",
    title: "ATM Cash Withdrawal Sequence",
    scenario: "A sequence of banking statements verifying balance, deducting cash, and issuing a transaction receipt.",
    code: `let balance = 10000;
let withdrawalAmount = 3000;

console.log("Initiating withdrawal of Rs. " + withdrawalAmount);
if (withdrawalAmount <= balance) {
  balance = balance - withdrawalAmount;
  console.log("Cash dispensed successfully!");
  console.log("Remaining Balance: Rs. " + balance);
} else {
  console.log("Insufficient funds!");
}`,
    output: `Initiating withdrawal of Rs. 3000\nCash dispensed successfully!\nRemaining Balance: Rs. 7000`
  },
  practicalExample: {
    title: "Code Blocks with Let Scope",
    code: `{
  let blockVariable = "Inside Block";
  console.log(blockVariable);
}
// blockVariable is not accessible outside this block`,
    output: `Inside Block`,
    note: "Curly braces define block boundaries for statements and block-scoped variables."
  },
  commonMistakes: [
    {
      mistake: "Placing a newline immediately after return statement",
      wrongCode: `function getProduct() {
  return
  {
    name: "Laptop"
  };
}
console.log(getProduct()); // Returns undefined due to ASI!`,
      correctCode: `function getProduct() {
  return {
    name: "Laptop"
  };
}
console.log(getProduct()); // Returns { name: 'Laptop' }`,
      explanation: "ASI places a semicolon right after `return`, causing the function to terminate early and return `undefined`."
    }
  ],
  importantPoints: [
    "JavaScript statements can be grouped into blocks using curly braces `{}`.",
    "Statements typically end with a semicolon `;`.",
    "Multiple statements can be written on one line if separated by semicolons, though one statement per line is best practice."
  ],
  interviewQuestions: [
    {
      question: "What is the difference between an Expression and a Statement in JavaScript?",
      answer: "An expression produces or evaluates to a value (e.g., `5 + 3`, `Math.random()`, `x === y`). A statement performs an action or instruction (e.g., `if (...)`, `for (...)`, `let x = 10;`). Expressions can be part of statements."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a block of statements that initializes an employee salary, adds a 10% bonus, and prints the gross pay.",
      hint: "Declare baseSalary, calculate bonus, add and print.",
      solution: `let baseSalary = 50000;
let bonusPercentage = 0.10;
let bonus = baseSalary * bonusPercentage;
let grossSalary = baseSalary + bonus;
console.log("Base: Rs." + baseSalary + ", Bonus: Rs." + bonus + ", Gross: Rs." + grossSalary);`
    }
  ]
};

window.TOPIC_DATA_STORE["js-comments"] = {
  id: "js-comments",
  title: "JavaScript Comments",
  lead: "Master single-line, multi-line, and JSDoc documentation comments in JavaScript.",
  intro: "Comments in JavaScript explain code logic, document functions, make code maintainable, and allow developers to temporarily disable code during debugging.",
  definition: "JavaScript comments are lines of text ignored by the JavaScript engine during parsing and execution.",
  whyUse: "Clean comments save hundreds of debugging hours, explain complex business algorithms, and allow automated documentation generators (like JSDoc) to produce API docs.",
  syntax: `// 1. Single-line comment

/* 
   2. Multi-line comment
   spanning multiple lines
*/

/**
 * 3. JSDoc documentation comment
 * @param {string} user
 * @returns {string}
 */`,
  syntaxExplanation: "`//` comments out everything until the end of that specific line. `/* ... */` comments out blocks of code across multiple lines.",
  simpleExample: `// Declare student score
let studentScore = 85; 

/* Check if student passed
   Passing criteria is 40 or above */
let isPassed = studentScore >= 40;
console.log("Passed:", isPassed);`,
  expectedOutput: `Passed: true`,
  realLifeExample: {
    domain: "Employee Management",
    title: "Payroll Calculation Documentation",
    scenario: "Documenting complex overtime tax deductions so team members understand compliance regulations.",
    code: `// Base hourly pay rate in INR
const HOURLY_RATE = 500;

/* Overtime policy:
   Hours worked above 40 in a week receive 1.5x the standard rate.
*/
let hoursWorked = 48;
let standardHours = 40;
let overtimeHours = hoursWorked - standardHours;

let regularPay = standardHours * HOURLY_RATE;
let overtimePay = overtimeHours * (HOURLY_RATE * 1.5);
let totalPayout = regularPay + overtimePay;

console.log("Regular Pay: Rs. " + regularPay);
console.log("Overtime Pay: Rs. " + overtimePay);
console.log("Total Payout: Rs. " + totalPayout);`,
    output: `Regular Pay: Rs. 20000\nOvertime Pay: Rs. 6000\nTotal Payout: Rs. 26000`
  },
  practicalExample: {
    title: "Commenting Out Code During Testing",
    code: `let debugMode = true;
// console.log("Verbose logging enabled"); // Temporarily disabled
console.log("System operational. Debug:", debugMode);`,
    output: `System operational. Debug: true`,
    note: "Use comments to isolate buggy code segments without deleting them."
  },
  commonMistakes: [
    {
      mistake: "Nesting multi-line comments",
      wrongCode: `/* Outer comment
   /* Inner comment */
   Causes SyntaxError!
*/`,
      correctCode: `// Outer comment
// Inner comment handled with line comments
let active = true;`,
      explanation: "JavaScript does not support nested `/* /* */ */` block comments; the first `*/` closes the comment immediately."
    }
  ],
  importantPoints: [
    "Comments do not increase production bundle size if minification tools (like Terser/Vite/Webpack) strip them during build.",
    "Write comments explaining *why* the code does something, not *what* it does (the code should be self-explanatory).",
    "JSDoc comments enable IDEs to provide rich type hints and auto-completion."
  ],
  interviewQuestions: [
    {
      question: "What is JSDoc and how does it help JavaScript developers?",
      answer: "JSDoc is an API documentation specification for JavaScript. Using `/** ... */` annotations such as `@param`, `@returns`, `@type`, and `@deprecated`, modern editors (VS Code) infer types, provide hover tooltips, and catch type mismatches without requiring TypeScript."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a function calculating simple interest with complete JSDoc comments explaining principal, rate, and time parameters.",
      hint: "Use /** with @param and @returns tags.",
      solution: `/**
 * Calculates simple interest for loans.
 * @param {number} principal - Loan amount in INR
 * @param {number} rate - Annual interest percentage
 * @param {number} time - Duration in years
 * @returns {number} Calculated simple interest
 */
function calculateInterest(principal, rate, time) {
  return (principal * rate * time) / 100;
}
console.log("Interest: Rs. " + calculateInterest(10000, 7.5, 2));`
    }
  ]
};

window.TOPIC_DATA_STORE["js-variables"] = {
  id: "js-variables",
  title: "JavaScript Variables",
  lead: "Learn how variables store data, understand declaration vs assignment, and compare var, let, and const.",
  intro: "Variables are containers for storing data values. In JavaScript, variables can hold numbers, strings, objects, functions, and booleans dynamically.",
  definition: "A variable is a named storage location in computer memory that holds a value which can be retrieved and manipulated during script execution.",
  whyUse: "Variables eliminate hardcoding, allow dynamic computation, enable state management, and make programs reusable and maintainable.",
  syntax: `var oldVariable = "Legacy style"; // Function scoped
let modernVar = "Modern variable"; // Block scoped, reassignable
const fixedVar = "Constant value"; // Block scoped, immutable reference`,
  syntaxExplanation: "`let` allows reassignment; `const` prevents reassignment; `var` is the legacy keyword with function-level scoping.",
  simpleExample: `let studentName = "Rahul";
let studentAge = 21;
console.log("Student Name:", studentName);
console.log("Student Age:", studentAge);`,
  expectedOutput: `Student Name: Rahul\nStudent Age: 21`,
  realLifeExample: {
    domain: "Banking",
    title: "Customer Account Profile State",
    scenario: "Maintaining customer identification, active account balance, and KYC verification status.",
    code: `const accountNumber = "AC-88992211"; // Account number cannot change
let accountBalance = 15000.75;        // Balance changes with transactions
let isKycVerified = true;             // Status can update

console.log("Account: " + accountNumber);
console.log("Opening Balance: Rs. " + accountBalance);

// Customer deposits money
let deposit = 5000;
accountBalance = accountBalance + deposit;
console.log("New Balance: Rs. " + accountBalance);`,
    output: `Account: AC-88992211\nOpening Balance: Rs. 15000.75\nNew Balance: Rs. 20000.75`
  },
  practicalExample: {
    title: "Swapping Two Variables",
    code: `let x = 10;
let y = 20;
console.log("Before swap: x =", x, ", y =", y);

// Modern ES6 destructuring swap
[x, y] = [y, x];
console.log("After swap:  x =", x, ", y =", y);`,
    output: `Before swap: x = 10 , y = 20\nAfter swap:  x = 20 , y = 10`,
    note: "Array destructuring allows swapping values without a temporary helper variable."
  },
  commonMistakes: [
    {
      mistake: "Using variables without declaring them (implicit global variables)",
      wrongCode: `function setPrice() {
  discount = 15; // Missing let/const/var creates an accidental global variable!
}
setPrice();
console.log(window.discount);`,
      correctCode: `function setPrice() {
  let discount = 15; // Correctly scoped to the function
  console.log("Local discount:", discount);
}
setPrice();`,
      explanation: "Assigning to undeclared identifiers pollutes the global scope and leads to hard-to-track side effects. Always declare with `let` or `const`."
    }
  ],
  importantPoints: [
    "JavaScript is dynamically typed: the same variable can hold a string, then a number, then an object.",
    "Variable names must be unique within their lexical block scope.",
    "Default rule of thumb: Use `const` by default. If you need to reassign the value, use `let`. Never use `var` in modern JavaScript."
  ],
  interviewQuestions: [
    {
      question: "What is dynamic typing in JavaScript?",
      answer: "Dynamic typing means variables are not bound to a fixed data type. Data types are associated with the runtime values, not the variable names. A variable declared with `let a = 10;` can later hold `a = 'Hello';`."
    }
  ],
  practiceExercises: [
    {
      problem: "Declare variables for a shopping cart: item count (3), total price (1299.50), discount code ('SUMMER20'), and isGiftWrap (true). Display them.",
      hint: "Use const for immutable identifiers and let for mutable ones.",
      solution: `let itemCount = 3;
let totalPrice = 1299.50;
const discountCode = "SUMMER20";
let isGiftWrap = true;
console.log(\`Items: \${itemCount}, Total: Rs.\${totalPrice}, Code: \${discountCode}, Gift: \${isGiftWrap}\`);`
    }
  ]
};

window.TOPIC_DATA_STORE["js-let"] = {
  id: "js-let",
  title: "JavaScript Let",
  lead: "Understand block scoping, temporal dead zone (TDZ), and reassignment with the let keyword.",
  intro: "Introduced in ES6 (2015), the `let` keyword provides block-scoped variables, solving many architectural flaws associated with legacy `var` declarations.",
  definition: "`let` declares a reassignable, block-scoped local variable, optionally initializing it to a value.",
  whyUse: "`let` prevents variable leaking outside loops and if-blocks, avoids accidental redeclarations, and adheres to the Temporal Dead Zone for safer programming.",
  syntax: `let variableName = initialValue;
variableName = updatedValue; // Allowed`,
  syntaxExplanation: "`let` variables are restricted to the block `{}` in which they are declared and cannot be redeclared in the same scope.",
  simpleExample: `let score = 50;
score = score + 25; // Reassignment
console.log("Updated score:", score);`,
  expectedOutput: `Updated score: 75`,
  realLifeExample: {
    domain: "Shopping",
    title: "Discount Coupon Application",
    scenario: "Updating order checkout total when different discount promo codes are entered.",
    code: `let cartTotal = 3500;
let couponApplied = "FESTIVE500";

if (couponApplied === "FESTIVE500") {
  let discount = 500; // Block scoped to if-block
  cartTotal = cartTotal - discount;
  console.log("Discount of Rs." + discount + " applied!");
}

console.log("Final Amount to Pay: Rs." + cartTotal);`,
    output: `Discount of Rs.500 applied!\nFinal Amount to Pay: Rs.3000`
  },
  practicalExample: {
    title: "Loop Iteration with Let Scope",
    code: `for (let i = 1; i <= 3; i++) {
  console.log("Processing batch item #" + i);
}
// i is not accessible here, keeping outer scope clean!`,
    output: `Processing batch item #1\nProcessing batch item #2\nProcessing batch item #3`,
    note: "Unlike var, let creates a fresh binding for each iteration of a loop."
  },
  commonMistakes: [
    {
      mistake: "Redeclaring the same let variable in the same scope",
      wrongCode: `let city = "Mumbai";
let city = "Delhi"; // SyntaxError: Identifier 'city' has already been declared`,
      correctCode: `let city = "Mumbai";
city = "Delhi"; // Correct: Reassign without redeclaring!`,
      explanation: "`let` strictly prohibits redeclaring an existing variable name within the same lexical scope."
    }
  ],
  importantPoints: [
    "`let` variables are block-scoped `{ ... }`.",
    "`let` variables cannot be redeclared within the same scope.",
    "`let` variables are hoisted to the top of their block, but remain uninitialized in the Temporal Dead Zone (TDZ) until the declaration line is executed."
  ],
  interviewQuestions: [
    {
      question: "What is the Temporal Dead Zone (TDZ)?",
      answer: "The TDZ is the period of execution between entering a block scope and the actual line where a `let` or `const` variable is declared. Accessing the variable during this window throws a `ReferenceError`."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a loop using `let` that counts down from 5 to 1 and logs 'Liftoff!' at the end.",
      hint: "Use a for loop decrementing `i--`.",
      solution: `for (let i = 5; i >= 1; i--) {
  console.log("T-minus " + i);
}
console.log("Liftoff!");`
    }
  ]
};

window.TOPIC_DATA_STORE["js-const"] = {
  id: "js-const",
  title: "JavaScript Const",
  lead: "Master constant variables, reference immutability, object mutation, and best practices.",
  intro: "The `const` keyword declares variables whose identifier cannot be reassigned. In modern JavaScript development, `const` is the default choice for all variable declarations.",
  definition: "`const` creates a read-only reference to a value. It is block-scoped and must be initialized at the time of declaration.",
  whyUse: "`const` prevents accidental bugs caused by reassigning values, communicates intent to other developers, and allows compiler optimizations.",
  syntax: `const CONSTANT_NAME = value;
// CONSTANT_NAME = anotherValue; // TypeError: Assignment to constant variable.`,
  syntaxExplanation: "`const` variables must be assigned a value immediately when declared and cannot be reassigned. However, properties of objects and arrays declared with `const` can still be mutated.",
  simpleExample: `const PI = 3.14159;
const MAX_LOGIN_ATTEMPTS = 5;
console.log("PI:", PI);
console.log("Max Attempts:", MAX_LOGIN_ATTEMPTS);`,
  expectedOutput: `PI: 3.14159\nMax Attempts: 5`,
  realLifeExample: {
    domain: "Banking",
    title: "Fixed Interest Rate & Mutable Transaction Ledger",
    scenario: "Maintaining fixed bank branch code and tax rate with a mutable transaction log array.",
    code: `const BRANCH_IFSC = "HDFC0001234";
const GST_RATE = 0.18;

// Mutable array with const identifier
const transactionHistory = [];
transactionHistory.push({ type: "Deposit", amount: 10000 });
transactionHistory.push({ type: "Withdrawal", amount: 2500 });

console.log("Branch IFSC:", BRANCH_IFSC);
console.log("Total Transactions Recorded:", transactionHistory.length);
console.log("First Entry:", transactionHistory[0].type, "Rs." + transactionHistory[0].amount);`,
    output: `Branch IFSC: HDFC0001234\nTotal Transactions Recorded: 2\nFirst Entry: Deposit Rs.10000`
  },
  practicalExample: {
    title: "Modifying Object Properties in Const",
    code: `const userConfig = {
  theme: "light",
  notifications: true
};

// Valid: Mutating properties
userConfig.theme = "dark";
console.log("Updated Theme:", userConfig.theme);`,
    output: `Updated Theme: dark`,
    note: "`const` guarantees the variable reference does not change; it does NOT make the object deeply immutable. Use `Object.freeze()` for deep immutability."
  },
  commonMistakes: [
    {
      mistake: "Declaring a const variable without an initial value",
      wrongCode: `const serverPort; // SyntaxError: Missing initializer in const declaration
serverPort = 8080;`,
      correctCode: `const serverPort = 8080; // Must initialize during declaration`,
      explanation: "`const` requires an immediate assignment during declaration."
    }
  ],
  importantPoints: [
    "`const` prevents reassignment, not mutation of objects/arrays.",
    "Must be initialized at declaration time.",
    "Like `let`, `const` is block-scoped and subject to the Temporal Dead Zone (TDZ).",
    "Use uppercase SNAKE_CASE for globally fixed constants (e.g., `API_BASE_URL`), and camelCase for ordinary constant references."
  ],
  interviewQuestions: [
    {
      question: "Can you change the elements of an array declared with const?",
      answer: "Yes. `const` prevents reassigning the variable identifier to a new memory reference (e.g., `arr = [1, 2]`), but modifying the existing array via methods like `push()`, `pop()`, or index assignment (`arr[0] = 9`) is completely valid."
    }
  ],
  practiceExercises: [
    {
      problem: "Create a `const` object representing a Student with name and marks. Add a new property `grade` and modify marks.",
      hint: "Assign properties directly: `student.grade = 'A'`;",
      solution: `const student = { name: "Ananya", marks: 92 };
student.marks = 95;
student.grade = "A+";
console.log("Student Profile:", student.name, student.marks, student.grade);`
    }
  ]
};

window.TOPIC_DATA_STORE["js-types"] = {
  id: "js-types",
  title: "JavaScript Types",
  lead: "Master JavaScript's 8 data types: String, Number, BigInt, Boolean, Undefined, Null, Symbol, and Object.",
  intro: "JavaScript is dynamically typed. This means you do not have to specify the data type of a variable when you declare it, and data types are converted automatically as needed during script execution.",
  definition: "A data type in JavaScript is a classification that tells the compiler or interpreter how the programmer intends to use the piece of data.",
  whyUse: "Knowing data types is fundamental to avoiding bugs during type coercion, numeric calculations, data serialization, and condition evaluation.",
  syntax: `let str = "Text";          // String
let num = 42;              // Number
let big = 9007199254740991n; // BigInt
let bool = true;           // Boolean
let undef;                 // Undefined
let empty = null;          // Null
let sym = Symbol("id");    // Symbol
let obj = { role: "Dev" }; // Object`,
  syntaxExplanation: "JavaScript has 7 primitive types (stored by value) and 1 complex reference type (Object, including Arrays and Functions, stored by reference).",
  simpleExample: `console.log(typeof "Hello");  // "string"
console.log(typeof 100);      // "number"
console.log(typeof true);     // "boolean"
console.log(typeof undefined);// "undefined"
console.log(typeof null);     // "object" (historical JS quirk!)`,
  expectedOutput: `string\nnumber\nboolean\nundefined\nobject`,
  realLifeExample: {
    domain: "E-commerce",
    title: "Product Inventory Data Type Mapping",
    scenario: "Representing all product attributes using appropriate primitive and object types.",
    code: `const product = {
  sku: "PROD-9812",          // String
  inStock: true,             // Boolean
  price: 1499.99,            // Number
  tags: ["electronics", "audio"], // Object (Array)
  manufacturerDetails: null, // Null (Intentionally empty for now)
  stockCount: undefined      // Undefined (Not yet provided by warehouse)
};

console.log("Product:", product.sku, "| Type of SKU:", typeof product.sku);
console.log("Price:", product.price, "| Type of Price:", typeof product.price);
console.log("In Stock:", product.inStock, "| Type of InStock:", typeof product.inStock);`,
    output: `Product: PROD-9812 | Type of SKU: string
Price: 1499.99 | Type of Price: number
In Stock: true | Type of InStock: boolean`
  },
  practicalExample: {
    title: "Primitive vs Reference Type Behavior",
    code: `// Primitives copied by value
let a = 10;
let b = a;
b = 20;
console.log("a =", a, ", b =", b); // a remains 10

// Objects copied by reference
let obj1 = { val: 50 };
let obj2 = obj1;
obj2.val = 99;
console.log("obj1.val =", obj1.val); // obj1.val is now 99!`,
    output: `a = 10 , b = 20\nobj1.val = 99`,
    note: "Objects and arrays share references; modifying one variable pointing to the object alters all references."
  },
  commonMistakes: [
    {
      mistake: "Checking null using typeof",
      wrongCode: `let data = null;
if (typeof data === "null") { // FALSE! typeof null is "object"
  console.log("Data is null");
}`,
      correctCode: `let data = null;
if (data === null) { // Direct strict equality check
  console.log("Data is null");
}`,
      explanation: "`typeof null === 'object'` is a famous bug from the original 1995 JavaScript implementation that cannot be fixed without breaking existing websites."
    }
  ],
  importantPoints: [
    "JavaScript has 7 primitive types: string, number, bigint, boolean, undefined, symbol, null.",
    "Primitives are immutable and passed by value.",
    "Objects (arrays, functions, objects) are mutable and passed by reference.",
    "`NaN` (Not-a-Number) is actually of type `'number'`."
  ],
  interviewQuestions: [
    {
      question: "What is the difference between undefined and null?",
      answer: "`undefined` means a variable has been declared but has not yet been assigned a value. `null` is an intentional assignment representing the explicit absence of any object value."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a script that inspects 4 different variables (a string, an array, a boolean, and null) using `typeof` and logs their types.",
      hint: "Note that typeof for an array and null both return 'object'. Use Array.isArray() to detect arrays.",
      solution: `let s = "Learning";
let arr = [1, 2, 3];
let b = false;
let n = null;
console.log("s:", typeof s);
console.log("arr:", typeof arr, "(Is Array?", Array.isArray(arr) + ")");
console.log("b:", typeof b);
console.log("n:", typeof n);`
    }
  ]
};
