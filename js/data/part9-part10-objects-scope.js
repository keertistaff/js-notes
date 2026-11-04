/* ==========================================================================
   PART 9 & 10: Objects & Scope - Comprehensive Topics Data
   ========================================================================== */

window.TOPIC_DATA_STORE = window.TOPIC_DATA_STORE || {};

// PART 9: OBJECTS
window.TOPIC_DATA_STORE["objects-intro"] = {
  id: "objects-intro",
  title: "Object Introduction",
  lead: "Master JavaScript object fundamentals, key-value data structures, object literals, and references.",
  intro: "In JavaScript, objects are king. If you understand objects, you understand JavaScript. Almost 'everything' in JavaScript is an object.",
  definition: "An object is a standalone collection of properties (key-value pairs) and methods, where a property is an association between a name (key) and a value.",
  whyUse: "Modeling real-world entities like Users, Bank Accounts, Shopping Carts, Products, and Application State.",
  syntax: `const objectName = {
  key1: "value1",
  key2: 100,
  method1: function() { /* ... */ }
};`,
  syntaxExplanation: "Keys are strings or symbols; values can be any data type, including arrays, nested objects, and functions.",
  simpleExample: `const student = {
  name: "Priya",
  rollNo: "R-101",
  course: "Computer Science",
  semester: 4
};
console.log("Student Name:", student.name);
console.log("Course:", student["course"]);`,
  expectedOutput: `Student Name: Priya\nCourse: Computer Science`,
  realLifeExample: {
    domain: "Banking",
    title: "Customer Account Ledger Profile",
    scenario: "Representing a customer's banking profile with state, nested address, and account balance.",
    code: `const customerAccount = {
  accountNumber: "SB-9876543210",
  holderName: "Arjun Mehta",
  branch: "Connaught Place, Delhi",
  balance: 64500.50,
  isKycVerified: true,
  address: {
    city: "New Delhi",
    pinCode: 110001
  }
};

console.log("Account Holder : " + customerAccount.holderName);
console.log("Branch         : " + customerAccount.branch);
console.log("Balance        : Rs." + customerAccount.balance);
console.log("City           : " + customerAccount.address.city);`,
    output: `Account Holder : Arjun Mehta\nBranch         : Connaught Place, Delhi\nBalance        : Rs.64500.5\nCity           : New Delhi`
  },
  practicalExample: {
    title: "Dynamic Key Access with Bracket Notation",
    code: `let product = { name: "MacBook Air", price: 99990, inStock: true };
let fieldToRead = "price";
console.log("Field " + fieldToRead + " =", product[fieldToRead]);`,
    output: `Field price = 99990`,
    note: "Bracket notation allows dynamically reading properties from variable names."
  },
  commonMistakes: [
    {
      mistake: "Copying objects with assignment (=) expecting an independent clone",
      wrongCode: `let obj1 = { score: 50 };
let obj2 = obj1; // Copies reference, NOT the object!
obj2.score = 100;
console.log(obj1.score); // 100! obj1 was modified!`,
      correctCode: `let obj1 = { score: 50 };
let obj2 = { ...obj1 }; // Shallow clone using spread operator!
obj2.score = 100;
console.log(obj1.score); // 50! obj1 is preserved.`,
      explanation: "Objects are stored by reference. Use object spread `{ ...obj }` or `structuredClone()` to create independent copies."
    }
  ],
  importantPoints: [
    "Dot notation `obj.prop` is preferred when property name is a valid identifier.",
    "Bracket notation `obj['prop']` is required for dynamic keys or keys with spaces/hyphens.",
    "`const` prevents reassigning the object variable, but properties remain mutable."
  ],
  interviewQuestions: [
    {
      question: "How do you deep-clone an object in modern JavaScript without external libraries?",
      answer: "Modern browsers and Node.js provide `structuredClone(obj)`. Historically, `JSON.parse(JSON.stringify(obj))` was used, but it failed on dates, functions, undefined, and circular references."
    }
  ],
  practiceExercises: [
    {
      problem: "Create an object representing a Book with title, author, pages, and isRead. Write code to update isRead to true and add a publisher property.",
      hint: "Use dot notation to modify and add.",
      solution: `let book = { title: "Eloquent JS", author: "Marijn", pages: 472, isRead: false };
book.isRead = true;
book.publisher = "No Starch Press";
console.log(book);`
    }
  ]
};

