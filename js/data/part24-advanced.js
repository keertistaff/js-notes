/* ==========================================================================
   PART 24: Advanced JavaScript - Comprehensive Topics Data (33 Topics)
   ========================================================================== */

window.TOPIC_DATA_STORE = window.TOPIC_DATA_STORE || {};

function createAdvancedTopic(id, title, concept, codeSnippet, practicalTitle, practicalCode, mistake, mistakeFix, mistakeExp, intQ, intA) {
  return {
    id: id,
    title: title,
    lead: `Master ${title} in modern JavaScript, architectural patterns, and production engineering best practices.`,
    intro: `${title} is a core advanced JavaScript concept essential for senior front-end engineers, framework developers, and high-performance computing.`,
    definition: `In JavaScript, ${title} refers to ${concept}.`,
    whyUse: `Enables robust architecture, modular state management, performance optimization, and deep mastery of the JavaScript runtime.`,
    syntax: `// Syntax demonstration for ${title}\n${codeSnippet}`,
    syntaxExplanation: `Syntactic structure demonstrates ${title} usage, execution context, and return mechanics.`,
    simpleExample: codeSnippet,
    expectedOutput: `Executed ${title} successfully.`,
    realLifeExample: {
      domain: "Business Applications",
      title: `${title} Enterprise Workflow Scenario`,
      scenario: `Applying ${title} to enterprise payroll, banking, or student systems.`,
      code: `console.log("Enterprise implementation of ${title} active.");`,
      output: `Enterprise implementation of ${title} active.`
    },
    practicalExample: {
      title: practicalTitle,
      code: practicalCode,
      output: `Demonstrated ${practicalTitle}`,
      note: `Provides real-world implementation insights.`
    },
    commonMistakes: [
      {
        mistake: mistake,
        wrongCode: `// Anti-pattern\nconsole.log("Anti-pattern for ${title}");`,
        correctCode: mistakeFix,
        explanation: mistakeExp
      }
    ],
    importantPoints: [
      `Deeply integrated into modern ECMAScript engines (V8, SpiderMonkey).`,
      `Critical for clean code separation and architectural modularity.`,
      `Frequently tested in advanced full-stack technical interviews.`
    ],
    interviewQuestions: [
      {
        question: intQ,
        answer: intA
      }
    ],
    practiceExercises: [
      {
        problem: `Implement a minimal working example demonstrating ${title}.`,
        hint: `Review the syntax block and apply functional pattern.`,
        solution: codeSnippet
      }
    ]
  };
}

// 1. Advanced Functions
window.TOPIC_DATA_STORE["adv-functions"] = createAdvancedTopic(
  "adv-functions",
  "Advanced Functions",
  "higher-order functions, currying, partial application, and function composition",
  `const multiply = a => b => a * b;\nconst double = multiply(2);\nconsole.log(double(5)); // 10`,
  "Function Currying for Pricing",
  `const applyTax = taxRate => amount => amount + (amount * taxRate);\nconst applyGST = applyTax(0.18);\nconsole.log("Total: Rs.", applyGST(1000));`,
  "Creating deeply nested unreadable curried pipelines",
  `// Use composed pipes or utility functions like lodash flow`,
  "Excessive currying can obscure simple mathematical intent. Keep functions transparent.",
  "What is Function Currying and why is it useful?",
  "Currying transforms a function with multiple arguments into a sequence of nesting functions each taking a single argument. It facilitates function composition and parameter reuse."
);

// 2. Callback Functions
window.TOPIC_DATA_STORE["adv-callbacks"] = createAdvancedTopic(
  "adv-callbacks",
  "Callback Functions",
  "functions passed as arguments to other functions to be invoked later",
  `function processData(data, callback) {\n  let res = data * 2;\n  callback(res);\n}\nprocessData(5, val => console.log("Result:", val));`,
  "Asynchronous File Processing Callback",
  `function simulateAsyncJob(task, onDone) {\n  setTimeout(() => onDone(task + " Completed"), 100);\n}\nsimulateAsyncJob("Backup", console.log);`,
  "Callback Hell (Pyramid of Doom)",
  `// Use Promises or Async/Await to avoid deeply nested callbacks`,
  "Nesting multiple callbacks creates unmaintainable, error-prone pyramid code.",
  "What is Callback Hell and how do Promises solve it?",
  "Callback Hell refers to deeply nested callback functions handling asynchronous operations. Promises solve this by flattening execution into readable linear `.then()` chains or `async/await` blocks."
);

