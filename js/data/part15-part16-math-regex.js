/* ==========================================================================
   PART 15 & 16: Math & Regular Expressions - Comprehensive Topics Data
   ========================================================================== */

window.TOPIC_DATA_STORE = window.TOPIC_DATA_STORE || {};

// PART 15: MATH
window.TOPIC_DATA_STORE["math-object"] = {
  id: "math-object",
  title: "Math Object",
  lead: "Master JavaScript's built-in Math namespace, mathematical constants (PI, E, SQRT2), and static utility methods.",
  intro: "The JavaScript `Math` object allows you to perform mathematical tasks on numbers. Unlike other objects, the `Math` object has no constructor; all properties and methods are static.",
  definition: "A built-in global namespace object containing mathematical constants and static utility functions.",
  whyUse: "Financial interest formulas, geometric calculations, statistical modeling, game physics, and random number generation.",
  syntax: `Math.PI;      // ~3.14159
Math.E;       // ~2.71828
Math.round(x);
Math.floor(x);
Math.ceil(x);`,
  syntaxExplanation: "`Math` is not a function or constructor; you do not use `new Math()`. All properties and methods are accessed via `Math.method()`.",
  simpleExample: `console.log("PI Value :", Math.PI);
console.log("Euler's E:", Math.E);
console.log("Rounded  :", Math.round(4.7));`,
  expectedOutput: `PI Value : 3.141592653589793\nEuler's E: 2.718281828459045\nRounded  : 5`,
  realLifeExample: {
    domain: "Business Applications",
    title: "Cylindrical Storage Tank Volume Calculation",
    scenario: "Computing industrial fluid volume in cubic meters using circle area and height formulas.",
    code: `let radiusMeters = 3.5;
let heightMeters = 10;

// V = PI * r^2 * h
let volume = Math.PI * (radiusMeters ** 2) * heightMeters;
console.log("Storage Tank Radius: " + radiusMeters + "m");
console.log("Storage Tank Height: " + heightMeters + "m");
console.log("Calculated Capacity: " + volume.toFixed(2) + " cubic meters");`,
    output: `Storage Tank Radius: 3.5m\nStorage Tank Height: 10m\nCalculated Capacity: 384.85 cubic meters`
  },
  practicalExample: {
    title: "Math.SQRT2 and Math.LN10 Constants",
    code: `console.log("Square root of 2:", Math.SQRT2);
console.log("Natural log of 10:", Math.LN10);`,
    output: `Square root of 2: 1.4142135623730951\nNatural log of 10: 2.302585092994046`,
    note: "Pre-computed mathematical constants avoid runtime recalculations."
  },
  commonMistakes: [
    {
      mistake: "Attempting to instantiate Math with new Math()",
      wrongCode: `let m = new Math(); // TypeError: Math is not a constructor!`,
      correctCode: `let pi = Math.PI; // Access static properties directly`,
      explanation: "Math is a static namespace object, not an instantiable constructor."
    }
  ],
  importantPoints: [
    "`Math` works with 64-bit floating point numbers (not BigInt).",
    "All properties and functions on `Math` are static.",
    "Functions return `NaN` when arguments cannot be converted to numbers."
  ],
  interviewQuestions: [
    {
      question: "Can you use Math methods with BigInt numbers in JavaScript?",
      answer: "No. Standard `Math` methods (like `Math.max` or `Math.sqrt`) strictly accept `Number` primitives and throw a `TypeError: Cannot convert a BigInt value to a number` if passed BigInt."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a function `circleArea(radius)` that calculates the area of a circle ($A = \\pi r^2$) rounded to 2 decimal places.",
      hint: "Math.PI * Math.pow(r, 2) or Math.PI * (r ** 2)",
      solution: `function circleArea(r) {
  return (Math.PI * (r ** 2)).toFixed(2);
}
console.log("Area (r=5):", circleArea(5)); // 78.54`
    }
  ]
};

window.TOPIC_DATA_STORE["math-methods"] = {
  id: "math-methods",
  title: "Math Methods",
  lead: "Master round(), floor(), ceil(), trunc(), abs(), min(), max(), pow(), and sqrt().",
  intro: "JavaScript provides a comprehensive set of mathematical methods for rounding, powers, roots, signs, and extreme value extraction.",
  definition: "Static computational methods on the `Math` namespace for arithmetic and algebraic calculations.",
  whyUse: "Rounding pricing bills, finding boundary extremes, calculating distances, and coordinate physics.",
  syntax: `Math.round(4.4); // 4 (nearest integer)
Math.floor(4.9); // 4 (round down)
Math.ceil(4.1);  // 5 (round up)
Math.trunc(4.9); // 4 (removes decimal)
Math.abs(-25);   // 25 (absolute)
Math.min(10, 5, 20); // 5
Math.max(10, 5, 20); // 20
Math.sqrt(64);   // 8`,
  syntaxExplanation: "`floor` rounds down towards negative infinity; `trunc` simply chops off the fractional portion.",
  simpleExample: `console.log("Round 4.5:", Math.round(4.5));
console.log("Floor -4.1:", Math.floor(-4.1));
console.log("Trunc -4.9:", Math.trunc(-4.9));
console.log("Max item :", Math.max(12, 85, 33));`,
  expectedOutput: `Round 4.5: 5\nFloor -4.1: -5\nTrunc -4.9: -4\nMax item : 85`,
  realLifeExample: {
    domain: "E-commerce",
    title: "Shipping Delivery Days & Bulk Box Packaging",
    scenario: "Calculating total shipping boxes required where each box holds up to 6 units.",
    code: `let orderedUnits = 25;
let boxCapacity = 6;

// ceil guarantees enough boxes for leftover fractional units
let boxesNeeded = Math.ceil(orderedUnits / boxCapacity);
console.log("Units Ordered : " + orderedUnits);
console.log("Box Capacity  : " + boxCapacity);
console.log("Boxes Needed  : " + boxesNeeded);`,
    output: `Units Ordered : 25\nBox Capacity  : 6\nBoxes Needed  : 5`
  },
  practicalExample: {
    title: "Array Extremes with Spread and Math.max/min",
    code: `let testMarks = [78, 92, 45, 99, 83];
let highestMark = Math.max(...testMarks);
let lowestMark = Math.min(...testMarks);
console.log("Highest Mark:", highestMark);
console.log("Lowest Mark :", lowestMark);`,
    output: `Highest Mark: 99\nLowest Mark : 45`,
    note: "Use spread syntax `...` to pass an array of numbers into `Math.max()`."
  },
  commonMistakes: [
    {
      mistake: "Assuming Math.floor and Math.trunc behave identically for negative numbers",
      wrongCode: `console.log(Math.floor(-4.2)); // -5 (moves downward toward -infinity!)
console.log(Math.trunc(-4.2)); // -4 (chops decimal toward zero!)`,
      correctCode: `// Use Math.trunc when you purely want to drop fractions regardless of sign
console.log(Math.trunc(-4.2)); // -4`,
      explanation: "`Math.floor()` rounds down toward negative infinity; `Math.trunc()` discards decimals toward zero."
    }
  ],
  importantPoints: [
    "`Math.round(x)` rounds half-values towards $+\\infty$ (`-1.5` rounds to `-1`, `1.5` to `2`).",
    "`Math.min()` without arguments returns `Infinity`; `Math.max()` returns `-Infinity`.",
    "`Math.pow(base, exp)` is equivalent to the `**` operator."
  ],
  interviewQuestions: [
    {
      question: "Why does `Math.min()` with no arguments return Infinity?",
      answer: "In mathematics, identity elements for operations ensure that `Math.min(a, b)` can be updated iteratively. If you pass an empty argument list, `Math.min()` returns $+\\infty$ so that any subsequent number tested will be smaller. Conversely, `Math.max()` returns $-\\infty$."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a function `clamp(val, min, max)` that restricts a number between a lower and upper bound using `Math.max` and `Math.min`.",
      hint: "Math.min(Math.max(val, min), max)",
      solution: `function clamp(val, min, max) {
  return Math.min(Math.max(val, min), max);
}
console.log("Clamp 15 between 0 and 10 :", clamp(15, 0, 10)); // 10
console.log("Clamp -5 between 0 and 10 :", clamp(-5, 0, 10)); // 0
console.log("Clamp 7 between 0 and 10  :", clamp(7, 0, 10));  // 7`
    }
  ]
};

