/* ==========================================================================
   PART 21, 22 & 23: BOM, Fetch API, JSON & Web APIs - Comprehensive Topics Data
   ========================================================================== */

window.TOPIC_DATA_STORE = window.TOPIC_DATA_STORE || {};

// PART 21: BROWSER AND WINDOW APIS
window.TOPIC_DATA_STORE["bom-window"] = {
  id: "bom-window",
  title: "Window Object",
  lead: "Master the browser global object, viewport dimensions, open/close popups, and the Browser Object Model (BOM).",
  intro: "The `window` object represents the browser window. All global JavaScript objects, functions, and variables automatically become members of the window object.",
  definition: "The global execution context in client-side JavaScript representing the browser window containing the DOM document.",
  whyUse: "Accessing viewport dimensions (`innerWidth`, `innerHeight`), scrolling, opening popups, and hosting global APIs.",
  syntax: `window.innerWidth;
window.innerHeight;
window.open("url", "_blank");
window.scrollTo({ top: 0, behavior: "smooth" });`,
  syntaxExplanation: "Global variables declared with `var` or `function` attach to `window`. Properties of `window` can be referenced without writing `window.` prefix.",
  simpleExample: `console.log("Viewport dimensions: window.innerWidth x window.innerHeight");`,
  expectedOutput: `Viewport dimensions: window.innerWidth x window.innerHeight`,
  realLifeExample: {
    domain: "Business Applications",
    title: "Smooth Scroll to Top Action",
    scenario: "Scrolling user back to page top smoothly when clicking the Back to Top floating button.",
    code: `function scrollToTop() {
  console.log("Invoking window.scrollTo with smooth behavior.");
}
scrollToTop();`,
    output: `Invoking window.scrollTo with smooth behavior.`
  },
  practicalExample: {
    title: "Window Dimensions vs Screen Dimensions",
    code: `console.log("window.innerWidth : Viewport width inside browser frames");
console.log("window.outerWidth : Entire browser application window width");`,
    output: `window.innerWidth : Viewport width inside browser frames\nwindow.outerWidth : Entire browser application window width`,
    note: "Use `innerWidth` for responsive CSS media calculations."
  },
  commonMistakes: [
    {
      mistake: "Assuming let and const attach to window object",
      wrongCode: `let x = 10; console.log(window.x); // undefined!`,
      correctCode: `var y = 20; console.log(window.y); // 20!`,
      explanation: "`let` and `const` do NOT attach to the global `window` object; only `var` does."
    }
  ],
  importantPoints: ["Top-level global object in browsers.", "`window.document` is the DOM.", "`window.scrollTo` enables smooth scrolling."],
  interviewQuestions: [{ question: "What is the global object in Node.js versus the browser?", answer: "In browser environments, the global object is `window`. In Node.js, it is `global`. Modern ECMAScript standardizes `globalThis` to refer to the global object across all JavaScript runtimes." }],
  practiceExercises: [{ problem: "Write a statement that logs viewport width and height.", hint: "window.innerWidth, window.innerHeight", solution: `console.log("Window API available.");` }]
};

window.TOPIC_DATA_STORE["bom-screen"] = {
  id: "bom-screen",
  title: "Screen",
  lead: "Master the window.screen object, device display resolution, color depth, and available screen bounds.",
  intro: "The `window.screen` object contains information about the visitor's physical screen display (monitor).",
  definition: "A BOM interface exposing physical display hardware attributes including total resolution and available desktop area.",
  whyUse: "Optimizing high-resolution canvas graphics, multi-monitor window positioning, and device telemetry.",
  syntax: `screen.width;
screen.height;
screen.availWidth;
screen.availHeight;
screen.colorDepth;`,
  syntaxExplanation: "`availWidth/availHeight` exclude OS interface elements like the Windows taskbar or Mac dock.",
  simpleExample: `console.log("screen.width: Total physical monitor width in pixels");`,
  expectedOutput: `screen.width: Total physical monitor width in pixels`,
  realLifeExample: {
    domain: "Business Applications",
    title: "Center Popup Window Positioning Based on Screen Dimensions",
    scenario: "Calculating centered desktop coordinates to launch an authentication dialog.",
    code: `let screenW = 1920, screenH = 1080;
let popupW = 600, popupH = 400;
let left = (screenW - popupW) / 2;
let top = (screenH - popupH) / 2;
console.log("Centered popup position: left=" + left + ", top=" + top);`,
    output: `Centered popup position: left=660, top=340`
  },
  practicalExample: {
    title: "Checking Color Depth",
    code: `console.log("screen.colorDepth returns bits per pixel (e.g. 24 or 30 bit).");`,
    output: `screen.colorDepth returns bits per pixel (e.g. 24 or 30 bit).`,
    note: "Modern monitors support 24-bit or 32-bit true color."
  },
  commonMistakes: [{ mistake: "Using screen.width for responsive web design instead of window.innerWidth", wrongCode: `if (screen.width < 768) {} // Measures monitor, NOT the browser window!`, correctCode: `if (window.innerWidth < 768) {}`, explanation: "Users can resize browser windows; always use `window.innerWidth` for layout." }],
  importantPoints: ["`availHeight` subtracts taskbars.", "Measures physical hardware.", "Do not use for CSS responsive layout."],
  interviewQuestions: [{ question: "What is the difference between screen.height and screen.availHeight?", answer: "`screen.height` returns the total physical pixel height of the monitor. `screen.availHeight` returns the usable height excluding permanent OS interface fixtures like taskbars." }],
  practiceExercises: [{ problem: "Write code to log total screen resolution as 'WIDTH x HEIGHT'.", hint: "screen.width + 'x' + screen.height", solution: `console.log("Screen properties accessible via screen object.");` }]
};

window.TOPIC_DATA_STORE["bom-location"] = {
  id: "bom-location",
  title: "Location",
  lead: "Master window.location, URL parsing (href, pathname, search, hash), assign(), and replace().",
  intro: "The `window.location` object can be used to get the current page address (URL) and to redirect the browser to a new page.",
  definition: "An interface representing the current URL of the document and providing programmatic navigation methods.",
  whyUse: "Reading query parameters (`?query=js`), reading hash fragments (`#part1`), and redirecting users.",
  syntax: `location.href;     // Full URL
location.hostname; // Domain
location.pathname; // Path
location.search;   // Query string (?q=...)
location.hash;     // #anchor
location.assign(url);  // Navigate (adds to history)
location.replace(url); // Navigate (replaces history)
location.reload();     // Reload page`,
  syntaxExplanation: "`location.replace()` navigates without creating a back-button entry (ideal for login redirects).",
  simpleExample: `console.log("location.href: current URL string");`,
  expectedOutput: `location.href: current URL string`,
  realLifeExample: {
    domain: "Banking",
    title: "Secure Session Timeout Redirect with location.replace",
    scenario: "Redirecting an expired banking session to login screen without allowing back-button return.",
    code: `function onSessionExpired() {
  console.log("Session expired. Invoking location.replace('/login.html')");
}
onSessionExpired();`,
    output: `Session expired. Invoking location.replace('/login.html')`
  },
  practicalExample: {
    title: "Parsing Query Parameters with URLSearchParams",
    code: `let mockSearch = "?course=javascript&lesson=4";
let params = new URLSearchParams(mockSearch);
console.log("Course Param:", params.get("course"));
console.log("Lesson Param:", params.get("lesson"));`,
    output: `Course Param: javascript\nLesson Param: 4`,
    note: "`URLSearchParams` parses `location.search` into query pairs."
  },
  commonMistakes: [{ mistake: "Using location.assign() for login redirects allowing back-button re-entry", wrongCode: `location.assign("/login");`, correctCode: `location.replace("/login");`, explanation: "`replace()` replaces the history entry so users cannot click back into sensitive authenticated pages." }],
  importantPoints: ["`location.href = url` navigates to new URL.", "`location.hash` triggers hashchange events.", "`location.reload(true)` forces cache bypass in legacy APIs."],
  interviewQuestions: [{ question: "What is the difference between `location.assign()` and `location.replace()`?", answer: "`location.assign(url)` loads a new document and adds a new entry to the browser's session history (enabling the Back button). `location.replace(url)` replaces the current document in history, preventing back-navigation." }],
  practiceExercises: [{ problem: "Use URLSearchParams to read the parameter 'id' from '?id=9021'.", hint: "new URLSearchParams('?id=9021').get('id')", solution: `let p = new URLSearchParams("?id=9021"); console.log("ID:", p.get("id"));` }]
};

window.TOPIC_DATA_STORE["bom-history"] = {
  id: "bom-history",
  title: "History",
  lead: "Master window.history, back(), forward(), go(), pushState(), replaceState(), and popstate events.",
  intro: "The `window.history` object contains the browser's history of pages visited. It powers single-page application (SPA) client-side routing.",
  definition: "An interface managing browser session history navigation and HTML5 pushState URL manipulation.",
  whyUse: "Building Single-Page Applications (SPAs) that update the browser URL without full page refreshes.",
  syntax: `history.back();
history.forward();
history.go(-2);
history.pushState(stateObj, title, url);
history.replaceState(stateObj, title, url);`,
  syntaxExplanation: "`pushState()` changes the URL in the address bar without triggering a server request or page refresh.",
  simpleExample: `console.log("history.pushState(state, '', '/new-url') updates URL without reloading.");`,
  expectedOutput: `history.pushState(state, '', '/new-url') updates URL without reloading.`,
  realLifeExample: {
    domain: "Student Management",
    title: "SPA Student Tab Navigation without Reload",
    scenario: "Updating the address bar to `#grades` or `/grades` smoothly when switching dashboard tabs.",
    code: `function navigateToTab(tabName) {
  console.log("Navigating to: /student/" + tabName);
  console.log("history.pushState called. Page remains active, URL updated.");
}
navigateToTab("attendance");`,
    output: `Navigating to: /student/attendance\nhistory.pushState called. Page remains active, URL updated.`
  },
  practicalExample: {
    title: "Listening to Popstate for Back Button Navigation",
    code: `console.log("window.addEventListener('popstate', e => { ... }) handles browser Back and Forward clicks in SPAs.");`,
    output: `window.addEventListener('popstate', e => { ... }) handles browser Back and Forward clicks in SPAs.`,
    note: "Popstate fires when users click the browser Back or Forward buttons."
  },
  commonMistakes: [{ mistake: "Assuming pushState triggers a popstate event immediately", wrongCode: `history.pushState({}, '', '/page'); // Does NOT trigger popstate!`, correctCode: `// Popstate triggers ONLY upon user clicking Back/Forward buttons or calling history.back()`, explanation: "`pushState()` modifies the history silently without firing `popstate`." }],
  importantPoints: ["`history.length` returns history entry count.", "Powers client-side routers.", "Cross-origin URLs are forbidden in `pushState` for security."],
  interviewQuestions: [{ question: "How does HTML5 History API enable Single Page Application (SPA) routing?", answer: "`history.pushState()` and `history.replaceState()` allow changing the URL displayed in the browser's address bar without triggering a page reload. Combined with the `popstate` event, client-side routers intercept navigation and update the DOM dynamically." }],
  practiceExercises: [{ problem: "Write a statement that navigates back one page in browser history.", hint: "history.back()", solution: `console.log("history.back() navigates backward in history.");` }]
};

window.TOPIC_DATA_STORE["bom-navigator"] = {
  id: "bom-navigator",
  title: "Navigator",
  lead: "Master window.navigator, browser detection, userAgent, online status, clipboard, and hardware concurrency.",
  intro: "The `window.navigator` object contains information about the visitor's browser, operating system, and hardware capabilities.",
  definition: "An interface representing the identity, state, and permissions of the user agent (browser).",
  whyUse: "Detecting offline/online network status, clipboard access, hardware core counts, and platform detection.",
  syntax: `navigator.userAgent;
navigator.onLine; // true/false
navigator.clipboard.writeText("text");
navigator.hardwareConcurrency; // CPU cores
navigator.language;`,
  syntaxExplanation: "`navigator.onLine` reports internet connectivity. `navigator.clipboard` provides asynchronous clipboard copy/paste.",
  simpleExample: `console.log("Online Status:", typeof navigator !== "undefined" ? navigator.onLine : true);`,
  expectedOutput: `Online Status: true`,
  realLifeExample: {
    domain: "Business Applications",
    title: "One-Click Copy Code to Clipboard",
    scenario: "Copying code snippet text to clipboard with `navigator.clipboard.writeText()`.",
    code: `async function copySnippet(text) {
  console.log("Copied to clipboard: '" + text + "'");
  return true;
}
copySnippet("console.log('Hello');");`,
    output: `Copied to clipboard: 'console.log('Hello');'`
  },
  practicalExample: {
    title: "Online / Offline Network Status Monitoring",
    code: `console.log("window.addEventListener('online', ...) and ('offline', ...) detect live network connectivity changes.");`,
    output: `window.addEventListener('online', ...) and ('offline', ...) detect live network connectivity changes.`,
    note: "Modern offline-first PWA applications rely on `navigator.onLine`."
  },
  commonMistakes: [{ mistake: "Relying on navigator.userAgent for feature detection", wrongCode: `if (navigator.userAgent.includes("Chrome")) {} // Fragile! User agents can be spoofed!`, correctCode: `if ("clipboard" in navigator) {} // Feature detection!`, explanation: "Always detect capabilities directly using feature detection (`'feature' in object`) rather than parsing brittle userAgent strings." }],
  importantPoints: ["Use feature detection instead of userAgent sniffing.", "`navigator.clipboard` requires secure HTTPS context.", "`hardwareConcurrency` returns CPU logical cores."],
  interviewQuestions: [{ question: "Why is feature detection preferred over user-agent sniffing with `navigator.userAgent`?", answer: "User-Agent strings are easily spoofed, inconsistent, and change frequently between browser versions. Testing for the actual API existence (e.g. `'geolocation' in navigator`) reliably verifies capability support regardless of browser brand." }],
  practiceExercises: [{ problem: "Write code to copy 'JS Hub 2026' to clipboard using navigator.clipboard.", hint: "navigator.clipboard.writeText(...)", solution: `console.log("Clipboard API writes text asynchronously.");` }]
};

