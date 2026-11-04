/* ==========================================================================
   JS LEARNING HUB - Syllabus Structure & Metadata (syllabus-meta.js)
   Complete hierarchy of all 26 Parts and 243 Subtopics
   ========================================================================== */

const SYLLABUS_DATA = [
  {
    id: "part-1",
    partNumber: 1,
    title: "JavaScript Fundamentals",
    icon: "⚡",
    topics: [
      { id: "js-home", title: "JavaScript Home", slug: "js-home", readTime: "4 min" },
      { id: "js-intro", title: "JavaScript Introduction", slug: "js-intro", readTime: "6 min" },
      { id: "where-to", title: "Where To Write JavaScript", slug: "where-to", readTime: "5 min" },
      { id: "js-output", title: "JavaScript Output", slug: "js-output", readTime: "5 min" },
      { id: "js-syntax", title: "JavaScript Syntax", slug: "js-syntax", readTime: "6 min" },
      { id: "js-statements", title: "JavaScript Statements", slug: "js-statements", readTime: "5 min" },
      { id: "js-comments", title: "JavaScript Comments", slug: "js-comments", readTime: "4 min" },
      { id: "js-variables", title: "JavaScript Variables", slug: "js-variables", readTime: "7 min" },
      { id: "js-let", title: "JavaScript Let", slug: "js-let", readTime: "6 min" },
      { id: "js-const", title: "JavaScript Const", slug: "js-const", readTime: "6 min" },
      { id: "js-types", title: "JavaScript Types", slug: "js-types", readTime: "7 min" }
    ]
  },
  {
    id: "part-2",
    partNumber: 2,
    title: "JavaScript Operators",
    icon: "➕",
    topics: [
      { id: "operators-intro", title: "Operators Overview", slug: "operators-intro", readTime: "5 min" },
      { id: "operators-arithmetic", title: "Arithmetic Operators", slug: "operators-arithmetic", readTime: "6 min" },
      { id: "operators-assignment", title: "Assignment Operators", slug: "operators-assignment", readTime: "5 min" },
      { id: "operators-comparison", title: "Comparison Operators", slug: "operators-comparison", readTime: "6 min" },
      { id: "operators-conditional", title: "Conditional Operators", slug: "operators-conditional", readTime: "5 min" }
    ]
  },
  {
    id: "part-3",
    partNumber: 3,
    title: "Conditions",
    icon: "🔀",
    topics: [
      { id: "cond-if", title: "If Statement", slug: "cond-if", readTime: "5 min" },
      { id: "cond-if-else", title: "If Else", slug: "cond-if-else", readTime: "5 min" },
      { id: "cond-else-if", title: "Else If", slug: "cond-else-if", readTime: "6 min" },
      { id: "cond-ternary", title: "Ternary Operator", slug: "cond-ternary", readTime: "5 min" },
      { id: "cond-switch", title: "Switch Statement", slug: "cond-switch", readTime: "7 min" },
      { id: "cond-booleans", title: "Booleans", slug: "cond-booleans", readTime: "5 min" },
      { id: "cond-logical", title: "Logical Operators", slug: "cond-logical", readTime: "6 min" }
    ]
  },
  {
    id: "part-4",
    partNumber: 4,
    title: "Loops",
    icon: "🔁",
    topics: [
      { id: "loops-intro", title: "Loops Introduction", slug: "loops-intro", readTime: "5 min" },
      { id: "loop-for", title: "For Loop", slug: "loop-for", readTime: "7 min" },
      { id: "loop-while", title: "While Loop", slug: "loop-while", readTime: "6 min" },
      { id: "loop-do-while", title: "Do While Loop", slug: "loop-do-while", readTime: "5 min" },
      { id: "loop-break", title: "Break Statement", slug: "loop-break", readTime: "5 min" },
      { id: "loop-continue", title: "Continue Statement", slug: "loop-continue", readTime: "5 min" },
      { id: "loop-control-flow", title: "Control Flow", slug: "loop-control-flow", readTime: "6 min" }
    ]
  },
  {
    id: "part-5",
    partNumber: 5,
    title: "Strings",
    icon: "🔤",
    topics: [
      { id: "strings-intro", title: "Strings Introduction", slug: "strings-intro", readTime: "5 min" },
      { id: "string-templates", title: "String Templates", slug: "string-templates", readTime: "6 min" },
      { id: "string-methods", title: "String Methods", slug: "string-methods", readTime: "8 min" },
      { id: "string-search", title: "String Search", slug: "string-search", readTime: "6 min" },
      { id: "string-reference", title: "String Reference", slug: "string-reference", readTime: "7 min" }
    ]
  },
  {
    id: "part-6",
    partNumber: 6,
    title: "Numbers",
    icon: "🔢",
    topics: [
      { id: "numbers-intro", title: "Numbers", slug: "numbers-intro", readTime: "5 min" },
      { id: "number-methods", title: "Number Methods", slug: "number-methods", readTime: "6 min" },
      { id: "number-properties", title: "Number Properties", slug: "number-properties", readTime: "5 min" },
      { id: "number-bitwise", title: "Bitwise Operators", slug: "number-bitwise", readTime: "7 min" },
      { id: "number-bigint", title: "BigInt", slug: "number-bigint", readTime: "5 min" }
    ]
  },
  {
    id: "part-7",
    partNumber: 7,
    title: "Functions",
    icon: "⚙️",
    topics: [
      { id: "functions-intro", title: "Function Introduction", slug: "functions-intro", readTime: "6 min" },
      { id: "functions-invocation", title: "Function Invocation", slug: "functions-invocation", readTime: "5 min" },
      { id: "functions-parameters", title: "Function Parameters", slug: "functions-parameters", readTime: "6 min" },
      { id: "functions-return", title: "Function Return", slug: "functions-return", readTime: "5 min" },
      { id: "functions-arguments", title: "Function Arguments", slug: "functions-arguments", readTime: "6 min" },
      { id: "functions-expressions", title: "Function Expressions", slug: "functions-expressions", readTime: "6 min" },
      { id: "functions-arrow", title: "Arrow Functions", slug: "functions-arrow", readTime: "7 min" },
      { id: "functions-scope", title: "Function Scope", slug: "functions-scope", readTime: "6 min" }
    ]
  },
  {
    id: "part-8",
    partNumber: 8,
    title: "Timers",
    icon: "⏱️",
    topics: [
      { id: "timers-settimeout", title: "setTimeout()", slug: "timers-settimeout", readTime: "6 min" },
      { id: "timers-setinterval", title: "setInterval()", slug: "timers-setinterval", readTime: "6 min" },
      { id: "timers-cleartimeout", title: "clearTimeout()", slug: "timers-cleartimeout", readTime: "5 min" },
      { id: "timers-clearinterval", title: "clearInterval()", slug: "timers-clearinterval", readTime: "5 min" }
    ]
  },
  {
    id: "part-9",
    partNumber: 9,
    title: "Objects",
    icon: "📦",
    topics: [
      { id: "objects-intro", title: "Object Introduction", slug: "objects-intro", readTime: "6 min" },
      { id: "objects-properties", title: "Object Properties", slug: "objects-properties", readTime: "6 min" },
      { id: "objects-methods", title: "Object Methods", slug: "objects-methods", readTime: "6 min" },
      { id: "objects-this", title: "This Keyword", slug: "objects-this", readTime: "7 min" },
      { id: "objects-display", title: "Object Display", slug: "objects-display", readTime: "5 min" },
      { id: "objects-constructors", title: "Object Constructors", slug: "objects-constructors", readTime: "7 min" }
    ]
  },
  {
    id: "part-10",
    partNumber: 10,
    title: "Scope and Advanced Basics",
    icon: "🎯",
    topics: [
      { id: "scope-intro", title: "Scope", slug: "scope-intro", readTime: "6 min" },
      { id: "scope-code-blocks", title: "Code Blocks", slug: "scope-code-blocks", readTime: "5 min" },
      { id: "scope-hoisting", title: "Hoisting", slug: "scope-hoisting", readTime: "6 min" },
      { id: "scope-var-let-const", title: "var vs let vs const", slug: "scope-var-let-const", readTime: "7 min" },
      { id: "scope-strict-mode", title: "Strict Mode", slug: "scope-strict-mode", readTime: "5 min" }
    ]
  },
  {
    id: "part-11",
    partNumber: 11,
    title: "Dates",
    icon: "📅",
    topics: [
      { id: "date-intro", title: "Date Introduction", slug: "date-intro", readTime: "5 min" },
      { id: "date-formats", title: "Date Formats", slug: "date-formats", readTime: "6 min" },
      { id: "date-get-methods", title: "Date Get Methods", slug: "date-get-methods", readTime: "6 min" },
      { id: "date-set-methods", title: "Date Set Methods", slug: "date-set-methods", readTime: "6 min" },
      { id: "date-reference", title: "Date Reference", slug: "date-reference", readTime: "7 min" }
    ]
  },
  {
    id: "part-12",
    partNumber: 12,
    title: "Arrays",
    icon: "📚",
    topics: [
      { id: "arrays-intro", title: "Array Introduction", slug: "arrays-intro", readTime: "6 min" },
      { id: "arrays-constructor", title: "Array Constructor", slug: "arrays-constructor", readTime: "5 min" },
      { id: "arrays-methods", title: "Array Methods", slug: "arrays-methods", readTime: "8 min" },
      { id: "arrays-search", title: "Array Search", slug: "arrays-search", readTime: "6 min" },
      { id: "arrays-sort", title: "Array Sort", slug: "arrays-sort", readTime: "6 min" },
      { id: "arrays-iteration", title: "Array Iteration", slug: "arrays-iteration", readTime: "8 min" },
      { id: "arrays-const", title: "Array Const", slug: "arrays-const", readTime: "5 min" }
    ]
  },
  {
    id: "part-13",
    partNumber: 13,
    title: "Sets and Maps",
    icon: "🗺️",
    topics: [
      { id: "sets-intro", title: "Sets", slug: "sets-intro", readTime: "5 min" },
      { id: "sets-methods", title: "Set Methods", slug: "sets-methods", readTime: "6 min" },
      { id: "sets-logic", title: "Set Logic", slug: "sets-logic", readTime: "5 min" },
      { id: "sets-weakset", title: "WeakSet", slug: "sets-weakset", readTime: "5 min" },
      { id: "maps-intro", title: "Maps", slug: "maps-intro", readTime: "6 min" },
      { id: "maps-methods", title: "Map Methods", slug: "maps-methods", readTime: "6 min" },
      { id: "maps-weakmap", title: "WeakMap", slug: "maps-weakmap", readTime: "5 min" }
    ]
  },
  {
    id: "part-14",
    partNumber: 14,
    title: "Iterations",
    icon: "🔄",
    topics: [
      { id: "iter-iterables", title: "Iterables", slug: "iter-iterables", readTime: "5 min" },
      { id: "iter-iterators", title: "Iterators", slug: "iter-iterators", readTime: "6 min" },
      { id: "iter-generators", title: "Generators", slug: "iter-generators", readTime: "7 min" },
      { id: "iter-for-of", title: "for...of", slug: "iter-for-of", readTime: "5 min" },
      { id: "iter-for-in", title: "for...in", slug: "iter-for-in", readTime: "6 min" }
    ]
  },
  {
    id: "part-15",
    partNumber: 15,
    title: "Math",
    icon: "📐",
    topics: [
      { id: "math-object", title: "Math Object", slug: "math-object", readTime: "5 min" },
      { id: "math-methods", title: "Math Methods", slug: "math-methods", readTime: "7 min" },
      { id: "math-random", title: "Math Random", slug: "math-random", readTime: "6 min" },
      { id: "math-reference", title: "Math Reference", slug: "math-reference", readTime: "6 min" }
    ]
  },
  {
    id: "part-16",
    partNumber: 16,
    title: "Regular Expressions",
    icon: "🔍",
    topics: [
      { id: "regex-intro", title: "RegExp Introduction", slug: "regex-intro", readTime: "6 min" },
      { id: "regex-flags", title: "RegExp Flags", slug: "regex-flags", readTime: "5 min" },
      { id: "regex-classes", title: "Character Classes", slug: "regex-classes", readTime: "6 min" },
      { id: "regex-meta", title: "Metacharacters", slug: "regex-meta", readTime: "6 min" },
      { id: "regex-assertions", title: "Assertions", slug: "regex-assertions", readTime: "6 min" },
      { id: "regex-groups", title: "Groups", slug: "regex-groups", readTime: "6 min" },
      { id: "regex-quantifiers", title: "Quantifiers", slug: "regex-quantifiers", readTime: "6 min" },
      { id: "regex-patterns", title: "Patterns", slug: "regex-patterns", readTime: "7 min" },
      { id: "regex-methods", title: "RegExp Methods", slug: "regex-methods", readTime: "6 min" }
    ]
  },
  {
    id: "part-17",
    partNumber: 17,
    title: "Data Types",
    icon: "🏷️",
    topics: [
      { id: "types-overview", title: "Data Types Overview", slug: "types-overview", readTime: "6 min" },
      { id: "types-primitive", title: "Primitive Data Types", slug: "types-primitive", readTime: "6 min" },
      { id: "types-object", title: "Object Types", slug: "types-object", readTime: "6 min" },
      { id: "types-symbols", title: "Symbols", slug: "types-symbols", readTime: "5 min" },
      { id: "types-typeof", title: "typeof", slug: "types-typeof", readTime: "5 min" },
      { id: "types-undefined", title: "undefined", slug: "types-undefined", readTime: "5 min" },
      { id: "types-nan", title: "NaN", slug: "types-nan", readTime: "5 min" },
      { id: "types-tostring", title: "toString()", slug: "types-tostring", readTime: "5 min" },
      { id: "types-coercion", title: "Type Coercion", slug: "types-coercion", readTime: "6 min" },
      { id: "types-conversion", title: "Type Conversion", slug: "types-conversion", readTime: "6 min" },
      { id: "types-destructuring", title: "Destructuring", slug: "types-destructuring", readTime: "7 min" }
    ]
  },
  {
    id: "part-18",
    partNumber: 18,
    title: "Errors and Debugging",
    icon: "🐛",
    topics: [
      { id: "err-intro", title: "Error Introduction", slug: "err-intro", readTime: "5 min" },
      { id: "err-handling", title: "Error Handling", slug: "err-handling", readTime: "6 min" },
      { id: "err-try", title: "Try", slug: "err-try", readTime: "5 min" },
      { id: "err-catch", title: "Catch", slug: "err-catch", readTime: "5 min" },
      { id: "err-finally", title: "Finally", slug: "err-finally", readTime: "5 min" },
      { id: "err-throw", title: "Throw", slug: "err-throw", readTime: "5 min" },
      { id: "err-object", title: "Error Object", slug: "err-object", readTime: "5 min" },
      { id: "err-debugging", title: "Debugging", slug: "err-debugging", readTime: "6 min" },
      { id: "err-console", title: "Console", slug: "err-console", readTime: "6 min" },
      { id: "err-breakpoints", title: "Breakpoints", slug: "err-breakpoints", readTime: "5 min" }
    ]
  },
  {
    id: "part-19",
    partNumber: 19,
    title: "HTML DOM",
    icon: "🌳",
    topics: [
      { id: "dom-intro", title: "DOM Introduction", slug: "dom-intro", readTime: "6 min" },
      { id: "dom-api", title: "DOM API", slug: "dom-api", readTime: "6 min" },
      { id: "dom-selecting", title: "Selecting Elements", slug: "dom-selecting", readTime: "7 min" },
      { id: "dom-changing-html", title: "Changing HTML", slug: "dom-changing-html", readTime: "6 min" },
      { id: "dom-changing-css", title: "Changing CSS", slug: "dom-changing-css", readTime: "6 min" },
      { id: "dom-form-validation", title: "Form Validation", slug: "dom-form-validation", readTime: "7 min" },
      { id: "dom-animations", title: "DOM Animations", slug: "dom-animations", readTime: "6 min" },
      { id: "dom-document-object", title: "Document Object", slug: "dom-document-object", readTime: "6 min" },
      { id: "dom-element-object", title: "Element Object", slug: "dom-element-object", readTime: "6 min" },
      { id: "dom-navigation", title: "DOM Navigation", slug: "dom-navigation", readTime: "6 min" },
      { id: "dom-nodes", title: "DOM Nodes", slug: "dom-nodes", readTime: "6 min" },
      { id: "dom-collections", title: "DOM Collections", slug: "dom-collections", readTime: "6 min" },
      { id: "dom-nodelists", title: "Node Lists", slug: "dom-nodelists", readTime: "6 min" }
    ]
  },
  {
    id: "part-20",
    partNumber: 20,
    title: "JavaScript Events",
    icon: "⚡",
    topics: [
      { id: "events-intro", title: "Events Introduction", slug: "events-intro", readTime: "6 min" },
      { id: "events-mouse", title: "Mouse Events", slug: "events-mouse", readTime: "6 min" },
      { id: "events-keyboard", title: "Keyboard Events", slug: "events-keyboard", readTime: "6 min" },
      { id: "events-load", title: "Load Events", slug: "events-load", readTime: "5 min" },
      { id: "events-management", title: "Event Management", slug: "events-management", readTime: "6 min" },
      { id: "events-listener", title: "Event Listener", slug: "events-listener", readTime: "7 min" },
      { id: "events-bubbling", title: "Event Bubbling", slug: "events-bubbling", readTime: "6 min" },
      { id: "events-capturing", title: "Event Capturing", slug: "events-capturing", readTime: "5 min" },
      { id: "events-delegation", title: "Event Delegation", slug: "events-delegation", readTime: "7 min" }
    ]
  },
  {
    id: "part-21",
    partNumber: 21,
    title: "Browser and Window APIs",
    icon: "🖥️",
    topics: [
      { id: "bom-window", title: "Window Object", slug: "bom-window", readTime: "6 min" },
      { id: "bom-screen", title: "Screen", slug: "bom-screen", readTime: "5 min" },
      { id: "bom-location", title: "Location", slug: "bom-location", readTime: "6 min" },
      { id: "bom-history", title: "History", slug: "bom-history", readTime: "5 min" },
      { id: "bom-navigator", title: "Navigator", slug: "bom-navigator", readTime: "6 min" },
      { id: "bom-alert", title: "Alert", slug: "bom-alert", readTime: "4 min" },
      { id: "bom-confirm", title: "Confirm", slug: "bom-confirm", readTime: "5 min" },
      { id: "bom-prompt", title: "Prompt", slug: "bom-prompt", readTime: "5 min" },
      { id: "bom-cookies", title: "Cookies", slug: "bom-cookies", readTime: "7 min" }
    ]
  },
  {
    id: "part-22",
    partNumber: 22,
    title: "Fetch API and JSON",
    icon: "🌐",
    topics: [
      { id: "api-intro", title: "API Introduction", slug: "api-intro", readTime: "6 min" },
      { id: "api-fetch", title: "Fetch API", slug: "api-fetch", readTime: "8 min" },
      { id: "api-http-methods", title: "HTTP Methods", slug: "api-http-methods", readTime: "6 min" },
      { id: "api-get", title: "GET Requests", slug: "api-get", readTime: "6 min" },
      { id: "api-post", title: "POST Requests", slug: "api-post", readTime: "7 min" },
      { id: "api-put", title: "PUT Requests", slug: "api-put", readTime: "6 min" },
      { id: "api-patch", title: "PATCH Requests", slug: "api-patch", readTime: "5 min" },
      { id: "api-delete", title: "DELETE Requests", slug: "api-delete", readTime: "5 min" },
      { id: "api-headers", title: "Request Headers", slug: "api-headers", readTime: "6 min" },
      { id: "api-response", title: "Response Handling", slug: "api-response", readTime: "6 min" },
      { id: "json-intro", title: "JSON Introduction", slug: "json-intro", readTime: "5 min" },
      { id: "json-syntax", title: "JSON Syntax", slug: "json-syntax", readTime: "5 min" },
      { id: "json-types", title: "JSON Data Types", slug: "json-types", readTime: "5 min" },
      { id: "json-parse", title: "JSON Parse", slug: "json-parse", readTime: "6 min" },
      { id: "json-stringify", title: "JSON Stringify", slug: "json-stringify", readTime: "6 min" },
      { id: "json-fetch", title: "JSON Fetch", slug: "json-fetch", readTime: "6 min" },
      { id: "json-vs-xml", title: "JSON vs XML", slug: "json-vs-xml", readTime: "5 min" }
    ]
  },
  {
    id: "part-23",
    partNumber: 23,
    title: "Other Web APIs",
    icon: "📡",
    topics: [
      { id: "webapi-geolocation", title: "Geolocation API", slug: "webapi-geolocation", readTime: "6 min" },
      { id: "webapi-pointer", title: "Pointer Events API", slug: "webapi-pointer", readTime: "5 min" },
      { id: "webapi-storage", title: "Web Storage API", slug: "webapi-storage", readTime: "6 min" },
      { id: "webapi-localstorage", title: "Local Storage", slug: "webapi-localstorage", readTime: "7 min" },
      { id: "webapi-sessionstorage", title: "Session Storage", slug: "webapi-sessionstorage", readTime: "6 min" },
      { id: "webapi-validation", title: "Validation API", slug: "webapi-validation", readTime: "6 min" },
      { id: "webapi-workers", title: "Web Workers", slug: "webapi-workers", readTime: "7 min" }
    ]
  },
  {
    id: "part-24",
    partNumber: 24,
    title: "Advanced JavaScript",
    icon: "🚀",
    topics: [
      { id: "adv-functions", title: "Advanced Functions", slug: "adv-functions", readTime: "7 min" },
      { id: "adv-callbacks", title: "Callback Functions", slug: "adv-callbacks", readTime: "7 min" },
      { id: "adv-this", title: "Function this", slug: "adv-this", readTime: "7 min" },
      { id: "adv-call", title: "Call()", slug: "adv-call", readTime: "6 min" },
      { id: "adv-apply", title: "Apply()", slug: "adv-apply", readTime: "6 min" },
      { id: "adv-bind", title: "Bind()", slug: "adv-bind", readTime: "6 min" },
      { id: "adv-iife", title: "IIFE", slug: "adv-iife", readTime: "5 min" },
      { id: "adv-closures", title: "Closures", slug: "adv-closures", readTime: "8 min" },
      { id: "adv-object-definitions", title: "Object Definitions", slug: "adv-object-definitions", readTime: "6 min" },
      { id: "adv-getters-setters", title: "Getters and Setters", slug: "adv-getters-setters", readTime: "6 min" },
      { id: "adv-object-management", title: "Object Management", slug: "adv-object-management", readTime: "6 min" },
      { id: "adv-object-protection", title: "Object Protection", slug: "adv-object-protection", readTime: "6 min" },
      { id: "adv-prototypes", title: "Prototypes", slug: "adv-prototypes", readTime: "8 min" },
      { id: "adv-classes", title: "Classes", slug: "adv-classes", readTime: "7 min" },
      { id: "adv-class-inheritance", title: "Class Inheritance", slug: "adv-class-inheritance", readTime: "7 min" },
      { id: "adv-static-methods", title: "Static Methods", slug: "adv-static-methods", readTime: "5 min" },
      { id: "adv-async-js", title: "Asynchronous JavaScript", slug: "adv-async-js", readTime: "7 min" },
      { id: "adv-promises", title: "Promises", slug: "adv-promises", readTime: "8 min" },
      { id: "adv-async-await", title: "Async and Await", slug: "adv-async-await", readTime: "8 min" },
      { id: "adv-event-loop", title: "Event Loop", slug: "adv-event-loop", readTime: "8 min" },
      { id: "adv-promise-all", title: "Promise.all()", slug: "adv-promise-all", readTime: "6 min" },
      { id: "adv-promise-race", title: "Promise.race()", slug: "adv-promise-race", readTime: "5 min" },
      { id: "adv-abort-controller", title: "AbortController", slug: "adv-abort-controller", readTime: "6 min" },
      { id: "adv-modules", title: "Modules", slug: "adv-modules", readTime: "6 min" },
      { id: "adv-export", title: "Export", slug: "adv-export", readTime: "5 min" },
      { id: "adv-import", title: "Import", slug: "adv-import", readTime: "5 min" },
      { id: "adv-dynamic-import", title: "Dynamic Import", slug: "adv-dynamic-import", readTime: "6 min" },
      { id: "adv-proxy", title: "Proxy", slug: "adv-proxy", readTime: "7 min" },
      { id: "adv-reflect", title: "Reflect", slug: "adv-reflect", readTime: "6 min" },
      { id: "adv-typed-arrays", title: "Typed Arrays", slug: "adv-typed-arrays", readTime: "6 min" },
      { id: "adv-arraybuffer", title: "ArrayBuffer", slug: "adv-arraybuffer", readTime: "6 min" },
      { id: "adv-dataview", title: "DataView", slug: "adv-dataview", readTime: "6 min" },
      { id: "adv-atomics", title: "Atomics", slug: "adv-atomics", readTime: "6 min" }
    ]
  },
  {
    id: "part-25",
    partNumber: 25,
    title: "AJAX and jQuery",
    icon: "🔌",
    topics: [
      { id: "ajax-intro", title: "AJAX Introduction", slug: "ajax-intro", readTime: "6 min" },
      { id: "ajax-xmlhttprequest", title: "XMLHttpRequest", slug: "ajax-xmlhttprequest", readTime: "7 min" },
      { id: "ajax-requests", title: "AJAX Requests", slug: "ajax-requests", readTime: "6 min" },
      { id: "ajax-responses", title: "AJAX Responses", slug: "ajax-responses", readTime: "6 min" },
      { id: "ajax-xml", title: "AJAX with XML", slug: "ajax-xml", readTime: "5 min" },
      { id: "ajax-php", title: "AJAX with PHP", slug: "ajax-php", readTime: "6 min" },
      { id: "ajax-database", title: "AJAX Database", slug: "ajax-database", readTime: "6 min" },
      { id: "jquery-intro", title: "jQuery Introduction", slug: "jquery-intro", readTime: "6 min" },
      { id: "jquery-selectors", title: "jQuery Selectors", slug: "jquery-selectors", readTime: "6 min" },
      { id: "jquery-html", title: "jQuery HTML", slug: "jquery-html", readTime: "6 min" },
      { id: "jquery-css", title: "jQuery CSS", slug: "jquery-css", readTime: "5 min" },
      { id: "jquery-dom", title: "jQuery DOM", slug: "jquery-dom", readTime: "6 min" },
      { id: "ajax-jsonp", title: "JSONP", slug: "ajax-jsonp", readTime: "5 min" }
    ]
  },
  {
    id: "part-26",
    partNumber: 26,
    title: "JavaScript Projects",
    icon: "💡",
    topics: [
      { id: "proj-counter", title: "Counter Application", slug: "proj-counter", readTime: "10 min", isProject: true },
      { id: "proj-clock", title: "Digital Clock", slug: "proj-clock", readTime: "10 min", isProject: true },
      { id: "proj-calculator", title: "Calculator", slug: "proj-calculator", readTime: "12 min", isProject: true },
      { id: "proj-todo", title: "To-Do List", slug: "proj-todo", readTime: "15 min", isProject: true },
      { id: "proj-form-validation", title: "Form Validation", slug: "proj-form-validation", readTime: "12 min", isProject: true },
      { id: "proj-modal", title: "Modal Popup", slug: "proj-modal", readTime: "10 min", isProject: true },
      { id: "proj-quiz", title: "Quiz Application", slug: "proj-quiz", readTime: "15 min", isProject: true },
      { id: "proj-expense", title: "Expense Tracker", slug: "proj-expense", readTime: "18 min", isProject: true },
      { id: "proj-weather", title: "Weather Application using Fetch API", slug: "proj-weather", readTime: "18 min", isProject: true },
      { id: "proj-student", title: "Student Management System", slug: "proj-student", readTime: "20 min", isProject: true }
    ]
  }
];

// Flat indexed array of all topics with chapter references
const FLAT_TOPICS = [];
SYLLABUS_DATA.forEach(part => {
  part.topics.forEach((topic, idx) => {
    FLAT_TOPICS.push({
      ...topic,
      partId: part.id,
      partNumber: part.partNumber,
      partTitle: part.title,
      partIcon: part.icon,
      indexInPart: idx
    });
  });
});

// Lookup map for instant O(1) access by id
const TOPIC_BY_ID = {};
FLAT_TOPICS.forEach((t, i) => {
  TOPIC_BY_ID[t.id] = { ...t, flatIndex: i };
});

if (typeof window !== 'undefined') {
  window.SYLLABUS_DATA = SYLLABUS_DATA;
  window.FLAT_TOPICS = FLAT_TOPICS;
  window.TOPIC_BY_ID = TOPIC_BY_ID;
}