// 3. Function this
window.TOPIC_DATA_STORE["adv-this"] = createAdvancedTopic(
  "adv-this",
  "Function this",
  "dynamic context binding determined at runtime by invocation patterns",
  `const user = {\n  name: "Rohan",\n  greet() { return "Hello " + this.name; }\n};\nconsole.log(user.greet());`,
  "Maintaining Context in Asynchronous Handlers",
  `class ButtonHandler {\n  constructor() { this.clicks = 0; }\n  handleClick = () => { this.clicks++; };\n}`,
  "Using arrow function as object methods that require dynamic this",
  `const user = { name: "A", greet() { return this.name; } }; // Method shorthand`,
  "Arrow functions do not bind this, causing method lookups to fail.",
  "How does this behave differently in arrow functions versus standard functions?",
  "Standard functions bind `this` dynamically based on how the function is invoked. Arrow functions do not bind `this` at all; they retain the `this` value of the enclosing lexical execution context."
);

// 4. Call()
window.TOPIC_DATA_STORE["adv-call"] = createAdvancedTopic(
  "adv-call",
  "Call()",
  "a method on Function.prototype that invokes a function with a specified this context and individual arguments",
  `function introduce(greeting) {\n  return greeting + ", my name is " + this.name;\n}\nlet p = { name: "Ananya" };\nconsole.log(introduce.call(p, "Namaste"));`,
  "Borrowing Array Methods with call()",
  `let arrayLike = { 0: "A", 1: "B", length: 2 };\nlet realArr = Array.prototype.slice.call(arrayLike);\nconsole.log("Array:", realArr);`,
  "Passing an array of arguments to call instead of individual arguments",
  `introduce.call(p, arg1, arg2); // Individual args! (Or use apply for array)`,
  "call() expects individual comma-separated arguments, not an array.",
  "What is the difference between call() and apply()?",
  "`call()` and `apply()` both execute the function immediately with a specified `this` context. The difference is argument format: `call()` expects arguments listed individually (`fn.call(ctx, a, b)`), while `apply()` expects an array of arguments (`fn.apply(ctx, [a, b])`)."
);

// 5. Apply()
window.TOPIC_DATA_STORE["adv-apply"] = createAdvancedTopic(
  "adv-apply",
  "Apply()",
  "a method on Function.prototype that calls a function with a given this value and arguments provided as an array",
  `function sum(a, b, c) { return a + b + c; }\nlet numbers = [10, 20, 30];\nconsole.log(sum.apply(null, numbers)); // 60`,
  "Finding Maximum in Array with Math.max.apply",
  `let scores = [45, 92, 78, 99, 64];\nlet topScore = Math.max.apply(null, scores);\nconsole.log("Top Score:", topScore);`,
  "Passing non-array argument to apply",
  `fn.apply(ctx, [arg1, arg2]); // Second parameter MUST be an array or array-like`,
  "Passing primitives as second argument throws a TypeError.",
  "Why is the spread operator (...) often preferred over apply() in modern ES6?",
  "Spread syntax (`Math.max(...nums)`) achieves the same unpacking behavior as `Math.max.apply(null, nums)` with clearer syntax, without needing dummy `null` context."
);

// 6. Bind()
window.TOPIC_DATA_STORE["adv-bind"] = createAdvancedTopic(
  "adv-bind",
  "Bind()",
  "creating a new function that, when called, has its this keyword permanently set to the provided value",
  `const module = { x: 42, getX: function() { return this.x; } };\nconst bound = module.getX.bind(module);\nconsole.log(bound()); // 42`,
  "Preserving this in DOM Event Handlers",
  `class Menu {\n  constructor() { this.title = "App Menu"; }\n  onClick() { console.log(this.title); }\n}\nlet m = new Menu();\nlet handler = m.onClick.bind(m);`,
  "Expecting bind() to execute the function immediately",
  `let boundFn = fn.bind(ctx); // bind RETURNS a function, it does NOT execute!`,
  "bind() returns a new permanently bound function; call/apply invoke immediately.",
  "What is function currying using Function.prototype.bind()?",
  "`bind()` can pre-fill arguments (partial application): `const multiplyBy2 = multiply.bind(null, 2);`. Calling `multiplyBy2(5)` executes `multiply(2, 5)`."
);

// 7. IIFE
window.TOPIC_DATA_STORE["adv-iife"] = createAdvancedTopic(
  "adv-iife",
  "IIFE",
  "Immediately Invoked Function Expression executed as soon as it is defined",
  `(function() {\n  let privateToken = "XYZ-123";\n  console.log("IIFE executed immediately!");\n})();`,
  "Module Pattern Data Encapsulation",
  `const counterModule = (function() {\n  let count = 0;\n  return {\n    increment() { return ++count; },\n    get() { return count; }\n  };\n})();\nconsole.log(counterModule.increment());`,
  "Missing enclosing parentheses around the function",
  `(function() { /* ... */ })(); // Wrapping in () turns it into an expression`,
  "Without surrounding parentheses, the parser treats it as an invalid function declaration.",
  "What problems did IIFEs solve before ES6 Modules were introduced?",
  "Before ES6 modules and block-scoped `let`/`const`, all top-level variables were global (`window`). IIFEs created a private local function scope, preventing variable name collisions in web pages."
);