window.TOPIC_DATA_STORE["bom-alert"] = {
  id: "bom-alert",
  title: "Alert",
  lead: "Master window.alert(), modal blocking dialogs, limitations, and modern UI toast alternatives.",
  intro: "The `alert()` method displays an alert box with a specified message and an OK button.",
  definition: "A synchronous modal dialog box halting browser execution until dismissed by the user.",
  whyUse: "Quick testing notices and imperative alerts in introductory programming.",
  syntax: `window.alert("Message text");
alert("Message text");`,
  syntaxExplanation: "Alert blocks the main thread. No code can execute until the user clicks OK.",
  simpleExample: `console.log("alert('Message'): displays synchronous modal popup dialog");`,
  expectedOutput: `alert('Message'): displays synchronous modal popup dialog`,
  realLifeExample: {
    domain: "Banking",
    title: "Critical Security Notification Alert",
    scenario: "Informing user immediately of an unauthorized login attempt.",
    code: `function notifySecurityBreach(ip) {
  console.log("ALERT DIALOG: 'Suspicious login detected from IP: " + ip + "'");
}
notifySecurityBreach("192.168.1.100");`,
    output: `ALERT DIALOG: 'Suspicious login detected from IP: 192.168.1.100'`
  },
  practicalExample: {
    title: "Synchronous Blocking Demonstration",
    code: `console.log("alert() halts the JavaScript event loop until the user dismisses the dialog.");`,
    output: `alert() halts the JavaScript event loop until the user dismisses the dialog.`,
    note: "Modern applications avoid `alert()` in favor of custom HTML modal toasts."
  },
  commonMistakes: [{ mistake: "Using alert() in production web applications", wrongCode: `alert("Payment failed"); // Ugly OS modal, halts thread, poor mobile UX!`, correctCode: `showCustomToast("Payment failed", "error"); // Clean styled HTML notification`, explanation: "`alert()` freezes page execution and cannot be styled with CSS." }],
  importantPoints: ["Synchronous and thread-blocking.", "Cannot be styled.", "Many mobile browsers offer user options to suppress repetitive alerts."],
  interviewQuestions: [{ question: "Why is `window.alert()` discouraged in modern web production apps?", answer: "1. It is synchronous and completely freezes the browser thread.\n2. It cannot be styled with CSS to match application branding.\n3. It offers poor mobile UX and users can permanently block popups." }],
  practiceExercises: [{ problem: "Show how to alert 'Form Submitted' conditionally if valid is true.", hint: "if (valid) alert(...)", solution: `let valid = true; if (valid) console.log("Alert: Form Submitted");` }]
};

window.TOPIC_DATA_STORE["bom-confirm"] = {
  id: "bom-confirm",
  title: "Confirm",
  lead: "Master window.confirm(), OK/Cancel boolean choices, blocking confirmation dialogs, and custom modal alternatives.",
  intro: "The `confirm()` method displays a dialog box with a specified message, along with an OK and a Cancel button.",
  definition: "A synchronous modal dialog returning `true` if OK is clicked and `false` if Cancel is clicked.",
  whyUse: "Confirming destructive actions like deleting records, discarding changes, or resetting passwords.",
  syntax: `let userChoice = window.confirm("Are you sure?"); // returns boolean`,
  syntaxExplanation: "Execution pauses until the user clicks OK (`true`) or Cancel (`false`).",
  simpleExample: `console.log("let choice = confirm('Proceed?'); returns true for OK, false for Cancel");`,
  expectedOutput: `let choice = confirm('Proceed?'); returns true for OK, false for Cancel`,
  realLifeExample: {
    domain: "Attendance Management",
    title: "Delete Employee Record Confirmation",
    scenario: "Prompting HR manager for confirmation before permanently deleting an employee record.",
    code: `function deleteEmployee(empId, isConfirmed) {
  if (isConfirmed) {
    console.log("CONFIRMED: Employee #" + empId + " permanently deleted.");
  } else {
    console.log("CANCELLED: Deletion aborted.");
  }
}
deleteEmployee(1042, true);
deleteEmployee(1088, false);`,
    output: `CONFIRMED: Employee #1042 permanently deleted.\nCANCELLED: Deletion aborted.`
  },
  practicalExample: {
    title: "Simulating Custom Promise-based Confirm Modal",
    code: `async function customConfirm(msg) {
  console.log("Custom Modal displayed with message: " + msg);
  return true; // Simulates user clicking Yes
}
customConfirm("Delete item?").then(ok => console.log("User decision:", ok));`,
    output: `Custom Modal displayed with message: Delete item?\nUser decision: true`,
    note: "Custom Promise-based modals provide non-blocking confirmations."
  },
  commonMistakes: [{ mistake: "Assuming confirm() is non-blocking", wrongCode: `confirm("Delete?"); doSomethingImmediately(); // Halts until user clicks!`, correctCode: `if (confirm("Delete?")) { doSomething(); }`, explanation: "`confirm()` stops execution until answered." }],
  importantPoints: ["Returns true (OK) or false (Cancel).", "Blocks main thread.", "Replace with custom modals in production."],
  interviewQuestions: [{ question: "What does window.confirm() return when the user closes the dialog or clicks Cancel?", answer: "It returns `false`. If the user clicks 'OK', it returns `true`." }],
  practiceExercises: [{ problem: "Write code prompting confirm for 'Clear Cart?' and logging decision.", hint: "let ok = confirm(...)", solution: `console.log("Confirm dialog returns boolean.");` }]
};

window.TOPIC_DATA_STORE["bom-prompt"] = {
  id: "bom-prompt",
  title: "Prompt",
  lead: "Master window.prompt(), reading synchronous text inputs, default values, and cancellation handling.",
  intro: "The `prompt()` method displays a dialog box that prompts the visitor for input.",
  definition: "A synchronous modal dialog displaying text prompt, text input field, and OK/Cancel buttons.",
  whyUse: "Quick debugging prompts to request user string input without creating HTML forms.",
  syntax: `let input = window.prompt("Enter name:", "Default Name");`,
  syntaxExplanation: "Returns user typed string if OK is clicked; returns `null` if Cancel or Escape is pressed.",
  simpleExample: `console.log("prompt(question, default): returns string if OK, null if Cancel");`,
  expectedOutput: `prompt(question, default): returns string if OK, null if Cancel`,
  realLifeExample: {
    domain: "Restaurant Billing",
    title: "Prompting Table Discount Percentage",
    scenario: "Asking manager to enter a manual override discount percentage for a VIP table bill.",
    code: `function applyManagerDiscount(billAmount, enteredDiscount) {
  if (enteredDiscount !== null && enteredDiscount !== "") {
    let disc = Number(enteredDiscount);
    let finalAmount = billAmount - (billAmount * disc / 100);
    console.log("Applied " + disc + "% discount. Final Bill: Rs." + finalAmount);
  } else {
    console.log("No discount entered. Full bill: Rs." + billAmount);
  }
}

applyManagerDiscount(2000, "15");
applyManagerDiscount(2000, null);`,
    output: `Applied 15% discount. Final Bill: Rs.1700\nNo discount entered. Full bill: Rs.2000`
  },
  practicalExample: {
    title: "Parsing Prompt Numbers Safely",
    code: `let userInput = "25"; // Simulated prompt output
let numericAge = userInput !== null ? parseInt(userInput, 10) : null;
console.log("Parsed Age:", numericAge);`,
    output: `Parsed Age: 25`,
    note: "Always check `input !== null` before calling parsing methods."
  },
  commonMistakes: [{ mistake: "Assuming prompt returns a Number", wrongCode: `let age = prompt("Age?"); let nextYear = age + 1; // "25" + 1 = "251"!`, correctCode: `let age = Number(prompt("Age?")); let nextYear = age + 1; // 26`, explanation: "`prompt()` always returns a string (or `null`). Explicitly convert to number." }],
  importantPoints: ["Returns string or `null`.", "Canceling returns `null`.", "Blocks thread execution."],
  interviewQuestions: [{ question: "What does window.prompt() return if the user clicks Cancel?", answer: "It returns `null`. If the user clicks OK with an empty input field, it returns an empty string `''`." }],
  practiceExercises: [{ problem: "Demonstrate checking if prompt was cancelled by checking `val === null`.", hint: "if (val === null) ...", solution: `let val = null; console.log("Was Cancelled?", val === null);` }]
};

window.TOPIC_DATA_STORE["bom-cookies"] = {
  id: "bom-cookies",
  title: "Cookies",
  lead: "Master document.cookie, reading, writing, max-age, expires, path, SameSite, and Secure flags.",
  intro: "Cookies are data, stored in small text files (up to 4KB), on your computer. When a web server has sent a web page to a browser, the connection is shut down, and the server forgets everything about the user.",
  definition: "Small key-value text tokens sent back and forth between browser and web server via HTTP headers for session management.",
  whyUse: "Maintaining authentication session tokens, tracking visitor preferences, and cross-session persistence.",
  syntax: `// Write cookie
document.cookie = "username=Rohan; max-age=86400; path=/; SameSite=Strict; Secure";

// Read cookies
let allCookies = document.cookie; // "key1=val1; key2=val2"`,
  syntaxExplanation: "Assigning to `document.cookie` appends or updates an individual cookie without overwriting others.",
  simpleExample: `console.log("Cookies are managed via document.cookie with key=value; max-age=seconds; path=/");`,
  expectedOutput: `Cookies are managed via document.cookie with key=value; max-age=seconds; path=/`,
  realLifeExample: {
    domain: "E-commerce",
    title: "Theme Preference Cookie Storage",
    scenario: "Saving user preferred theme ('dark') in a cookie valid for 30 days.",
    code: `function setCookie(name, value, days) {
  let maxAge = days * 24 * 60 * 60;
  console.log("Setting Cookie: " + name + "=" + value + "; max-age=" + maxAge + "; path=/; SameSite=Lax");
}

setCookie("theme", "dark", 30);`,
    output: `Setting Cookie: theme=dark; max-age=2592000; path=/; SameSite=Lax`
  },
  practicalExample: {
    title: "Parsing document.cookie String into an Object",
    code: `let cookieString = "session=xyz123; theme=dark; lang=en";
let cookies = Object.fromEntries(cookieString.split("; ").map(c => c.split("=")));
console.log("Parsed Cookies:", cookies);
console.log("Session Token :", cookies.session);`,
    output: `Parsed Cookies: { session: 'xyz123', theme: 'dark', lang: 'en' }\nSession Token : xyz123`,
    note: "Split by `; ` to parse cookie headers into clean dictionaries."
  },
  commonMistakes: [{ mistake: "Assuming document.cookie = 'foo=bar' deletes other cookies", wrongCode: `// Thinking setting one cookie replaces all cookies`, correctCode: `// Assigning appends or updates that specific key-value pair`, explanation: "`document.cookie` is a special getter/setter that updates keys individually." }],
  importantPoints: ["Size limited to ~4KB per domain.", "Transmitted in every HTTP request header.", "Use `HttpOnly` flag (server-side) to prevent XSS theft."],
  interviewQuestions: [{ question: "What is the difference between Cookies, LocalStorage, and SessionStorage?", answer: "1. **Cookies**: ~4KB, sent automatically with every HTTP request, supports expiration date.\n2. **LocalStorage**: ~5-10MB, persistent indefinitely until cleared, client-only.\n3. **SessionStorage**: ~5MB, cleared when the browser tab closes, client-only." }],
  practiceExercises: [{ problem: "Write code that deletes a cookie named 'user' by setting its max-age to 0.", hint: "document.cookie = 'user=; max-age=0;'", solution: `console.log("Deleting cookie: max-age=0 expires it immediately.");` }]
};

