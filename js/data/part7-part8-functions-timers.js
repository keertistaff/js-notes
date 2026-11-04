/* ==========================================================================
   PART 7 & 8: Functions & Timers - Comprehensive Topics Data
   ========================================================================== */

window.TOPIC_DATA_STORE = window.TOPIC_DATA_STORE || {};

// PART 7: FUNCTIONS
window.TOPIC_DATA_STORE["functions-intro"] = {
  id: "functions-intro",
  title: "Function Introduction",
  lead: "Master first-class functions, modularity, code reuse, declarations, and execution contexts in JavaScript.",
  intro: "A JavaScript function is a block of code designed to perform a particular task. A JavaScript function is executed when 'something' invokes it (calls it).",
  definition: "A callable subprogram with its own lexical scope, parameter bindings, and return value.",
  whyUse: "Eliminates duplicate code (DRY - Don't Repeat Yourself), organizes complex software into modular components, and enables functional programming patterns.",
  syntax: `function functionName(parameter1, parameter2) {
  // code to be executed
  return result;
}`,
  syntaxExplanation: "Declared with the `function` keyword, followed by identifier name, parentheses `()` for parameter list, and curly brackets `{}` containing body statements.",
  simpleExample: `function greet(name) {
  return "Hello, " + name + "! Welcome to JavaScript.";
}
console.log(greet("Keerti"));`,
  expectedOutput: `Hello, Keerti! Welcome to JavaScript.`,
  realLifeExample: {
    domain: "Restaurant Billing",
    title: "Order Tax & Total Calculator",
    scenario: "Reusable billing function calculating final invoice total with service charge and state sales tax.",
    code: `function calculateRestaurantBill(subtotal, taxPercent = 5, serviceFee = 50) {
  let taxAmount = (subtotal * taxPercent) / 100;
  let grandTotal = subtotal + taxAmount + serviceFee;
  return {
    subtotal: subtotal,
    tax: taxAmount,
    service: serviceFee,
    total: grandTotal
  };
}

let table1Order = calculateRestaurantBill(1200);
console.log("Table #1 Invoice Total: Rs. " + table1Order.total);`,
    output: `Table #1 Invoice Total: Rs. 1310`
  },
  practicalExample: {
    title: "First-Class Functions (Passing Functions as Arguments)",
    code: `function processPayment(amount, gatewayCallback) {
  console.log("Initiating transaction of Rs." + amount);
  return gatewayCallback(amount);
}

function hdfcGateway(amt) { return "HDFC Approved: Rs." + amt; }
console.log(processPayment(2500, hdfcGateway));`,
    output: `Initiating transaction of Rs.2500\nHDFC Approved: Rs.2500`,
    note: "Functions can be passed around just like any other value (first-class citizens)."
  },
  commonMistakes: [
    {
      mistake: "Passing function invocation instead of function reference as callback",
      wrongCode: `setTimeout(greet(), 1000); // Calls greet() immediately instead of waiting 1s!`,
      correctCode: `setTimeout(greet, 1000);   // Passes function reference correctly!`,
      explanation: "Parentheses `()` execute the function immediately. Pass the identifier without `()` when supplying callbacks."
    }
  ],
  importantPoints: [
    "Function declarations are hoisted to the top of their enclosing scope.",
    "Functions return `undefined` by default if no explicit `return` statement is executed.",
    "Functions create their own local variable scope."
  ],
  interviewQuestions: [
    {
      question: "What does it mean that functions are 'First-Class Citizens' in JavaScript?",
      answer: "It means functions can be stored in variables, passed as arguments into other functions, returned from other functions (higher-order functions), and assigned as object properties."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a function `celsiusToFahrenheit(c)` that converts temperature from Celsius to Fahrenheit ($F = C \\times 9/5 + 32$).",
      hint: "return (c * 9/5) + 32;",
      solution: `function celsiusToFahrenheit(c) {
  return (c * 9/5) + 32;
}
console.log("30°C in Fahrenheit:", celsiusToFahrenheit(30)); // 86`
    }
  ]
};

