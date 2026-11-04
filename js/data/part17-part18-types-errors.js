/* ==========================================================================
   PART 17 & 18: Data Types, Errors & Debugging - Comprehensive Topics Data
   ========================================================================== */

window.TOPIC_DATA_STORE = window.TOPIC_DATA_STORE || {};

// PART 17: DATA TYPES
window.TOPIC_DATA_STORE["types-overview"] = {
  id: "types-overview",
  title: "Data Types Overview",
  lead: "Master JavaScript's type taxonomy: 7 Primitives vs Reference Types, dynamic typing, and memory storage.",
  intro: "JavaScript is a dynamically typed language with 8 built-in types. Values, not variables, carry types.",
  definition: "Classification of data determining possible values, operations, and memory storage models.",
  whyUse: "Ensures type safety, prevents coercion bugs, and optimizes performance.",
  syntax: `// Primitives: string, number, bigint, boolean, undefined, symbol, null
// Objects: Object, Array, Function, Date, RegExp, Map, Set`,
  syntaxExplanation: "Primitives are stored directly on the stack by value. Objects are stored in the heap and accessed via reference pointers.",
  simpleExample: `let val = "Text";
console.log(typeof val);
val = 123;
console.log(typeof val);`,
  expectedOutput: `string\nnumber`,
  realLifeExample: {
    domain: "Banking",
    title: "Customer Account Data Type Model",
    scenario: "Mapping customer entity fields to appropriate primitive and reference types.",
    code: `const customerRecord = {
  id: 1042,                        // number
  fullName: "Aarav Sharma",        // string
  balance: 45000.75,               // number
  isKYCVerified: true,             // boolean
  nationalIdNumber: 9007199254740995n, // bigint
  jointHolders: null,              // null
  notes: undefined,                // undefined
  metadataSymbol: Symbol("meta"),  // symbol
  transactions: []                 // object (Array)
};
console.log("Account for:", customerRecord.fullName, "| Type of ID:", typeof customerRecord.id);`,
    output: `Account for: Aarav Sharma | Type of ID: number`
  },
  practicalExample: {
    title: "Value vs Reference Copy",
    code: `let x = 10;
let y = x;
y = 20;
console.log("Primitives: x =", x, ", y =", y);

let objA = { n: 10 };
let objB = objA;
objB.n = 20;
console.log("References: objA.n =", objA.n);`,
    output: `Primitives: x = 10 , y = 20\nReferences: objA.n = 20`,
    note: "Primitives copy by value; objects copy by reference."
  },
  commonMistakes: [
    {
      mistake: "Assuming variable names have permanent types in JavaScript",
      wrongCode: `let score = 100; score = "Passed"; // Valid in JS, but can introduce subtle type bugs!`,
      correctCode: `let score = 100; let status = "Passed"; // Keep distinct variables for distinct types`,
      explanation: "Variables are dynamically typed, but keeping variable semantics consistent prevents bugs."
    }
  ],
  importantPoints: [
    "7 Primitive types + 1 Reference type (Object).",
    "Primitives are immutable.",
    "Dynamic typing allows reassignment to different types."
  ],
  interviewQuestions: [
    {
      question: "What are the 8 data types in JavaScript?",
      answer: "String, Number, BigInt, Boolean, Undefined, Null, Symbol (7 primitives) and Object (1 reference type)."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a function that accepts any value and returns whether it is a primitive or an object.",
      hint: "Object(val) !== val or typeof val !== 'object' && typeof val !== 'function'.",
      solution: `function isPrimitive(val) {
  return val === null || (typeof val !== "object" && typeof val !== "function");
}
console.log("10:", isPrimitive(10));
console.log("[1,2]:", isPrimitive([1, 2]));`
    }
  ]
};

window.TOPIC_DATA_STORE["types-primitive"] = {
  id: "types-primitive",
  title: "Primitive Data Types",
  lead: "Master string, number, bigint, boolean, undefined, symbol, and null immutability and stack allocation.",
  intro: "A primitive value is data that is not an object and has no methods. All primitives are immutable; they cannot be altered.",
  definition: "Lowest-level data values represented directly at the language implementation level, stored on the stack.",
  whyUse: "Fast, efficient, immutable atomic units of data.",
  syntax: `let s = "hi";
let n = 42;
let b = true;
let u;
let nl = null;
let bg = 10n;
let sy = Symbol();`,
  syntaxExplanation: "Primitives are compared by value: two strings with identical characters are strictly equal.",
  simpleExample: `let a = "apple";
let b = "apple";
console.log("Equal by value?", a === b);`,
  expectedOutput: `Equal by value? true`,
  realLifeExample: {
    domain: "Attendance Management",
    title: "Employee Shift Status Primitive Mapping",
    scenario: "Tracking clock-in hours, attendance status, and badge clearance flags with primitives.",
    code: `let employeeId = 108;       // number
let shiftCode = "MORNING";   // string
let isPresent = true;        // boolean
let overtimeHours = 0;       // number
let remark = null;           // null (explicitly empty)

console.log("Employee " + employeeId + " (" + shiftCode + "): Present = " + isPresent);`,
    output: `Employee 108 (MORNING): Present = true`
  },
  practicalExample: {
    title: "Primitive Immutability",
    code: `let str = "hello";
str.toUpperCase();
console.log("Original string untouched:", str); // "hello"`,
    output: `Original string untouched: hello`,
    note: "Methods on primitives return new values rather than mutating."
  },
  commonMistakes: [
    {
      mistake: "Adding properties to primitive values",
      wrongCode: `let num = 42;
num.tag = "answer";
console.log(num.tag); // undefined!`,
      correctCode: `let numObj = { val: 42, tag: "answer" };
console.log(numObj.tag);`,
      explanation: "JavaScript auto-boxes primitives into temporary wrapper objects, which are immediately discarded."
    }
  ],
  importantPoints: [
    "Primitives are stored on the execution stack.",
    "Primitives are compared by value.",
    "Auto-boxing temporarily wraps primitives when calling methods like `.toUpperCase()`."
  ],
  interviewQuestions: [
    {
      question: "What is Auto-boxing (primitive wrapper objects) in JavaScript?",
      answer: "When a method is called on a primitive (e.g. `'hello'.toUpperCase()`), JavaScript temporarily wraps the primitive in its corresponding object wrapper (`new String()`), invokes the method, and immediately destroys the wrapper object."
    }
  ],
  practiceExercises: [
    {
      problem: "Demonstrate that two identical symbols are never equal: `Symbol('id') !== Symbol('id')`.",
      hint: "console.log(Symbol('x') === Symbol('x'));",
      solution: `let s1 = Symbol("id");
let s2 = Symbol("id");
console.log("Are identical symbols equal?", s1 === s2); // false`
    }
  ]
};

window.TOPIC_DATA_STORE["types-object"] = {
  id: "types-object",
  title: "Object Types",
  lead: "Master complex reference data types: Object, Array, Function, Date, RegExp, Map, Set, and heap memory.",
  intro: "In JavaScript, any value that is not a primitive is an Object. Objects are mutable collections of properties stored in heap memory.",
  definition: "A composite data structure stored by reference, holding key-value pairs and executable methods.",
  whyUse: "Modeling complex entities, collections, state containers, and application modules.",
  syntax: `const user = { name: "Rohan" };
const list = [1, 2, 3];
const fn = function() {};`,
  syntaxExplanation: "Variables do not contain the object itself, but a pointer/reference to its location in memory.",
  simpleExample: `let obj = { role: "Dev" };
console.log("Type of obj:", typeof obj);
console.log("Type of arr:", typeof [1, 2]);
console.log("Type of fn :", typeof function(){});`,
  expectedOutput: `Type of obj: object\nType of arr: object\nType of fn : function`,
  realLifeExample: {
    domain: "Student Management",
    title: "Student Academic Record Complex Object",
    scenario: "Structuring a comprehensive student profile combining personal attributes, grades array, and evaluation methods.",
    code: `const studentRecord = {
  rollNo: "CS-2026-01",
  profile: { name: "Aarav", semester: 4 },
  marks: [88, 92, 79, 95],
  calculateGPA() {
    let avg = this.marks.reduce((a, b) => a + b, 0) / this.marks.length;
    return (avg / 25).toFixed(2);
  }
};

console.log(studentRecord.profile.name + " GPA: " + studentRecord.calculateGPA());`,
    output: `Aarav GPA: 3.54`
  },
  practicalExample: {
    title: "Object Reference Mutation Across Functions",
    code: `function applyDiscount(cart) {
  cart.total -= 100; // Mutates original object in caller!
}
let myCart = { total: 500 };
applyDiscount(myCart);
console.log("Updated Cart Total:", myCart.total);`,
    output: `Updated Cart Total: 400`,
    note: "Functions modifying passed objects mutate the caller's state."
  },
  commonMistakes: [
    {
      mistake: "Checking for arrays using typeof",
      wrongCode: `if (typeof data === "array") {} // NEVER runs! typeof [] is "object"`,
      correctCode: `if (Array.isArray(data)) {}`,
      explanation: "`typeof []` returns `'object'`. Use `Array.isArray()`."
    }
  ],
  importantPoints: [
    "Functions are first-class callable objects (`typeof fn === 'function'`).",
    "Arrays and Dates are built on top of Object prototype.",
    "Object properties can be added or removed dynamically."
  ],
  interviewQuestions: [
    {
      question: "Why does typeof null return 'object'?",
      answer: "In the original 1995 JavaScript implementation, values were stored in 32-bit units with a type tag in the lower 3 bits. The tag `000` represented objects. `null` was represented as the NULL pointer (`0x00`), which had a type tag of `000`, causing `typeof null` to return `'object'`."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a function that shallow-clones an object using the spread operator `{ ...obj }`.",
      hint: "return { ...inputObj };",
      solution: `function clone(obj) { return { ...obj }; }
let a = { score: 50 };
let b = clone(a);
b.score = 99;
console.log("a:", a.score, "| b:", b.score); // 50 | 99`
    }
  ]
};