// PART 22: FETCH API AND JSON
window.TOPIC_DATA_STORE["api-intro"] = {
  id: "api-intro",
  title: "API Introduction",
  lead: "Master Application Programming Interfaces (APIs), REST architecture, client-server communication, and endpoints.",
  intro: "An API (Application Programming Interface) allows two software programs to communicate with each other. Web APIs expose HTTP endpoints to fetch and send data.",
  definition: "A set of protocols, endpoints, and definitions for exchanging structured data over HTTP/HTTPS.",
  whyUse: "Connecting front-ends to databases, weather services, payment gateways, and authentication providers.",
  syntax: `// Standard REST API endpoint structure
// GET    https://api.example.com/students
// POST   https://api.example.com/students
// GET    https://api.example.com/students/101
// DELETE https://api.example.com/students/101`,
  syntaxExplanation: "REST APIs use standard HTTP verbs (GET, POST, PUT, DELETE) and JSON payloads.",
  simpleExample: `console.log("REST APIs communicate using JSON over HTTP endpoints.");`,
  expectedOutput: `REST APIs communicate using JSON over HTTP endpoints.`,
  realLifeExample: {
    domain: "Student Management",
    title: "Student Portal REST Endpoint Specifications",
    scenario: "Mapping CRUD operations for student records to standardized REST endpoints.",
    code: `const API_ROUTES = {
  GET_ALL_STUDENTS: "GET /api/v1/students",
  CREATE_STUDENT  : "POST /api/v1/students",
  GET_STUDENT_BY_ID: "GET /api/v1/students/:id",
  UPDATE_STUDENT  : "PUT /api/v1/students/:id",
  DELETE_STUDENT  : "DELETE /api/v1/students/:id"
};

console.log("API Specification Routes:");
for (let [k, v] of Object.entries(API_ROUTES)) {
  console.log(" - " + k + " => " + v);
}`,
    output: `API Specification Routes:\n - GET_ALL_STUDENTS => GET /api/v1/students\n - CREATE_STUDENT => POST /api/v1/students\n - GET_STUDENT_BY_ID => GET /api/v1/students/:id\n - UPDATE_STUDENT => PUT /api/v1/students/:id\n - DELETE_STUDENT => DELETE /api/v1/students/:id`
  },
  practicalExample: {
    title: "JSON Payload Structure in APIs",
    code: `let samplePayload = {
  status: "success",
  data: [ { id: 101, name: "Aarav" } ],
  meta: { total: 1, page: 1 }
};
console.log("Standard API response enveloped in JSON.");`,
    output: `Standard API response enveloped in JSON.`,
    note: "Standard REST APIs envelope payloads with status and meta fields."
  },
  commonMistakes: [{ mistake: "Assuming API calls return data immediately synchronously", wrongCode: `let data = fetch(url); // Returns a Promise, NOT the data!`, correctCode: `let response = await fetch(url); let data = await response.json();`, explanation: "Network operations are asynchronous; you must `await` both the response and `.json()` parsing." }],
  importantPoints: ["REST uses HTTP verbs.", "Data is commonly formatted in JSON.", "Calls are asynchronous."],
  interviewQuestions: [{ question: "What is a RESTful API?", answer: "REST (Representational State Transfer) is an architectural style for network applications using stateless communication, standard HTTP methods (GET, POST, PUT, DELETE), and resource-based URI endpoints." }],
  practiceExercises: [{ problem: "List which HTTP method is used for: Read, Create, Update, Delete.", hint: "GET, POST, PUT, DELETE", solution: `console.log("CRUD: Create=POST, Read=GET, Update=PUT, Delete=DELETE");` }]
};

window.TOPIC_DATA_STORE["api-fetch"] = {
  id: "api-fetch",
  title: "Fetch API",
  lead: "Master modern window.fetch(), Promise chaining, async/await, response.ok, and error handling.",
  intro: "The Fetch API provides a modern, Promise-based interface for fetching resources asynchronously across the network.",
  definition: "A standardized Web API for making asynchronous HTTP requests returning Promises.",
  whyUse: "Clean async/await syntax, streaming response bodies, no third-party library dependencies (replaces Axios/jQuery).",
  syntax: `// Modern async/await fetch pattern
async function getData(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error("HTTP error " + response.status);
  const data = await response.json();
  return data;
}`,
  syntaxExplanation: "`fetch()` resolves when the headers arrive. Always check `response.ok` (status 200-299) before calling `.json()`.",
  simpleExample: `console.log("fetch(url).then(res => res.json()).then(data => console.log(data));");`,
  expectedOutput: `fetch(url).then(res => res.json()).then(data => console.log(data));`,
  realLifeExample: {
    domain: "Banking",
    title: "Live Currency Exchange Rate Fetcher",
    scenario: "Fetching real-time USD to INR exchange rates from a simulated financial rates API.",
    code: `async function fetchLiveExchangeRate() {
  console.log("Initiating fetch('https://api.fxrates.example/latest')...");
  // Simulated API response
  let simulatedResponse = { ok: true, status: 200, json: async () => ({ base: "USD", rates: { INR: 83.25 } }) };
  
  if (simulatedResponse.ok) {
    let data = await simulatedResponse.json();
    console.log("1 USD = Rs." + data.rates.INR);
  }
}

fetchLiveExchangeRate();`,
    output: `Initiating fetch('https://api.fxrates.example/latest')...\n1 USD = Rs.83.25`
  },
  practicalExample: {
    title: "Handling HTTP 404/500 with response.ok",
    code: `// Fetch does NOT reject on 404 or 500! You must check response.ok!
let res = { ok: false, status: 404, statusText: "Not Found" };
if (!res.ok) {
  console.log("HTTP Error caught:", res.status, res.statusText);
}`,
    output: `HTTP Error caught: 404 Not Found`,
    note: "Fetch only rejects on network failures (e.g. offline, DNS failure)."
  },
  commonMistakes: [
    {
      mistake: "Expecting fetch() to reject on 404 or 500 HTTP errors",
      wrongCode: `fetch("/bad-url").catch(err => console.log("Caught!")); // Does NOT catch 404!`,
      correctCode: `let res = await fetch("/bad-url"); if (!res.ok) throw new Error(res.status);`,
      explanation: "`fetch()` resolves successfully even on 404 or 500. It only rejects on total network failure."
    }
  ],
  importantPoints: [
    "Always check `response.ok`.",
    "`response.json()` returns a Promise.",
    "Fetch supports AbortController for request cancellation."
  ],
  interviewQuestions: [
    {
      question: "Why doesn't a 404 or 500 response reject the fetch() Promise?",
      answer: "The Promise returned by `fetch()` represents the HTTP network roundtrip itself. If the server was reached and responded with headers (even an error status like 404 or 500), the network request completed successfully. You must inspect `response.ok` or `response.status`."
    }
  ],
  practiceExercises: [
    {
      problem: "Write an async fetch skeleton that verifies `response.ok` before parsing JSON.",
      hint: "if (!res.ok) throw Error; return res.json();",
      solution: `async function safeFetch(url) {
  // let res = await fetch(url);
  // if (!res.ok) throw new Error(res.status);
  // return await res.json();
  console.log("Safe fetch pattern verified.");
}
safeFetch();`
    }
  ]
};

window.TOPIC_DATA_STORE["api-http-methods"] = {
  id: "api-http-methods",
  title: "HTTP Methods",
  lead: "Master GET, POST, PUT, PATCH, DELETE, and HTTP status code categories (2xx, 3xx, 4xx, 5xx).",
  intro: "HTTP methods define the desired action to be performed for a given resource. The most common methods are GET, POST, PUT, PATCH, and DELETE.",
  definition: "Standardized request methods indicating the operational semantic performed on a REST resource.",
  whyUse: "Conforming to REST architecture, caching optimization (GET), and data safety.",
  syntax: `// GET    - Read data
// POST   - Create new record
// PUT    - Replace existing record
// PATCH  - Partial update
// DELETE - Remove record`,
  syntaxExplanation: "GET requests have no payload body. POST, PUT, and PATCH carry JSON payloads in the request body.",
  simpleExample: `console.log("HTTP Methods: GET (Read), POST (Create), PUT (Replace), PATCH (Update), DELETE (Remove)");`,
  expectedOutput: `HTTP Methods: GET (Read), POST (Create), PUT (Replace), PATCH (Update), DELETE (Remove)`,
  realLifeExample: {
    domain: "Attendance Management",
    title: "Attendance Operations HTTP Method Mapping",
    scenario: "Associating employee attendance operations with corresponding RESTful HTTP verbs.",
    code: `let operations = [
  { action: "View monthly attendance", method: "GET", path: "/api/attendance?month=11" },
  { action: "Clock-in punch", method: "POST", path: "/api/attendance/punch" },
  { action: "Correct punch time", method: "PATCH", path: "/api/attendance/:id" },
  { action: "Remove duplicate record", method: "DELETE", path: "/api/attendance/:id" }
];

operations.forEach(op => console.log(op.method + " " + op.path + " => " + op.action));`,
    output: `GET /api/attendance?month=11 => View monthly attendance\nPOST /api/attendance/punch => Clock-in punch\nPATCH /api/attendance/:id => Correct punch time\nDELETE /api/attendance/:id => Remove duplicate record`
  },
  practicalExample: {
    title: "Idempotency in HTTP Methods",
    code: `// GET, PUT, DELETE are idempotent: repeating them yields the exact same state.
// POST is NOT idempotent: repeating it creates duplicate records!
console.log("GET, PUT, DELETE are idempotent. POST is non-idempotent.");`,
    output: `GET, PUT, DELETE are idempotent. POST is non-idempotent.`,
    note: "Idempotence prevents duplicate transactions on network retry."
  },
  commonMistakes: [{ mistake: "Sending sensitive data in GET URL query strings", wrongCode: `fetch("/login?password=secret"); // Password logged in browser history & server access logs!`, correctCode: `fetch("/login", { method: "POST", body: JSON.stringify({ password }) });`, explanation: "GET query parameters appear in URLs, browser history, and proxy logs. Use POST body for sensitive data." }],
  importantPoints: ["GET must be safe and idempotent.", "PUT replaces; PATCH modifies partially.", "Status codes: 2xx Success, 3xx Redirect, 4xx Client Error, 5xx Server Error."],
  interviewQuestions: [{ question: "What is the difference between PUT and PATCH?", answer: "**PUT** replaces the entire resource with the provided representation (all omitted fields are cleared/reset). **PATCH** applies a partial update, modifying *only* the specific fields supplied in the request body while leaving other fields intact." }],
  practiceExercises: [{ problem: "Identify which method to use when updating only a customer's email address.", hint: "PATCH", solution: `console.log("Partial update uses PATCH.");` }]
};

window.TOPIC_DATA_STORE["api-get"] = {
  id: "api-get",
  title: "GET Requests",
  lead: "Master fetching data with HTTP GET, query parameters, caching, and handling JSON responses.",
  intro: "The GET method requests a representation of the specified resource. Requests using GET should only retrieve data and should not contain a request body.",
  definition: "A safe, idempotent HTTP method used exclusively for retrieving data from an endpoint.",
  whyUse: "Loading product lists, retrieving user profiles, reading articles, and searching datasets.",
  syntax: `fetch("https://api.example.com/items?category=books")
  .then(res => res.json())
  .then(data => console.log(data));`,
  syntaxExplanation: "`fetch()` defaults to method GET if no options object is provided.",
  simpleExample: `console.log("fetch('https://api.example.com/data') defaults to GET request.");`,
  expectedOutput: `fetch('https://api.example.com/data') defaults to GET request.`,
  realLifeExample: {
    domain: "E-commerce",
    title: "Fetching Category Products with Query Parameters",
    scenario: "Loading smartphones priced under Rs. 50,000 using query string parameters.",
    code: `let baseUrl = "https://api.store.example/products";
let params = new URLSearchParams({
  category: "smartphones",
  maxPrice: "50000",
  limit: "10"
});

let fullUrl = baseUrl + "?" + params.toString();
console.log("Constructed GET URL:", fullUrl);`,
    output: `Constructed GET URL: https://api.store.example/products?category=smartphones&maxPrice=50000&limit=10`
  },
  practicalExample: {
    title: "Async/Await Pattern for GET",
    code: `async function loadStudents() {
  console.log("Fetching student records...");
  return [ { id: 101, name: "Aarav" } ];
}
loadStudents().then(list => console.log("Loaded:", list));`,
    output: `Fetching student records...\nLoaded: [ { id: 101, name: 'Aarav' } ]`,
    note: "Async/await flattens Promise chains."
  },
  commonMistakes: [{ mistake: "Attaching a body property to a GET request in fetch", wrongCode: `fetch(url, { method: "GET", body: JSON.stringify(data) }); // TypeError!`, correctCode: `fetch(url + "?" + new URLSearchParams(data)); // Query params in URL!`, explanation: "HTTP GET requests cannot have a request body in browser fetch." }],
  importantPoints: ["GET requests can be cached by browsers and CDNs.", "Parameters belong in the URL query string.", "Safe and idempotent."],
  interviewQuestions: [{ question: "Can a GET request have a body in browser Fetch API?", answer: "No. The Fetch specification explicitly forbids bodies in GET and HEAD requests. Passing a `body` property with `method: 'GET'` throws a `TypeError: Failed to execute 'fetch' on 'Window': Request with GET/HEAD method cannot have body`." }],
  practiceExercises: [{ problem: "Construct a GET URL with query params `page=2` and `sort=asc` using URLSearchParams.", hint: "new URLSearchParams({ page: 2, sort: 'asc' })", solution: `let p = new URLSearchParams({ page: 2, sort: "asc" }); console.log("Query:", p.toString());` }]
};

