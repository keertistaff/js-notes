/* ==========================================================================
   PART 6: Numbers - Comprehensive Topics Data
   ========================================================================== */

window.TOPIC_DATA_STORE = window.TOPIC_DATA_STORE || {};

window.TOPIC_DATA_STORE["numbers-intro"] = {
  id: "numbers-intro",
  title: "Numbers",
  lead: "Master JavaScript numeric types, IEEE 754 floating-point standard, precision limits, and scientific notation.",
  intro: "JavaScript has only one type of number for both integers and floating-point values: a 64-bit binary format (IEEE 754 double precision).",
  definition: "A numeric data type representing both integer values and decimal fractions without distinct float or integer primitive types.",
  whyUse: "Financial calculations, product pricing, geometrical dimensions, counters, loop bounds, and statistical analysis.",
  syntax: `let intVal = 42;
let decVal = 19.99;
let expVal = 123e5; // 12300000
let hexVal = 0xFF;  // 255
let binVal = 0b1010; // 10`,
  syntaxExplanation: "Numbers can be written with or without decimals, in scientific notation with `e`, hexadecimal with `0x`, or binary with `0b`.",
  simpleExample: `let price = 499.50;
let tax = 0.18;
let total = price * (1 + tax);
console.log("Total Payable:", total);`,
  expectedOutput: `Total Payable: 589.41`,
  realLifeExample: {
    domain: "Banking",
    title: "Compound Interest Calculator",
    scenario: "Computing compound interest on a fixed deposit over 3 years.",
    code: `let principal = 100000; // Rs. 1,00,000
let annualRate = 0.075; // 7.5%
let years = 3;

// A = P * (1 + r)^t
let finalAmount = principal * ((1 + annualRate) ** years);
let totalInterest = finalAmount - principal;

console.log("Principal Deposited: Rs. " + principal);
console.log("Maturity Amount    : Rs. " + finalAmount.toFixed(2));
console.log("Interest Earned    : Rs. " + totalInterest.toFixed(2));`,
    output: `Principal Deposited: Rs. 100000\nMaturity Amount    : Rs. 124229.69\nInterest Earned    : Rs. 24229.69`
  },
  practicalExample: {
    title: "Floating-Point Precision Fix with toFixed",
    code: `let sum = 0.1 + 0.2;
console.log("Raw IEEE 754 sum:", sum); // 0.30000000000000004
console.log("Rounded Currency :", sum.toFixed(2)); // "0.30"`,
    output: `Raw IEEE 754 sum: 0.30000000000000004\nRounded Currency : 0.30`,
    note: "Use `.toFixed(2)` to round floating-point calculations for financial displays."
  },
  commonMistakes: [
    {
      mistake: "Comparing floating point numbers directly with ===",
      wrongCode: `if (0.1 + 0.2 === 0.3) { // FALSE!
  console.log("Equal");
}`,
      correctCode: `if (Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON) {
  console.log("Equal within machine tolerance");
}`,
      explanation: "Binary floating-point arithmetic cannot represent decimals like 0.1 exactly. Use `Number.EPSILON` for tolerance checks."
    }
  ],
  importantPoints: [
    "JavaScript numbers are 64-bit IEEE 754 floats.",
    "Maximum safe integer: `Number.MAX_SAFE_INTEGER` = 9,007,199,254,740,991 ($2^{53} - 1$).",
    "Numeric separators (`1_000_000`) enhance code readability without altering value."
  ],
  interviewQuestions: [
    {
      question: "Why does JavaScript have a safe integer limit?",
      answer: "The IEEE 754 double precision format dedicates 53 bits to the significand (mantissa), allowing integers between $-(2^{53}-1)$ and $2^{53}-1$ to be represented with exact precision. Beyond this, integers lose precision. For larger integers, use `BigInt`."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a function that calculates total bill with 18% GST and formats the output to 2 decimal places.",
      hint: "Multiply by 1.18 and use .toFixed(2).",
      solution: `function calculateGrossBill(amount) {
  return (amount * 1.18).toFixed(2);
}
console.log("Gross Bill: Rs. " + calculateGrossBill(1450));`
    }
  ]
};