window.TOPIC_DATA_STORE["functions-invocation"] = {
  id: "functions-invocation",
  title: "Function Invocation",
  lead: "Understand direct invocation, method invocation, constructor invocation, call/apply, and 'this' binding.",
  intro: "The code inside a JavaScript function will execute when 'something' invokes it. How a function is invoked determines its execution context and the value of `this`.",
  definition: "The act of triggering a function's execution via the call operator `()` or reflective methods (`call`, `apply`, `Reflect.apply`).",
  whyUse: "Knowing invocation patterns is essential to controlling object contexts, constructing instances, and handling event callbacks safely.",
  syntax: `func();              // 1. Direct function invocation
obj.method();        // 2. Method invocation (this = obj)
new Constructor();   // 3. Constructor invocation (this = new object)
func.call(thisArg);  // 4. Indirect invocation`,
  syntaxExplanation: "In direct invocation `func()`, `this` points to global `window` (or `undefined` in strict mode). In method invocation, `this` points to the calling object.",
  simpleExample: `function showTime() {
  return "Session time: " + new Date().toLocaleTimeString();
}
console.log(showTime()); // Direct invocation`,
  expectedOutput: `Session time: ` + new Date().toLocaleTimeString(),
  realLifeExample: {
    domain: "Student Management",
    title: "Student Profile Method Invocation",
    scenario: "Invoking an object method to retrieve a student's full summary.",
    code: `let student = {
  rollNo: "R-101",
  name: "Deepak",
  marks: 92,
  getSummary: function() {
    return this.name + " (" + this.rollNo + ") scored " + this.marks + "%";
  }
};

console.log(student.getSummary()); // Method invocation sets this = student`,
    output: `Deepak (R-101) scored 92%`
  },
  practicalExample: {
    title: "Self-Invoking Function (IIFE)",
    code: `(function() {
  let privateConfig = "API_KEY_SECURE";
  console.log("IIFE executed immediately, protecting:", privateConfig);
})();`,
    output: `IIFE executed immediately, protecting: API_KEY_SECURE`,
    note: "Immediately Invoked Function Expressions execute as soon as defined."
  },
  commonMistakes: [
    {
      mistake: "Losing method context when assigning method to an unbound variable",
      wrongCode: `let print = student.getSummary;
print(); // In strict mode: TypeError: Cannot read properties of undefined`,
      correctCode: `let print = student.getSummary.bind(student);
console.log(print()); // Bound correctly!`,
      explanation: "Extracting a method detaches it from its owning object; use `.bind()` to lock its context."
    }
  ],
  importantPoints: [
    "Invocation using `new` creates a fresh object and binds `this` to it.",
    "`this` in arrow functions is lexically inherited from the outer enclosing scope.",
    "Parentheses `()` invoke a function immediately."
  ],
  interviewQuestions: [
    {
      question: "What are the 4 ways to invoke a function in JavaScript?",
      answer: "1. As a regular function: `func()`\n2. As a method: `obj.func()`\n3. As a constructor: `new Func()`\n4. Indirectly with custom context: `func.call(obj)` or `func.apply(obj)`."
    }
  ],
  practiceExercises: [
    {
      problem: "Create an object `counter` with a property `count: 0` and a method `increment()` that increases count and returns it.",
      hint: "Use this.count++ inside increment.",
      solution: `let counter = {
  count: 0,
  increment: function() {
    this.count++;
    return this.count;
  }
};
console.log("Count:", counter.increment());
console.log("Count:", counter.increment());`
    }
  ]
};

window.TOPIC_DATA_STORE["functions-parameters"] = {
  id: "functions-parameters",
  title: "Function Parameters",
  lead: "Master default parameters, rest parameters (...rest), parameter destructuring, and pass-by-value semantics.",
  intro: "Parameters are variables listed as part of a function's definition. Arguments are the actual values passed to the function when invoked.",
  definition: "Named variables declared in a function signature that accept input values from callers.",
  whyUse: "Default parameters provide graceful fallbacks; rest parameters bundle variable arguments into clean arrays.",
  syntax: `// Default parameters & Rest parameters
function register(name, role = "Student", ...skills) {
  return { name, role, skills };
}`,
  syntaxExplanation: "`role = 'Student'` provides a fallback when argument is omitted or `undefined`. `...skills` gathers remaining arguments into an array.",
  simpleExample: `function calculateTotal(price, tax = 0.05) {
  return price + (price * tax);
}
console.log("Default tax (5%):", calculateTotal(1000));
console.log("Custom tax (18%):", calculateTotal(1000, 0.18));`,
  expectedOutput: `Default tax (5%): 1050\nCustom tax (18%): 1180`,
  realLifeExample: {
    domain: "Attendance Management",
    title: "Batch Employee Attendance Marker with Rest Parameters",
    scenario: "Marking multiple employee IDs present in a single batch function call.",
    code: `function markPresent(shiftDate, ...employeeIds) {
  console.log("Logging Shift Date:", shiftDate);
  console.log("Total Employees Processed:", employeeIds.length);
  employeeIds.forEach(id => console.log(" - Present: " + id));
}

markPresent("2026-11-04", "EMP-101", "EMP-102", "EMP-105");`,
    output: `Logging Shift Date: 2026-11-04\nTotal Employees Processed: 3\n - Present: EMP-101\n - Present: EMP-102\n - Present: EMP-105`
  },
  practicalExample: {
    title: "Parameter Destructuring with Defaults",
    code: `function createAccount({ username, email, plan = "Free" } = {}) {
  return \`User \${username} (\${email}) registered on \${plan} tier.\`;
}

console.log(createAccount({ username: "Ananya", email: "ananya@test.com" }));`,
    output: `User Ananya (ananya@test.com) registered on Free tier.`,
    note: "Destructuring parameters makes function calls self-documenting."
  },
  commonMistakes: [
    {
      mistake: "Placing rest parameter (...rest) before other parameters",
      wrongCode: `function register(...skills, name) { // SyntaxError: Rest parameter must be last!
}`,
      correctCode: `function register(name, ...skills) { // Rest parameter must be last
}`,
      explanation: "The rest parameter captures all remaining arguments and must always be the final parameter in the signature."
    }
  ],
  importantPoints: [
    "JavaScript does not perform type checking on parameters at runtime.",
    "Primitives are passed by value (copies); objects and arrays are passed by reference.",
    "Default parameters evaluate at call time, not definition time."
  ],
  interviewQuestions: [
    {
      question: "Are parameters in JavaScript passed by value or by reference?",
      answer: "JavaScript is strictly **pass-by-value**. However, for objects and arrays, the 'value' being passed is the memory reference itself. Modifying object properties inside a function changes the outer object, but reassigning the parameter variable does not affect the outer identifier."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a function `sumAll(...numbers)` that sums any arbitrary quantity of numbers passed to it.",
      hint: "Use rest parameter with reduce or for loop.",
      solution: `function sumAll(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log("Sum:", sumAll(10, 20, 30, 40)); // 100`
    }
  ]
};

