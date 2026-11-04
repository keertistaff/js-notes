/* ==========================================================================
   PART 13 & 14: Sets, Maps & Iterations - Comprehensive Topics Data
   ========================================================================== */

window.TOPIC_DATA_STORE = window.TOPIC_DATA_STORE || {};

// PART 13: SETS AND MAPS
window.TOPIC_DATA_STORE["sets-intro"] = {
  id: "sets-intro",
  title: "Sets",
  lead: "Master unique value collections, Set creation, insertion order, and deduplicating arrays in JavaScript.",
  intro: "A JavaScript Set is a collection of unique values. Each value can only occur once in a Set. A Set can hold any value of any data type.",
  definition: "A built-in keyed collection of unique values where duplicate insertions are ignored and elements are iterated in insertion order.",
  whyUse: "Eliminating duplicate records, maintaining membership lists, fast $O(1)$ presence testing, and mathematical set operations.",
  syntax: `const mySet = new Set();
mySet.add("A");
mySet.add("B");
mySet.add("A"); // Duplicate ignored!`,
  syntaxExplanation: "Instantiated with `new Set(iterable)`. The `.size` property reports unique item count. `NaN` and `undefined` can also be stored.",
  simpleExample: `let numbers = new Set([1, 2, 2, 3, 4, 4, 5]);
console.log("Set unique items:", [...numbers]);
console.log("Set size:", numbers.size);`,
  expectedOutput: `Set unique items: [ 1, 2, 3, 4, 5 ]\nSet size: 5`,
  realLifeExample: {
    domain: "Attendance Management",
    title: "Unique Daily Attendees Tracker",
    scenario: "Logging employee badge swipes while automatically ignoring duplicate punches throughout the day.",
    code: `let attendeeSet = new Set();

// Employee punches in multiple times
attendeeSet.add("EMP-101");
attendeeSet.add("EMP-102");
attendeeSet.add("EMP-101"); // Duplicate punch
attendeeSet.add("EMP-103");
attendeeSet.add("EMP-102"); // Duplicate punch

console.log("Total Unique Employees Present: " + attendeeSet.size);
attendeeSet.forEach(emp => console.log(" - Verified: " + emp));`,
    output: `Total Unique Employees Present: 3\n - Verified: EMP-101\n - Verified: EMP-102\n - Verified: EMP-103`
  },
  practicalExample: {
    title: "One-Line Array Deduplication",
    code: `let tags = ["js", "react", "css", "js", "html", "react"];
let uniqueTags = [...new Set(tags)];
console.log("Clean Tags:", uniqueTags);`,
    output: `Clean Tags: [ 'js', 'react', 'css', 'html' ]`,
    note: "`[...new Set(array)]` is the modern idiomatic pattern for deduplicating arrays."
  },
  commonMistakes: [
    {
      mistake: "Using set[0] to access elements by index",
      wrongCode: `let mySet = new Set(["a", "b"]);
console.log(mySet[0]); // undefined! Sets are NOT index-accessed!`,
      correctCode: `let mySet = new Set(["a", "b"]);
console.log(mySet.has("a")); // Use .has() or [...mySet][0]`,
      explanation: "Sets do not have numerical index keys; use `.has(value)` or iterate with `for...of`."
    }
  ],
  importantPoints: [
    "Elements in a Set are unique; duplicate additions are silently ignored.",
    "Preserves insertion order during iteration.",
    "Lookup time with `.has()` is average $O(1)$, much faster than `arr.includes()` ($O(n)$)."
  ],
  interviewQuestions: [
    {
      question: "Why is Set.prototype.has() faster than Array.prototype.includes() for large collections?",
      answer: "Sets are implemented internally using hash tables, giving `.has()` an average $O(1)$ constant time complexity. Arrays require scanning elements sequentially from start to finish, yielding $O(n)$ linear time complexity."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a function `uniqueWords(sentence)` that takes a sentence and returns an array of unique lowercase words.",
      hint: "sentence.toLowerCase().split(' ') into a new Set().",
      solution: `function uniqueWords(sentence) {
  return [...new Set(sentence.toLowerCase().split(" "))];
}
console.log(uniqueWords("The cat and the dog and the cat")); // ['the', 'cat', 'and', 'dog']`
    }
  ]
};