window.TOPIC_DATA_STORE["number-methods"] = {
  id: "number-methods",
  title: "Number Methods",
  lead: "Master toFixed(), toPrecision(), toString(), parseInt(), parseFloat(), and isNaN().",
  intro: "JavaScript offers static and instance methods to parse, format, and inspect numeric values.",
  definition: "Methods on `Number` and `Number.prototype` providing string formatting, base conversion, and type conversion capabilities.",
  whyUse: "Converting user form text inputs to real numbers, formatting currency decimals, and parsing integers with bases.",
  syntax: `num.toFixed(digits);
num.toPrecision(digits);
num.toString(radix);
Number.parseInt(str, radix);
Number.parseFloat(str);
Number.isInteger(val);`,
  syntaxExplanation: "`toFixed()` rounds decimals to fixed places and returns a string. `parseInt()` parses a string up to the first non-numeric character.",
  simpleExample: `let val = 12.3456;
console.log("toFixed(2):", val.toFixed(2));
console.log("parseInt:", Number.parseInt("100px"));
console.log("parseFloat:", Number.parseFloat("45.67kg"));`,
  expectedOutput: `toFixed(2): 12.35\nparseInt: 100\nparseFloat: 45.67`,
  realLifeExample: {
    domain: "Restaurant Billing",
    title: "Bill Splitter with Clean Decimal Formatting",
    scenario: "Dividing a restaurant bill among 3 diners with clean 2-decimal point currency strings.",
    code: `let billTotal = 1750;
let tipPercent = 10;
let grandTotal = billTotal * (1 + tipPercent / 100);
let split3Ways = grandTotal / 3;

console.log("Grand Total  : Rs." + grandTotal.toFixed(2));
console.log("Per Person   : Rs." + split3Ways.toFixed(2));`,
    output: `Grand Total  : Rs.1925.00\nPer Person   : Rs.641.67`
  },
  practicalExample: {
    title: "Base Conversion with toString(radix)",
    code: `let decNum = 255;
console.log("Decimal    :", decNum.toString(10));
console.log("Hexadecimal:", decNum.toString(16).toUpperCase());
console.log("Binary     :", decNum.toString(2));
console.log("Octal      :", decNum.toString(8));`,
    output: `Decimal    : 255\nHexadecimal: FF\nBinary     : 11111111\nOctal      : 377`,
    note: "Passing a radix (2 to 36) converts numbers into different numeral bases."
  },
  commonMistakes: [
    {
      mistake: "Using global isNaN instead of Number.isNaN",
      wrongCode: `console.log(isNaN("hello")); // true! Because "hello" coerces to NaN`,
      correctCode: `console.log(Number.isNaN("hello")); // false! "hello" is a string, not NaN
console.log(Number.isNaN(NaN));     // true! Strictly checks for NaN value`,
      explanation: "Global `isNaN()` coerces input to number first; `Number.isNaN()` checks strictly without coercion."
    }
  ],
  importantPoints: [
    "`toFixed()` returns a **string**, not a number. Wrap in `Number()` if further math is required.",
    "Always pass the radix `10` to `parseInt(str, 10)` to prevent base parsing quirks.",
    "`Number.isFinite()` verifies numbers that are neither `Infinity` nor `NaN`."
  ],
  interviewQuestions: [
    {
      question: "What is the difference between `Number(val)` and `parseInt(val)`?",
      answer: "`Number('100px')` fails and returns `NaN` because it requires the entire string to be numeric. `parseInt('100px', 10)` parses from left-to-right and successfully extracts `100` until it encounters non-digit characters."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a script that extracts CSS dimension numbers from strings like '250.5px' and calculates double its size.",
      hint: "Use parseFloat() and multiply.",
      solution: `let cssWidth = "250.5px";
let numWidth = Number.parseFloat(cssWidth);
let doubled = (numWidth * 2) + "px";
console.log("Original:", cssWidth, "| Doubled:", doubled);`
    }
  ]
};

