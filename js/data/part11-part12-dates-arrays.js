/* ==========================================================================
   PART 11 & 12: Dates & Arrays - Comprehensive Topics Data
   ========================================================================== */

window.TOPIC_DATA_STORE = window.TOPIC_DATA_STORE || {};

// PART 11: DATES
window.TOPIC_DATA_STORE["date-intro"] = {
  id: "date-intro",
  title: "Date Introduction",
  lead: "Master JavaScript Date objects, Unix timestamps, milliseconds since epoch, and date creation constructors.",
  intro: "JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects contain a Number that represents milliseconds since 1 January 1970 UTC (the Unix Epoch).",
  definition: "A built-in object representing calendar dates and times based on milliseconds elapsed since January 1, 1970, 00:00:00 UTC.",
  whyUse: "Logging timestamps, scheduling deadlines, calculating age or elapsed duration, and formatting user-facing dates.",
  syntax: `new Date();                      // Current date & time
new Date(milliseconds);          // Epoch offset
new Date("2026-11-04T12:00:00"); // Date string
new Date(year, monthIndex, day, hours, minutes, seconds, ms); // Components`,
  syntaxExplanation: "Months are zero-indexed (`0` = January, `11` = December). Omitted time components default to zero.",
  simpleExample: `let now = new Date();
console.log("Current ISO:", now.toISOString().split("T")[0]);
console.log("Epoch Timestamp (ms):", Date.now());`,
  expectedOutput: `Current ISO: ` + new Date().toISOString().split("T")[0] + `\nEpoch Timestamp (ms): ` + Date.now(),
  realLifeExample: {
    domain: "Attendance Management",
    title: "Employee Shift Clock-In Timestamp Generator",
    scenario: "Capturing exact punch timestamps and computing elapsed working duration.",
    code: `let punchIn = new Date("2026-11-04T09:00:00");
let punchOut = new Date("2026-11-04T17:30:00");

// Difference in milliseconds
let elapsedMs = punchOut - punchIn;
let elapsedHours = elapsedMs / (1000 * 60 * 60);

console.log("Shift Start : " + punchIn.toLocaleTimeString());
console.log("Shift End   : " + punchOut.toLocaleTimeString());
console.log("Hours Worked: " + elapsedHours + " Hours");`,
    output: `Shift Start : 9:00:00 AM\nShift End   : 5:30:00 PM\nHours Worked: 8.5 Hours`
  },
  practicalExample: {
    title: "Fast Current Timestamp with Date.now()",
    code: `let start = Date.now();
// Simulated micro-task
let sum = 0;
for (let i = 0; i < 100000; i++) sum += i;
let duration = Date.now() - start;
console.log("Operation took: " + duration + " ms");`,
    output: `Operation took: 1 ms`,
    note: "`Date.now()` returns milliseconds without creating a new Date instance, maximizing speed."
  },
  commonMistakes: [
    {
      mistake: "Forgetting that months in JavaScript are zero-indexed (0 to 11)",
      wrongCode: `let novDate = new Date(2026, 11, 4); // 11 is DECEMBER, not November!`,
      correctCode: `let novDate = new Date(2026, 10, 4); // 10 is NOVEMBER (0-indexed)!
console.log(novDate.toDateString());`,
      explanation: "January is `0`, November is `10`, and December is `11` in component constructor parameters."
    }
  ],
  importantPoints: [
    "Date objects store milliseconds as 64-bit integer numbers.",
    "The zero-epoch baseline is January 1, 1970, 00:00:00 UTC.",
    "Dates can be subtracted directly: `date2 - date1` yields milliseconds difference."
  ],
  interviewQuestions: [
    {
      question: "Why does `new Date(2026, 10, 4)` represent November instead of October?",
      answer: "In JavaScript's Date API, the month argument is zero-indexed ($0 = \\text{January}, 1 = \\text{February}, \\dots, 10 = \\text{November}, 11 = \\text{December}$). Day of the month is 1-indexed (1 to 31)."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a function `daysUntil(targetDate)` that calculates how many full days remain between today and a future target date.",
      hint: "Subtract current date from target and divide by 1000 * 60 * 60 * 24.",
      solution: `function daysUntil(futureDateStr) {
  let today = new Date();
  let target = new Date(futureDateStr);
  let diffMs = target - today;
  return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
}
console.log("Days until New Year 2027:", daysUntil("2027-01-01"));`
    }
  ]
};