window.TOPIC_DATA_STORE["functions-return"] = {
  id: "functions-return",
  title: "Function Return",
  lead: "Master function returns, output data structures, early exits with guard clauses, and returning multiple values.",
  intro: "When JavaScript reaches a `return` statement, the function stops executing and returns a value to the caller.",
  definition: "A statement that terminates function execution and specifies a value to be returned to the function caller.",
  whyUse: "Calculates output data, terminates execution early when invalid states are detected, and chains functional pipelines.",
  syntax: `function compute(val) {
  if (val < 0) return 0; // Early guard exit
  return val * 2;        // Computed return
}`,
  syntaxExplanation: "If `return` is followed by an expression, that expression is returned. If no expression follows or `return` is omitted, `undefined` is returned.",
  simpleExample: `function square(n) {
  return n * n;
}
let res = square(7);
console.log("7 squared is:", res);`,
  expectedOutput: `7 squared is: 49`,
  realLifeExample: {
    domain: "Banking",
    title: "Loan Eligibility Assessment Function",
    scenario: "Validating credit rating and monthly income, returning an eligibility status object.",
    code: `function evaluateLoanEligibility(monthlyIncome, creditScore) {
  if (monthlyIncome < 25000) {
    return { eligible: false, reason: "Income below minimum threshold" };
  }
  if (creditScore < 650) {
    return { eligible: false, reason: "Credit score below 650" };
  }
  
  let maxSanction = monthlyIncome * 20;
  return { eligible: true, maxLoan: maxSanction };
}

let application = evaluateLoanEligibility(45000, 720);
console.log("Eligibility:", application.eligible ? "APPROVED for Rs." + application.maxLoan : "REJECTED: " + application.reason);`,
    output: `Eligibility: APPROVED for Rs.900000`
  },
  practicalExample: {
    title: "Returning Multiple Values via Destructuring",
    code: `function getMinMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

let [lowest, highest] = getMinMax([45, 12, 89, 3, 99]);
console.log("Lowest:", lowest, "| Highest:", highest);`,
    output: `Lowest: 3 | Highest: 99`,
    note: "Returning arrays or objects allows returning multiple values cleanly."
  },
  commonMistakes: [
    {
      mistake: "Placing code after a return statement (unreachable code)",
      wrongCode: `function check() {
  return 10;
  console.log("This will never run!"); // Unreachable code
}`,
      correctCode: `function check() {
  console.log("Runs before return");
  return 10;
}`,
      explanation: "The `return` statement immediately halts function execution."
    }
  ],
  importantPoints: [
    "A function without a `return` returns `undefined`.",
    "Be careful of Automatic Semicolon Insertion (ASI) when putting line breaks after `return`.",
    "Functions can return other functions (higher-order functions / closures)."
  ],
  interviewQuestions: [
    {
      question: "What happens if you write a return statement across multiple lines without parentheses?",
      answer: "If you place a newline directly after `return`, ASI inserts a semicolon immediately after `return;`, causing the function to return `undefined` and ignoring the code on the subsequent lines."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a function `divide(a, b)` that returns `{ success: true, result: a/b }` or `{ success: false, error: 'Divide by zero' }`.",
      hint: "Check if b === 0.",
      solution: `function divide(a, b) {
  if (b === 0) return { success: false, error: "Division by zero" };
  return { success: true, result: a / b };
}
console.log(divide(10, 2));
console.log(divide(10, 0));`
    }
  ]
};

window.TOPIC_DATA_STORE["functions-arguments"] = {
  id: "functions-arguments",
  title: "Function Arguments",
  lead: "Master the arguments object, array-like objects, rest parameters vs arguments, and length property.",
  intro: "JavaScript functions have a built-in `arguments` object containing an array of the arguments used when that function was called.",
  definition: "An array-like object local to all non-arrow functions containing entries for each argument passed to the function.",
  whyUse: "Inspecting dynamic variable argument lists in legacy functions before ES6 rest parameters.",
  syntax: `function demo() {
  console.log(arguments.length);
  console.log(arguments[0]);
}`,
  syntaxExplanation: "`arguments` has a `.length` property and indexed access `arguments[i]`, but lacks Array methods (`map`, `filter`, `forEach`).",
  simpleExample: `function listArgs() {
  console.log("Received " + arguments.length + " args:");
  for (let i = 0; i < arguments.length; i++) {
    console.log("Arg #" + i + ": " + arguments[i]);
  }
}
listArgs("Alpha", "Beta", "Gamma");`,
  expectedOutput: `Received 3 args:\nArg #0: Alpha\nArg #1: Beta\nArg #2: Gamma`,
  realLifeExample: {
    domain: "Business Applications",
    title: "Flexible Audit Log Message Formatter",
    scenario: "Accepting an arbitrary series of log tokens and formatting them into a standardized audit string.",
    code: `function auditLog() {
  // Convert array-like arguments to real Array
  let parts = Array.from(arguments);
  let timestamp = new Date().toISOString().split("T")[0];
  console.log("[" + timestamp + "] " + parts.join(" :: "));
}

auditLog("AUTH", "User #1042", "Password Changed", "IP: 192.168.1.1");`,
    output: `[` + new Date().toISOString().split("T")[0] + `] AUTH :: User #1042 :: Password Changed :: IP: 192.168.1.1`
  },
  practicalExample: {
    title: "Converting Arguments to Real Array",
    code: `function findMax() {
  let argsArray = [...arguments]; // Spread into real Array
  return Math.max(...argsArray);
}
console.log("Max Value:", findMax(12, 85, 43, 99, 21));`,
    output: `Max Value: 99`,
    note: "Spread syntax `[...arguments]` converts arguments to a genuine Array."
  },
  commonMistakes: [
    {
      mistake: "Attempting to use arguments in Arrow Functions",
      wrongCode: `const sum = () => {
  console.log(arguments); // ReferenceError or inherits outer arguments!
};`,
      correctCode: `const sum = (...args) => { // Use modern rest parameter in arrow functions
  console.log(args);
};`,
      explanation: "Arrow functions do NOT have their own `arguments` object. Always use rest parameters `(...args)` in arrow functions."
    }
  ],
  importantPoints: [
    "`arguments` is NOT a true Array (it is an Array-like object with length and indexed keys).",
    "Rest parameters (`...args`) are superior, cleaner, and standard in modern ES6+.",
    "Arrow functions do not bind `arguments`."
  ],
  interviewQuestions: [
    {
      question: "Why are ES6 Rest Parameters preferred over the arguments object?",
      answer: "1. Rest parameters produce a real Array with access to all array methods (`map`, `filter`, `reduce`).\n2. They work in arrow functions.\n3. They explicitly document in the function signature that extra arguments are expected."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a function using `Array.from(arguments)` that filters and returns only arguments that are numbers.",
      hint: "Array.from(arguments).filter(x => typeof x === 'number');",
      solution: `function filterNumbers() {
  return Array.from(arguments).filter(arg => typeof arg === "number");
}
console.log(filterNumbers("A", 10, true, 42, "B", 99)); // [10, 42, 99]`
    }
  ]
};