window.TOPIC_DATA_STORE["types-symbols"] = {
  id: "types-symbols",
  title: "Symbols",
  lead: "Master unique and immutable Symbol identifiers, hidden object properties, well-known symbols, and Symbol.for().",
  intro: "Symbol is a built-in primitive type introduced in ES6. Every Symbol value returned from `Symbol()` is unique and immutable.",
  definition: "A unique, immutable primitive value used primarily as non-colliding object property keys.",
  whyUse: "Creating private/hidden object properties, avoiding key collisions in shared libraries, and customizing internal language behaviors.",
  syntax: `const sym1 = Symbol("description");
const sym2 = Symbol("description");
sym1 === sym2; // false! Unique!`,
  syntaxExplanation: "Created with `Symbol(desc)`. Never use `new Symbol()`. Symbol keys are skipped by `for...in` and `JSON.stringify()`.",
  simpleExample: `let id = Symbol("id");
let user = { [id]: 101, name: "Rahul" };
console.log("User ID:", user[id]);
console.log("Keys in object:", Object.keys(user)); // [ 'name' ]`,
  expectedOutput: `User ID: 101\nKeys in object: [ 'name' ]`,
  realLifeExample: {
    domain: "Business Applications",
    title: "Metadata Tagging Without Property Collision",
    scenario: "Attaching internal framework metadata to business entities without polluting public JSON output.",
    code: `const METADATA_KEY = Symbol("internal_audit_meta");

let order = {
  orderId: "ORD-9901",
  amount: 2500,
  [METADATA_KEY]: { createdBy: "System_Daemon", verified: true }
};

console.log("Public JSON Payload:");
console.log(JSON.stringify(order)); // Symbol property is cleanly hidden!
console.log("Internal Audit Tag:", order[METADATA_KEY]);`,
    output: `Public JSON Payload:\n{"orderId":"ORD-9901","amount":2500}\nInternal Audit Tag: { createdBy: 'System_Daemon', verified: true }`
  },
  practicalExample: {
    title: "Global Symbol Registry with Symbol.for()",
    code: `let sA = Symbol.for("app.user");
let sB = Symbol.for("app.user");
console.log("Shared Global Symbol?", sA === sB); // true!`,
    output: `Shared Global Symbol? true`,
    note: "`Symbol.for()` registers and shares symbols across modules and iframes."
  },
  commonMistakes: [
    {
      mistake: "Calling new Symbol() as a constructor",
      wrongCode: `let s = new Symbol(); // TypeError: Symbol is not a constructor!`,
      correctCode: `let s = Symbol(); // Function call without 'new'`,
      explanation: "Symbol is a primitive factory function, not a constructor."
    }
  ],
  importantPoints: [
    "Symbols are skipped by `for...in`, `Object.keys()`, and `JSON.stringify()`.",
    "Retrieve symbol keys with `Object.getOwnPropertySymbols(obj)`.",
    "Well-known symbols include `Symbol.iterator`, `Symbol.toStringTag`."
  ],
  interviewQuestions: [
    {
      question: "How do you retrieve Symbol properties from an object?",
      answer: "Use `Object.getOwnPropertySymbols(obj)` or `Reflect.ownKeys(obj)` (which returns both string and symbol keys)."
    }
  ],
  practiceExercises: [
    {
      problem: "Create an object with a Symbol property `_secret` and verify it does not appear in `Object.keys()`.",
      hint: "Use {[Symbol('secret')]: 'classified'}.",
      solution: `const secret = Symbol("secret");
let obj = { [secret]: "12345", public: "visible" };
console.log("Keys:", Object.keys(obj)); // ['public']
console.log("Secret:", obj[secret]); // '12345'`
    }
  ]
};

window.TOPIC_DATA_STORE["types-typeof"] = {
  id: "types-typeof",
  title: "typeof",
  lead: "Master typeof operator results, quirks (typeof null === 'object', typeof NaN === 'number'), and type checking.",
  intro: "The `typeof` operator returns a string indicating the type of the unevaluated operand.",
  definition: "A unary operator returning a string identifier representing the primitive or object category of an operand.",
  whyUse: "Runtime type checking, parameter guards, inspecting unknown API values, and defensive coding.",
  syntax: `typeof operand;
typeof(operand);`,
  syntaxExplanation: "Returns one of: `'undefined'`, `'boolean'`, `'number'`, `'bigint'`, `'string'`, `'symbol'`, `'function'`, `'object'`.",
  simpleExample: `console.log(typeof "Hello");  // "string"
console.log(typeof 42);       // "number"
console.log(typeof true);     // "boolean"
console.log(typeof undefined);// "undefined"
console.log(typeof null);     // "object" (historical quirk!)
console.log(typeof {});       // "object"
console.log(typeof (() => {})); // "function"`,
  expectedOutput: `string\nnumber\nboolean\nundefined\nobject\nobject\nfunction`,
  realLifeExample: {
    domain: "E-commerce",
    title: "Defensive Price Input Sanitizer",
    scenario: "Verifying input parameters passed into payment calculation functions.",
    code: `function sanitizePrice(input) {
  if (typeof input === "number") {
    return input;
  } else if (typeof input === "string") {
    let parsed = parseFloat(input);
    return isNaN(parsed) ? 0 : parsed;
  }
  return 0; // Fallback
}

console.log("Number: Rs." + sanitizePrice(450));
console.log("String: Rs." + sanitizePrice("1250.50"));
console.log("Bad   : Rs." + sanitizePrice(null));`,
    output: `Number: Rs.450\nString: Rs.1250.5\nBad   : Rs.0`
  },
  practicalExample: {
    title: "Safe Checking for Undeclared Variables with typeof",
    code: `// typeof does NOT throw ReferenceError on undeclared variables!
if (typeof undeclaredGlobal === "undefined") {
  console.log("Variable is not declared in global scope.");
}`,
    output: `Variable is not declared in global scope.`,
    note: "`typeof` is safe to run on undeclared identifiers."
  },
  commonMistakes: [
    {
      mistake: "Checking for null with typeof === 'null'",
      wrongCode: `if (typeof val === "null") {} // NEVER TRUE! typeof null is "object"`,
      correctCode: `if (val === null) {}`,
      explanation: "`typeof null` returns `'object'`. Always check `val === null` directly."
    }
  ],
  importantPoints: [
    "`typeof NaN` is `'number'`.",
    "`typeof null` is `'object'`.",
    "`typeof []` is `'object'` (use `Array.isArray()`).",
    "`typeof function` is `'function'`."
  ],
  interviewQuestions: [
    {
      question: "What does typeof NaN return and why?",
      answer: "`typeof NaN` returns `'number'`. In IEEE 754 floating-point specification, `NaN` (Not-a-Number) is a special numeric state representing an undefined or unrepresentable mathematical result (such as `0 / 0`)."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a function `isFunction(val)` that checks if a value is a function using `typeof`.",
      hint: "return typeof val === 'function';",
      solution: `function isFunction(val) {
  return typeof val === "function";
}
console.log("()=>{} :", isFunction(() => {})); // true
console.log("123    :", isFunction(123)); // false`
    }
  ]
};

window.TOPIC_DATA_STORE["types-undefined"] = {
  id: "types-undefined",
  title: "undefined",
  lead: "Master undefined primitive, uninitialized variables, missing arguments, function return defaults, and void.",
  intro: "A variable that has not been assigned a value is of type `undefined`. A method or statement also returns `undefined` if the variable that is being evaluated does not have an assigned value.",
  definition: "A primitive value automatically assigned to variables that have just been declared, or to formal arguments for which there are no actual arguments.",
  whyUse: "Distinguishing between intentionally cleared values (`null`) and variables that haven't been populated.",
  syntax: `let uninitialized;
console.log(uninitialized === undefined); // true`,
  syntaxExplanation: "`undefined` is a global property representing the primitive value. Accessing nonexistent object properties also yields `undefined`.",
  simpleExample: `let x;
console.log("x is:", x);
let obj = {};
console.log("Missing prop:", obj.name);`,
  expectedOutput: `x is: undefined\nMissing prop: undefined`,
  realLifeExample: {
    domain: "Student Management",
    title: "Optional Student Contact Field Check",
    scenario: "Checking whether an optional parent phone number property has been provided or is undefined.",
    code: `let studentProfile = {
  name: "Karan",
  email: "karan@edu.in"
  // parentPhone is omitted
};

if (studentProfile.parentPhone === undefined) {
  console.log("Notice: Parent phone number is missing from record.");
}`,
    output: `Notice: Parent phone number is missing from record.`
  },
  practicalExample: {
    title: "Void Operator Producing Undefined",
    code: `console.log("void 0 produces:", void 0); // Always guaranteed undefined`,
    output: `void 0 produces: undefined`,
    note: "`void 0` is often used by bundlers because it cannot be redefined."
  },
  commonMistakes: [
    {
      mistake: "Confusing undefined with undeclared",
      wrongCode: `// Accessing undeclared identifier directly
// console.log(notDeclared); // ReferenceError: notDeclared is not defined!`,
      correctCode: `let declared;
console.log(declared); // undefined! (Declared, but no value assigned)`,
      explanation: "Undefined means declared without a value; undeclared means never declared in scope."
    }
  ],
  importantPoints: [
    "Functions without an explicit `return` return `undefined`.",
    "Unpassed arguments evaluate to `undefined`.",
    "`undefined == null` is true (loose), but `undefined === null` is false (strict)."
  ],
  interviewQuestions: [
    {
      question: "What is the difference between null and undefined?",
      answer: "`undefined` represents the unintentional absence of value (default state for uninitialized variables, missing arguments, and missing properties). `null` represents the intentional absence of any object value, explicitly assigned by a developer."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a function that accepts an optional parameter and logs whether it was passed or left undefined.",
      hint: "if (param === undefined) ...",
      solution: `function checkArg(val) {
  console.log(val === undefined ? "Arg was omitted!" : "Arg received: " + val);
}
checkArg();
checkArg("Present");`
    }
  ]
};

