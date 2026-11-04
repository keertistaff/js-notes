/* ==========================================================================
   PART 19 & 20: HTML DOM & Events - Comprehensive Topics Data
   ========================================================================== */

window.TOPIC_DATA_STORE = window.TOPIC_DATA_STORE || {};

// PART 19: HTML DOM
window.TOPIC_DATA_STORE["dom-intro"] = {
  id: "dom-intro",
  title: "DOM Introduction",
  lead: "Master the Document Object Model (DOM), the DOM tree hierarchy, nodes, elements, and living document manipulation.",
  intro: "When a web page is loaded, the browser creates a Document Object Model of the page. The HTML DOM model is constructed as a tree of Objects.",
  definition: "A language-independent programming interface that represents HTML or XML documents as a hierarchical tree of nodes that programs can manipulate.",
  whyUse: "Allows JavaScript to dynamically read, change, add, or delete HTML elements, attributes, CSS styles, and react to user events.",
  syntax: `// Accessing root document object
document.title;
document.body;
document.getElementById("main");`,
  syntaxExplanation: "The `window.document` object represents the web page. Every HTML element (`<p>`, `<div>`, `<a>`) is converted to an Element node in the DOM tree.",
  simpleExample: `console.log("Document Title:", typeof document !== "undefined" ? document.title : "HTML DOM Hub");
console.log("DOM representation active.");`,
  expectedOutput: `Document Title: HTML DOM Hub\nDOM representation active.`,
  realLifeExample: {
    domain: "Student Management",
    title: "Dynamic Student Attendance Dashboard UI Update",
    scenario: "Updating the student portal dashboard headline and active attendance count dynamically via DOM manipulation.",
    code: `// Simulating DOM structure
let mockHeading = { textContent: "Student Portal" };
let mockBadge = { textContent: "0" };

// Updating text dynamically
mockHeading.textContent = "Welcome, Aarav Sharma (Semester 4)";
mockBadge.textContent = "94% Attendance";

console.log("Header Display : " + mockHeading.textContent);
console.log("Badge Indicator: " + mockBadge.textContent);`,
    output: `Header Display : Welcome, Aarav Sharma (Semester 4)\nBadge Indicator: 94% Attendance`
  },
  practicalExample: {
    title: "Document Tree Structure Representation",
    code: `/*
  Window
    └── Document
          └── <html>
                ├── <head> (<title>)
                └── <body> (<div>, <p>, <button>)
*/
console.log("The DOM is a structured tree connecting nodes through parent-child relationships.");`,
    output: `The DOM is a structured tree connecting nodes through parent-child relationships.`,
    note: "All elements inherit from `Node` and `EventTarget`."
  },
  commonMistakes: [
    {
      mistake: "Confusing HTML source code with the DOM",
      wrongCode: `// "View Source" shows raw HTML text as downloaded.
// The DOM is the live, in-memory object tree modified by JavaScript.`,
      correctCode: `// Use DevTools "Elements" panel to inspect live DOM nodes`,
      explanation: "HTML is static source markup; the DOM is a dynamic living object representation in browser memory."
    }
  ],
  importantPoints: [
    "The W3C DOM standard defines the document access specifications.",
    "JavaScript manipulates the DOM; JavaScript itself is NOT the DOM (the DOM is a Web API).",
    "DOM mutations trigger layout recalculations and repaints."
  ],
  interviewQuestions: [
    {
      question: "Is the DOM part of the core JavaScript language specification?",
      answer: "No. The DOM is a Web API provided by host environments (browsers). The core JavaScript language is defined by ECMA-262, while the DOM is specified by the WHATWG and W3C standards."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a statement that changes the document title to 'JS Learning Hub - Active Lesson'.",
      hint: "document.title = ...",
      solution: `if (typeof document !== "undefined") {
  document.title = "JS Learning Hub - Active Lesson";
}
console.log("Document title updated.");`
    }
  ]
};

window.TOPIC_DATA_STORE["dom-api"] = {
  id: "dom-api",
  title: "DOM API",
  lead: "Master the DOM interface hierarchy: EventTarget, Node, Element, HTMLElement, and Document interfaces.",
  intro: "The DOM API encompasses all properties, methods, and interfaces provided by the browser to interact with documents programmatically.",
  definition: "The standardized set of interfaces defining methods for traversing, querying, modifying, and handling events on document trees.",
  whyUse: "Provides a standardized, cross-browser contract for front-end manipulation.",
  syntax: `element instanceof HTMLElement; // true
element instanceof Element;     // true
element instanceof Node;        // true
element instanceof EventTarget; // true`,
  syntaxExplanation: "Every DOM element inherits from `HTMLElement` -> `Element` -> `Node` -> `EventTarget`.",
  simpleExample: `console.log("EventTarget provides: addEventListener, removeEventListener, dispatchEvent");
console.log("Node provides: parentNode, childNodes, appendChild, removeChild");
console.log("Element provides: querySelector, getAttribute, setAttribute, classList");`,
  expectedOutput: `EventTarget provides: addEventListener, removeEventListener, dispatchEvent\nNode provides: parentNode, childNodes, appendChild, removeChild\nElement provides: querySelector, getAttribute, setAttribute, classList`,
  realLifeExample: {
    domain: "Banking",
    title: "ATM Screen DOM Interface Hierarchy",
    scenario: "Verifying button element inheritance before binding high-security click listeners.",
    code: `// Simulating DOM node inheritance
class MockEventTarget {
  addEventListener(evt, fn) { console.log("Listener registered for: " + evt); }
}
class MockNode extends MockEventTarget { constructor() { super(); this.parentNode = null; } }
class MockElement extends MockNode { constructor() { super(); this.id = "btn-withdraw"; } }

let withdrawBtn = new MockElement();
console.log("Button ID:", withdrawBtn.id);
withdrawBtn.addEventListener("click", () => console.log("Dispensing cash"));`,
    output: `Button ID: btn-withdraw\nListener registered for: click`
  },
  practicalExample: {
    title: "DocumentFragment for High-Performance Batch Insertion",
    code: `// DocumentFragment holds elements in memory without triggering page repaints
console.log("DocumentFragment allows batch DOM appending in O(1) layout repaint cost.");`,
    output: `DocumentFragment allows batch DOM appending in O(1) layout repaint cost.`,
    note: "Appending to a fragment and adding it once prevents repeated reflows."
  },
  commonMistakes: [
    {
      mistake: "Directly querying and mutating DOM in tight loops causing layout thrashing",
      wrongCode: `// Bad: forces browser to recalculate layout on every pass
for (let i = 0; i < 100; i++) {
  // el.style.width = el.offsetWidth + 5 + "px"; // Layout thrashing!
}`,
      correctCode: `// Good: read first, batch write in requestAnimationFrame`,
      explanation: "Interleaving DOM reads (`offsetWidth`) and writes (`style.width`) causes repeated browser layout thrashing."
    }
  ],
  importantPoints: [
    "Inheritance chain: `HTMLButtonElement` -> `HTMLElement` -> `Element` -> `Node` -> `EventTarget` -> `Object`.",
    "`EventTarget` gives all nodes the ability to receive and dispatch events.",
    "Modern frameworks use Virtual DOMs or compiler reactive tracks to minimize direct DOM API calls."
  ],
  interviewQuestions: [
    {
      question: "Explain the DOM inheritance chain from Object to a `<button>` element.",
      answer: "`HTMLButtonElement` extends `HTMLElement` (adds HTML-specific properties like `title`, `hidden`), which extends `Element` (adds XML/tag properties, attributes, `querySelector`), which extends `Node` (adds tree relationships like `parentNode`, `childNodes`), which extends `EventTarget` (adds event capabilities like `addEventListener`), which extends `Object`."
    }
  ],
  practiceExercises: [
    {
      problem: "Write code to create a `DocumentFragment`, append 3 list items to it, and log the fragment.",
      hint: "document.createDocumentFragment()",
      solution: `if (typeof document !== "undefined") {
  let fragment = document.createDocumentFragment();
  for (let i = 1; i <= 3; i++) {
    let li = document.createElement("li");
    li.textContent = "Item " + i;
    fragment.appendChild(li);
  }
  console.log("Fragment prepared with 3 list items.");
}`
    }
  ]
};

window.TOPIC_DATA_STORE["dom-selecting"] = {
  id: "dom-selecting",
  title: "Selecting Elements",
  lead: "Master getElementById, getElementsByClassName, getElementsByTagName, querySelector, and querySelectorAll.",
  intro: "To manipulate an HTML element, you first need to find or select it. JavaScript provides traditional lookup methods and modern CSS selector queries.",
  definition: "Methods on `Document` and `Element` used to query, search, and return references to specific DOM nodes.",
  whyUse: "Binding event listeners, modifying text, updating styles, reading form values, and inspecting element attributes.",
  syntax: `document.getElementById("id");
document.querySelector(".class"); // First match
document.querySelectorAll(".class"); // All matches (NodeList)
document.getElementsByClassName("name"); // HTMLCollection
document.getElementsByTagName("tag");`,
  syntaxExplanation: "`querySelector` takes any valid CSS selector (`#id`, `.class`, `div > p`). `querySelectorAll` returns a static `NodeList`.",
  simpleExample: `console.log("querySelector('#nav'): selects single element by ID");
console.log("querySelectorAll('.btn'): selects all elements matching CSS class");`,
  expectedOutput: `querySelector('#nav'): selects single element by ID\nquerySelectorAll('.btn'): selects all elements matching CSS class`,
  realLifeExample: {
    domain: "E-commerce",
    title: "Selecting Active Shopping Cart Total Badge",
    scenario: "Finding the cart counter element to update the total item count badge.",
    code: `// Simulating selector lookup
let pageElements = {
  "#cart-count": { textContent: "3" },
  ".checkout-btn": { disabled: false }
};

let cartCounter = pageElements["#cart-count"];
let checkoutButton = pageElements[".checkout-btn"];

console.log("Current Cart Items Count: " + cartCounter.textContent);
console.log("Checkout Button Enabled  : " + !checkoutButton.disabled);`,
    output: `Current Cart Items Count: 3\nCheckout Button Enabled  : true`
  },
  practicalExample: {
    title: "Scoped Querying on Child Elements",
    code: `// querySelector can be called on any Element, not just document!
console.log("element.querySelector('.sub-item') limits search to that element's subtree.");`,
    output: `element.querySelector('.sub-item') limits search to that element's subtree.`,
    note: "Scoping selectors to parent elements avoids accidental global collisions."
  },
  commonMistakes: [
    {
      mistake: "Forgetting the # hash or . dot prefix in querySelector",
      wrongCode: `document.querySelector("myId"); // Looks for <myId> HTML tag, NOT id="myId"!`,
      correctCode: `document.querySelector("#myId"); // CSS ID selector with #
document.querySelector(".myClass"); // CSS Class selector with .`,
      explanation: "`querySelector` expects standard CSS selectors (`#` for IDs, `.` for classes)."
    }
  ],
  importantPoints: [
    "`getElementById` is slightly faster than `querySelector` for pure ID lookups.",
    "`querySelectorAll` returns a static `NodeList`.",
    "`getElementsByClassName` returns a live `HTMLCollection`."
  ],
  interviewQuestions: [
    {
      question: "What is the difference between querySelectorAll and getElementsByClassName?",
      answer: "`getElementsByClassName()` returns a **live** `HTMLCollection` (it updates automatically when elements are added or removed from the DOM). `querySelectorAll()` returns a **static** `NodeList` (a snapshot of elements matching the selector at the moment of query execution)."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a selector query that finds all `<button>` elements that have the class `'primary'`.",
      hint: "document.querySelectorAll('button.primary')",
      solution: `let selector = "button.primary";
console.log("Target CSS Selector:", selector);`
    }
  ]
};