window.TOPIC_DATA_STORE["functions-expressions"] = {
  id: "functions-expressions",
  title: "Function Expressions",
  lead: "Master anonymous functions, named function expressions, hoisting differences, and assigning functions to variables.",
  intro: "A JavaScript function can also be defined using an expression. A function expression can be stored in a variable.",
  definition: "A function created inside an expression, typically assigned to a variable, passed as an argument, or immediately invoked.",
  whyUse: "Enables conditional function definitions, closures, callbacks, object methods, and module encapsulation.",
  syntax: `// Anonymous function expression
const calculateArea = function(width, height) {
  return width * height;
};`,
  syntaxExplanation: "The function is defined as part of an assignment expression. Unlike function declarations, function expressions are NOT hoisted.",
  simpleExample: `const multiply = function(x, y) {
  return x * y;
};
console.log("Product:", multiply(6, 7));`,
  expectedOutput: `Product: 42`,
  realLifeExample: {
    domain: "E-commerce",
    title: "Configurable Shipping Calculator Strategies",
    scenario: "Assigning different pricing functions dynamically based on customer shipping selection (Standard vs Express).",
    code: `let standardShipping = function(weightKg) { return weightKg * 40; };
let expressShipping = function(weightKg) { return (weightKg * 90) + 100; };

function calculateOrderFreight(weight, strategy) {
  return strategy(weight);
}

console.log("Standard Delivery (3kg): Rs. " + calculateOrderFreight(3, standardShipping));
console.log("Express Delivery (3kg) : Rs. " + calculateOrderFreight(3, expressShipping));`,
    output: `Standard Delivery (3kg): Rs. 120\nExpress Delivery (3kg) : Rs. 370`
  },
  practicalExample: {
    title: "Named Function Expression for Recursion",
    code: `const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1); // Uses internal name 'fact'
};

console.log("Factorial of 5:", factorial(5));`,
    output: `Factorial of 5: 120`,
    note: "Named function expressions provide readable stack traces in debugging consoles."
  },
  commonMistakes: [
    {
      mistake: "Calling a function expression before its declaration line",
      wrongCode: `sayHi(); // TypeError: sayHi is not a function (or ReferenceError with const)
var sayHi = function() { console.log("Hi"); };`,
      correctCode: `const sayHi = function() { console.log("Hi"); };
sayHi(); // Called after assignment`,
      explanation: "Function expressions are not hoisted as functions; calling them before assignment causes runtime errors."
    }
  ],
  importantPoints: [
    "Function declarations are hoisted; function expressions are not.",
    "Can be anonymous or named.",
    "Ideal for passing callback functions into array methods or event listeners."
  ],
  interviewQuestions: [
    {
      question: "What is the difference between Function Declaration and Function Expression?",
      answer: "Function declarations (`function foo() {}`) are hoisted to the top of the scope and can be called before their definition. Function expressions (`const foo = function() {}`) are bound to variables and cannot be invoked before the variable assignment line is reached."
    }
  ],
  practiceExercises: [
    {
      problem: "Create a function expression assigned to `isStrongPassword` that returns true if password is at least 8 characters long.",
      hint: "const isStrongPassword = function(p) { return p.length >= 8; };",
      solution: `const isStrongPassword = function(pwd) {
  return typeof pwd === "string" && pwd.length >= 8;
};
console.log("pass:", isStrongPassword("pass"));
console.log("secret123:", isStrongPassword("secret123"));`
    }
  ]
};