window.TOPIC_DATA_STORE["objects-properties"] = {
  id: "objects-properties",
  title: "Object Properties",
  lead: "Master property access, adding, modifying, deleting properties with delete, and property attributes.",
  intro: "Properties are the values associated with a JavaScript object. A JavaScript object is a collection of unordered properties.",
  definition: "Key-value associations on an object, where keys can be strings or symbols.",
  whyUse: "Adding new attributes dynamically, checking for property existence with `in`, and deleting expired state.",
  syntax: `obj.propertyName;       // Read
obj["propertyName"];    // Read bracket
obj.newProperty = 123;  // Add / Update
delete obj.oldProperty; // Delete
"key" in obj;           // Existence check`,
  syntaxExplanation: "The `delete` operator removes a property from an object. The `in` operator and `Object.hasOwn()` test for property existence.",
  simpleExample: `let car = { brand: "Tesla", model: "Model 3" };
car.color = "Midnight Silver"; // Add property
delete car.model;              // Remove property
console.log(car);`,
  expectedOutput: `{ brand: 'Tesla', color: 'Midnight Silver' }`,
  realLifeExample: {
    domain: "E-commerce",
    title: "Shopping Cart Item Property Management",
    scenario: "Modifying item quantity, applying discount tags, and deleting removed items from a user cart.",
    code: `let cartItem = {
  itemId: "ITEM-902",
  title: "Wireless Mechanical Keyboard",
  price: 3200,
  quantity: 1
};

// Customer increments quantity
cartItem.quantity += 1;
// Adding seasonal discount tag
cartItem.discountApplied = "10% Off";

console.log("Updated Cart Item:", cartItem);
console.log("Has Discount?", "discountApplied" in cartItem);

// Removing discount tag
delete cartItem.discountApplied;
console.log("After Removal Has Discount?", "discountApplied" in cartItem);`,
    output: `Updated Cart Item: { itemId: 'ITEM-902', title: 'Wireless Mechanical Keyboard', price: 3200, quantity: 2, discountApplied: '10% Off' }\nHas Discount? true\nAfter Removal Has Discount? false`
  },
  practicalExample: {
    title: "Object.keys(), Object.values(), Object.entries()",
    code: `let scores = { math: 95, physics: 88, chemistry: 92 };
console.log("Subjects:", Object.keys(scores));
console.log("Marks   :", Object.values(scores));
for (let [subject, mark] of Object.entries(scores)) {
  console.log(subject + " -> " + mark);
}`,
    output: `Subjects: [ 'math', 'physics', 'chemistry' ]\nMarks   : [ 95, 88, 92 ]\nmath -> 95\nphysics -> 88\nchemistry -> 92`,
    note: "`Object.entries()` decomposes objects into key-value pairs for iterative traversal."
  },
  commonMistakes: [
    {
      mistake: "Setting property to undefined instead of using delete operator",
      wrongCode: `let user = { id: 1, role: "admin" };
user.role = undefined; // The property 'role' still exists in the object!
console.log("role" in user); // true!`,
      correctCode: `let user = { id: 1, role: "admin" };
delete user.role; // Completely removes the key
console.log("role" in user); // false`,
      explanation: "Assigning `undefined` leaves the key present on the object; use `delete` to completely remove it."
    }
  ],
  importantPoints: [
    "Keys in objects are always coerced to strings (unless Symbols).",
    "Use `Object.hasOwn(obj, 'prop')` over `hasOwnProperty` in modern code.",
    "`for...in` iterates over all enumerable properties, including prototype properties."
  ],
  interviewQuestions: [
    {
      question: "What is the difference between `Object.hasOwn()` and `in` operator?",
      answer: "`in` checks if the property exists on the object OR anywhere in its prototype chain. `Object.hasOwn()` checks only for direct (own) properties on the object itself, ignoring prototype inheritance."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a function that counts how many properties an object contains without using a for-in loop.",
      hint: "Use Object.keys(obj).length.",
      solution: `function countProperties(obj) {
  return Object.keys(obj).length;
}
console.log("Count:", countProperties({ a: 1, b: 2, c: 3 })); // 3`
    }
  ]
};

window.TOPIC_DATA_STORE["objects-methods"] = {
  id: "objects-methods",
  title: "Object Methods",
  lead: "Master methods, function properties, method shorthand syntax, and executing behavior within objects.",
  intro: "An object method is an object property containing a function definition. Methods represent actions that can be performed on objects.",
  definition: "A function that is stored as a property inside an object, giving the object behavioral capabilities.",
  whyUse: "Encapsulating data and behavior together in object-oriented programming (OOP).",
  syntax: `const person = {
  firstName: "Rohan",
  // Method shorthand (ES6)
  fullName() {
    return this.firstName;
  }
};`,
  syntaxExplanation: "Methods can be written using traditional `funcName: function() {}` or modern ES6 shorthand `funcName() {}`.",
  simpleExample: `const calculator = {
  add(a, b) { return a + b; },
  subtract(a, b) { return a - b; }
};
console.log("Add:", calculator.add(15, 25));
console.log("Subtract:", calculator.subtract(50, 15));`,
  expectedOutput: `Add: 40\nSubtract: 35`,
  realLifeExample: {
    domain: "Attendance Management",
    title: "Biometric Punch Card Clocking Method",
    scenario: "An employee punch card object with methods to punch in, punch out, and calculate total hours.",
    code: `const employeeCard = {
  empId: "EMP-401",
  name: "Sneha Kapoor",
  punches: [],
  punchIn(time) {
    this.punches.push({ type: "IN", time: time });
    console.log(this.name + " punched IN at " + time);
  },
  punchOut(time) {
    this.punches.push({ type: "OUT", time: time });
    console.log(this.name + " punched OUT at " + time);
  },
  getTotalPunches() {
    return this.punches.length;
  }
};

employeeCard.punchIn("09:00 AM");
employeeCard.punchOut("05:30 PM");
console.log("Total Recorded Events: " + employeeCard.getTotalPunches());`,
    output: `Sneha Kapoor punched IN at 09:00 AM\nSneha Kapoor punched OUT at 05:30 PM\nTotal Recorded Events: 2`
  },
  practicalExample: {
    title: "Method Chaining Pattern",
    code: `let bankTx = {
  balance: 1000,
  deposit(amt) {
    this.balance += amt;
    return this; // Return this to allow chaining!
  },
  withdraw(amt) {
    this.balance -= amt;
    return this;
  }
};

bankTx.deposit(500).withdraw(200).deposit(100);
console.log("Final Chained Balance: Rs." + bankTx.balance);`,
    output: `Final Chained Balance: Rs.1400`,
    note: "Returning `this` from methods enables fluent method chaining."
  },
  commonMistakes: [
    {
      mistake: "Writing methods as arrow functions when they need to access 'this'",
      wrongCode: `const user = {
  name: "Amit",
  greet: () => "Hello, " + this.name // 'this' points to window, NOT user!
};
console.log(user.greet()); // "Hello, undefined"`,
      correctCode: `const user = {
  name: "Amit",
  greet() { return "Hello, " + this.name; }
};
console.log(user.greet()); // "Hello, Amit"`,
      explanation: "Arrow functions do not bind their own `this`. Always use method shorthand syntax `methodName() {}` for object methods."
    }
  ],
  importantPoints: [
    "Use ES6 method shorthand `method() {}` for clean code.",
    "Methods have direct access to sibling properties via `this`.",
    "Method chaining is achieved by returning `this`."
  ],
  interviewQuestions: [
    {
      question: "How do you implement method chaining in JavaScript?",
      answer: "By ensuring that each chained method returns `this` (the current object instance) at the conclusion of its execution, allowing subsequent method calls to be chained on the returned object."
    }
  ],
  practiceExercises: [
    {
      problem: "Create an object `wallet` with property `cash: 500` and methods `addCash(amt)` and `spendCash(amt)`.",
      hint: "Add amount to this.cash and subtract amount from this.cash.",
      solution: `const wallet = {
  cash: 500,
  addCash(amt) { this.cash += amt; return this.cash; },
  spendCash(amt) { this.cash -= amt; return this.cash; }
};
console.log("Added 200:", wallet.addCash(200));
console.log("Spent 150:", wallet.spendCash(150));`
    }
  ]
};