window.TOPIC_DATA_STORE["date-formats"] = {
  id: "date-formats",
  title: "Date Formats",
  lead: "Master ISO 8601 strings, short dates, long dates, UTC, and Intl.DateTimeFormat localization.",
  intro: "JavaScript Date inputs and outputs can be formatted in multiple standard formats, primarily the ISO 8601 standard (`YYYY-MM-DDTHH:mm:ss.sssZ`).",
  definition: "Standardized text representations used to serialize, parse, and display Date information across applications.",
  whyUse: "Ensuring cross-browser date parsing reliability and displaying localized dates tailored to a user's language and country.",
  syntax: `date.toISOString();        // "2026-11-04T07:30:00.000Z"
date.toDateString();       // "Wed Nov 04 2026"
date.toLocaleDateString(); // "11/4/2026" (based on locale)
date.toUTCString();        // "Wed, 04 Nov 2026 07:30:00 GMT"`,
  syntaxExplanation: "`toISOString()` is the universal standard for database persistence and JSON REST APIs.",
  simpleExample: `let d = new Date("2026-11-04T12:00:00Z");
console.log("ISO String :", d.toISOString());
console.log("Date String:", d.toDateString());`,
  expectedOutput: `ISO String : 2026-11-04T12:00:00.000Z\nDate String: Wed Nov 04 2026`,
  realLifeExample: {
    domain: "Banking",
    title: "Internationalized Transaction Receipt Date Formatter",
    scenario: "Formatting statement dates according to Indian, American, and British banking conventions using `Intl.DateTimeFormat`.",
    code: `let transactionDate = new Date("2026-11-04T15:45:00Z");

let indianFormatter = new Intl.DateTimeFormat("en-IN", {
  dateStyle: "full",
  timeStyle: "short"
});

let usFormatter = new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
  timeStyle: "short"
});

console.log("India Format : " + indianFormatter.format(transactionDate));
console.log("US Format    : " + usFormatter.format(transactionDate));`,
    output: `India Format : Wednesday, 4 November, 2026 at 9:15 pm\nUS Format    : Nov 4, 2026, 9:15 PM`
  },
  practicalExample: {
    title: "Safe Parsing with ISO 8601 vs Short Date Ambiguity",
    code: `// ISO 8601 is universally safe: YYYY-MM-DD
let safeDate = new Date("2026-05-12"); 
console.log("Parsed Month (May = 4):", safeDate.getUTCMonth());`,
    output: `Parsed Month (May = 4): 4`,
    note: "Never use non-standard strings like '05/12/26' because US format (MM/DD) and UK format (DD/MM) clash."
  },
  commonMistakes: [
    {
      mistake: "Parsing non-standard date strings with Date.parse()",
      wrongCode: `let d = new Date("04-11-2026"); // Inconsistent across browsers!`,
      correctCode: `let d = new Date("2026-11-04"); // Always use ISO 8601 (YYYY-MM-DD)`,
      explanation: "Non-standard formats cause cross-browser bugs. Always use ISO 8601 formatted strings."
    }
  ],
  importantPoints: [
    "Always store and transmit dates in UTC / ISO 8601 format (`toISOString()`).",
    "`Intl.DateTimeFormat` provides locale-aware internationalization.",
    "Trailing `Z` indicates UTC (Zero meridian time)."
  ],
  interviewQuestions: [
    {
      question: "Why should you always format dates with ISO 8601 when sending to APIs?",
      answer: "ISO 8601 (`YYYY-MM-DDTHH:mm:ssZ`) is an unambiguous international standard that is parsed identically across all programming languages, database systems, and timezones."
    }
  ],
  practiceExercises: [
    {
      problem: "Format the current date into 'Month Day, Year' (e.g. 'November 4, 2026') using Intl.DateTimeFormat.",
      hint: "Use new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).",
      solution: `let d = new Date("2026-11-04");
let formatter = new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" });
console.log("Formatted:", formatter.format(d));`
    }
  ]
};

window.TOPIC_DATA_STORE["date-get-methods"] = {
  id: "date-get-methods",
  title: "Date Get Methods",
  lead: "Master getFullYear(), getMonth(), getDate(), getDay(), getHours(), getMinutes(), getSeconds(), and getTime().",
  intro: "Date get methods allow extracting specific components (year, month, day, time) from a Date object.",
  definition: "Instance getter methods on `Date.prototype` returning local or UTC calendar components.",
  whyUse: "Building custom clocks, extracting birth years, calculating days of the week, and formatting timestamps.",
  syntax: `d.getFullYear(); // 4-digit year (e.g. 2026)
d.getMonth();    // 0-11 (Month)
d.getDate();     // 1-31 (Day of month)
d.getDay();      // 0-6 (Day of week: 0 = Sunday)
d.getHours();    // 0-23
d.getMinutes();  // 0-59
d.getSeconds();  // 0-59
d.getTime();     // Milliseconds since epoch`,
  syntaxExplanation: "`getDate()` returns day of the month; `getDay()` returns day of the week (0 = Sunday, 6 = Saturday).",
  simpleExample: `let d = new Date("2026-11-04T10:30:45");
console.log("Year :", d.getFullYear());
console.log("Month:", d.getMonth()); // 10 (Nov)
console.log("Date :", d.getDate());  // 4`,
  expectedOutput: `Year : 2026\nMonth: 10\nDate : 4`,
  realLifeExample: {
    domain: "Attendance Management",
    title: "Weekday Attendance Verification",
    scenario: "Determining whether a punch-in timestamp falls on a weekend using `getDay()`.",
    code: `let punchDate = new Date("2026-11-04"); // Wednesday
let dayIndex = punchDate.getDay();
let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let dayName = weekdays[dayIndex];
let isWeekend = (dayIndex === 0 || dayIndex === 6);

console.log("Punch Day : " + dayName);
console.log("Is Weekend: " + isWeekend);
console.log("Log Type  : " + (isWeekend ? "Overtime Holiday Shift" : "Regular Working Day"));`,
    output: `Punch Day : Wednesday\nIs Weekend: false\nLog Type  : Regular Working Day`
  },
  practicalExample: {
    title: "Formatting 12-Hour AM/PM Time Manually",
    code: `let d = new Date("2026-11-04T16:05:00");
let hours = d.getHours();
let minutes = d.getMinutes().toString().padStart(2, "0");
let ampm = hours >= 12 ? "PM" : "AM";
hours = hours % 12 || 12; // 0 becomes 12

console.log(\`Formatted: \${hours}:\${minutes} \${ampm}\`);`,
    output: `Formatted: 4:05 PM`,
    note: "Getters provide raw numbers that can be formatted with padStart."
  },
  commonMistakes: [
    {
      mistake: "Using getYear() instead of getFullYear()",
      wrongCode: `let d = new Date();
console.log(d.getYear()); // Deprecated! Returns 126 instead of 2026 (year - 1900)`,
      correctCode: `let d = new Date();
console.log(d.getFullYear()); // Returns full 4-digit year: 2026`,
      explanation: "`getYear()` is obsolete from legacy JS. Always use `getFullYear()`."
    }
  ],
  importantPoints: [
    "`getDate()` = day of month (1-31); `getDay()` = day of week (0-6).",
    "`getMonth()` is 0-indexed (0 to 11).",
    "Corresponding UTC methods exist: `getUTCFullYear()`, `getUTCMonth()`, etc."
  ],
  interviewQuestions: [
    {
      question: "What is the difference between `getDate()` and `getDay()`?",
      answer: "`getDate()` returns the day of the month (an integer from 1 to 31). `getDay()` returns the day of the week (an integer from 0 to 6, where 0 represents Sunday)."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a function `getDayName(date)` that returns the full English name of the weekday for any given date.",
      hint: "Use an array of weekday strings indexed by date.getDay().",
      solution: `function getDayName(date) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[date.getDay()];
}
console.log("Day of 2026-11-04:", getDayName(new Date("2026-11-04")));`
    }
  ]
};