window.TOPIC_DATA_STORE["math-random"] = {
  id: "math-random",
  title: "Math Random",
  lead: "Master pseudo-random number generation, range formulas, OTP generators, and array shuffling.",
  intro: "`Math.random()` returns a floating-point, pseudo-random number in the range 0 (inclusive) up to but not including 1 (exclusive).",
  definition: "A pseudo-random number generation method on the `Math` object returning a floating-point value $0 \\le x < 1$.",
  whyUse: "Generating OTP verification codes, rolling dice in games, lottery draws, selecting random winners, and Fisher-Yates shuffling.",
  syntax: `// Standard range formula (min inclusive, max inclusive)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}`,
  syntaxExplanation: "`Math.random()` produces $[0, 1)$. Multiplying by `(max - min + 1)` scales the range; `Math.floor()` creates uniform integer distributions.",
  simpleExample: `let rand = Math.random();
console.log("Random float [0, 1):", rand);
let diceRoll = Math.floor(Math.random() * 6) + 1;
console.log("Dice roll [1-6]    :", diceRoll);`,
  expectedOutput: `Random float [0, 1): ` + Math.random() + `\nDice roll [1-6]    : ` + (Math.floor(Math.random() * 6) + 1),
  realLifeExample: {
    domain: "Banking",
    title: "Secure 6-Digit Banking OTP Generator",
    scenario: "Generating a random 6-digit one-time password for two-factor SMS verification.",
    code: `function generateOtp() {
  // Generates integer between 100000 and 999999
  let otp = Math.floor(100000 + Math.random() * 900000);
  return otp;
}

let sessionOtp = generateOtp();
console.log("Generated 6-Digit OTP: " + sessionOtp);
console.log("SMS Message: 'Your verification code is " + sessionOtp + ". Valid for 5 minutes.'");`,
    output: `Generated 6-Digit OTP: 549182\nSMS Message: 'Your verification code is 549182. Valid for 5 minutes.'`
  },
  practicalExample: {
    title: "Random Winner Selection from Array",
    code: `let contestParticipants = ["Rohan", "Pooja", "Aarav", "Meera", "Kunal"];
let winnerIndex = Math.floor(Math.random() * contestParticipants.length);
console.log("Grand Prize Winner:", contestParticipants[winnerIndex]);`,
    output: `Grand Prize Winner: ` + ["Rohan", "Pooja", "Aarav", "Meera", "Kunal"][0],
    note: "Multiplying by array length generates valid index positions."
  },
  commonMistakes: [
    {
      mistake: "Using Math.round() for random integer generation causing uneven distribution",
      wrongCode: `// Math.round creates half-probability at the boundaries (0 and 6)!
let badRoll = Math.round(Math.random() * 6);`,
      correctCode: `// Always use Math.floor with (max - min + 1) for uniform probability
let goodRoll = Math.floor(Math.random() * 6) + 1;`,
      explanation: "`Math.round()` gives the end numbers half the probability of middle numbers. Always use `Math.floor()` for fair, uniform distribution."
    }
  ],
  importantPoints: [
    "`Math.random()` is NOT cryptographically secure.",
    "For cryptography or high-stakes security, use `crypto.getRandomValues()`.",
    "The range $[0, 1)$ includes 0, but never 1."
  ],
  interviewQuestions: [
    {
      question: "Why should `Math.random()` NOT be used for cryptographic security or passwords?",
      answer: "`Math.random()` uses pseudo-random number generator algorithms (like xorshift128+) that are deterministic and predictable once internal state is observed. Cryptographic keys and passwords must use `crypto.getRandomValues()` which sources true OS entropy."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a function `randomColor()` that returns a random hex color code (e.g. '#3f82a1').",
      hint: "Use Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').",
      solution: `function randomColor() {
  let hex = Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0");
  return "#" + hex;
}
console.log("Generated Color:", randomColor());`
    }
  ]
};