window.TOPIC_DATA_STORE["sets-methods"] = {
  id: "sets-methods",
  title: "Set Methods",
  lead: "Master add(), delete(), has(), clear(), entries(), values(), and keys() in Set.",
  intro: "JavaScript Sets provide straightforward methods to mutate, query, and iterate unique entries.",
  definition: "Instance methods on `Set.prototype` for collection lifecycle management and item membership testing.",
  whyUse: "Managing blacklist IPs, filtering visited URLs, maintaining active connection IDs, and real-time tags.",
  syntax: `set.add(val);    // Adds element (returns set)
set.delete(val); // Removes element (returns boolean)
set.has(val);    // Checks presence (returns boolean)
set.clear();     // Removes all elements
set.size;        // Returns count`,
  syntaxExplanation: "Methods like `add()` return the Set itself, allowing fluent chaining: `set.add(1).add(2)`.",
  simpleExample: `let roles = new Set(["admin", "editor"]);
roles.add("viewer");
console.log("Has editor?", roles.has("editor"));
roles.delete("editor");
console.log("Has editor after delete?", roles.has("editor"));`,
  expectedOutput: `Has editor? true\nHas editor after delete? false`,
  realLifeExample: {
    domain: "E-commerce",
    title: "Customer Wishlist Real-Time Toggle",
    scenario: "Adding and removing items from a customer's product wishlist with instant membership verification.",
    code: `let wishlist = new Set();

function toggleWishlist(productId) {
  if (wishlist.has(productId)) {
    wishlist.delete(productId);
    console.log("Removed " + productId + " from wishlist.");
  } else {
    wishlist.add(productId);
    console.log("Added " + productId + " to wishlist.");
  }
}

toggleWishlist("PROD-101");
toggleWishlist("PROD-202");
toggleWishlist("PROD-101"); // Removes it
console.log("Current Wishlist Items:", [...wishlist]);`,
    output: `Added PROD-101 to wishlist.\nAdded PROD-202 to wishlist.\nRemoved PROD-101 from wishlist.\nCurrent Wishlist Items: [ 'PROD-202' ]`
  },
  practicalExample: {
    title: "Chaining Set add() Operations",
    code: `let primeNumbers = new Set();
primeNumbers.add(2).add(3).add(5).add(7);
console.log("Primes:", [...primeNumbers]);`,
    output: `Primes: [ 2, 3, 5, 7 ]`,
    note: "`add()` returns the Set instance to enable fluent chaining."
  },
  commonMistakes: [
    {
      mistake: "Passing an array to delete() expecting to remove multiple items",
      wrongCode: `let s = new Set([1, 2, 3]);
s.delete([1, 2]); // Does not delete 1 and 2!`,
      correctCode: `let s = new Set([1, 2, 3]);
s.delete(1);
s.delete(2);`,
      explanation: "`delete()` accepts a single value at a time."
    }
  ],
  importantPoints: [
    "`delete()` returns `true` if item was present and removed, `false` otherwise.",
    "`keys()` and `values()` return identical iterators in a Set.",
    "`clear()` empties the Set entirely in one step."
  ],
  interviewQuestions: [
    {
      question: "What does `set.delete(val)` return?",
      answer: "It returns a boolean: `true` if the element was successfully found and removed from the Set, or `false` if the element was not found."
    }
  ],
  practiceExercises: [
    {
      problem: "Create a Set of allowed IP addresses, check if '192.168.1.5' is allowed, then clear the Set.",
      hint: "Use .has() and .clear().",
      solution: `let ips = new Set(["127.0.0.1", "192.168.1.5"]);
console.log("Allowed?", ips.has("192.168.1.5"));
ips.clear();
console.log("Size after clear:", ips.size);`
    }
  ]
};

window.TOPIC_DATA_STORE["sets-logic"] = {
  id: "sets-logic",
  title: "Set Logic",
  lead: "Master mathematical set operations: Union, Intersection, Difference, Symmetric Difference, and Subset checks.",
  intro: "Set logic involves mathematical operations between two collections: finding common elements (intersection), combining items (union), or isolating differences.",
  definition: "Mathematical set theory operations implemented on JavaScript Sets.",
  whyUse: "Comparing user permissions, finding mutual social media friends, calculating customer segment overlap, and synchronizing data.",
  syntax: `// Modern Set methods (ES2024) / functional equivalents
setA.union(setB);
setA.intersection(setB);
setA.difference(setB);
setA.symmetricDifference(setB);
setA.isSubsetOf(setB);`,
  syntaxExplanation: "ES2024 introduced native methods (`union`, `intersection`, etc.). In older engines, array methods like `.filter()` implement them cleanly.",
  simpleExample: `let setA = new Set([1, 2, 3]);
let setB = new Set([2, 3, 4]);

// Intersection: elements in both A and B
let intersection = new Set([...setA].filter(x => setB.has(x)));
console.log("Intersection:", [...intersection]);`,
  expectedOutput: `Intersection: [ 2, 3 ]`,
  realLifeExample: {
    domain: "Student Management",
    title: "Course Enrollment Commonality (Intersection & Difference)",
    scenario: "Finding students enrolled in both Web Development and Data Science courses.",
    code: `let webDevStudents = new Set(["Rahul", "Sneha", "Kunal", "Pooja"]);
let dataScienceStudents = new Set(["Pooja", "Aditya", "Rahul", "Vandana"]);

// Mutual students (Intersection)
let enrolledInBoth = new Set([...webDevStudents].filter(s => dataScienceStudents.has(s)));

// Only Web Dev (Difference)
let onlyWebDev = new Set([...webDevStudents].filter(s => !dataScienceStudents.has(s)));

console.log("Enrolled in BOTH courses :", [...enrolledInBoth]);
console.log("Exclusively in Web Dev   :", [...onlyWebDev]);`,
    output: `Enrolled in BOTH courses : [ 'Rahul', 'Pooja' ]\nExclusively in Web Dev   : [ 'Sneha', 'Kunal' ]`
  },
  practicalExample: {
    title: "Union of Two Sets",
    code: `let skillSet1 = new Set(["JavaScript", "CSS"]);
let skillSet2 = new Set(["HTML", "JavaScript", "Node.js"]);
let union = new Set([...skillSet1, ...skillSet2]);
console.log("Total Combined Skills:", [...union]);`,
    output: `Total Combined Skills: [ 'JavaScript', 'CSS', 'HTML', 'Node.js' ]`,
    note: "Spreading both sets into a new Set creates an automatic deduplicated union."
  },
  commonMistakes: [
    {
      mistake: "Assuming setA + setB performs union",
      wrongCode: `let union = setA + setB; // Evaluates to string "[object Set][object Set]"!`,
      correctCode: `let union = new Set([...setA, ...setB]);`,
      explanation: "Use spread syntax with `new Set([...setA, ...setB])` to perform union operations."
    }
  ],
  importantPoints: [
    "Union: elements in A OR B.",
    "Intersection: elements in A AND B.",
    "Difference (A - B): elements in A that are NOT in B.",
    "Native Set methods `intersection()`, `union()`, `difference()` were finalized in ECMAScript 2024."
  ],
  interviewQuestions: [
    {
      question: "How do you calculate the intersection of two Sets in JavaScript?",
      answer: "In modern ES2024: `setA.intersection(setB)`. In prior versions: `new Set([...setA].filter(x => setB.has(x)))`."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a function `isSubset(subset, superset)` that returns true if all elements of subset exist in superset.",
      hint: "Use [...subset].every(val => superset.has(val)).",
      solution: `function isSubset(sub, superSet) {
  return [...sub].every(val => superSet.has(val));
}
let a = new Set([1, 2]);
let b = new Set([1, 2, 3, 4]);
console.log("Is subset?", isSubset(a, b)); // true`
    }
  ]
};

