/* ==========================================================================
   PART 5: Strings - Comprehensive Topics Data
   ========================================================================== */

window.TOPIC_DATA_STORE = window.TOPIC_DATA_STORE || {};

window.TOPIC_DATA_STORE["strings-intro"] = {
  id: "strings-intro",
  title: "Strings Introduction",
  lead: "Master JavaScript string primitives, literals, quotes, immutability, and length property.",
  intro: "Strings in JavaScript are sequences of UTF-16 code units used to store and manipulate text. They can be created with single quotes, double quotes, or backticks.",
  definition: "A primitive, immutable data type representing textual data stored as a sequence of 16-bit Unicode characters.",
  whyUse: "Handling user names, messages, addresses, URLs, API responses, HTML markup, and file paths.",
  syntax: `let s1 = 'Single quotes';
let s2 = "Double quotes";
let s3 = \`Template literal\`;
let len = s1.length;`,
  syntaxExplanation: "Single and double quotes behave identically in standard strings. The `.length` property returns total characters including spaces.",
  simpleExample: `let course = "JavaScript Web Development";
console.log("Course Name:", course);
console.log("Length:", course.length);
console.log("First Char:", course[0]);`,
  expectedOutput: `Course Name: JavaScript Web Development\nLength: 26\nFirst Char: J`,
  realLifeExample: {
    domain: "Student Management",
    title: "Student Identification Code Generation",
    scenario: "Verifying student enrollment roll number format and length.",
    code: `let studentId = "STD-2026-984";
console.log("Student ID: " + studentId);
console.log("Length Check: " + studentId.length + " chars");
console.log("Prefix: " + studentId.slice(0, 3));`,
    output: `Student ID: STD-2026-984\nLength Check: 12 chars\nPrefix: STD`
  },
  practicalExample: {
    title: "String Immutability Proof",
    code: `let greeting = "Hello";
greeting[0] = "J"; // Silent failure in non-strict mode
console.log(greeting); // Still "Hello"!

greeting = "Jello"; // Reassigning creates a completely new string
console.log(greeting);`,
    output: `Hello\nJello`,
    note: "Strings in JavaScript are immutable; individual characters cannot be changed in place."
  },
  commonMistakes: [
    {
      mistake: "Unescaped quotes causing syntax errors",
      wrongCode: `let quote = 'It's a sunny day'; // SyntaxError!`,
      correctCode: `let quote = 'It\\'s a sunny day'; // Escaped with backslash
let quote2 = "It's a sunny day";  // Or double quotes`,
      explanation: "Use backslash `\\` to escape identical matching quote characters inside strings."
    }
  ],
  importantPoints: [
    "Strings are 0-indexed primitives.",
    "The `.length` property counts UTF-16 code units.",
    "String characters are read-only and immutable."
  ],
  interviewQuestions: [
    {
      question: "Why are strings immutable in JavaScript?",
      answer: "String immutability ensures safety, performance, thread-safety, and string interning in engine memory. Reassigning a string variable points the identifier to a newly allocated string."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a script that extracts the first and last character of any given string.",
      hint: "Use str[0] and str[str.length - 1].",
      solution: `let text = "Frontend";
console.log("First:", text[0], "| Last:", text[text.length - 1]);`
    }
  ]
};

