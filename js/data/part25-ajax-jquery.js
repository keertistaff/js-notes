/* ==========================================================================
   PART 25: AJAX and jQuery - Comprehensive Topics Data (13 Topics)
   ========================================================================== */

window.TOPIC_DATA_STORE = window.TOPIC_DATA_STORE || {};

function createAjaxTopic(id, title, concept, codeSnippet, practicalTitle, practicalCode, mistake, mistakeFix, mistakeExp, intQ, intA) {
  return {
    id: id,
    title: title,
    lead: `Master ${title}, asynchronous request protocols, server integration, and legacy library paradigms.`,
    intro: `${title} is an important chapter in web development history, representing the transition from full page reloads to dynamic asynchronous web applications.`,
    definition: `In web development, ${title} refers to ${concept}.`,
    whyUse: `Critical for maintaining legacy codebases, enterprise systems, WordPress/PHP workflows, and understanding the evolution leading to the modern Fetch API.`,
    syntax: `// Syntax demonstration for ${title}\n${codeSnippet}`,
    syntaxExplanation: `Demonstrates configuration, request handling, and lifecycle events associated with ${title}.`,
    simpleExample: codeSnippet,
    expectedOutput: `Executed ${title} demonstration.`,
    realLifeExample: {
      domain: "Business Applications",
      title: `${title} Business Integration`,
      scenario: `Applying ${title} to enterprise database portals, legacy shopping carts, or PHP backends.`,
      code: `console.log("Enterprise implementation of ${title} active.");`,
      output: `Enterprise implementation of ${title} active.`
    },
    practicalExample: {
      title: practicalTitle,
      code: practicalCode,
      output: `Demonstrated ${practicalTitle}`,
      note: `Provides practical integration insights.`
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
      `Foundational to the evolution of modern Single-Page Applications (SPAs).`,
      `Crucial for technical interviews comparing modern Fetch vs legacy XMLHttpRequest.`,
      `Works in all legacy browsers.`
    ],
    interviewQuestions: [
      {
        question: intQ,
        answer: intA
      }
    ],
    practiceExercises: [
      {
        problem: `Explain and implement the core pattern of ${title}.`,
        hint: `Follow the syntax structure provided above.`,
        solution: codeSnippet
      }
    ]
  };
}

// 1. AJAX Introduction
window.TOPIC_DATA_STORE["ajax-intro"] = createAjaxTopic(
  "ajax-intro",
  "AJAX Introduction",
  "Asynchronous JavaScript and XML, a technique for creating fast and dynamic web pages by updating parts of a page without reloading",
  `console.log("AJAX allows exchanging data asynchronously with a server in the background.");`,
  "Live Search Suggestions with AJAX",
  `console.log("AJAX requests live suggestions on each keystroke without full page refresh.");`,
  "Thinking AJAX is a programming language",
  `// AJAX is NOT a language; it is a technique combining HTML, CSS, JavaScript, and XMLHttpRequest`,
  "AJAX is a design pattern utilizing existing browser standards.",
  "What does AJAX stand for and what problem did it solve?",
  "AJAX stands for **Asynchronous JavaScript and XML**. Historically, any user interaction required sending a form to the server and reloading the entire web page. AJAX revolutionized the web by allowing browsers to exchange data with servers in the background, updating only specific portions of the DOM."
);

// 2. XMLHttpRequest
window.TOPIC_DATA_STORE["ajax-xmlhttprequest"] = createAjaxTopic(
  "ajax-xmlhttprequest",
  "XMLHttpRequest",
  "the core browser API object used to interact with servers asynchronously prior to the Fetch API",
  `const xhr = new XMLHttpRequest();\nxhr.open("GET", "https://api.example.com/data");\nxhr.onload = function() {\n  if (xhr.status === 200) console.log(xhr.responseText);\n};\nxhr.send();`,
  "Tracking Upload Progress with xhr.upload",
  `let xhr = new XMLHttpRequest();\nxhr.upload.onprogress = e => console.log((e.loaded / e.total * 100) + "%");`,
  "Using synchronous XHR (xhr.open with false as third param)",
  `xhr.open("GET", url, true); // Always use asynchronous mode (true)!`,
  "Synchronous XHR freezes the entire browser UI until the network request returns.",
  "What is the difference between XMLHttpRequest and the Fetch API?",
  "`XMLHttpRequest` is event-based (using `onreadystatechange`, `onload`) and callback-driven, with built-in progress events. `Fetch` is modern, built on native Promises and `async/await`, with streamable bodies, but lacks out-of-the-box upload progress tracking."
);