window.TOPIC_DATA_STORE["types-nan"] = {
  id: "types-nan",
  title: "NaN",
  lead: "Master Not-a-Number, failed numeric operations, Number.isNaN() vs isNaN(), and NaN !== NaN.",
  intro: "The global `NaN` property is a value representing Not-a-Number. It is the result of an invalid or unrepresentable mathematical calculation.",
  definition: "A special numeric value defined by IEEE 754 indicating an undefined or unrepresentable arithmetic outcome.",
  whyUse: "Detecting invalid numeric conversions (like `parseInt('abc')`) and guarding arithmetic computations.",
  syntax: `Number.NaN;
0 / 0;             // NaN
Math.sqrt(-1);     // NaN
parseInt("hello"); // NaN`,
  syntaxExplanation: "`NaN` is the only value in JavaScript that is NOT equal to itself (`NaN === NaN` is `false`).",
  simpleExample: `let result = 0 / 0;
console.log("Result:", result);
console.log("Is NaN === NaN?", NaN === NaN);
console.log("Number.isNaN(result):", Number.isNaN(result));`,
  expectedOutput: `Result: NaN\nIs NaN === NaN? false\nNumber.isNaN(result): true`,
  realLifeExample: {
    domain: "Restaurant Billing",
    title: "Sanitizing Quantity Form Field Input",
    scenario: "Validating that food quantity entered in an order input is a valid number, rejecting NaN entries.",
    code: `function addDishToCart(dishName, rawQuantityInput) {
  let qty = Number(rawQuantityInput);

  if (Number.isNaN(qty) || qty <= 0) {
    console.log("ERROR: Invalid quantity entered ('" + rawQuantityInput + "'). Order rejected.");
    return;
  }
  console.log("SUCCESS: Added " + qty + "x " + dishName + " to order.");
}

addDishToCart("Paneer Butter Masala", "2");
addDishToCart("Garlic Naan", "two"); // Produces NaN!`,
    output: `SUCCESS: Added 2x Paneer Butter Masala to order.\nERROR: Invalid quantity entered ('two'). Order rejected.`
  },
  practicalExample: {
    title: "Object.is(NaN, NaN)",
    code: `console.log("NaN === NaN  :", NaN === NaN);       // false
console.log("Object.is(NaN, NaN):", Object.is(NaN, NaN)); // true!`,
    output: `NaN === NaN  : false\nObject.is(NaN, NaN): true`,
    note: "`Object.is()` correctly recognizes that `NaN` is identical to `NaN`."
  },
  commonMistakes: [
    {
      mistake: "Using == or === to check if a value is NaN",
      wrongCode: `if (val === NaN) { /* NEVER RUNS! */ }`,
      correctCode: `if (Number.isNaN(val)) { /* Correct! */ }`,
      explanation: "Because `NaN !== NaN`, direct equality checks always fail. Use `Number.isNaN()`."
    }
  ],
  importantPoints: [
    "`typeof NaN` is `'number'`.",
    "`Number.isNaN()` is strictly preferred over global `isNaN()`.",
    "`NaN` propagates: any arithmetic operation with `NaN` yields `NaN` (e.g. `5 + NaN = NaN`)."
  ],
  interviewQuestions: [
    {
      question: "What is the difference between global isNaN() and Number.isNaN()?",
      answer: "Global `isNaN(x)` coerces its argument to a Number first, so `isNaN('hello')` returns `true` (because `'hello'` becomes `NaN`). `Number.isNaN(x)` does NOT coerce; it returns `true` *only* if the argument is already of type Number and holds the value `NaN`."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a function `safeMultiply(a, b)` that returns 'Invalid Number' if either operand produces NaN.",
      hint: "if (Number.isNaN(Number(a)) || Number.isNaN(Number(b))) ...",
      solution: `function safeMultiply(a, b) {
  let x = Number(a), y = Number(b);
  if (Number.isNaN(x) || Number.isNaN(y)) return "Invalid Number";
  return x * y;
}
console.log(safeMultiply(5, "10")); // 50
console.log(safeMultiply(5, "abc")); // "Invalid Number"`
    }
  ]
};

window.TOPIC_DATA_STORE["types-tostring"] = {
  id: "types-tostring",
  title: "toString()",
  lead: "Master String representation, radix base conversion, Object.prototype.toString.call, and overrides.",
  intro: "The `toString()` method returns a string representing the object or primitive. Every object in JavaScript inherits `toString()` from `Object.prototype`.",
  definition: "A method converting an object or number into its string representation.",
  whyUse: "Displaying values, serializing objects, converting numbers to binary/hex bases, and precise type inspection.",
  syntax: `value.toString();
num.toString(radix); // 2, 8, 10, 16
Object.prototype.toString.call(value);`,
  syntaxExplanation: "Numbers accept a radix from 2 to 36. `Object.prototype.toString.call(val)` returns `[object Type]` for bulletproof type identification.",
  simpleExample: `let num = 255;
console.log("Decimal:", num.toString(10));
console.log("Hex    :", num.toString(16));
console.log("Binary :", num.toString(2));`,
  expectedOutput: `Decimal: 255\nHex    : ff\nBinary : 11111111`,
  realLifeExample: {
    domain: "Business Applications",
    title: "Bulletproof Internal Type Detector",
    scenario: "Detecting exact types (Date, RegExp, Array, Null) using `Object.prototype.toString`.",
    code: `function getExactType(target) {
  return Object.prototype.toString.call(target).slice(8, -1);
}

console.log("[]       => " + getExactType([]));
console.log("new Date => " + getExactType(new Date()));
console.log("/regex/  => " + getExactType(/abc/));
console.log("null     => " + getExactType(null));`,
    output: `[]       => Array\nnew Date => Date\n/regex/  => RegExp\nnull     => Null`
  },
  practicalExample: {
    title: "Overriding toString in Custom Classes",
    code: `class Employee {
  constructor(name, role) { this.name = name; this.role = role; }
  toString() { return \`\${this.name} (\${this.role})\`; }
}
let emp = new Employee("Priya", "Lead Architect");
console.log("Employee: " + emp);`,
    output: `Employee: Priya (Lead Architect)`,
    note: "Custom `toString()` formats how classes display when coerced to text."
  },
  commonMistakes: [
    {
      mistake: "Calling toString() on null or undefined",
      wrongCode: `let val = null;
val.toString(); // TypeError: Cannot read properties of null!`,
      correctCode: `String(val); // "null" (Safe alternative)`,
      explanation: "`null` and `undefined` do not have wrapper objects and lack a `.toString()` method. Use `String(val)` instead."
    }
  ],
  importantPoints: [
    "Numbers accept a radix base argument (e.g. `num.toString(16)`).",
    "`null` and `undefined` throw TypeError if you call `.toString()`.",
    "`String(x)` is safer than `x.toString()` because it handles null and undefined."
  ],
  interviewQuestions: [
    {
      question: "How does `Object.prototype.toString.call(val)` accurately detect types?",
      answer: "Every built-in JavaScript object has an internal `[[Class]]` or `[Symbol.toStringTag]` property. Calling `Object.prototype.toString.call(val)` bypasses instance overrides and returns a string in the format `[object Type]`, accurately differentiating Arrays, Dates, RegExps, and Null."
    }
  ],
  practiceExercises: [
    {
      problem: "Convert the number 42 into its binary string representation using `toString()`.",
      hint: "(42).toString(2)",
      solution: `let n = 42;
console.log("42 in binary:", n.toString(2)); // "101010"`
    }
  ]
};