window.TOPIC_DATA_STORE["objects-this"] = {
  id: "objects-this",
  title: "This Keyword",
  lead: "Master execution contexts, the 4 rules of this binding, call/apply/bind, and lexical this in arrow functions.",
  intro: "The JavaScript `this` keyword refers to the object it belongs to. It has different values depending on where and how it is used.",
  definition: "A reference keyword that points to the execution context of the currently running function.",
  whyUse: "Allows methods to operate generically on the specific object instance that invoked them.",
  syntax: `// 1. In an object method: this refers to the object
obj.method();

// 2. Alone or in a simple function: this refers to global (or undefined in strict mode)
// 3. In an event handler: this refers to the DOM element
// 4. In a constructor: this refers to the newly instantiated object`,
  syntaxExplanation: "`this` is not determined at definition time; it is bound at invocation time according to how the function is called.",
  simpleExample: `const person = {
  name: "Kavita",
  sayName() {
    return "My name is " + this.name;
  }
};
console.log(person.sayName());`,
  expectedOutput: `My name is Kavita`,
  realLifeExample: {
    domain: "Employee Management",
    title: "Employee Tax Calculation with Dynamic 'this'",
    scenario: "A shared payroll calculation function bound to different employee profile objects.",
    code: `function calculateNetPay(taxRate) {
  let deductions = this.baseSalary * taxRate;
  return this.baseSalary - deductions;
}

let emp1 = { name: "Rajesh", baseSalary: 60000 };
let emp2 = { name: "Anu", baseSalary: 90000 };

// Using call to invoke function with custom this
console.log(emp1.name + " Net: Rs. " + calculateNetPay.call(emp1, 0.15));
console.log(emp2.name + " Net: Rs. " + calculateNetPay.call(emp2, 0.20));`,
    output: `Rajesh Net: Rs. 51000\nAnu Net: Rs. 72000`
  },
  practicalExample: {
    title: "Explicit Binding with .bind()",
    code: `const module = {
  x: 42,
  getX() { return this.x; }
};

const unboundGetX = module.getX;
console.log("Unbound call:", unboundGetX()); // undefined

const boundGetX = module.getX.bind(module);
console.log("Bound call  :", boundGetX()); // 42`,
    output: `Unbound call: undefined\nBound call  : 42`,
    note: "`.bind()` permanently locks `this` to the designated object."
  },
  commonMistakes: [
    {
      mistake: "Expecting regular nested functions to inherit 'this'",
      wrongCode: `const user = {
  name: "Tarun",
  show() {
    function inner() {
      console.log(this.name); // 'this' is window or undefined!
    }
    inner();
  }
};
user.show();`,
      correctCode: `const user = {
  name: "Tarun",
  show() {
    const inner = () => { // Arrow function inherits outer 'this'!
      console.log(this.name);
    };
    inner();
  }
};
user.show(); // "Tarun"`,
      explanation: "Regular functions bind their own `this`. Use arrow functions inside methods to inherit the parent's `this`."
    }
  ],
  importantPoints: [
    "Arrow functions DO NOT have their own `this`; they inherit it lexically.",
    "In strict mode (`'use strict'`), `this` in standalone functions defaults to `undefined`, preventing accidental global mutation.",
    "`call()` and `apply()` invoke immediately; `bind()` returns a new permanently bound function."
  ],
  interviewQuestions: [
    {
      question: "What are the 4 binding rules for `this` in JavaScript?",
      answer: "1. **Default Binding**: Standalone function call -> `window` (or `undefined` in strict mode).\n2. **Implicit Binding**: Called via object method `obj.foo()` -> `obj`.\n3. **Explicit Binding**: Called via `.call()`, `.apply()`, or `.bind()` -> specified object.\n4. **New Binding**: Called with `new Foo()` -> newly created instance."
    }
  ],
  practiceExercises: [
    {
      problem: "Use `.call()` to borrow an object's `getFullTitle()` method for another object.",
      hint: "method.call(targetObject)",
      solution: `let doc1 = { title: "JS Guide", getFullTitle() { return "Title: " + this.title; } };
let doc2 = { title: "CSS Mastery" };
console.log(doc1.getFullTitle.call(doc2)); // "Title: CSS Mastery"`
    }
  ]
};