// 8. Closures
window.TOPIC_DATA_STORE["adv-closures"] = createAdvancedTopic(
  "adv-closures",
  "Closures",
  "the combination of a function bundled together with references to its lexical environment",
  `function makeCounter() {\n  let count = 0;\n  return function() {\n    return ++count;\n  };\n}\nlet c = makeCounter();\nconsole.log(c()); // 1\nconsole.log(c()); // 2`,
  "Private Data Encapsulation in Banking",
  `function createAccount(initialBalance) {\n  let balance = initialBalance;\n  return {\n    deposit(amount) { balance += amount; return balance; },\n    getBalance() { return balance; }\n  };\n}`,
  "Unintentional memory retention holding heavy objects in closures",
  `// Clear outer references when closures outlive their useful lifespan`,
  "Closures retain references to their outer variables, preventing garbage collection.",
  "What is a Closure in JavaScript and how does it work?",
  "A closure is formed when an inner function retains access to variables from its outer (enclosing) lexical scope, even after the outer function has finished executing and returned."
);

// 9. Object Definitions
window.TOPIC_DATA_STORE["adv-object-definitions"] = createAdvancedTopic(
  "adv-object-definitions",
  "Object Definitions",
  "creating and defining objects via Object.create, literals, constructors, and classes",
  `let proto = { greet() { return "Hello"; } };\nlet obj = Object.create(proto);\nconsole.log(obj.greet());`,
  "Clean Prototype Prototypal Inheritance with Object.create",
  `let animal = { eats: true };\nlet rabbit = Object.create(animal);\nrabbit.jumps = true;\nconsole.log("Eats:", rabbit.eats, "| Jumps:", rabbit.jumps);`,
  "Using Object.create(null) expecting standard object methods like toString",
  `let dict = Object.create(null); // Completely bare object, lacks toString/hasOwnProperty!`,
  "Passing null to Object.create creates a prototype-less dictionary.",
  "What is the advantage of creating an object with Object.create(null)?",
  "`Object.create(null)` creates an object with no prototype (`__proto__` is undefined). It is immune to prototype pollution attacks and ideal for pure hash dictionaries."
);

// 10. Getters and Setters
window.TOPIC_DATA_STORE["adv-getters-setters"] = createAdvancedTopic(
  "adv-getters-setters",
  "Getters and Setters",
  "accessor properties that execute functions when getting or setting a property value",
  `const user = {\n  firstName: "Aarav",\n  lastName: "Sharma",\n  get fullName() { return this.firstName + " " + this.lastName; },\n  set fullName(val) { [this.firstName, this.lastName] = val.split(" "); }\n};\nconsole.log(user.fullName);`,
  "Enforcing Numeric Range Validation on Property Set",
  `let product = {\n  _price: 0,\n  get price() { return "Rs." + this._price; },\n  set price(val) {\n    if (val < 0) throw new Error("Price cannot be negative");\n    this._price = val;\n  }\n};\nproduct.price = 450;`,
  "Infinite recursion by calling setter inside setter (this.prop = val instead of this._prop = val)",
  `set price(val) { this._price = val; } // Use backing property _price!`,
  "Assigning to the property name inside its setter triggers infinite recursive loops.",
  "What are the benefits of using getters and setters in JavaScript objects?",
  "They allow computed properties (e.g. `fullName`), encapsulate private backing properties, enable transparent data validation on assignment, and present clean property-access syntax."
);

// 11. Object Management
window.TOPIC_DATA_STORE["adv-object-management"] = createAdvancedTopic(
  "adv-object-management",
  "Object Management",
  "Object.defineProperty, Object.defineProperties, Object.assign, and property descriptors",
  `const obj = {};\nObject.defineProperty(obj, "id", {\n  value: 101,\n  writable: false,\n  enumerable: true\n});\nconsole.log(obj.id);`,
  "Creating Read-Only Immutable Configuration Constants",
  `let config = {};\nObject.defineProperty(config, "API_ENDPOINT", {\n  value: "https://api.hub.com",\n  writable: false,\n  configurable: false\n});`,
  "Forgetting that Object.defineProperty defaults writable/enumerable/configurable to false",
  `Object.defineProperty(o, "k", { value: 1, writable: true, enumerable: true });`,
  "Properties defined via defineProperty default to non-writable, non-enumerable, and non-configurable.",
  "What are the 4 attributes of a JavaScript property descriptor?",
  "`value` (actual data), `writable` (can be changed), `enumerable` (shows up in for...in and Object.keys), and `configurable` (can be deleted or reconfigured)."
);