window.TOPIC_DATA_STORE["string-templates"] = {
  id: "string-templates",
  title: "String Templates",
  lead: "Master ES6 Template Literals, string interpolation with ${}, multi-line strings, and tagged templates.",
  intro: "Template literals are string literals allowing embedded expressions. They use backticks (`` ` ``) rather than single or double quotes.",
  definition: "Template literals (template strings) are string literals with embedded expressions, multi-line support, and tagged formatting.",
  whyUse: "Eliminates cumbersome `+` concatenation, allows clean multi-line HTML generation, and embeds expressions directly.",
  syntax: `let greeting = \`Hello, \${userName}! You have \${count * 2} points.\`;`,
  syntaxExplanation: "Variables and expressions placed inside `${expression}` are evaluated and coerced to strings automatically.",
  simpleExample: `let user = "Neha";
let score = 95;
console.log(\`Student \${user} scored \${score} out of 100.\`);`,
  expectedOutput: `Student Neha scored 95 out of 100.`,
  realLifeExample: {
    domain: "Restaurant Billing",
    title: "Multi-line Itemized Bill Generation",
    scenario: "Generating an itemized restaurant receipt with formatted multi-line template strings.",
    code: `let customer = "Vikram Roy";
let item = "Butter Chicken";
let price = 380;
let qty = 2;

let receipt = \`
============================
      TAJ PALACE DINING
============================
Customer: \${customer}
Item    : \${item} x \${qty}
Subtotal: Rs. \${price * qty}
GST (5%): Rs. \${(price * qty) * 0.05}
TOTAL   : Rs. \${(price * qty) * 1.05}
============================\`;

console.log(receipt);`,
    output: `
============================
      TAJ PALACE DINING
============================
Customer: Vikram Roy
Item    : Butter Chicken x 2
Subtotal: Rs. 760
GST (5%): Rs. 38
TOTAL   : Rs. 798
============================`
  },
  practicalExample: {
    title: "Tagged Template Literals",
    code: `function highlight(strings, ...values) {
  return strings.reduce((acc, str, i) => acc + str + (values[i] ? \`[\${values[i]}]\` : ''), '');
}
let item = "iPhone 15";
let price = 79999;
console.log(highlight\`Product: \${item} costs \${price}\`);`,
    output: `Product: [iPhone 15] costs [79999]`,
    note: "Tagged templates parse template literals with a custom formatting function."
  },
  commonMistakes: [
    {
      mistake: "Using single quotes instead of backticks for interpolation",
      wrongCode: `let name = "Amit";
console.log('Hello, \${name}'); // Prints literal: Hello, \${name}`,
      correctCode: `let name = "Amit";
console.log(\`Hello, \${name}\`); // Uses backticks! Prints: Hello, Amit`,
      explanation: "`${}` interpolation only works inside backtick-delimited template literals."
    }
  ],
  importantPoints: [
    "Supports multi-line text without `\\n` escape sequences.",
    "Expressions inside `${}` can execute any valid JavaScript expression (function calls, math, ternary).",
    "Introduced in ECMAScript 2015 (ES6)."
  ],
  interviewQuestions: [
    {
      question: "What is a Tagged Template Literal and where is it used in libraries?",
      answer: "A tagged template allows passing a template literal to a function tag. Libraries like `styled-components` in React or SQL-escaping libraries use tagged templates to parse and sanitize template expressions."
    }
  ],
  practiceExercises: [
    {
      problem: "Create a template string that outputs an HTML `<div>` card with title, author, and reading time.",
      hint: "Use backticks with multi-line indentation.",
      solution: `let title = "Mastering ES6";
let author = "Rahul Verma";
let time = "8 min";
let card = \`<div class="card">
  <h2>\${title}</h2>
  <p>By \${author} | \${time}</p>
</div>\`;
console.log(card);`
    }
  ]
};

window.TOPIC_DATA_STORE["string-methods"] = {
  id: "string-methods",
  title: "String Methods",
  lead: "Master essential string methods: slice(), substring(), toUpperCase(), toLowerCase(), trim(), replace(), split(), and charAt().",
  intro: "JavaScript provides a comprehensive library of string methods to inspect, extract, replace, and transform text data.",
  definition: "Built-in methods on `String.prototype` that operate on string values and return new transformed strings.",
  whyUse: "Sanitizing user inputs, formatting names, parsing CSV files, replacing keywords, and data cleaning.",
  syntax: `str.toUpperCase();
str.toLowerCase();
str.trim();
str.slice(start, end);
str.replace(target, replacement);
str.split(separator);`,
  syntaxExplanation: "Because strings are immutable, all string methods return a **new string** without modifying the original.",
  simpleExample: `let text = "  Learn JavaScript  ";
console.log("Trimmed:", text.trim());
console.log("Upper:", text.toUpperCase());
console.log("Slice:", text.trim().slice(0, 5));`,
  expectedOutput: `Trimmed: Learn JavaScript\nUpper:   LEARN JAVASCRIPT  \nSlice: Learn`,
  realLifeExample: {
    domain: "Attendance Management",
    title: "Sanitizing Employee Input Names",
    scenario: "Cleaning leading whitespace, capitalizing employee names, and parsing full names into first and last names.",
    code: `let rawInput = "   sanjay kumar verma   ";
let cleaned = rawInput.trim();
let words = cleaned.split(" ");
let titleCased = words.map(w => w[0].toUpperCase() + w.slice(1).toLowerCase()).join(" ");

console.log("Raw Input   : '" + rawInput + "'");
console.log("Formatted   : '" + titleCased + "'");
console.log("First Name  : " + words[0]);
console.log("Last Name   : " + words[words.length - 1]);`,
    output: `Raw Input   : '   sanjay kumar verma   '\nFormatted   : 'Sanjay Kumar Verma'\nFirst Name  : sanjay\nLast Name   : verma`
  },
  practicalExample: {
    title: "Masking Credit Card Numbers with padStart & slice",
    code: `let cardNumber = "4532890123456789";
let lastFour = cardNumber.slice(-4);
let masked = lastFour.padStart(cardNumber.length, "*");
console.log("Masked Card Number:", masked);`,
    output: `Masked Card Number: ************6789`,
    note: "`padStart()` and `padEnd()` format fixed-width strings effortlessly."
  },
  commonMistakes: [
    {
      mistake: "Expecting string methods to mutate the original string",
      wrongCode: `let name = "rahul";
name.toUpperCase(); // Returns "RAHUL", but does not change name!
console.log(name);  // Still "rahul"!`,
      correctCode: `let name = "rahul";
name = name.toUpperCase(); // Must reassign!
console.log(name);`,
      explanation: "Strings are immutable; string methods never modify in place."
    }
  ],
  importantPoints: [
    "`slice(start, end)` supports negative indices counting from the string end.",
    "`replace()` replaces only the first occurrence; use `replaceAll()` or a global regex `/g` to replace all.",
    "`split()` divides a string into an array of substrings."
  ],
  interviewQuestions: [
    {
      question: "What is the difference between slice() and substring() in JavaScript?",
      answer: "`slice()` accepts negative indices (counting backwards from the end) and returns empty string if `start > end`. `substring()` does not accept negative indices (treats them as 0) and automatically swaps arguments if `start > end`."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a function that replaces all spaces in a URL title with hyphens to create a slug (e.g. 'Complete JavaScript Guide' -> 'complete-javascript-guide').",
      hint: "Use toLowerCase() and replaceAll() or split(' ').join('-').",
      solution: `function makeSlug(title) {
  return title.toLowerCase().trim().split(" ").join("-");
}
console.log(makeSlug("Complete JavaScript Guide")); // "complete-javascript-guide"`
    }
  ]
};