window.TOPIC_DATA_STORE["date-set-methods"] = {
  id: "date-set-methods",
  title: "Date Set Methods",
  lead: "Master setFullYear(), setMonth(), setDate(), setHours(), setMinutes(), and calculating future/past dates.",
  intro: "Date set methods let you set date values (years, months, days, hours, minutes, seconds, milliseconds) for a Date object.",
  definition: "Mutating instance methods on `Date.prototype` that modify individual date/time components.",
  whyUse: "Scheduling subscription renewals, setting calendar deadlines, and computing relative dates (e.g. 30 days from now).",
  syntax: `d.setFullYear(2027);
d.setMonth(5); // June
d.setDate(15);
d.setHours(18, 30, 0);`,
  syntaxExplanation: "Set methods mutate the Date object in place and return the updated epoch timestamp.",
  simpleExample: `let d = new Date("2026-11-04");
d.setFullYear(2028);
console.log("Updated Year:", d.getFullYear());`,
  expectedOutput: `Updated Year: 2028`,
  realLifeExample: {
    domain: "Banking",
    title: "Credit Card Bill Due Date Calculator",
    scenario: "Setting bill due date exactly 21 days after statement billing cycle generation.",
    code: `let statementDate = new Date("2026-11-04");
let dueDate = new Date(statementDate); // Clone statement date

// Add 21 days
dueDate.setDate(dueDate.getDate() + 21);

console.log("Statement Generated : " + statementDate.toDateString());
console.log("Payment Due Date    : " + dueDate.toDateString());`,
    output: `Statement Generated : Wed Nov 04 2026\nPayment Due Date    : Wed Nov 25 2026`
  },
  practicalExample: {
    title: "Automatic Month Overflow Handling",
    code: `let d = new Date("2026-01-30");
// Adding 5 days automatically overflows from January into February!
d.setDate(d.getDate() + 5);
console.log("Result after overflow:", d.toDateString());`,
    output: `Result after overflow: Wed Feb 04 2026`,
    note: "JavaScript automatically computes month and leap-year transitions when dates overflow."
  },
  commonMistakes: [
    {
      mistake: "Mutating the original date when you intended to create a separate deadline",
      wrongCode: `let created = new Date();
let expires = created; // Same reference!
expires.setDate(expires.getDate() + 7);
console.log(created.toDateString()); // Created date was accidentally modified!`,
      correctCode: `let created = new Date();
let expires = new Date(created); // Create independent clone!
expires.setDate(expires.getDate() + 7);
console.log("Created:", created.toDateString());
console.log("Expires:", expires.toDateString());`,
      explanation: "Always clone with `new Date(existingDate)` before invoking set methods to avoid mutating original timestamps."
    }
  ],
  importantPoints: [
    "Date set methods mutate the object in place.",
    "Setting day `0` moves the date back to the last day of the previous month (`setDate(0)`).",
    "Passing out-of-range numbers causes automatic calendar rollover."
  ],
  interviewQuestions: [
    {
      question: "How do you find the last day of the current month in JavaScript using set methods?",
      answer: "Set the date to month + 1, and set day to 0: `new Date(year, month + 1, 0).getDate()`. Setting the day to `0` rolls back to the final day of the previous month."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a function that adds 90 days to today's date for an enterprise software trial expiration.",
      hint: "Create a copy and use setDate(getDate() + 90).",
      solution: `function calculateTrialExpiry(startDate, days = 90) {
  let expiry = new Date(startDate);
  expiry.setDate(expiry.getDate() + days);
  return expiry.toDateString();
}
console.log("Trial Ends:", calculateTrialExpiry(new Date("2026-11-04")));`
    }
  ]
};

window.TOPIC_DATA_STORE["date-reference"] = {
  id: "date-reference",
  title: "Date Reference",
  lead: "Comprehensive quick-reference table for all JavaScript Date constructor methods, getters, setters, and UTC equivalents.",
  intro: "This reference contains a complete overview of all methods and behaviors of the standard JavaScript Date object.",
  definition: "Standardized specification reference for all methods on `Date` and `Date.prototype`.",
  whyUse: "Quick cheat sheet for interview preparation and everyday project development.",
  syntax: `Date.now();
Date.parse(dateString);
Date.UTC(year, month, ...);
date.getTimezoneOffset();`,
  syntaxExplanation: "`getTimezoneOffset()` returns difference between UTC and local time in minutes.",
  simpleExample: `console.log("Current Epoch:", Date.now());
console.log("TZ Offset (mins):", new Date().getTimezoneOffset());`,
  expectedOutput: `Current Epoch: ` + Date.now() + `\nTZ Offset (mins): ` + new Date().getTimezoneOffset(),
  realLifeExample: {
    domain: "Business Applications",
    title: "Timezone Offset Detection for Global Meeting",
    scenario: "Computing client user local timezone offset to coordinate server meetings.",
    code: `let now = new Date();
let offsetMinutes = now.getTimezoneOffset();
let offsetHours = -(offsetMinutes / 60);

console.log("Timezone Offset:", offsetMinutes, "minutes");
console.log("UTC Offset (Hours): UTC" + (offsetHours >= 0 ? "+" : "") + offsetHours);`,
    output: `Timezone Offset: ` + new Date().getTimezoneOffset() + ` minutes\nUTC Offset (Hours): UTC` + (-(new Date().getTimezoneOffset()/60) >= 0 ? "+" : "") + -(new Date().getTimezoneOffset()/60)
  },
  practicalExample: {
    title: "Comparing Two Dates with getTime()",
    code: `let d1 = new Date("2026-11-04");
let d2 = new Date("2026-11-04");
console.log("d1 === d2 (Reference check):", d1 === d2); // false!
console.log("d1.getTime() === d2.getTime():", d1.getTime() === d2.getTime()); // true!`,
    output: `d1 === d2 (Reference check): false\nd1.getTime() === d2.getTime(): true`,
    note: "Always compare dates by numeric epoch time (`.getTime()`)."
  },
  commonMistakes: [
    {
      mistake: "Comparing Date objects using === directly",
      wrongCode: `if (dateA === dateB) { /* Never true for two distinct date instances */ }`,
      correctCode: `if (dateA.getTime() === dateB.getTime()) { /* Correct! */ }`,
      explanation: "Direct equality on objects compares memory addresses, not timestamp values."
    }
  ],
  importantPoints: [
    "Date objects are mutable.",
    "Temporal API is an upcoming TC39 proposal to modernize date/time in JavaScript.",
    "Dates automatically handle daylight saving transitions according to host OS timezone databases."
  ],
  interviewQuestions: [
    {
      question: "Why is the upcoming Temporal API being introduced to replace the Date object?",
      answer: "The legacy `Date` object has many design flaws: 0-indexed months, mutability bugs, clumsy timezone handling, lack of separate date-only or time-only types, and unreliable parsing. The upcoming `Temporal` API provides immutable, timezone-safe date-time primitives."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a function `isDateEqual(d1, d2)` that accurately tests if two date objects point to the same millisecond timestamp.",
      hint: "Compare d1.getTime() === d2.getTime().",
      solution: `function isDateEqual(d1, d2) {
  return d1.getTime() === d2.getTime();
}
console.log(isDateEqual(new Date("2026-11-04"), new Date("2026-11-04"))); // true`
    }
  ]
};