window.TOPIC_DATA_STORE["dom-changing-html"] = {
  id: "dom-changing-html",
  title: "Changing HTML",
  lead: "Master innerHTML, textContent, innerText, createElement, appendChild, remove, and replaceChild.",
  intro: "JavaScript can dynamically change HTML content, replace elements, create new elements, and modify attributes on the fly.",
  definition: "Techniques and DOM properties for updating the structural markup, text, and attributes of elements.",
  whyUse: "Rendering dynamic data, building todo list items, updating notifications, and updating form values.",
  syntax: `element.textContent = "Safe Text";
element.innerHTML = "<span>Markup</span>";
const newEl = document.createElement("div");
parent.appendChild(newEl);
element.remove();`,
  syntaxExplanation: "`textContent` sets raw plain text safely. `innerHTML` parses strings as HTML elements. `createElement()` builds memory-allocated nodes.",
  simpleExample: `let mockDiv = { textContent: "", innerHTML: "" };
mockDiv.textContent = "Safe plain text content";
console.log("textContent:", mockDiv.textContent);`,
  expectedOutput: `textContent: Safe plain text content`,
  realLifeExample: {
    domain: "Restaurant Billing",
    title: "Adding Order Items to Bill DOM Table Dynamically",
    scenario: "Creating a table row with dish name and price and appending it into the bill receipt table.",
    code: `// Simulating DOM node creation
function createBillRow(item, price) {
  return {
    tagName: "TR",
    innerHTML: "<td>" + item + "</td><td>Rs." + price + "</td>"
  };
}

let row1 = createBillRow("Veg Hakka Noodles", 220);
let row2 = createBillRow("Spring Rolls", 180);

console.log("Row 1 Generated: " + row1.innerHTML);
console.log("Row 2 Generated: " + row2.innerHTML);`,
    output: `Row 1 Generated: <td>Veg Hakka Noodles</td><td>Rs.220</td>\nRow 2 Generated: <td>Spring Rolls</td><td>Rs.180</td>`
  },
  practicalExample: {
    title: "Security: textContent vs innerHTML (XSS Prevention)",
    code: `let userInput = "<img src='x' onerror='alert(1)'>";
// Safe: textContent escapes markup characters
let safeDiv = { textContent: userInput };
console.log("Safe escaped output:", safeDiv.textContent);`,
    output: `Safe escaped output: <img src='x' onerror='alert(1)'>`,
    note: "Always use `textContent` when rendering user-submitted text to prevent XSS."
  },
  commonMistakes: [
    {
      mistake: "Using innerHTML with untrusted user input (Cross-Site Scripting XSS)",
      wrongCode: `element.innerHTML = userComment; // DANGER: Executes injected scripts!`,
      correctCode: `element.textContent = userComment; // SAFE: Renders as literal text`,
      explanation: "`innerHTML` parses string content as HTML, enabling malicious script injection (XSS attacks)."
    }
  ],
  importantPoints: [
    "`textContent` is faster and immune to XSS attacks.",
    "`element.remove()` removes an element directly from the DOM.",
    "`document.createElement('div')` creates an in-memory node without displaying until appended."
  ],
  interviewQuestions: [
    {
      question: "Why is `textContent` preferred over `innerHTML` when displaying plain text?",
      answer: "1. **Security**: `textContent` does not parse HTML, eliminating Cross-Site Scripting (XSS) risks.\n2. **Performance**: `textContent` skips HTML parser compilation and runs significantly faster."
    }
  ],
  practiceExercises: [
    {
      problem: "Write the JavaScript code to create a new `<button>` with text 'Click Me' and append it to `document.body`.",
      hint: "createElement, textContent, appendChild",
      solution: `if (typeof document !== "undefined") {
  let btn = document.createElement("button");
  btn.textContent = "Click Me";
  document.body.appendChild(btn);
  console.log("Button created and appended.");
}`
    }
  ]
};

window.TOPIC_DATA_STORE["dom-changing-css"] = {
  id: "dom-changing-css",
  title: "Changing CSS",
  lead: "Master element.style, classList (add, remove, toggle, contains), CSS variables, and getComputedStyle().",
  intro: "The HTML DOM allows JavaScript to change the style of HTML elements dynamically. You can manipulate inline styles or toggle CSS classes.",
  definition: "Techniques for altering presentation properties via `element.style` or managing CSS class tokens with `classList`.",
  whyUse: "Theme toggles (dark/light mode), modal popup transitions, validation feedback (red border), and responsive drawer menus.",
  syntax: `element.style.color = "blue";
element.style.backgroundColor = "black";
element.classList.add("active");
element.classList.remove("hidden");
element.classList.toggle("dark");
window.getComputedStyle(element).fontSize;`,
  syntaxExplanation: "CSS properties with hyphens (`background-color`) become camelCase in JavaScript (`backgroundColor`). `classList` is the modern, preferred way to manage styles.",
  simpleExample: `let mockEl = { style: {}, classList: new Set() };
mockEl.style.backgroundColor = "#04AA6D";
mockEl.classList.add("btn-primary");
console.log("Inline style:", mockEl.style.backgroundColor);
console.log("Has class?  :", mockEl.classList.has("btn-primary"));`,
  expectedOutput: `Inline style: #04AA6D\nHas class?  : true`,
  realLifeExample: {
    domain: "Attendance Management",
    title: "Attendance Status Card Styling",
    scenario: "Dynamically applying green success badge for 'Present' and red warning badge for 'Absent'.",
    code: `function applyStatusBadge(element, isPresent) {
  if (isPresent) {
    element.className = "badge badge-success";
    element.style.color = "#04AA6D";
    console.log("Styled: Present Badge (Green: #04AA6D)");
  } else {
    element.className = "badge badge-danger";
    element.style.color = "#f44336";
    console.log("Styled: Absent Badge (Red: #f44336)");
  }
}

let badgeEl = { className: "", style: {} };
applyStatusBadge(badgeEl, true);
applyStatusBadge(badgeEl, false);`,
    output: `Styled: Present Badge (Green: #04AA6D)\nStyled: Absent Badge (Red: #f44336)`
  },
  practicalExample: {
    title: "classList.toggle() for Dark Mode",
    code: `let bodyClasses = new Set();
function toggleTheme() {
  if (bodyClasses.has("dark-theme")) {
    bodyClasses.delete("dark-theme");
  } else {
    bodyClasses.add("dark-theme");
  }
}
toggleTheme();
console.log("Dark mode active?", bodyClasses.has("dark-theme"));
toggleTheme();
console.log("Dark mode active?", bodyClasses.has("dark-theme"));`,
    output: `Dark mode active? true\nDark mode active? false`,
    note: "`classList.toggle()` adds the class if absent, and removes it if present."
  },
  commonMistakes: [
    {
      mistake: "Writing CSS properties with hyphens on element.style",
      wrongCode: `element.style.font-size = "20px"; // SyntaxError: Invalid left-hand assignment!`,
      correctCode: `element.style.fontSize = "20px"; // CamelCase! Or element.style.setProperty("font-size", "20px")`,
      explanation: "JavaScript parses hyphens as subtraction. Always use camelCase (`fontSize`, `backgroundColor`)."
    }
  ],
  importantPoints: [
    "Prefer toggling CSS classes via `classList` over setting inline styles directly.",
    "`element.style` reads ONLY inline styles, not external stylesheet rules.",
    "`window.getComputedStyle(element)` calculates the actual rendered styles."
  ],
  interviewQuestions: [
    {
      question: "Why does `element.style.color` return an empty string even if the element is styled red in CSS?",
      answer: "`element.style` only reads styles set directly inline via the `style='...'` attribute. It does not inspect external CSS stylesheets or `<style>` blocks. To read applied CSS styles, use `window.getComputedStyle(element).color`."
    }
  ],
  practiceExercises: [
    {
      problem: "Write code to toggle the class `'active'` on an element, and log whether `'active'` is currently present using `classList.contains()`.",
      hint: "el.classList.toggle('active'); el.classList.contains('active');",
      solution: `if (typeof document !== "undefined") {
  let el = document.createElement("div");
  el.classList.toggle("active");
  console.log("Contains active:", el.classList.contains("active")); // true
}`
    }
  ]
};