window.TOPIC_DATA_STORE["objects-display"] = {
  id: "objects-display",
  title: "Object Display",
  lead: "Master displaying objects: Object.values(), JSON.stringify(), toString() overrides, and table formatting.",
  intro: "Displaying a JavaScript object will produce `[object Object]` unless formatted. JavaScript offers multiple methods to serialize and inspect object contents.",
  definition: "Techniques and APIs to inspect, format, and serialize object contents into readable strings or tabular displays.",
  whyUse: "Debugging runtime states, displaying records on web pages, serializing state for APIs, and logging structured data.",
  syntax: `JSON.stringify(obj, replacer, space);
Object.values(obj);
Object.entries(obj);
obj.toString();`,
  syntaxExplanation: "`JSON.stringify(obj, null, 2)` formats objects into readable indented JSON strings. Overriding `.toString()` allows custom text representation.",
  simpleExample: `let student = { name: "Nikhil", age: 22, course: "Fullstack" };
console.log("JSON Formatted:\n" + JSON.stringify(student, null, 2));`,
  expectedOutput: `JSON Formatted:
{
  "name": "Nikhil",
  "age": 22,
  "course": "Fullstack"
}`,
  realLifeExample: {
    domain: "Business Applications",
    title: "Order Export Serialization",
    scenario: "Converting internal order objects into formatted JSON payloads for remote warehouse dispatch.",
    code: `let order = {
  orderId: "ORD-8821",
  client: "Global Logistics Ltd",
  itemsCount: 140,
  isShipped: false
};

// Formatted JSON string ready for network transfer
let payload = JSON.stringify(order);
console.log("Serialized Payload:", payload);
console.log("Payload Length   :", payload.length, "bytes");`,
    output: `Serialized Payload: {"orderId":"ORD-8821","client":"Global Logistics Ltd","itemsCount":140,"isShipped":false}\nPayload Length   : 78 bytes`
  },
  practicalExample: {
    title: "Customizing Object toString() Method",
    code: `let product = {
  name: "Desk Lamp",
  price: 899,
  toString() {
    return \`\${this.name} (Rs. \${this.price})\`;
  }
};
console.log("Product: " + product);`,
    output: `Product: Desk Lamp (Rs. 899)`,
    note: "Overriding `toString()` dictates how the object displays during string coercion."
  },
  commonMistakes: [
    {
      mistake: "Directly concatenating objects with strings without formatting",
      wrongCode: `let user = { name: "Sara" };
console.log("User: " + user); // Outputs: User: [object Object]`,
      correctCode: `let user = { name: "Sara" };
console.log("User:", user); // Or JSON.stringify(user)`,
      explanation: "String concatenation coerces objects to `[object Object]` unless `JSON.stringify()` or a custom `toString()` is used."
    }
  ],
  importantPoints: [
    "`JSON.stringify()` skips function properties, Symbols, and `undefined`.",
    "`console.table(arrayOfObjects)` displays structured arrays in table format in DevTools.",
    "Circular references in objects will cause `JSON.stringify()` to throw a `TypeError`."
  ],
  interviewQuestions: [
    {
      question: "What happens when you pass a circular object to JSON.stringify()?",
      answer: "`JSON.stringify()` throws a `TypeError: Converting circular structure to JSON`. Circular references must be handled using a custom replacer function or a circular serializer library."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a script that takes an object and converts it to a 2-space indented pretty JSON string.",
      hint: "Use JSON.stringify(obj, null, 2).",
      solution: `let conf = { host: "localhost", port: 8080, secure: true };
let pretty = JSON.stringify(conf, null, 2);
console.log(pretty);`
    }
  ]
};