// 12. Object Protection
window.TOPIC_DATA_STORE["adv-object-protection"] = createAdvancedTopic(
  "adv-object-protection",
  "Object Protection",
  "preventing mutations using Object.preventExtensions(), Object.seal(), and Object.freeze()",
  `const settings = Object.freeze({ theme: "dark" });\n// settings.theme = "light"; // Fails in strict mode!\nconsole.log(settings.theme);`,
  "Security Comparison: preventExtensions vs seal vs freeze",
  `let o1 = Object.preventExtensions({ a: 1 }); // Cannot add new keys\nlet o2 = Object.seal({ a: 1 }); // Cannot add/delete, can edit existing\nlet o3 = Object.freeze({ a: 1 }); // Completely immutable`,
  "Assuming Object.freeze() freezes nested objects deeply",
  `// Object.freeze is shallow! Nested objects remain mutable unless deep-frozen!`,
  "Object.freeze only freezes top-level keys; nested object references remain mutable.",
  "Compare Object.seal() and Object.freeze().",
  "`Object.seal()` prevents adding or deleting properties, but permits modifying existing property values. `Object.freeze()` prevents adding, deleting, AND modifying property values (making them read-only)."
);

// 13. Prototypes
window.TOPIC_DATA_STORE["adv-prototypes"] = createAdvancedTopic(
  "adv-prototypes",
  "Prototypes",
  "prototype-based inheritance where objects inherit properties and methods through [[Prototype]] links",
  `function Person(name) { this.name = name; }\nPerson.prototype.greet = function() { return "Hi " + this.name; };\nlet p = new Person("Deepa");\nconsole.log(p.greet());`,
  "Prototype Chain Lookup Architecture",
  `let animal = { eats: true };\nlet dog = Object.create(animal);\nconsole.log("Dog eats?", dog.eats); // Inherited via prototype chain!`,
  "Modifying native built-in prototypes like Array.prototype (Monkey Patching)",
  `// Never modify Object.prototype or Array.prototype in production apps`,
  "Monkey patching native prototypes leads to global naming collisions and bugs with third-party libraries.",
  "What is the Prototype Chain in JavaScript?",
  "Every object in JavaScript has an internal link to another object called its prototype. When accessing a property, JavaScript searches the object itself; if not found, it traverses up the prototype chain until it finds the property or reaches `null`."
);

// 14. Classes
window.TOPIC_DATA_STORE["adv-classes"] = createAdvancedTopic(
  "adv-classes",
  "Classes",
  "ES6 syntactic sugar over constructor functions and prototype-based inheritance",
  `class Student {\n  constructor(name, rollNo) {\n    this.name = name;\n    this.rollNo = rollNo;\n  }\n  getInfo() {\n    return this.name + " (" + this.rollNo + ")";\n  }\n}\nlet s = new Student("Aarav", "101");\nconsole.log(s.getInfo());`,
  "Private Class Fields with Hash (#) Syntax",
  `class BankAccount {\n  #balance = 0; // Truly private field\n  deposit(amt) { this.#balance += amt; }\n  getBalance() { return this.#balance; }\n}`,
  "Attempting to invoke a class without the new keyword",
  `let s = new Student("A"); // Classes MUST be called with new!`,
  "Classes throw a TypeError if called as standard functions without `new`.",
  "Are JavaScript classes fundamentally different from prototypes?",
  "No. JavaScript classes are syntactic sugar over the existing prototype-based inheritance system. Behind the scenes, methods defined in a class body are placed on the constructor's `prototype` object."
);

// 15. Class Inheritance
window.TOPIC_DATA_STORE["adv-class-inheritance"] = createAdvancedTopic(
  "adv-class-inheritance",
  "Class Inheritance",
  "subclassing with extends and super keywords to inherit state and behavior",
  `class Animal {\n  constructor(name) { this.name = name; }\n  speak() { return this.name + " makes a sound."; }\n}\nclass Dog extends Animal {\n  speak() { return this.name + " barks!"; }\n}\nconsole.log(new Dog("Rex").speak());`,
  "Method Overriding and Calling super.method()",
  `class Employee {\n  calculateBonus() { return 5000; }\n}\nclass Manager extends Employee {\n  calculateBonus() { return super.calculateBonus() + 10000; }\n}`,
  "Using this before calling super() in a subclass constructor",
  `class Sub extends Base { constructor() { super(); this.x = 1; } }`,
  "Subclasses must call `super()` before accessing `this`; doing otherwise throws a ReferenceError.",
  "What is the role of super() in a derived class constructor?",
  "`super()` invokes the parent class constructor, binding and initializing the `this` instance for the derived subclass."
);