window.TOPIC_DATA_STORE["string-search"] = {
  id: "string-search",
  title: "String Search",
  lead: "Master string searching methods: indexOf(), lastIndexOf(), startsWith(), endsWith(), includes(), and search().",
  intro: "JavaScript includes specialized search methods to locate substrings, match regular expressions, and test prefixes and suffixes.",
  definition: "Methods on `String.prototype` designed to search for character patterns, returning boolean flags or numerical index positions.",
  whyUse: "Validating file extensions (.png, .pdf), searching keyword occurrences, verifying email domains, and parsing query strings.",
  syntax: `str.indexOf("term");       // First index or -1
str.lastIndexOf("term");   // Last index or -1
str.includes("term");      // Boolean true/false
str.startsWith("prefix");  // Boolean
str.endsWith("suffix");    // Boolean
str.search(/pattern/);     // Regex search`,
  syntaxExplanation: "Methods return `-1` when a match is not found. `includes()`, `startsWith()`, and `endsWith()` return booleans.",
  simpleExample: `let str = "Learning JavaScript is fun!";
console.log("Includes 'JavaScript':", str.includes("JavaScript"));
console.log("Starts with 'Learn':  ", str.startsWith("Learn"));
console.log("Index of 'is':        ", str.indexOf("is"));`,
  expectedOutput: `Includes 'JavaScript': true\nStarts with 'Learn':   true\nIndex of 'is':         20`,
  realLifeExample: {
    domain: "E-commerce",
    title: "Search Query Filter for Product Catalogue",
    scenario: "Filtering a list of smartphone products based on customer search input.",
    code: `let products = [
  "Apple iPhone 15 Pro",
  "Samsung Galaxy S24 Ultra",
  "Google Pixel 8 Pro",
  "Apple iPhone 14"
];

let searchQuery = "iphone";

let filtered = products.filter(p => p.toLowerCase().includes(searchQuery.toLowerCase()));
console.log("Search Results for '" + searchQuery + "':");
filtered.forEach(p => console.log(" - " + p));`,
    output: `Search Results for 'iphone':\n - Apple iPhone 15 Pro\n - Apple iPhone 14`
  },
  practicalExample: {
    title: "File Extension Validator with endsWith",
    code: `let uploadedFile = "employee_resume_2026.pdf";
let isValidDocument = uploadedFile.endsWith(".pdf") || uploadedFile.endsWith(".docx");
console.log("File:", uploadedFile);
console.log("Valid Format?", isValidDocument);`,
    output: `File: employee_resume_2026.pdf\nValid Format? true`,
    note: "`endsWith()` provides clean validation for file types and URL extensions."
  },
  commonMistakes: [
    {
      mistake: "Using indexOf in if statement without checking !== -1",
      wrongCode: `let email = "admin@bank.com";
if (email.indexOf("admin")) { // indexOf returns 0 (which is FALSY in JS!)
  console.log("Admin email detected"); // DOES NOT EXECUTE!
}`,
      correctCode: `let email = "admin@bank.com";
if (email.includes("admin")) { // Or email.indexOf("admin") !== -1
  console.log("Admin email detected");
}`,
      explanation: "Index 0 is falsy in JavaScript, so `if (str.indexOf('foo'))` fails when the match is at the very beginning! Use `.includes()` instead."
    }
  ],
  importantPoints: [
    "`indexOf()` and `includes()` are case-sensitive.",
    "`includes()` was introduced in ES6 and should be preferred over `indexOf() !== -1` for boolean checks.",
    "`startsWith(prefix, position)` can start searching from an optional index offset."
  ],
  interviewQuestions: [
    {
      question: "Why is `str.includes()` preferred over `str.indexOf() !== -1`?",
      answer: "`str.includes()` expresses intent clearly by directly returning a boolean (`true`/`false`), preventing common off-by-zero falsiness bugs associated with checking integer indices."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a function that checks whether an email address ends with '@company.com' and includes no spaces.",
      hint: "Use endsWith() and !includes(' ').",
      solution: `function isCompanyEmail(email) {
  return email.endsWith("@company.com") && !email.includes(" ");
}
console.log(isCompanyEmail("rahul@company.com")); // true
console.log(isCompanyEmail("rahul@gmail.com"));   // false`
    }
  ]
};