window.TOPIC_DATA_STORE["objects-constructors"] = {
  id: "objects-constructors",
  title: "Object Constructors",
  lead: "Master constructor functions, prototype inheritance, the 'new' keyword, and instance factory patterns.",
  intro: "Sometimes we need a 'blueprint' for creating many objects of the same type. The way to create an 'object type' is to use an object constructor function.",
  definition: "A regular function used with the `new` keyword to create and initialize multiple instances of an object type.",
  whyUse: "Object creation blueprints, initializing shared prototypes, and organizing object-oriented class patterns prior to ES6 classes.",
  syntax: `function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
}
const friend = new Person("Ravi", "Verma", 23);`,
  syntaxExplanation: "When invoked with `new`: 1. A new empty object is created. 2. `this` is bound to the new object. 3. Code executes. 4. The new object is returned automatically.",
  simpleExample: `function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}
let myCar = new Car("Toyota", "Corolla");
console.log(myCar.brand + " " + myCar.model);`,
  expectedOutput: `Toyota Corolla`,
  realLifeExample: {
    domain: "Student Management",
    title: "Student Enrollment Constructor",
    scenario: "Creating standardized student records with shared GPA calculation methods via prototypes.",
    code: `function Student(rollNo, name, semester) {
  this.rollNo = rollNo;
  this.name = name;
  this.semester = semester;
  this.grades = [];
}

// Add shared method to prototype to save memory
Student.prototype.addGrade = function(subject, mark) {
  this.grades.push({ subject, mark });
};

Student.prototype.getAverage = function() {
  if (this.grades.length === 0) return 0;
  let total = this.grades.reduce((sum, g) => sum + g.mark, 0);
  return total / this.grades.length;
};

let student1 = new Student("S-101", "Vandana", 3);
student1.addGrade("Algorithms", 88);
student1.addGrade("Databases", 94);

console.log(student1.name + " (" + student1.rollNo + ")");
console.log("Average Marks: " + student1.getAverage() + "%");`,
    output: `Vandana (S-101)\nAverage Marks: 91%`
  },
  practicalExample: {
    title: "The 'instanceof' Operator",
    code: `function Manager(name) { this.name = name; }
let boss = new Manager("Kapoor");

console.log("boss is Manager?", boss instanceof Manager);
console.log("boss is Object? ", boss instanceof Object);`,
    output: `boss is Manager? true\nboss is Object?  true`,
    note: "`instanceof` tests presence of constructor prototype in instance chain."
  },
  commonMistakes: [
    {
      mistake: "Calling a constructor function without the 'new' keyword",
      wrongCode: `function User(name) { this.name = name; }
let u = User("Anil"); // 'this' attaches name to window! Returns undefined!
console.log(u); // undefined!`,
      correctCode: `function User(name) { this.name = name; }
let u = new User("Anil"); // 'new' allocates fresh instance
console.log(u.name); // "Anil"`,
      explanation: "Without `new`, constructor functions run as ordinary functions, binding `this` to global scope and returning `undefined`."
    }
  ],
  importantPoints: [
    "Constructor functions are conventionally capitalized using PascalCase.",
    "Attach methods to `Constructor.prototype` rather than inside the constructor body to avoid duplicating function memory across instances.",
    "Modern ES6 `class` syntax is syntactic sugar over constructor functions and prototypes."
  ],
  interviewQuestions: [
    {
      question: "What exactly happens when a function is called with the `new` keyword?",
      answer: "1. A new plain JavaScript object `{}` is created.\n2. The object's internal prototype (`[[Prototype]]`) is linked to the constructor's `prototype` property.\n3. The constructor function is executed with `this` bound to the new object.\n4. If the constructor returns an object, that object is returned; otherwise, the newly created object is returned."
    }
  ],
  practiceExercises: [
    {
      problem: "Create a constructor `BankAccount(accountNo, balance)` with a prototype method `withdraw(amt)` that checks balance before deducting.",
      hint: "BankAccount.prototype.withdraw = function(amt) { ... }",
      solution: `function BankAccount(accountNo, balance) {
  this.accountNo = accountNo;
  this.balance = balance;
}
BankAccount.prototype.withdraw = function(amt) {
  if (amt > this.balance) return "Insufficient funds";
  this.balance -= amt;
  return "Withdrew Rs." + amt + " | Remaining: Rs." + this.balance;
};
let acc = new BankAccount("AC-123", 1000);
console.log(acc.withdraw(400));
console.log(acc.withdraw(800));`
    }
  ]
};

// PART 10: SCOPE AND ADVANCED BASICS
window.TOPIC_DATA_STORE["scope-intro"] = {
  id: "scope-intro",
  title: "Scope",
  lead: "Master Global, Module, Function, and Block scopes in JavaScript.",
  intro: "Scope determines the accessibility (visibility) of variables. JavaScript has Global Scope, Function Scope, Block Scope, and Module Scope.",
  definition: "The current context of execution in which values and expressions are 'visible' or can be referenced.",
  whyUse: "Isolates state, prevents name collisions between libraries, and secures private data.",
  syntax: `let globalVar = "Global"; // Global scope

function example() {
  let functionVar = "Function"; // Function scope
  if (true) {
    let blockVar = "Block"; // Block scope
  }
}`,
  syntaxExplanation: "Variables declared outside blocks are global. `let` and `const` inside `{}` have block scope. Variables declared with `var` inside functions have function scope.",
  simpleExample: `let app = "Hub"; // Global
{
  let inner = "Secret"; // Block
  console.log("Inside block:", inner);
}
// console.log(inner); // ReferenceError!`,
  expectedOutput: `Inside block: Secret`,
  realLifeExample: {
    domain: "Banking",
    title: "Transaction Security Token Scoping",
    scenario: "Restricting session authentication tokens strictly to transaction execution blocks.",
    code: `let currentUserId = "USR-992"; // Global user reference

function executeFundTransfer(amount) {
  let internalLedgerCode = "TX-8801"; // Function scoped
  
  if (amount > 0) {
    let oneTimeSessionToken = "OTP-9482"; // Block scoped
    console.log("Transferred Rs." + amount + " using token " + oneTimeSessionToken);
  }
  // oneTimeSessionToken is already destroyed here!
  console.log("Audit Complete for User: " + currentUserId);
}

executeFundTransfer(5000);`,
    output: `Transferred Rs.5000 using token OTP-9482\nAudit Complete for User: USR-992`
  },
  practicalExample: {
    title: "Shadowing in Nested Scopes",
    code: `let count = 10;
function testShadowing() {
  let count = 50; // Shadows the global variable
  console.log("Inner count:", count);
}
testShadowing();
console.log("Outer count:", count);`,
    output: `Inner count: 50\nOuter count: 10`,
    note: "Inner variables with the same name shadow (hide) outer variables without overwriting them."
  },
  commonMistakes: [
    {
      mistake: "Assuming var respects block scope like let",
      wrongCode: `if (true) {
  var leaked = "I leak outside!";
}
console.log(leaked); // Leaks out and prints!`,
      correctCode: `if (true) {
  let safe = "I stay inside!";
}
// console.log(safe); // ReferenceError: safe is not defined`,
      explanation: "`var` ignores block scope `{}` and leaks out to the enclosing function or global window object."
    }
  ],
  importantPoints: [
    "`let` and `const` provide block scope.",
    "`var` provides function scope, ignoring `{}` blocks.",
    "Global variables attach to the `window` object in browsers (when declared with `var`)."
  ],
  interviewQuestions: [
    {
      question: "What is variable shadowing in JavaScript?",
      answer: "Variable shadowing occurs when a variable declared within a local or block scope has the exact same name as a variable in an outer enclosing scope. The local variable 'shadows' the outer one within that block."
    }
  ],
  practiceExercises: [
    {
      problem: "Demonstrate block scope by defining a variable `role` inside an `if` block and showing it cannot be accessed outside.",
      hint: "Use let inside if (true) { ... }.",
      solution: `if (true) {
  let role = "Admin";
  console.log("Inside:", role);
}
// role is not accessible here
console.log("Scope test verified.");`
    }
  ]
};