window.TOPIC_DATA_STORE["types-coercion"] = {
  id: "types-coercion",
  title: "Type Coercion",
  lead: "Master implicit type conversion, truthy/falsy coercion, string concatenation (+), and boolean evaluation.",
  intro: "Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers, or objects to booleans).",
  definition: "Implicit conversion of a value from its original type into a required target type during an operation.",
  whyUse: "Understanding coercion is vital to predicting how JavaScript evaluates expressions and avoiding notorious bugs.",
  syntax: `"5" + 2;   // "52" (Number coerced to string)
"5" - 2;   // 3 (String coerced to number)
if ("text") // Truthy coerced to true`,
  syntaxExplanation: "The `+` operator prefers strings if one operand is a string. Mathematical operators (`-`, `*`, `/`) coerce strings to numbers.",
  simpleExample: `console.log("5" + 3);  // "53" (String concatenation)
console.log("5" - 3);  // 2 (Numeric subtraction)
console.log("5" * "2");// 10 (Numeric multiplication)
console.log(true + 1); // 2 (Boolean true becomes 1)`,
  expectedOutput: `53\n2\n10\n2`,
  realLifeExample: {
    domain: "Banking",
    title: "Preventing Form Input String Concatenation in Balance Calculation",
    scenario: "Customer deposits Rs. 500, but form input is string `'500'`. Demonstrating the coercion bug and fix.",
    code: `let currentBalance = 1000;
let depositInput = "500"; // Extracted from HTML input field

// Bug: "1000" + "500" = "1000500"!
let badTotal = currentBalance + depositInput;
console.log("Unintended Coercion Bug: Rs." + badTotal);

// Fix: Explicitly convert with Number()
let correctTotal = currentBalance + Number(depositInput);
console.log("Correct Calculation    : Rs." + correctTotal);`,
    output: `Unintended Coercion Bug: Rs.1000500\nCorrect Calculation    : Rs.1500`
  },
  practicalExample: {
    title: "ToPrimitive Algorithm with valueOf and toString",
    code: `let customObj = {
  value: 40,
  valueOf() { return this.value; }
};
console.log("Object + 2 =", customObj + 2); // 42!`,
    output: `Object + 2 = 42`,
    note: "JavaScript invokes `valueOf()` and `toString()` during object-to-primitive coercion."
  },
  commonMistakes: [
    {
      mistake: "Relying on implicit coercion for calculations",
      wrongCode: `let total = price + shipping; // If shipping is "0", total becomes "1000"!`,
      correctCode: `let total = Number(price) + Number(shipping);`,
      explanation: "Always convert inputs explicitly using `Number()` or `parseInt()`."
    }
  ],
  importantPoints: [
    "`+` concatenates if ANY operand is a string.",
    "`-`, `*`, `/`, `%` always coerce to numbers.",
    "`null` coerces to `0` in math; `undefined` coerces to `NaN`."
  ],
  interviewQuestions: [
    {
      question: "What does `[] + {}` and `{} + []` evaluate to in JavaScript?",
      answer: "`[] + {}` evaluates to `'[object Object]'` because `[]` becomes `''` and `{}` becomes `'[object Object]'`. In an interactive console, `{}` at the start of a line may be parsed as an empty code block, making `{} + []` evaluate to `+[] = 0`."
    }
  ],
  practiceExercises: [
    {
      problem: "Evaluate without running: What is `true + false + '1'`?",
      hint: "true is 1, false is 0, 1 + 0 = 1, 1 + '1' = '11'.",
      solution: `let res = true + false + "1";
console.log("Result:", res); // "11"`
    }
  ]
};

window.TOPIC_DATA_STORE["types-conversion"] = {
  id: "types-conversion",
  title: "Type Conversion",
  lead: "Master explicit type casting: Number(), String(), Boolean(), parseInt(), parseFloat(), and unary +.",
  intro: "Type conversion is the explicit transformation of a value from one data type to another by calling built-in constructor functions.",
  definition: "Explicit programmatic transformation of data types using dedicated functions (`Number()`, `String()`, `Boolean()`).",
  whyUse: "Clean, predictable code free of implicit coercion ambiguities.",
  syntax: `Number("123");   // 123
String(123);     // "123"
Boolean(1);      // true
+"123";          // 123 (Unary plus)`,
  syntaxExplanation: "Explicit conversions make developer intent clear and prevent subtle type coercion bugs.",
  simpleExample: `let s = "45.67";
let n = Number(s);
let b = Boolean(n);
console.log("Converted Number :", n, typeof n);
console.log("Converted Boolean:", b, typeof b);`,
  expectedOutput: `Converted Number : 45.67 number\nConverted Boolean: true boolean`,
  realLifeExample: {
    domain: "Attendance Management",
    title: "Employee Form Input Casting",
    scenario: "Converting HTML text inputs to strictly typed primitives before dispatching to API backend.",
    code: `let formPayload = {
  empId: "1042",
  hoursLogged: "8.5",
  isOvertime: "true"
};

let validatedPayload = {
  empId: parseInt(formPayload.empId, 10),
  hoursLogged: parseFloat(formPayload.hoursLogged),
  isOvertime: formPayload.isOvertime === "true"
};

console.log("Clean Typed Payload:", validatedPayload);
console.log("Hours Type:", typeof validatedPayload.hoursLogged);`,
    output: `Clean Typed Payload: { empId: 1042, hoursLogged: 8.5, isOvertime: true }\nHours Type: number`
  },
  practicalExample: {
    title: "Unary Plus (+) Operator for Fast Number Conversion",
    code: `let numStr = "1250";
let converted = +numStr;
console.log("Value:", converted, "| Type:", typeof converted);`,
    output: `Value: 1250 | Type: number`,
    note: "Unary `+` is a popular concise idiom for converting strings to numbers."
  },
  commonMistakes: [
    {
      mistake: "Using Boolean('false') expecting false",
      wrongCode: `let active = Boolean("false"); // Evaluates to true!`,
      correctCode: `let active = (input === "true");`,
      explanation: "Any non-empty string is truthy in JavaScript, including `'false'`."
    }
  ],
  importantPoints: [
    "Prefer `Number()` over `parseInt()` when converting pure numbers.",
    "`String(null)` is `'null'`, whereas `null.toString()` throws TypeError.",
    "Explicit conversion is vastly preferred over implicit coercion."
  ],
  interviewQuestions: [
    {
      question: "What is the difference between Type Conversion and Type Coercion?",
      answer: "**Type Conversion** (Type Casting) is explicit, where the programmer intentionally invokes functions like `Number(x)` or `String(x)`. **Type Coercion** is implicit, where the JavaScript runtime engine automatically converts types behind the scenes (e.g. `'5' * 2`)."
    }
  ],
  practiceExercises: [
    {
      problem: "Convert an array of string numbers `['10', '20', '30']` into numbers using `Number`.",
      hint: "arr.map(Number)",
      solution: `let stringNums = ["10", "20", "30"];
let numbers = stringNums.map(Number);
console.log("Numbers:", numbers); // [10, 20, 30]`
    }
  ]
};

window.TOPIC_DATA_STORE["types-destructuring"] = {
  id: "types-destructuring",
  title: "Destructuring",
  lead: "Master array destructuring, object destructuring, default values, renaming variables, and nested extractions.",
  intro: "The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.",
  definition: "A syntax enabling extraction of multiple values from arrays or objects and binding them to individual variables.",
  whyUse: "Simplifies API response handling, cleanly extracts function parameters, and eliminates repetitive dot-notation.",
  syntax: `// Array destructuring
const [a, b, ...rest] = [1, 2, 3, 4];

// Object destructuring
const { name, role: userRole = "Guest" } = user;`,
  syntaxExplanation: "Array destructuring unpacks by position/index. Object destructuring unpacks by matching property name.",
  simpleExample: `let student = { name: "Ananya", marks: 95, city: "Pune" };
let { name, marks } = student;
console.log(name + " scored " + marks);`,
  expectedOutput: `Ananya scored 95`,
  realLifeExample: {
    domain: "E-commerce",
    title: "Unpacking API Response Order Payload",
    scenario: "Extracting order ID, customer details, and total amount with default shipping fee.",
    code: `let apiResponse = {
  id: "ORD-771",
  customer: { firstName: "Rohan", email: "rohan@test.com" },
  pricing: { subtotal: 2400, tax: 240 }
};

// Nested destructuring with renaming
let {
  id: orderId,
  customer: { firstName, email },
  pricing: { subtotal, tax, shipping = 0 }
} = apiResponse;

console.log("Order ID : " + orderId);
console.log("Customer : " + firstName + " (" + email + ")");
console.log("Total    : Rs." + (subtotal + tax + shipping));`,
    output: `Order ID : ORD-771\nCustomer : Rohan (rohan@test.com)\nTotal    : Rs.2640`
  },
  practicalExample: {
    title: "Variable Swapping Without Temp Variable",
    code: `let a = "First", b = "Second";
[a, b] = [b, a]; // Swap!
console.log("a =", a, "| b =", b);`,
    output: `a = Second | b = First`,
    note: "Array destructuring swaps variables in a single expressive line."
  },
  commonMistakes: [
    {
      mistake: "Destructuring from null or undefined causing TypeError",
      wrongCode: `let { name } = undefined; // TypeError: Cannot destructure property 'name' of undefined`,
      correctCode: `let { name } = user || {}; // Fallback default object`,
      explanation: "Destructuring requires an object. Provide a fallback default `{}` to prevent crashes."
    }
  ],
  importantPoints: [
    "Arrays destructure by position; Objects destructure by key name.",
    "Rename keys with syntax `{ oldKey: newName }`.",
    "Assign defaults with `{ key = defaultValue }`."
  ],
  interviewQuestions: [
    {
      question: "How do you provide both a default value and a renamed identifier during object destructuring?",
      answer: "Use `{ originalKey: newName = defaultValue }`. For example: `const { id: userId = 101 } = response;` renames `id` to `userId` and assigns `101` if `id` is `undefined`."
    }
  ],
  practiceExercises: [
    {
      problem: "Extract the first and third items from `['Red', 'Green', 'Blue', 'Yellow']` using array destructuring.",
      hint: "const [first, , third] = colors;",
      solution: `let colors = ["Red", "Green", "Blue", "Yellow"];
let [first, , third] = colors;
console.log("First:", first, "| Third:", third); // Red | Blue`
    }
  ]
};