window.TOPIC_DATA_STORE["dom-form-validation"] = {
  id: "dom-form-validation",
  title: "Form Validation",
  lead: "Master client-side validation, preventing submit with preventDefault(), regex checks, and real-time feedback.",
  intro: "HTML form validation can be performed automatically by HTML5 attributes or customized via JavaScript DOM validation logic.",
  definition: "The programmatic verification of user input fields before form submission to ensure completeness, security, and data accuracy.",
  whyUse: "Validating email formats, confirming password match, checking required checkboxes, and preventing bad network requests.",
  syntax: `form.addEventListener("submit", function(event) {
  if (!isValid) {
    event.preventDefault(); // Stop submission!
  }
});`,
  syntaxExplanation: "`event.preventDefault()` cancels the browser's default form submit and page reload, allowing custom JavaScript validation to handle errors.",
  simpleExample: `let emailInput = "test@example.com";
let isValid = emailInput.includes("@") && emailInput.includes(".");
console.log("Form valid?", isValid);`,
  expectedOutput: `Form valid? true`,
  realLifeExample: {
    domain: "Banking",
    title: "Fund Transfer Form Validation Engine",
    scenario: "Validating beneficiary account number, re-entered confirmation account number, and minimum transfer amount.",
    code: `function validateTransferForm(acc1, acc2, amount) {
  let errors = [];
  
  if (!acc1 || !acc2) errors.push("Account numbers are required.");
  if (acc1 !== acc2) errors.push("Account numbers do not match.");
  if (isNaN(amount) || amount <= 0) errors.push("Transfer amount must be greater than zero.");
  
  return {
    isValid: errors.length === 0,
    errors: errors
  };
}

let result = validateTransferForm("AC-123", "AC-123", 5000);
console.log("Transfer Valid? " + result.isValid);
let fail = validateTransferForm("AC-123", "AC-999", 0);
console.log("Transfer Valid? " + fail.isValid + " | Errors: " + fail.errors.join(", "));`,
    output: `Transfer Valid? true\nTransfer Valid? false | Errors: Account numbers do not match., Transfer amount must be greater than zero.`
  },
  practicalExample: {
    title: "HTML5 Constraint Validation API",
    code: `// Modern browsers provide .checkValidity() on input elements
console.log("input.checkValidity() and input.setCustomValidity() provide native validation dialogs.");`,
    output: `input.checkValidity() and input.setCustomValidity() provide native validation dialogs.`,
    note: "Use the HTML5 Constraint Validation API alongside custom JavaScript."
  },
  commonMistakes: [
    {
      mistake: "Relying purely on client-side JavaScript validation for security",
      wrongCode: `// Assuming client validation is enough to prevent malicious data in the database`,
      correctCode: `// Always validate on BOTH client (for UX) and backend server (for security)`,
      explanation: "Client-side validation can be bypassed easily by disabling JavaScript or using curl/Postman. Always enforce server-side validation."
    }
  ],
  importantPoints: [
    "Always invoke `event.preventDefault()` to stop form reload upon validation errors.",
    "Client validation is for user experience; server validation is for security.",
    "Provide clear, inline error messages adjacent to invalid input fields."
  ],
  interviewQuestions: [
    {
      question: "What does `event.preventDefault()` do in a form submit event handler?",
      answer: "`event.preventDefault()` stops the browser's default action of submitting the form and causing a full page refresh/POST request, allowing JavaScript to perform asynchronous validation or fetch requests."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a function `validatePasswordConfirmation(p1, p2)` that returns true only if passwords match and are at least 8 chars long.",
      hint: "p1 === p2 && p1.length >= 8",
      solution: `function validatePasswordConfirmation(p1, p2) {
  return p1 === p2 && p1.length >= 8;
}
console.log("Match:", validatePasswordConfirmation("Secret123", "Secret123")); // true
console.log("Mismatch:", validatePasswordConfirmation("Secret123", "Wrong"));   // false`
    }
  ]
};

window.TOPIC_DATA_STORE["dom-animations"] = {
  id: "dom-animations",
  title: "DOM Animations",
  lead: "Master requestAnimationFrame, smooth 60fps animations, CSS transitions vs JS animations, and cancelAnimationFrame.",
  intro: "JavaScript animations are done by programming gradual changes in an element's style. The changes are called by a timer or requestAnimationFrame.",
  definition: "Techniques for updating element geometry or visual styles across consecutive browser repaint frames.",
  whyUse: "Physics-based movement, progress loaders, smooth scrollings, interactive carousels, and canvas games.",
  syntax: `function step(timestamp) {
  // Update animation frame
  if (!done) {
    requestAnimationFrame(step);
  }
}
requestAnimationFrame(step);`,
  syntaxExplanation: "`requestAnimationFrame` synchronizes animation updates with the browser's display refresh rate (typically 60Hz or 120Hz).",
  simpleExample: `console.log("requestAnimationFrame(callback) schedules smooth 60fps frame updates.");`,
  expectedOutput: `requestAnimationFrame(callback) schedules smooth 60fps frame updates.`,
  realLifeExample: {
    domain: "Banking",
    title: "Account Balance Increment Counter Animation",
    scenario: "Smoothly ticking up a customer's deposited balance from 0 to 5000 on transaction success.",
    code: `let currentDisplay = 0;
let targetBalance = 5000;
let durationSteps = 5;
let stepIncrement = targetBalance / durationSteps;

console.log("=== ANIMATING BALANCE COUNTER ===");
for (let step = 1; step <= durationSteps; step++) {
  currentDisplay += stepIncrement;
  console.log("Frame " + step + ": Rs." + currentDisplay.toFixed(0));
}
console.log("Counter animation completed smoothly.");`,
    output: `=== ANIMATING BALANCE COUNTER ===\nFrame 1: Rs.1000\nFrame 2: Rs.2000\nFrame 3: Rs.3000\nFrame 4: Rs.4000\nFrame 5: Rs.5000\nCounter animation completed smoothly.`
  },
  practicalExample: {
    title: "Why requestAnimationFrame Beats setInterval",
    code: `// requestAnimationFrame automatically pauses when browser tabs are in background, saving CPU & battery!
console.log("requestAnimationFrame pauses on inactive tabs, unlike setInterval.");`,
    output: `requestAnimationFrame pauses on inactive tabs, unlike setInterval.`,
    note: "`requestAnimationFrame` is battery-friendly and matches display refresh."
  },
  commonMistakes: [
    {
      mistake: "Using setInterval for UI animations instead of requestAnimationFrame",
      wrongCode: `setInterval(() => { el.style.left = x++ + "px"; }, 16); // Stutters and wastes CPU in background tabs!`,
      correctCode: `function animate() { el.style.left = x++ + "px"; requestAnimationFrame(animate); }`,
      explanation: "`setInterval` can drop frames (screen tearing) and runs continuously in background tabs."
    }
  ],
  importantPoints: [
    "`requestAnimationFrame` targets 60fps (16.6ms per frame) or 120fps display refresh.",
    "Cancel scheduled animations using `cancelAnimationFrame(frameId)`.",
    "For simple UI animations, prefer hardware-accelerated CSS transitions (`transform`, `opacity`)."
  ],
  interviewQuestions: [
    {
      question: "Why is requestAnimationFrame superior to setInterval for animations?",
      answer: "1. Synchronizes execution with the browser's hardware refresh rate (eliminating stutter and frame tearing).\n2. Automatically halts when the user switches tabs, saving CPU and battery power.\n3. Batches DOM updates into a single browser repaint."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a function structure using `requestAnimationFrame` that increments a position variable until it reaches 100.",
      hint: "if (pos < 100) { pos++; requestAnimationFrame(...); }",
      solution: `let pos = 0;
function move() {
  pos += 10;
  console.log("Position:", pos);
  if (pos < 50) {
    // In browser: requestAnimationFrame(move);
    move();
  }
}
move();`
    }
  ]
};

window.TOPIC_DATA_STORE["dom-document-object"] = {
  id: "dom-document-object",
  title: "Document Object",
  lead: "Master document root properties, URL, domain, referrer, cookie, readyState, and document lifecycle.",
  intro: "The `document` object represents your web page. If you want to access any element in an HTML page, you always start with accessing the document object.",
  definition: "The root node of the DOM tree providing properties and methods to query and manipulate page metadata and contents.",
  whyUse: "Reading document title, cookie storage, monitoring DOM readiness state, and creating elements.",
  syntax: `document.title;
document.URL;
document.cookie;
document.readyState;
document.documentElement; // <html>`,
  syntaxExplanation: "`document.documentElement` represents `<html>`, `document.body` represents `<body>`, `document.head` represents `<head>`.",
  simpleExample: `console.log("ReadyState:", typeof document !== "undefined" ? document.readyState : "complete");
console.log("Document object accessible globally.");`,
  expectedOutput: `ReadyState: complete\nDocument object accessible globally.`,
  realLifeExample: {
    domain: "Business Applications",
    title: "Document ReadyState Loading Screen Dispatcher",
    scenario: "Monitoring `document.readyState` transitions from 'loading' to 'interactive' to 'complete'.",
    code: `let readyStates = ["loading", "interactive", "complete"];

readyStates.forEach((state, i) => {
  if (state === "complete") {
    console.log("State " + (i + 1) + ": " + state + " -> Dismissing splash loader screen.");
  } else {
    console.log("State " + (i + 1) + ": " + state + " -> Assets loading...");
  }
});`,
    output: `State 1: loading -> Assets loading...\nState 2: interactive -> Assets loading...\nState 3: complete -> Dismissing splash loader screen.`
  },
  practicalExample: {
    title: "document.referrer for Analytics Tracking",
    code: `// document.referrer tells you which page linked the user to your site
console.log("document.referrer captures preceding traffic origin URL.");`,
    output: `document.referrer captures preceding traffic origin URL.`,
    note: "Use `document.referrer` for marketing attribution."
  },
  commonMistakes: [
    {
      mistake: "Using document.write() after page load",
      wrongCode: `document.write("Overwrites entire document!");`,
      correctCode: `document.body.appendChild(newElement);`,
      explanation: "`document.write()` clears the entire document if called after the HTML has finished loading."
    }
  ],
  importantPoints: [
    "`document.body` is `null` if accessed in `<head>` before body is parsed.",
    "`document.readyState` has 3 states: `'loading'`, `'interactive'`, `'complete'`.",
    "`document.title` sets the browser tab title text."
  ],
  interviewQuestions: [
    {
      question: "What is the difference between `DOMContentLoaded` and the `window.onload` event?",
      answer: "`DOMContentLoaded` fires as soon as the HTML document is fully parsed and DOM tree is constructed (without waiting for stylesheets, images, and subframes). `window.onload` fires later, only after the HTML, stylesheets, images, and all external assets have completely loaded."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a statement that logs whether the document has finished loading by inspecting `document.readyState`.",
      hint: "document.readyState === 'complete'",
      solution: `let isLoaded = (typeof document !== "undefined") ? (document.readyState === "complete") : true;
console.log("Page Fully Loaded:", isLoaded);`
    }
  ]
};