window.TOPIC_DATA_STORE["scope-code-blocks"] = {
  id: "scope-code-blocks",
  title: "Code Blocks",
  lead: "Master statement grouping, standalone blocks, lexical isolation, and variable lifetime.",
  intro: "A code block is a sequence of zero or more statements enclosed in curly brackets `{}`. It defines a boundary for statements and block-scoped variables.",
  definition: "A syntactic grouping of statements surrounded by `{}` that establishes a lexical scope boundary for `let` and `const`.",
  whyUse: "Grouping statements for conditionals and loops, and creating isolated scratch scopes without function overhead.",
  syntax: `{
  // Isolated block
  let temp = "Temporary Data";
  console.log(temp);
}`,
  syntaxExplanation: "Variables declared with `let` and `const` inside `{}` exist only while the block executes, freeing memory immediately upon completion.",
  simpleExample: `{
  let a = 10;
  let b = 20;
  console.log("Sum in block:", a + b);
}`,
  expectedOutput: `Sum in block: 30`,
  realLifeExample: {
    domain: "Restaurant Billing",
    title: "Temporary Calculation Scratch Block",
    scenario: "Isolating temporary food discount variables during table bill computation.",
    code: `let finalBill = 1800;

{
  let festiveDiscountPercent = 10;
  let discountAmount = (finalBill * festiveDiscountPercent) / 100;
  finalBill -= discountAmount;
  console.log("Applied discount: Rs." + discountAmount);
}
// festiveDiscountPercent and discountAmount are cleaned from memory

console.log("Total Payable: Rs." + finalBill);`,
    output: `Applied discount: Rs.1800\nApplied discount: Rs.180\nTotal Payable: Rs.1620`
  },
  practicalExample: {
    title: "Switch Case Block Scoping",
    code: `let action = "EDIT";
switch (action) {
  case "EDIT": {
    let msg = "Editing item"; // Block isolates msg
    console.log(msg);
    break;
  }
  case "VIEW": {
    let msg = "Viewing item"; // Reusing name 'msg' safely
    console.log(msg);
    break;
  }
}`,
    output: `Editing item`,
    note: "Wrapping `case` clauses in `{}` prevents variable redeclaration errors in switch statements."
  },
  commonMistakes: [
    {
      mistake: "Declaring let variables with duplicate names in switch statements without blocks",
      wrongCode: `switch (val) {
  case 1:
    let x = 10; break;
  case 2:
    let x = 20; break; // SyntaxError: Identifier 'x' has already been declared
}`,
      correctCode: `switch (val) {
  case 1: {
    let x = 10; break;
  }
  case 2: {
    let x = 20; break; // Valid because each case has its own block!
  }
}`,
      explanation: "A switch statement is a single block scope. Use `{}` in each case to isolate case variables."
    }
  ],
  importantPoints: [
    "Standalone `{}` blocks create lexical scopes without function overhead.",
    "Garbage collection can reclaim memory sooner for variables bounded by tight blocks.",
    "Blocks do not restrict `var` or `function` declarations (in non-strict mode)."
  ],
  interviewQuestions: [
    {
      question: "Why should you use curly braces in switch cases when declaring `let` or `const`?",
      answer: "The entire `switch` statement shares a single block scope. Without curly braces `{}` around individual `case` bodies, declaring a variable with the same name in multiple cases triggers a `SyntaxError: Identifier has already been declared`."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a standalone block that swaps two variables without polluting the outer scope with a temporary variable.",
      hint: "Put { let temp = a; a = b; b = temp; }.",
      solution: `let x = 5, y = 10;
{
  let temp = x;
  x = y;
  y = temp;
}
console.log("x =", x, ", y =", y); // 10, 5`
    }
  ]
};