window.TOPIC_DATA_STORE["sets-weakset"] = {
  id: "sets-weakset",
  title: "WeakSet",
  lead: "Master garbage collection, weak references, storing object-only references, and preventing memory leaks.",
  intro: "A `WeakSet` is a collection of objects only, where references to the objects are held 'weakly'. If no other reference to an object stored in a WeakSet exists, it can be garbage-collected.",
  definition: "A collection of uniquely held objects where object references are held weakly, preventing memory retention when the object is no longer referenced elsewhere.",
  whyUse: "Tagging objects (e.g. marking DOM nodes as 'processed'), tracking circular references, and storing private flags without preventing garbage collection.",
  syntax: `const ws = new WeakSet();
let obj = { id: 1 };
ws.add(obj);
ws.has(obj);    // true
ws.delete(obj); // true`,
  syntaxExplanation: "WeakSets only hold objects (primitives like numbers or strings throw a `TypeError`). WeakSets are not iterable and have no `.size` property.",
  simpleExample: `let ws = new WeakSet();
let user = { name: "Anil" };
ws.add(user);
console.log("WeakSet has user:", ws.has(user));`,
  expectedOutput: `WeakSet has user: true`,
  realLifeExample: {
    domain: "Business Applications",
    title: "Secure Object Access Authorization Tagging",
    scenario: "Marking authorized request payload objects in a secure backend without leaking memory.",
    code: `const authorizedRequests = new WeakSet();

function authorize(requestObj) {
  authorizedRequests.add(requestObj);
}

function processRequest(requestObj) {
  if (!authorizedRequests.has(requestObj)) {
    console.log("BLOCKED: Request object is not authorized!");
    return;
  }
  console.log("PROCESSED: Authorized request handled for: " + requestObj.endpoint);
}

let req1 = { endpoint: "/api/pay" };
let req2 = { endpoint: "/api/admin" };

authorize(req1);
processRequest(req1);
processRequest(req2);`,
    output: `PROCESSED: Authorized request handled for: /api/pay\nBLOCKED: Request object is not authorized!`
  },
  practicalExample: {
    title: "Preventing Primitive Insertion",
    code: `let ws = new WeakSet();
try {
  ws.add("NotAnObject"); // TypeError!
} catch (err) {
  console.log("Caught WeakSet Error:", err.name); // TypeError
}`,
    output: `Caught WeakSet Error: TypeError`,
    note: "WeakSets strictly forbid primitive data types."
  },
  commonMistakes: [
    {
      mistake: "Attempting to iterate over a WeakSet with for...of or reading .size",
      wrongCode: `let ws = new WeakSet();
console.log(ws.size); // undefined! WeakSet has no size property!`,
      correctCode: `// WeakSets are uniterable because garbage collector can remove items unpredictably
console.log("WeakSet presence check:", ws.has(obj));`,
      explanation: "WeakSets cannot be enumerated because items may be garbage collected at any moment."
    }
  ],
  importantPoints: [
    "Only objects can be stored in a WeakSet (no primitives).",
    "Not iterable; no `.size` property; no `.clear()` method.",
    "Enables automatic garbage collection of objects when references elsewhere disappear."
  ],
  interviewQuestions: [
    {
      question: "What is the primary difference between Set and WeakSet?",
      answer: "1. **Stored Types**: `Set` can store primitives and objects; `WeakSet` only stores objects.\n2. **Garbage Collection**: `WeakSet` holds weak references, allowing objects to be garbage collected when unreferenced elsewhere.\n3. **Iterability**: `Set` is iterable and has `.size`; `WeakSet` is not iterable and has no `.size`."
    }
  ],
  practiceExercises: [
    {
      problem: "Create a WeakSet that tracks whether an object has been visited by a recursive crawler.",
      hint: "Use ws.add(node) and ws.has(node).",
      solution: `let visitedNodes = new WeakSet();
let nodeA = { id: 1 };
visitedNodes.add(nodeA);
console.log("Node A visited?", visitedNodes.has(nodeA)); // true`
    }
  ]
};