window.TOPIC_DATA_STORE["api-post"] = {
  id: "api-post",
  title: "POST Requests",
  lead: "Master sending data with HTTP POST, JSON request bodies, Content-Type headers, and receiving 201 Created.",
  intro: "The POST method submits an entity to the specified resource, often causing a change in state or side effects on the server.",
  definition: "A non-idempotent HTTP method used to transmit data payloads to a server to create a new resource.",
  whyUse: "Submitting registration forms, placing orders, processing credit card charges, and file uploads.",
  syntax: `fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(payload)
});`,
  syntaxExplanation: "Must specify `method: 'POST'`, set `'Content-Type': 'application/json'`, and pass serialized string to `body`.",
  simpleExample: `console.log("fetch(url, { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data) })");`,
  expectedOutput: `fetch(url, { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data) })`,
  realLifeExample: {
    domain: "Student Management",
    title: "New Student Enrollment POST Request",
    scenario: "Submitting a new student enrollment form to the backend REST API.",
    code: `async function enrollStudent(studentData) {
  let requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(studentData)
  };
  
  console.log("POST Request Prepared for: /api/students");
  console.log("Payload:", requestOptions.body);
  console.log("Server Response: 201 Created (ID: STD-2026-99)");
}

enrollStudent({ name: "Meera Nair", course: "Data Science", semester: 1 });`,
    output: `POST Request Prepared for: /api/students\nPayload: {"name":"Meera Nair","course":"Data Science","semester":1}\nServer Response: 201 Created (ID: STD-2026-99)`
  },
  practicalExample: {
    title: "Sending FormData with fetch for File Uploads",
    code: `// When sending FormData, do NOT set Content-Type header! Browser sets multipart boundary automatically!
console.log("FormData sets multipart/form-data boundary automatically.");`,
    output: `FormData sets multipart/form-data boundary automatically.`,
    note: "Do not set `Content-Type` manually when sending `FormData`."
  },
  commonMistakes: [{ mistake: "Passing raw JavaScript object to body without JSON.stringify", wrongCode: `fetch(url, { method: "POST", body: { name: "Rohan" } }); // Sends "[object Object]"!`, correctCode: `fetch(url, { method: "POST", body: JSON.stringify({ name: "Rohan" }) });`, explanation: "The `body` must be a serialized string or Blob/FormData." }],
  importantPoints: ["Always set `'Content-Type': 'application/json'` for JSON.", "Non-idempotent.", "Returns HTTP 201 Created upon success."],
  interviewQuestions: [{ question: "Why must you stringify the body object in a POST fetch request?", answer: "HTTP is a text-based protocol. A JavaScript object literal cannot be transmitted directly across the network; it must be serialized into a JSON string using `JSON.stringify()`, accompanied by the `'Content-Type': 'application/json'` header." }],
  practiceExercises: [{ problem: "Write options object for a POST request submitting `{ title: 'Task 1' }`.", hint: "{ method: 'POST', headers: {...}, body: ... }", solution: `let opt = { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ title: "Task 1" }) }; console.log("Options valid.");` }]
};

window.TOPIC_DATA_STORE["api-put"] = {
  id: "api-put",
  title: "PUT Requests",
  lead: "Master full resource replacement with HTTP PUT, idempotent updates, and comparing PUT vs PATCH.",
  intro: "The HTTP PUT request method creates a new resource or replaces a representation of the target resource with the request payload.",
  definition: "An idempotent HTTP method that replaces the entire resource at the target URL with the supplied payload.",
  whyUse: "Updating full user profile configurations, overwriting document contents, and idempotent resource resets.",
  syntax: `fetch("https://api.example.com/items/101", {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(fullReplacementObject)
});`,
  syntaxExplanation: "PUT replaces the resource entirely. If a property is omitted in the payload, the server typically resets that property to null or default.",
  simpleExample: `console.log("PUT /api/items/101 replaces the entire item at ID 101.");`,
  expectedOutput: `PUT /api/items/101 replaces the entire item at ID 101.`,
  realLifeExample: {
    domain: "Attendance Management",
    title: "Overwriting Monthly Employee Roster with PUT",
    scenario: "Uploading an entire updated shift schedule replacing the prior month's schedule.",
    code: `let fullUpdatedRoster = {
  month: "November 2026",
  shifts: [ { empId: 101, shift: "Morning" }, { empId: 102, shift: "Night" } ]
};

console.log("PUT /api/roster/2026-11 Payload Prepared.");
console.log("Replacing entire previous monthly roster.");`,
    output: `PUT /api/roster/2026-11 Payload Prepared.\nReplacing entire previous monthly roster.`
  },
  practicalExample: {
    title: "PUT Idempotency Verification",
    code: `console.log("Calling PUT 10 times with identical payload leaves server in the exact same state.");`,
    output: `Calling PUT 10 times with identical payload leaves server in the exact same state.`,
    note: "Idempotency prevents duplicate state accumulation."
  },
  commonMistakes: [{ mistake: "Using PUT for partial updates (omitted fields get deleted)", wrongCode: `// Sending only { email: 'new@test.com' } via PUT might wipe name and role!`, correctCode: `// Use PATCH for partial updates, or send complete object with PUT`, explanation: "PUT replaces the whole record. Use PATCH when updating selected attributes." }],
  importantPoints: ["PUT is idempotent.", "Replaces entire entity.", "Target URL identifies specific resource ID."],
  interviewQuestions: [{ question: "Why is PUT considered idempotent while POST is not?", answer: "Executing a PUT request multiple times with identical data results in the exact same server state (the resource is replaced with that state). Executing a POST request multiple times creates multiple duplicate resources." }],
  practiceExercises: [{ problem: "Write options for a PUT request updating user 5.", hint: "{ method: 'PUT', ... }", solution: `let putOpt = { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: 5, name: "Kunal" }) }; console.log("PUT ready.");` }]
};

window.TOPIC_DATA_STORE["api-patch"] = {
  id: "api-patch",
  title: "PATCH Requests",
  lead: "Master partial resource modification with HTTP PATCH, bandwidth efficiency, and partial payloads.",
  intro: "The HTTP PATCH request method applies partial modifications to a resource.",
  definition: "A method used to update specific fields of a resource without affecting other fields.",
  whyUse: "Toggling a status flag (e.g. `isCompleted: true`), updating email without re-sending entire profile, and saving bandwidth.",
  syntax: `fetch("https://api.example.com/todos/42", {
  method: "PATCH",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ completed: true }) // Only sending the changed field!
});`,
  syntaxExplanation: "Only modified properties are sent in the body; omitted properties remain untouched on the server.",
  simpleExample: `console.log("PATCH /api/todos/42 updates ONLY the 'completed' field.");`,
  expectedOutput: `PATCH /api/todos/42 updates ONLY the 'completed' field.`,
  realLifeExample: {
    domain: "Banking",
    title: "Updating Customer Mobile Number via PATCH",
    scenario: "Modifying only a customer's phone number without transmitting entire bank account records.",
    code: `let updatePatch = { phoneNumber: "+91-9876543210" };

console.log("PATCH /api/customers/AC-9901");
console.log("Payload:", JSON.stringify(updatePatch));
console.log("Server Updates phone number only; balance and name remain untouched.");`,
    output: `PATCH /api/customers/AC-9901\nPayload: {"phoneNumber":"+91-9876543210"}\nServer Updates phone number only; balance and name remain untouched.`
  },
  practicalExample: {
    title: "Toggling Task Status with PATCH",
    code: `async function toggleTask(taskId, isDone) {
  let opt = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ done: isDone })
  };
  console.log("Patched task #" + taskId + " to done=" + isDone);
}
toggleTask(101, true);`,
    output: `Patched task #101 to done=true`,
    note: "Ideal for fast inline toggle switches in web applications."
  },
  commonMistakes: [{ mistake: "Sending the entire full object in a PATCH request", wrongCode: `// Defeats the architectural purpose of PATCH`, correctCode: `// Send only modified deltas`, explanation: "PATCH is specifically designed to transmit minimal deltas." }],
  importantPoints: ["Transmits only changed fields.", "Conserves mobile network bandwidth.", "Target URL points to specific resource."],
  interviewQuestions: [{ question: "When should you choose PATCH over PUT?", answer: "Choose **PATCH** when you need to update one or a few fields on a large resource (e.g., updating a user's avatar URL or marking a todo completed). Choose **PUT** when replacing the complete representation or when idempotency guarantees are strictly required." }],
  practiceExercises: [{ problem: "Write options for a PATCH request updating status to 'Shipped'.", hint: "{ method: 'PATCH', body: JSON.stringify({ status: 'Shipped' }) }", solution: `let opt = { method: "PATCH", body: JSON.stringify({ status: "Shipped" }) }; console.log("PATCH prepared.");` }]
};

window.TOPIC_DATA_STORE["api-delete"] = {
  id: "api-delete",
  title: "DELETE Requests",
  lead: "Master deleting resources with HTTP DELETE, status codes (200 OK vs 204 No Content), and confirmation flows.",
  intro: "The HTTP DELETE request method deletes the specified resource from the server.",
  definition: "An idempotent HTTP method requesting the removal of a resource identified by a URI.",
  whyUse: "Removing cart items, canceling subscriptions, deleting student records, and purging logs.",
  syntax: `fetch("https://api.example.com/items/101", {
  method: "DELETE",
  headers: { "Authorization": "Bearer TOKEN" }
});`,
  syntaxExplanation: "Typically carries no request body. The server returns `204 No Content` or `200 OK` upon successful deletion.",
  simpleExample: `console.log("DELETE /api/items/101 removes the resource permanently.");`,
  expectedOutput: `DELETE /api/items/101 removes the resource permanently.`,
  realLifeExample: {
    domain: "Student Management",
    title: "Deleting Student Enrollment Record",
    scenario: "Removing a withdrawn student record using HTTP DELETE with bearer authorization header.",
    code: `async function removeStudent(studentId) {
  console.log("DELETE /api/students/" + studentId);
  console.log("Server Response: 204 No Content (Deleted successfully)");
}
removeStudent("STD-1042");`,
    output: `DELETE /api/students/STD-1042\nServer Response: 204 No Content (Deleted successfully)`
  },
  practicalExample: {
    title: "Handling 204 No Content Responses",
    code: `// A 204 response has NO body! Calling res.json() will throw an error!
let mockRes = { status: 204, ok: true };
if (mockRes.status === 204) {
  console.log("Deleted cleanly, skipping response.json() call.");
}`,
    output: `Deleted cleanly, skipping response.json() call.`,
    note: "Do not call `.json()` on a `204 No Content` response."
  },
  commonMistakes: [{ mistake: "Calling response.json() on a 204 No Content DELETE response", wrongCode: `let data = await res.json(); // SyntaxError: Unexpected end of JSON input!`, correctCode: `if (res.status === 204) return true;`, explanation: "HTTP 204 responses contain zero body bytes; parsing as JSON throws an error." }],
  importantPoints: ["DELETE is idempotent.", "Frequently returns `204 No Content`.", "Always confirm destructive actions with users first."],
  interviewQuestions: [{ question: "What does HTTP status 204 No Content mean in a DELETE response?", answer: "HTTP 204 means the server successfully executed the request (the resource was deleted), but there is no additional message body returned to the client." }],
  practiceExercises: [{ problem: "Write options for a DELETE request with an Authorization header.", hint: "{ method: 'DELETE', headers: { 'Authorization': ... } }", solution: `let opt = { method: "DELETE", headers: { "Authorization": "Bearer token123" } }; console.log("DELETE options ready.");` }]
};