window.TOPIC_DATA_STORE["scope-hoisting"] = {
  id: "scope-hoisting",
  title: "Hoisting",
  lead: "Master variable and function hoisting, compilation phase vs execution phase, and Temporal Dead Zone (TDZ).",
  intro: "Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope (to the top of the current script or the current function) during compilation.",
  definition: "The mechanism where JavaScript allocates memory for variable and function declarations during the compile phase before code execution begins.",
  whyUse: "Enables declaring utility functions anywhere in a file and calling them before their definitions.",
  syntax: `// Function declaration hoisting (Fully hoisted with body)
greet(); // Works!
function greet() { console.log("Hello"); }

// Variable declaration hoisting
console.log(myVar); // undefined (declaration hoisted, value is not!)
var myVar = 10;`,
  syntaxExplanation: "Function declarations are hoisted with their definitions. `var` is hoisted and initialized to `undefined`. `let` and `const` are hoisted but uninitialized (in TDZ).",
  simpleExample: `sayHi();
function sayHi() {
  console.log("Hi from hoisted function!");
}`,
  expectedOutput: `Hi from hoisted function!`,
  realLifeExample: {
    domain: "Student Management",
    title: "Modular Code Structure Using Hoisted Functions",
    scenario: "Organizing business controllers at the top of a file while placing helper formatting functions at the bottom.",
    code: `// High-level business flow at top
displayStudentCard("Aarav", 88);

// Low-level helper implementation declared cleanly below
function displayStudentCard(name, marks) {
  let status = formatStatus(marks);
  console.log("Student: " + name + " | Performance: " + status);
}

function formatStatus(marks) {
  return marks >= 75 ? "Distinction" : "Standard Pass";
}`,
    output: `Student: Aarav | Performance: Distinction`
  },
  practicalExample: {
    title: "Temporal Dead Zone (TDZ) Demonstration",
    code: `// let & const are hoisted, but accessing before declaration throws ReferenceError
try {
  console.log(score);
  let score = 90;
} catch (err) {
  console.log("Caught TDZ Error:", err.name); // ReferenceError
}`,
    output: `Caught TDZ Error: ReferenceError`,
    note: "The variable exists in TDZ from scope start until the `let` statement is reached."
  },
  commonMistakes: [
    {
      mistake: "Assuming function expressions are hoisted like function declarations",
      wrongCode: `play(); // TypeError: play is not a function!
var play = function() { console.log("Playing"); };`,
      correctCode: `var play = function() { console.log("Playing"); };
play(); // Called after assignment`,
      explanation: "With `var play = function()`, only the declaration `var play` is hoisted (as `undefined`), so invoking `undefined()` throws a `TypeError`."
    }
  ],
  importantPoints: [
    "JavaScript compiles code in two phases: Creation (Hoisting) Phase and Execution Phase.",
    "Only declarations are hoisted, NOT initializations or assignments.",
    "Function declarations take precedence over variable declarations with the same name."
  ],
  interviewQuestions: [
    {
      question: "Are `let` and `const` hoisted in JavaScript?",
      answer: "Yes, `let` and `const` ARE hoisted. The engine recognizes them during the creation phase and reserves memory. However, unlike `var` which is initialized to `undefined`, `let` and `const` remain uninitialized in the **Temporal Dead Zone (TDZ)**. Accessing them before declaration throws a `ReferenceError`."
    }
  ],
  practiceExercises: [
    {
      problem: "Predict the output of: `console.log(a); var a = 5;` vs `console.log(b); let b = 5;`.",
      hint: "var outputs undefined; let throws ReferenceError.",
      solution: `// console.log(a); var a = 5; => prints undefined
// console.log(b); let b = 5; => throws ReferenceError: Cannot access 'b' before initialization
console.log("Hoisting comparison verified.");`
    }
  ]
};

window.TOPIC_DATA_STORE["scope-var-let-const"] = {
  id: "scope-var-let-const",
  title: "var vs let vs const",
  lead: "Comprehensive head-to-head architectural comparison of var, let, and const declarations.",
  intro: "Understanding the exact differences between `var`, `let`, and `const` is the cornerstone of modern JavaScript engineering and one of the most frequently asked interview topics.",
  definition: "Comparison of the three keywords used for variable declarations in JavaScript across scope, reassignment, redeclaration, and hoisting.",
  whyUse: "Choosing the correct declaration prevents variable leaks, avoids race conditions, and documents data mutability.",
  syntax: `var x = 1;   // Function-scoped, re-declarable, hoisted to undefined
let y = 2;   // Block-scoped, reassignable, TDZ
const z = 3; // Block-scoped, immutable reference, TDZ`,
  syntaxExplanation: "Use `const` by default. Use `let` if you need to reassign. Avoid `var` completely in modern codebases.",
  simpleExample: `var a = 10;
let b = 20;
const c = 30;

a = 15; // OK
b = 25; // OK
// c = 35; // TypeError: Assignment to constant variable!
console.log(a, b, c);`,
  expectedOutput: `15 25 30`,
  realLifeExample: {
    domain: "Banking",
    title: "Account Transaction Rules with Const & Let",
    scenario: "Fixed banking constants with mutable running balance variables.",
    code: `const ACCOUNT_TYPE = "SAVINGS"; // Constant, never changes
const MIN_BALANCE = 1000;         // Immutable constant limit
let currentBalance = 5400;        // Mutable, changes with deposits/withdrawals

console.log("Account Type:", ACCOUNT_TYPE);
console.log("Opening Balance: Rs." + currentBalance);

currentBalance -= 1400; // Deduct
console.log("Updated Balance: Rs." + currentBalance);`,
    output: `Account Type: SAVINGS\nOpening Balance: Rs.5400\nUpdated Balance: Rs.4000`
  },
  practicalExample: {
    title: "Comparison Matrix Demonstration",
    code: `console.log("--- SCOPE COMPARISON ---");
{
  var varScoped = "var escapes block";
  let letScoped = "let trapped in block";
  const constScoped = "const trapped in block";
}
console.log(varScoped); // Leaked!
// letScoped and constScoped are inaccessible here`,
    output: `--- SCOPE COMPARISON ---\nvar escapes block`,
    note: "`var` leaks out of blocks; `let` and `const` remain confined."
  },
  commonMistakes: [
    {
      mistake: "Using var in loops causing asynchronous callback bugs",
      wrongCode: `for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var i:", i), 100); // Prints 3, 3, 3!
}`,
      correctCode: `for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log("let i:", i), 100); // Prints 0, 1, 2!
}`,
      explanation: "`var` shares a single variable binding across all iterations, whereas `let` creates a fresh binding for each loop pass."
    }
  ],
  importantPoints: [
    "Scope: `var` is function-scoped; `let` and `const` are block-scoped.",
    "Redeclaration: `var` allows redeclaration in the same scope; `let` and `const` throw SyntaxError.",
    "Reassignment: `var` and `let` allow reassignment; `const` prohibits reassignment.",
    "Rule of Thumb: `const` by default, `let` when rebinding is needed, never `var`."
  ],
  interviewQuestions: [
    {
      question: "Summarize the differences between var, let, and const in one table.",
      answer: "1. **Scope**: var = Function; let = Block; const = Block.\n2. **Hoisting**: var = Hoisted & initialized to `undefined`; let/const = Hoisted in TDZ (uninitialized).\n3. **Redeclaration**: var = Allowed; let/const = Forbidden.\n4. **Reassignment**: var = Allowed; let = Allowed; const = Forbidden."
    }
  ],
  practiceExercises: [
    {
      problem: "Refactor this legacy snippet to modern ES6: `var total = 0; var TAX = 0.05; for (var i = 0; i < 3; i++) { total += 100; }`",
      hint: "Use const for TAX and let for total and i.",
      solution: `let total = 0;
const TAX = 0.05;
for (let i = 0; i < 3; i++) {
  total += 100;
}
console.log("Total:", total + (total * TAX));`
    }
  ]
};