// PART 12: ARRAYS
window.TOPIC_DATA_STORE["arrays-intro"] = {
  id: "arrays-intro",
  title: "Array Introduction",
  lead: "Master ordered lists, zero-based indexing, mixed data types, length property, and element access.",
  intro: "An array is a special variable which can hold more than one value at a time. If you have a list of items, storing them in an array is the standard solution.",
  definition: "An ordered, zero-indexed list of values stored as an Array object capable of holding mixed types.",
  whyUse: "Managing collections of records: shopping carts, student rosters, product listings, coordinate lists, and search results.",
  syntax: `const fruits = ["Apple", "Banana", "Cherry"];
let first = fruits[0];
let total = fruits.length;`,
  syntaxExplanation: "Arrays use square brackets `[]`. Elements are accessed using zero-based indices `[0]`, `[1]`, etc.",
  simpleExample: `let subjects = ["Math", "Physics", "Chemistry"];
console.log("First Subject :", subjects[0]);
console.log("Total Subjects:", subjects.length);
console.log("Last Subject  :", subjects[subjects.length - 1]);`,
  expectedOutput: `First Subject : Math\nTotal Subjects: 3\nLast Subject  : Chemistry`,
  realLifeExample: {
    domain: "Student Management",
    title: "Batch Student Roster Array",
    scenario: "Maintaining a roster of enrolled student names and displaying the class roster count.",
    code: `let studentRoster = ["Rohan Verma", "Pooja Sen", "Kavita Rao", "Aditya Joshi"];

console.log("=== ENROLLED CLASS ROSTER ===");
console.log("Total Enrolled Students: " + studentRoster.length);
console.log("Class Representative    : " + studentRoster[0]);

// Adding a new late entrant
studentRoster.push("Meera Nair");
console.log("Updated Roster Count    : " + studentRoster.length);`,
    output: `=== ENROLLED CLASS ROSTER ===\nTotal Enrolled Students: 4\nClass Representative    : Rohan Verma\nUpdated Roster Count    : 5`
  },
  practicalExample: {
    title: "Negative Indexing with Array.prototype.at()",
    code: `let colors = ["Red", "Green", "Blue", "Yellow"];
console.log("Last element with at(-1) :", colors.at(-1));
console.log("Second last with at(-2)  :", colors.at(-2));`,
    output: `Last element with at(-1) : Yellow\nSecond last with at(-2)  : Blue`,
    note: "ES2022 `at()` allows clean negative indexing without `arr.length - 1`."
  },
  commonMistakes: [
    {
      mistake: "Checking array type using typeof",
      wrongCode: `let arr = [1, 2, 3];
console.log(typeof arr === "array"); // FALSE! typeof arr is "object"`,
      correctCode: `let arr = [1, 2, 3];
console.log(Array.isArray(arr)); // true! Reliable array detection`,
      explanation: "`typeof []` returns `'object'`. Always use `Array.isArray(arr)` to check for arrays."
    }
  ],
  importantPoints: [
    "Arrays in JavaScript are dynamic (resizable) and can hold mixed types.",
    "Array indices are 0-based.",
    "Modifying `arr.length = 0` clears the entire array instantly."
  ],
  interviewQuestions: [
    {
      question: "How do JavaScript arrays differ from arrays in C or Java?",
      answer: "In C/Java, arrays have fixed length and store a single homogeneous data type in contiguous memory. In JavaScript, arrays are dynamic high-level objects that can expand automatically, hold heterogeneous types, and are optimized by engines as dense or sparse dictionaries."
    }
  ],
  practiceExercises: [
    {
      problem: "Create an array of 4 car brands, replace the second brand with 'Audi', and log the updated array.",
      hint: "cars[1] = 'Audi'.",
      solution: `let cars = ["BMW", "Ford", "Honda", "Toyota"];
cars[1] = "Audi";
console.log(cars);`
    }
  ]
};