window.TOPIC_DATA_STORE["api-headers"] = {
  id: "api-headers",
  title: "Request Headers",
  lead: "Master HTTP request and response headers: Content-Type, Authorization, Accept, CORS, and Headers API.",
  intro: "HTTP headers let the client and the server pass additional information with an HTTP request or response.",
  definition: "Key-value metadata pairs accompanying HTTP requests and responses governing content types, caching, and authentication.",
  whyUse: "Transmitting bearer tokens (`Authorization`), specifying payload format (`Content-Type`), and API versioning.",
  syntax: `const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Bearer TOKEN_HERE");

fetch(url, { headers: myHeaders });`,
  syntaxExplanation: "The `Headers` class allows adding, getting, and deleting header tokens.",
  simpleExample: `let h = new Headers();
h.set("Accept", "application/json");
console.log("Accept header:", h.get("Accept"));`,
  expectedOutput: `Accept header: application/json`,
  realLifeExample: {
    domain: "Banking",
    title: "Secure Banking JWT Token Header Injection",
    scenario: "Injecting an OAuth2 JWT token into the `Authorization` header for wire transfers.",
    code: `let jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...";
let headers = {
  "Content-Type": "application/json",
  "Authorization": "Bearer " + jwtToken,
  "X-Request-ID": "REQ-" + Date.now()
};

console.log("Outbound Headers configured:");
console.log(" - Authorization: Bearer [REDACTED_JWT]");
console.log(" - Content-Type : " + headers["Content-Type"]);
console.log(" - X-Request-ID : " + headers["X-Request-ID"]);`,
    output: `Outbound Headers configured:\n - Authorization: Bearer [REDACTED_JWT]\n - Content-Type : application/json\n - X-Request-ID: REQ-` + Date.now()
  },
  practicalExample: {
    title: "Reading Response Headers",
    code: `let mockHeaders = new Headers({ "content-type": "application/json", "x-rate-limit": "100" });
console.log("Content-Type Header:", mockHeaders.get("content-type"));
console.log("Rate Limit Remaining :", mockHeaders.get("x-rate-limit"));`,
    output: `Content-Type Header: application/json\nRate Limit Remaining : 100`,
    note: "Header keys are case-insensitive."
  },
  commonMistakes: [{ mistake: "Assuming header names are case-sensitive", wrongCode: `// headers.get('Content-Type') vs headers.get('content-type')`, correctCode: `// HTTP headers are strictly case-insensitive!`, explanation: "HTTP header names are case-insensitive according to RFC standards." }],
  importantPoints: ["`Content-Type` describes body format.", "`Authorization: Bearer <token>` is the standard token scheme.", "Custom headers conventionally use `X-` prefix."],
  interviewQuestions: [{ question: "What is the difference between `Content-Type` and `Accept` headers?", answer: "`Content-Type` informs the receiver about the media type of the *sent payload* body (e.g., `'application/json'`). `Accept` tells the server what media types the client *is willing to receive* in response." }],
  practiceExercises: [{ problem: "Create a Headers object and set `Accept: application/json`.", hint: "new Headers().set('Accept', 'application/json')", solution: `let h = new Headers(); h.set("Accept", "application/json"); console.log("Header set.");` }]
};

window.TOPIC_DATA_STORE["api-response"] = {
  id: "api-response",
  title: "Response Handling",
  lead: "Master Response objects: ok, status, statusText, headers, json(), text(), blob(), and clone().",
  intro: "The Response interface of the Fetch API represents the response to a request.",
  definition: "The object returned by a resolved `fetch()` Promise encapsulating HTTP status, headers, and body readers.",
  whyUse: "Reading JSON payloads, downloading images (`blob`), extracting raw HTML (`text`), and verifying HTTP success.",
  syntax: `const response = await fetch(url);
response.ok;         // true if 200-299
response.status;     // 200, 404, 500
response.statusText; // "OK", "Not Found"
await response.json(); // Parse JSON
await response.text(); // Plain text
await response.blob(); // Binary / images`,
  syntaxExplanation: "The response body can only be read **once** because it is a readable stream. Use `response.clone()` to read multiple times.",
  simpleExample: `let res = { ok: true, status: 200, statusText: "OK" };
console.log("Status:", res.status, res.statusText, "| OK?", res.ok);`,
  expectedOutput: `Status: 200 OK | OK? true`,
  realLifeExample: {
    domain: "E-commerce",
    title: "Downloading Invoice PDF as Blob",
    scenario: "Fetching an invoice receipt as binary Blob data and generating a download link.",
    code: `async function downloadInvoicePdf(orderId) {
  console.log("Downloading invoice for order: " + orderId);
  console.log("Calling response.blob() to parse binary PDF stream.");
  console.log("URL.createObjectURL(blob) generates local download anchor.");
}
downloadInvoicePdf("ORD-1042");`,
    output: `Downloading invoice for order: ORD-1042\nCalling response.blob() to parse binary PDF stream.\nURL.createObjectURL(blob) generates local download anchor.`
  },
  practicalExample: {
    title: "Cloning Response with response.clone()",
    code: `console.log("response.clone() creates an identical copy before reading the stream twice.");`,
    output: `response.clone() creates an identical copy before reading the stream twice.`,
    note: "Streams can only be consumed once without cloning."
  },
  commonMistakes: [{ mistake: "Attempting to call response.json() twice on the same response", wrongCode: `let d1 = await res.json(); let d2 = await res.json(); // TypeError: Already read!`, correctCode: `let resClone = res.clone(); let d1 = await res.json(); let d2 = await resClone.json();`, explanation: "Response streams can only be read once. Clone the response first if multiple reads are needed." }],
  importantPoints: ["`response.ok` checks for 200-299 status.", "Body methods return Promises (`.json()`, `.text()`, `.blob()`).", "Streams are single-use."],
  interviewQuestions: [{ question: "Why does calling `response.json()` a second time throw a TypeError?", answer: "The response body in the Fetch API is a `ReadableStream`. Reading it consumes the stream data from memory. Once consumed, the stream is locked and cannot be read again unless `.clone()` was called beforehand." }],
  practiceExercises: [{ problem: "Write code that inspects an HTTP response and logs an error if `res.ok` is false.", hint: "if (!res.ok) console.error(res.status);", solution: `let r = { ok: false, status: 500 }; if (!r.ok) console.log("Failed with status:", r.status);` }]
};

window.TOPIC_DATA_STORE["json-intro"] = {
  id: "json-intro",
  title: "JSON Introduction",
  lead: "Master JavaScript Object Notation (JSON), data interchange, language independence, and JSON structure.",
  intro: "JSON stands for JavaScript Object Notation. It is a lightweight data-interchange format, easy for humans to read and write, and easy for machines to parse and generate.",
  definition: "A text-based, language-independent open standard format designed for serializing structured data.",
  whyUse: "Universal format for REST APIs, config files (package.json), and browser storage.",
  syntax: `{
  "name": "Rohan",
  "age": 22,
  "isEnrolled": true,
  "skills": ["JavaScript", "HTML"]
}`,
  syntaxExplanation: "Keys must strictly be double-quoted strings. Values must be strings, numbers, booleans, null, arrays, or objects.",
  simpleExample: `let jsonString = '{"course":"JS","lessons":243}';
console.log("JSON String:", jsonString);`,
  expectedOutput: `JSON String: {"course":"JS","lessons":243}`,
  realLifeExample: {
    domain: "Student Management",
    title: "Standard Student Record JSON Structure",
    scenario: "Serializing student academic records for cloud database storage.",
    code: `let studentJson = \`{
  "studentId": "STU-8821",
  "name": "Aarav Sharma",
  "gpa": 3.85,
  "active": true,
  "courses": ["Web Dev", "Database Systems"]
}\`;

console.log("Valid JSON Document Preview:");
console.log(studentJson);`,
    output: `Valid JSON Document Preview:\n{\n  "studentId": "STU-8821",\n  "name": "Aarav Sharma",\n  "gpa": 3.85,\n  "active": true,\n  "courses": ["Web Dev", "Database Systems"]\n}`
  },
  practicalExample: {
    title: "JSON is Plain Text",
    code: `console.log("JSON is fundamentally a String. It must be parsed to become a JavaScript Object.");`,
    output: `JSON is fundamentally a String. It must be parsed to become a JavaScript Object.`,
    note: "JSON has no runtime behavior; it is strictly a data serialization format."
  },
  commonMistakes: [{ mistake: "Using single quotes in JSON keys or strings", wrongCode: `{'name': 'Rohan'} // SyntaxError! Single quotes are ILLEGAL in JSON!`, correctCode: `{"name": "Rohan"} // Double quotes mandatory!`, explanation: "JSON strictly requires double quotes `\"` for all strings and keys." }],
  importantPoints: ["Keys must use double quotes `\"`.", "No trailing commas allowed.", "Functions and undefined cannot be stored in JSON."],
  interviewQuestions: [{ question: "What data types are supported in JSON?", answer: "Strings (double-quoted), Numbers, Booleans (`true`/`false`), `null`, Arrays `[]`, and Objects `{}`. Functions, `undefined`, Symbols, and Date objects are NOT supported." }],
  practiceExercises: [{ problem: "Write a valid JSON string representing a book with title, author, and year.", hint: "'{\"title\":\"...\", \"author\":\"...\", \"year\":2026}'", solution: `let j = '{"title":"JS Guide","author":"Deepak","year":2026}'; console.log("JSON:", j);` }]
};

window.TOPIC_DATA_STORE["json-syntax"] = {
  id: "json-syntax",
  title: "JSON Syntax",
  lead: "Master strict JSON syntax rules: double quotes, trailing comma prohibition, and structure formatting.",
  intro: "JSON syntax is derived from JavaScript object notation syntax, but is strictly more formal and constrained.",
  definition: "The exact grammatical rules governing valid JSON text documents.",
  whyUse: "Ensuring parsers on any operating system (Python, Java, Go, JS) parse payloads without syntax exceptions.",
  syntax: `// Strict rules:
// 1. Data in name/value pairs
// 2. Data separated by commas
// 3. Curly braces hold objects
// 4. Square brackets hold arrays
// 5. NO trailing commas!
// 6. Double quotes ONLY!`,
  syntaxExplanation: "JSON documents must strictly follow RFC 8259.",
  simpleExample: `console.log("JSON requires double quotes around keys and no trailing commas.");`,
  expectedOutput: `JSON requires double quotes around keys and no trailing commas.`,
  realLifeExample: {
    domain: "Banking",
    title: "JSON Banking Transaction Wire Syntax Validation",
    scenario: "Verifying that banking wire transfer JSON conforms strictly to syntax rules before transmission.",
    code: `let validWireJson = '{"fromAcc":"AC-101","toAcc":"AC-202","amount":15000}';
let parsed = JSON.parse(validWireJson);
console.log("Wire Transfer Parsed Successfully: Rs." + parsed.amount);`,
    output: `Wire Transfer Parsed Successfully: Rs.15000`
  },
  practicalExample: {
    title: "Trailing Comma Syntax Error Trap",
    code: `try {
  JSON.parse('{"a": 1, "b": 2,}'); // Trailing comma after 2!
} catch (err) {
  console.log("Caught SyntaxError:", err.message);
}`,
    output: `Caught SyntaxError: Unexpected token '}', "{"a": 1, "b": 2,}" is not valid JSON`,
    note: "Trailing commas are strictly forbidden in standard JSON."
  },
  commonMistakes: [{ mistake: "Leaving a trailing comma after the last property", wrongCode: `{"name": "A", "age": 20,} // Invalid JSON!`, correctCode: `{"name": "A", "age": 20} // Valid`, explanation: "JSON parsers strictly reject trailing commas." }],
  importantPoints: ["Double quotes only for keys and string values.", "No trailing commas.", "No comments allowed in standard JSON."],
  interviewQuestions: [{ question: "Are comments allowed in standard JSON files?", answer: "No. Standard JSON (RFC 8259) intentionally forbids comments to prevent parsing ambiguity and misuse as configuration languages." }],
  practiceExercises: [{ problem: "Fix the syntax errors in this pseudo-JSON: `{'item': 'pen', 'price': 10,}`.", hint: "Replace single quotes with double quotes and remove trailing comma.", solution: `let fixed = '{"item": "pen", "price": 10}'; console.log("Valid:", JSON.parse(fixed));` }]
};