// 16. Static Methods
window.TOPIC_DATA_STORE["adv-static-methods"] = createAdvancedTopic(
  "adv-static-methods",
  "Static Methods",
  "methods defined on the class itself rather than on instances of the class",
  `class MathUtil {\n  static add(a, b) { return a + b; }\n}\nconsole.log(MathUtil.add(10, 20)); // Called on class!`,
  "Static Factory Method Pattern",
  `class User {\n  constructor(name, role) { this.name = name; this.role = role; }\n  static createAdmin(name) { return new User(name, "Admin"); }\n}\nlet admin = User.createAdmin("Kunal");`,
  "Calling static methods on instance objects",
  `MathUtil.add(1, 2); // Correct! Do NOT call userInstance.add()`,
  "Static methods are attached to the constructor function, not instance prototypes.",
  "When should you designate a method as static?",
  "Designate a method as `static` when it does not depend on instance state (`this.property`) and functions as a utility or instance factory."
);

// 17. Asynchronous JavaScript
window.TOPIC_DATA_STORE["adv-async-js"] = createAdvancedTopic(
  "adv-async-js",
  "Asynchronous JavaScript",
  "non-blocking concurrency via Web APIs, task queues, and asynchronous notifications",
  `console.log("Start");\nsetTimeout(() => console.log("Async Task Done"), 0);\nconsole.log("End");`,
  "Non-Blocking I/O in Real-Time Applications",
  `console.log("1. User clicks download");\nconsole.log("2. Background worker processes file");\nconsole.log("3. User continues browsing");`,
  "Blocking the main JavaScript thread with synchronous loops",
  `// Offload intensive loops to Web Workers or async chunked batches`,
  "Long synchronous loops freeze browser rendering and input events.",
  "How does JavaScript achieve non-blocking concurrency while being single-threaded?",
  "Through the **Event Loop** and browser **Web APIs**. Long-running tasks (timers, network requests) run outside the main thread in the browser runtime. When finished, their callbacks are pushed to event queues and processed when the call stack clears."
);

// 18. Promises
window.TOPIC_DATA_STORE["adv-promises"] = createAdvancedTopic(
  "adv-promises",
  "Promises",
  "objects representing eventual completion or failure of an asynchronous operation",
  `const promise = new Promise((resolve, reject) => {\n  let ok = true;\n  ok ? resolve("Success!") : reject("Failed!");\n});\npromise.then(console.log).catch(console.error);`,
  "Promisifying setTimeout Utility",
  `const wait = ms => new Promise(res => setTimeout(res, ms));\nwait(500).then(() => console.log("Waited 500ms"));`,
  "Forgetting to return promises in .then() chains",
  `step1().then(res => { return step2(res); }).then(step3);`,
  "Omitting return statements breaks promise chaining.",
  "What are the 3 states of a JavaScript Promise?",
  "1. **Pending**: Initial state, neither fulfilled nor rejected.\n2. **Fulfilled**: Operation completed successfully (`resolve()`).\n3. **Rejected**: Operation failed (`reject()`)."
);

// 19. Async and Await
window.TOPIC_DATA_STORE["adv-async-await"] = createAdvancedTopic(
  "adv-async-await",
  "Async and Await",
  "syntactic sugar built on top of Promises enabling synchronous-looking asynchronous code",
  `async function fetchData() {\n  return "Data received";\n}\nfetchData().then(console.log);`,
  "Linear API Pipeline with Async/Await and Try/Catch",
  `async function getProfile(id) {\n  try {\n    let user = { id: id, name: "Aarav" };\n    return user;\n  } catch (err) {\n    console.error("Fetch failed:", err);\n  }\n}`,
  "Forgetting that async functions ALWAYS return a Promise",
  `let data = await myAsyncFunc(); // Must await return value!`,
  "An async function always wraps its return value in a Promise.",
  "Why is async/await preferred over raw Promise .then() chains?",
  "`async/await` flattens asynchronous code into linear, readable structures that mirror synchronous flow, allows using native `try...catch` blocks for error handling, and provides clean stack traces."
);

// 20. Event Loop
window.TOPIC_DATA_STORE["adv-event-loop"] = createAdvancedTopic(
  "adv-event-loop",
  "Event Loop",
  "the runtime mechanism coordinating the Call Stack, Microtask Queue, and Macrotask Queue",
  `console.log("1. Sync");\nsetTimeout(() => console.log("4. Macrotask (setTimeout)"), 0);\nPromise.resolve().then(() => console.log("3. Microtask (Promise)"));\nconsole.log("2. Sync");`,
  "Microtask vs Macrotask Execution Order",
  `// Sync code runs FIRST -> All Microtasks (Promises) -> NEXT Macrotask (setTimeout/setInterval)`,
  "Thinking setTimeout(fn, 0) executes before Promise.then()",
  `// Microtasks (Promises) ALWAYS execute before Macrotasks (setTimeout)`,
  "The engine drains the entire microtask queue before picking up the next macrotask.",
  "Explain the difference between Macrotask Queue and Microtask Queue.",
  "The **Microtask Queue** (Promise callbacks, `queueMicrotask`, `MutationObserver`) has higher priority. After each synchronous task, the event loop drains all microtasks before taking the next task from the **Macrotask Queue** (`setTimeout`, `setInterval`, I/O events)."
);