window.TOPIC_DATA_STORE["arrays-constructor"] = {
  id: "arrays-constructor",
  title: "Array Constructor",
  lead: "Master new Array(), Array.of(), Array.from(), and initializing pre-sized arrays.",
  intro: "Arrays can be created using the literal syntax `[]` or the built-in `Array` constructor. Modern JavaScript also introduces `Array.of()` and `Array.from()`.",
  definition: "The built-in `Array` function used to instantiate array objects, allocate pre-sized buffers, or convert iterable sequences into arrays.",
  whyUse: "Allocating fixed-length slot buffers, generating numeric sequences, and converting NodeLists/arguments to real arrays.",
  syntax: `new Array(size);
new Array(item1, item2);
Array.of(item1, item2);
Array.from(iterable, mapFn);`,
  syntaxExplanation: "`new Array(5)` creates an array with length 5 (empty slots). `Array.of(5)` creates `[5]`. `Array.from()` converts iterables like sets or NodeLists.",
  simpleExample: `let a1 = Array.of(1, 2, 3);
let a2 = Array.from("HELLO");
console.log("Array.of:", a1);
console.log("Array.from string:", a2);`,
  expectedOutput: `Array.of: [ 1, 2, 3 ]\nArray.from string: [ 'H', 'E', 'L', 'L', 'O' ]`,
  realLifeExample: {
    domain: "Attendance Management",
    title: "Monthly Calendar Days Generator with Array.from",
    scenario: "Generating an array of days [1, 2, ..., 31] for a calendar attendance grid.",
    code: `// Generate an array of 31 calendar day numbers
let daysInMonth = 31;
let calendarDays = Array.from({ length: daysInMonth }, (_, index) => index + 1);

console.log("First 5 Days:", calendarDays.slice(0, 5));
console.log("Total Days  :", calendarDays.length);`,
    output: `First 5 Days: [ 1, 2, 3, 4, 5 ]\nTotal Days  : 31`
  },
  practicalExample: {
    title: "Pre-filling Array Slots with fill()",
    code: `let gridSlots = new Array(4).fill("EMPTY");
console.log("Slots:", gridSlots);`,
    output: `Slots: [ 'EMPTY', 'EMPTY', 'EMPTY', 'EMPTY' ]`,
    note: "Combine `new Array(n).fill()` to initialize pre-populated default values."
  },
  commonMistakes: [
    {
      mistake: "Passing a single number to new Array expecting a one-element array",
      wrongCode: `let arr = new Array(5); // Creates 5 EMPTY SLOTS, NOT [5]!
console.log(arr.length); // 5
console.log(arr[0]);      // undefined`,
      correctCode: `let arr = Array.of(5); // Creates [5]!
console.log(arr);`,
      explanation: "`new Array(number)` treats a single number as initial length. Use `Array.of(number)` or `[number]` instead."
    }
  ],
  importantPoints: [
    "`Array.from()` accepts a mapping function as its second argument.",
    "Array literal `[]` is preferred over `new Array()` for standard arrays.",
    "`Array.from()` works on Sets, Maps, strings, arguments, and DOM NodeLists."
  ],
  interviewQuestions: [
    {
      question: "What is the quirk of passing a single argument to the `new Array()` constructor?",
      answer: "If you pass a single numeric argument `new Array(5)`, it creates an array with that designated `length` and 5 empty slots. If you pass a single non-numeric argument `new Array('5')`, it creates a single-element array `['5']`. `Array.of()` was introduced to resolve this inconsistency."
    }
  ],
  practiceExercises: [
    {
      problem: "Use `Array.from()` to create an array of the first 5 even numbers: `[2, 4, 6, 8, 10]`.",
      hint: "Array.from({ length: 5 }, (_, i) => (i + 1) * 2)",
      solution: `let evens = Array.from({ length: 5 }, (_, i) => (i + 1) * 2);
console.log("First 5 Evens:", evens);`
    }
  ]
};

window.TOPIC_DATA_STORE["arrays-methods"] = {
  id: "arrays-methods",
  title: "Array Methods",
  lead: "Master push(), pop(), shift(), unshift(), concat(), join(), slice(), splice(), and flat().",
  intro: "JavaScript provides a rich suite of built-in array methods for adding, removing, splicing, joining, and transforming array contents.",
  definition: "Prototype methods on `Array.prototype` that manipulate elements in place (mutating) or return new copies (non-mutating).",
  whyUse: "Queue and stack implementations, formatting CSV data, splicing records, and inserting elements at arbitrary positions.",
  syntax: `arr.push(item);       // Add to end (mutating)
arr.pop();            // Remove from end (mutating)
arr.unshift(item);    // Add to beginning (mutating)
arr.shift();          // Remove from beginning (mutating)
arr.splice(start, deleteCount, ...items); // In-place modify
arr.slice(start, end);// Non-mutating slice
arr.join(separator);  // Convert to string`,
  syntaxExplanation: "`push/pop` work at the end; `unshift/shift` work at the beginning. `splice` mutates in-place; `slice` returns a new subarray copy.",
  simpleExample: `let fruits = ["Banana", "Orange"];
fruits.push("Apple");     // Adds to end
fruits.unshift("Mango");  // Adds to start
console.log("Fruits:", fruits);
console.log("Joined:", fruits.join(" - "));`,
  expectedOutput: `Fruits: [ 'Mango', 'Banana', 'Orange', 'Apple' ]\nJoined: Mango - Banana - Orange - Apple`,
  realLifeExample: {
    domain: "Restaurant Billing",
    title: "Order Queue Management with Push & Shift (FIFO Queue)",
    scenario: "Adding incoming customer tickets to the kitchen queue and processing completed tickets in First-In-First-Out order.",
    code: `let kitchenQueue = [];

// Adding new tickets
kitchenQueue.push({ table: 1, order: "Margherita Pizza" });
kitchenQueue.push({ table: 4, order: "Pasta Alfredo" });
kitchenQueue.push({ table: 2, order: "Garlic Bread" });

console.log("Current Tickets in Queue: " + kitchenQueue.length);

// Kitchen finishes first order
let readyOrder = kitchenQueue.shift();
console.log("DISPATCHED: Table #" + readyOrder.table + " -> " + readyOrder.order);
console.log("Remaining Tickets       : " + kitchenQueue.length);`,
    output: `Current Tickets in Queue: 3\nDISPATCHED: Table #1 -> Margherita Pizza\nRemaining Tickets       : 2`
  },
  practicalExample: {
    title: "Splicing Elements In-Place with splice()",
    code: `let team = ["Aarav", "Meera", "Kunal", "Sneha"];
// At index 2, delete 1 item ("Kunal"), and insert "Rohan"
let removed = team.splice(2, 1, "Rohan");
console.log("Updated Team:", team);
console.log("Removed Item:", removed);`,
    output: `Updated Team: [ 'Aarav', 'Meera', 'Rohan', 'Sneha' ]\nRemoved Item: [ 'Kunal' ]`,
    note: "`splice()` mutates the array and returns an array of the removed items."
  },
  commonMistakes: [
    {
      mistake: "Confusing slice() with splice()",
      wrongCode: `let arr = [1, 2, 3, 4];
arr.slice(1, 2); // Does NOT modify arr! It returns a new copy.
console.log(arr); // Still [1, 2, 3, 4]`,
      correctCode: `let arr = [1, 2, 3, 4];
let sliced = arr.slice(1, 3); // Pure function, returns [2, 3]
arr.splice(1, 2);             // Mutates arr in place, leaving [1, 4]`,
      explanation: "`slice()` does NOT mutate original array; `splice()` modifies original array in place."
    }
  ],
  importantPoints: [
    "Mutating methods: `push`, `pop`, `shift`, `unshift`, `splice`, `sort`, `reverse`.",
    "Non-mutating methods: `slice`, `concat`, `join`, `map`, `filter`.",
    "Modern immutable equivalents: `toSorted()`, `toSpliced()`, `toReversed()` (ES2023)."
  ],
  interviewQuestions: [
    {
      question: "What is the difference between slice() and splice()?",
      answer: "1. `slice(start, end)` is non-mutating: it extracts a shallow copy of a portion of an array without modifying the original.\n2. `splice(start, deleteCount, ...items)` is mutating: it changes the original array by removing, replacing, or adding elements in-place."
    }
  ],
  practiceExercises: [
    {
      problem: "Given an array `['Jan', 'March', 'April']`, use `splice()` to insert `'Feb'` between 'Jan' and 'March'.",
      hint: "arr.splice(1, 0, 'Feb');",
      solution: `let months = ["Jan", "March", "April"];
months.splice(1, 0, "Feb");
console.log("Months:", months); // ["Jan", "Feb", "March", "April"]`
    }
  ]
};