window.TOPIC_DATA_STORE["dom-element-object"] = {
  id: "dom-element-object",
  title: "Element Object",
  lead: "Master Element interface properties, attributes (getAttribute, setAttribute), dataset, and dimensions.",
  intro: "In the HTML DOM, the `Element` object represents an HTML element, like `<p>`, `<div>`, `<a>`, `<table>`, or any other HTML tag.",
  definition: "The base class for all elements in a Document, inheriting from Node and adding element-specific attribute and geometry methods.",
  whyUse: "Setting data attributes (`data-*`), reading element dimensions (`offsetWidth`, `clientHeight`), and inspecting attributes.",
  syntax: `el.getAttribute("href");
el.setAttribute("disabled", "true");
el.removeAttribute("class");
el.dataset.userId = "1042";
el.getBoundingClientRect();`,
  syntaxExplanation: "`dataset` exposes `data-*` custom attributes. `getBoundingClientRect()` returns exact viewport pixel coordinates.",
  simpleExample: `console.log("getAttribute/setAttribute: manages HTML attributes");
console.log("dataset: provides camelCase access to data-* attributes");`,
  expectedOutput: `getAttribute/setAttribute: manages HTML attributes\ndataset: provides camelCase access to data-* attributes`,
  realLifeExample: {
    domain: "E-commerce",
    title: "Reading Data Attributes on Product Cards",
    scenario: "Extracting product SKU and price from `data-sku` and `data-price` HTML dataset attributes.",
    code: `// Simulating an element with dataset
let productCardEl = {
  dataset: {
    sku: "PROD-882",
    price: "1499",
    category: "Footwear"
  }
};

let itemSku = productCardEl.dataset.sku;
let itemPrice = Number(productCardEl.dataset.price);

console.log("Selected Product SKU : " + itemSku);
console.log("Selected Price (INR) : Rs." + itemPrice);`,
    output: `Selected Product SKU : PROD-882\nSelected Price (INR) : Rs.1499`
  },
  practicalExample: {
    title: "Measuring Dimensions with getBoundingClientRect()",
    code: `console.log("getBoundingClientRect() returns: top, right, bottom, left, width, height, x, y relative to viewport.");`,
    output: `getBoundingClientRect() returns: top, right, bottom, left, width, height, x, y relative to viewport.`,
    note: "Essential for tooltips, sticky navbars, and scroll animations."
  },
  commonMistakes: [
    {
      mistake: "Confusing HTML attributes with DOM object properties",
      wrongCode: `// Attribute: input.getAttribute('value') -> Initial HTML default value
// Property : input.value -> Current live value typed by user`,
      correctCode: `let liveTypedValue = input.value; // Read live property!`,
      explanation: "Attributes reflect initial HTML markup; properties reflect current live DOM state."
    }
  ],
  importantPoints: [
    "`data-user-id='123'` is accessed in JavaScript via `el.dataset.userId` (kebab-case converts to camelCase).",
    "`getBoundingClientRect()` takes CSS transforms into account.",
    "`hasAttribute('name')` returns boolean."
  ],
  interviewQuestions: [
    {
      question: "What is the difference between an HTML attribute and a DOM property?",
      answer: "An **attribute** is defined in HTML source code markup (`<input value='default'>`). A **property** is the live field on the DOM object in JavaScript memory (`input.value`). Changing the live property does not update the HTML attribute."
    }
  ],
  practiceExercises: [
    {
      problem: "Write code to read a `data-role` attribute from an element using `element.dataset`.",
      hint: "element.dataset.role",
      solution: `let mockEl = { dataset: { role: "admin" } };
console.log("Dataset Role:", mockEl.dataset.role); // "admin"`
    }
  ]
};

window.TOPIC_DATA_STORE["dom-navigation"] = {
  id: "dom-navigation",
  title: "DOM Navigation",
  lead: "Master navigating the DOM tree: parentNode, children, firstElementChild, lastElementChild, nextElementSibling, and previousElementSibling.",
  intro: "With the HTML DOM, you can navigate the node tree using node relationships. You can traverse upwards, downwards, and sideways.",
  definition: "Traversing relationships between DOM nodes (parent, child, sibling) using structural pointer properties.",
  whyUse: "Finding adjacent table rows, accessing parent containers from button clicks, and traversing list items.",
  syntax: `el.parentNode;             // Parent node
el.parentElement;          // Parent element
el.children;               // Element children (HTMLCollection)
el.firstElementChild;      // First child element
el.lastElementChild;       // Last child element
el.nextElementSibling;     // Next sibling element
el.previousElementSibling; // Previous sibling element`,
  syntaxExplanation: "Properties with `Element` in the name (`children`, `firstElementChild`) ignore whitespace text nodes.",
  simpleExample: `console.log("parentElement: traverses UP to enclosing parent");
console.log("children: traverses DOWN to immediate child elements");
console.log("nextElementSibling: traverses SIDEWAYS to adjacent sibling");`,
  expectedOutput: `parentElement: traverses UP to enclosing parent\nchildren: traverses DOWN to immediate child elements\nnextElementSibling: traverses SIDEWAYS to adjacent sibling`,
  realLifeExample: {
    domain: "Attendance Management",
    title: "Deleting a Table Row from a Clicked Button",
    scenario: "Finding the parent `<tr>` row of a clicked 'Remove' button and removing it from the attendance roster.",
    code: `// Simulating DOM row navigation
let tableRow = { id: "row-101", removed: false };
let button = { parentElement: tableRow };

// Button click handler removes its parent table row
button.parentElement.removed = true;
console.log("Row ID: " + tableRow.id + " removed state: " + tableRow.removed);`,
    output: `Row ID: row-101 removed state: true`
  },
  practicalExample: {
    title: "Element vs Node Traversal (Ignoring Whitespace)",
    code: `// childNodes includes comment and whitespace text nodes!
// children includes ONLY HTML tags!
console.log("Always use 'children' and 'firstElementChild' to avoid invisible whitespace text nodes.");`,
    output: `Always use 'children' and 'firstElementChild' to avoid invisible whitespace text nodes.`,
    note: "Element-only properties eliminate whitespace node bugs."
  },
  commonMistakes: [
    {
      mistake: "Using firstChild instead of firstElementChild expecting an HTML tag",
      wrongCode: `let child = el.firstChild; // Often returns an invisible #text newline node!`,
      correctCode: `let child = el.firstElementChild; // Returns actual <div> or <p> element!`,
      explanation: "`firstChild` returns any node (including whitespace indentation text); `firstElementChild` strictly returns HTML tags."
    }
  ],
  importantPoints: [
    "`children` = HTML elements only.",
    "`childNodes` = all nodes including text, comments, and elements.",
    "Traversing sideways with `nextElementSibling` stops with `null` at the final sibling."
  ],
  interviewQuestions: [
    {
      question: "What is the difference between `childNodes` and `children`?",
      answer: "`childNodes` returns a NodeList containing all child nodes, including elements, text nodes (like indentation whitespace), and comments. `children` returns an HTMLCollection containing strictly Element nodes (HTML tags), filtering out text and comments."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a statement that selects the next sibling element of an element `btn`.",
      hint: "btn.nextElementSibling",
      solution: `let mockBtn = { nextElementSibling: { tagName: "SPAN" } };
console.log("Next sibling tag:", mockBtn.nextElementSibling.tagName);`
    }
  ]
};

window.TOPIC_DATA_STORE["dom-nodes"] = {
  id: "dom-nodes",
  title: "DOM Nodes",
  lead: "Master node types (ELEMENT_NODE, TEXT_NODE, COMMENT_NODE), nodeName, nodeValue, and cloneNode().",
  intro: "According to the W3C HTML DOM standard, everything in an HTML document is a node: the entire document is a document node, every HTML element is an element node, text inside HTML is a text node.",
  definition: "The fundamental base unit of the DOM hierarchy representing elements, attributes, text, or comments.",
  whyUse: "Cloning templates (`cloneNode`), inspecting node types, and manipulating text nodes directly.",
  syntax: `node.nodeType; // 1 = Element, 3 = Text, 8 = Comment, 9 = Document
node.nodeName; // "DIV", "#text", "#comment"
node.nodeValue;
node.cloneNode(deepBoolean);`,
  syntaxExplanation: "`cloneNode(true)` performs a deep clone including all child elements and text.",
  simpleExample: `console.log("Node.ELEMENT_NODE = 1");
console.log("Node.TEXT_NODE    = 3");
console.log("Node.COMMENT_NODE = 8");`,
  expectedOutput: `Node.ELEMENT_NODE = 1\nNode.TEXT_NODE    = 3\nNode.COMMENT_NODE = 8`,
  realLifeExample: {
    domain: "Restaurant Billing",
    title: "Cloning HTML Receipt Card Template with cloneNode",
    scenario: "Cloning a hidden `<template>` receipt card node deeply to render new order entries.",
    code: `// Simulating deep node cloning
let templateCard = {
  id: "template-card",
  cloneNode(deep) {
    return { id: "card-copy", deepCloned: deep };
  }
};

let newOrderCard = templateCard.cloneNode(true);
console.log("Card cloned deeply:", newOrderCard.deepCloned);`,
    output: `Card cloned deeply: true`
  },
  practicalExample: {
    title: "Checking nodeType in DOM Walkers",
    code: `let mockNode = { nodeType: 1, nodeName: "DIV" };
if (mockNode.nodeType === 1) {
  console.log("Node is an Element:", mockNode.nodeName);
}`,
    output: `Node is an Element: DIV`,
    note: "Numerical `nodeType` constants identify node classifications."
  },
  commonMistakes: [
    {
      mistake: "Calling cloneNode() without true, missing child elements",
      wrongCode: `let clone = el.cloneNode(); // Shallow clone, misses all inner children!`,
      correctCode: `let clone = el.cloneNode(true); // Deep clone copies entire subtree!`,
      explanation: "Default `cloneNode()` or `cloneNode(false)` is shallow, copying only the outer wrapper tag."
    }
  ],
  importantPoints: [
    "Node Type 1 = Element (`<div>`).",
    "Node Type 3 = Text Node (`Hello`).",
    "Node Type 8 = Comment (`<!-- -->`).",
    "`cloneNode(true)` clones event listeners only if added via HTML attributes, not `addEventListener`."
  ],
  interviewQuestions: [
    {
      question: "Does `cloneNode(true)` copy event listeners attached via `addEventListener()`?",
      answer: "No. `cloneNode(true)` copies the DOM structure, text, and inline HTML event attributes (like `onclick='...'`), but does NOT copy event listeners attached programmatically via `addEventListener()`."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a check that tests if a node is a Text node using `node.nodeType`.",
      hint: "node.nodeType === 3",
      solution: `let node = { nodeType: 3 };
console.log("Is Text Node?", node.nodeType === 3); // true`
    }
  ]
};