window.TOPIC_DATA_STORE["math-reference"] = {
  id: "math-reference",
  title: "Math Reference",
  lead: "Comprehensive quick-reference table of all Math constants, logarithmic, trigonometric, and hyperbolic methods.",
  intro: "This reference outlines the complete API of the Math object, including trigonometric, exponential, and rounding functions.",
  definition: "Standardized specification reference for all constants and static methods on the JavaScript `Math` namespace.",
  whyUse: "Fast lookup during algorithm implementation and 3D Canvas / WebGL game mathematics.",
  syntax: `Math.sin(rad);
Math.cos(rad);
Math.tan(rad);
Math.log(x);
Math.log10(x);
Math.hypot(a, b);`,
  syntaxExplanation: "Trigonometric functions accept angles in **radians**, not degrees ($1 \\text{ rad} = \\text{deg} \\times \\pi / 180$).",
  simpleExample: `console.log("Hypotenuse (3, 4):", Math.hypot(3, 4));
console.log("Log10 of 1000    :", Math.log10(1000));`,
  expectedOutput: `Hypotenuse (3, 4): 5\nLog10 of 1000    : 3`,
  realLifeExample: {
    domain: "Business Applications",
    title: "Geographical Distance Calculation with Math.hypot",
    scenario: "Computing direct Euclidean distance between warehouse and delivery destination coordinates.",
    code: `let warehouseX = 12, warehouseY = 5;
let deliveryX = 20, deliveryY = 20;

let deltaX = deliveryX - warehouseX;
let deltaY = deliveryY - warehouseY;

// Direct Euclidean distance: sqrt(dx^2 + dy^2)
let directDistanceKm = Math.hypot(deltaX, deltaY);
console.log("Direct Line Distance: " + directDistanceKm.toFixed(2) + " km");`,
    output: `Direct Line Distance: 17.00 km`
  },
  practicalExample: {
    title: "Converting Degrees to Radians for Trigonometry",
    code: `function degToRad(deg) { return (deg * Math.PI) / 180; }
console.log("sin(30 degrees):", Math.sin(degToRad(30)).toFixed(1)); // 0.5
console.log("cos(60 degrees):", Math.cos(degToRad(60)).toFixed(1)); // 0.5`,
    output: `sin(30 degrees): 0.5\ncos(60 degrees): 0.5`,
    note: "Convert degrees to radians before invoking `Math.sin()` or `Math.cos()`."
  },
  commonMistakes: [
    {
      mistake: "Passing degree angles directly into Math.sin() or Math.cos()",
      wrongCode: `console.log(Math.sin(90)); // Expected 1, but outputs 0.89399 because 90 was parsed as radians!`,
      correctCode: `console.log(Math.sin(90 * Math.PI / 180)); // Outputs 1!`,
      explanation: "Trigonometric methods require radian inputs."
    }
  ],
  importantPoints: [
    "`Math.hypot(...values)` computes square root of the sum of squares without intermediate overflow.",
    "`Math.sign(x)` returns `-1`, `0`, or `1` indicating sign.",
    "`Math.cbrt(x)` computes cube root."
  ],
  interviewQuestions: [
    {
      question: "What is `Math.hypot()` and why is it preferred over `Math.sqrt(a*a + b*b)`?",
      answer: "`Math.hypot()` calculates $\\sqrt{a^2 + b^2 + \\dots}$ using an algorithm that avoids intermediate numeric overflow or underflow when squaring extremely large or tiny floating-point numbers."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a function that calculates the hypotenuse of a right-angled triangle with sides 6 and 8 using `Math.hypot`.",
      hint: "Math.hypot(6, 8)",
      solution: `console.log("Hypotenuse of 6 and 8:", Math.hypot(6, 8)); // 10`
    }
  ]
};

// PART 16: REGULAR EXPRESSIONS
window.TOPIC_DATA_STORE["regex-intro"] = {
  id: "regex-intro",
  title: "RegExp Introduction",
  lead: "Master Regular Expressions, pattern matching, literal vs constructor syntax, and pattern validation.",
  intro: "A regular expression is a sequence of characters that forms a search pattern. When you search for data in a text, you can use this search pattern to describe what you are searching for.",
  definition: "An object representing a formalized pattern used to match, search, and replace character combinations in strings.",
  whyUse: "Validating email addresses, phone numbers, postal codes, sanitizing user inputs, and parsing text files.",
  syntax: `/pattern/modifiers;          // Regex literal (compiled at load)
new RegExp("pattern", "flags"); // Constructor (compiled at runtime)`,
  syntaxExplanation: "Regex literals are bounded by slashes `/.../`. Modifiers/flags (`g`, `i`, `m`) alter search behavior.",
  simpleExample: `let pattern = /javascript/i; // Case-insensitive
let text = "I love JavaScript!";
console.log("Pattern matches?", pattern.test(text));`,
  expectedOutput: `Pattern matches? true`,
  realLifeExample: {
    domain: "Attendance Management",
    title: "Employee ID Format Validation",
    scenario: "Validating whether a scanned employee badge code conforms strictly to `EMP-` followed by 4 digits.",
    code: `let empIdRegex = /^EMP-\\d{4}$/;

let id1 = "EMP-1042";
let id2 = "EMPLOYEE-12";
let id3 = "EMP-99999";

console.log(id1 + " Valid? " + empIdRegex.test(id1));
console.log(id2 + " Valid? " + empIdRegex.test(id2));
console.log(id3 + " Valid? " + empIdRegex.test(id3));`,
    output: `EMP-1042 Valid? true\nEMPLOYEE-12 Valid? false\nEMP-99999 Valid? false`
  },
  practicalExample: {
    title: "Regex Literal vs Dynamic RegExp Constructor",
    code: `let searchTerm = "apple";
// Dynamic regex from variable
let dynamicRegex = new RegExp(searchTerm, "i");
console.log(dynamicRegex.test("Green Apple"));`,
    output: `true`,
    note: "Use `new RegExp()` when the search pattern is derived dynamically from user input."
  },
  commonMistakes: [
    {
      mistake: "Forgetting to escape backslashes when using the RegExp string constructor",
      wrongCode: `let r = new RegExp("\d+"); // In string literal, \d becomes d! Pattern is /d+/!`,
      correctCode: `let r = new RegExp("\\\\d+"); // Double backslash escapes the string!`,
      explanation: "In string literals, backslash is an escape character. You must write `\\\\` to pass a literal backslash into `new RegExp()`."
    }
  ],
  importantPoints: [
    "`pattern.test(str)` returns a boolean.",
    "`pattern.exec(str)` returns match details or `null`.",
    "String methods like `match()`, `replace()`, and `search()` take RegExp objects."
  ],
  interviewQuestions: [
    {
      question: "When should you use the RegExp constructor over regex literal syntax?",
      answer: "Use RegExp literal `/pattern/` when the pattern is known at author time (compiled once at script parse time). Use `new RegExp(pattern, flags)` when the pattern is dynamic, variable-dependent, or constructed from user input at runtime."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a regex that tests if a string contains the word 'pass' (case-insensitive).",
      hint: "/pass/i.test(str)",
      solution: `let reg = /pass/i;
console.log("Exam Passed:", reg.test("Congratulations! You Passed!")); // true
console.log("Failed:", reg.test("Incomplete test")); // false`
    }
  ]
};