window.TOPIC_DATA_STORE["maps-intro"] = {
  id: "maps-intro",
  title: "Maps",
  lead: "Master key-value collections with arbitrary key types (objects, functions, primitives) and insertion order.",
  intro: "A Map holds key-value pairs where the keys can be any datatype. A Map remembers the original insertion order of the keys.",
  definition: "A keyed collection of key-value pairs allowing any arbitrary data type (primitives, objects, functions) to be used as keys.",
  whyUse: "Object keys are restricted to strings/symbols. Maps allow using DOM elements, objects, or numbers as keys, preserve insertion order, and offer fast $O(1)$ lookups.",
  syntax: `const map = new Map();
map.set(key, value);
map.get(key);
map.has(key);
map.size;`,
  syntaxExplanation: "Created with `new Map()`. Use `.set(k, v)` to add/update, `.get(k)` to retrieve, and `.size` for total count.",
  simpleExample: `let userRoles = new Map();
userRoles.set("Aarav", "Admin");
userRoles.set("Neha", "Editor");
console.log("Aarav Role:", userRoles.get("Aarav"));
console.log("Total entries:", userRoles.size);`,
  expectedOutput: `Aarav Role: Admin\nTotal entries: 2`,
  realLifeExample: {
    domain: "Restaurant Billing",
    title: "Menu Item Object-to-Price Mapping",
    scenario: "Using dish entity objects as Map keys to store daily fluctuating raw ingredient costs.",
    code: `let menuPrices = new Map();

let pizzaItem = { name: "Farmhouse Pizza", category: "Italian" };
let pastaItem = { name: "Penne Alfredo", category: "Italian" };

// Objects used directly as keys!
menuPrices.set(pizzaItem, 420);
menuPrices.set(pastaItem, 350);

console.log("Farmhouse Price: Rs." + menuPrices.get(pizzaItem));
console.log("Total Items on Menu Map:", menuPrices.size);`,
    output: `Farmhouse Price: Rs.420\nTotal Items on Menu Map: 2`
  },
  practicalExample: {
    title: "Iterating Map with for...of Destructuring",
    code: `let currencyCodes = new Map([
  ["USD", "United States Dollar"],
  ["INR", "Indian Rupee"],
  ["EUR", "Euro"]
]);

for (let [code, name] of currencyCodes) {
  console.log(code + " => " + name);
}`,
    output: `USD => United States Dollar\nINR => Indian Rupee\nEUR => Euro`,
    note: "Maps yield `[key, value]` pairs during `for...of` iteration."
  },
  commonMistakes: [
    {
      mistake: "Using bracket notation map[key] instead of map.set(key, value)",
      wrongCode: `let m = new Map();
m["name"] = "Rahul"; // Sets property on the object, NOT in the Map internal table!
console.log(m.get("name")); // undefined!
console.log(m.size);        // 0!`,
      correctCode: `let m = new Map();
m.set("name", "Rahul"); // Proper Map storage
console.log(m.get("name")); // "Rahul"
console.log(m.size);        // 1`,
      explanation: "Always use `map.set()` and `map.get()`. Bracket notation interacts with regular object properties, bypassing the Map hash table."
    }
  ],
  importantPoints: [
    "Map keys can be of ANY type: objects, functions, primitives, `NaN`.",
    "Map guarantees insertion order traversal.",
    "Has a clean `.size` property unlike standard Objects which require `Object.keys(obj).length`."
  ],
  interviewQuestions: [
    {
      question: "What are the advantages of Map over a regular JavaScript Object?",
      answer: "1. **Key Types**: Object keys must be Strings or Symbols; Map keys can be any type (including objects).\n2. **Size**: Map has `.size`; Objects require `Object.keys(obj).length`.\n3. **Order**: Map guarantees insertion order.\n4. **Performance**: Optimized for frequent additions and removals of key-value pairs."
    }
  ],
  practiceExercises: [
    {
      problem: "Create a Map mapping 3 country names to their capital cities and print all pairs using `.forEach()`.",
      hint: "map.forEach((capital, country) => ...)",
      solution: `let capitals = new Map([
  ["India", "New Delhi"],
  ["Japan", "Tokyo"],
  ["France", "Paris"]
]);
capitals.forEach((capital, country) => {
  console.log(\`Capital of \${country} is \${capital}\`);
});`
    }
  ]
};

window.TOPIC_DATA_STORE["maps-methods"] = {
  id: "maps-methods",
  title: "Map Methods",
  lead: "Master set(), get(), delete(), has(), clear(), keys(), values(), and entries() in Map.",
  intro: "Map methods provide full CRUD (Create, Read, Update, Delete) and iteration capabilities over key-value data.",
  definition: "Instance methods on `Map.prototype` for storing, querying, modifying, and iterating key-value pairs.",
  whyUse: "Managing cached API results, tracking state transitions, counting word frequencies, and indexing records.",
  syntax: `map.set(key, val);
map.get(key);
map.has(key);
map.delete(key);
map.clear();
map.keys();
map.values();
map.entries();`,
  syntaxExplanation: "`set()` returns the Map, allowing chaining. `delete()` returns boolean. `has()` checks existence.",
  simpleExample: `let cache = new Map();
cache.set("user:101", { name: "Deepak" });
console.log("Cached:", cache.get("user:101"));
cache.delete("user:101");
console.log("Exists after delete?", cache.has("user:101"));`,
  expectedOutput: `Cached: { name: 'Deepak' }\nExists after delete? false`,
  realLifeExample: {
    domain: "Attendance Management",
    title: "Employee ID to Shift Record Cache",
    scenario: "Maintaining in-memory caching of active employee shift objects with Map methods.",
    code: `let shiftCache = new Map();

shiftCache.set("EMP-901", { shift: "Morning", hours: 8 });
shiftCache.set("EMP-902", { shift: "Evening", hours: 8 });

// Checking and updating
if (shiftCache.has("EMP-901")) {
  let record = shiftCache.get("EMP-901");
  record.overtime = 2; // Add overtime
  shiftCache.set("EMP-901", record);
}

console.log("Updated Shift Record:", shiftCache.get("EMP-901"));`,
    output: `Updated Shift Record: { shift: 'Morning', hours: 8, overtime: 2 }`
  },
  practicalExample: {
    title: "Word Frequency Counter with Map",
    code: `let words = ["apple", "banana", "apple", "orange", "banana", "apple"];
let counts = new Map();

for (let w of words) {
  counts.set(w, (counts.get(w) || 0) + 1);
}

for (let [word, count] of counts) {
  console.log(word + " -> " + count + " time(s)");
}`,
    output: `apple -> 3 time(s)\nbanana -> 2 time(s)\norange -> 1 time(s)`,
    note: "Maps excel at tracking tallies and dynamic frequency distributions."
  },
  commonMistakes: [
    {
      mistake: "Using separate object references as keys expecting matching lookups",
      wrongCode: `let m = new Map();
m.set({ id: 1 }, "Admin");
console.log(m.get({ id: 1 })); // undefined! Different object reference!`,
      correctCode: `let m = new Map();
let keyObj = { id: 1 };
m.set(keyObj, "Admin");
console.log(m.get(keyObj)); // "Admin" (Exact same reference)`,
      explanation: "Map compares object keys by memory reference (`===`), not by structural contents."
    }
  ],
  importantPoints: [
    "`map.keys()` returns an iterator of keys.",
    "`map.values()` returns an iterator of values.",
    "`map.entries()` returns an iterator of `[key, value]` pairs.",
    "`clear()` resets map size to 0."
  ],
  interviewQuestions: [
    {
      question: "How do you convert a Map to an Object and vice versa?",
      answer: "Map to Object: `Object.fromEntries(map)`.\nObject to Map: `new Map(Object.entries(obj))`."
    }
  ],
  practiceExercises: [
    {
      problem: "Convert an object `{ a: 1, b: 2, c: 3 }` into a Map, double each value, and convert back to an object.",
      hint: "Use Object.entries, Map.set, and Object.fromEntries.",
      solution: `let obj = { a: 1, b: 2, c: 3 };
let map = new Map(Object.entries(obj));
for (let [k, v] of map) map.set(k, v * 2);
let result = Object.fromEntries(map);
console.log(result); // { a: 2, b: 4, c: 6 }`
    }
  ]
};