window.TOPIC_DATA_STORE["functions-arrow"] = {
  id: "functions-arrow",
  title: "Arrow Functions",
  lead: "Master concise ES6 arrow functions (=>), lexical this binding, implicit returns, and limitations.",
  intro: "Arrow functions were introduced in ES6. They allow us to write shorter function syntax and do not have their own `this`, `arguments`, `super`, or `new.target`.",
  definition: "A compact syntactical alternative to standard function expressions with lexical binding of `this`.",
  whyUse: "Clean syntax for callbacks (`map`, `filter`), concise one-liners, and solving `this` binding issues in class callbacks and timers.",
  syntax: `// Concise syntax
const add = (a, b) => a + b; // Implicit return

// Multi-line syntax
const process = (x) => {
  let res = x * 2;
  return res;
};`,
  syntaxExplanation: "When the body contains a single expression, curly braces and the `return` keyword can be omitted (implicit return).",
  simpleExample: `const square = x => x * x;
console.log("Square of 9:", square(9));

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);
console.log("Doubled:", doubled);`,
  expectedOutput: `Square of 9: 81\nDoubled: [ 2, 4, 6, 8 ]`,
  realLifeExample: {
    domain: "Student Management",
    title: "Filtering Honors Students with Arrow Functions",
    scenario: "Filtering students with marks >= 80 and mapping to formatted honor roll strings.",
    code: `let students = [
  { name: "Suresh", marks: 74 },
  { name: "Pooja", marks: 91 },
  { name: "Aditya", marks: 84 }
];

let honorsList = students
  .filter(s => s.marks >= 80)
  .map(s => \`\${s.name} (\${s.marks}%)\`);

console.log("Honors Roll:", honorsList);`,
    output: `Honors Roll: [ 'Pooja (91%)', 'Aditya (84%)' ]`
  },
  practicalExample: {
    title: "Lexical 'this' in Timers",
    code: `function DigitalClock() {
  this.seconds = 0;
  // Arrow function inherits 'this' from DigitalClock instance
  setInterval(() => {
    this.seconds++;
  }, 1000);
}
console.log("Arrow functions retain surrounding 'this' without needing .bind(this)!");`,
    output: `Arrow functions retain surrounding 'this' without needing .bind(this)!`,
    note: "Arrow functions capture `this` from the enclosing lexical context."
  },
  commonMistakes: [
    {
      mistake: "Using arrow functions as object methods where this is required",
      wrongCode: `const user = {
  name: "Karan",
  getName: () => this.name // 'this' points to window/global, not user!
};
console.log(user.getName()); // undefined!`,
      correctCode: `const user = {
  name: "Karan",
  getName() { return this.name; } // Standard method shorthand
};
console.log(user.getName()); // "Karan"`,
      explanation: "Arrow functions do not bind their own `this`; never use them as object methods that inspect `this`."
    }
  ],
  importantPoints: [
    "Arrow functions cannot be used as constructors (`new Arrow()` throws TypeError).",
    "Arrow functions have no `prototype` property.",
    "To implicitly return an object literal, wrap it in parentheses: `x => ({ id: x })`."
  ],
  interviewQuestions: [
    {
      question: "What are the major differences between Arrow Functions and Regular Functions?",
      answer: "1. **this Binding**: Arrow functions inherit `this` lexically; regular functions bind `this` dynamically based on invocation.\n2. **Constructors**: Arrow functions cannot be called with `new`.\n3. **arguments Object**: Arrow functions do not have `arguments`.\n4. **Syntax**: Arrow functions support implicit returns."
    }
  ],
  practiceExercises: [
    {
      problem: "Write an arrow function `calcDiscount(price, percent)` that returns the discounted price in one concise line.",
      hint: "(p, d) => p - (p * d / 100)",
      solution: `const calcDiscount = (price, percent) => price - (price * percent / 100);
console.log("Rs.2000 with 15% off: Rs." + calcDiscount(2000, 15)); // 1700`
    }
  ]
};

window.TOPIC_DATA_STORE["functions-scope"] = {
  id: "functions-scope",
  title: "Function Scope",
  lead: "Master function scope boundaries, local vs global variables, scope chains, and lexical environments.",
  intro: "Scope determines the accessibility (visibility) of variables. Variables defined inside a function are not accessible (visible) from outside the function.",
  definition: "A lexical scope created inside a function body restricting variable access to statements within that function.",
  whyUse: "Prevents variable collisions, encapsulates private helper variables, and enforces modular data protection.",
  syntax: `function outer() {
  let localSecret = "Hidden"; // Local to outer
  function inner() {
    console.log(localSecret); // Accessible via Scope Chain
  }
}`,
  syntaxExplanation: "Variables declared inside a function have Local Scope. Inner functions can access variables from outer functions (Scope Chain), but not vice-versa.",
  simpleExample: `function testScope() {
  let localVal = 100;
  console.log("Inside:", localVal);
}
testScope();
// console.log(localVal); // ReferenceError: localVal is not defined`,
  expectedOutput: `Inside: 100`,
  realLifeExample: {
    domain: "Banking",
    title: "Account Balance Encapsulation",
    scenario: "Hiding internal bank ledger balance within function scope, exposing only authorized transaction methods.",
    code: `function createBankAccount(initialDeposit) {
  let balance = initialDeposit; // Private scoped variable

  return {
    deposit: function(amount) {
      balance += amount;
      console.log("Deposited Rs." + amount + " | Current: Rs." + balance);
    },
    getBalance: function() {
      return balance;
    }
  };
}

let myAccount = createBankAccount(5000);
myAccount.deposit(2000);
console.log("Audited Balance: Rs." + myAccount.getBalance());
// myAccount.balance is completely inaccessible from outside!`,
    output: `Deposited Rs.2000 | Current: Rs.7000\nAudited Balance: Rs.7000`
  },
  practicalExample: {
    title: "Scope Chain Traversal",
    code: `let globalVar = "Global";
function level1() {
  let level1Var = "Level 1";
  function level2() {
    let level2Var = "Level 2";
    console.log(globalVar + " -> " + level1Var + " -> " + level2Var);
  }
  level2();
}
level1();`,
    output: `Global -> Level 1 -> Level 2`,
    note: "JavaScript searches upwards through nested scopes until it finds the variable or hits the global object."
  },
  commonMistakes: [
    {
      mistake: "Accidentally creating global variables by omitting let/const inside a function",
      wrongCode: `function setTax() {
  taxRate = 0.18; // Missing let! Pollutes global scope!
}`,
      correctCode: `function setTax() {
  let taxRate = 0.18; // Correctly scoped to function
}`,
      explanation: "Assigning without declaration creates an accidental global variable, leading to unexpected collisions."
    }
  ],
  importantPoints: [
    "Each function call creates a new execution context and local scope.",
    "Scope is determined at author time (Lexical Scope), not runtime.",
    "Use IIFEs or modules to avoid polluting the global namespace."
  ],
  interviewQuestions: [
    {
      question: "What is the Scope Chain in JavaScript?",
      answer: "When a variable is resolved, the JavaScript engine looks first in the current local execution context. If not found, it traverses upward to the outer enclosing lexical environment, continuing step-by-step until reaching the global scope. If not found in the global scope, a `ReferenceError` is thrown."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a function `counter()` that encapsulates a count variable and returns an increment function demonstrating function scope.",
      hint: "Return function that does count++.",
      solution: `function makeCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
let c = makeCounter();
console.log(c()); // 1
console.log(c()); // 2`
    }
  ]
};