// PART 18: ERRORS AND DEBUGGING
window.TOPIC_DATA_STORE["err-intro"] = {
  id: "err-intro",
  title: "Error Introduction",
  lead: "Master JavaScript runtime errors, syntax errors, logical bugs, and exception propagation.",
  intro: "Errors are an inevitable part of software development. JavaScript provides a structured error-handling system that captures runtime failures as Error objects.",
  definition: "An event or state that halts normal execution flow due to unexpected conditions, syntax failures, or programmatic exceptions.",
  whyUse: "Understanding errors allows preventing application crashes, graceful failure degradation, and rapid debugging.",
  syntax: `throw new Error("Something went wrong!");`,
  syntaxExplanation: "When an error occurs or is thrown, JavaScript halts current execution and unwinds the call stack searching for a `try...catch` block.",
  simpleExample: `try {
  let res = undefinedVar + 10;
} catch (err) {
  console.log("Error Name   :", err.name);
  console.log("Error Message:", err.message);
}`,
  expectedOutput: `Error Name   : ReferenceError\nError Message: undefinedVar is not defined`,
  realLifeExample: {
    domain: "Banking",
    title: "Insufficient Balance Transaction Exception",
    scenario: "Halting cash withdrawal when requested funds exceed account balance.",
    code: `function withdraw(balance, amount) {
  if (amount > balance) {
    throw new Error("INSUFFICIENT_FUNDS: Available Rs." + balance + ", Requested Rs." + amount);
  }
  return balance - amount;
}

try {
  let newBalance = withdraw(5000, 8000);
} catch (err) {
  console.log("Transaction Blocked: " + err.message);
}`,
    output: `Transaction Blocked: INSUFFICIENT_FUNDS: Available Rs.5000, Requested Rs.8000`
  },
  practicalExample: {
    title: "Built-in Error Types Hierarchy",
    code: `// SyntaxError, ReferenceError, TypeError, RangeError, URIError
try {
  null.toString();
} catch (err) {
  console.log("Error Class:", err instanceof TypeError ? "TypeError" : "Other");
}`,
    output: `Error Class: TypeError`,
    note: "All error classes inherit from the root `Error` prototype."
  },
  commonMistakes: [
    {
      mistake: "Silently swallowing errors without logging or handling",
      wrongCode: `try { riskyOperation(); } catch(e) {} // Silent swallow hides critical bugs!`,
      correctCode: `try { riskyOperation(); } catch(e) { console.error("Operation failed:", e); }`,
      explanation: "Never leave catch blocks empty; always log or handle the exception."
    }
  ],
  importantPoints: [
    "Errors have `name`, `message`, and `stack` properties.",
    "Uncaught errors bubble up to the global `window.onerror`.",
    "Exceptions halt execution unless caught by a `try...catch` block."
  ],
  interviewQuestions: [
    {
      question: "What are the common built-in error types in JavaScript?",
      answer: "1. `TypeError`: Invalid type operation (e.g. `null.foo()`).\n2. `ReferenceError`: Nonexistent variable access.\n3. `SyntaxError`: Code parsing violations.\n4. `RangeError`: Numeric out-of-range value (e.g. `new Array(-1)`).\n5. `URIError`: Malformed `decodeURI()`.\n6. `EvalError`: Error in `eval()`."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a function `validateAge(age)` that throws an Error if age is negative or not a number.",
      hint: "if (typeof age !== 'number' || age < 0) throw new Error(...);",
      solution: `function validateAge(age) {
  if (typeof age !== "number" || age < 0) {
    throw new Error("Invalid age: must be a positive number.");
  }
  return "Valid age: " + age;
}
try { validateAge(-5); } catch (e) { console.log(e.message); }`
    }
  ]
};

window.TOPIC_DATA_STORE["err-handling"] = {
  id: "err-handling",
  title: "Error Handling",
  lead: "Master graceful error handling patterns, fallback strategies, user-friendly recovery, and resilience.",
  intro: "Error handling is the process of anticipating, detecting, and resolving application runtime errors gracefully without crashing the UI.",
  definition: "Architectural techniques used to catch errors, maintain application state, and display fallback messaging.",
  whyUse: "Keeps web applications functional during network outages, bad API payloads, and invalid user inputs.",
  syntax: `try {
  // Risky operation
} catch (error) {
  // Fallback recovery
}`,
  syntaxExplanation: "Code in `try` runs first. If an exception occurs, execution immediately jumps to `catch` where recovery logic runs.",
  simpleExample: `function parseJSON(str) {
  try {
    return JSON.parse(str);
  } catch (err) {
    console.log("Parse failed, returning default empty object");
    return {};
  }
}
console.log(parseJSON("{ bad json }"));`,
  expectedOutput: `Parse failed, returning default empty object\n{}`,
  realLifeExample: {
    domain: "E-commerce",
    title: "Resilient Shopping Cart LocalStorage Recovery",
    scenario: "Safely retrieving corrupted shopping cart cache from localStorage with fallback defaults.",
    code: `function loadCartFromStorage() {
  let rawCart = "{ invalid_json_data }"; // Simulating corrupted storage
  try {
    return JSON.parse(rawCart);
  } catch (error) {
    console.log("Cart cache corrupted (" + error.message + "). Resetting to clean empty cart.");
    return []; // Graceful fallback
  }
}

let activeCart = loadCartFromStorage();
console.log("Active Cart Items:", activeCart.length);`,
    output: `Cart cache corrupted (Unexpected token 'i', "{ invalid_json_data }" is not valid JSON). Resetting to clean empty cart.\nActive Cart Items: 0`
  },
  practicalExample: {
    title: "Conditional Error Handling by Error Type",
    code: `try {
  JSON.parse("{ bad }");
} catch (err) {
  if (err instanceof SyntaxError) {
    console.log("Handled Syntax Error specifically.");
  } else {
    throw err; // Re-throw unknown errors!
  }
}`,
    output: `Handled Syntax Error specifically.`,
    note: "Inspect `err instanceof Type` to handle expected exceptions specifically."
  },
  commonMistakes: [
    {
      mistake: "Using try/catch for synchronous code expecting to catch asynchronous errors",
      wrongCode: `try {
  setTimeout(() => { throw new Error("Boom"); }, 100);
} catch (e) {
  // DOES NOT CATCH! The timer callback runs in a separate event loop turn!
}`,
      correctCode: `// Use try/catch inside async functions or handle Promise .catch()
setTimeout(() => {
  try { throw new Error("Boom"); } catch(e) { console.log("Caught:", e.message); }
}, 100);`,
      explanation: "`try...catch` is synchronous; it cannot catch errors thrown inside asynchronous callbacks scheduled for future event loop cycles."
    }
  ],
  importantPoints: [
    "Always provide graceful fallback states.",
    "Log errors to external monitoring services (Sentry/LogRocket).",
    "Catch specific errors and re-throw unknown exceptions."
  ],
  interviewQuestions: [
    {
      question: "Can a synchronous try/catch block catch an error thrown inside a setTimeout callback?",
      answer: "No. `setTimeout` schedules the callback to run asynchronously on a future tick of the Event Loop. By the time the callback executes and throws the error, the synchronous `try...catch` block has already completed and exited the Call Stack."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a function `safeDivision(a, b)` that catches any errors and returns a default fallback of 0 on error.",
      hint: "Wrap in try...catch.",
      solution: `function safeDivision(a, b) {
  try {
    if (b === 0) throw new Error("Zero division");
    return a / b;
  } catch (e) {
    return 0;
  }
}
console.log("Result:", safeDivision(10, 0)); // 0`
    }
  ]
};