window.TOPIC_DATA_STORE["maps-weakmap"] = {
  id: "maps-weakmap",
  title: "WeakMap",
  lead: "Master garbage collection of keys, private data storage in OOP, and avoiding memory leaks with WeakMap.",
  intro: "A `WeakMap` is a collection of key/value pairs where the keys must be objects, and the values can be arbitrary values. References to the keys are held 'weakly'.",
  definition: "A keyed collection where keys are strictly objects held with weak references, enabling garbage collection when the object has no other references.",
  whyUse: "Storing private instance fields, associating metadata with DOM nodes without memory leaks, and object-associated caching.",
  syntax: `const wm = new WeakMap();
let key = { id: "DOM_NODE" };
wm.set(key, "Metadata");
wm.get(key);    // "Metadata"
wm.has(key);    // true
wm.delete(key); // true`,
  syntaxExplanation: "Keys must be objects. Primitive types are forbidden as keys. WeakMaps are not iterable and have no `.size` property.",
  simpleExample: `let wm = new WeakMap();
let obj = {};
wm.set(obj, "Confidential Data");
console.log("WeakMap value:", wm.get(obj));`,
  expectedOutput: `WeakMap value: Confidential Data`,
  realLifeExample: {
    domain: "Business Applications",
    title: "Private Object State Storage in OOP",
    scenario: "Hiding internal customer credit rating data in a private WeakMap inaccessible from outside.",
    code: `const privateStore = new WeakMap();

class BankCustomer {
  constructor(name, creditScore) {
    this.name = name;
    // Store credit score privately using this instance as key
    privateStore.set(this, { score: creditScore });
  }

  getCreditTier() {
    let score = privateStore.get(this).score;
    return score >= 750 ? "Tier-1 Prime" : "Standard Tier";
  }
}

let customer = new BankCustomer("Vikas", 780);
console.log("Customer:", customer.name);
console.log("Credit Tier:", customer.getCreditTier());
console.log("Direct property access:", customer.score); // undefined (completely private!)`,
    output: `Customer: Vikas\nCredit Tier: Tier-1 Prime\nDirect property access: undefined`
  },
  practicalExample: {
    title: "Associating Temporary State with Objects",
    code: `let listenerTracking = new WeakMap();
let buttonElement = { tag: "button", id: "submitBtn" };

listenerTracking.set(buttonElement, { clicks: 0 });
let state = listenerTracking.get(buttonElement);
state.clicks++;
console.log("Recorded Clicks:", listenerTracking.get(buttonElement).clicks);`,
    output: `Recorded Clicks: 1`,
    note: "When `buttonElement` is deleted, its entry in `WeakMap` is automatically collected."
  },
  commonMistakes: [
    {
      mistake: "Using strings or numbers as WeakMap keys",
      wrongCode: `let wm = new WeakMap();
wm.set("userID", 123); // TypeError: Invalid value used as weak map key`,
      correctCode: `let wm = new WeakMap();
let userKey = { id: "userID" }; // Must be an object!
wm.set(userKey, 123);`,
      explanation: "WeakMap keys must strictly be objects; primitive keys throw a `TypeError`."
    }
  ],
  importantPoints: [
    "Keys MUST be objects.",
    "Values can be any data type (including primitives).",
    "Not iterable, no `.size`, no `.keys()`, no `.clear()`.",
    "Prevents memory leaks when keys are discarded elsewhere."
  ],
  interviewQuestions: [
    {
      question: "How was WeakMap used historically before JavaScript introduced native private class fields (#)?",
      answer: "Developers placed private state inside a module-scoped `WeakMap`, using `this` (the instance) as the key: `privateMap.set(this, privateData)`. Because the WeakMap was not exported, external code could not inspect private state, and instances were garbage collected cleanly."
    }
  ],
  practiceExercises: [
    {
      problem: "Create a WeakMap to cache the results of an expensive computation for an object argument.",
      hint: "if (cache.has(obj)) return cache.get(obj); ...",
      solution: `const cache = new WeakMap();
function computeFor(obj) {
  if (cache.has(obj)) return cache.get(obj) + " (Cached)";
  let result = obj.val * 10;
  cache.set(obj, result);
  return result;
}
let item = { val: 5 };
console.log(computeFor(item)); // 50
console.log(computeFor(item)); // 50 (Cached)`
    }
  ]
};