// PART 8: TIMERS
window.TOPIC_DATA_STORE["timers-settimeout"] = {
  id: "timers-settimeout",
  title: "setTimeout()",
  lead: "Master asynchronous one-shot timers, execution delays, event loop scheduling, and parameter passing.",
  intro: "The `setTimeout()` method sets a timer which executes a function or specified piece of code once the timer expires.",
  definition: "A Web API method that schedules a callback function to execute once after a specified minimum delay in milliseconds.",
  whyUse: "Debouncing user inputs, delay animations, auto-dismissing toast notifications, and scheduling asynchronous retries.",
  syntax: `let timerId = setTimeout(function, delayMs, param1, param2);`,
  syntaxExplanation: "`function` is the callback, `delayMs` is delay in milliseconds (1000ms = 1s), and subsequent parameters are passed into the callback when called.",
  simpleExample: `console.log("Timer initiated...");
setTimeout(() => {
  console.log("Executed after 1000ms (1 second)!");
}, 1000);`,
  expectedOutput: `Timer initiated...\nExecuted after 1000ms (1 second)!`,
  realLifeExample: {
    domain: "E-commerce",
    title: "Order Success Toast Notification Auto-Dismiss",
    scenario: "Showing an order placed banner and automatically hiding it after 3 seconds.",
    code: `console.log("1. Toast displayed: 'Order #9812 placed successfully!'");

let toastTimer = setTimeout((orderId) => {
  console.log("2. Toast hidden automatically for order " + orderId);
}, 3000, "#9812");

console.log("3. User can continue browsing while timer ticks in background.");`,
    output: `1. Toast displayed: 'Order #9812 placed successfully!'\n3. User can continue browsing while timer ticks in background.\n2. Toast hidden automatically for order #9812`
  },
  practicalExample: {
    title: "Passing Parameters Directly to setTimeout",
    code: `function sendNotification(user, message) {
  console.log(\`Alert for \${user}: \${message}\`);
}
// Pass arguments cleanly without wrapping in another anonymous function
setTimeout(sendNotification, 500, "Rahul", "Your OTP is 4821");`,
    output: `Alert for Rahul: Your OTP is 4821`,
    note: "Additional arguments to setTimeout are passed directly into the callback."
  },
  commonMistakes: [
    {
      mistake: "Assuming setTimeout executes at the exact millisecond specified",
      wrongCode: `setTimeout(() => console.log("Exact time?"), 1000);
// Heavy CPU calculation blocking the thread for 3 seconds`,
      correctCode: `// Timers specify minimum delay, not guaranteed exact wall-clock time
setTimeout(() => console.log("Runs as soon as call stack is free!"), 1000);`,
      explanation: "JavaScript is single-threaded. If the main call stack is blocked with CPU-intensive work, the timer callback waits until the thread is idle."
    }
  ],
  importantPoints: [
    "`setTimeout` returns a unique numeric `timerId` used to cancel the timer with `clearTimeout()`.",
    "`setTimeout(fn, 0)` schedules the callback for the very next event loop tick after current synchronous code.",
    "Timer IDs are positive integers."
  ],
  interviewQuestions: [
    {
      question: "Why does setTimeout(fn, 0) not run immediately?",
      answer: "Because `setTimeout` registers the callback with the browser Web API. When the timer expires (0ms), the callback is placed in the Task Queue (Macrotask). The Event Loop only pushes it onto the Call Stack when the stack is completely empty of synchronous execution."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a function `delayedGreeting(name)` that prints 'Hello, [name]' after a 2-second delay.",
      hint: "Use setTimeout with 2000.",
      solution: `function delayedGreeting(name) {
  setTimeout(() => {
    console.log("Hello, " + name);
  }, 2000);
}
delayedGreeting("Priya");`
    }
  ]
};