window.TOPIC_DATA_STORE["regex-flags"] = {
  id: "regex-flags",
  title: "RegExp Flags",
  lead: "Master regex modifiers: g (global), i (ignore case), m (multiline), s (dotAll), u (unicode), and y (sticky).",
  intro: "Regular expression flags (modifiers) can be used to alter the matching behavior of a pattern.",
  definition: "Single-character tokens appended to a regular expression altering match scope, casing, and line parsing rules.",
  whyUse: "Matching all occurrences across a document rather than stopping at the first match, handling multiline text, and case-insensitivity.",
  syntax: `/pattern/gimsuy;`,
  syntaxExplanation: "`g` = global (find all matches); `i` = case-insensitive; `m` = multiline (^ and $ match line starts/ends); `s` = dotAll (`.` matches newlines); `u` = unicode; `y` = sticky.",
  simpleExample: `let str = "JS is cool. I like js and JS!";
console.log("Global match:", str.match(/js/gi));`,
  expectedOutput: `Global match: [ 'JS', 'js', 'JS' ]`,
  realLifeExample: {
    domain: "E-commerce",
    title: "Global Currency Symbol Replacer with Flags",
    scenario: "Replacing all dollar occurrences with localized Rupee strings across itemized invoice text.",
    code: `let orderText = "Subtotal: $100, Tax: $18, Total: $118";
// 'g' replaces all matches, not just the first!
let localized = orderText.replace(/\\$/g, "Rs. ");
console.log(localized);`,
    output: `Subtotal: Rs. 100, Tax: Rs. 18, Total: Rs. 118`
  },
  practicalExample: {
    title: "Multiline Flag 'm' with Anchors",
    code: `let multilineText = "Chapter 1: Intro\\nChapter 2: Variables\\nChapter 3: Functions";
// 'm' allows ^ to match the start of EVERY line
let chapters = multilineText.match(/^Chapter \\d+/gm);
console.log("Found chapters:", chapters);`,
    output: `Found chapters: [ 'Chapter 1', 'Chapter 2', 'Chapter 3' ]`,
    note: "The `m` flag makes `^` and `$` match per line rather than only the entire string start/end."
  },
  commonMistakes: [
    {
      mistake: "Reusing global regex with test() in loops due to stateful lastIndex",
      wrongCode: `let r = /cat/g;
console.log(r.test("cat")); // true (lastIndex moves to 3!)
console.log(r.test("cat")); // FALSE! Starts search at index 3!`,
      correctCode: `let r = /cat/; // Don't use 'g' if you just need boolean testing!
console.log(r.test("cat")); // true
console.log(r.test("cat")); // true`,
      explanation: "When the `g` flag is set, `regex.lastIndex` advances on each call, causing subsequent `.test()` calls to fail unless reset."
    }
  ],
  importantPoints: [
    "`g` finds all matches; without it, methods stop after the first match.",
    "`i` enables case-insensitive matching.",
    "`s` flag allows the `.` wildcard to match newline `\\n` characters."
  ],
  interviewQuestions: [
    {
      question: "Why does `regex.test()` sometimes alternate between returning true and false when using the 'g' flag?",
      answer: "When a RegExp has the global `g` flag, it is stateful. It tracks the `lastIndex` position of the previous match. Calling `.test()` advances `lastIndex`. When it reaches the end, it returns `false` and resets `lastIndex = 0`, alternating results."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a regex with flags that replaces all occurrences of 'error' (case-insensitive) with '[FIXED]'.",
      hint: "str.replace(/error/gi, '[FIXED]')",
      solution: `let log = "Error 404: Page not found. System ERROR logged.";
console.log(log.replace(/error/gi, "[FIXED]"));`
    }
  ]
};

window.TOPIC_DATA_STORE["regex-classes"] = {
  id: "regex-classes",
  title: "Character Classes",
  lead: "Master bracket character sets [abc], negated sets [^abc], ranges [a-z], [0-9], and alphanumeric sets.",
  intro: "Character classes distinguish kinds of characters such as, for instance, distinguishing between letters and digits.",
  definition: "Bracket expressions matching any one character from a designated set or range of characters.",
  whyUse: "Validating alphanumeric usernames, checking vowel distributions, and sanitizing input characters.",
  syntax: `[abc]     // Matches 'a', 'b', or 'c'
[^abc]    // Matches any character EXCEPT 'a', 'b', or 'c'
[a-z]     // Matches any lowercase letter
[A-Z]     // Matches any uppercase letter
[0-9]     // Matches any digit
[a-zA-Z0-9] // Alphanumeric`,
  syntaxExplanation: "Square brackets match exactly one character from the enclosed options. `^` as the first character inside brackets negates the set.",
  simpleExample: `let pattern = /[aeiou]/gi; // Match any vowel
let matches = "JavaScript".match(pattern);
console.log("Vowels found:", matches);`,
  expectedOutput: `Vowels found: [ 'a', 'a', 'i' ]`,
  realLifeExample: {
    domain: "Banking",
    title: "Indian Permanent Account Number (PAN) Card Validator",
    scenario: "Verifying standard 10-character alphanumeric PAN format: 5 uppercase letters, 4 digits, 1 uppercase letter.",
    code: `// Pattern: [A-Z]{5}[0-9]{4}[A-Z]{1}
let panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;

let validPan = "ABCDE1234F";
let invalidPan = "12345ABCDE";

console.log(validPan + " Valid PAN? " + panRegex.test(validPan));
console.log(invalidPan + " Valid PAN? " + panRegex.test(invalidPan));`,
    output: `ABCDE1234F Valid PAN? true\n12345ABCDE Valid PAN? false`
  },
  practicalExample: {
    title: "Negated Character Class for Sanitization",
    code: `let dirtyInput = "User #1042! Disallow special @chars$";
// Keep only alphanumeric characters and spaces
let cleanInput = dirtyInput.replace(/[^a-zA-Z0-9 ]/g, "");
console.log("Cleaned:", cleanInput);`,
    output: `Cleaned: User 1042 Disallow special chars`,
    note: "`[^...]` strips out every character not listed in the set."
  },
  commonMistakes: [
    {
      mistake: "Placing a hyphen in the middle of character classes by mistake",
      wrongCode: `let reg = /[a-z-0-9]/; // Matches a to z, and '-' to '0' range!`,
      correctCode: `let reg = /[a-z0-9-]/; // Hyphen placed at the very end or escaped \\-`,
      explanation: "A hyphen inside brackets indicates a range unless placed at the start, end, or escaped with `\\-`."
    }
  ],
  importantPoints: [
    "Most special characters (like `.`, `*`, `+`) lose their special meaning inside brackets `[...]`.",
    "`^` negates only when placed immediately after the opening `[`.",
    "Ranges follow Unicode order (e.g., `[A-Z]` is 65 to 90)."
  ],
  interviewQuestions: [
    {
      question: "What does the dot `.` mean inside character brackets `[.]` versus outside `.`?",
      answer: "Outside brackets, `.` is a wildcard matching any character except newlines. Inside brackets `[.]`, it loses its wildcard power and matches a literal period character."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a regex that tests if a string contains ONLY hexadecimal characters (0-9, a-f, A-F).",
      hint: "/^[0-9a-fA-F]+$/",
      solution: `let hexRegex = /^[0-9a-fA-F]+$/;
console.log("1A3F:", hexRegex.test("1A3F")); // true
console.log("1G3Z:", hexRegex.test("1G3Z")); // false`
    }
  ]
};