window.TOPIC_DATA_STORE["number-properties"] = {
  id: "number-properties",
  title: "Number Properties",
  lead: "Master JavaScript Number constants: EPSILON, MAX_VALUE, MIN_VALUE, MAX_SAFE_INTEGER, MIN_SAFE_INTEGER, POSITIVE_INFINITY, and NaN.",
  intro: "The `Number` object provides static constant properties that define boundaries, precision limits, and special symbolic values in the JavaScript runtime.",
  definition: "Predefined read-only constants on the `Number` constructor representing mathematical limits and special computational states.",
  whyUse: "Validating integer bounds, checking safe serialization ranges, preventing numeric overflow, and floating-point tolerance.",
  syntax: `Number.MAX_SAFE_INTEGER;
Number.MIN_SAFE_INTEGER;
Number.MAX_VALUE;
Number.MIN_VALUE;
Number.EPSILON;
Number.POSITIVE_INFINITY;
Number.NaN;`,
  syntaxExplanation: "These properties must be accessed via `Number.PROPERTY` (static), not on individual number instances.",
  simpleExample: `console.log("Max Safe:", Number.MAX_SAFE_INTEGER);
console.log("Epsilon :", Number.EPSILON);
console.log("Infinity:", Number.POSITIVE_INFINITY);`,
  expectedOutput: `Max Safe: 9007199254740991\nEpsilon : 2.220446049250313e-16\nInfinity: Infinity`,
  realLifeExample: {
    domain: "Banking",
    title: "Large Database Transaction ID Safety Check",
    scenario: "Verifying whether 64-bit database transaction IDs exceed JavaScript's safe integer threshold before arithmetic.",
    code: `let dbTransactionId = 9007199254740992; // 1 above MAX_SAFE_INTEGER

if (Number.isSafeInteger(dbTransactionId)) {
  console.log("Safe to perform standard arithmetic.");
} else {
  console.log("WARNING: ID exceeds safe limits! Use BigInt to prevent precision loss.");
}`,
    output: `WARNING: ID exceeds safe limits! Use BigInt to prevent precision loss.`
  },
  practicalExample: {
    title: "Overflow Handling with POSITIVE_INFINITY",
    code: `let huge = 1.79e308 * 2;
console.log("Value:", huge); // Infinity
console.log("Is Finite?", Number.isFinite(huge)); // false`,
    output: `Value: Infinity\nIs Finite? false`,
    note: "Numbers exceeding `Number.MAX_VALUE` overflow into `Infinity`."
  },
  commonMistakes: [
    {
      mistake: "Calling static properties on number instances",
      wrongCode: `let x = 10;
console.log(x.MAX_VALUE); // undefined!`,
      correctCode: `console.log(Number.MAX_VALUE); // Static property on Number constructor`,
      explanation: "Properties like `MAX_VALUE` belong to `Number`, not number variables."
    }
  ],
  importantPoints: [
    "`Number.MAX_SAFE_INTEGER` is $2^{53} - 1$.",
    "`Number.EPSILON` is the difference between 1 and the smallest floating point number greater than 1.",
    "`NaN` is the only value in JavaScript that is not equal to itself (`NaN === NaN` is false)."
  ],
  interviewQuestions: [
    {
      question: "How can you reliably check if a variable is NaN?",
      answer: "Use `Number.isNaN(val)` or `Object.is(val, NaN)`. Do not use `val === NaN` because `NaN !== NaN` in IEEE 754."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a function that verifies whether an input number is within safe integer boundaries.",
      hint: "Use Number.isSafeInteger().",
      solution: `function checkSafe(num) {
  return Number.isSafeInteger(num) ? "Safe Integer" : "Unsafe - Use BigInt";
}
console.log(checkSafe(1000));
console.log(checkSafe(9007199254740995));`
    }
  ]
};