window.TOPIC_DATA_STORE["timers-setinterval"] = {
  id: "timers-setinterval",
  title: "setInterval()",
  lead: "Master recurring asynchronous timers, continuous polling, clock animations, and execution cycles.",
  intro: "The `setInterval()` method repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.",
  definition: "A Web API method that triggers a callback function repeatedly at specified intervals until cleared.",
  whyUse: "Building live digital clocks, polling server updates, running game loop ticks, and carousel slide rotations.",
  syntax: `let intervalId = setInterval(function, delayMs, param1, param2);`,
  syntaxExplanation: "Repeats execution of `function` every `delayMs` milliseconds until stopped using `clearInterval(intervalId)`.",
  simpleExample: `let counter = 0;
let interval = setInterval(() => {
  counter++;
  console.log("Tick: " + counter);
  if (counter === 3) {
    clearInterval(interval);
    console.log("Interval cleared!");
  }
}, 1000);`,
  expectedOutput: `Tick: 1\nTick: 2\nTick: 3\nInterval cleared!`,
  realLifeExample: {
    domain: "Banking",
    title: "Session Expiry Countdown Timer",
    scenario: "Displaying a live ticking countdown warning before logging out an idle banking customer.",
    code: `let remainingSeconds = 3;
console.log("=== ONLINE BANKING SECURITY CHECK ===");

let countdownTimer = setInterval(() => {
  console.log("Session expiring in: " + remainingSeconds + "s...");
  remainingSeconds--;
  
  if (remainingSeconds < 0) {
    clearInterval(countdownTimer);
    console.log("Session Timed Out! Redirecting to secure login.");
  }
}, 1000);`,
    output: `=== ONLINE BANKING SECURITY CHECK ===\nSession expiring in: 3s...\nSession expiring in: 2s...\nSession expiring in: 1s...\nSession expiring in: 0s...\nSession Timed Out! Redirecting to secure login.`
  },
  practicalExample: {
    title: "Digital Clock Second Ticker",
    code: `let ticks = 0;
let clockInterval = setInterval(() => {
  ticks++;
  let now = new Date();
  console.log("Clock: " + now.toLocaleTimeString());
  if (ticks >= 2) clearInterval(clockInterval);
}, 1000);`,
    output: `Clock: ` + new Date().toLocaleTimeString(),
    note: "Digital clocks refresh display content every 1000ms."
  },
  commonMistakes: [
    {
      mistake: "Forgetting to store the interval ID, preventing clearInterval from stopping it",
      wrongCode: `setInterval(() => {
  console.log("Running forever with no handle to stop it!");
}, 1000);`,
      correctCode: `let myId = setInterval(() => {
  console.log("Stoppable interval");
}, 1000);
// Later: clearInterval(myId);`,
      explanation: "Always store the return value of `setInterval()` so you can terminate the interval and prevent memory leaks."
    }
  ],
  importantPoints: [
    "If the callback execution takes longer than the interval delay, interval calls can queue up.",
    "Modern browsers throttle background tab timers to 1000ms (1 second) or more to conserve battery.",
    "Recursive `setTimeout` is often preferred over `setInterval` when network requests take variable duration."
  ],
  interviewQuestions: [
    {
      question: "Why is recursive `setTimeout` often preferred over `setInterval`?",
      answer: "With `setInterval`, if a task (e.g. an API fetch) takes longer than the interval delay, calls will overlap or stack up with zero pause between them. A recursive `setTimeout` schedules the next iteration only *after* the previous execution finishes, ensuring consistent rest intervals between executions."
    }
  ],
  practiceExercises: [
    {
      problem: "Write an interval timer that prints numbers 1 to 5 at 500ms intervals and stops automatically after printing 5.",
      hint: "Keep counter and call clearInterval when count === 5.",
      solution: `let n = 1;
let id = setInterval(() => {
  console.log(n);
  if (n === 5) clearInterval(id);
  n++;
}, 500);`
    }
  ]
};

window.TOPIC_DATA_STORE["timers-cleartimeout"] = {
  id: "timers-cleartimeout",
  title: "clearTimeout()",
  lead: "Cancel scheduled setTimeout timers, abort pending operations, and implement input debouncing.",
  intro: "The `clearTimeout()` method cancels a timeout previously established by calling `setTimeout()`.",
  definition: "A Web API method that removes a scheduled timeout callback from the browser's timer registry.",
  whyUse: "Debouncing rapid keystrokes in search inputs, canceling auto-logout when user shows activity, and preventing memory leaks on component unmount.",
  syntax: `clearTimeout(timeoutId);`,
  syntaxExplanation: "`timeoutId` is the unique identifier returned by the `setTimeout()` call you wish to cancel.",
  simpleExample: `let myTimer = setTimeout(() => {
  console.log("This will never run!");
}, 5000);

// Cancel the timer before it triggers
clearTimeout(myTimer);
console.log("Timer successfully cancelled.");`,
  expectedOutput: `Timer successfully cancelled.`,
  realLifeExample: {
    domain: "E-commerce",
    title: "Search Bar Input Debounce Implementation",
    scenario: "Canceling pending search API queries on every keystroke until the user pauses typing for 300ms.",
    code: `let debounceTimer = null;

function handleSearchTyping(keystrokeText) {
  // Cancel previous scheduled request
  if (debounceTimer) {
    clearTimeout(debounceTimer);
    console.log("Previous pending search canceled.");
  }

  // Schedule new search
  debounceTimer = setTimeout(() => {
    console.log("Dispatched search request for query: '" + keystrokeText + "'");
  }, 300);
}

handleSearchTyping("iph");
handleSearchTyping("iphone");
handleSearchTyping("iphone 15");`,
    output: `Previous pending search canceled.\nPrevious pending search canceled.\nDispatched search request for query: 'iphone 15'`
  },
  practicalExample: {
    title: "Canceling Idle Auto-Logout on Activity",
    code: `let logoutTimer = setTimeout(() => console.log("Logged out"), 300000); // 5 mins

function onUserMouseClick() {
  clearTimeout(logoutTimer);
  console.log("User active! Resetting inactivity timeout.");
}
onUserMouseClick();`,
    output: `User active! Resetting inactivity timeout.`,
    note: "Resetting timers keeps active user sessions alive."
  },
  commonMistakes: [
    {
      mistake: "Passing an invalid or undefined ID to clearTimeout",
      wrongCode: `clearTimeout(); // Silent no-op, does not throw an error`,
      correctCode: `let id = setTimeout(task, 1000);
clearTimeout(id);`,
      explanation: "Passing an invalid ID to `clearTimeout()` fails silently without warning, so ensure your variable actually holds the timer ID."
    }
  ],
  importantPoints: [
    "Passing an invalid ID does not throw an exception.",
    "Must be called before the timeout delay elapses.",
    "Essential technique for Debounce and Throttle patterns."
  ],
  interviewQuestions: [
    {
      question: "What is Debouncing and how does clearTimeout make it work?",
      answer: "Debouncing ensures that a function is not called until a certain amount of time has passed since it was last invoked. Each time an event fires, `clearTimeout()` cancels the previous scheduled execution and sets a new timer, delaying execution until user activity halts."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a debounced log function that cancels previous calls if invoked within 200ms.",
      hint: "Store timer in an outer variable and clear before setTimeout.",
      solution: `let timer;
function debounceLog(msg) {
  clearTimeout(timer);
  timer = setTimeout(() => console.log("Debounced:", msg), 200);
}
debounceLog("First");
debounceLog("Final"); // Only "Final" will log!`
    }
  ]
};