// 3. AJAX Requests
window.TOPIC_DATA_STORE["ajax-requests"] = createAjaxTopic(
  "ajax-requests",
  "AJAX Requests",
  "configuring HTTP methods (GET, POST), request headers, and sending payloads with open() and send()",
  `const xhr = new XMLHttpRequest();\nxhr.open("POST", "/api/submit", true);\nxhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");\nxhr.send("name=Aarav&score=95");`,
  "Sending JSON via XMLHttpRequest POST",
  `let xhr = new XMLHttpRequest();\nxhr.open("POST", "/api/user", true);\nxhr.setRequestHeader("Content-Type", "application/json");\nxhr.send(JSON.stringify({ name: "Aarav" }));`,
  "Calling send() before calling open()",
  `xhr.open("GET", url); xhr.send(); // open() must ALWAYS precede send()!`,
  "Calling `send()` before `open()` throws an InvalidStateError.",
  "What is the significance of the readyState property in XMLHttpRequest?",
  "`readyState` tracks request progression: 0 (UNSENT), 1 (OPENED), 2 (HEADERS_RECEIVED), 3 (LOADING / downloading), and 4 (DONE / finished)."
);

// 4. AJAX Responses
window.TOPIC_DATA_STORE["ajax-responses"] = createAjaxTopic(
  "ajax-responses",
  "AJAX Responses",
  "reading responseText, responseXML, responseType, and HTTP status codes",
  `const xhr = new XMLHttpRequest();\nxhr.onreadystatechange = function() {\n  if (xhr.readyState === 4 && xhr.status === 200) {\n    let json = JSON.parse(xhr.responseText);\n    console.log(json);\n  }\n};\nxhr.open("GET", "/api/data");\nxhr.send();`,
  "Setting responseType = 'json'",
  `let xhr = new XMLHttpRequest();\nxhr.responseType = "json";\nxhr.onload = () => console.log(xhr.response); // Automatically parsed!`,
  "Parsing responseText before readyState === 4",
  `if (xhr.readyState === 4 && xhr.status === 200) { /* Read response safely */ }`,
  "Reading response data before readyState reaches 4 yields incomplete text.",
  "What is the difference between responseText and responseXML?",
  "`responseText` returns the server response as a raw text string. `responseXML` parses the response into an XML DOM document if the server returned `Content-Type: text/xml`."
);

// 5. AJAX with XML
window.TOPIC_DATA_STORE["ajax-xml"] = createAjaxTopic(
  "ajax-xml",
  "AJAX with XML",
  "extracting data from XML DOM responses using getElementsByTagName()",
  `// xhr.responseXML returns an XML Document\n// const title = xhr.responseXML.getElementsByTagName("title")[0].childNodes[0].nodeValue;`,
  "Parsing Legacy RSS Feeds with XML DOM",
  `console.log("XML responses are navigated using standard DOM traversal methods like getElementsByTagName.");`,
  "Failing to verify XML parsing errors",
  `if (xhr.responseXML) { /* safe to query */ }`,
  "Malformed XML results in a parsererror document.",
  "Why is parsing XML responses in JavaScript more complex than parsing JSON?",
  "XML responses require traversing a full XML DOM tree using verbose methods like `.getElementsByTagName()` and accessing `.childNodes[0].nodeValue`. JSON parses in a single line with `JSON.parse()` into native object properties."
);