window.TOPIC_DATA_STORE["number-bitwise"] = {
  id: "number-bitwise",
  title: "Bitwise Operators",
  lead: "Master 32-bit integer binary operations: AND (&), OR (|), XOR (^), NOT (~), Left Shift (<<), and Right Shift (>>).",
  intro: "Bitwise operators treat their operands as a sequence of 32 bits (zeros and ones), rather than as decimal, hexadecimal, or octal numbers.",
  definition: "Operators that perform bit-level manipulation on 32-bit signed integers.",
  whyUse: "Permissions systems, binary protocol parsing, cryptographic hashing, game flags, and low-level performance optimizations.",
  syntax: `a & b;  // Bitwise AND
a | b;  // Bitwise OR
a ^ b;  // Bitwise XOR
~a;     // Bitwise NOT
a << b; // Left Shift
a >> b; // Sign-propagating Right Shift
a >>> b;// Zero-fill Right Shift`,
  syntaxExplanation: "Operands are converted to 32-bit integers, manipulated bit-by-bit, and returned as standard JavaScript numbers.",
  simpleExample: `console.log("5 & 1:", 5 & 1); // 0101 & 0001 = 0001 (1)
console.log("5 | 2:", 5 | 2); // 0101 | 0010 = 0111 (7)
console.log("5 ^ 1:", 5 ^ 1); // 0101 ^ 0001 = 0100 (4)
console.log("5 << 1:", 5 << 1); // 5 * 2 = 10`,
  expectedOutput: `5 & 1: 1\n5 | 2: 7\n5 ^ 1: 4\n5 << 1: 10`,
  realLifeExample: {
    domain: "Business Applications",
    title: "User Role Permission Bitmask System",
    scenario: "Managing Read, Write, Execute, and Admin access using bitmask flags.",
    code: `const PERM_READ    = 1 << 0; // 0001 (1)
const PERM_WRITE   = 1 << 1; // 0010 (2)
const PERM_EXECUTE = 1 << 2; // 0100 (4)
const PERM_ADMIN   = 1 << 3; // 1000 (8)

// Assign Read + Write to an editor
let userPermissions = PERM_READ | PERM_WRITE;

// Check permissions
let canRead = (userPermissions & PERM_READ) !== 0;
let canAdmin = (userPermissions & PERM_ADMIN) !== 0;

console.log("User Flags : " + userPermissions.toString(2).padStart(4, "0"));
console.log("Can Read?  : " + canRead);
console.log("Can Admin? : " + canAdmin);`,
    output: `User Flags : 0011\nCan Read?  : true\nCan Admin? : false`
  },
  practicalExample: {
    title: "Fast Floor Rounding with Double Bitwise NOT (~~)",
    code: `let floatVal = 45.89;
let floored = ~~floatVal; // Truncates decimal part for positive numbers
console.log("Original:", floatVal);
console.log("Floored :", floored);`,
    output: `Original: 45.89\nFloored : 45`,
    note: "`~~` truncates towards zero for 32-bit numbers."
  },
  commonMistakes: [
    {
      mistake: "Confusing bitwise & and | with logical && and ||",
      wrongCode: `if (a & b) { // Bitwise AND on 32-bit ints! Does NOT short-circuit!
  // ...
}`,
      correctCode: `if (a && b) { // Logical AND with short-circuiting
  // ...
}`,
      explanation: "Bitwise operators always evaluate both operands without short-circuiting and operate on integers."
    }
  ],
  importantPoints: [
    "Bitwise operations truncate numbers to 32-bit signed integers.",
    "`x << 1` multiplies integer x by 2; `x >> 1` divides integer x by 2.",
    "Ideal for compact bitmask flags."
  ],
  interviewQuestions: [
    {
      question: "How do bitwise operators treat floating-point numbers in JavaScript?",
      answer: "JavaScript automatically converts floating-point numbers to 32-bit integers by discarding fractional parts before applying bitwise logic, and converts the result back to 64-bit float."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a function using bitwise AND (`&`) to check whether an integer is even or odd.",
      hint: "`(num & 1) === 0` indicates even.",
      solution: `function isEvenBitwise(n) {
  return (n & 1) === 0;
}
console.log("14 is even?", isEvenBitwise(14)); // true
console.log("19 is even?", isEvenBitwise(19)); // false`
    }
  ]
};