window.TOPIC_DATA_STORE["json-types"] = {
  id: "json-types",
  title: "JSON Data Types",
  lead: "Master allowable JSON types: string, number, object, array, boolean, null, and rejected JS types.",
  intro: "In JSON, values must be one of the following data types: a string, a number, an object (JSON object), an array, a boolean, or null.",
  definition: "The exact subset of data types permitted within valid JSON text.",
  whyUse: "Knowing what types serialize cleanly without being omitted or throwing errors.",
  syntax: `// Supported:
"string"
123.45
true / false
null
{ "key": "value" }
[ 1, 2, 3 ]

// FORBIDDEN in JSON:
// undefined, functions, Symbols, BigInt, Date (becomes ISO string)`,
  syntaxExplanation: "`undefined`, functions, and Symbols are skipped by `JSON.stringify()`. BigInt throws a `TypeError`.",
  simpleExample: `let obj = {
  text: "Hello",
  num: 42,
  bool: true,
  empty: null,
  skippedFunc: () => {},
  skippedUndef: undefined
};
console.log(JSON.stringify(obj));`,
  expectedOutput: `{"text":"Hello","num":42,"bool":true,"empty":null}`,
  realLifeExample: {
    domain: "Attendance Management",
    title: "Employee Record Data Type Mapping in JSON",
    scenario: "Demonstrating how primitives and objects serialize while functions are stripped.",
    code: `let employee = {
  name: "Sneha",
  empId: 1042,
  clockedIn: true,
  notes: null,
  punchIn() { console.log("Punched"); } // Function will be omitted!
};

let json = JSON.stringify(employee);
console.log("Serialized JSON Payload:");
console.log(json);`,
    output: `Serialized JSON Payload:\n{"name":"Sneha","empId":1042,"clockedIn":true,"notes":null}`
  },
  practicalExample: {
    title: "Date Serialization to ISO 8601 String",
    code: `let event = { title: "Workshop", date: new Date("2026-11-04T10:00:00Z") };
let json = JSON.stringify(event);
console.log("Date becomes string in JSON:", json);`,
    output: `Date becomes string in JSON: {"title":"Workshop","date":"2026-11-04T10:00:00.000Z"}`,
    note: "Dates serialize to ISO 8601 strings and must be parsed back with `new Date()`."
  },
  commonMistakes: [{ mistake: "Serializing BigInt without custom replacer", wrongCode: `JSON.stringify({ id: 10n }); // TypeError: Do not know how to serialize a BigInt!`, correctCode: `JSON.stringify({ id: 10n.toString() });`, explanation: "BigInt is not supported by standard JSON." }],
  importantPoints: ["Only 6 data types allowed in JSON.", "Functions and `undefined` are dropped.", "BigInt throws TypeError."],
  interviewQuestions: [{ question: "What happens to functions and undefined values when passed to JSON.stringify()?", answer: "In object properties, properties with `undefined`, functions, or Symbols are completely omitted. In arrays, they are converted to `null` to preserve index positioning." }],
  practiceExercises: [{ problem: "Demonstrate that undefined in an array becomes null in JSON: `[1, undefined, 3]`.", hint: "JSON.stringify([1, undefined, 3])", solution: `console.log(JSON.stringify([1, undefined, 3])); // "[1,null,3]"` }]
};

window.TOPIC_DATA_STORE["json-parse"] = {
  id: "json-parse",
  title: "JSON Parse",
  lead: "Master JSON.parse(), converting text to JavaScript objects, error handling, and reviver functions.",
  intro: "A common use of JSON is to exchange data to/from a web server. When receiving data from a web server, the data is always a string. Parse the data with `JSON.parse()`, and the data becomes a JavaScript object.",
  definition: "A built-in method that parses a JSON formatted string, constructing the JavaScript value or object described by the string.",
  whyUse: "Converting API responses, reading local storage state, and deserializing messages.",
  syntax: `JSON.parse(text);
JSON.parse(text, reviverFunction);`,
  syntaxExplanation: "The optional `reviver` function can transform parsed values (such as restoring ISO strings into Date objects).",
  simpleExample: `let str = '{"name":"Aarav","age":22}';
let user = JSON.parse(str);
console.log("Name:", user.name, "| Age:", user.age);`,
  expectedOutput: `Name: Aarav | Age: 22`,
  realLifeExample: {
    domain: "Banking",
    title: "Parsing Bank Statement with Date Reviver",
    scenario: "Automatically reviving ISO date strings into genuine Date objects during JSON parsing.",
    code: `let rawStatement = '{"txId":"TX-101","amount":5000,"date":"2026-11-04T08:30:00.000Z"}';

let parsedStatement = JSON.parse(rawStatement, (key, value) => {
  if (key === "date") return new Date(value); // Revive Date!
  return value;
});

console.log("Transaction ID :", parsedStatement.txId);
console.log("Amount         : Rs." + parsedStatement.amount);
console.log("Date Object?   :", parsedStatement.date instanceof Date);`,
    output: `Transaction ID : TX-101\nAmount         : Rs.5000\nDate Object?   : true`
  },
  practicalExample: {
    title: "Safe JSON Parse Utility",
    code: `function safeJsonParse(str, fallback = {}) {
  try { return JSON.parse(str); }
  catch { return fallback; }
}
console.log("Parsed clean:", safeJsonParse('{"ok":true}'));
console.log("Parsed error:", safeJsonParse('bad json', []));`,
    output: `Parsed clean: { ok: true }\nParsed error: []`,
    note: "Always wrap `JSON.parse` in try/catch or helper functions."
  },
  commonMistakes: [{ mistake: "Passing undefined to JSON.parse", wrongCode: `JSON.parse(undefined); // SyntaxError: Unexpected token 'u' in JSON at position 0`, correctCode: `if (str) JSON.parse(str);`, explanation: "`JSON.parse()` requires a valid string." }],
  importantPoints: ["Throws `SyntaxError` on malformed text.", "Reviver function transforms keys and values.", "Synchronous operation."],
  interviewQuestions: [{ question: "What is the reviver parameter in `JSON.parse()`?", answer: "The reviver is an optional transformation function called for every key-value pair before the parsed object is returned. It allows converting serialized types back into real instances, such as converting ISO date strings back into `Date` objects." }],
  practiceExercises: [{ problem: "Parse `'{\"count\": 10}'` and double the count.", hint: "let o = JSON.parse(...); o.count *= 2;", solution: `let o = JSON.parse('{"count": 10}'); o.count *= 2; console.log(o.count); // 20` }]
};

window.TOPIC_DATA_STORE["json-stringify"] = {
  id: "json-stringify",
  title: "JSON Stringify",
  lead: "Master JSON.stringify(), object serialization, replacer arrays/functions, indentation spacing, and toJSON().",
  intro: "A common use of JSON is to send data to a web server. When sending data to a web server, the data has to be a string. Convert a JavaScript object into a string with `JSON.stringify()`.",
  definition: "A built-in method that converts a JavaScript object, array, or primitive into a valid JSON string.",
  whyUse: "Sending payloads in fetch POST requests, persisting state to localStorage, and formatting debug logs.",
  syntax: `JSON.stringify(value);
JSON.stringify(value, replacer);
JSON.stringify(value, replacer, space);`,
  syntaxExplanation: "`replacer` filters or transforms properties. `space` (number or string) adds indentation for pretty-printing.",
  simpleExample: `let obj = { id: 1, name: "Kunal" };
console.log(JSON.stringify(obj));
console.log(JSON.stringify(obj, null, 2)); // Pretty print`,
  expectedOutput: `{"id":1,"name":"Kunal"}\n{\n  "id": 1,\n  "name": "Kunal"\n}`,
  realLifeExample: {
    domain: "E-commerce",
    title: "Filtering Sensitive Fields with Replacer Function",
    scenario: "Filtering out customer passwords and CVV numbers when logging payment requests.",
    code: `let checkoutData = {
  user: "Rohan",
  cartTotal: 4500,
  passwordHash: "secret_hash_9821",
  cvv: "891"
};

// Replacer strips sensitive keys
let sanitizedJson = JSON.stringify(checkoutData, (key, value) => {
  if (key === "passwordHash" || key === "cvv") return undefined; // Stripped!
  return value;
}, 2);

console.log("Sanitized Checkout JSON for Logs:\n" + sanitizedJson);`,
    output: `Sanitized Checkout JSON for Logs:\n{\n  "user": "Rohan",\n  "cartTotal": 4500\n}`
  },
  practicalExample: {
    title: "Custom toJSON() Serialization Hook",
    code: `let product = {
  id: "P-101",
  internalSecret: "xyz",
  toJSON() {
    return { productId: this.id }; // Custom JSON representation
  }
};
console.log(JSON.stringify(product));`,
    output: `{"productId":"P-101"}`,
    note: "Objects with a `.toJSON()` method control their own serialization."
  },
  commonMistakes: [{ mistake: "Serializing circular objects throwing TypeError", wrongCode: `let a = {}; a.self = a; JSON.stringify(a); // TypeError: Converting circular structure to JSON`, correctCode: `// Use circular replacer or libraries like flatted`, explanation: "Circular references cause infinite recursion." }],
  importantPoints: ["Indent with third argument `space` (e.g. `2`).", "Replacer can be an array of allowed keys `['name', 'id']`.", "Objects can define custom `.toJSON()` methods."],
  interviewQuestions: [{ question: "How does the replacer parameter work in JSON.stringify()?", answer: "The replacer can be either an array of strings/numbers (acting as an allow-list of property keys to include) or a function `(key, value) => any` that transforms or filters values (returning `undefined` strips that property)." }],
  practiceExercises: [{ problem: "Use the replacer array to serialize ONLY the 'name' and 'price' from `{ id: 1, name: 'Phone', price: 999, stock: 50 }`.", hint: "JSON.stringify(item, ['name', 'price'])", solution: `let item = { id: 1, name: "Phone", price: 999, stock: 50 }; console.log(JSON.stringify(item, ["name", "price"]));` }]
};

window.TOPIC_DATA_STORE["json-fetch"] = {
  id: "json-fetch",
  title: "JSON Fetch",
  lead: "Master combining Fetch API with JSON, request/response lifecycle, and end-to-end data flow.",
  intro: "Combining the Fetch API with JSON is the standard way modern web applications communicate with REST APIs and backend microservices.",
  definition: "The end-to-end integration of sending JSON payloads and consuming JSON responses over HTTP.",
  whyUse: "Asynchronously updating web applications with server data without page reloads (AJAX / SPA).",
  syntax: `async function postJSON(url, data) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return await res.json();
}`,
  syntaxExplanation: "Combines `JSON.stringify()` on outbound requests with `res.json()` on inbound responses.",
  simpleExample: `console.log("End-to-end JSON Fetch: stringify outbound body -> fetch -> parse inbound res.json()");`,
  expectedOutput: `End-to-end JSON Fetch: stringify outbound body -> fetch -> parse inbound res.json()`,
  realLifeExample: {
    domain: "Student Management",
    title: "Complete Student Add & List Cycle",
    scenario: "Submitting a new student record and processing the returned JSON confirmation.",
    code: `async function createStudentAccount(student) {
  console.log("1. Serializing student object to JSON string...");
  let jsonBody = JSON.stringify(student);
  
  console.log("2. Dispatching fetch POST with Content-Type: application/json...");
  // Simulated server processing
  let mockServerResponse = {
    ok: true,
    status: 201,
    json: async () => ({ success: true, id: 1042, ...student })
  };
  
  console.log("3. Awaiting response.json()...");
  let result = await mockServerResponse.json();
  console.log("4. Student created successfully! Enrolled ID: " + result.id);
}

createStudentAccount({ name: "Kunal Verma", course: "Computer Science" });`,
    output: `1. Serializing student object to JSON string...\n2. Dispatching fetch POST with Content-Type: application/json...\n3. Awaiting response.json()...\n4. Student created successfully! Enrolled ID: 1042`
  },
  practicalExample: {
    title: "Handling Network Failure Gracefully",
    code: `async function loadData() {
  try {
    console.log("Simulating API fetch call...");
  } catch (err) {
    console.error("Network or JSON error:", err.message);
  }
}
loadData();`,
    output: `Simulating API fetch call...`,
    note: "Wrap JSON fetch calls in try/catch to catch network disconnections."
  },
  commonMistakes: [{ mistake: "Omitting await before response.json()", wrongCode: `let data = response.json(); // data is a Promise, NOT the parsed object!`, correctCode: `let data = await response.json(); // Correct!`, explanation: "`.json()` is asynchronous and returns a Promise." }],
  importantPoints: ["Outbound: `body: JSON.stringify(data)`.", "Headers: `'Content-Type': 'application/json'`.", "Inbound: `await response.json()`."],
  interviewQuestions: [{ question: "Why is `response.json()` asynchronous while `JSON.parse()` is synchronous?", answer: "`response.json()` reads from an incoming network `ReadableStream`, downloading data chunks asynchronously over the network. `JSON.parse()` parses an already complete in-memory string synchronously." }],
  practiceExercises: [{ problem: "Write an async function structure that sends `{ score: 95 }` via fetch POST and awaits the JSON response.", hint: "fetch(url, { method: 'POST', body: JSON.stringify(...) })", solution: `console.log("Async JSON fetch pattern verified.");` }]
};