// 21. Promise.all()
window.TOPIC_DATA_STORE["adv-promise-all"] = createAdvancedTopic(
  "adv-promise-all",
  "Promise.all()",
  "executing multiple promises in parallel and resolving when all complete, or rejecting on first failure",
  `const p1 = Promise.resolve(10);\nconst p2 = Promise.resolve(20);\nPromise.all([p1, p2]).then(results => console.log("Results:", results));`,
  "Parallel Data Fetching for User Profile and Feed",
  `async function loadDashboard() {\n  let [user, posts] = await Promise.all([\n    Promise.resolve({ name: "Aarav" }),\n    Promise.resolve(["Post 1", "Post 2"])\n  ]);\n  console.log("Loaded dashboard in parallel.");\n}\nloadDashboard();`,
  "Using Promise.all when individual failures should be tolerated",
  `// Use Promise.allSettled if you want all results even if one fails!`,
  "Promise.all exhibits 'fail-fast' behavior: one rejection rejects the entire batch.",
  "What is the difference between Promise.all() and Promise.allSettled()?",
  "`Promise.all()` rejects immediately if *any single* promise rejects (fail-fast). `Promise.allSettled()` waits for *all* promises to finish, returning an array of descriptor objects with status `'fulfilled'` or `'rejected'`."
);

// 22. Promise.race()
window.TOPIC_DATA_STORE["adv-promise-race"] = createAdvancedTopic(
  "adv-promise-race",
  "Promise.race()",
  "resolving or rejecting as soon as the first promise in the iterable settles",
  `const fast = new Promise(res => setTimeout(() => res("Fast"), 100));\nconst slow = new Promise(res => setTimeout(() => res("Slow"), 500));\nPromise.race([fast, slow]).then(console.log); // "Fast"`,
  "Request Timeout Pattern with Promise.race",
  `function timeout(ms) {\n  return new Promise((_, rej) => setTimeout(() => rej(new Error("Timeout")), ms));\n}\n// Promise.race([fetchData(), timeout(5000)])`,
  "Expecting Promise.race to wait for multiple fast promises",
  `// Promise.race settles on the VERY FIRST settled promise`,
  "Race ignores all subsequent promises after the first settles.",
  "How can Promise.race be used to implement network timeouts?",
  "By racing an asynchronous `fetch()` promise against a timer promise that rejects after $X$ seconds (`new Promise((_, rej) => setTimeout(rej, ms))`). Whichever finishes first wins."
);

// 23. AbortController
window.TOPIC_DATA_STORE["adv-abort-controller"] = createAdvancedTopic(
  "adv-abort-controller",
  "AbortController",
  "a controller object that allows you to abort one or more Web requests as and when desired",
  `const controller = new AbortController();\nconst signal = controller.signal;\n// fetch(url, { signal });\ncontroller.abort(); // Cancels the request!`,
  "Canceling Stale Autocomplete Network Requests",
  `let currentController = null;\nfunction onSearchTyping(term) {\n  if (currentController) currentController.abort();\n  currentController = new AbortController();\n  console.log("Fetching for:", term);\n}`,
  "Reusing an already-aborted signal for a new request",
  `// Instantiate a fresh new AbortController for every new request`,
  "An aborted controller signal remains aborted permanently.",
  "What is AbortController and how does it integrate with Fetch API?",
  "`AbortController` creates an abort signal (`controller.signal`) passed into `fetch(url, { signal })`. Calling `controller.abort()` cancels the active HTTP request immediately, rejecting the fetch promise with an `AbortError`."
);

// 24. Modules
window.TOPIC_DATA_STORE["adv-modules"] = createAdvancedTopic(
  "adv-modules",
  "Modules",
  "ES Modules (ESM) providing official standard modular code encapsulation and dependency management",
  `// Exporting & Importing across files\n// export const PI = 3.14;\n// import { PI } from './math.js';`,
  "Modular Application Architecture",
  `console.log("ES Modules provide strict file-level scope and asynchronous loading.");`,
  "Omitting type='module' in HTML script tags",
  `<script type="module" src="app.js"></script>`,
  "Without `type='module'`, browsers treat files as classic global scripts.",
  "What are the key characteristics of ES Modules?",
  "ES Modules are strictly scoped per file, execute in strict mode by default, support static analysis and tree-shaking, load asynchronously, and use `import`/`export` syntax."
);