window.TOPIC_DATA_STORE["err-try"] = {
  id: "err-try",
  title: "Try",
  lead: "Master try blocks, defining critical execution boundaries, and monitoring code sections for exceptions.",
  intro: "The `try` block contains one or more statements that could potentially throw an exception. It must be followed by a `catch` block, a `finally` block, or both.",
  definition: "A statement block marking a guarded section of code to monitor for runtime exceptions.",
  whyUse: "Surrounds third-party library calls, parsing routines, and file/network I/O where failures may occur.",
  syntax: `try {
  // Protected block
}`,
  syntaxExplanation: "A `try` block cannot exist standalone; it requires a matching `catch`, `finally`, or both.",
  simpleExample: `try {
  console.log("1. Entering try block");
  let result = 100 / 2;
  console.log("2. Result is:", result);
} catch (e) {}`,
  expectedOutput: `1. Entering try block\n2. Result is: 50`,
  realLifeExample: {
    domain: "Banking",
    title: "Secured Credit Card Tokenization",
    scenario: "Encapsulating payment gateway encryption inside a try block to safeguard sensitive customer data.",
    code: `console.log("Starting transaction pipeline...");

try {
  console.log("Invoking external banking tokenization service...");
  // Protected operation
  let token = "TOKEN-9481";
  console.log("Card encrypted successfully. Token: " + token);
} catch (err) {
  console.log("Tokenization service failed!");
}`,
    output: `Starting transaction pipeline...\nInvoking external banking tokenization service...\nCard encrypted successfully. Token: TOKEN-9481`
  },
  practicalExample: {
    title: "Immediate Exit on Error",
    code: `try {
  console.log("Line 1: Runs");
  throw new Error("Halting error!");
  console.log("Line 3: Never runs!");
} catch (e) {
  console.log("Caught:", e.message);
}`,
    output: `Line 1: Runs\nCaught: Halting error!`,
    note: "The moment an error occurs, execution inside the try block halts instantly."
  },
  commonMistakes: [
    {
      mistake: "Writing a try block without catch or finally",
      wrongCode: `try { doSomething(); } // SyntaxError: Missing catch or finally after try`,
      correctCode: `try { doSomething(); } catch(e) {}`,
      explanation: "A `try` statement must always be paired with at least one `catch` or `finally` clause."
    }
  ],
  importantPoints: [
    "Keep `try` blocks focused on the specific risky operations rather than wrapping entire applications.",
    "Try blocks introduce minimal performance overhead when no error is thrown in modern V8.",
    "Must be paired with `catch` or `finally`."
  ],
  interviewQuestions: [
    {
      question: "Can a `try` block be followed only by a `finally` block without a `catch`?",
      answer: "Yes. `try { ... } finally { ... }` is completely valid. If an error is thrown, the `finally` block executes first, and then the error continues to bubble up unhandled."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a try block that calls a nonexistent function `testFunc()` and catches the ReferenceError.",
      hint: "try { testFunc(); } catch(e) { ... }",
      solution: `try {
  testFunc();
} catch (e) {
  console.log("Caught expected error:", e.name);
}`
    }
  ]
};

window.TOPIC_DATA_STORE["err-catch"] = {
  id: "err-catch",
  title: "Catch",
  lead: "Master catch blocks, optional catch binding, error inspection, and re-throwing exceptions.",
  intro: "The `catch` block contains statements that specify what to do if an exception is thrown in the `try` block.",
  definition: "A handler block that captures and processes exceptions thrown from an associated `try` block.",
  whyUse: "Diagnosing failure causes, logging stack traces, rendering user-friendly UI error notifications, and re-throwing.",
  syntax: `// Standard catch with error parameter
try { ... } catch (error) { ... }

// Optional catch binding (ES2019)
try { ... } catch { /* error param omitted */ }`,
  syntaxExplanation: "The catch clause receives an `error` object. In ES2019+, the parentheses and error variable can be omitted if not needed.",
  simpleExample: `try {
  decodeURI("%"); // URIError
} catch (err) {
  console.log("Catch block activated:", err.name);
}`,
  expectedOutput: `Catch block activated: URIError`,
  realLifeExample: {
    domain: "Attendance Management",
    title: "Biometric Device Connection Failure Recovery",
    scenario: "Catching offline biometric scanner connection timeouts and switching to manual punch entry mode.",
    code: `try {
  console.log("Pinging biometric sensor on port 8080...");
  throw new Error("DEVICE_UNREACHABLE_TIMEOUT");
} catch (deviceError) {
  console.log("Hardware Alert: " + deviceError.message);
  console.log("Action: Switching terminal to fallback manual password entry.");
}`,
    output: `Hardware Alert: DEVICE_UNREACHABLE_TIMEOUT\nAction: Switching terminal to fallback manual password entry.`
  },
  practicalExample: {
    title: "Optional Catch Binding (ES2019)",
    code: `// When the error details are not needed
function isValidJson(str) {
  try {
    JSON.parse(str);
    return true;
  } catch {
    return false; // No need to declare (err)
  }
}
console.log("Valid JSON?", isValidJson("{ age: 25 }")); // false (keys unquoted)`,
    output: `Valid JSON? false`,
    note: "Optional catch binding eliminates unused `(err)` variables."
  },
  commonMistakes: [
    {
      mistake: "Re-throwing an error using a different name losing the original stack trace",
      wrongCode: `catch (err) {
  throw new Error("Operation failed"); // Loses original stack trace!
}`,
      correctCode: `catch (err) {
  throw new Error("Operation failed", { cause: err }); // ES2022 Error Cause preserves original!
}`,
      explanation: "Use `{ cause: err }` (ES2022) to wrap errors while preserving the original diagnostic stack trace."
    }
  ],
  importantPoints: [
    "The catch parameter is scoped strictly to the catch block.",
    "Optional catch binding `catch { ... }` was introduced in ES2019.",
    "Use `throw err;` inside catch to bubble errors up if they cannot be handled."
  ],
  interviewQuestions: [
    {
      question: "What is Optional Catch Binding in modern JavaScript?",
      answer: "Introduced in ES2019, optional catch binding allows developers to write `catch { ... }` without specifying an unused error parameter `catch (e)`, reducing boilerplate when the error object itself is unneeded."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a function `parseDate(str)` that uses optional catch binding to return null if `new Date(str)` is invalid.",
      hint: "try { ... } catch { return null; }",
      solution: `function parseDate(str) {
  try {
    let d = new Date(str);
    if (isNaN(d.getTime())) throw new Error();
    return d.toDateString();
  } catch {
    return null;
  }
}
console.log(parseDate("2026-11-04"));
console.log(parseDate("invalid-date"));`
    }
  ]
};

window.TOPIC_DATA_STORE["err-finally"] = {
  id: "err-finally",
  title: "Finally",
  lead: "Master guaranteed cleanup execution, resource deallocation, and finally return override behaviors.",
  intro: "The `finally` block will always execute after the `try` and `catch` blocks, regardless of whether an exception was thrown or caught.",
  definition: "A cleanup block guaranteed to execute after `try` and `catch` regardless of outcome or early returns.",
  whyUse: "Closing database connections, stopping loading spinners, releasing file descriptors, and cleaning up state.",
  syntax: `try {
  // operation
} catch (e) {
  // handling
} finally {
  // cleanup guaranteed to run!
}`,
  syntaxExplanation: "`finally` executes even if `try` or `catch` contains a `return` statement.",
  simpleExample: `try {
  console.log("1. Try block");
} finally {
  console.log("2. Finally cleanup block always runs!");
}`,
  expectedOutput: `1. Try block\n2. Finally cleanup block always runs!`,
  realLifeExample: {
    domain: "E-commerce",
    title: "Hiding Loading Spinners with Finally",
    scenario: "Ensuring the checkout loading animation spinner is dismissed whether the payment succeeded or failed.",
    code: `let isSpinnerVisible = true;
console.log("UI: Checkout spinner displayed: " + isSpinnerVisible);

try {
  console.log("Processing payment...");
  throw new Error("Bank gateway timeout");
} catch (err) {
  console.log("UI: Displaying error banner: " + err.message);
} finally {
  // Guaranteed cleanup!
  isSpinnerVisible = false;
  console.log("UI: Checkout spinner dismissed: " + isSpinnerVisible);
}`,
    output: `UI: Checkout spinner displayed: true\nProcessing payment...\nUI: Displaying error banner: Bank gateway timeout\nUI: Checkout spinner dismissed: false`
  },
  practicalExample: {
    title: "Finally Executes Even After Return Statements",
    code: `function testFinallyReturn() {
  try {
    return "Value from Try";
  } finally {
    console.log("Finally ran before function actually returned!");
  }
}
console.log(testFinallyReturn());`,
    output: `Finally ran before function actually returned!\nValue from Try`,
    note: "`finally` runs right before the caller receives the returned value."
  },
  commonMistakes: [
    {
      mistake: "Placing a return statement inside a finally block",
      wrongCode: `function bad() {
  try { return 1; }
  finally { return 2; } // Overwrites the return value 1!
}`,
      correctCode: `function good() {
  try { return 1; }
  finally { console.log("Cleaned up"); } // Does not alter return value
}`,
      explanation: "A `return` inside `finally` overrides any return statement in `try` or `catch`, masking values and swallowed errors."
    }
  ],
  importantPoints: [
    "`finally` is guaranteed to execute.",
    "Executes even if `try` contains an explicit `return`.",
    "Avoid putting `return` statements inside `finally`."
  ],
  interviewQuestions: [
    {
      question: "What happens if both try and finally blocks contain return statements?",
      answer: "The `return` statement inside the `finally` block completely overrides and replaces the `return` statement from the `try` or `catch` block, discarding the earlier return value."
    }
  ],
  practiceExercises: [
    {
      problem: "Simulate database connection opening, a query error, and closing the connection inside `finally`.",
      hint: "try { throw Error } catch { ... } finally { closeDb() }",
      solution: `let dbConnected = true;
console.log("Database connected:", dbConnected);
try {
  throw new Error("Query syntax error");
} catch (e) {
  console.log("Error caught:", e.message);
} finally {
  dbConnected = false;
  console.log("Database connection closed:", !dbConnected);
}`
    }
  ]
};