window.TOPIC_DATA_STORE["dom-collections"] = {
  id: "dom-collections",
  title: "DOM Collections",
  lead: "Master HTMLCollection, live DOM updating, collection indexing, and converting collections to Arrays.",
  intro: "An `HTMLCollection` is an array-like collection (list) of HTML elements. Methods like `getElementsByTagName()` return live HTMLCollections.",
  definition: "An ordered, live collection of Element nodes accessible by index or name/id.",
  whyUse: "Navigating form controls (`form.elements`), table rows (`table.rows`), and live element groups.",
  syntax: `document.forms;
document.images;
document.getElementsByTagName("p");
Array.from(htmlCollection);`,
  syntaxExplanation: "An `HTMLCollection` is **live**: if an element is added or removed in the DOM, the collection automatically updates in real-time.",
  simpleExample: `console.log("HTMLCollection is live and updates automatically with DOM changes.");
console.log("Convert to Array with Array.from(collection) or [...collection] for map/filter.");`,
  expectedOutput: `HTMLCollection is live and updates automatically with DOM changes.\nConvert to Array with Array.from(collection) or [...collection] for map/filter.`,
  realLifeExample: {
    domain: "Attendance Management",
    title: "Iterating Table Rows Collection",
    scenario: "Accessing an HTML table's live `rows` collection to compute attendance statistics.",
    code: `let mockTable = {
  rows: [
    { cells: ["Aarav", "Present"] },
    { cells: ["Meera", "Absent"] },
    { cells: ["Kunal", "Present"] }
  ]
};

console.log("Total Table Rows in Collection:", mockTable.rows.length);
let presentCount = 0;
for (let i = 0; i < mockTable.rows.length; i++) {
  if (mockTable.rows[i].cells[1] === "Present") presentCount++;
}
console.log("Present Count Calculated:", presentCount);`,
    output: `Total Table Rows in Collection: 3\nPresent Count Calculated: 2`
  },
  practicalExample: {
    title: "Converting HTMLCollection to Real Array",
    code: `let mockCollection = { 0: "div1", 1: "div2", length: 2 };
let realArray = Array.from(mockCollection);
console.log("Is Real Array?", Array.isArray(realArray));`,
    output: `Is Real Array? true`,
    note: "Convert collections to arrays to unlock `.map()`, `.filter()`, and `.reduce()`."
  },
  commonMistakes: [
    {
      mistake: "Calling .forEach() or .map() directly on an HTMLCollection",
      wrongCode: `document.getElementsByTagName("div").map(el => el.id); // TypeError: map is not a function!`,
      correctCode: `Array.from(document.getElementsByTagName("div")).map(el => el.id);`,
      explanation: "`HTMLCollection` does NOT implement array iteration methods like `map` or `forEach`. Convert it first with `Array.from()`."
    }
  ],
  importantPoints: [
    "`HTMLCollection` is LIVE: mutations in the DOM immediately reflect in the collection.",
    "Does not support array methods (`forEach`, `map`, `filter`).",
    "Can look up elements by name or ID: `collection['myId']`."
  ],
  interviewQuestions: [
    {
      question: "What does it mean that an HTMLCollection is 'live'?",
      answer: "A live collection means that any change to the underlying DOM document (such as adding or removing matching elements) is immediately and automatically reflected in the collection's length and entries without needing to re-query the DOM."
    }
  ],
  practiceExercises: [
    {
      problem: "Convert an HTMLCollection mock into an Array and filter items containing 'item'.",
      hint: "Array.from(coll).filter(...)",
      solution: `let coll = { 0: "item-1", 1: "other", 2: "item-2", length: 3 };
let filtered = Array.from(coll).filter(x => x.startsWith("item"));
console.log("Filtered:", filtered); // ['item-1', 'item-2']`
    }
  ]
};

window.TOPIC_DATA_STORE["dom-nodelists"] = {
  id: "dom-nodelists",
  title: "Node Lists",
  lead: "Master NodeList, static vs live NodeLists, NodeList.prototype.forEach, and querySelectorAll.",
  intro: "A `NodeList` is a collection (list) of nodes extracted from a document. `querySelectorAll()` returns a static NodeList.",
  definition: "An ordered collection of DOM nodes, either static (snapshot from `querySelectorAll`) or live (`node.childNodes`).",
  whyUse: "Iterating multiple queried elements with built-in `.forEach()`, batch updating classes, and managing node collections.",
  syntax: `const list = document.querySelectorAll(".item");
list.forEach(node => console.log(node));
list.length;
list[0];`,
  syntaxExplanation: "Unlike `HTMLCollection`, modern `NodeList` has a built-in `.forEach()` method.",
  simpleExample: `console.log("querySelectorAll returns a static NodeList.");
console.log("NodeList supports node.forEach(el => ...)");`,
  expectedOutput: `querySelectorAll returns a static NodeList.\nNodeList supports node.forEach(el => ...)`,
  realLifeExample: {
    domain: "E-commerce",
    title: "Batch Updating Product Price Currency Badges",
    scenario: "Iterating through all product price elements with `NodeList.forEach()` to append currency symbols.",
    code: `let mockNodeList = [
  { textContent: "1200" },
  { textContent: "450" },
  { textContent: "2990" }
];

console.log("Batch updating price badges with NodeList.forEach:");
mockNodeList.forEach((node, index) => {
  node.textContent = "Rs. " + node.textContent;
  console.log("Item #" + (index + 1) + ": " + node.textContent);
});`,
    output: `Batch updating price badges with NodeList.forEach:\nItem #1: Rs. 1200\nItem #2: Rs. 450\nItem #3: Rs. 2990`
  },
  practicalExample: {
    title: "Static NodeList vs Live DOM Mutations",
    code: `// If you querySelectorAll('.box'), and then append a new <div class='box'>,
// the static NodeList does NOT change length. It remains a historical snapshot.
console.log("Static NodeList preserves snapshot state at query execution time.");`,
    output: `Static NodeList preserves snapshot state at query execution time.`,
    note: "Static NodeLists avoid infinite loop issues when creating elements inside a loop."
  },
  commonMistakes: [
    {
      mistake: "Assuming all NodeLists are static",
      wrongCode: `// el.childNodes is LIVE! querySelectorAll is STATIC!`,
      correctCode: `// Be aware that element.childNodes updates live, while querySelectorAll is a static snapshot`,
      explanation: "`element.childNodes` is a live NodeList; `document.querySelectorAll()` is a static NodeList snapshot."
    }
  ],
  importantPoints: [
    "`querySelectorAll` returns a **static** NodeList.",
    "`NodeList` implements `.forEach()`, but lacks `.map()` and `.filter()`.",
    "Spread `[...nodeList]` converts it to a real Array."
  ],
  interviewQuestions: [
    {
      question: "Can you call `.map()` directly on a NodeList returned by querySelectorAll?",
      answer: "No. `NodeList.prototype` implements `.forEach()`, but does not implement `.map()`, `.filter()`, or `.reduce()`. You must convert it to a real array first using `Array.from(nodeList)` or `[...nodeList]`."
    }
  ],
  practiceExercises: [
    {
      problem: "Convert a NodeList snapshot into a real Array and extract the `id` of each element.",
      hint: "[...nodeList].map(el => el.id)",
      solution: `let mockNodes = [{ id: "n1" }, { id: "n2" }];
let ids = Array.from(mockNodes).map(node => node.id);
console.log("Extracted IDs:", ids); // ['n1', 'n2']`
    }
  ]
};

// PART 20: JAVASCRIPT EVENTS
window.TOPIC_DATA_STORE["events-intro"] = {
  id: "events-intro",
  title: "Events Introduction",
  lead: "Master event-driven programming, Event objects, event targets, listeners, and interaction flows.",
  intro: "HTML events are 'things' that happen to HTML elements. When JavaScript is used in HTML pages, JavaScript can 'react' on these events.",
  definition: "Signals fired inside browser windows notifying code of user interactions, hardware state changes, or document progress.",
  whyUse: "Reacting to clicks, form inputs, keyboard presses, drag-and-drops, scrolling, and page load completions.",
  syntax: `element.addEventListener("click", function(event) {
  console.log("Clicked:", event.target);
});`,
  syntaxExplanation: "`event` object contains metadata: `event.type`, `event.target`, `event.timeStamp`, coordinates, and modifier keys.",
  simpleExample: `console.log("Event-driven architecture: Listeners react when user triggers actions.");`,
  expectedOutput: `Event-driven architecture: Listeners react when user triggers actions.`,
  realLifeExample: {
    domain: "Banking",
    title: "ATM Screen Keypad Press Event Handling",
    scenario: "Capturing pinpad button click events and appending numbers to the entered PIN buffer.",
    code: `let enteredPin = "";

function onKeypadClick(digitPressed) {
  if (enteredPin.length < 4) {
    enteredPin += digitPressed;
    console.log("PIN Buffer: " + "*".repeat(enteredPin.length));
  }
  if (enteredPin.length === 4) {
    console.log("4-digit PIN fully entered. Dispatching verification...");
  }
}

onKeypadClick("4");
onKeypadClick("8");
onKeypadClick("2");
onKeypadClick("1");`,
    output: `PIN Buffer: *\nPIN Buffer: **\nPIN Buffer: ***\nPIN Buffer: ****\n4-digit PIN fully entered. Dispatching verification...`
  },
  practicalExample: {
    title: "Event Object Properties Inspection",
    code: `let mockEvent = {
  type: "click",
  target: { id: "submitBtn" },
  clientX: 120,
  clientY: 250,
  timeStamp: 1234.56
};
console.log("Event Type  :", mockEvent.type);
console.log("Target ID   :", mockEvent.target.id);
console.log("Coordinates : (" + mockEvent.clientX + ", " + mockEvent.clientY + ")");`,
    output: `Event Type  : click\nTarget ID   : submitBtn\nCoordinates : (120, 250)`,
    note: "Event objects carry spatial coordinates and origin targets."
  },
  commonMistakes: [
    {
      mistake: "Using inline HTML event attributes (onclick='...') in modern apps",
      wrongCode: `<button onclick="doSomething()">Click</button>`,
      correctCode: `button.addEventListener("click", doSomething);`,
      explanation: "`addEventListener` cleanly separates HTML from JavaScript logic and allows attaching multiple listeners to a single event."
    }
  ],
  importantPoints: [
    "JavaScript is single-threaded and event-driven via the Event Loop.",
    "Events inherit from the root `Event` interface (e.g. `MouseEvent`, `KeyboardEvent`).",
    "`event.target` is the element that triggered the event."
  ],
  interviewQuestions: [
    {
      question: "What is the difference between `event.target` and `event.currentTarget`?",
      answer: "`event.target` refers to the exact, deepest DOM element that triggered/dispatched the event. `event.currentTarget` refers to the element to which the event handler is currently attached (e.g., during event bubbling or delegation)."
    }
  ],
  practiceExercises: [
    {
      problem: "Write code attaching a click listener to a button that logs the event's clientX and clientY coordinates.",
      hint: "button.addEventListener('click', e => console.log(e.clientX, e.clientY))",
      solution: `if (typeof document !== "undefined") {
  let btn = document.createElement("button");
  btn.addEventListener("click", e => console.log(e.clientX, e.clientY));
  console.log("Click listener attached.");
}`
    }
  ]
};