// 25. Export
window.TOPIC_DATA_STORE["adv-export"] = createAdvancedTopic(
  "adv-export",
  "Export",
  "exporting live bindings of functions, objects, or primitives from a module",
  `export const config = { port: 3000 };\nexport default function main() {}\nexport { fnA, fnB };`,
  "Named vs Default Exports",
  `console.log("A module can have multiple named exports, but only ONE default export.");`,
  "Having multiple default exports in a single file",
  `// export default class A {}; // Only 1 default allowed per file!`,
  "A module cannot have more than one default export.",
  "What is the difference between Named Exports and Default Exports?",
  "**Named exports** export multiple items with specific identifiers (`export { a, b }`) and must be imported using exact matching names (`import { a, b }`). A **default export** (`export default x`) exports a single fallback value per file, importable with any custom name without curly braces."
);

// 26. Import
window.TOPIC_DATA_STORE["adv-import"] = createAdvancedTopic(
  "adv-import",
  "Import",
  "importing live bindings which are exported by another module",
  `// import defaultItem, { namedA, namedB as alias } from './module.js';`,
  "Namespace Import with wildcard * as",
  `// import * as MathUtils from './math.js';\n// MathUtils.add(1, 2);`,
  "Attempting to modify imported variables",
  `// Imported bindings are read-only!`,
  "Imported live bindings cannot be reassigned directly in the importing module.",
  "Are imports in ES Modules live bindings or static copies?",
  "Imports are **live bindings**. If the exporting module mutates an exported variable, the importing module observes the updated value immediately, unlike CommonJS which exports static copies."
);

// 27. Dynamic Import
window.TOPIC_DATA_STORE["adv-dynamic-import"] = createAdvancedTopic(
  "adv-dynamic-import",
  "Dynamic Import",
  "loading modules asynchronously on-demand using the function-like import() expression",
  `async function loadAnalytics() {\n  // const module = await import('./analytics.js');\n  // module.track();\n}`,
  "Code Splitting and Lazy Loading Heavy Widgets",
  `function openChart() {\n  import("./chart.js").then(m => m.render());\n}`,
  "Using static import statements inside if-blocks",
  `if (cond) { import("./mod.js"); } // Valid with dynamic import()! Static import fails!`,
  "Static `import` statements can only exist at the top-level. Use dynamic `import()` inside blocks.",
  "What is Dynamic Import and why is it essential for web performance?",
  "`import(path)` returns a Promise resolving to the module namespace. It enables **code splitting** and lazy-loading, downloading heavy bundles only when specific user interactions or routes demand them."
);

// 28. Proxy
window.TOPIC_DATA_STORE["adv-proxy"] = createAdvancedTopic(
  "adv-proxy",
  "Proxy",
  "creating an object that wraps another object and intercepts fundamental operations (get, set, delete)",
  `const target = { name: "Rohan" };\nconst proxy = new Proxy(target, {\n  get(obj, prop) {\n    return prop in obj ? obj[prop] : "Default";\n  }\n});\nconsole.log(proxy.name);\nconsole.log(proxy.age); // "Default"`,
  "Automatic Validation on Property Assignment with Proxy",
  `let validator = new Proxy({}, {\n  set(obj, prop, val) {\n    if (prop === "age" && typeof val !== "number") throw new TypeError("Age must be number");\n    obj[prop] = val;\n    return true;\n  }\n});\nvalidator.age = 25;`,
  "Forgetting to return true from the set trap",
  `set(target, prop, val) { target[prop] = val; return true; }`,
  "In strict mode, failing to return `true` from a Proxy `set` trap throws a TypeError.",
  "How does Vue 3 utilize JavaScript Proxy for reactivity?",
  "Vue 3 wraps state objects in a `Proxy`. The `get` trap intercepts property reads to register reactive dependencies (subscribers), while the `set` trap intercepts mutations to automatically trigger UI re-renders."
);

// 29. Reflect
window.TOPIC_DATA_STORE["adv-reflect"] = createAdvancedTopic(
  "adv-reflect",
  "Reflect",
  "a built-in object that provides methods for interceptable JavaScript operations",
  `const obj = { x: 10 };\nconsole.log(Reflect.get(obj, "x")); // 10\nReflect.set(obj, "y", 20);\nconsole.log(obj.y); // 20`,
  "Forwarding Default Operations Inside Proxy Traps",
  `const proxy = new Proxy(target, {\n  get(target, prop, receiver) {\n    console.log("Accessing:", prop);\n    return Reflect.get(target, prop, receiver); // Clean delegation!\n  }\n});`,
  "Attempting to instantiate Reflect with new Reflect()",
  `Reflect.get(o, "k"); // Reflect is a static namespace object, not a constructor!`,
  "Reflect cannot be instantiated.",
  "Why should Reflect methods be used inside Proxy traps?",
  "`Reflect` methods share the exact same signature and default behaviors as Proxy traps. Calling `Reflect.get(target, prop, receiver)` ensures correct behavior, especially regarding `this` context binding with prototypes."
);