window.TOPIC_DATA_STORE["err-throw"] = {
  id: "err-throw",
  title: "Throw",
  lead: "Master throwing exceptions, custom error creation, validation guards, and re-throwing errors.",
  intro: "The `throw` statement throws a user-defined exception. Execution of the current function will stop, and control will be passed to the first catch block in the call stack.",
  definition: "A statement that halts normal execution and raises an exception with a custom value or Error instance.",
  whyUse: "Enforcing business constraints (e.g. negative balances), signaling invalid function arguments, and escalating failures.",
  syntax: `throw new Error("Message");
throw "Custom string";
throw { code: 500, detail: "Server error" };`,
  syntaxExplanation: "While JavaScript allows throwing any type (strings, numbers), it is strongly recommended to always throw instances of `Error` (e.g. `throw new Error()`) to preserve stack traces.",
  simpleExample: `function checkNumber(x) {
  if (x < 0) throw new Error("Negative numbers not allowed!");
  return x * 2;
}
try {
  checkNumber(-10);
} catch (e) {
  console.log("Caught:", e.message);
}`,
  expectedOutput: `Caught: Negative numbers not allowed!`,
  realLifeExample: {
    domain: "Banking",
    title: "Enforcing KYC Verification Requirement",
    scenario: "Throwing an authorization exception if an unverified user attempts a high-value wire transfer.",
    code: `function initiateWireTransfer(customer, amount) {
  if (!customer.isKycVerified && amount > 50000) {
    throw new Error("SECURITY_BLOCK: Wire transfer above Rs.50,000 requires completed KYC verification.");
  }
  return "Transfer of Rs." + amount + " authorized.";
}

let customer = { name: "Ananya", isKycVerified: false };
try {
  initiateWireTransfer(customer, 75000);
} catch (err) {
  console.log("Transaction Blocked: " + err.message);
}`,
    output: `Transaction Blocked: SECURITY_BLOCK: Wire transfer above Rs.50,000 requires completed KYC verification.`
  },
  practicalExample: {
    title: "Re-throwing Unhandled Exceptions",
    code: `try {
  try {
    throw new TypeError("Type mismatch!");
  } catch (err) {
    if (err instanceof RangeError) {
      console.log("Handled RangeError");
    } else {
      console.log("Unknown error type. Re-throwing to parent...");
      throw err; // Re-throw!
    }
  }
} catch (parentErr) {
  console.log("Parent caught re-thrown error:", parentErr.name);
}`,
    output: `Unknown error type. Re-throwing to parent...\nParent caught re-thrown error: TypeError`,
    note: "Re-throwing passes unexpected exceptions up to higher-level handlers."
  },
  commonMistakes: [
    {
      mistake: "Throwing plain strings instead of Error objects",
      wrongCode: `throw "Error occurred!"; // No stack trace!`,
      correctCode: `throw new Error("Error occurred!"); // Includes line numbers and call stack!`,
      explanation: "Throwing plain strings deprives developers of `.stack`, `.name`, and line number diagnostics."
    }
  ],
  importantPoints: [
    "Always throw an instance of `Error` or a subclass.",
    "`throw` halts the current function immediately.",
    "Uncaught throws terminate script execution."
  ],
  interviewQuestions: [
    {
      question: "Why should you always throw an Error object rather than a primitive string?",
      answer: "An `Error` object automatically captures a full stack trace (`err.stack`), preserving the file name, function call hierarchy, and line numbers where the error originated. Throwing a string (`throw 'fail'`) strips away all debugging metadata."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a function `validatePassword(pwd)` that throws an Error if password length is under 8 characters.",
      hint: "if (pwd.length < 8) throw new Error(...);",
      solution: `function validatePassword(pwd) {
  if (pwd.length < 8) throw new Error("Password must be at least 8 characters.");
  return "Password accepted.";
}
try { validatePassword("abc"); } catch (e) { console.log(e.message); }`
    }
  ]
};

window.TOPIC_DATA_STORE["err-object"] = {
  id: "err-object",
  title: "Error Object",
  lead: "Master Error properties (name, message, stack, cause), custom Error subclasses, and error serialization.",
  intro: "The `Error` constructor creates an error object. Instances of Error objects are thrown when runtime errors occur.",
  definition: "A built-in prototype object encapsulating error diagnostics including description, error category, and execution stack trace.",
  whyUse: "Inspecting error details, pinpointing bug origin line numbers, and building domain-specific custom exception classes.",
  syntax: `const err = new Error("Message", { cause: rootError });
err.name;    // "Error"
err.message; // "Message"
err.stack;   // Stack trace string
err.cause;   // Root cause error (ES2022)`,
  syntaxExplanation: "`name` indicates error class; `message` describes failure; `stack` reveals the call trace.",
  simpleExample: `let myErr = new Error("Connection failed");
console.log("Name   :", myErr.name);
console.log("Message:", myErr.message);`,
  expectedOutput: `Name   : Error\nMessage: Connection failed`,
  realLifeExample: {
    domain: "Banking",
    title: "Custom Banking Exception Class Hierarchy",
    scenario: "Creating a domain-specific `BankingError` class with account number and transaction code properties.",
    code: `class BankingError extends Error {
  constructor(message, transactionCode) {
    super(message);
    this.name = "BankingError";
    this.transactionCode = transactionCode;
  }
}

try {
  throw new BankingError("Daily transfer limit of Rs.1,00,000 exceeded", "ERR_LIMIT_EXCEEDED");
} catch (err) {
  if (err instanceof BankingError) {
    console.log("Caught: " + err.name);
    console.log("Code  : " + err.transactionCode);
    console.log("Desc  : " + err.message);
  }
}`,
    output: `Caught: BankingError\nCode  : ERR_LIMIT_EXCEEDED\nDesc  : Daily transfer limit of Rs.1,00,000 exceeded`
  },
  practicalExample: {
    title: "Chaining Errors with Error.cause (ES2022)",
    code: `try {
  try {
    JSON.parse("invalid");
  } catch (originalErr) {
    throw new Error("Failed to load user settings", { cause: originalErr });
  }
} catch (highLevelErr) {
  console.log("High Level:", highLevelErr.message);
  console.log("Root Cause:", highLevelErr.cause.message);
}`,
    output: `High Level: Failed to load user settings\nRoot Cause: Unexpected token 'i', "invalid" is not valid JSON`,
    note: "`err.cause` provides clean error chaining without losing original diagnostics."
  },
  commonMistakes: [
    {
      mistake: "Creating custom error classes without calling super(message)",
      wrongCode: `class CustomErr extends Error {
  constructor(msg) { /* Missing super(msg)! */ }
}`,
      correctCode: `class CustomErr extends Error {
  constructor(msg) {
    super(msg); // Initializes Error prototype and stack trace
    this.name = "CustomErr";
  }
}`,
      explanation: "`super(message)` is mandatory in subclasses to initialize standard Error properties."
    }
  ],
  importantPoints: [
    "`err.stack` contains the trace of function calls leading to the error.",
    "`err.cause` (ES2022) allows error chaining.",
    "Custom errors should extend `Error` and set `this.name`."
  ],
  interviewQuestions: [
    {
      question: "How do you create a custom Error class in modern JavaScript?",
      answer: "Create a class extending `Error`, invoke `super(message)` in the constructor, assign `this.name = 'YourCustomErrorName'`, and optionally attach additional metadata properties."
    }
  ],
  practiceExercises: [
    {
      problem: "Create a custom error class `ValidationError` with an extra property `field` (e.g. 'email').",
      hint: "class ValidationError extends Error { ... }",
      solution: `class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}
let err = new ValidationError("Email format invalid", "email");
console.log(err.name, "| Field:", err.field, "| Message:", err.message);`
    }
  ]
};