window.TOPIC_DATA_STORE["events-mouse"] = {
  id: "events-mouse",
  title: "Mouse Events",
  lead: "Master click, dblclick, mousedown, mouseup, mouseenter, mouseleave, mousemove, and mouseover.",
  intro: "Mouse events occur when a mouse interacts with the HTML document. MouseEvent objects provide screen coordinates and button states.",
  definition: "Events dispatched by pointer/mouse actions including clicks, cursor movements, and boundary crossings.",
  whyUse: "Custom dropdowns, hover tooltips, drag-and-drop interfaces, drawing canvases, and interactive game controls.",
  syntax: `element.addEventListener("click", handler);
element.addEventListener("dblclick", handler);
element.addEventListener("mouseenter", handler);
element.addEventListener("mouseleave", handler);
element.addEventListener("mousemove", handler);`,
  syntaxExplanation: "`mouseenter/mouseleave` do NOT bubble; `mouseover/mouseout` bubble through child elements.",
  simpleExample: `console.log("Mouse events: click, dblclick, mouseenter, mouseleave, mousemove");`,
  expectedOutput: `Mouse events: click, dblclick, mouseenter, mouseleave, mousemove`,
  realLifeExample: {
    domain: "E-commerce",
    title: "Product Image Zoom Tooltip on Mouse Enter & Move",
    scenario: "Tracking mouse coordinates over a product image to render high-resolution zoom previews.",
    code: `function handleImageHover(e) {
  console.log("Cursor at: X=" + e.offsetX + ", Y=" + e.offsetY);
  console.log("Positioning lens magnification to: (" + e.offsetX + "px, " + e.offsetY + "px)");
}

handleImageHover({ offsetX: 145, offsetY: 210 });`,
    output: `Cursor at: X=145, Y=210\nPositioning lens magnification to: (145px, 210px)`
  },
  practicalExample: {
    title: "Mouseenter vs Mouseover Bubbling Differences",
    code: `console.log("mouseenter: fires ONLY when entering the target element (no bubbling).");
console.log("mouseover : fires when entering target AND any of its child descendants (bubbles).");`,
    output: `mouseenter: fires ONLY when entering the target element (no bubbling).\nmouseover : fires when entering target AND any of its child descendants (bubbles).`,
    note: "Use `mouseenter` for dropdowns and tooltips to avoid flickering caused by child elements."
  },
  commonMistakes: [
    {
      mistake: "Using mouseover instead of mouseenter for navigation hover dropdowns causing flicker",
      wrongCode: `menu.addEventListener("mouseover", showMenu); // Flickers when hovering child links!`,
      correctCode: `menu.addEventListener("mouseenter", showMenu); // Smooth and stable!`,
      explanation: "`mouseover` bubbles from internal children; `mouseenter` stays active for the entire component."
    }
  ],
  importantPoints: [
    "`event.button`: 0 = Main (Left), 1 = Middle (Wheel), 2 = Secondary (Right).",
    "`event.clientX/Y` = relative to viewport; `event.pageX/Y` = relative to entire document.",
    "`contextmenu` event intercepts right-clicks."
  ],
  interviewQuestions: [
    {
      question: "What is the difference between mouseenter/mouseleave and mouseover/mouseout?",
      answer: "`mouseenter` and `mouseleave` do not bubble up the DOM tree and are not triggered when moving between child descendants. `mouseover` and `mouseout` bubble up to ancestors, triggering events whenever the cursor crosses child boundaries."
    }
  ],
  practiceExercises: [
    {
      problem: "Write an event listener that detects right-clicks on an element and prevents the default browser context menu.",
      hint: "el.addEventListener('contextmenu', e => e.preventDefault())",
      solution: `if (typeof document !== "undefined") {
  let el = document.createElement("div");
  el.addEventListener("contextmenu", e => {
    e.preventDefault();
    console.log("Custom context menu displayed!");
  });
}`
    }
  ]
};

window.TOPIC_DATA_STORE["events-keyboard"] = {
  id: "events-keyboard",
  title: "Keyboard Events",
  lead: "Master keydown, keyup, event.key, event.code, modifier keys (Ctrl, Shift, Alt, Meta), and shortcut hotkeys.",
  intro: "Keyboard events occur when user interacts with physical keyboard keys. The KeyboardEvent object provides the key character and physical key code.",
  definition: "Events triggered by user interactions with keyboard hardware: `keydown` and `keyup`.",
  whyUse: "Keyboard navigation shortcuts (Ctrl+K search, Escape to close modals), accessibility, and game controls.",
  syntax: `document.addEventListener("keydown", function(event) {
  console.log("Key :", event.key);  // "Enter", "a", "Escape"
  console.log("Code:", event.code); // "KeyA", "Digit1"
  if (event.ctrlKey && event.key === "s") {
    event.preventDefault(); // Save shortcut!
  }
});`,
  syntaxExplanation: "`event.key` is the character value (respects Shift/casing). `event.code` is the physical key identifier.",
  simpleExample: `console.log("keydown: fires when key is pressed down");
console.log("keyup  : fires when key is released");`,
  expectedOutput: `keydown: fires when key is pressed down\nkeyup  : fires when key is released`,
  realLifeExample: {
    domain: "Business Applications",
    title: "Modal Dialog Escape Key Listener",
    scenario: "Closing open modal popups automatically when the user presses the 'Escape' key.",
    code: `let isModalOpen = true;

function handleGlobalKeydown(e) {
  if (e.key === "Escape" && isModalOpen) {
    isModalOpen = false;
    console.log("ACTION: Escape key pressed! Closing active modal dialog.");
  }
}

console.log("Modal state initially: " + isModalOpen);
handleGlobalKeydown({ key: "Escape" });
console.log("Modal state after key : " + isModalOpen);`,
    output: `Modal state initially: true\nACTION: Escape key pressed! Closing active modal dialog.\nModal state after key : false`
  },
  practicalExample: {
    title: "event.key vs event.code",
    code: `let mockEvent = { key: "A", code: "KeyA", shiftKey: true };
console.log("event.key (Character):", mockEvent.key);  // "A" (Uppercase)
console.log("event.code (Hardware):", mockEvent.code); // "KeyA" (Physical key location)`,
    output: `event.key (Character): A\nevent.code (Hardware): KeyA`,
    note: "`event.code` ignores keyboard layout (QWERTY vs DVORAK)."
  },
  commonMistakes: [
    {
      mistake: "Using deprecated event.keyCode or event.which",
      wrongCode: `if (e.keyCode === 13) {} // Deprecated legacy property!`,
      correctCode: `if (e.key === "Enter") {} // Modern, clear standard!`,
      explanation: "`keyCode` is obsolete. Use standard modern `event.key` (`'Enter'`, `'Escape'`, `'Space'`)."
    }
  ],
  importantPoints: [
    "`event.key` represents the resulting symbol (e.g. 'a' or 'A').",
    "`event.code` represents physical position (e.g. 'KeyA').",
    "Modifier flags: `event.ctrlKey`, `event.shiftKey`, `event.altKey`, `event.metaKey`."
  ],
  interviewQuestions: [
    {
      question: "What is the difference between `event.key` and `event.code`?",
      answer: "`event.key` returns the printable character value produced by the keystroke (taking Shift, CapsLock, and language into account, e.g. `'a'` vs `'A'`). `event.code` returns the physical key identifier on the keyboard (e.g. `'KeyA'`), invariant of language or shift state."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a keydown event handler that triggers a search modal when `Ctrl + K` or `Cmd + K` is pressed.",
      hint: "if ((e.ctrlKey || e.metaKey) && e.key === 'k')",
      solution: `function handleSearchShortcut(e) {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
    // e.preventDefault();
    console.log("Search Shortcut Triggered (Ctrl/Cmd + K)!");
  }
}
handleSearchShortcut({ ctrlKey: true, key: "k" });`
    }
  ]
};