// 30. Typed Arrays
window.TOPIC_DATA_STORE["adv-typed-arrays"] = createAdvancedTopic(
  "adv-typed-arrays",
  "Typed Arrays",
  "array-like objects providing mechanisms for accessing raw binary data in memory buffers",
  `const u8 = new Uint8Array([10, 20, 30, 255]);\nconsole.log("Uint8Array:", u8);\nconsole.log("Byte Length:", u8.byteLength);`,
  "WebGL Shader Vertex Buffers and Audio Processing",
  `let floatBuffer = new Float32Array([0.0, 0.5, 1.0]);\nconsole.log("32-bit Float coordinates:", floatBuffer);`,
  "Attempting to store floating point values in integer typed arrays",
  `let u8 = new Uint8Array(2); u8[0] = 3.99; // Truncated to 3!`,
  "Integer typed arrays truncate fractional values.",
  "What is the difference between standard Arrays and Typed Arrays?",
  "Standard Arrays are dynamic, can hold mixed types, and allow sparse indices. Typed Arrays (`Int8Array`, `Float32Array`) have fixed length, store homogeneous binary numbers directly in raw memory, and offer blazing-fast performance for WebGL and WebAssembly."
);

// 31. ArrayBuffer
window.TOPIC_DATA_STORE["adv-arraybuffer"] = createAdvancedTopic(
  "adv-arraybuffer",
  "ArrayBuffer",
  "a generic, fixed-length raw binary data buffer",
  `const buffer = new ArrayBuffer(16); // 16 bytes allocated in memory\nconsole.log("Byte Length:", buffer.byteLength);`,
  "Allocating Binary Network Packet Memory",
  `let buffer = new ArrayBuffer(8);\nlet view = new Int32Array(buffer);\nview[0] = 42;`,
  "Attempting to read or write directly to an ArrayBuffer without a View",
  `// ArrayBuffer cannot be read directly! You must wrap it in a TypedArray or DataView!`,
  "An ArrayBuffer is raw memory; views are required to interpret byte layout.",
  "What is an ArrayBuffer in JavaScript?",
  "An `ArrayBuffer` is a low-level object representing a fixed-length chunk of raw binary memory. It cannot be manipulated directly; you must create a 'view' (`TypedArray` or `DataView`) to read and write bytes."
);

// 32. DataView
window.TOPIC_DATA_STORE["adv-dataview"] = createAdvancedTopic(
  "adv-dataview",
  "DataView",
  "a low-level interface for reading and writing multiple number types in an ArrayBuffer regardless of platform endianness",
  `const buffer = new ArrayBuffer(8);\nconst view = new DataView(buffer);\nview.setInt16(0, 42, true); // Little endian\nconsole.log(view.getInt16(0, true));`,
  "Parsing Custom Binary Protocols and File Headers",
  `let buf = new ArrayBuffer(4);\nlet dv = new DataView(buf);\ndv.setUint8(0, 0xFF); // Byte 0\ndv.setUint8(1, 0xD8); // Byte 1 (JPEG header check)`,
  "Mixing big-endian and little-endian flags during read/write",
  `view.getInt16(0, isLittleEndian); // Keep endianness flag consistent!`,
  "Mismatching endianness corrupts decoded integer values.",
  "What problem does DataView solve that TypedArrays cannot?",
  "`TypedArrays` adopt the native byte order (endianness) of the host CPU architecture. `DataView` provides explicit control over endianness (Big-Endian vs Little-Endian) for every read/write operation, essential for network protocol parsing."
);

// 33. Atomics
window.TOPIC_DATA_STORE["adv-atomics"] = createAdvancedTopic(
  "adv-atomics",
  "Atomics",
  "providing atomic operations as static methods on shared memory buffers (SharedArrayBuffer)",
  `const sab = new SharedArrayBuffer(1024);\nconst ta = new Int32Array(sab);\nAtomics.store(ta, 0, 100);\nconsole.log("Atomic value:", Atomics.load(ta, 0));`,
  "Thread-Safe Counter Between Web Workers",
  `// Atomics.add(ta, 0, 1) guarantees thread-safe increment across multi-threaded workers`,
  "Using standard ++ operators on SharedArrayBuffer causing race conditions",
  `Atomics.add(ta, index, 1); // Thread-safe atomic update`,
  "Non-atomic increments in multi-threaded shared memory cause data loss and race conditions.",
  "Why are Atomics necessary when using SharedArrayBuffer?",
  "When multiple Web Workers access the same `SharedArrayBuffer` concurrently, simultaneous writes lead to race conditions. `Atomics` methods (`add`, `sub`, `wait`, `notify`) guarantee that operations complete indivisibly without interruption by other threads."
);