window.TOPIC_DATA_STORE["timers-clearinterval"] = {
  id: "timers-clearinterval",
  title: "clearInterval()",
  lead: "Halt recurring interval loops, prevent background resource drain, and clean up active event subscriptions.",
  intro: "The `clearInterval()` method cancels a timed, repeating action which was previously established by a call to `setInterval()`.",
  definition: "A Web API method that terminates continuous execution of a scheduled interval loop.",
  whyUse: "Stopping animations, halting progress bars when completed, cleaning up game loops, and preventing memory leaks in single-page apps.",
  syntax: `clearInterval(intervalId);`,
  syntaxExplanation: "`intervalId` is the unique numerical ID returned by the original `setInterval()` invocation.",
  simpleExample: `let count = 0;
let timer = setInterval(() => {
  count++;
  console.log("Count: " + count);
  if (count === 2) {
    clearInterval(timer);
    console.log("Stopped interval.");
  }
}, 500);`,
  expectedOutput: `Count: 1\nCount: 2\nStopped interval.`,
  realLifeExample: {
    domain: "Student Management",
    title: "Online Exam Timer Termination",
    scenario: "Stopping the exam clock and auto-submitting the test when the allotted time runs out.",
    code: `let timeLeftSeconds = 2;
console.log("Exam started. Time remaining: " + timeLeftSeconds + "s");

let examTimer = setInterval(() => {
  timeLeftSeconds--;
  console.log("Exam Clock: " + timeLeftSeconds + "s remaining");

  if (timeLeftSeconds <= 0) {
    clearInterval(examTimer); // Halt the timer
    console.log("TIME UP! Exam timer halted. Auto-submitting responses to server...");
  }
}, 1000);`,
    output: `Exam started. Time remaining: 2s\nExam Clock: 1s remaining\nExam Clock: 0s remaining\nTIME UP! Exam timer halted. Auto-submitting responses to server...`
  },
  practicalExample: {
    title: "Progress Bar Completion with clearInterval",
    code: `let progress = 0;
let loader = setInterval(() => {
  progress += 50;
  console.log("Loading: " + progress + "%");
  if (progress >= 100) {
    clearInterval(loader);
    console.log("Resource download 100% complete!");
  }
}, 200);`,
    output: `Loading: 50%\nLoading: 100%\nResource download 100% complete!`,
    note: "Always clear intervals when termination threshold is achieved."
  },
  commonMistakes: [
    {
      mistake: "Clearing an interval inside an arrow function without having the id accessible",
      wrongCode: `// setInterval(() => { clearInterval(id); }, 1000); // If id is const, TDZ reference error!`,
      correctCode: `let id;
id = setInterval(() => {
  clearInterval(id);
}, 1000);`,
      explanation: "Use `let id;` so the variable is in scope and accessible to `clearInterval` inside the callback."
    }
  ],
  importantPoints: [
    "Unstopped intervals consume CPU cycles in the background indefinitely.",
    "In SPA frameworks (React/Vue/Vanilla), always clear intervals when navigating away from a view.",
    "`clearInterval()` and `clearTimeout()` share the same pool of IDs in browsers, but using the matching clear function is best practice."
  ],
  interviewQuestions: [
    {
      question: "What happens if you navigate away from a webpage with an active setInterval running?",
      answer: "The interval continues to execute in memory, holding references to closures and DOM nodes, causing memory leaks and battery drain. In modern single-page applications, developers must clean up intervals on view teardown."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a script that beeps 3 times at 300ms intervals, then clears the interval and prints 'Alarm Finished'.",
      hint: "Count beeps, if count === 3 call clearInterval.",
      solution: `let beeps = 0;
let alarm = setInterval(() => {
  beeps++;
  console.log("BEEP #" + beeps);
  if (beeps === 3) {
    clearInterval(alarm);
    console.log("Alarm Finished");
  }
}, 300);`
    }
  ]
};