window.TOPIC_DATA_STORE["regex-meta"] = {
  id: "regex-meta",
  title: "Metacharacters",
  lead: "Master shorthand metacharacters: \\d (digit), \\s (whitespace), \\w (word), and their negations \\D, \\S, \\W.",
  intro: "Metacharacters are characters with special meaning that provide shorthand representations for common character classes.",
  definition: "Predefined escape sequences representing character categories such as digits, word characters, and whitespaces.",
  whyUse: "Compact, readable pattern authoring for form validation, tokenization, and text formatting.",
  syntax: `\\d  // Digit [0-9]
\\D  // Non-digit [^0-9]
\\w  // Word character [a-zA-Z0-9_]
\\W  // Non-word character
\\s  // Whitespace (spaces, tabs, newlines)
\\S  // Non-whitespace
.   // Any character except newline`,
  syntaxExplanation: "Lowercase letters represent positive sets; uppercase counterparts represent their exact negations.",
  simpleExample: `let str = "Order 42 delivered in 3 days";
console.log("Digits found :", str.match(/\\d+/g));
console.log("Words found  :", str.match(/\\w+/g));`,
  expectedOutput: `Digits found : [ '42', '3' ]\nWords found  : [ 'Order', '42', 'delivered', 'in', '3', 'days' ]`,
  realLifeExample: {
    domain: "Student Management",
    title: "10-Digit Phone Number Formatting with Metacharacters",
    scenario: "Extracting pure digits from formatted telephone numbers `(555) 123-4567`.",
    code: `let rawPhone = "(+91) 98765-43210";
// Strip all non-digit characters (\\D)
let pureDigits = rawPhone.replace(/\\D/g, "");

console.log("Raw Input   : " + rawPhone);
console.log("Pure Digits : " + pureDigits);
console.log("Length Check: " + pureDigits.length + " digits");`,
    output: `Raw Input   : (+91) 98765-43210\nPure Digits : 919876543210\nLength Check: 12 digits`
  },
  practicalExample: {
    title: "Normalizing Multiple Whitespaces with \\s+",
    code: `let messyText = "Welcome    to    JS   Learning     Hub";
let normalized = messyText.replace(/\\s+/g, " ");
console.log("Cleaned:", normalized);`,
    output: `Cleaned: Welcome to JS Learning Hub`,
    note: "`\\s+` matches one or more consecutive spaces, tabs, or newlines."
  },
  commonMistakes: [
    {
      mistake: "Assuming \\w matches accented or non-Latin Unicode characters",
      wrongCode: `let name = "José";
console.log(name.match(/^\\w+$/)); // null! 'é' is not in [a-zA-Z0-9_]!`,
      correctCode: `// Use Unicode property escapes with 'u' flag: \\p{L} for letters
console.log(/^[\\p{L}]+$/u.test(name)); // true!`,
      explanation: "`\\w` strictly matches ASCII `[a-zA-Z0-9_]`. Use Unicode property escapes `\\p{L}` with the `u` flag for international text."
    }
  ],
  importantPoints: [
    "`\\d` = `[0-9]`; `\\D` = `[^0-9]`.",
    "`\\w` includes underscore `_`.",
    "`\\s` matches spaces, `\\t`, `\\n`, `\\r`, and form feeds."
  ],
  interviewQuestions: [
    {
      question: "What characters does `\\w` match in JavaScript?",
      answer: "`\\w` matches alphanumeric characters and the underscore: `[a-zA-Z0-9_]`. It does not match hyphens, spaces, punctuation, or accented Unicode letters."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a regex that removes all non-numeric characters from a price string like 'Rs. 1,499.00'.",
      hint: "replace(/[^0-9.]/g, '')",
      solution: `let str = "Rs. 1,499.00";
let clean = str.replace(/[^0-9.]/g, "");
console.log("Numeric:", clean); // 1499.00`
    }
  ]
};