// PART 14: ITERATIONS
window.TOPIC_DATA_STORE["iter-iterables"] = {
  id: "iter-iterables",
  title: "Iterables",
  lead: "Master JavaScript iterable protocol, Symbol.iterator, custom iterables, and consuming iterables with spread/for-of.",
  intro: "Iterable objects are objects that can be iterated over with `for...of`. Technically, iterables must implement the `Symbol.iterator` method.",
  definition: "An object that implements the Iterable Protocol by defining a `[Symbol.iterator]()` method that returns an iterator.",
  whyUse: "Enables custom data structures to integrate seamlessly with `for...of` loops, spread operator `[...]`, destructuring, and `Array.from()`.",
  syntax: `const myIterable = {
  [Symbol.iterator]() {
    return {
      next() {
        return { value: nextValue, done: booleanFlag };
      }
    };
  }
};`,
  syntaxExplanation: "The iterable protocol specifies that an object must have a method with key `Symbol.iterator` returning an iterator object with a `.next()` method.",
  simpleExample: `let str = "JS";
for (let char of str) {
  console.log("Char:", char);
}`,
  expectedOutput: `Char: J\nChar: S`,
  realLifeExample: {
    domain: "Student Management",
    title: "Classroom Roster Custom Iterable",
    scenario: "Making a classroom management object natively iterable so students can be looped through using standard `for...of`.",
    code: `const classroom = {
  students: ["Aarav", "Meera", "Kunal"],
  [Symbol.iterator]() {
    let index = 0;
    let list = this.students;
    return {
      next() {
        if (index < list.length) {
          return { value: list[index++], done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
};

console.log("=== CLASSROOM FOR...OF ITERATION ===");
for (let student of classroom) {
  console.log("Enrolled Student: " + student);
}`,
    output: `=== CLASSROOM FOR...OF ITERATION ===\nEnrolled Student: Aarav\nEnrolled Student: Meera\nEnrolled Student: Kunal`
  },
  practicalExample: {
    title: "Consuming Custom Iterables with Spread Syntax",
    code: `let range = {
  from: 1, to: 4,
  [Symbol.iterator]() {
    let current = this.from;
    let last = this.to;
    return {
      next() {
        return current <= last ? { value: current++, done: false } : { done: true };
      }
    };
  }
};

console.log("Spread range:", [...range]);`,
    output: `Spread range: [ 1, 2, 3, 4 ]`,
    note: "Any object with `[Symbol.iterator]` can be spread with `[...]`."
  },
  commonMistakes: [
    {
      mistake: "Using for...of on a plain object that lacks [Symbol.iterator]",
      wrongCode: `let user = { name: "John", age: 30 };
for (let x of user) { // TypeError: user is not iterable!
}`,
      correctCode: `let user = { name: "John", age: 30 };
for (let [k, v] of Object.entries(user)) { // Iterate over entries
  console.log(k, v);
}`,
      explanation: "Plain JavaScript objects `{}` are not iterables by default. Use `Object.entries(obj)` or `for...in`."
    }
  ],
  importantPoints: [
    "Built-in iterables: String, Array, TypedArray, Map, Set, arguments, NodeList.",
    "Plain Objects `{}` are NOT iterables.",
    "Iterables work automatically with `for...of`, `[...iterable]`, and `Array.from()`."
  ],
  interviewQuestions: [
    {
      question: "What is the difference between an Iterable and an Iterator?",
      answer: "An **Iterable** is an object with a `[Symbol.iterator]()` method that produces an iterator. An **Iterator** is the object that has a `.next()` method returning `{ value, done }`."
    }
  ],
  practiceExercises: [
    {
      problem: "Create an iterable object `countdown` that counts down from 3 to 1 and terminates.",
      hint: "Implement [Symbol.iterator]() returning next() with value and done.",
      solution: `const countdown = {
  [Symbol.iterator]() {
    let count = 3;
    return {
      next() {
        return count > 0 ? { value: count--, done: false } : { done: true };
      }
    };
  }
};
console.log([...countdown]); // [3, 2, 1]`
    }
  ]
};

window.TOPIC_DATA_STORE["iter-iterators"] = {
  id: "iter-iterators",
  title: "Iterators",
  lead: "Master the iterator protocol, .next() method, { value, done } result objects, and manual iteration.",
  intro: "An iterator is an object which defines a sequence and potentially a return value upon its termination. Specifically, an iterator is any object which implements the Iterator protocol by having a `next()` method.",
  definition: "An object conforming to the Iterator Protocol by providing a `next()` method returning an object with `value` and `done` properties.",
  whyUse: "Fine-grained, manual control over stepping through collections one element at a time, streaming data, and lazy evaluation.",
  syntax: `const iterator = iterable[Symbol.iterator]();
let step1 = iterator.next(); // { value: item, done: false }
let step2 = iterator.next(); // { value: undefined, done: true }`,
  syntaxExplanation: "`next()` returns `{ value: any, done: boolean }`. When sequence completes, `done` is `true`.",
  simpleExample: `let fruits = ["Apple", "Mango"];
let iter = fruits[Symbol.iterator]();

console.log(iter.next()); // { value: 'Apple', done: false }
console.log(iter.next()); // { value: 'Mango', done: false }
console.log(iter.next()); // { value: undefined, done: true }`,
  expectedOutput: `{ value: 'Apple', done: false }\n{ value: 'Mango', done: false }\n{ value: undefined, done: true }`,
  realLifeExample: {
    domain: "Banking",
    title: "Manual Stepping Through Audit Log Entries",
    scenario: "Stepping through queued banking audit entries step-by-step during a forensic inspection.",
    code: `let auditRecords = ["LOGIN_USER_101", "FUNDS_TRANSFER_500", "LOGOUT_USER_101"];
let auditIterator = auditRecords[Symbol.iterator]();

console.log("Stepping through audit logs on-demand:");
let current = auditIterator.next();
while (!current.done) {
  console.log(" -> Audited Entry: " + current.value);
  current = auditIterator.next();
}
console.log("Audit complete.");`,
    output: `Stepping through audit logs on-demand:\n -> Audited Entry: LOGIN_USER_101\n -> Audited Entry: FUNDS_TRANSFER_500\n -> Audited Entry: LOGOUT_USER_101\nAudit complete.`
  },
  practicalExample: {
    title: "Infinite Number Stream Iterator",
    code: `function makeIdGenerator() {
  let id = 1000;
  return {
    next() {
      return { value: "ID-" + id++, done: false }; // Never done!
    }
  };
}

let idGen = makeIdGenerator();
console.log(idGen.next().value);
console.log(idGen.next().value);`,
    output: `ID-1000\nID-1001`,
    note: "Iterators can generate infinite sequences lazily on-demand without memory limits."
  },
  commonMistakes: [
    {
      mistake: "Reusing an iterator after it has reached done: true",
      wrongCode: `let it = [1, 2][Symbol.iterator]();
while(!it.next().done) {}
console.log(it.next()); // Still { value: undefined, done: true }! Does not restart!`,
      correctCode: `// Must obtain a fresh iterator from the iterable
let freshIt = [1, 2][Symbol.iterator]();`,
      explanation: "Iterators are single-use stateful pointers. Once exhausted, you must obtain a new iterator."
    }
  ],
  importantPoints: [
    "Every iterator must have a `.next()` method.",
    "Returns `{ value: any, done: boolean }`.",
    "Optional methods on iterators: `.return()` and `.throw()` for cleanup."
  ],
  interviewQuestions: [
    {
      question: "What must the next() method of an Iterator return?",
      answer: "It must return an object with two properties: `value` (the current yielded element or final return value) and `done` (a boolean indicating `true` if the iterator has finished its sequence, or `false` otherwise)."
    }
  ],
  practiceExercises: [
    {
      problem: "Extract the iterator from the string `'HI'` and manually call `.next()` until done is true.",
      hint: "let it = 'HI'[Symbol.iterator]();",
      solution: `let it = "HI"[Symbol.iterator]();
console.log(it.next()); // { value: 'H', done: false }
console.log(it.next()); // { value: 'I', done: false }
console.log(it.next()); // { value: undefined, done: true }`
    }
  ]
};