window.TOPIC_DATA_STORE["scope-strict-mode"] = {
  id: "scope-strict-mode",
  title: "Strict Mode",
  lead: "Master 'use strict', error prevention, preventing accidental globals, and cleaner JavaScript execution.",
  intro: "JavaScript's strict mode was introduced in ECMAScript 5. It is a way to opt in to a restricted variant of JavaScript, eliminating silent errors and preventing unsafe actions.",
  definition: "A directive (`'use strict'`) that enforces stricter parsing and error handling rules at runtime.",
  whyUse: "Catches accidental global variables, prevents assigning to read-only properties, disallows deleting undeletable variables, and secures `this`.",
  syntax: `// Entire script strict mode (at top of file)
"use strict";

// Or inside a specific function
function strictFunction() {
  "use strict";
  // strict mode code
}`,
  syntaxExplanation: "The directive is placed at the very top of a file or function body. ES6 Modules and Classes are strictly mode by default.",
  simpleExample: `"use strict";
// x = 3.14; // Throws ReferenceError: x is not defined!
let x = 3.14;
console.log("Strict mode active. x:", x);`,
  expectedOutput: `Strict mode active. x: 3.14`,
  realLifeExample: {
    domain: "Banking",
    title: "Preventing Accidental Global Overwrite in Financial Code",
    scenario: "Ensuring all transaction parameters are explicitly declared to prevent cross-customer data leakage.",
    code: `"use strict";

function processBankTransfer(sender, recipient, amount) {
  // If developer forgets 'let', strict mode immediately throws an error
  let transactionId = "TXN-" + Math.floor(Math.random() * 10000);
  console.log("Processing " + transactionId + " from " + sender + " to " + recipient + " for Rs." + amount);
}

processBankTransfer("Aarav", "Meera", 7500);`,
    output: `Processing TXN-` + (function(){ return "XXXX from Aarav to Meera for Rs.7500"; })()
  },
  practicalExample: {
    title: "This in Standalone Functions Under Strict Mode",
    code: `function checkThis() {
  "use strict";
  return this; // returns undefined instead of window!
}
console.log("Strict this:", checkThis());`,
    output: `Strict this: undefined`,
    note: "Under strict mode, `this` is `undefined` in direct function calls, preventing accidental mutation of `window`."
  },
  commonMistakes: [
    {
      mistake: "Placing 'use strict' after other executable statements",
      wrongCode: `console.log("Init");
"use strict"; // Ignored! Directive must be at the very top!
y = 100; // Does not throw!`,
      correctCode: `"use strict"; // Must be the first statement
let y = 100;`,
      explanation: "The `'use strict'` directive must be the very first non-comment statement in a script or function to take effect."
    }
  ],
  importantPoints: [
    "ES6 classes and ES6 modules are automatically in strict mode.",
    "Prohibits duplicate parameter names: `function sum(a, a, b)` throws SyntaxError.",
    "Disallows octal numeric literals like `010` (use `0o10`).",
    "Disallows `with` statement and reserves future keywords (like `interface`, `private`, `protected`)."
  ],
  interviewQuestions: [
    {
      question: "What are the major benefits of using 'use strict' in JavaScript?",
      answer: "1. Prevents accidental global variables.\n2. Converts silent failures (like assigning to non-writable properties) into thrown exceptions.\n3. Eliminates `this` coercion to `window`.\n4. Prohibits duplicate parameter names.\n5. Enables compiler optimizations by simplifying variable resolution."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a function enabled with 'use strict' that attempts to delete a variable and observe the SyntaxError.",
      hint: "delete variableName is forbidden in strict mode.",
      solution: `function testDelete() {
  "use strict";
  let val = 10;
  // delete val; // SyntaxError: Delete of an unqualified identifier in strict mode
  console.log("Strict mode forbids deleting plain variables!");
}
testDelete();`
    }
  ]
};