window.TOPIC_DATA_STORE["regex-assertions"] = {
  id: "regex-assertions",
  title: "Assertions",
  lead: "Master boundary assertions: ^ (start), $ (end), \\b (word boundary), positive/negative lookahead, and lookbehind.",
  intro: "Assertions include boundaries, which indicate the beginnings and endings of lines and words, and other patterns indicating in some ways that a match is possible (including lookahead and lookbehind expressions).",
  definition: "Zero-width pattern anchors and lookaround checks that test conditions without consuming characters from the match.",
  whyUse: "Validating entire strings from start to finish (`^...$`), matching whole words without substring matches, and enforcing password rules.",
  syntax: `^        // Start of string / line
$        // End of string / line
\\b       // Word boundary
(?=exp)  // Positive lookahead
(?!exp)  // Negative lookahead
(?<=exp) // Positive lookbehind
(?<!exp) // Negative lookbehind`,
  syntaxExplanation: "Lookaheads `(?=...)` test if the following characters match without including them in the match result.",
  simpleExample: `let pattern = /\\bcat\\b/i; // Whole word only
console.log("cat in 'cat'     :", pattern.test("cat"));
console.log("cat in 'category':", pattern.test("category"));`,
  expectedOutput: `cat in 'cat'     : true\ncat in 'category': false`,
  realLifeExample: {
    domain: "E-commerce",
    title: "Strong Password Policy Validation with Lookaheads",
    scenario: "Enforcing minimum 8 characters, at least 1 digit, at least 1 uppercase letter, and 1 lowercase letter.",
    code: `// (?=.*[a-z]) has lowercase
// (?=.*[A-Z]) has uppercase
// (?=.*\\d) has digit
// .{8,} minimum 8 length
let strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$/;

let pass1 = "weak";
let pass2 = "Secret123";

console.log(pass1 + " Strong? " + strongPasswordRegex.test(pass1));
console.log(pass2 + " Strong? " + strongPasswordRegex.test(pass2));`,
    output: `weak Strong? false\nSecret123 Strong? true`
  },
  practicalExample: {
    title: "Lookbehind for Currency Extraction",
    code: `let priceTag = "Price is Rs.1450 for standard pack";
// Match digits ONLY if preceded by 'Rs.'
let match = priceTag.match(/(?<=Rs\\.)\\d+/);
console.log("Extracted Price:", match ? match[0] : "None");`,
    output: `Extracted Price: 1450`,
    note: "Lookbehinds `(?<=...)` match content without including the prefix."
  },
  commonMistakes: [
    {
      mistake: "Omitting ^ and $ in input validation regex",
      wrongCode: `let pinRegex = /\\d{6}/; // Missing ^ and $!
console.log(pinRegex.test("ABC 123456 XYZ")); // true! Partial match succeeds!`,
      correctCode: `let pinRegex = /^\\d{6}$/; // Anchored to start and end!
console.log(pinRegex.test("ABC 123456 XYZ")); // false! Full validation`,
      explanation: "Without `^` and `$`, regular expressions perform substring matching instead of validating the whole string."
    }
  ],
  importantPoints: [
    "`^` asserts start of input; `$` asserts end of input.",
    "`\\b` asserts word boundaries (between `\\w` and `\\W`).",
    "Lookarounds are zero-width: they do not consume characters in the final match."
  ],
  interviewQuestions: [
    {
      question: "What is a Lookahead assertion in Regular Expressions?",
      answer: "A lookahead `(?=pattern)` is a zero-width assertion that checks whether the characters immediately following the current position match a pattern, without advancing the match pointer or including those characters in the returned match result."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a regex that matches a 4-digit PIN only if it consists entirely of digits from start to end.",
      hint: "/^\\d{4}$/",
      solution: `let pin = /^\\d{4}$/;
console.log("1234:", pin.test("1234")); // true
console.log("12345:", pin.test("12345")); // false`
    }
  ]
};

window.TOPIC_DATA_STORE["regex-groups"] = {
  id: "regex-groups",
  title: "Groups",
  lead: "Master capturing groups (abc), non-capturing groups (?:abc), named capturing groups (?<name>), and backreferences.",
  intro: "Groups group multiple tokens together and remember the matched sub-strings for extraction or backreferencing.",
  definition: "Parenthesized regular expression sub-patterns that bundle tokens and capture matched substrings into result arrays.",
  whyUse: "Extracting parsed tokens (domain names, area codes, dates), applying quantifiers to whole phrases, and referencing captured sub-strings.",
  syntax: `(pattern)           // Capturing group
(?:pattern)         // Non-capturing group
(?<name>pattern)    // Named capturing group
\\1                  // Backreference to group 1`,
  syntaxExplanation: "Capturing groups are indexed `1, 2, ...`. Named groups store results in the `.groups` object.",
  simpleExample: `let datePattern = /(\\d{4})-(\\d{2})-(\\d{2})/;
let match = "2026-11-04".match(datePattern);
console.log("Full Match:", match[0]);
console.log("Year      :", match[1]);
console.log("Month     :", match[2]);
console.log("Day       :", match[3]);`,
  expectedOutput: `Full Match: 2026-11-04\nYear      : 2026\nMonth     : 11\nDay       : 04`,
  realLifeExample: {
    domain: "Banking",
    title: "Parsing Bank IFSC Code with Named Groups",
    scenario: "Extracting bank branch identification and alphanumeric branch codes into structured object properties.",
    code: `let ifscRegex = /^(?<bank>[A-Z]{4})0(?<branch>[A-Z0-9]{6})$/;
let sampleIfsc = "HDFC0001234";

let match = sampleIfsc.match(ifscRegex);
if (match) {
  console.log("Bank Code   : " + match.groups.bank);
  console.log("Branch Code : " + match.groups.branch);
}`,
    output: `Bank Code   : HDFC\nBranch Code : 001234`
  },
  practicalExample: {
    title: "Backreferences for Matching HTML Tags",
    code: `let htmlSnippet = "<b>Bold Text</b> <i>Italic</i>";
// \\1 matches the exact tag captured in group 1
let tagRegex = /<([a-z]+)>.*?<\\/\\1>/g;
console.log("Matched tags:", htmlSnippet.match(tagRegex));`,
    output: `Matched tags: [ '<b>Bold Text</b>', '<i>Italic</i>' ]`,
    note: "`\\1` guarantees the closing tag matches the opening tag."
  },
  commonMistakes: [
    {
      mistake: "Creating unnecessary capturing groups hurting performance",
      wrongCode: `let reg = /(https|http):\\/\\//; // Captures protocol when you just wanted grouping`,
      correctCode: `let reg = /(?:https|http):\\/\\//; // Use (?:...) for non-capturing group`,
      explanation: "Use non-capturing groups `(?:...)` when grouping without needing to extract or store the match."
    }
  ],
  importantPoints: [
    "Match index `0` is the full match; indices `1, 2, ...` correspond to capturing groups.",
    "Named capturing groups `(?<name>...)` are available via `match.groups.name`.",
    "`(?:...)` groups tokens without capturing memory overhead."
  ],
  interviewQuestions: [
    {
      question: "What is the difference between capturing `(...)` and non-capturing `(?:...)` groups?",
      answer: "Capturing groups `(...)` save the matched substring into the match results array and enable backreferences (`\\1`, `$1`). Non-capturing groups `(?:...)` apply operators or quantifiers to sub-expressions without saving memory overhead in the results array."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a regex with named groups `(?<user>)` and `(?<domain>)` to extract parts of an email like 'admin@hub.com'.",
      hint: "/^(?<user>[^@]+)@(?<domain>.+)$/",
      solution: `let emailRegex = /^(?<user>[^@]+)@(?<domain>.+)$/;
let match = "admin@hub.com".match(emailRegex);
console.log("User:", match.groups.user, "| Domain:", match.groups.domain);`
    }
  ]
};