window.TOPIC_DATA_STORE["iter-generators"] = {
  id: "iter-generators",
  title: "Generators",
  lead: "Master generator functions (function*), yield statement, yield*, two-way communication, and lazy evaluation.",
  intro: "Regular functions return only one single value (or nothing). Generators can `yield` ('produce') multiple values, one after another, on-demand. They pause and resume execution seamlessly.",
  definition: "A special function syntax (`function*`) that produces a Generator object conforming to both the Iterable and Iterator protocols.",
  whyUse: "Lazy evaluation of infinite sequences, implementing state machines, managing complex async flows, and memory-efficient streaming.",
  syntax: `function* myGenerator() {
  yield 1;
  yield 2;
  yield 3;
}
const gen = myGenerator();
gen.next(); // { value: 1, done: false }`,
  syntaxExplanation: "Defined with `function*`. The `yield` operator pauses execution and emits a value. Invoking `.next()` resumes execution until the next `yield`.",
  simpleExample: `function* numberSequence() {
  yield "First";
  yield "Second";
}
let seq = numberSequence();
console.log(seq.next().value);
console.log(seq.next().value);
console.log(seq.next().done);`,
  expectedOutput: `First\nSecond\ntrue`,
  realLifeExample: {
    domain: "Banking",
    title: "Sequential Check Number Generator",
    scenario: "Generating serialized checkbook numbers on demand without allocating an array in memory.",
    code: `function* checkNumberGenerator(startNumber) {
  let current = startNumber;
  while (true) {
    yield "CHK-" + String(current++).padStart(6, "0");
  }
}

let checkbook = checkNumberGenerator(101);
console.log("Check 1 Issued:", checkbook.next().value);
console.log("Check 2 Issued:", checkbook.next().value);
console.log("Check 3 Issued:", checkbook.next().value);`,
    output: `Check 1 Issued: CHK-000101\nCheck 2 Issued: CHK-000102\nCheck 3 Issued: CHK-000103`
  },
  practicalExample: {
    title: "Delegating with yield*",
    code: `function* subGen() {
  yield "B";
  yield "C";
}
function* mainGen() {
  yield "A";
  yield* subGen(); // Delegate to another generator
  yield "D";
}
console.log("Combined:", [...mainGen()]);`,
    output: `Combined: [ 'A', 'B', 'C', 'D' ]`,
    note: "`yield*` delegates iteration to another iterable or generator."
  },
  commonMistakes: [
    {
      mistake: "Calling a generator function expecting it to execute its body immediately",
      wrongCode: `function* test() {
  console.log("Running"); // Does NOT print on call!
}
test(); // Merely returns the generator iterator!`,
      correctCode: `let g = test();
g.next(); // Body starts executing here!`,
      explanation: "Calling `generator()` does not execute the function body; it returns an iterator object. Execution begins upon calling `.next()`."
    }
  ],
  importantPoints: [
    "Generators are both Iterables and Iterators.",
    "`yield` pauses execution; `.next()` resumes it.",
    "Parameters passed to `next(arg)` become the evaluation result of the paused `yield` expression."
  ],
  interviewQuestions: [
    {
      question: "What is the difference between return and yield in a generator?",
      answer: "`yield` pauses the function, emits a value with `{ value: val, done: false }`, and preserves local variable state to resume later. `return` permanently terminates the generator, emitting `{ value: val, done: true }`."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a generator function `fibonacci()` that yields the Fibonacci sequence indefinitely ($0, 1, 1, 2, 3, 5, \\dots$). Take the first 6 values.",
      hint: "while (true) { yield a; [a, b] = [b, a + b]; }",
      solution: `function* fibonacci() {
  let a = 0, b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}
let fib = fibonacci();
let res = [];
for (let i = 0; i < 6; i++) res.push(fib.next().value);
console.log("Fibonacci:", res); // [0, 1, 1, 2, 3, 5]`
    }
  ]
};