window.TOPIC_DATA_STORE["number-bigint"] = {
  id: "number-bigint",
  title: "BigInt",
  lead: "Master arbitrary-precision integers, syntax with 'n', limitations, and arithmetic operations.",
  intro: "BigInt is a built-in primitive object introduced in ES2020 that provides a way to represent whole numbers larger than $2^{53} - 1$ ($9,007,199,254,740,991$).",
  definition: "A primitive numeric type capable of storing and calculating integers of arbitrary precision without limit.",
  whyUse: "Financial transaction IDs, cryptography keys, blockchain balances, high-precision timestamps, and large scientific calculations.",
  syntax: `let bigLiteral = 123456789012345678901234567890n;
let bigConstructor = BigInt("9007199254740995");`,
  syntaxExplanation: "Created by appending `n` to the end of an integer literal or by calling the `BigInt()` function.",
  simpleExample: `let big = 9007199254740991n;
console.log("BigInt + 1n:", big + 1n);
console.log("BigInt + 2n:", big + 2n);
console.log("Type:", typeof big);`,
  expectedOutput: `BigInt + 1n: 9007199254740992n\nBigInt + 2n: 9007199254740993n\nType: bigint`,
  realLifeExample: {
    domain: "Banking",
    title: "Cryptographic Blockchain Satoshis Ledger",
    scenario: "Tracking precise micro-unit cryptocurrency token balances without rounding inaccuracies.",
    code: `const SATOSHIS_PER_BTC = 100000000n;
let walletBalance = 500000000n; // 5 BTC in Satoshis
let transferAmount = 25000000n;  // 0.25 BTC

let remainingBalance = walletBalance - transferAmount;
console.log("Opening Balance : " + walletBalance + " Satoshis");
console.log("Transferred     : " + transferAmount + " Satoshis");
console.log("Closing Balance : " + remainingBalance + " Satoshis");`,
    output: `Opening Balance : 500000000 Satoshis\nTransferred     : 25000000 Satoshis\nClosing Balance : 475000000 Satoshis`
  },
  practicalExample: {
    title: "BigInt Division Behavior",
    code: `// BigInt division truncates decimals towards zero
let result = 5n / 2n;
console.log("5n / 2n =", result); // 2n, not 2.5n!`,
    output: `5n / 2n = 2n`,
    note: "BigInt division always rounds fractions down to integer values."
  },
  commonMistakes: [
    {
      mistake: "Mixing BigInt and regular Number in arithmetic operations",
      wrongCode: `let big = 10n;
let num = 5;
let res = big + num; // TypeError: Cannot mix BigInt and other types`,
      correctCode: `let big = 10n;
let num = 5;
let res = big + BigInt(num); // Explicitly convert!
console.log(res);`,
      explanation: "JavaScript forbids implicit coercion between BigInt and Number to avoid accidental precision loss."
    }
  ],
  importantPoints: [
    "Cannot use `Math` methods (like `Math.max` or `Math.sqrt`) with BigInt.",
    "Comparisons like `10n == 10` return `true`, but `10n === 10` returns `false` due to different types.",
    "BigInt cannot represent fractional decimal values."
  ],
  interviewQuestions: [
    {
      question: "Can BigInt be serialized directly with JSON.stringify()?",
      answer: "No. `JSON.stringify()` throws a `TypeError: Do not know how to serialize a BigInt`. You must provide a custom replacer function or define `BigInt.prototype.toJSON = function() { return this.toString(); }`."
    }
  ],
  practiceExercises: [
    {
      problem: "Calculate $2^{100}$ using BigInt exponentiation (`**`).",
      hint: "Use 2n ** 100n.",
      solution: `let bigPower = 2n ** 100n;
console.log("2^100 =", bigPower.toString());`
    }
  ]
};