window.TOPIC_DATA_STORE["regex-quantifiers"] = {
  id: "regex-quantifiers",
  title: "Quantifiers",
  lead: "Master greedy vs lazy repetition: * (0+), + (1+), ? (0 or 1), {n}, {n,}, and {n,m}.",
  intro: "Quantifiers indicate numbers of characters or expressions to match. By default, quantifiers in JavaScript are 'greedy' (they match as much text as possible).",
  definition: "Tokens specifying how many consecutive instances of a character, group, or class must be present.",
  whyUse: "Validating exact lengths (e.g. 6-digit PIN), variable length names, optional prefixes (https?), and limiting match scope.",
  syntax: `n*     // 0 or more (greedy)
n+     // 1 or more (greedy)
n?     // 0 or 1 (optional)
n{4}   // Exactly 4
n{2,5} // Between 2 and 5
n*?    // Lazy 0 or more (shortest match)`,
  syntaxExplanation: "Adding `?` after any quantifier turns it from **greedy** (longest match) to **lazy** (shortest match).",
  simpleExample: `let text = "100 1000 10";
console.log("Exact 3 digits:", text.match(/\\b\\d{3}\\b/g));
console.log("Optional 's'  :", "http".match(/https?/));`,
  expectedOutput: `Exact 3 digits: [ '100' ]\nOptional 's'  : [ 'http', index: 0, input: 'http', groups: undefined ]`,
  realLifeExample: {
    domain: "Attendance Management",
    title: "Employee Shift Code Validation with Fixed Lengths",
    scenario: "Verifying that employee shift authorization codes contain exactly 3 uppercase letters followed by 3 digits.",
    code: `let shiftCodePattern = /^[A-Z]{3}-\\d{3}$/;

console.log("SHF-101 Valid? " + shiftCodePattern.test("SHF-101"));
console.log("SHF-12  Valid? " + shiftCodePattern.test("SHF-12"));
console.log("S-101   Valid? " + shiftCodePattern.test("S-101"));`,
    output: `SHF-101 Valid? true\nSHF-12  Valid? false\nS-101   Valid? false`
  },
  practicalExample: {
    title: "Greedy vs Lazy Matching",
    code: `let html = "<div>First</div><div>Second</div>";

// Greedy matching (.*) consumes everything to the last </div>!
let greedyMatch = html.match(/<div>.*<\\/div>/);
console.log("Greedy match:", greedyMatch[0]);

// Lazy matching (.*?) stops at the FIRST </div>!
let lazyMatch = html.match(/<div>.*?<\\/div>/);
console.log("Lazy match  :", lazyMatch[0]);`,
    output: `Greedy match: <div>First</div><div>Second</div>\nLazy match  : <div>First</div>`,
    note: "Lazy quantifiers (`*?`, `+?`) prevent overshooting target boundaries."
  },
  commonMistakes: [
    {
      mistake: "Using greedy wildcard .* for HTML/XML parsing resulting in catastrophic over-matching",
      wrongCode: `let tag = "<p>A</p><p>B</p>".match(/<p>.*<\\/p>/); // Matches whole string!`,
      correctCode: `let tag = "<p>A</p><p>B</p>".match(/<p>.*?<\\/p>/g); // Matches individual tags`,
      explanation: "Greedy `.*` consumes all characters to the last occurrence. Use lazy `.*?` to match minimal spans."
    }
  ],
  importantPoints: [
    "`+` matches 1 or more; `*` matches 0 or more.",
    "`?` makes a preceding token optional (0 or 1).",
    "`?` after another quantifier converts it to lazy (non-greedy)."
  ],
  interviewQuestions: [
    {
      question: "What is the difference between greedy and lazy quantifiers?",
      answer: "A **greedy quantifier** (`*`, `+`, `{n,m}`) expands match length to consume the longest possible string that satisfies the pattern. A **lazy quantifier** (`*?`, `+?`, `{n,m}?`) consumes only the minimal number of characters necessary to satisfy the match."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a regex that matches a string between double quotes lazily: `\"hello\" and \"world\"`.",
      hint: "/\".*?\"/g",
      solution: `let str = 'He said "Hello" and then "Goodbye".';
console.log("Quotes:", str.match(/".*?"/g)); // ['"Hello"', '"Goodbye"']`
    }
  ]
};