window.TOPIC_DATA_STORE["iter-for-of"] = {
  id: "iter-for-of",
  title: "for...of",
  lead: "Master looping over iterable collections (Arrays, Strings, Maps, Sets, NodeLists) with for...of.",
  intro: "The JavaScript `for...of` statement loops through the values of an iterable object. It was introduced in ES6 as the standard modern way to iterate collections.",
  definition: "A loop statement that traverses data provided by an iterable object's iterator, assigning the yielded value to a variable.",
  whyUse: "Cleaner and less error-prone than classic index-based `for` loops, supports `break` and `continue`, and avoids prototype pollution bugs of `for...in`.",
  syntax: `for (const element of iterable) {
  // code block to be executed
}`,
  syntaxExplanation: "`element` receives the actual item value (not index or key) on each iteration pass.",
  simpleExample: `const colors = ["Red", "Green", "Blue"];
for (const color of colors) {
  console.log("Color:", color);
}`,
  expectedOutput: `Color: Red\nColor: Green\nColor: Blue`,
  realLifeExample: {
    domain: "Attendance Management",
    title: "Employee ID Verification Pipeline with for...of and Break",
    scenario: "Iterating through an array of employee clock-in punches and aborting immediately if a security flag is detected.",
    code: `let punchLog = [
  { empId: "EMP-101", status: "VALID" },
  { empId: "EMP-102", status: "VALID" },
  { empId: "EMP-999", status: "SUSPICIOUS_UNAUTHORIZED" },
  { empId: "EMP-103", status: "VALID" }
];

for (const punch of punchLog) {
  if (punch.status === "SUSPICIOUS_UNAUTHORIZED") {
    console.log("SECURITY ALERT: Halting punch pipeline for " + punch.empId);
    break; // for...of supports break!
  }
  console.log("Verified punch for employee: " + punch.empId);
}`,
    output: `Verified punch for employee: EMP-101\nVerified punch for employee: EMP-102\nSECURITY ALERT: Halting punch pipeline for EMP-999`
  },
  practicalExample: {
    title: "Getting Index and Value with entries() in for...of",
    code: `let heroes = ["Batman", "Superman", "Wonder Woman"];
for (const [index, hero] of heroes.entries()) {
  console.log(\`Rank #\${index + 1}: \${hero}\`);
}`,
    output: `Rank #1: Batman\nRank #2: Superman\nRank #3: Wonder Woman`,
    note: "`arr.entries()` pairs indices with values for `for...of` destructuring."
  },
  commonMistakes: [
    {
      mistake: "Using for...of on plain objects",
      wrongCode: `let obj = { a: 1, b: 2 };
for (let v of obj) {} // TypeError: obj is not iterable`,
      correctCode: `let obj = { a: 1, b: 2 };
for (let v of Object.values(obj)) {
  console.log(v);
}`,
      explanation: "Plain objects are not iterables. Use `Object.values(obj)`, `Object.keys(obj)`, or `Object.entries(obj)` with `for...of`."
    }
  ],
  importantPoints: [
    "`for...of` iterates over **values**.",
    "Supports `break`, `continue`, and `return` (unlike `.forEach()`).",
    "Works seamlessly on Arrays, Strings, Sets, Maps, Generators, and NodeLists."
  ],
  interviewQuestions: [
    {
      question: "What is the difference between for...of and forEach()?",
      answer: "1. `for...of` supports early exit via `break`, `continue`, and `return`; `forEach()` cannot be stopped early.\n2. `for...of` can await promises in `async` loops (`for await...of`); `forEach()` does not handle async promises properly.\n3. `for...of` works on any iterable (generators, sets); `forEach()` is specific to Arrays, Sets, and Maps."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a for...of loop that iterates over a string and counts how many vowels (a, e, i, o, u) it contains.",
      hint: "Check 'aeiou'.includes(char.toLowerCase()).",
      solution: `let text = "JavaScript Iterations";
let vowels = 0;
for (const ch of text.toLowerCase()) {
  if ("aeiou".includes(ch)) vowels++;
}
console.log("Vowel Count:", vowels);`
    }
  ]
};

window.TOPIC_DATA_STORE["iter-for-in"] = {
  id: "iter-for-in",
  title: "for...in",
  lead: "Master property enumeration, inspecting object keys, prototype chain traversal, and for...in vs for...of.",
  intro: "The JavaScript `for...in` statement loops through the enumerable properties of an object. For every distinct property, JavaScript executes the specified statements.",
  definition: "A loop statement that enumerates all string-keyed enumerable properties of an object, including inherited prototype properties.",
  whyUse: "Inspecting object keys, serializing object dictionaries, and debugging dynamic key-value properties.",
  syntax: `for (const key in object) {
  // code block accessing object[key]
}`,
  syntaxExplanation: "`key` holds the property name (string). To read the value, use bracket notation `object[key]`.",
  simpleExample: `const person = { fname: "John", lname: "Doe", age: 25 };
for (let x in person) {
  console.log(x + ": " + person[x]);
}`,
  expectedOutput: `fname: John\nlname: Doe\nage: 25`,
  realLifeExample: {
    domain: "Student Management",
    title: "Student Marks Card Dynamic Property Audit",
    scenario: "Enumerating student examination scorecards to print subject marks and verify direct properties.",
    code: `const marksCard = {
  Mathematics: 95,
  Physics: 88,
  Chemistry: 92,
  English: 85
};

console.log("=== MARKS CARD AUDIT ===");
for (let subject in marksCard) {
  // Ensure property belongs directly to object, not prototype
  if (Object.hasOwn(marksCard, subject)) {
    console.log(subject + " -> " + marksCard[subject] + "/100");
  }
}`,
    output: `=== MARKS CARD AUDIT ===\nMathematics -> 95/100\nPhysics -> 88/100\nChemistry -> 92/100\nEnglish -> 85/100`
  },
  practicalExample: {
    title: "Prototype Inheritance in for...in",
    code: `let proto = { inheritedProp: "Shared" };
let child = Object.create(proto);
child.ownProp = "Direct";

for (let key in child) {
  console.log("Key found:", key, "(Own?", Object.hasOwn(child, key) + ")");
}`,
    output: `Key found: ownProp (Own? true)\nKey found: inheritedProp (Own? false)`,
    note: "`for...in` walks up prototype chains; always check `Object.hasOwn(obj, key)`."
  },
  commonMistakes: [
    {
      mistake: "Using for...in to iterate over arrays",
      wrongCode: `let nums = [10, 20, 30];
for (let i in nums) {
  console.log(i + 1); // "01", "11", "21"! i is a STRING, not a number!
}`,
      correctCode: `let nums = [10, 20, 30];
for (let n of nums) { // Use for...of for arrays!
  console.log(n);
}`,
      explanation: "`for...in` iterates over string property names (indices as strings) and includes custom prototype methods. Always use `for...of` or regular `for` on arrays."
    }
  ],
  importantPoints: [
    "`for...in` iterates over **keys/property names**.",
    "`for...of` iterates over **values**.",
    "Do NOT use `for...in` over arrays if index order or array methods matter.",
    "Always filter with `Object.hasOwn(obj, key)` to ignore prototype properties."
  ],
  interviewQuestions: [
    {
      question: "What is the crucial difference between `for...in` and `for...of`?",
      answer: "`for...in` loops over the **enumerable property names (keys)** of an object (including prototype properties). `for...of` loops over the **iterated values** of an iterable object (Arrays, Sets, Maps, Strings)."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a function using `for...in` that prints all property keys and their data types for an object.",
      hint: "typeof obj[key]",
      solution: `let conf = { port: 8080, host: "localhost", active: true };
for (let k in conf) {
  console.log(k + " is " + typeof conf[k]);
}`
    }
  ]
};