window.TOPIC_DATA_STORE["arrays-search"] = {
  id: "arrays-search",
  title: "Array Search",
  lead: "Master indexOf(), lastIndexOf(), includes(), find(), findIndex(), and findLast().",
  intro: "JavaScript includes powerful methods to search through arrays for primitive values or complex object criteria.",
  definition: "Methods on `Array.prototype` designed to search for values and return indices, booleans, or matching element references.",
  whyUse: "Finding customer records by ID, checking if a role exists in permission lists, and retrieving objects matching criteria.",
  syntax: `arr.indexOf(value);
arr.includes(value);
arr.find(item => item.id === targetId);
arr.findIndex(item => item.id === targetId);`,
  syntaxExplanation: "`includes()` returns boolean. `find()` returns the first matching element or `undefined`. `findIndex()` returns the matching index or `-1`.",
  simpleExample: `let items = ["Pen", "Pencil", "Eraser"];
console.log("Has Pencil:", items.includes("Pencil"));
console.log("Index Eraser:", items.indexOf("Eraser"));`,
  expectedOutput: `Has Pencil: true\nIndex Eraser: 2`,
  realLifeExample: {
    domain: "E-commerce",
    title: "Product Inventory Lookup by SKU with find()",
    scenario: "Searching product catalogue array for a specific SKU to display price and availability.",
    code: `let products = [
  { sku: "SKU-101", title: "Wireless Headphones", price: 2999 },
  { sku: "SKU-102", title: "Ergonomic Desk Chair", price: 8499 },
  { sku: "SKU-103", title: "Mechanical Keyboard", price: 4200 }
];

let querySku = "SKU-102";
let matchedProduct = products.find(p => p.sku === querySku);

if (matchedProduct) {
  console.log("Found: " + matchedProduct.title + " | Price: Rs." + matchedProduct.price);
} else {
  console.log("Product SKU not found in inventory.");
}`,
    output: `Found: Ergonomic Desk Chair | Price: Rs.8499`
  },
  practicalExample: {
    title: "Finding Last Element with findLast() (ES2023)",
    code: `let txHistory = [
  { id: 1, type: "Credit", amount: 1000 },
  { id: 2, type: "Debit", amount: 400 },
  { id: 3, type: "Credit", amount: 2500 }
];

let latestCredit = txHistory.findLast(tx => tx.type === "Credit");
console.log("Latest Credit Transaction:", latestCredit);`,
    output: `Latest Credit Transaction: { id: 3, type: 'Credit', amount: 2500 }`,
    note: "`findLast()` iterates in reverse order from the end of the array."
  },
  commonMistakes: [
    {
      mistake: "Using indexOf or includes to search for objects",
      wrongCode: `let users = [{ id: 1 }];
console.log(users.includes({ id: 1 })); // false! Compares memory references, NOT values!`,
      correctCode: `let users = [{ id: 1 }];
console.log(users.some(u => u.id === 1)); // true! Uses predicate function`,
      explanation: "`indexOf()` and `includes()` test strict equality (`===`), which fails for two separate object literals."
    }
  ],
  importantPoints: [
    "Use `includes()` for primitive value checks.",
    "Use `find()` or `findIndex()` with a predicate function for object searching.",
    "`find()` halts search on the first truthy match (short-circuiting)."
  ],
  interviewQuestions: [
    {
      question: "What is the difference between filter() and find() in JavaScript arrays?",
      answer: "`find()` returns the *first single element* that matches the condition and stops searching immediately (short-circuits). `filter()` checks the entire array and returns a *new array containing all matching elements*."
    }
  ],
  practiceExercises: [
    {
      problem: "Find the first student in an array whose score is below 40 using `find()`.",
      hint: "students.find(s => s.score < 40)",
      solution: `let students = [
  { name: "Aarav", score: 85 },
  { name: "Pooja", score: 38 },
  { name: "Rohan", score: 72 }
];
let failingStudent = students.find(s => s.score < 40);
console.log("Failing Student:", failingStudent.name); // Pooja`
    }
  ]
};