window.TOPIC_DATA_STORE["err-debugging"] = {
  id: "err-debugging",
  title: "Debugging",
  lead: "Master debugging methodologies, DevTools debugger, sources panel, call stack analysis, and watch expressions.",
  intro: "Debugging is the process of finding and fixing errors or bugs within computer programs. Modern browsers offer powerful built-in developer tools.",
  definition: "The systematic process of detecting, isolating, and resolving software defects using developer tooling and runtime inspection.",
  whyUse: "Understanding bugs, stepping through code line-by-line, watching variable mutations, and profiling performance bottlenecks.",
  syntax: `// The debugger statement
debugger; // Triggers browser breakpoint if DevTools is open`,
  syntaxExplanation: "When the `debugger` keyword is encountered, execution pauses immediately if browser DevTools is open, allowing step-by-step inspection.",
  simpleExample: `function calculateTotal(price, qty) {
  // debugger; // Uncomment to pause in browser DevTools
  return price * qty;
}
console.log("Total:", calculateTotal(10, 5));`,
  expectedOutput: `Total: 50`,
  realLifeExample: {
    domain: "Restaurant Billing",
    title: "Debugging Kitchen Discount Rounding Logic",
    scenario: "Using interactive debugging to inspect item calculations before billing generation.",
    code: `function auditBill(items) {
  let subtotal = 0;
  for (let i = 0; i < items.length; i++) {
    subtotal += items[i].price;
    // Inspect state at each iteration
    console.log("Step " + (i + 1) + ": Added " + items[i].name + " | Running: Rs." + subtotal);
  }
  return subtotal;
}

let bill = auditBill([{ name: "Pizza", price: 400 }, { name: "Juice", price: 100 }]);
console.log("Final Audited Bill: Rs." + bill);`,
    output: `Step 1: Added Pizza | Running: Rs.400\nStep 2: Added Juice | Running: Rs.500\nFinal Audited Bill: Rs.500`
  },
  practicalExample: {
    title: "Conditional Breakpoint Simulation",
    code: `for (let i = 1; i <= 5; i++) {
  if (i === 4) {
    // Conditional debug inspection trigger
    console.log("[DEBUG TARGET HIT] Inspecting iteration index:", i);
  }
}`,
    output: `[DEBUG TARGET HIT] Inspecting iteration index: 4`,
    note: "Conditional breakpoints pause only when a specific boolean condition holds true."
  },
  commonMistakes: [
    {
      mistake: "Leaving debugger statements or verbose console logs in production builds",
      wrongCode: `function pay() { debugger; process(); } // Pauses client browser if DevTools is open!`,
      correctCode: `// Configure build tools (Vite/Webpack) to strip debugger and console in production`,
      explanation: "`debugger` statements left in production code can freeze client browsers when inspecting pages."
    }
  ],
  importantPoints: [
    "Browser shortcut for DevTools: `F12` or `Ctrl + Shift + I` (`Cmd + Option + I`).",
    "`debugger` pauses execution only when DevTools is open.",
    "Use Call Stack panel to trace what function invoked the current execution context."
  ],
  interviewQuestions: [
    {
      question: "What does the `debugger` keyword do in JavaScript?",
      answer: "The `debugger` statement invokes any available debugging functionality, such as setting a breakpoint. If developer tools are open, execution pauses on that exact statement, allowing the developer to inspect variables and step through instructions."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a loop from 1 to 10 that logs a special debug message only when the counter is divisible by 5.",
      hint: "if (i % 5 === 0) console.log(...)",
      solution: `for (let i = 1; i <= 10; i++) {
  if (i % 5 === 0) console.log("Milestone reached:", i);
}`
    }
  ]
};

window.TOPIC_DATA_STORE["err-console"] = {
  id: "err-console",
  title: "Console",
  lead: "Master console methods: log(), warn(), error(), info(), table(), time(), timeEnd(), group(), and trace().",
  intro: "The `console` object provides access to the browser's debugging console. It features specialized methods for tabular rendering, timers, grouping, and stack traces.",
  definition: "A host environment object providing logging and debugging capabilities.",
  whyUse: "Inspecting data structures, benchmarking execution speed, grouping related messages, and visualizing arrays as tables.",
  syntax: `console.log("Standard log");
console.warn("Warning");
console.error("Error");
console.table(arrayOfObjects);
console.time("timerName");
console.timeEnd("timerName");
console.trace();`,
  syntaxExplanation: "`console.table` visualizes objects in tabular columns. `time` and `timeEnd` measure execution duration in milliseconds.",
  simpleExample: `console.log("Informational log");
console.warn("Attention needed");
console.error("Fatal failure");`,
  expectedOutput: `Informational log\nAttention needed\nFatal failure`,
  realLifeExample: {
    domain: "Attendance Management",
    title: "Benchmarking Algorithm Duration with console.time",
    scenario: "Benchmarking the processing duration of generating 10,000 attendance records.",
    code: `console.time("AttendanceBatchBenchmark");

let records = [];
for (let i = 0; i < 5000; i++) {
  records.push({ id: i, status: "Present" });
}

console.timeEnd("AttendanceBatchBenchmark");
console.log("Total Processed Records: " + records.length);`,
    output: `AttendanceBatchBenchmark: ` + (function(){ return "2.14ms\nTotal Processed Records: 5000"; })()
  },
  practicalExample: {
    title: "Grouping Console Messages with console.group",
    code: `console.group("User Session: User#1042");
console.log("Action: Login");
console.log("IP: 192.168.1.1");
console.groupEnd();`,
    output: `User Session: User#1042\n  Action: Login\n  IP: 192.168.1.1`,
    note: "`console.group()` collapses related diagnostic logs into expandable accordions in browser consoles."
  },
  commonMistakes: [
    {
      mistake: "Mismatching timer names in console.time and console.timeEnd",
      wrongCode: `console.time("A");
console.timeEnd("B"); // Warning: Timer 'B' does not exist!`,
      correctCode: `console.time("ProcessData");
console.timeEnd("ProcessData"); // Identical label!`,
      explanation: "`timeEnd` must match the exact string label passed to `time`."
    }
  ],
  importantPoints: [
    "`console.table()` formats arrays of objects as clean tables.",
    "`console.trace()` logs the complete stack trace leading up to that line.",
    "`console.clear()` wipes the console window."
  ],
  interviewQuestions: [
    {
      question: "How can you measure the execution time of a code block in JavaScript?",
      answer: "Use `console.time('label')` before the block and `console.timeEnd('label')` after the block. Alternatively, use `performance.now()` for high-resolution sub-millisecond timestamps."
    }
  ],
  practiceExercises: [
    {
      problem: "Use `console.table()` to display an array of 2 products with `name` and `price` properties.",
      hint: "console.table([{ name: 'A', price: 10 }, { name: 'B', price: 20 }])",
      solution: `let inventory = [
  { name: "Coffee", price: 150 },
  { name: "Tea", price: 80 }
];
console.table(inventory);`
    }
  ]
};

window.TOPIC_DATA_STORE["err-breakpoints"] = {
  id: "err-breakpoints",
  title: "Breakpoints",
  lead: "Master browser breakpoints: Line-of-code, Conditional, DOM mutation, XHR/fetch, and Event listener breakpoints.",
  intro: "A breakpoint is an intentional stopping or pausing place in a program, put in place for debugging purposes. It is vastly superior to `console.log()` debugging.",
  definition: "A debugger feature that pauses execution at a designated line, condition, or event to inspect scope and call stacks.",
  whyUse: "Inspect variable values at exact points in time, step through code (`Step Over`, `Step Into`, `Step Out`), and inspect DOM event handlers.",
  syntax: `// 1. Code breakpoint
debugger;

// 2. Browser DevTools Breakpoint types:
// - Line-of-code: click on line number in Sources tab
// - Conditional: right click line number -> Add conditional breakpoint
// - DOM Breakpoint: right click element in Elements tab -> Break on...
// - XHR/fetch Breakpoint: pause on URL match`,
  syntaxExplanation: "Breakpoints halt the JavaScript engine before the designated line executes, allowing state inspection.",
  simpleExample: `let x = 10;
let y = 20;
// debugger; // Execution stops here in DevTools
let total = x + y;
console.log("Total:", total);`,
  expectedOutput: `Total: 30`,
  realLifeExample: {
    domain: "Banking",
    title: "Conditional Breakpoint for Anomaly Detection",
    scenario: "Setting a conditional breakpoint to pause execution ONLY when a transaction amount exceeds Rs. 1,00,000.",
    code: `let transactions = [
  { id: 1, amount: 5000 },
  { id: 2, amount: 25000 },
  { id: 3, amount: 250000 }, // High-value anomaly!
  { id: 4, amount: 1200 }
];

for (let tx of transactions) {
  // Simulating a conditional breakpoint: tx.amount > 100000
  if (tx.amount > 100000) {
    console.log(">>> [CONDITIONAL BREAKPOINT TRIGGERED] Inspecting anomaly tx:", tx.id, "Rs." + tx.amount);
  }
}`,
    output: `>>> [CONDITIONAL BREAKPOINT TRIGGERED] Inspecting anomaly tx: 3 Rs.250000`
  },
  practicalExample: {
    title: "Step Over vs Step Into Navigation",
    code: `function add(a, b) { return a + b; }
function compute() {
  let val = add(5, 10); // "Step Into" enters add(); "Step Over" runs it and advances!
  return val;
}
console.log("Computed:", compute());`,
    output: `Computed: 15`,
    note: "Use Step Into (F11) to dive into functions; Step Over (F10) to advance past them."
  },
  commonMistakes: [
    {
      mistake: "Relying purely on console.log instead of mastering DevTools breakpoints",
      wrongCode: `// Clutters code with 50 console.log statements
console.log(a); console.log(b); console.log(c);`,
      correctCode: `// Set a single breakpoint and inspect all variables in the Scope pane simultaneously!`,
      explanation: "Breakpoints allow interactive state inspection without modifying and recompiling source code."
    }
  ],
  importantPoints: [
    "Conditional breakpoints pause execution only when an expression is true.",
    "DOM breakpoints pause when DOM subtrees or attributes are mutated.",
    "Event listener breakpoints pause when specific user events (click, submit) trigger."
  ],
  interviewQuestions: [
    {
      question: "What is the difference between Step Over, Step Into, and Step Out in debugger navigation?",
      answer: "1. **Step Over** (`F10`): Executes the next line of code without entering into any function call on that line.\n2. **Step Into** (`F11`): Steps inside the function called on the current line to inspect its body.\n3. **Step Out** (`Shift + F11`): Executes the remainder of the current function and pauses immediately after returning to the calling function."
    }
  ],
  practiceExercises: [
    {
      problem: "Explain where you would set a conditional breakpoint in a loop of 1,000 items to debug only item 750.",
      hint: "Set condition: `i === 750` or `item.id === 750`.",
      solution: `// In DevTools Sources panel: Right click line inside loop -> "Add conditional breakpoint..." -> enter "i === 750"
console.log("Conditional breakpoint configured for i === 750.");`
    }
  ]
};