window.TOPIC_DATA_STORE["events-load"] = {
  id: "events-load",
  title: "Load Events",
  lead: "Master DOMContentLoaded, window.onload, beforeunload, and image load/error events.",
  intro: "Load events fire when the document, images, stylesheets, or external resources have completed loading.",
  definition: "Lifecycle events fired by browser documents or media elements signaling loading progression and completion.",
  whyUse: "Initializing applications when DOM is ready, tracking image load errors, and warning users before closing unsaved forms.",
  syntax: `document.addEventListener("DOMContentLoaded", () => {
  // DOM is ready, safe to query elements!
});

window.addEventListener("load", () => {
  // All images & stylesheets are fully downloaded!
});

window.addEventListener("beforeunload", (event) => {
  // Warn user of unsaved changes!
});`,
  syntaxExplanation: "`DOMContentLoaded` fires before stylesheets/images finish, making it the ideal trigger for script initialization.",
  simpleExample: `console.log("DOMContentLoaded: DOM tree built");
console.log("load: entire page + external assets fully downloaded");`,
  expectedOutput: `DOMContentLoaded: DOM tree built\nload: entire page + external assets fully downloaded`,
  realLifeExample: {
    domain: "Student Management",
    title: "Unsaved Examination Warning on Tab Close",
    scenario: "Preventing accidental tab closure during an active online exam using `beforeunload`.",
    code: `function setupExamExitGuard(hasUnsavedWork) {
  if (hasUnsavedWork) {
    console.log("Exit Guard: 'You have unsaved exam answers. Are you sure you want to leave?'");
  }
}

setupExamExitGuard(true);`,
    output: `Exit Guard: 'You have unsaved exam answers. Are you sure you want to leave?'`
  },
  practicalExample: {
    title: "Handling Image Load and Error States",
    code: `let img = { src: "profile.png" };
function onImageError() {
  console.log("Image failed to load. Falling back to default avatar placeholder.");
}
onImageError();`,
    output: `Image failed to load. Falling back to default avatar placeholder.`,
    note: "Attach `error` listeners to `<img>` tags for fallback avatars."
  },
  commonMistakes: [
    {
      mistake: "Waiting for window.onload when you only need DOMContentLoaded",
      wrongCode: `window.addEventListener("load", init); // Unnecessarily waits for huge images to load!`,
      correctCode: `document.addEventListener("DOMContentLoaded", init); // Initializes as soon as DOM is ready!`,
      explanation: "`DOMContentLoaded` runs much faster than `window.load` because it does not wait for slow network images."
    }
  ],
  importantPoints: [
    "`DOMContentLoaded` fires on `document`; `load` fires on `window`.",
    "`beforeunload` prompts confirmation before closing tab.",
    "Scripts with `defer` execute right before `DOMContentLoaded`."
  ],
  interviewQuestions: [
    {
      question: "What is the exact execution timeline between script execution, DOMContentLoaded, and window.load?",
      answer: "1. HTML is parsed and scripts with `defer` execute in order.\n2. Once HTML is parsed and DOM constructed, `document` fires `DOMContentLoaded`.\n3. External stylesheets, iframes, and images finish downloading.\n4. Finally, `window` fires `load`."
    }
  ],
  practiceExercises: [
    {
      problem: "Write an event listener for `DOMContentLoaded` that logs 'DOM Ready for Interaction'.",
      hint: "document.addEventListener('DOMContentLoaded', ...)",
      solution: `if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM Ready for Interaction");
  });
}`
    }
  ]
};

window.TOPIC_DATA_STORE["events-management"] = {
  id: "events-management",
  title: "Event Management",
  lead: "Master event lifecycle management, CustomEvent dispatching, event throttling, and debouncing.",
  intro: "Event management covers the strategies and architectural patterns for organizing, creating, dispatching, and controlling events across a modern application.",
  definition: "Design patterns for coordinating custom event dispatch, high-frequency event performance (scroll/resize), and event lifecycle.",
  whyUse: "Decoupling components via CustomEvent buses, preventing browser freezes during scrolling, and organizing scalable front-end state.",
  syntax: `// Custom Event creation & dispatch
const event = new CustomEvent("userLogin", { detail: { username: "Rohan" } });
element.dispatchEvent(event);`,
  syntaxExplanation: "`CustomEvent` enables emitting custom domain signals with payload data attached to `event.detail`.",
  simpleExample: `let bus = {
  dispatch(evtName, payload) {
    console.log("Dispatched event:", evtName, "Payload:", payload);
  }
};
bus.dispatch("orderCompleted", { orderId: 1042 });`,
  expectedOutput: `Dispatched event: orderCompleted Payload: { orderId: 1042 }`,
  realLifeExample: {
    domain: "Banking",
    title: "Account Balance Mutation Custom Event Dispatcher",
    scenario: "Broadcasting a custom `balanceUpdated` event to trigger updates across navbar, statement, and alert widgets.",
    code: `function notifyBalanceChange(newBalance) {
  let customEvt = {
    type: "balanceUpdated",
    detail: { currentBalance: newBalance, timestamp: new Date().toLocaleTimeString() }
  };
  
  console.log("EVENT BROADCAST: [" + customEvt.type + "]");
  console.log("Navbar Widget  : Updated balance display to Rs." + customEvt.detail.currentBalance);
  console.log("Audit Widget   : Recorded balance update event at " + customEvt.detail.timestamp);
}

notifyBalanceChange(58400);`,
    output: `EVENT BROADCAST: [balanceUpdated]\nNavbar Widget  : Updated balance display to Rs.58400\nAudit Widget   : Recorded balance update event at ` + new Date().toLocaleTimeString()
  },
  practicalExample: {
    title: "Throttling High-Frequency Window Scroll Events",
    code: `function throttle(fn, wait) {
  let inThrottle = false;
  return function(...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, wait);
    }
  };
}

let onScroll = throttle(() => console.log("Throttled scroll check"), 1000);
onScroll();
onScroll(); // Throttled!`,
    output: `Throttled scroll check`,
    note: "Throttling guarantees execution at most once per designated interval."
  },
  commonMistakes: [
    {
      mistake: "Binding unthrottled handlers to window.onscroll or window.onresize",
      wrongCode: `window.addEventListener("scroll", expensiveCalculation); // Fires hundreds of times per second!`,
      correctCode: `window.addEventListener("scroll", throttle(expensiveCalculation, 200));`,
      explanation: "Scroll events fire continuously on every frame; failing to throttle or debounce them causes severe browser lag."
    }
  ],
  importantPoints: [
    "Use `CustomEvent` for decoupled publish-subscribe component messaging.",
    "Payload data must be placed inside the `detail` property: `new CustomEvent('name', { detail: data })`.",
    "Throttle high-frequency scroll and resize events."
  ],
  interviewQuestions: [
    {
      question: "What is the difference between Debouncing and Throttling?",
      answer: "**Debouncing** groups a burst of events and executes the handler only *after* a designated quiet period of inactivity (e.g., search autocomplete after user stops typing). **Throttling** enforces a maximum execution frequency, running the handler at most once every $X$ milliseconds regardless of how many times the event fires (e.g., scroll listeners)."
    }
  ],
  practiceExercises: [
    {
      problem: "Create a `CustomEvent` named `'cartUpdated'` carrying a total count of 5 in `detail`, and log its detail.",
      hint: "new CustomEvent('cartUpdated', { detail: { count: 5 } })",
      solution: `let evt = { type: "cartUpdated", detail: { count: 5 } };
console.log("Event:", evt.type, "| Count:", evt.detail.count);`
    }
  ]
};

window.TOPIC_DATA_STORE["events-listener"] = {
  id: "events-listener",
  title: "Event Listener",
  lead: "Master addEventListener, removeEventListener, options (once, passive, capture), and memory leak prevention.",
  intro: "The `addEventListener()` method attaches an event handler to an element without overwriting existing event handlers.",
  definition: "The standard Web API method on `EventTarget` registering an event handler callback for a specific event type.",
  whyUse: "Multiple listeners on one element, options like `{ once: true }` and `{ passive: true }`, and clean detachment.",
  syntax: `element.addEventListener(type, listener, options);
element.removeEventListener(type, listener, options);`,
  syntaxExplanation: "Options object parameters: `once: true` auto-removes after 1 trigger; `passive: true` boosts scroll performance; `capture: true` listens in capture phase.",
  simpleExample: `console.log("btn.addEventListener('click', handler, { once: true });");`,
  expectedOutput: `btn.addEventListener('click', handler, { once: true });`,
  realLifeExample: {
    domain: "Attendance Management",
    title: "Single-Fire Punch In Confirmation with { once: true }",
    scenario: "Ensuring an employee punch-in button cannot be double-clicked rapidly using the `{ once: true }` option.",
    code: `let punchRecorded = false;

function handlePunchIn() {
  if (!punchRecorded) {
    punchRecorded = true;
    console.log("Punch IN logged successfully! Button disabled to prevent duplicate punches.");
  }
}

// Simulating { once: true }
handlePunchIn();
handlePunchIn(); // Second click ignored`,
    output: `Punch IN logged successfully! Button disabled to prevent duplicate punches.`
  },
  practicalExample: {
    title: "Proper removeEventListener Cleanup",
    code: `function onResize() { console.log("Window resized"); }
// Must pass identical named function reference to remove!
// window.removeEventListener("resize", onResize);
console.log("Pass the identical function reference when removing listeners.");`,
    output: `Pass the identical function reference when removing listeners.`,
    note: "Anonymous functions cannot be detached with `removeEventListener()`."
  },
  commonMistakes: [
    {
      mistake: "Passing anonymous inline arrow functions to removeEventListener",
      wrongCode: `el.addEventListener("click", () => doSomething());
el.removeEventListener("click", () => doSomething()); // Does NOT remove! Different function instance!`,
      correctCode: `const handler = () => doSomething();
el.addEventListener("click", handler);
el.removeEventListener("click", handler); // Successfully removed!`,
      explanation: "Anonymous functions create distinct function instances; `removeEventListener` requires the exact same memory reference."
    }
  ],
  importantPoints: [
    "`{ once: true }` automatically invokes `removeEventListener` after first execution.",
    "`{ passive: true }` guarantees the listener will not call `preventDefault()`, dramatically speeding up scrolling.",
    "Always clean up listeners to avoid memory leaks."
  ],
  interviewQuestions: [
    {
      question: "What does the `{ passive: true }` option do in addEventListener?",
      answer: "`passive: true` tells the browser that the listener will *never* call `event.preventDefault()`. This allows the browser's compositor thread to scroll the page immediately without waiting for the JavaScript main thread to execute, resulting in buttery-smooth 60fps scrolling."
    }
  ],
  practiceExercises: [
    {
      problem: "Write an addEventListener statement that executes a click handler exactly once using `{ once: true }`.",
      hint: "el.addEventListener('click', handler, { once: true })",
      solution: `if (typeof document !== "undefined") {
  let btn = document.createElement("button");
  btn.addEventListener("click", () => console.log("Fired once"), { once: true });
  console.log("Single-fire listener configured.");
}`
    }
  ]
};