window.TOPIC_DATA_STORE["json-vs-xml"] = {
  id: "json-vs-xml",
  title: "JSON vs XML",
  lead: "Master comparing JSON and XML: syntax overhead, parsing speed, typing, readability, and modern web dominance.",
  intro: "Both JSON and XML can be used to receive data from a web server. However, JSON has almost completely replaced XML in modern web APIs.",
  definition: "Architectural comparison between JSON (data-oriented lightweight text) and XML (markup document language).",
  whyUse: "Understanding legacy SOAP/XML systems vs modern REST/JSON microservices.",
  syntax: `// JSON:
{ "name": "Rohan", "age": 22 }

// XML:
<user>
  <name>Rohan</name>
  <age>22</age>
</user>`,
  syntaxExplanation: "JSON uses concise key-value notation without closing tags. XML requires verbose opening and closing tags.",
  simpleExample: `console.log("JSON is shorter, faster, supports native arrays, and parses with built-in JSON.parse().");`,
  expectedOutput: `JSON is shorter, faster, supports native arrays, and parses with built-in JSON.parse().`,
  realLifeExample: {
    domain: "Banking",
    title: "Payload Size & Bandwidth Comparison",
    scenario: "Comparing identical banking customer transactions in JSON vs XML format.",
    code: `let jsonPayload = '{"acc":101,"amt":5000}';
let xmlPayload = '<transaction><acc>101</acc><amt>5000</amt></transaction>';

console.log("JSON Length: " + jsonPayload.length + " bytes");
console.log("XML Length : " + xmlPayload.length + " bytes");
let savings = (((xmlPayload.length - jsonPayload.length) / xmlPayload.length) * 100).toFixed(1);
console.log("JSON is " + savings + "% smaller in network bandwidth!");`,
    output: `JSON Length: 22 bytes\nXML Length : 57 bytes\nJSON is 61.4% smaller in network bandwidth!`
  },
  practicalExample: {
    title: "Native Parsing Comparison",
    code: `// In JavaScript:
// JSON parses natively: JSON.parse(str)
// XML requires DOMParser: new DOMParser().parseFromString(str, "text/xml")
console.log("JSON parses directly into JS objects; XML requires DOMParser traversal.");`,
    output: `JSON parses directly into JS objects; XML requires DOMParser traversal.`,
    note: "JSON maps directly to JavaScript data structures."
  },
  commonMistakes: [{ mistake: "Assuming XML has no use cases today", wrongCode: `// Believing XML is dead`, correctCode: `// XML remains vital for SVG graphics, Android layout files, RSS feeds, and legacy SOAP banking APIs`, explanation: "XML remains dominant in documents, vector graphics (SVG), and enterprise SOAP." }],
  importantPoints: ["JSON is smaller and faster.", "JSON has native Array support; XML lacks array primitives.", "JSON parses directly with `JSON.parse()`."],
  interviewQuestions: [{ question: "Why has JSON largely superseded XML in modern Web APIs?", answer: "1. **Concisenss**: No closing tags, saving 30-60% bandwidth.\n2. **Parsing Speed**: Native JavaScript engine support via `JSON.parse()`.\n3. **Data Structures**: Directly supports Arrays and typed primitives (numbers, booleans).\n4. **Developer Ergonomics**: Directly converts into native JavaScript objects without cumbersome XML DOM traversal." }],
  practiceExercises: [{ problem: "Convert `<student><id>101</id><name>Aarav</name></student>` to equivalent JSON.", hint: '{"id": 101, "name": "Aarav"}', solution: `let jsonEquiv = '{"id": 101, "name": "Aarav"}'; console.log("JSON:", jsonEquiv);` }]
};

// PART 23: OTHER WEB APIS
window.TOPIC_DATA_STORE["webapi-geolocation"] = {
  id: "webapi-geolocation",
  title: "Geolocation API",
  lead: "Master navigator.geolocation, getCurrentPosition(), watchPosition(), latitude, longitude, and accuracy.",
  intro: "The HTML Geolocation API is used to locate a user's position. For privacy reasons, the user must approve location access.",
  definition: "A browser Web API allowing web applications to access the geographical location coordinates of the device.",
  whyUse: "Mapping, food delivery tracking, local store locators, geotagging attendance, and localized weather.",
  syntax: `navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);
let watchId = navigator.geolocation.watchPosition(successCallback);
navigator.geolocation.clearWatch(watchId);`,
  syntaxExplanation: "`successCallback` receives a `GeolocationPosition` object containing `coords.latitude`, `coords.longitude`, and `coords.accuracy`.",
  simpleExample: `console.log("navigator.geolocation.getCurrentPosition(pos => console.log(pos.coords.latitude))");`,
  expectedOutput: `navigator.geolocation.getCurrentPosition(pos => console.log(pos.coords.latitude))`,
  realLifeExample: {
    domain: "Attendance Management",
    title: "Geofenced Mobile Clock-In Validation",
    scenario: "Verifying that an employee is physically located within the office boundary before authorizing attendance punch.",
    code: `function verifyOfficeGeofence(userLat, userLng) {
  const OFFICE_LAT = 28.6139; // New Delhi
  const OFFICE_LNG = 77.2090;
  
  // Calculate approximate distance
  let distance = Math.hypot(userLat - OFFICE_LAT, userLng - OFFICE_LNG);
  let isInsideOffice = distance < 0.01;
  
  console.log("User Location: (" + userLat + ", " + userLng + ")");
  console.log("Geofence Approved? " + isInsideOffice);
}

verifyOfficeGeofence(28.6140, 77.2091);`,
    output: `User Location: (28.614, 77.2091)\nGeofence Approved? true`
  },
  practicalExample: {
    title: "Geolocation Options Configuration",
    code: `let geoOptions = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};
console.log("Geolocation options enable GPS high-accuracy mode.");`,
    output: `Geolocation options enable GPS high-accuracy mode.`,
    note: "`enableHighAccuracy: true` triggers GPS on mobile devices."
  },
  commonMistakes: [{ mistake: "Assuming Geolocation works on HTTP websites", wrongCode: `// Testing on http://my-site.com -> Fails!`, correctCode: `// Geolocation strictly requires HTTPS (or http://localhost for dev)`, explanation: "Modern browsers disable Geolocation on insecure HTTP origins for privacy." }],
  importantPoints: ["Requires explicit user permission.", "Requires secure context (HTTPS).", "`watchPosition()` tracks moving location continuously."],
  interviewQuestions: [{ question: "What security and privacy restrictions apply to the Geolocation API?", answer: "1. It strictly requires a secure context (HTTPS or localhost).\n2. The browser automatically presents a permissions prompt; location cannot be obtained without explicit user consent.\n3. If user denies permission, an error code `PERMISSION_DENIED` (1) is returned." }],
  practiceExercises: [{ problem: "Write code checking if geolocation is supported in the current browser.", hint: "if ('geolocation' in navigator) ...", solution: `let supported = (typeof navigator !== "undefined") && ("geolocation" in navigator); console.log("Geo supported:", supported);` }]
};

window.TOPIC_DATA_STORE["webapi-pointer"] = {
  id: "webapi-pointer",
  title: "Pointer Events API",
  lead: "Master unified pointer events: pointerdown, pointerup, pointermove, pointerId, and pressure.",
  intro: "The Pointer Events API unifies mouse, pen/stylus, and touch inputs into a single hardware-agnostic event model.",
  definition: "A hardware-independent DOM event interface covering mouse, touchscreen, stylus, and digitizer interactions.",
  whyUse: "Building drawing canvases, touch gestures, and interactive drag-and-drops without writing separate touch and mouse handlers.",
  syntax: `el.addEventListener("pointerdown", handler);
el.addEventListener("pointermove", handler);
el.addEventListener("pointerup", handler);
el.setPointerCapture(event.pointerId);`,
  syntaxExplanation: "`pointerType` identifies `'mouse'`, `'touch'`, or `'pen'`. `pressure` reports stylus pressure from 0.0 to 1.0.",
  simpleExample: `console.log("Pointer Events unify mouse, touch, and stylus into pointerdown, pointermove, pointerup.");`,
  expectedOutput: `Pointer Events unify mouse, touch, and stylus into pointerdown, pointermove, pointerup.`,
  realLifeExample: {
    domain: "Business Applications",
    title: "Digital Customer Signature Canvas Capture",
    scenario: "Capturing customer signatures with stylus pen pressure sensitivity on tablets.",
    code: `function handleSignaturePoint(e) {
  console.log("Pointer Type : " + e.pointerType);
  console.log("Coordinates  : (" + e.clientX + ", " + e.clientY + ")");
  console.log("Pen Pressure : " + e.pressure);
}

handleSignaturePoint({ pointerType: "pen", clientX: 240, clientY: 180, pressure: 0.75 });`,
    output: `Pointer Type : pen\nCoordinates  : (240, 180)\nPen Pressure : 0.75`
  },
  practicalExample: {
    title: "setPointerCapture for Drag Operations",
    code: `console.log("el.setPointerCapture(e.pointerId) redirects all subsequent events to this element even if cursor leaves element bounds!");`,
    output: `el.setPointerCapture(e.pointerId) redirects all subsequent events to this element even if cursor leaves element bounds!`,
    note: "Pointer capture prevents losing drag targets during fast swipes."
  },
  commonMistakes: [{ mistake: "Maintaining duplicate touchstart and mousedown listeners", wrongCode: `el.addEventListener("mousedown", fn); el.addEventListener("touchstart", fn); // Duplicate fires!`, correctCode: `el.addEventListener("pointerdown", fn); // One unified listener!`, explanation: "Pointer events handle mouse, touch, and stylus simultaneously." }],
  importantPoints: ["Unifies touch, mouse, and stylus.", "`event.pressure` reports stylus pressure.", "Works with CSS `touch-action: none`."],
  interviewQuestions: [{ question: "Why was the Pointer Events API created to replace Touch and Mouse events?", answer: "Previously, developers had to write separate, duplicate code for `mousedown` and `touchstart`, leading to event duplication and synthetic click delays. Pointer Events provides a single unified model that handles all pointing devices (mouse, multi-touch, stylus pens)." }],
  practiceExercises: [{ problem: "Write a pointerdown listener that logs the device pointerType.", hint: "e.pointerType", solution: `let evt = { pointerType: "touch" }; console.log("Device:", evt.pointerType);` }]
};

window.TOPIC_DATA_STORE["webapi-storage"] = {
  id: "webapi-storage",
  title: "Web Storage API",
  lead: "Master Web Storage mechanisms, origin boundaries, 5MB quotas, and storage event synchronization.",
  intro: "The Web Storage API provides mechanisms by which browsers can store key/value pairs, in a much more intuitive fashion than using cookies.",
  definition: "A browser client-side storage architecture comprising localStorage (persistent) and sessionStorage (tab-scoped).",
  whyUse: "Saving user settings, caching offline data, shopping carts, and preserving form drafts across reloads.",
  syntax: `storage.setItem("key", "value");
storage.getItem("key");
storage.removeItem("key");
storage.clear();
storage.length;`,
  syntaxExplanation: "Stores string key-value pairs per origin (`protocol + domain + port`). Objects must be serialized with `JSON.stringify()`.",
  simpleExample: `console.log("Web Storage API: localStorage and sessionStorage provide 5-10MB client storage.");`,
  expectedOutput: `Web Storage API: localStorage and sessionStorage provide 5-10MB client storage.`,
  realLifeExample: {
    domain: "E-commerce",
    title: "Cross-Session Shopping Cart State Management",
    scenario: "Saving customer cart state in Web Storage so products remain in cart when returning tomorrow.",
    code: `let mockStorage = {};

function saveCart(cartItems) {
  mockStorage["cart"] = JSON.stringify(cartItems);
  console.log("Cart saved to storage (" + cartItems.length + " items).");
}

function loadCart() {
  let raw = mockStorage["cart"];
  return raw ? JSON.parse(raw) : [];
}

saveCart([{ id: 1, title: "Book", price: 350 }]);
console.log("Loaded Cart:", loadCart());`,
    output: `Cart saved to storage (1 items).\nLoaded Cart: [ { id: 1, title: 'Book', price: 350 } ]`
  },
  practicalExample: {
    title: "Storage Event for Multi-Tab Synchronization",
    code: `console.log("window.addEventListener('storage', e => { ... }) fires in other open tabs when localStorage changes, keeping tabs in sync!");`,
    output: `window.addEventListener('storage', e => { ... }) fires in other open tabs when localStorage changes, keeping tabs in sync!`,
    note: "The `storage` event coordinates state across multiple open tabs."
  },
  commonMistakes: [{ mistake: "Storing raw objects without JSON.stringify", wrongCode: `localStorage.setItem("user", { name: "Rohan" }); // Saves as "[object Object]"!`, correctCode: `localStorage.setItem("user", JSON.stringify({ name: "Rohan" }));`, explanation: "Web Storage strictly accepts strings; objects must be serialized." }],
  importantPoints: ["Storage quota is typically 5MB per origin.", "Synchronous API.", "Storage is scoped per origin (protocol + host + port)."],
  interviewQuestions: [{ question: "Is localStorage shared across different browser tabs of the same website?", answer: "Yes. `localStorage` is shared across all tabs, windows, and iframes that share the exact same origin (`protocol://domain:port`). Changes made in one tab trigger a `storage` event in all other open tabs." }],
  practiceExercises: [{ problem: "Write code to store a user theme preference 'dark' and retrieve it.", hint: "localStorage.setItem('theme', 'dark'); localStorage.getItem('theme');", solution: `let s = {}; s["theme"] = "dark"; console.log("Retrieved Theme:", s["theme"]);` }]
};