window.TOPIC_DATA_STORE["string-reference"] = {
  id: "string-reference",
  title: "String Reference",
  lead: "Comprehensive quick-reference table and overview of all JavaScript string properties and methods.",
  intro: "This reference contains a complete compilation of all standardized String prototype methods, parameters, and return types.",
  definition: "Standardized specification reference for JavaScript String objects, Unicode code point helpers, and regex string methods.",
  whyUse: "Provides a fast lookup guide during technical development and coding interviews.",
  syntax: `// Quick method reference examples
String.fromCharCode(65); // "A"
String.raw\`C:\\new\\test\`; // Raw string without escape
str.repeat(3); // Repeated string
str.concat("!", "?"); // Concatenation`,
  syntaxExplanation: "Includes static methods (`String.fromCharCode`) and instance methods (`str.repeat`, `str.normalize`).",
  simpleExample: `console.log("JS ".repeat(3));
console.log(String.fromCharCode(72, 105));`,
  expectedOutput: `JS JS JS \nHi`,
  realLifeExample: {
    domain: "Business Applications",
    title: "Invoice Number Padding System",
    scenario: "Formatting sequential database IDs into standardized 8-digit invoice numbers.",
    code: `let rawId = 42;
let invoiceCode = "INV-" + String(rawId).padStart(6, "0");
console.log("Formatted Invoice Number:", invoiceCode);`,
    output: `Formatted Invoice Number: INV-000042`
  },
  practicalExample: {
    title: "String Conversion Methods",
    code: `let num = 12345;
let strFromNum = num.toString();
let charCode = "A".charCodeAt(0);
console.log("String Type:", typeof strFromNum);
console.log("Unicode Code of 'A':", charCode);`,
    output: `String Type: string\nUnicode Code of 'A': 65`,
    note: "`charCodeAt()` returns the UTF-16 code unit."
  },
  commonMistakes: [
    {
      mistake: "Using concat() instead of + operator or template strings",
      wrongCode: `let res = "".concat(a).concat(" ").concat(b); // Verbose and slow`,
      correctCode: `let res = \`\${a} \${b}\`; // Clean and optimized`,
      explanation: "Template literals and the `+` operator are faster and vastly more readable than chaining `.concat()`."
    }
  ],
  importantPoints: [
    "`str.repeat(n)` duplicates string content n times.",
    "`str.normalize()` cleans Unicode composite characters.",
    "`String.raw` prevents processing of escape sequences."
  ],
  interviewQuestions: [
    {
      question: "What is the difference between charCodeAt() and codePointAt()?",
      answer: "`charCodeAt()` returns a 16-bit number representing UTF-16 code units (up to 0xFFFF). `codePointAt()` properly handles full Unicode code points beyond 0xFFFF (such as emojis or astral symbols) that occupy surrogate pairs."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a script that creates a 5-star rating visual string (e.g. ⭐⭐⭐⭐⭐) using `repeat()`.",
      hint: "Use '⭐'.repeat(rating).",
      solution: `let rating = 4;
let stars = "⭐".repeat(rating) + "☆".repeat(5 - rating);
console.log("Customer Rating: " + stars + " (" + rating + "/5)");`
    }
  ]
};