// 6. AJAX with PHP
window.TOPIC_DATA_STORE["ajax-php"] = createAjaxTopic(
  "ajax-php",
  "AJAX with PHP",
  "connecting client-side AJAX requests with a PHP server backend script",
  `// JS: fetch('server.php?q=' + input).then(res => res.text()).then(console.log);\n// PHP: <?php echo "Hello " . htmlspecialchars($_GET['q']); ?>`,
  "Real-Time Username Availability Checker with PHP",
  `console.log("AJAX transmits username query to check_user.php; PHP queries database and returns JSON.");`,
  "Trusting client data on the PHP server without sanitization",
  `// In PHP: ALWAYS sanitize input using htmlspecialchars() and prepared SQL statements`,
  "Failing to sanitize leads to SQL Injection and XSS vulnerabilities on the server.",
  "How does a PHP script return a JSON response to an AJAX call?",
  "The PHP script sets the header `header('Content-Type: application/json');` and uses `echo json_encode($data);` to output the serialized data."
);

// 7. AJAX Database
window.TOPIC_DATA_STORE["ajax-database"] = createAjaxTopic(
  "ajax-database",
  "AJAX Database",
  "dynamic live updates between browser interfaces and database systems (MySQL/PostgreSQL) via server APIs",
  `// AJAX client calls API endpoint -> Server executes SQL query -> Returns records as JSON`,
  "Interactive Employee Search Table Connected to Database",
  `console.log("Client sends search term via AJAX -> Server queries MySQL with PDO -> Returns table rows.");`,
  "Attempting to connect directly from browser JavaScript to MySQL or PostgreSQL",
  `// Browser JavaScript CANNOT connect directly to MySQL/Postgres! It must communicate through a server API!`,
  "Browser JavaScript has no raw TCP socket access to SQL databases for security reasons.",
  "Why must database operations go through an intermediate backend server instead of direct JavaScript connection?",
  "Security and architectural isolation: Direct browser database access would expose database credentials, passwords, and permissions to anyone viewing client source code, allowing unrestricted access and SQL manipulation."
);

// 8. jQuery Introduction
window.TOPIC_DATA_STORE["jquery-intro"] = createAjaxTopic(
  "jquery-intro",
  "jQuery Introduction",
  "a fast, small, and feature-rich JavaScript library designed to simplify HTML DOM traversal, event handling, and AJAX",
  `// jQuery syntax:\n// $(selector).action();\n// $(document).ready(function() { $("p").hide(); });`,
  "Comparing Vanilla JS vs jQuery",
  `// Vanilla: document.querySelectorAll('.card').forEach(c => c.style.display = 'none');\n// jQuery : $('.card').hide();`,
  "Including full jQuery library when modern Vanilla JS achieves the same natively",
  `// Modern vanilla JavaScript (querySelector, fetch, classList) makes jQuery largely obsolete for new projects`,
  "jQuery adds 30KB+ of unnecessary overhead when modern browser APIs suffice.",
  "What is the jQuery slogan and what did it accomplish in 2006?",
  "The slogan was **'Write Less, Do More'**. Created by John Resig in 2006, jQuery unified cross-browser inconsistencies (like IE vs Firefox event models) and provided chainable CSS selector querying long before `querySelector` existed."
);

// 9. jQuery Selectors
window.TOPIC_DATA_STORE["jquery-selectors"] = createAjaxTopic(
  "jquery-selectors",
  "jQuery Selectors",
  "selecting and manipulating HTML elements using CSS syntax wrapped in the $() dollar factory function",
  `// $("p") - all paragraphs\n// $("#test") - element with id='test'\n// $(".intro") - elements with class='intro'\n// $("p:first") - first paragraph`,
  "Selecting Form Inputs with jQuery Pseudo-Selectors",
  `// $(":input") selects all inputs, textareas, selects, and buttons\n// $(":checked") selects checked checkboxes`,
  "Forgetting that jQuery selectors return a jQuery wrapper object, not raw DOM nodes",
  `let rawNode = $("#btn")[0]; // Use [0] or .get(0) to get real DOM element`,
  "Calling native DOM methods on a jQuery wrapper object throws a TypeError.",
  "How do you convert a jQuery object into a native DOM element?",
  "Use bracket indexing `$('#myId')[0]` or the `.get(0)` method to extract the underlying native `HTMLElement`."
);