window.TOPIC_DATA_STORE["regex-patterns"] = {
  id: "regex-patterns",
  title: "Patterns",
  lead: "Master production patterns: emails, URLs, IP addresses, dates, phone numbers, and slug validation.",
  intro: "Writing robust regular expression patterns is a critical skill for real-world form validation, data hygiene, and security verification.",
  definition: "Engineered combinations of classes, quantifiers, anchors, and assertions designed for production validation.",
  whyUse: "Eliminates bad user data before database insertion, sanitizes URLs, and verifies compliance standards.",
  syntax: `// Standard Email Pattern
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;

// URL Pattern
const URL_REGEX = /^https?:\\/\\/[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!$&'()*+,;=.]+$/;`,
  syntaxExplanation: "Production patterns balance security, edge-case coverage, and prevention of ReDoS (Regular Expression Denial of Service).",
  simpleExample: `let emailPattern = /^[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,}$/;
console.log("Email test:", emailPattern.test("student@hub.edu"));`,
  expectedOutput: `Email test: true`,
  realLifeExample: {
    domain: "Banking",
    title: "16-Digit Credit Card & CVV Validation Patterns",
    scenario: "Validating credit card numbers (4 blocks of 4 digits) and 3-digit CVV security codes.",
    code: `const CARD_REGEX = /^\\d{4}[ -]?\\d{4}[ -]?\\d{4}[ -]?\\d{4}$/;
const CVV_REGEX = /^\\d{3}$/;

let sampleCard = "4532-8901-2345-6789";
let sampleCvv = "891";

console.log("Card Valid? " + CARD_REGEX.test(sampleCard));
console.log("CVV Valid?  " + CVV_REGEX.test(sampleCvv));`,
    output: `Card Valid? true\nCVV Valid?  true`
  },
  practicalExample: {
    title: "IPv4 Address Validator Pattern",
    code: `let ipv4Regex = /^(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)$/;
console.log("192.168.1.1 Valid?", ipv4Regex.test("192.168.1.1"));
console.log("999.168.1.1 Valid?", ipv4Regex.test("999.168.1.1"));`,
    output: `192.168.1.1 Valid? true\n999.168.1.1 Valid? false`,
    note: "Validates numerical segments strictly between 0 and 255."
  },
  commonMistakes: [
    {
      mistake: "Creating ReDoS (Catastrophic Backtracking) vulnerable patterns",
      wrongCode: `let badRegex = /^(a+)+$/; // Highly vulnerable to exponential backtracking!`,
      correctCode: `let safeRegex = /^a+$/; // Linear execution`,
      explanation: "Nested quantifiers `(a+)+` cause exponential execution steps on non-matching strings, freezing servers or browser tabs."
    }
  ],
  importantPoints: [
    "Always test edge cases (empty strings, leading/trailing spaces).",
    "Avoid nested quantifiers to eliminate ReDoS vulnerabilities.",
    "Combine client-side regex with backend validation for security."
  ],
  interviewQuestions: [
    {
      question: "What is Regular Expression Denial of Service (ReDoS)?",
      answer: "ReDoS occurs when a regular expression with overlapping nested quantifiers (like `(a+)+$`) processes an input that almost matches. The regex engine experiences exponential catastrophic backtracking, consuming 100% CPU and hanging the application."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a regex pattern for a 6-digit Indian PIN code where the first digit cannot be 0.",
      hint: "/^[1-9]\\d{5}$/",
      solution: `let pinPattern = /^[1-9]\\d{5}$/;
console.log("110001:", pinPattern.test("110001")); // true
console.log("010001:", pinPattern.test("010001")); // false`
    }
  ]
};

window.TOPIC_DATA_STORE["regex-methods"] = {
  id: "regex-methods",
  title: "RegExp Methods",
  lead: "Master test(), exec(), and String integration methods match(), matchAll(), search(), replace(), and split().",
  intro: "In JavaScript, Regular Expressions are used with RegExp methods (`test`, `exec`) as well as String methods (`match`, `matchAll`, `replace`, `replaceAll`, `search`, `split`).",
  definition: "API methods on `RegExp.prototype` and `String.prototype` providing pattern execution and transformation services.",
  whyUse: "Validating strings, extracting match groups, replacing text dynamically, and splitting delimited strings.",
  syntax: `regex.test(str);       // Returns boolean
regex.exec(str);       // Returns match array or null
str.match(regex);      // Matches array
str.matchAll(regex);   // Iterator of all matches with groups
str.search(regex);     // Returns index or -1
str.replace(regex, fn);// Replacer with callback
str.split(regex);      // Splits into array`,
  syntaxExplanation: "`test()` is fastest for boolean validation. `exec()` and `matchAll()` provide capture groups and indices.",
  simpleExample: `let text = "JavaScript 2026, CSS 2025";
let re = /\\d{4}/g;
console.log("test :", re.test(text));
console.log("match:", text.match(/\\d{4}/g));`,
  expectedOutput: `test : true\nmatch: [ '2026', '2025' ]`,
  realLifeExample: {
    domain: "Restaurant Billing",
    title: "Dynamic Receipt Parsing with matchAll()",
    scenario: "Extracting food items, quantities, and prices from an unstructured text order receipt.",
    code: `let receiptText = "Ordered 2 Burgers for Rs.300 and 1 Fries for Rs.90";
// Pattern captures: quantity, item, price
let itemRegex = /(\\d+)\\s([A-Za-z]+)\\sfor\\sRs\\.(\\d+)/g;

let matches = receiptText.matchAll(itemRegex);
console.log("=== ITEMIZED RECEIPT EXTRACTION ===");
for (let match of matches) {
  console.log("Qty: " + match[1] + " | Item: " + match[2] + " | Subtotal: Rs." + match[3]);
}`,
    output: `=== ITEMIZED RECEIPT EXTRACTION ===\nQty: 2 | Item: Burgers | Subtotal: Rs.300\nQty: 1 | Item: Fries | Subtotal: Rs.90`
  },
  practicalExample: {
    title: "Dynamic Replacer Function with str.replace()",
    code: `let prices = "Apple: $10, Banana: $5";
// Multiply all dollar prices by 80 to convert USD to INR
let inrPrices = prices.replace(/\\$(\\d+)/g, (match, p1) => {
  return "Rs." + (Number(p1) * 80);
});
console.log(inrPrices);`,
    output: `Apple: Rs.800, Banana: Rs.400`,
    note: "Replacer functions dynamically compute replacement strings using captured groups."
  },
  commonMistakes: [
    {
      mistake: "Calling match() with global flag expecting capture group indices",
      wrongCode: `let m = "2026-11".match(/(\\d{4})-(\\d{2})/g);
console.log(m[1]); // undefined! Global match() returns only full match strings!`,
      correctCode: `let m = [..."2026-11".matchAll(/(\\d{4})-(\\d{2})/g)];
console.log(m[0][1]); // "2026"! matchAll preserves capturing groups!`,
      explanation: "When given `/g`, `str.match()` discards capturing groups. Use `str.matchAll()` to preserve capture groups across all occurrences."
    }
  ],
  importantPoints: [
    "`test()` returns a boolean; `exec()` returns match data.",
    "`str.search()` returns the first match index (like `indexOf`).",
    "`str.split(/[,;\\s]+/g)` splits on flexible multi-character delimiters."
  ],
  interviewQuestions: [
    {
      question: "What is the advantage of `String.prototype.matchAll()` over `String.prototype.match()`?",
      answer: "When using the global `/g` flag, `str.match()` strips away all capturing groups and index positions, returning only full match strings. `str.matchAll()` returns an iterator yielding full match objects with capture groups and indices for every occurrence."
    }
  ],
  practiceExercises: [
    {
      problem: "Use `str.split()` with a regular expression to split a comma, semicolon, or space-separated list of tags into a clean array.",
      hint: "str.split(/[,;\\s]+/)",
      solution: `let rawTags = "javascript, html; css   nodejs";
let tags = rawTags.split(/[,;\\s]+/);
console.log("Tags:", tags); // ['javascript', 'html', 'css', 'nodejs']`
    }
  ]
};