window.TOPIC_DATA_STORE["arrays-sort"] = {
  id: "arrays-sort",
  title: "Array Sort",
  lead: "Master sort(), compare functions, ascending/descending order, reverse(), and toSorted().",
  intro: "The `sort()` method sorts the elements of an array in place and returns the sorted array. By default, sort order is ascending, built upon converting elements into strings.",
  definition: "An in-place sorting algorithm on `Array.prototype` that orders elements using a custom comparator function.",
  whyUse: "Ranking students by score, sorting products by price, alphabetical customer directories, and chronologically ordering logs.",
  syntax: `// Numbers ascending
arr.sort((a, b) => a - b);

// Numbers descending
arr.sort((a, b) => b - a);

// Strings alphabetical
arr.sort((a, b) => a.localeCompare(b));`,
  syntaxExplanation: "If comparator returns `< 0`, `a` comes first. If `> 0`, `b` comes first. If `0`, order is unchanged.",
  simpleExample: `let scores = [40, 100, 1, 5, 25, 10];
scores.sort((a, b) => a - b);
console.log("Ascending:", scores);`,
  expectedOutput: `Ascending: [ 1, 5, 10, 25, 40, 100 ]`,
  realLifeExample: {
    domain: "E-commerce",
    title: "Product Catalog Price Sorting Filter",
    scenario: "Sorting shopping products from lowest price to highest price.",
    code: `let products = [
  { name: "Bluetooth Speaker", price: 1499 },
  { name: "USB Cable", price: 299 },
  { name: "Power Bank", price: 1899 },
  { name: "Earbuds", price: 899 }
];

// Sort products by price ascending
products.sort((a, b) => a.price - b.price);

console.log("=== PRODUCTS (PRICE: LOW TO HIGH) ===");
products.forEach(p => console.log(p.name + " -> Rs." + p.price));`,
    output: `=== PRODUCTS (PRICE: LOW TO HIGH) ===\nUSB Cable -> Rs.299\nEarbuds -> Rs.899\nBluetooth Speaker -> Rs.1499\nPower Bank -> Rs.1899`
  },
  practicalExample: {
    title: "Immutable Sorting with toSorted() (ES2023)",
    code: `let original = [3, 1, 4, 1, 5];
let sortedCopy = original.toSorted((a, b) => a - b);
console.log("Original untouched:", original);
console.log("Sorted copy       :", sortedCopy);`,
    output: `Original untouched: [ 3, 1, 4, 1, 5 ]\nSorted copy       : [ 1, 1, 3, 4, 5 ]`,
    note: "`toSorted()` produces a new sorted array without mutating original data."
  },
  commonMistakes: [
    {
      mistake: "Calling sort() without a compare function on numbers",
      wrongCode: `let nums = [25, 100, 5];
nums.sort(); // Sorts as STRINGS! "100" comes before "25"!
console.log(nums); // [100, 25, 5] (Incorrect!)`,
      correctCode: `let nums = [25, 100, 5];
nums.sort((a, b) => a - b); // Numerical comparator
console.log(nums); // [5, 25, 100] (Correct!)`,
      explanation: "Without a comparator function, `sort()` converts elements to strings and compares UTF-16 code units, so '100' sorts before '25'."
    }
  ],
  importantPoints: [
    "`sort()` mutates the original array in place.",
    "For Unicode / international string comparison, use `a.localeCompare(b)`.",
    "`reverse()` reverses array elements in place."
  ],
  interviewQuestions: [
    {
      question: "What algorithm does JavaScript use for Array.prototype.sort()?",
      answer: "V8 (Chrome, Node.js) and other modern engines use **Timsort** (a hybrid of Merge Sort and Insertion Sort). It provides stable $O(n \\log n)$ worst-case time complexity."
    }
  ],
  practiceExercises: [
    {
      problem: "Sort an array of student objects descending by marks so the highest ranker is first.",
      hint: "students.sort((a, b) => b.marks - a.marks)",
      solution: `let students = [
  { name: "Ravi", marks: 76 },
  { name: "Priya", marks: 94 },
  { name: "Kunal", marks: 82 }
];
students.sort((a, b) => b.marks - a.marks);
console.log("Top Ranker:", students[0].name, "(" + students[0].marks + ")");`
    }
  ]
};

window.TOPIC_DATA_STORE["arrays-iteration"] = {
  id: "arrays-iteration",
  title: "Array Iteration",
  lead: "Master forEach(), map(), filter(), reduce(), every(), some(), and flatMap().",
  intro: "Array iteration methods operate on every item in an array, allowing powerful functional transformations, filtering, and aggregations.",
  definition: "Higher-order functional methods on `Array.prototype` that accept callback functions to process, transform, or evaluate array elements.",
  whyUse: "Eliminates imperative loop boilerplate, allows declarative data pipelines, and is standard in modern JavaScript architecture.",
  syntax: `arr.forEach((item, index) => { /* side effect */ });
let mapped = arr.map(item => item * 2);
let filtered = arr.filter(item => item > 10);
let total = arr.reduce((acc, curr) => acc + curr, 0);
let allMatch = arr.every(item => item > 0);
let anyMatch = arr.some(item => item < 0);`,
  syntaxExplanation: "`map` creates a new array of same length with transformed values. `filter` creates a new array of elements that pass a test. `reduce` condenses elements into a single accumulated result.",
  simpleExample: `let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(n => n * 2);
let evens = numbers.filter(n => n % 2 === 0);
let sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("Doubled:", doubled);
console.log("Evens  :", evens);
console.log("Sum    :", sum);`,
  expectedOutput: `Doubled: [ 2, 4, 6, 8, 10 ]\nEvens  : [ 2, 4 ]\nSum    : 15`,
  realLifeExample: {
    domain: "Banking",
    title: "Financial Ledger Analytics Pipeline",
    scenario: "Computing total deposits, filtering large withdrawals, and checking compliance status using map, filter, and reduce.",
    code: `let transactions = [
  { id: "T1", type: "DEPOSIT", amount: 15000 },
  { id: "T2", type: "WITHDRAWAL", amount: 4500 },
  { id: "T3", type: "DEPOSIT", amount: 20000 },
  { id: "T4", type: "WITHDRAWAL", amount: 12000 }
];

// 1. Calculate total deposits
let totalDeposited = transactions
  .filter(t => t.type === "DEPOSIT")
  .reduce((total, t) => total + t.amount, 0);

// 2. Check if any transaction is above Rs. 10,000 for KYC audit
let hasHighValue = transactions.some(t => t.amount >= 10000);

console.log("Total Deposited Funds : Rs." + totalDeposited);
console.log("High-Value Audit Flag : " + hasHighValue);`,
    output: `Total Deposited Funds : Rs.35000\nHigh-Value Audit Flag : true`
  },
  practicalExample: {
    title: "Grouping Data with reduce()",
    code: `let people = [
  { name: "Alice", role: "Dev" },
  { name: "Bob", role: "Design" },
  { name: "Charlie", role: "Dev" }
];

let groupedByRole = people.reduce((acc, person) => {
  acc[person.role] = acc[person.role] || [];
  acc[person.role].push(person.name);
  return acc;
}, {});

console.log("Grouped Roles:", groupedByRole);`,
    output: `Grouped Roles: { Dev: [ 'Alice', 'Charlie' ], Design: [ 'Bob' ] }`,
    note: "`reduce()` is capable of constructing complex objects and groupings."
  },
  commonMistakes: [
    {
      mistake: "Using forEach when you want to transform and return an array",
      wrongCode: `let nums = [1, 2, 3];
let doubled = nums.forEach(n => n * 2); // forEach ALWAYS returns undefined!
console.log(doubled); // undefined!`,
      correctCode: `let nums = [1, 2, 3];
let doubled = nums.map(n => n * 2); // map returns the new array!
console.log(doubled); // [2, 4, 6]`,
      explanation: "`forEach()` is strictly for executing side effects and returns `undefined`. Use `map()` when you need a transformed output array."
    }
  ],
  importantPoints: [
    "`map()`, `filter()`, and `reduce()` are pure functions and do not mutate the input array.",
    "`reduce()` requires an initial value accumulator argument for safe operations on empty arrays.",
    "`every()` returns true on empty arrays (vacuous truth); `some()` returns false."
  ],
  interviewQuestions: [
    {
      question: "How does reduce() work and why is the initial value argument important?",
      answer: "`reduce()` iterates through elements, executing a reducer callback that updates an accumulator across every step. Providing an initial value (e.g. `0` or `{}`) ensures that the reducer starts with a defined state and prevents a `TypeError: Reduce of empty array with no initial value`."
    }
  ],
  practiceExercises: [
    {
      problem: "Given an array of cart items with prices `[120, 450, 30, 890]`, filter items above 100 and sum them using filter and reduce.",
      hint: "arr.filter(p => p > 100).reduce((a, b) => a + b, 0)",
      solution: `let cart = [120, 450, 30, 890];
let totalOver100 = cart.filter(p => p > 100).reduce((sum, p) => sum + p, 0);
console.log("Total (>100): Rs." + totalOver100); // 1460`
    }
  ]
};