window.TOPIC_DATA_STORE["webapi-localstorage"] = {
  id: "webapi-localstorage",
  title: "Local Storage",
  lead: "Master window.localStorage, persistent data retention, key/value pairs, and storage quota management.",
  intro: "The `localStorage` object stores data with no expiration date. The data will not be deleted when the browser is closed, and will be available the next day, week, or year.",
  definition: "A persistent client-side storage interface retaining data across browser restarts until explicitly cleared.",
  whyUse: "Remembering dark/light theme preferences, keeping users logged in, caching application state, and offline favorites.",
  syntax: `localStorage.setItem("theme", "dark");
let theme = localStorage.getItem("theme");
localStorage.removeItem("theme");
localStorage.clear();`,
  syntaxExplanation: "Keys and values are always strings. Data persists indefinitely until `localStorage.clear()` or user clears site data.",
  simpleExample: `console.log("localStorage.setItem('theme', 'dark'); data persists forever until cleared.");`,
  expectedOutput: `localStorage.setItem('theme', 'dark'); data persists forever until cleared.`,
  realLifeExample: {
    domain: "Business Applications",
    title: "Dark Mode Theme Preference Persistence",
    scenario: "Saving user chosen dark theme in localStorage and loading it instantly on page refresh.",
    code: `let mockLocalStorage = {};

function toggleAndSaveTheme() {
  let currentTheme = mockLocalStorage["app_theme"] || "light";
  let nextTheme = currentTheme === "light" ? "dark" : "light";
  mockLocalStorage["app_theme"] = nextTheme;
  console.log("Theme toggled to: " + nextTheme + " (Saved in localStorage)");
}

toggleAndSaveTheme();
console.log("On page reload, theme loaded is:", mockLocalStorage["app_theme"]);`,
    output: `Theme toggled to: dark (Saved in localStorage)\nOn page reload, theme loaded is: dark`
  },
  practicalExample: {
    title: "QuotaExceededError Handling",
    code: `try {
  // If user exceeds ~5MB storage limit
  console.log("Wrap setItem in try/catch to catch QuotaExceededError when storage is full.");
} catch (e) {}`,
    output: `Wrap setItem in try/catch to catch QuotaExceededError when storage is full.`,
    note: "Catch `QuotaExceededError` when storing large files or images."
  },
  commonMistakes: [{ mistake: "Storing sensitive authentication passwords or credit card numbers in localStorage", wrongCode: `localStorage.setItem("password", "secret"); // DANGER: Vulnerable to XSS script theft!`, correctCode: `// Use HttpOnly secure cookies for sensitive authentication tokens`, explanation: "Any JavaScript script on the page (including malicious XSS scripts) can read localStorage." }],
  importantPoints: ["Persists across browser restarts.", "Capacity is ~5MB.", "Insecure for sensitive passwords (vulnerable to XSS)."],
  interviewQuestions: [{ question: "Why shouldn't sensitive authentication tokens be stored in localStorage?", answer: "`localStorage` is fully accessible to any JavaScript running on the origin. If the website has a Cross-Site Scripting (XSS) vulnerability, an attacker can steal the token (`localStorage.getItem('token')`). Secure `HttpOnly` cookies cannot be accessed by JavaScript." }],
  practiceExercises: [{ problem: "Write code that checks if a key 'visited' exists in localStorage, and sets it if absent.", hint: "if (!localStorage.getItem('visited')) localStorage.setItem('visited', 'true');", solution: `let mem = {}; if (!mem["visited"]) mem["visited"] = "true"; console.log(mem);` }]
};

window.TOPIC_DATA_STORE["webapi-sessionstorage"] = {
  id: "webapi-sessionstorage",
  title: "Session Storage",
  lead: "Master window.sessionStorage, tab-scoped lifespan, per-window isolation, and multi-step wizard state.",
  intro: "The `sessionStorage` object stores data for only one session (the data is deleted when the browser tab is closed).",
  definition: "A client-side storage interface maintaining data scoped strictly to the current browser tab lifetime.",
  whyUse: "Multi-step checkout forms, registration wizards, single-session search filters, and temporary drafts.",
  syntax: `sessionStorage.setItem("wizardStep", "2");
let step = sessionStorage.getItem("wizardStep");
sessionStorage.removeItem("wizardStep");`,
  syntaxExplanation: "Closing the specific browser tab destroys its `sessionStorage`. Opening a new tab creates an independent, isolated storage.",
  simpleExample: `console.log("sessionStorage data is cleared automatically when the browser tab is closed.");`,
  expectedOutput: `sessionStorage data is cleared automatically when the browser tab is closed.`,
  realLifeExample: {
    domain: "Banking",
    title: "Multi-Step Loan Application Wizard Draft",
    scenario: "Holding temporary loan application steps in sessionStorage without leaving traces on shared public library computers.",
    code: `let mockSessionStorage = {};

function saveWizardStep(stepNumber, stepData) {
  mockSessionStorage["step_" + stepNumber] = JSON.stringify(stepData);
  console.log("Saved Step #" + stepNumber + " draft in sessionStorage.");
}

saveWizardStep(1, { fullName: "Aarav", loanAmount: 500000 });
console.log("Data persists while tab is open. Closes safely on tab exit.");`,
    output: `Saved Step #1 draft in sessionStorage.\nData persists while tab is open. Closes safely on tab exit.`
  },
  practicalExample: {
    title: "Tab Isolation in SessionStorage",
    code: `console.log("Opening the same site in Tab A and Tab B gives each tab its own independent sessionStorage!");`,
    output: `Opening the same site in Tab A and Tab B gives each tab its own independent sessionStorage!`,
    note: "Unlike localStorage, duplicate tabs do not share `sessionStorage`."
  },
  commonMistakes: [{ mistake: "Expecting sessionStorage to persist when the user closes the tab", wrongCode: `// Expecting session data to remain tomorrow`, correctCode: `// Use localStorage if data must survive tab closure`, explanation: "Closing the browser tab immediately wipes `sessionStorage`." }],
  importantPoints: ["Wiped automatically upon tab closure.", "Isolated per tab (opening same URL in new tab has separate storage).", "Survives page reloads within the same tab."],
  interviewQuestions: [{ question: "What is the difference between localStorage and sessionStorage?", answer: "`localStorage` persists data indefinitely across browser restarts and is shared across all tabs of the same origin. `sessionStorage` is strictly scoped to the individual browser tab and is permanently deleted as soon as that tab is closed." }],
  practiceExercises: [{ problem: "Write code saving `step: 3` in sessionStorage.", hint: "sessionStorage.setItem('step', '3')", solution: `let s = {}; s["step"] = "3"; console.log("Session Step:", s["step"]);` }]
};

window.TOPIC_DATA_STORE["webapi-validation"] = {
  id: "webapi-validation",
  title: "Validation API",
  lead: "Master HTML5 Constraint Validation API, checkValidity(), setCustomValidity(), and validity flags.",
  intro: "The HTML5 Constraint Validation API provides methods and properties to check and customize browser form validation states.",
  definition: "A browser DOM API exposing validity properties (`validity.valueMissing`, `validity.typeMismatch`) on form input elements.",
  whyUse: "Native browser validation tooltips, localized custom error messages, and checking form validity without regex boilerplate.",
  syntax: `input.checkValidity(); // true/false
input.reportValidity(); // Shows native popup
input.setCustomValidity("Custom error message");
input.validity.valueMissing;  // required field empty
input.validity.typeMismatch;  // email/url format wrong
input.validity.patternMismatch; // regex failed`,
  syntaxExplanation: "Calling `setCustomValidity('')` with an empty string clears the error and marks the field valid.",
  simpleExample: `console.log("input.checkValidity() returns boolean whether input satisfies constraints.");`,
  expectedOutput: `input.checkValidity() returns boolean whether input satisfies constraints.`,
  realLifeExample: {
    domain: "Attendance Management",
    title: "Custom Validation Message for Employee Code",
    scenario: "Displaying a friendly localized error prompt when an employee code pattern fails validation.",
    code: `let mockInput = {
  value: "123",
  validity: { patternMismatch: true },
  customMessage: "",
  setCustomValidity(msg) { this.customMessage = msg; }
};

if (mockInput.validity.patternMismatch) {
  mockInput.setCustomValidity("Please enter employee code in format: EMP-XXXX");
}
console.log("Custom Validation Error Prompt: " + mockInput.customMessage);`,
    output: `Custom Validation Error Prompt: Please enter employee code in format: EMP-XXXX`
  },
  practicalExample: {
    title: "Inspecting ValidityState Flags",
    code: `let validityFlags = {
  valueMissing: false,
  typeMismatch: false,
  rangeOverflow: false,
  rangeUnderflow: false,
  valid: true
};
console.log("Input is valid?", validityFlags.valid);`,
    output: `Input is valid? true`,
    note: "`input.validity.valid` is true only when all constraint flags pass."
  },
  commonMistakes: [{ mistake: "Forgetting to clear custom validity with setCustomValidity('')", wrongCode: `input.setCustomValidity("Error"); // If you never call setCustomValidity(''), field is PERMANENTLY invalid!`, correctCode: `if (isValid) input.setCustomValidity(""); // Must clear!`, explanation: "A non-empty string in `setCustomValidity` permanently marks the input invalid." }],
  importantPoints: ["`checkValidity()` tests validity; `reportValidity()` also displays the browser tooltip.", "`setCustomValidity('')` clears errors.", "Integrates with CSS `:valid` and `:invalid` pseudo-classes."],
  interviewQuestions: [{ question: "How do you clear a custom error set by `setCustomValidity()`?", answer: "Pass an empty string: `input.setCustomValidity('')`. Any non-empty string marks the field as invalid and displays that text as the error message." }],
  practiceExercises: [{ problem: "Write code that checks if an input is valid and logs 'Passed' or 'Failed'.", hint: "input.checkValidity()", solution: `let el = { checkValidity: () => true }; console.log(el.checkValidity() ? "Passed" : "Failed");` }]
};

window.TOPIC_DATA_STORE["webapi-workers"] = {
  id: "webapi-workers",
  title: "Web Workers",
  lead: "Master background multithreading in JavaScript, dedicated workers, postMessage(), and CPU-intensive processing.",
  intro: "When executing scripts in an HTML page, the page becomes unresponsive until the script is finished. A web worker is a JavaScript running in the background, without affecting the performance of the page.",
  definition: "A browser API that runs a JavaScript script in a background thread separate from the main execution thread.",
  whyUse: "Heavy image processing, complex mathematical algorithms, large file parsing, and crypto hashing without freezing the UI.",
  syntax: `// Main thread:
const worker = new Worker("worker.js");
worker.postMessage({ data: 1000 });
worker.onmessage = function(event) {
  console.log("Result from worker:", event.data);
};
worker.terminate();

// Inside worker.js:
self.onmessage = function(event) {
  let result = heavyCalculation(event.data);
  self.postMessage(result);
};`,
  syntaxExplanation: "Main thread and worker communicate exclusively by sending copy messages using `postMessage()` and `onmessage`.",
  simpleExample: `console.log("Web Workers run in separate background OS threads, keeping the 60fps UI responsive.");`,
  expectedOutput: `Web Workers run in separate background OS threads, keeping the 60fps UI responsive.`,
  realLifeExample: {
    domain: "Banking",
    title: "Background Encryption of 100,000 Transaction Records",
    scenario: "Offloading intensive cryptographic batch calculations to a background worker so user can continue scrolling.",
    code: `// Simulating worker message passing
function simulateWorkerTask(recordCount) {
  console.log("Main Thread  : Dispatched " + recordCount + " records to Worker thread.");
  console.log("Main Thread  : UI remains completely fluid at 60fps!");
  
  // Simulated background completion
  let workerResult = { processed: recordCount, durationMs: 420 };
  console.log("Worker Thread: Batch processing finished in " + workerResult.durationMs + "ms. Emitting result.");
}

simulateWorkerTask(100000);`,
    output: `Main Thread  : Dispatched 100000 records to Worker thread.\nMain Thread  : UI remains completely fluid at 60fps!\nWorker Thread: Batch processing finished in 420ms. Emitting result.`
  },
  practicalExample: {
    title: "Web Workers Have No Direct DOM Access",
    code: `// Inside worker: 'window' and 'document' do NOT exist!
console.log("Web Workers cannot access DOM nodes (window, document) directly; communication is purely via postMessage().");`,
    output: `Web Workers cannot access DOM nodes (window, document) directly; communication is purely via postMessage().`,
    note: "Workers access `self`, `fetch`, `setTimeout`, and `navigator`."
  },
  commonMistakes: [{ mistake: "Trying to access document or DOM elements inside a Web Worker", wrongCode: `// Inside worker.js: document.getElementById("demo").textContent = "Done"; // ReferenceError!`, correctCode: `// Send message back to main thread: postMessage("Done"); and let main thread update DOM!`, explanation: "Web Workers have no access to the `document` or `window` DOM objects for thread safety." }],
  importantPoints: ["Workers run in a real separate OS thread.", "No DOM or `window` access.", "Communication via message passing `postMessage`."],
  interviewQuestions: [{ question: "Can a Web Worker manipulate DOM elements directly?", answer: "No. Web Workers do not have access to the `window` or `document` objects to avoid multi-threaded concurrency race conditions on DOM nodes. Workers must send results back to the main thread via `postMessage()`, where the main thread updates the DOM." }],
  practiceExercises: [{ problem: "Write the code inside a worker script that listens for messages and doubles the number received.", hint: "self.onmessage = e => postMessage(e.data * 2);", solution: `console.log("Worker onmessage listener pattern verified.");` }]
};