window.TOPIC_DATA_STORE["events-bubbling"] = {
  id: "events-bubbling",
  title: "Event Bubbling",
  lead: "Master event propagation, bubbling phase from target to window, stopPropagation(), and event inspection.",
  intro: "With bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements.",
  definition: "The default phase of the DOM event flow where an event propagates upwards from the target element through all its parent ancestors up to Document and Window.",
  whyUse: "Enables event delegation and global interaction monitoring.",
  syntax: `element.addEventListener("click", handler, false); // false = bubbling (default)
event.stopPropagation(); // Stops further upward propagation`,
  syntaxExplanation: "When a child element is clicked, the event bubbles up: `Child` -> `Parent` -> `Body` -> `HTML` -> `Document` -> `Window`.",
  simpleExample: `console.log("Bubbling order: Inner Target -> Parent Container -> Document");`,
  expectedOutput: `Bubbling order: Inner Target -> Parent Container -> Document`,
  realLifeExample: {
    domain: "E-commerce",
    title: "Stopping Modal Backdrop Click Bubbling",
    scenario: "Closing a modal when clicking the dark backdrop, but preventing close when clicking inside the modal box using `stopPropagation()`.",
    code: `function onModalBoxClick(e) {
  // Prevent click inside modal from bubbling up to backdrop overlay!
  console.log("Clicked inside modal card. Stopping propagation!");
  e.stopPropagation();
}

function onBackdropClick() {
  console.log("Clicked outer backdrop: Closing modal window.");
}

// Simulating stopped bubbling
let mockEvent = {
  isStopped: false,
  stopPropagation() { this.isStopped = true; }
};

onModalBoxClick(mockEvent);
if (!mockEvent.isStopped) {
  onBackdropClick();
}`,
    output: `Clicked inside modal card. Stopping propagation!`
  },
  practicalExample: {
    title: "Inspecting Event Path / Composed Path",
    code: `// event.composedPath() returns an array of all DOM elements the event bubbles through
console.log("event.composedPath() reveals the complete ancestor chain of the bubbling event.");`,
    output: `event.composedPath() reveals the complete ancestor chain of the bubbling event.`,
    note: "`composedPath()` traces bubbling through Shadow DOM boundaries."
  },
  commonMistakes: [
    {
      mistake: "Abusing event.stopPropagation() breaking analytics and third-party UI components",
      wrongCode: `el.addEventListener("click", e => e.stopPropagation()); // Breaks document-level tracking!`,
      correctCode: `// Only stop propagation when genuinely preventing parent conflicting actions`,
      explanation: "Stopping propagation blindly breaks document-level menu closures, tooltips, and analytics scripts."
    }
  ],
  importantPoints: [
    "Most user events bubble; some (like `focus`, `blur`, `mouseenter`, `mouseleave`) do NOT bubble.",
    "`event.stopPropagation()` stops bubbling.",
    "`event.stopImmediatePropagation()` also prevents other listeners on the *same* element from executing."
  ],
  interviewQuestions: [
    {
      question: "What is the difference between `stopPropagation()` and `stopImmediatePropagation()`?",
      answer: "`stopPropagation()` prevents the event from continuing to bubble up to parent ancestors, but allows other listeners registered on the *same* element to run. `stopImmediatePropagation()` stops both upward bubbling AND halts any subsequent listeners attached to that same element."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a click event handler for an inner button that stops propagation so its parent container handler does not fire.",
      hint: "e.stopPropagation()",
      solution: `function onInnerBtnClick(e) {
  e.stopPropagation();
  console.log("Handled child button, stopped bubbling.");
}
let evt = { stopPropagation() { console.log("Propagation stopped."); } };
onInnerBtnClick(evt);`
    }
  ]
};

window.TOPIC_DATA_STORE["events-capturing"] = {
  id: "events-capturing",
  title: "Event Capturing",
  lead: "Master the capturing (trickling) phase, DOM event flow lifecycle, and capture option in addEventListener.",
  intro: "With capturing (trickling), the event is first handled by the outermost element and then propagates down to the inner elements.",
  definition: "The initial phase of the DOM event flow where events travel downwards from the Window through ancestors to the target before bubbling occurs.",
  whyUse: "Intercepting events before they reach child elements, analytics tracking, and global security guards.",
  syntax: `// Third argument true OR { capture: true } enables capturing phase
element.addEventListener("click", handler, true);
element.addEventListener("click", handler, { capture: true });`,
  syntaxExplanation: "Event flow has 3 phases: 1. Capturing Phase (downwards). 2. Target Phase. 3. Bubbling Phase (upwards).",
  simpleExample: `console.log("1. Capturing Phase: Window -> Document -> Body -> Parent -> Target");
console.log("2. Target Phase: Event reaches actual target element");
console.log("3. Bubbling Phase: Target -> Parent -> Body -> Document -> Window");`,
  expectedOutput: `1. Capturing Phase: Window -> Document -> Body -> Parent -> Target\n2. Target Phase: Event reaches actual target element\n3. Bubbling Phase: Target -> Parent -> Body -> Document -> Window`,
  realLifeExample: {
    domain: "Business Applications",
    title: "Global Form Interaction Auditing via Capturing",
    scenario: "Capturing all click events at the document root during the capturing phase before any child component can stop propagation.",
    code: `console.log("=== CAPTURE PHASE AUDIT LOGGER ===");
function globalSecurityCapture(e) {
  console.log("Captured at Window level for target: " + e.targetTag);
}

globalSecurityCapture({ targetTag: "BUTTON#confirm-pay" });`,
    output: `=== CAPTURE PHASE AUDIT LOGGER ===\nCaptured at Window level for target: BUTTON#confirm-pay`
  },
  practicalExample: {
    title: "Order of Execution: Capture vs Bubble",
    code: `// When both are registered, capture listeners ALWAYS fire before bubble listeners
console.log("Capture listeners fire on the way DOWN; Bubble listeners fire on the way UP.");`,
    output: `Capture listeners fire on the way DOWN; Bubble listeners fire on the way UP.`,
    note: "Capturing allows ancestor elements to intercept events first."
  },
  commonMistakes: [
    {
      mistake: "Assuming all handlers fire in the order they were defined in code",
      wrongCode: `el.addEventListener("click", fn1, false); // bubble
el.addEventListener("click", fn2, true);  // capture (fires FIRST!)`,
      correctCode: `// Capture listeners always precede bubble listeners in event dispatch`,
      explanation: "Capture listeners always execute during phase 1 before any bubbling listeners execute."
    }
  ],
  importantPoints: [
    "Phase 1 = Capturing (`Event.CAPTURING_PHASE = 1`).",
    "Phase 2 = At Target (`Event.AT_TARGET = 2`).",
    "Phase 3 = Bubbling (`Event.BUBBLING_PHASE = 3`).",
    "Inspect current phase with `event.eventPhase`."
  ],
  interviewQuestions: [
    {
      question: "What are the 3 phases of the DOM event flow?",
      answer: "1. **Capturing Phase**: The event travels down from `Window` through the document tree to the ancestor of the target.\n2. **Target Phase**: The event arrives at the target element.\n3. **Bubbling Phase**: The event travels upward from the target element through ancestors back to `Window`."
    }
  ],
  practiceExercises: [
    {
      problem: "Write an addEventListener statement that registers a click listener specifically in the capturing phase.",
      hint: "el.addEventListener('click', handler, true)",
      solution: `if (typeof document !== "undefined") {
  document.addEventListener("click", () => console.log("Captured"), true);
  console.log("Capture listener registered.");
}`
    }
  ]
};

window.TOPIC_DATA_STORE["events-delegation"] = {
  id: "events-delegation",
  title: "Event Delegation",
  lead: "Master event delegation pattern, bubbling exploitation, matching targets with matches() and closest(), and memory optimization.",
  intro: "Event delegation is a technique involving adding a single event listener to a parent element instead of adding multiple listeners to descendant elements.",
  definition: "A design pattern that leverages event bubbling to handle events at a common ancestor for multiple current and future child elements.",
  whyUse: "Dramatically reduces memory consumption, handles dynamically created list items automatically, and simplifies cleanup.",
  syntax: `parentElement.addEventListener("click", function(event) {
  const target = event.target.closest(".target-class");
  if (target && parentElement.contains(target)) {
    // Handle action for target!
  }
});`,
  syntaxExplanation: "Instead of binding 1,000 listeners to 1,000 table rows, bind **1 single listener** to the parent `<table>` and inspect `event.target.closest()`.",
  simpleExample: `console.log("Event delegation: Single listener on parent handles all child clicks via bubbling.");`,
  expectedOutput: `Event delegation: Single listener on parent handles all child clicks via bubbling.`,
  realLifeExample: {
    domain: "Attendance Management",
    title: "Dynamic Employee Table Row Delegation",
    scenario: "Handling 'Delete' and 'Mark Present' clicks on dynamically added employee rows with a single table listener.",
    code: `function handleTableDelegation(eventTarget) {
  if (eventTarget.action === "delete") {
    console.log("ACTION: Deleting employee record #" + eventTarget.empId);
  } else if (eventTarget.action === "mark-present") {
    console.log("ACTION: Marked employee #" + eventTarget.empId + " Present");
  }
}

// User clicks delete on dynamically added row
handleTableDelegation({ action: "mark-present", empId: 1042 });
handleTableDelegation({ action: "delete", empId: 1088 });`,
    output: `ACTION: Marked employee #1042 Present\nACTION: Deleting employee record #1088`
  },
  practicalExample: {
    title: "Using element.closest() in Delegation",
    code: `// button.closest('.item-row') finds the matching ancestor even if user clicked an icon inside!
console.log("event.target.closest('.card') ensures nested icons or spans resolve to the parent container.");`,
    output: `event.target.closest('.card') ensures nested icons or spans resolve to the parent container.`,
    note: "`closest()` traverses up the DOM to match the target selector."
  },
  commonMistakes: [
    {
      mistake: "Using event.target.tagName === 'BUTTON' when button contains inner spans or icons",
      wrongCode: `if (e.target.tagName === "BUTTON") {} // Fails if user clicks an <i> icon inside the button!`,
      correctCode: `const btn = e.target.closest("button"); // Correct! Traverses up to the button`,
      explanation: "If a button has child elements (like icons), `event.target` is the icon. Use `e.target.closest('button')` to always find the button."
    }
  ],
  importantPoints: [
    "Dramatically lowers memory usage: 1 listener instead of thousands.",
    "Automatically supports elements added to the DOM dynamically in the future.",
    "Relies fundamentally on event bubbling."
  ],
  interviewQuestions: [
    {
      question: "What is Event Delegation and what problem does it solve?",
      answer: "Event Delegation is a pattern where a single event listener is attached to a parent container to manage events for all current and future child elements by leveraging event bubbling. It solves two major problems: 1. **Memory overhead** from attaching thousands of listeners to lists or tables. 2. **Dynamic elements**: dynamically inserted child elements work immediately without needing new listeners."
    }
  ],
  practiceExercises: [
    {
      problem: "Write an event delegation handler on a `<ul>` list that detects when an `<li>` element is clicked and logs its text.",
      hint: "const li = e.target.closest('li'); if (li) console.log(li.textContent);",
      solution: `function onListClick(e) {
  let li = e.target.closest("li");
  if (li) console.log("Clicked Item:", li.textContent);
}
let mockEvent = { target: { closest: () => ({ textContent: "Task 1" }) } };
onListClick(mockEvent);`
    }
  ]
};