window.TOPIC_DATA_STORE["arrays-const"] = {
  id: "arrays-const",
  title: "Array Const",
  lead: "Master array reference immutability, mutation vs reassignment, and Object.freeze() for arrays.",
  intro: "An array declared with `const` cannot be reassigned to a new array reference, but its elements and properties remain completely mutable.",
  definition: "A variable binding pattern using `const` that locks the variable identifier to an array memory reference while permitting in-place mutations.",
  whyUse: "Standard industry convention in modern JavaScript: declare all arrays with `const` to prevent accidental reassignment.",
  syntax: `const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Toyota"; // Allowed!
cars.push("Audi");  // Allowed!
// cars = ["Ford"]; // TypeError: Assignment to constant variable.`,
  syntaxExplanation: "`const` prevents changing what the variable points to; it does not freeze the underlying array data structure.",
  simpleExample: `const list = [10, 20];
list.push(30);
console.log("Modified list:", list);`,
  expectedOutput: `Modified list: [ 10, 20, 30 ]`,
  realLifeExample: {
    domain: "Banking",
    title: "Immutable Transaction Ledger Reference",
    scenario: "Maintaining a bank account transaction log array using const to prevent replacing the ledger reference.",
    code: `const transactionLog = []; // Cannot be reassigned to another array

// Appending entries is safe and valid
transactionLog.push({ id: "TX-1", amount: 5000, type: "CREDIT" });
transactionLog.push({ id: "TX-2", amount: 1200, type: "DEBIT" });

console.log("Ledger Count : " + transactionLog.length);
console.log("First Entry  : " + transactionLog[0].id + " (" + transactionLog[0].type + ")");`,
    output: `Ledger Count : 2\nFirst Entry  : TX-1 (CREDIT)`
  },
  practicalExample: {
    title: "Deep Immutability with Object.freeze()",
    code: `const fixedOptions = Object.freeze(["Yes", "No", "Maybe"]);
// fixedOptions.push("Never"); // TypeError in strict mode!
console.log("Frozen array items:", fixedOptions);`,
    output: `Frozen array items: [ 'Yes', 'No', 'Maybe' ]`,
    note: "Use `Object.freeze()` to make array contents truly immutable."
  },
  commonMistakes: [
    {
      mistake: "Assuming const makes an array's contents read-only",
      wrongCode: `const numbers = [1, 2, 3];
numbers[0] = 99; // People assume this throws an error, but it DOES NOT!`,
      correctCode: `const numbers = Object.freeze([1, 2, 3]); // Real immutability`,
      explanation: "`const` only protects the reference pointer, not the elements inside."
    }
  ],
  importantPoints: [
    "Always use `const` for arrays unless you specifically intend to reassign the entire variable.",
    "`const` prevents accidental reassignment bugs.",
    "`Object.freeze(arr)` prevents pushing, popping, or modifying elements."
  ],
  interviewQuestions: [
    {
      question: "Can you modify the elements of an array declared with const?",
      answer: "Yes. `const` prevents reassigning the variable identifier to a different memory address (e.g., `arr = [1, 2]`), but mutating the array through index assignment or methods like `push()`, `pop()`, and `splice()` is completely permitted."
    }
  ],
  practiceExercises: [
    {
      problem: "Create a `const` array of 3 tasks, add a 4th task using `push()`, and demonstrate that reassignment throws a TypeError.",
      hint: "try { tasks = [] } catch(e) { ... }",
      solution: `const tasks = ["Design", "Code", "Test"];
tasks.push("Deploy");
console.log("Tasks:", tasks);
try {
  tasks = ["Overwritten"];
} catch (err) {
  console.log("Caught Reassignment Error:", err.name); // TypeError
}`
    }
  ]
};