// 10. jQuery HTML
window.TOPIC_DATA_STORE["jquery-html"] = createAjaxTopic(
  "jquery-html",
  "jQuery HTML",
  "manipulating DOM content and attributes with text(), html(), val(), and attr()",
  `// $("#text").text("New Text");\n// $("#box").html("<b>Bold</b>");\n// $("#input").val("New Value");\n// $("#link").attr("href", "https://google.com");`,
  "Method Overloading in jQuery (Getter vs Setter)",
  `// Getter: let val = $("#name").val(); // No argument = READ\n// Setter: $("#name").val("Aarav");    // With argument = WRITE`,
  "Confusing .text() and .html()",
  `// .html() parses tags; .text() treats input as safe literal text`,
  "Always use `.text()` for user-submitted content to prevent XSS in jQuery.",
  "How does jQuery achieve getter and setter duality on methods like val() and html()?",
  "By checking the argument count (`arguments.length`). If called with no arguments, the method reads and returns the property. If called with arguments, it sets the property across all matched elements and returns `this` for chaining."
);

// 11. jQuery CSS
window.TOPIC_DATA_STORE["jquery-css"] = createAjaxTopic(
  "jquery-css",
  "jQuery CSS",
  "manipulating styling and classes with css(), addClass(), removeClass(), and toggleClass()",
  `// $("p").css("background-color", "yellow");\n// $("p").addClass("active");\n// $("p").toggleClass("dark-theme");`,
  "Setting Multiple CSS Styles with Object Literal",
  `// $("p").css({ "color": "white", "background-color": "#04AA6D", "font-size": "20px" });`,
  "Using .css() for complex animations instead of CSS transitions",
  `// Prefer CSS classes with classList / addClass for performant transitions`,
  "Direct inline CSS manipulation via JavaScript can cause layout thrashing.",
  "What is the vanilla JavaScript equivalent of jQuery's addClass() and removeClass()?",
  "`element.classList.add('className')` and `element.classList.remove('className')`."
);

// 12. jQuery DOM
window.TOPIC_DATA_STORE["jquery-dom"] = createAjaxTopic(
  "jquery-dom",
  "jQuery DOM",
  "traversing and mutating DOM tree nodes with append(), prepend(), after(), before(), remove(), and empty()",
  `// $("p").append(" Appended text.");\n// $("ul").prepend("<li>First Item</li>");\n// $("#box").empty(); // Clears all children`,
  "DOM Traversal with parent(), children(), and find()",
  `// $("span").parent(); // Immediate parent\n// $("div").find(".target"); // Deep descendant search`,
  "Confusing .remove() with .empty() in jQuery",
  `// .remove() deletes the element ITSELF; .empty() clears its CHILD elements`,
  "Calling `remove()` deletes the container tag from the DOM entirely.",
  "What is the difference between append() and after() in jQuery?",
  "`.append()` inserts content *inside* the target element as its last child. `.after()` inserts content *outside* the target element as its next sibling."
);

// 13. JSONP
window.TOPIC_DATA_STORE["ajax-jsonp"] = createAjaxTopic(
  "ajax-jsonp",
  "JSONP",
  "JSON with Padding, a historical workaround for Cross-Origin Resource Sharing (CORS) restrictions using `<script>` tags",
  `// Legacy JSONP pattern:\n// <script src="https://api.example.com/data?callback=handleResponse"></script>\nfunction handleResponse(data) {\n  console.log("JSONP Payload:", data);\n}`,
  "Understanding Why `<script>` Tags Bypassed Same-Origin Policy",
  `console.log("<script> tags were immune to Same-Origin Policy, allowing cross-domain data injection wrapped in callback functions.");`,
  "Using JSONP today when modern CORS (Cross-Origin Resource Sharing) is standard",
  `// Modern APIs use CORS headers: Access-Control-Allow-Origin: *`,
  "JSONP is a security risk because it executes arbitrary remote JavaScript in the page context.",
  "What was JSONP and why has modern CORS replaced it?",
  "JSONP (JSON with Padding) circumvented the Same-Origin Policy by dynamically injecting `<script>` tags pointing to external APIs with a `?callback=fn` query parameter. The server wrapped JSON in executable function code `fn({ data })`. It was replaced by **CORS** because JSONP can only perform GET requests and executes untrusted third-party code directly in the global scope."
);
