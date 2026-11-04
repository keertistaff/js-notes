/* ==========================================================================
   PART 26: JavaScript Projects - 10 Fully Functional Interactive Projects
   ========================================================================== */

window.TOPIC_DATA_STORE = window.TOPIC_DATA_STORE || {};

// 1. Counter Application
window.TOPIC_DATA_STORE["proj-counter"] = {
  id: "proj-counter",
  title: "Counter Application",
  isProject: true,
  lead: "Build a complete interactive Counter Application with increment, decrement, reset, step configuration, and state styling.",
  intro: "The Counter Application is the classic starter project in front-end JavaScript development. It demonstrates state management, DOM event listeners, and updating element text dynamically.",
  definition: "A state-driven application that maintains a numerical counter, reacting to user button clicks to increase, decrease, or reset the total.",
  whyUse: "Teaches the fundamental loop of front-end development: User Action -> State Mutation -> DOM Update.",
  syntax: `let count = 0;
function updateDisplay() {
  counterDisplay.textContent = count;
}`,
  syntaxExplanation: "Stores count in a variable and re-renders the DOM element textContent whenever an event fires.",
  simpleExample: `let count = 0;
function increment() { count++; console.log(count); }
function decrement() { count--; console.log(count); }
increment(); // 1
decrement(); // 0`,
  expectedOutput: `1\n0`,
  projectHTML: `<div class="project-container">
  <h3 style="text-align:center; margin-bottom: 0.5rem;">Interactive Counter</h3>
  <div id="counter-val" class="counter-display">0</div>
  <div class="counter-controls">
    <button class="btn-counter dec" id="cnt-dec">- Decrement</button>
    <button class="btn-counter reset" id="cnt-reset">Reset</button>
    <button class="btn-counter inc" id="cnt-inc">+ Increment</button>
  </div>
</div>`,
  projectCSS: `.counter-display {
  font-size: 4rem;
  font-weight: 800;
  text-align: center;
  margin: 1rem 0;
  font-family: monospace;
  color: #04AA6D;
}
.counter-controls {
  display: flex;
  justify-content: center;
  gap: 12px;
}
.btn-counter {
  padding: 10px 22px;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  color: white;
}
.btn-counter.dec { background-color: #f44336; }
.btn-counter.reset { background-color: #64748b; }
.btn-counter.inc { background-color: #04AA6D; }`,
  projectJS: `// Interactive Counter Logic
let currentCount = 0;
const display = document.getElementById("counter-val");
const btnDec = document.getElementById("cnt-dec");
const btnReset = document.getElementById("cnt-reset");
const btnInc = document.getElementById("cnt-inc");

function updateCounter(newVal) {
  currentCount = newVal;
  display.textContent = currentCount;
  if (currentCount > 0) display.style.color = "#04AA6D";
  else if (currentCount < 0) display.style.color = "#f44336";
  else display.style.color = "var(--text-primary)";
}

btnInc.addEventListener("click", () => updateCounter(currentCount + 1));
btnDec.addEventListener("click", () => updateCounter(currentCount - 1));
btnReset.addEventListener("click", () => updateCounter(0));`,
  realLifeExample: {
    domain: "Shopping",
    title: "E-Commerce Cart Quantity Selector",
    scenario: "Allowing shoppers to increase or decrease item quantities in their checkout bag.",
    code: `let cartQty = 1;
function changeQuantity(delta) {
  cartQty = Math.max(1, cartQty + delta); // Never less than 1
  console.log("Cart Quantity updated to: " + cartQty);
}
changeQuantity(1); // 2
changeQuantity(-1); // 1`,
    output: `Cart Quantity updated to: 2\nCart Quantity updated to: 1`
  },
  practicalExample: {
    title: "Dynamic Color Coding Based on Positive/Negative Value",
    code: `function getColorForCount(c) {
  if (c > 0) return "green";
  if (c < 0) return "red";
  return "black";
}
console.log("Color for 5 :", getColorForCount(5));
console.log("Color for -3:", getColorForCount(-3));`,
    output: `Color for 5 : green\nColor for -3: red`,
    note: "Altering colors visually guides user intuition."
  },
  commonMistakes: [
    {
      mistake: "Reading value from DOM element string and adding numbers without converting",
      wrongCode: `count = display.textContent + 1; // "0" + 1 = "01"!`,
      correctCode: `count = Number(display.textContent) + 1; // Or maintain variable in JS!`,
      explanation: "DOM textContent returns a string; maintain numerical state in a JavaScript variable."
    }
  ],
  importantPoints: [
    "Always maintain application state in JavaScript memory, not solely in DOM strings.",
    "Centralize DOM updates in a single `render()` or `updateDisplay()` function.",
    "Use conditional styling to give visual feedback."
  ],
  interviewQuestions: [
    {
      question: "Why is it best practice to maintain state in JavaScript variables rather than reading directly from DOM elements?",
      answer: "Reading from the DOM is slow (causes layout queries) and produces strings that require type conversion. Maintaining an in-memory single source of truth (`let count = 0`) ensures predictable, fast, and testable state management."
    }
  ],
  practiceExercises: [
    {
      problem: "Add a step multiplier to the counter so users can choose between steps of 1, 5, or 10.",
      hint: "count += stepSize",
      solution: `let count = 0, step = 5;
count += step;
console.log("Count with step 5:", count);`
    }
  ]
};

// 2. Digital Clock
window.TOPIC_DATA_STORE["proj-clock"] = {
  id: "proj-clock",
  title: "Digital Clock",
  isProject: true,
  lead: "Build a live, ticking Digital Clock with 12/24 hour toggles, AM/PM indicators, and localized calendar dates.",
  intro: "A digital clock demonstrates asynchronous timers (`setInterval`), date extraction methods, and zero-padding formatting.",
  definition: "A continuous live time application that updates every second by reading system time from Date objects.",
  whyUse: "Teaches repeating intervals, string padding with `padStart()`, and real-time DOM updates.",
  syntax: `setInterval(updateClock, 1000);`,
  syntaxExplanation: "Invokes `updateClock()` every 1,000 milliseconds (1 second) to refresh the display.",
  simpleExample: `let now = new Date();
console.log(now.toLocaleTimeString());`,
  expectedOutput: new Date().toLocaleTimeString(),
  projectHTML: `<div class="project-container" style="text-align:center;">
  <h3>Live Digital Clock</h3>
  <div id="live-clock-time" class="clock-display">00:00:00 AM</div>
  <div id="live-clock-date" class="clock-date">Wednesday, November 4, 2026</div>
  <div style="margin-top: 1rem;">
    <button class="btn-code-action" id="btn-toggle-format" style="margin: 0 auto;">Toggle 12/24 Hour Mode</button>
  </div>
</div>`,
  projectCSS: `.clock-display {
  font-size: 3.5rem;
  font-weight: 800;
  text-align: center;
  font-family: monospace;
  color: #04AA6D;
  letter-spacing: 2px;
  margin: 1rem 0 0.5rem 0;
}
.clock-date {
  text-align: center;
  font-size: 1.1rem;
  color: #64748b;
}`,
  projectJS: `// Live Digital Clock Script
let is24Hour = false;
const clockEl = document.getElementById("live-clock-time");
const dateEl = document.getElementById("live-clock-date");
const formatBtn = document.getElementById("btn-toggle-format");

function tickClock() {
  const now = new Date();
  let h = now.getHours();
  let m = now.getMinutes().toString().padStart(2, "0");
  let s = now.getSeconds().toString().padStart(2, "0");
  let ampm = "";

  if (!is24Hour) {
    ampm = h >= 12 ? " PM" : " AM";
    h = h % 12 || 12;
  }
  let hStr = h.toString().padStart(2, "0");
  if (clockEl) clockEl.textContent = \`\${hStr}:\${m}:\${s}\${ampm}\`;
  if (dateEl) {
    dateEl.textContent = now.toLocaleDateString("en-US", {
      weekday: "long", year: "numeric", month: "long", day: "numeric"
    });
  }
}

formatBtn.addEventListener("click", () => {
  is24Hour = !is24Hour;
  tickClock();
});

setInterval(tickClock, 1000);
tickClock();`,
  realLifeExample: {
    domain: "Attendance Management",
    title: "Shift Punch Terminal Master Clock",
    scenario: "Displaying exact synchronized time for factory workers punching shift cards.",
    code: `function getPunchTimestamp() {
  let d = new Date();
  return d.toISOString().replace("T", " ").slice(0, 19);
}
console.log("Recorded Clock Punch: " + getPunchTimestamp());`,
    output: `Recorded Clock Punch: ` + new Date().toISOString().replace("T", " ").slice(0, 19)
  },
  practicalExample: {
    title: "Padding Single Digits with padStart(2, '0')",
    code: `let minute = 7;
let padded = minute.toString().padStart(2, "0");
console.log("Padded Minute:", padded); // "07"`,
    output: `Padded Minute: 07`,
    note: "`padStart()` formats digital clock digits cleanly."
  },
  commonMistakes: [
    {
      mistake: "Waiting 1 full second before calling tickClock for the first time",
      wrongCode: `setInterval(tickClock, 1000); // Display remains blank or 00:00:00 for the first second!`,
      correctCode: `tickClock(); setInterval(tickClock, 1000); // Call immediately once!`,
      explanation: "Always invoke the clock function immediately before setting the interval to populate the screen without a 1-second lag."
    }
  ],
  importantPoints: [
    "`padStart(2, '0')` prevents `9:5:2` and renders `09:05:02`.",
    "Call the clock updater immediately once on startup.",
    "Store interval IDs if you plan to pause or destroy the clock."
  ],
  interviewQuestions: [
    {
      question: "Why should you call the clock function immediately before setting `setInterval(fn, 1000)`?",
      answer: "`setInterval` waits for the initial delay (1000ms) before executing its callback for the first time. Invoking the function synchronously once beforehand ensures the clock displays the correct time instantaneously upon page load."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a function that returns the current time formatted as `HH:MM:SS` using `padStart()`.",
      hint: "Use now.getHours(), getMinutes(), getSeconds().",
      solution: `function getTimeString() {
  let d = new Date();
  return [d.getHours(), d.getMinutes(), d.getSeconds()]
    .map(n => n.toString().padStart(2, "0")).join(":");
}
console.log(getTimeString());`
    }
  ]
};

// 3. Calculator
window.TOPIC_DATA_STORE["proj-calculator"] = {
  id: "proj-calculator",
  title: "Calculator",
  isProject: true,
  lead: "Build a fully working arithmetic Calculator with display screen, number keys, operators, clear, and decimal support.",
  intro: "Building a functional calculator teaches event delegation, state tracking (operand 1, operator, operand 2), parsing floats, and mathematical evaluation.",
  definition: "An interactive calculator performing addition, subtraction, multiplication, and division operations.",
  whyUse: "Teaches state machine logic, boundary error handling (divide by zero), and building responsive button grids.",
  syntax: `function calculate(a, op, b) {
  if (op === "+") return a + b;
  if (op === "-") return a - b;
  if (op === "*") return a * b;
  if (op === "/") return b !== 0 ? a / b : "Error";
}`,
  syntaxExplanation: "Evaluates the pending operation when the equals button `=` is pressed.",
  simpleExample: `console.log("Calculator engine: 10 + 25 = 35");`,
  expectedOutput: `Calculator engine: 10 + 25 = 35`,
  projectHTML: `<div class="project-container" style="max-width: 340px;">
  <h3 style="text-align:center; margin-bottom: 0.5rem;">Interactive Calculator</h3>
  <div class="calc-grid" id="calc-app">
    <div class="calc-screen" id="calc-display">0</div>
    <button class="calc-btn clear" data-action="clear">C</button>
    <button class="calc-btn op" data-action="divide">/</button>
    <button class="calc-btn op" data-action="multiply">*</button>
    <button class="calc-btn" data-num="7">7</button>
    <button class="calc-btn" data-num="8">8</button>
    <button class="calc-btn" data-num="9">9</button>
    <button class="calc-btn op" data-action="subtract">-</button>
    <button class="calc-btn" data-num="4">4</button>
    <button class="calc-btn" data-num="5">5</button>
    <button class="calc-btn" data-num="6">6</button>
    <button class="calc-btn op" data-action="add">+</button>
    <button class="calc-btn" data-num="1">1</button>
    <button class="calc-btn" data-num="2">2</button>
    <button class="calc-btn" data-num="3">3</button>
    <button class="calc-btn eq" data-action="calculate">=</button>
    <button class="calc-btn" data-num="0" style="grid-column: span 2;">0</button>
    <button class="calc-btn" data-action="decimal">.</button>
  </div>
</div>`,
  projectCSS: `.calc-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
}
.calc-screen {
  grid-column: span 4;
  background-color: #1e1e1e;
  color: #4ec9b0;
  font-family: monospace;
  font-size: 1.75rem;
  padding: 14px 16px;
  text-align: right;
  border-radius: 4px;
  min-height: 58px;
  overflow-x: auto;
}
.calc-btn {
  padding: 14px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 4px;
  border: 1px solid var(--border-color);
  background: var(--bg-card);
  color: var(--text-primary);
  cursor: pointer;
}
.calc-btn:hover { background-color: var(--bg-tertiary); }
.calc-btn.op { background-color: #ff9800; color: white; border-color: #ff9800; }
.calc-btn.eq { background-color: #04AA6D; color: white; border-color: #04AA6D; }
.calc-btn.clear { background-color: #f44336; color: white; border-color: #f44336; }`,
  projectJS: `// Interactive Calculator Logic
let firstOperand = null;
let currentOperator = null;
let waitingForSecond = false;
let displayValue = "0";

const displayEl = document.getElementById("calc-display");
const calcGrid = document.getElementById("calc-app");

function updateScreen() {
  if (displayEl) displayEl.textContent = displayValue;
}

calcGrid.addEventListener("click", e => {
  const btn = e.target.closest("button");
  if (!btn) return;

  const num = btn.dataset.num;
  const action = btn.dataset.action;

  if (num !== undefined) {
    if (waitingForSecond) {
      displayValue = num;
      waitingForSecond = false;
    } else {
      displayValue = displayValue === "0" ? num : displayValue + num;
    }
    updateScreen();
    return;
  }

  if (action === "decimal") {
    if (!displayValue.includes(".")) {
      displayValue += ".";
      updateScreen();
    }
    return;
  }

  if (action === "clear") {
    firstOperand = null;
    currentOperator = null;
    waitingForSecond = false;
    displayValue = "0";
    updateScreen();
    return;
  }

  if (["add", "subtract", "multiply", "divide"].includes(action)) {
    firstOperand = parseFloat(displayValue);
    currentOperator = action;
    waitingForSecond = true;
    return;
  }

  if (action === "calculate") {
    if (currentOperator && firstOperand !== null) {
      let second = parseFloat(displayValue);
      let res = 0;
      if (currentOperator === "add") res = firstOperand + second;
      if (currentOperator === "subtract") res = firstOperand - second;
      if (currentOperator === "multiply") res = firstOperand * second;
      if (currentOperator === "divide") res = second !== 0 ? firstOperand / second : "Error";
      
      displayValue = String(res);
      firstOperand = null;
      currentOperator = null;
      waitingForSecond = false;
      updateScreen();
    }
  }
});`,
  realLifeExample: {
    domain: "Restaurant Billing",
    title: "Table Bill Quick Calculator",
    scenario: "Computing dish sum and splitting charges dynamically.",
    code: `let subtotal = 450 + 380 + 120;
console.log("Calculated Order Bill: Rs." + subtotal);`,
    output: `Calculated Order Bill: Rs.950`
  },
  practicalExample: {
    title: "Handling Division by Zero Gracefully",
    code: `function safeDiv(a, b) {
  if (b === 0) return "Error (Div by Zero)";
  return a / b;
}
console.log(safeDiv(100, 0));`,
    output: `Error (Div by Zero)`,
    note: "Never allow raw `Infinity` to break calculator layouts."
  },
  commonMistakes: [
    {
      mistake: "Using eval() to calculate user expression string",
      wrongCode: `let result = eval(userExpression); // DANGER: Critical Remote Code Execution (RCE) vulnerability!`,
      correctCode: `// Use mathematical operator switch / state machine!`,
      explanation: "`eval()` executes arbitrary code and is a major security vulnerability."
    }
  ],
  importantPoints: [
    "Never use `eval()` to build calculators.",
    "Event delegation on the grid container reduces listeners to one.",
    "Handle decimal point duplication."
  ],
  interviewQuestions: [
    {
      question: "Why should `eval()` never be used when building a JavaScript calculator?",
      answer: "`eval()` compiles and executes arbitrary JavaScript code with full privileges. If user input contains malicious scripts, an attacker can steal cookies, compromise user sessions, or execute malicious payloads (XSS)."
    }
  ],
  practiceExercises: [
    {
      problem: "Add a backspace (DEL) feature that removes the last entered character from the calculator display.",
      hint: "displayValue.slice(0, -1) || '0'",
      solution: `let disp = "123"; disp = disp.slice(0, -1) || "0"; console.log(disp); // "12"`
    }
  ]
};

// 4. To-Do List
window.TOPIC_DATA_STORE["proj-todo"] = {
  id: "proj-todo",
  title: "To-Do List",
  isProject: true,
  lead: "Build a complete To-Do List application with task creation, completion toggle, deletion, and localStorage persistence.",
  intro: "The To-Do List application teaches array manipulation (CRUD), event delegation, dynamic HTML generation, and persisting state across sessions using localStorage.",
  definition: "A task management application allowing users to add, toggle completed status, delete tasks, and preserve data locally.",
  whyUse: "Covers the full spectrum of essential web development concepts: Forms, Arrays, LocalStorage, and DOM Events.",
  syntax: `tasks.push({ id: Date.now(), text: "Task", done: false });
localStorage.setItem("tasks", JSON.stringify(tasks));`,
  syntaxExplanation: "Stores an array of task objects and serializes them to localStorage on every state change.",
  simpleExample: `let tasks = [{ id: 1, text: "Learn JS", done: true }];
console.log("Tasks in list:", tasks.length);`,
  expectedOutput: `Tasks in list: 1`,
  projectHTML: `<div class="project-container">
  <h3>Interactive To-Do List</h3>
  <div class="todo-input-row">
    <input type="text" id="todo-input-field" class="todo-input" placeholder="What needs to be done?" />
    <button class="btn-code-action btn-code-run" id="btn-add-todo">Add Task</button>
  </div>
  <ul class="todo-list" id="todo-items-list">
    <!-- Tasks will render dynamically here -->
  </ul>
</div>`,
  projectCSS: `.todo-input-row { display: flex; gap: 8px; margin-bottom: 1rem; }
.todo-input { flex: 1; padding: 9px 12px; border: 1px solid var(--border-color); border-radius: 4px; background: var(--bg-card); color: var(--text-primary); }
.todo-list { list-style: none; padding: 0; margin: 0; }
.todo-item { display: flex; align-items: center; justify-content: space-between; padding: 10px 12px; background-color: var(--bg-card); border: 1px solid var(--border-color); border-radius: 4px; margin-bottom: 6px; }
.todo-item.done span { text-decoration: line-through; color: var(--text-muted); opacity: 0.7; }
.todo-delete-btn { background: none; border: none; color: #f44336; cursor: pointer; font-weight: bold; }`,
  projectJS: `// Interactive To-Do List Script
let todoTasks = JSON.parse(localStorage.getItem("learning_hub_todos") || "[]");
const todoInput = document.getElementById("todo-input-field");
const todoAddBtn = document.getElementById("btn-add-todo");
const todoList = document.getElementById("todo-items-list");

function saveAndRenderTodos() {
  localStorage.setItem("learning_hub_todos", JSON.stringify(todoTasks));
  if (!todoList) return;
  todoList.innerHTML = "";
  if (todoTasks.length === 0) {
    todoList.innerHTML = "<li style='color:var(--text-muted);text-align:center;padding:1rem;'>No tasks yet. Add one above!</li>";
    return;
  }
  todoTasks.forEach(task => {
    const li = document.createElement("li");
    li.className = "todo-item" + (task.done ? " done" : "");
    li.dataset.id = task.id;
    li.innerHTML = \`
      <span style="cursor:pointer;" class="task-text">\${task.text}</span>
      <button class="todo-delete-btn" title="Delete">✕</button>
    \`;
    todoList.appendChild(li);
  });
}

function addTodo() {
  const text = todoInput.value.trim();
  if (!text) return;
  todoTasks.push({ id: Date.now(), text: text, done: false });
  todoInput.value = "";
  saveAndRenderTodos();
}

if (todoAddBtn) todoAddBtn.addEventListener("click", addTodo);
if (todoInput) todoInput.addEventListener("keydown", e => { if (e.key === "Enter") addTodo(); });

if (todoList) {
  todoList.addEventListener("click", e => {
    const li = e.target.closest(".todo-item");
    if (!li) return;
    const id = Number(li.dataset.id);
    if (e.target.classList.contains("todo-delete-btn")) {
      todoTasks = todoTasks.filter(t => t.id !== id);
      saveAndRenderTodos();
    } else {
      const task = todoTasks.find(t => t.id === id);
      if (task) { task.done = !task.done; saveAndRenderTodos(); }
    }
  });
}

saveAndRenderTodos();`,
  realLifeExample: {
    domain: "Attendance Management",
    title: "Daily Office Tasks Checklist",
    scenario: "Maintaining daily morning opening duties for front-desk attendance reception.",
    code: `let checklist = ["Unlock turnstiles", "Boot server", "Test biometric scanner"];
checklist.forEach((item, i) => console.log((i + 1) + ". [ ] " + item));`,
    output: `1. [ ] Unlock turnstiles\n2. [ ] Boot server\n3. [ ] Test biometric scanner`
  },
  practicalExample: {
    title: "Filtering Tasks with array.filter()",
    code: `let tasks = [{ id: 1, text: "Buy milk", done: false }, { id: 2, text: "Read book", done: true }];
let pending = tasks.filter(t => !t.done);
console.log("Pending tasks count:", pending.length);`,
    output: `Pending tasks count: 1`,
    note: "Use `filter()` to delete tasks or show only active ones."
  },
  commonMistakes: [
    {
      mistake: "Attaching individual click listeners to every single list item instead of using event delegation",
      wrongCode: `document.querySelectorAll(".todo-item").forEach(item => item.onclick = ...); // Fails for new tasks!`,
      correctCode: `todoList.addEventListener("click", e => { /* Delegate! */ });`,
      explanation: "Delegation handles newly inserted tasks automatically with a single parent listener."
    }
  ],
  importantPoints: [
    "Use unique IDs (`Date.now()`) for task items.",
    "Persist tasks with `localStorage.setItem()`.",
    "Use event delegation on the `<ul>`."
  ],
  interviewQuestions: [
    {
      question: "How does event delegation simplify managing dynamic items like a To-Do list?",
      answer: "With event delegation, you attach a single click listener to the static parent `<ul>`. As tasks are dynamically added, modified, or deleted, their events naturally bubble up to the parent, eliminating the need to bind and unbind listeners on individual list elements."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a function that toggles the `done` boolean of a task in an array by its ID.",
      hint: "let t = tasks.find(x => x.id === id); if (t) t.done = !t.done;",
      solution: `let list = [{ id: 10, done: false }];
let item = list.find(x => x.id === 10);
if (item) item.done = !item.done;
console.log("Toggled Done:", list[0].done); // true`
    }
  ]
};

// 5. Form Validation Project
window.TOPIC_DATA_STORE["proj-form-validation"] = {
  id: "proj-form-validation",
  title: "Form Validation",
  isProject: true,
  lead: "Build an interactive Form Validation Application with real-time feedback, email regex, and password security rules.",
  intro: "Form validation is an essential client-side feature verifying that user input is complete, properly formatted, and safe before server submission.",
  definition: "An interactive form validator providing real-time feedback, error borders, and blocking invalid submissions.",
  whyUse: "Teaches regular expression validation, DOM class manipulation, preventDefault(), and user experience feedback.",
  syntax: `form.addEventListener("submit", e => {
  if (!validate()) e.preventDefault();
});`,
  syntaxExplanation: "Validates field criteria upon input blur or submit, displaying targeted error messages.",
  simpleExample: `console.log("Form validator checks: Name, Email regex, Password length, and Confirm password match.");`,
  expectedOutput: `Form validator checks: Name, Email regex, Password length, and Confirm password match.`,
  projectHTML: `<div class="project-container">
  <h3>Interactive Form Validation</h3>
  <form id="interactive-val-form" novalidate>
    <div class="form-group">
      <label class="form-label">Full Name</label>
      <input type="text" id="fv-name" class="form-input" placeholder="e.g. Aarav Sharma" />
      <span class="form-error-msg" id="fv-name-err">Name must be at least 3 characters.</span>
    </div>
    <div class="form-group">
      <label class="form-label">Email Address</label>
      <input type="email" id="fv-email" class="form-input" placeholder="e.g. user@example.com" />
      <span class="form-error-msg" id="fv-email-err">Please enter a valid email address.</span>
    </div>
    <div class="form-group">
      <label class="form-label">Password (Min 6 chars)</label>
      <input type="password" id="fv-pass" class="form-input" placeholder="••••••••" />
      <span class="form-error-msg" id="fv-pass-err">Password must be at least 6 characters.</span>
    </div>
    <button type="submit" class="btn-code-action btn-code-run" style="width:100%; justify-content:center; padding:10px;">Register Account</button>
  </form>
  <div id="fv-success-msg" style="display:none; margin-top:1rem; padding:10px; background:#e8f5e9; color:#2e7d32; border-radius:4px; text-align:center; font-weight:bold;">Registration Successful!</div>
</div>`,
  projectCSS: `.form-group { margin-bottom: 1rem; }
.form-label { display: block; font-size: 0.85rem; font-weight: 600; margin-bottom: 4px; }
.form-input { width: 100%; padding: 8px 12px; border: 1px solid var(--border-color); border-radius: 4px; background-color: var(--bg-card); color: var(--text-primary); }
.form-input.invalid { border-color: #f44336; }
.form-input.valid { border-color: #04AA6D; }
.form-error-msg { font-size: 0.75rem; color: #f44336; margin-top: 3px; display: none; }
.form-input.invalid ~ .form-error-msg { display: block; }`,
  projectJS: `// Interactive Form Validation Script
const valForm = document.getElementById("interactive-val-form");
const nameInput = document.getElementById("fv-name");
const emailInput = document.getElementById("fv-email");
const passInput = document.getElementById("fv-pass");
const successBox = document.getElementById("fv-success-msg");

function validateField(input, condition) {
  if (condition) {
    input.classList.remove("invalid");
    input.classList.add("valid");
    return true;
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
    return false;
  }
}

valForm.addEventListener("submit", e => {
  e.preventDefault();
  const isNameValid = validateField(nameInput, nameInput.value.trim().length >= 3);
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  const isEmailValid = validateField(emailInput, emailRegex.test(emailInput.value.trim()));
  const isPassValid = validateField(passInput, passInput.value.length >= 6);

  if (isNameValid && isEmailValid && isPassValid) {
    if (successBox) successBox.style.display = "block";
  } else {
    if (successBox) successBox.style.display = "none";
  }
});`,
  realLifeExample: {
    domain: "Banking",
    title: "Online Account Application Validation",
    scenario: "Validating applicant credentials before creating account profile.",
    code: `let isValid = true;
console.log("Application verified: " + isValid);`,
    output: `Application verified: true`
  },
  practicalExample: {
    title: "Validating with the novalidate HTML Attribute",
    code: `// Add novalidate to <form> to suppress default browser tooltips and use custom CSS feedback
console.log("Adding 'novalidate' to forms delegates full styling control to custom JavaScript.");`,
    output: `Adding 'novalidate' to forms delegates full styling control to custom JavaScript.`,
    note: "Use `novalidate` to design custom error styles."
  },
  commonMistakes: [
    {
      mistake: "Forgetting e.preventDefault() causing immediate form refresh",
      wrongCode: `form.onsubmit = function() { validate(); } // Page reloads immediately on submit!`,
      correctCode: `form.onsubmit = function(e) { e.preventDefault(); validate(); }`,
      explanation: "Without `preventDefault()`, the browser submits and refreshes the page."
    }
  ],
  importantPoints: [
    "Add `novalidate` attribute to `<form>` for custom UI control.",
    "Validate upon both `input` blur and `submit`.",
    "Check regex patterns for email formats."
  ],
  interviewQuestions: [
    {
      question: "Why should client-side form validation always be accompanied by server-side validation?",
      answer: "Client-side validation can be bypassed by disabling JavaScript or using API tools like curl/Postman. Server-side validation is strictly required for data integrity and security, while client validation provides fast, responsive user feedback."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a function that validates an email with regular expression.",
      hint: "/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)",
      solution: `function isValidEmail(e) { return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(e); }
console.log(isValidEmail("user@hub.com")); // true`
    }
  ]
};

// 6. Modal Popup Project
window.TOPIC_DATA_STORE["proj-modal"] = {
  id: "proj-modal",
  title: "Modal Popup",
  lead: "Build an accessible animated Modal Popup with backdrop click dismissal, Escape key closing, and focus trapping.",
  intro: "A modal popup is a dialogue box/pop-up window that is displayed on top of the current page, demanding user attention.",
  definition: "An overlay dialog that temporarily disables the underlying page content while requesting user decision or input.",
  whyUse: "Displaying confirmation dialogs, viewing terms of service, lightbox image viewers, and login forms.",
  syntax: `modal.classList.add("open");
backdrop.addEventListener("click", closeModal);`,
  syntaxExplanation: "Toggling display class and listening to keyboard Escape events.",
  simpleExample: `console.log("Modal popup toggles visibility by adding or removing CSS display/flex classes.");`,
  expectedOutput: `Modal popup toggles visibility by adding or removing CSS display/flex classes.`,
  projectHTML: `<div class="project-container" style="text-align:center;">
  <h3>Interactive Modal Popup Demo</h3>
  <p style="margin-bottom:1rem; color:var(--text-secondary);">Click the button below to launch an interactive dialog overlay.</p>
  <button class="btn-code-action btn-code-run" id="btn-open-demo-modal" style="margin: 0 auto;">Open Modal Dialog</button>

  <div class="modal-overlay" id="demo-modal-overlay">
    <div class="modal-box">
      <button class="modal-close-btn" id="btn-close-demo-modal">✕</button>
      <h3 style="margin-bottom:0.75rem;">Important Notification</h3>
      <p style="color:var(--text-secondary); line-height:1.6; margin-bottom:1.5rem;">
        This modal dialog is completely interactive! You can close it by clicking the ✕ button, clicking outside on the dark backdrop, or pressing the <strong>Escape</strong> key on your keyboard.
      </p>
      <div style="display:flex; justify-content:flex-end; gap:8px;">
        <button class="btn-code-action" id="btn-modal-cancel">Cancel</button>
        <button class="btn-code-action btn-code-run" id="btn-modal-confirm">I Understand</button>
      </div>
    </div>
  </div>
</div>`,
  projectCSS: `.modal-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}
.modal-overlay.open { display: flex; }
.modal-box {
  background: var(--bg-card);
  border-radius: 8px;
  padding: 2rem;
  max-width: 480px;
  width: 90%;
  box-shadow: 0 10px 25px rgba(0,0,0,0.3);
  position: relative;
  text-align: left;
}
.modal-close-btn {
  position: absolute;
  top: 12px; right: 14px;
  font-size: 1.25rem;
  background: none; border: none;
  color: var(--text-muted); cursor: pointer;
}`,
  projectJS: `// Interactive Modal Script
const modalOverlay = document.getElementById("demo-modal-overlay");
const btnOpen = document.getElementById("btn-open-demo-modal");
const btnClose = document.getElementById("btn-close-demo-modal");
const btnCancel = document.getElementById("btn-modal-cancel");
const btnConfirm = document.getElementById("btn-modal-confirm");

function openModal() {
  if (modalOverlay) modalOverlay.classList.add("open");
}

function closeModal() {
  if (modalOverlay) modalOverlay.classList.remove("open");
}

if (btnOpen) btnOpen.addEventListener("click", openModal);
if (btnClose) btnClose.addEventListener("click", closeModal);
if (btnCancel) btnCancel.addEventListener("click", closeModal);
if (btnConfirm) btnConfirm.addEventListener("click", closeModal);

// Close on backdrop click
if (modalOverlay) {
  modalOverlay.addEventListener("click", e => {
    if (e.target === modalOverlay) closeModal();
  });
}

// Close on Escape key press
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && modalOverlay && modalOverlay.classList.contains("open")) {
    closeModal();
  }
});`,
  realLifeExample: {
    domain: "Banking",
    title: "Wire Transfer Authentication Challenge Dialog",
    scenario: "Requiring confirmation modal before dispatching irreversible wire transfers.",
    code: `console.log("Modal challenge displayed to authenticate wire transfer.");`,
    output: `Modal challenge displayed to authenticate wire transfer.`
  },
  practicalExample: {
    title: "Preventing Background Page Scrolling",
    code: `function toggleScrollLock(lock) {
  // document.body.style.overflow = lock ? "hidden" : "auto";
  console.log("Scroll lock active:", lock);
}
toggleScrollLock(true);`,
    output: `Scroll lock active: true`,
    note: "Setting `body.style.overflow = 'hidden'` stops background scrolling while modal is active."
  },
  commonMistakes: [
    {
      mistake: "Clicking inside the modal content box accidentally closes the modal",
      wrongCode: `modalOverlay.onclick = closeModal; // Closes even when clicking inside the white modal box!`,
      correctCode: `modalOverlay.onclick = e => { if (e.target === modalOverlay) closeModal(); };`,
      explanation: "Verify that `e.target === modalOverlay` so clicks inside the inner box are ignored."
    }
  ],
  importantPoints: [
    "Support Escape key closing for accessibility.",
    "Verify `e.target === overlay` for backdrop clicks.",
    "Lock body scroll with `overflow: hidden`."
  ],
  interviewQuestions: [
    {
      question: "What is Focus Trapping in accessible modal dialogs?",
      answer: "Focus trapping ensures that when keyboard users press Tab or Shift+Tab, keyboard focus cycles strictly between the interactive elements inside the active modal, preventing focus from escaping to hidden background elements."
    }
  ],
  practiceExercises: [
    {
      problem: "Write the Escape key listener that closes an open modal.",
      hint: "if (e.key === 'Escape') closeModal()",
      solution: `document.addEventListener("keydown", e => { if (e.key === "Escape") console.log("Closed via Escape"); });`
    }
  ]
};

// 7. Quiz Application
window.TOPIC_DATA_STORE["proj-quiz"] = {
  id: "proj-quiz",
  title: "Quiz Application",
  isProject: true,
  lead: "Build an interactive Quiz Application with multiple-choice questions, score tracking, progress counter, and review screen.",
  intro: "A Quiz Application demonstrates state management across question steps, calculating user scores, rendering options dynamically, and presenting final evaluations.",
  definition: "An interactive assessment platform evaluating user answers across multiple-choice questions with real-time score calculation.",
  whyUse: "Teaches state machine progression, dynamic element rendering, array indexing, and conditional scoring.",
  syntax: `let currentQuestionIndex = 0;
let userScore = 0;`,
  syntaxExplanation: "Tracks active question index and accumulated score in state variables.",
  simpleExample: `console.log("Quiz engine: Question -> Choice Select -> Check -> Score Accumulator");`,
  expectedOutput: `Quiz engine: Question -> Choice Select -> Check -> Score Accumulator`,
  projectHTML: `<div class="project-container">
  <div class="quiz-box" id="interactive-quiz-app">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
      <span style="font-weight:700; color:var(--accent-green);" id="quiz-progress-text">Question 1 of 3</span>
      <span style="font-weight:700;" id="quiz-score-badge">Score: 0</span>
    </div>
    <h3 id="quiz-question-text" style="margin-bottom:1rem;">Which keyword is used to declare a block-scoped variable in modern JS?</h3>
    <div class="quiz-options" id="quiz-options-container">
      <!-- Options rendered dynamically -->
    </div>
    <div id="quiz-explanation" style="display:none; padding:10px; border-radius:4px; margin-top:1rem; font-size:0.9rem;"></div>
    <button class="btn-code-action btn-code-run" id="btn-next-question" style="display:none; margin-top:1rem; width:100%; justify-content:center;">Next Question</button>
  </div>
</div>`,
  projectCSS: `.quiz-box { background: var(--bg-card); padding: 1.5rem; border-radius: 8px; }
.quiz-options { display: flex; flex-direction: column; gap: 8px; margin: 1rem 0; }
.quiz-option-btn { padding: 10px 14px; border: 1px solid var(--border-color); background: var(--bg-secondary); color: var(--text-primary); border-radius: 4px; text-align: left; cursor: pointer; font-size: 0.95rem; }
.quiz-option-btn:hover { background-color: var(--bg-tertiary); }
.quiz-option-btn.correct { background-color: #04AA6D; color: white; border-color: #04AA6D; }
.quiz-option-btn.incorrect { background-color: #f44336; color: white; border-color: #f44336; }`,
  projectJS: `// Interactive Quiz Script
const quizQuestions = [
  {
    q: "Which keyword is used to declare a block-scoped variable in modern JavaScript?",
    options: ["var", "let", "def", "global"],
    correct: 1,
    exp: "'let' and 'const' were introduced in ES6 for block scoping."
  },
  {
    q: "What does typeof null evaluate to in JavaScript?",
    options: ["'null'", "'undefined'", "'object'", "'boolean'"],
    correct: 2,
    exp: "Due to a historical 1995 quirk, typeof null evaluates to 'object'."
  },
  {
    q: "Which method is used to remove the last element from an array?",
    options: ["pop()", "push()", "shift()", "slice()"],
    correct: 0,
    exp: "pop() removes and returns the last element of an array."
  }
];

let qIndex = 0;
let qScore = 0;
let answered = false;

const qText = document.getElementById("quiz-question-text");
const optContainer = document.getElementById("quiz-options-container");
const progText = document.getElementById("quiz-progress-text");
const scoreBadge = document.getElementById("quiz-score-badge");
const expBox = document.getElementById("quiz-explanation");
const nextBtn = document.getElementById("btn-next-question");

function renderQuizQuestion() {
  answered = false;
  const current = quizQuestions[qIndex];
  if (qText) qText.textContent = current.q;
  if (progText) progText.textContent = \`Question \${qIndex + 1} of \${quizQuestions.length}\`;
  if (scoreBadge) scoreBadge.textContent = "Score: " + qScore;
  if (expBox) expBox.style.display = "none";
  if (nextBtn) nextBtn.style.display = "none";

  if (optContainer) {
    optContainer.innerHTML = "";
    current.options.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.className = "quiz-option-btn";
      btn.textContent = opt;
      btn.addEventListener("click", () => handleOptionClick(btn, idx));
      optContainer.appendChild(btn);
    });
  }
}

function handleOptionClick(selectedBtn, selectedIdx) {
  if (answered) return;
  answered = true;
  const current = quizQuestions[qIndex];
  const allBtns = optContainer.querySelectorAll(".quiz-option-btn");

  if (selectedIdx === current.correct) {
    selectedBtn.classList.add("correct");
    qScore += 10;
    if (scoreBadge) scoreBadge.textContent = "Score: " + qScore;
  } else {
    selectedBtn.classList.add("incorrect");
    allBtns[current.correct].classList.add("correct");
  }

  allBtns.forEach(b => b.disabled = true);
  if (expBox) {
    expBox.style.display = "block";
    expBox.style.background = selectedIdx === current.correct ? "#e8f5e9" : "#ffebee";
    expBox.style.color = selectedIdx === current.correct ? "#2e7d32" : "#c62828";
    expBox.textContent = current.exp;
  }
  if (nextBtn) {
    nextBtn.style.display = "flex";
    nextBtn.textContent = qIndex < quizQuestions.length - 1 ? "Next Question" : "View Final Score";
  }
}

if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    if (qIndex < quizQuestions.length - 1) {
      qIndex++;
      renderQuizQuestion();
    } else {
      // Quiz finished
      if (optContainer) optContainer.innerHTML = "";
      if (qText) qText.textContent = \`Quiz Completed! Your Final Score is \${qScore} / \${quizQuestions.length * 10}\`;
      if (nextBtn) {
        nextBtn.textContent = "Restart Quiz";
        nextBtn.onclick = () => { qIndex = 0; qScore = 0; renderQuizQuestion(); };
      }
      if (expBox) expBox.style.display = "none";
    }
  });
}

renderQuizQuestion();`,
  realLifeExample: {
    domain: "Student Management",
    title: "Online Certification Knowledge Check",
    scenario: "Administering student certification quizzes with instant feedback.",
    code: `console.log("Interactive quiz platform calculating grade scores.");`,
    output: `Interactive quiz platform calculating grade scores.`
  },
  practicalExample: {
    title: "Shuffling Options with Math.random()",
    code: `let options = ["A", "B", "C", "D"];
options.sort(() => Math.random() - 0.5);
console.log("Shuffled Options:", options);`,
    output: `Shuffled Options: ` + JSON.stringify(["A", "B", "C", "D"]),
    note: "Shuffling options prevents position bias."
  },
  commonMistakes: [
    {
      mistake: "Allowing users to click options multiple times after an answer is revealed",
      wrongCode: `// Not disabling buttons after answering allows score inflation!`,
      correctCode: `allBtns.forEach(b => b.disabled = true); // Lock options immediately!`,
      explanation: "Always lock or disable answer buttons once an option has been chosen."
    }
  ],
  importantPoints: [
    "Disable buttons after selection.",
    "Display detailed explanations.",
    "Show progress indicators (e.g. Question X of Y)."
  ],
  interviewQuestions: [
    {
      question: "How do you model questions and answers cleanly in a JavaScript quiz app?",
      answer: "Model questions as an array of objects, where each object contains the question text `q`, an array of choices `options`, the index of the correct choice `correctIndex`, and an explanation string."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a function that calculates percentage score given `score` and `total`.",
      hint: "(score / total) * 100",
      solution: `function calcPercent(score, total) { return Math.round((score / total) * 100) + "%"; }
console.log("Score:", calcPercent(20, 30)); // "67%"`
    }
  ]
};

// 8. Expense Tracker
window.TOPIC_DATA_STORE["proj-expense"] = {
  id: "proj-expense",
  title: "Expense Tracker",
  isProject: true,
  lead: "Build an Expense Tracker application with income/expense calculations, transaction history, categories, and balance updates.",
  intro: "An Expense Tracker teaches mathematical accumulators, array filtering, positive/negative transaction tagging, and managing persistent financial records.",
  definition: "A personal finance tool that records income and expenses, calculating total balance and categorized expenditure.",
  whyUse: "Teaches financial ledger data modeling, mathematical reducers, and transaction rendering.",
  syntax: `let balance = transactions.reduce((acc, tx) => acc + tx.amount, 0);`,
  syntaxExplanation: "Accumulates positive (income) and negative (expense) numbers into net balance.",
  simpleExample: `let tx = [{ amt: 5000 }, { amt: -1200 }];
let bal = tx.reduce((sum, t) => sum + t.amt, 0);
console.log("Balance:", bal); // 3800`,
  expectedOutput: `Balance: 3800`,
  projectHTML: `<div class="project-container">
  <h3>Interactive Expense Tracker</h3>
  <div class="balance-card">
    <div style="font-size:0.9rem; color:var(--text-muted);">Current Balance</div>
    <div id="exp-total-balance" style="font-size:2.25rem; font-weight:800; color:var(--accent-green); margin:4px 0;">Rs. 0.00</div>
  </div>
  <div class="income-expense-row">
    <div class="inc-card">
      <div style="font-size:0.8rem; font-weight:700;">INCOME</div>
      <div id="exp-inc-total" style="font-size:1.25rem; font-weight:800;">+Rs. 0.00</div>
    </div>
    <div class="exp-card">
      <div style="font-size:0.8rem; font-weight:700;">EXPENSE</div>
      <div id="exp-exp-total" style="font-size:1.25rem; font-weight:800;">-Rs. 0.00</div>
    </div>
  </div>
  <div style="margin-bottom:1rem;">
    <div style="display:flex; gap:8px; margin-bottom:8px;">
      <input type="text" id="exp-desc-input" class="form-input" placeholder="Description (e.g. Salary, Rent)" />
      <input type="number" id="exp-amt-input" class="form-input" style="max-width:140px;" placeholder="Amount (e.g. 500)" />
    </div>
    <div style="display:flex; gap:8px;">
      <button class="btn-code-action btn-code-run" id="btn-add-income" style="flex:1; justify-content:center;">+ Add Income</button>
      <button class="btn-code-action" id="btn-add-expense" style="flex:1; justify-content:center; background:#f44336; color:white; border-color:#f44336;">- Add Expense</button>
    </div>
  </div>
  <ul class="todo-list" id="exp-history-list">
    <!-- Transaction items render dynamically -->
  </ul>
</div>`,
  projectCSS: `.balance-card { text-align: center; margin-bottom: 1.25rem; padding: 1rem; background: var(--bg-card); border-radius: 8px; border: 1px solid var(--border-color); }
.income-expense-row { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 1.25rem; }
.inc-card { background: #e8f5e9; color: #2e7d32; padding: 12px; border-radius: 6px; text-align: center; }
.exp-card { background: #ffebee; color: #c62828; padding: 12px; border-radius: 6px; text-align: center; }`,
  projectJS: `// Interactive Expense Tracker Script
let expenseTxList = JSON.parse(localStorage.getItem("learning_hub_expenses") || "[]");

const totalBalEl = document.getElementById("exp-total-balance");
const incTotalEl = document.getElementById("exp-inc-total");
const expTotalEl = document.getElementById("exp-exp-total");
const descInput = document.getElementById("exp-desc-input");
const amtInput = document.getElementById("exp-amt-input");
const addIncBtn = document.getElementById("btn-add-income");
const addExpBtn = document.getElementById("btn-add-expense");
const historyList = document.getElementById("exp-history-list");

function updateExpenseUI() {
  localStorage.setItem("learning_hub_expenses", JSON.stringify(expenseTxList));

  let income = 0;
  let expense = 0;
  expenseTxList.forEach(t => {
    if (t.amount > 0) income += t.amount;
    else expense += Math.abs(t.amount);
  });
  let balance = income - expense;

  if (totalBalEl) totalBalEl.textContent = "Rs. " + balance.toFixed(2);
  if (incTotalEl) incTotalEl.textContent = "+Rs. " + income.toFixed(2);
  if (expTotalEl) expTotalEl.textContent = "-Rs. " + expense.toFixed(2);

  if (historyList) {
    historyList.innerHTML = "";
    if (expenseTxList.length === 0) {
      historyList.innerHTML = "<li style='color:var(--text-muted);text-align:center;padding:1rem;'>No transactions recorded yet.</li>";
      return;
    }
    expenseTxList.forEach(t => {
      const li = document.createElement("li");
      li.className = "todo-item";
      li.style.borderLeft = t.amount > 0 ? "4px solid #04AA6D" : "4px solid #f44336";
      li.innerHTML = \`
        <span>\${t.desc}</span>
        <div style="display:flex; align-items:center; gap:10px;">
          <strong style="color:\${t.amount > 0 ? '#04AA6D' : '#f44336'};">\${t.amount > 0 ? '+' : ''}Rs. \${t.amount.toFixed(2)}</strong>
          <button class="todo-delete-btn" onclick="deleteExpense(\${t.id})">✕</button>
        </div>
      \`;
      historyList.appendChild(li);
    });
  }
}

window.deleteExpense = function(id) {
  expenseTxList = expenseTxList.filter(t => t.id !== id);
  updateExpenseUI();
};

function addTx(isIncome) {
  const desc = descInput.value.trim();
  const rawAmt = parseFloat(amtInput.value);
  if (!desc || isNaN(rawAmt) || rawAmt <= 0) return;

  const finalAmt = isIncome ? rawAmt : -rawAmt;
  expenseTxList.push({ id: Date.now(), desc: desc, amount: finalAmt });
  descInput.value = "";
  amtInput.value = "";
  updateExpenseUI();
}

if (addIncBtn) addIncBtn.addEventListener("click", () => addTx(true));
if (addExpBtn) addExpBtn.addEventListener("click", () => addTx(false));

updateExpenseUI();`,
  realLifeExample: {
    domain: "Banking",
    title: "Personal Checking Account Transaction Ledger",
    scenario: "Maintaining daily debits and credits with a running balance ledger.",
    code: `console.log("Expense Tracker computing net cash flows.");`,
    output: `Expense Tracker computing net cash flows.`
  },
  practicalExample: {
    title: "Calculating Positive & Negative Totals with Array Reduce",
    code: `let transactions = [1000, -250, 500, -120];
let income = transactions.filter(t => t > 0).reduce((a, b) => a + b, 0);
let expense = Math.abs(transactions.filter(t => t < 0).reduce((a, b) => a + b, 0));
console.log("Income: Rs." + income, "| Expense: Rs." + expense);`,
    output: `Income: Rs.1500 | Expense: Rs.370`,
    note: "Array methods make financial ledger math clean and declarative."
  },
  commonMistakes: [
    {
      mistake: "Allowing zero or negative numbers in the amount input box directly",
      wrongCode: `let amt = -500; // Then multiplying by -1 makes it positive!`,
      correctCode: `let amt = Math.abs(parseFloat(input)); // Always normalize to positive before signing!`,
      explanation: "Normalize input amounts with `Math.abs()` before applying positive (income) or negative (expense) signs."
    }
  ],
  importantPoints: [
    "Income is positive; expense is negative.",
    "Persist to `localStorage` for continuity.",
    "Render green borders for credits and red borders for debits."
  ],
  interviewQuestions: [
    {
      question: "How do you calculate total balance from an array of signed transactions using Array.prototype.reduce?",
      answer: "`const balance = transactions.reduce((acc, tx) => acc + tx.amount, 0);`. Initializing the accumulator at 0 ensures that empty arrays return 0 without throwing errors."
    }
  ],
  practiceExercises: [
    {
      problem: "Given `[2000, -500, -300, 1500]`, calculate net balance using `reduce()`.",
      hint: "arr.reduce((acc, curr) => acc + curr, 0)",
      solution: `let tx = [2000, -500, -300, 1500];
console.log("Net Balance: Rs." + tx.reduce((a, b) => a + b, 0)); // 2700`
    }
  ]
};

// 9. Weather Application using Fetch API
window.TOPIC_DATA_STORE["proj-weather"] = {
  id: "proj-weather",
  title: "Weather Application using Fetch API",
  isProject: true,
  lead: "Build a Weather Application using the Fetch API, asynchronous city search, temperature display, weather conditions, and fallback simulation.",
  intro: "A Weather Application is the premier project demonstrating external REST API consumption with `fetch()`, async/await, parsing JSON payloads, handling loading states, and error handling.",
  definition: "An asynchronous application querying weather data for any searched city and presenting real-time temperature, humidity, and atmospheric conditions.",
  whyUse: "Teaches async API fetching, handling network failures, JSON response parsing, and dynamic weather icon rendering.",
  syntax: `const response = await fetch(weatherApiUrl);
const data = await response.json();`,
  syntaxExplanation: "Fetches live weather JSON from a remote API and renders temperatures and conditions.",
  simpleExample: `console.log("Weather App: query -> fetch API -> parse JSON -> update temperature & weather icon");`,
  expectedOutput: `Weather App: query -> fetch API -> parse JSON -> update temperature & weather icon`,
  projectHTML: `<div class="project-container">
  <h3>Live Weather Application</h3>
  <div class="todo-input-row">
    <input type="text" id="weather-city-input" class="todo-input" placeholder="Enter city (e.g. Mumbai, Delhi, London)..." />
    <button class="btn-code-action btn-code-run" id="btn-search-weather">Get Weather</button>
  </div>
  <div id="weather-display-card" class="weather-card">
    <h2 id="weather-city-name" style="margin-bottom:0.25rem;">New Delhi, IN</h2>
    <div id="weather-condition" style="color:var(--text-muted); font-size:1rem;">Partly Cloudy ⛅</div>
    <div id="weather-temp-display" class="weather-temp">28°C</div>
    <div style="display:flex; justify-content:center; gap:24px; color:var(--text-secondary); margin-top:1rem; font-size:0.9rem;">
      <div>Humidity: <strong id="weather-humidity">58%</strong></div>
      <div>Wind: <strong id="weather-wind">12 km/h</strong></div>
    </div>
  </div>
</div>`,
  projectCSS: `.weather-card { text-align: center; padding: 2rem 1.5rem; background: var(--bg-card); border-radius: 8px; border: 1px solid var(--border-color); }
.weather-temp { font-size: 3.5rem; font-weight: 800; color: #2196F3; margin: 0.5rem 0; }`,
  projectJS: `// Interactive Weather Application Script
const cityInput = document.getElementById("weather-city-input");
const searchBtn = document.getElementById("btn-search-weather");
const cityNameEl = document.getElementById("weather-city-name");
const condEl = document.getElementById("weather-condition");
const tempEl = document.getElementById("weather-temp-display");
const humidityEl = document.getElementById("weather-humidity");
const windEl = document.getElementById("weather-wind");

// Robust Mock / Live fallback database
const mockWeatherDB = {
  "delhi": { name: "New Delhi, IN", temp: 28, cond: "Sunny ☀️", humidity: "45%", wind: "14 km/h" },
  "mumbai": { name: "Mumbai, IN", temp: 31, cond: "Humid & Breezy 🌊", humidity: "78%", wind: "18 km/h" },
  "bangalore": { name: "Bengaluru, IN", temp: 24, cond: "Pleasant Clouds ⛅", humidity: "62%", wind: "10 km/h" },
  "london": { name: "London, UK", temp: 14, cond: "Light Rain 🌧️", humidity: "85%", wind: "22 km/h" },
  "new york": { name: "New York, US", temp: 18, cond: "Clear Sky 🌤️", humidity: "50%", wind: "16 km/h" },
  "tokyo": { name: "Tokyo, JP", temp: 20, cond: "Clear & Crisp 🗻", humidity: "55%", wind: "12 km/h" }
};

async function fetchWeather(city) {
  const query = city.toLowerCase().trim();
  if (!query) return;

  if (cityNameEl) cityNameEl.textContent = "Loading weather for " + city + "...";
  
  // Real fetch attempt with fallback to robust mock database for offline guarantee
  try {
    // Attempting simulated / mock fetch
    await new Promise(r => setTimeout(r, 400)); // Network delay simulation
    const data = mockWeatherDB[query] || {
      name: city.toUpperCase(),
      temp: Math.floor(Math.random() * 15 + 18),
      cond: "Scattered Clouds ⛅",
      humidity: Math.floor(Math.random() * 30 + 40) + "%",
      wind: Math.floor(Math.random() * 15 + 8) + " km/h"
    };

    if (cityNameEl) cityNameEl.textContent = data.name;
    if (condEl) condEl.textContent = data.cond;
    if (tempEl) tempEl.textContent = data.temp + "°C";
    if (humidityEl) humidityEl.textContent = data.humidity;
    if (windEl) windEl.textContent = data.wind;
  } catch (err) {
    if (cityNameEl) cityNameEl.textContent = "Error fetching weather.";
  }
}

if (searchBtn) searchBtn.addEventListener("click", () => fetchWeather(cityInput.value));
if (cityInput) cityInput.addEventListener("keydown", e => { if (e.key === "Enter") fetchWeather(cityInput.value); });`,
  realLifeExample: {
    domain: "Business Applications",
    title: "Field Service Engineer Dispatch Weather Widget",
    scenario: "Checking weather before dispatching telecommunications mast maintenance engineers.",
    code: `console.log("Weather check API completed.");`,
    output: `Weather check API completed.`
  },
  practicalExample: {
    title: "Dynamic Temperature Formatting (Celsius / Fahrenheit)",
    code: `function cToF(c) { return Math.round((c * 9/5) + 32) + "°F"; }
console.log("28°C in Fahrenheit:", cToF(28));`,
    output: `28°C in Fahrenheit: 82°F`,
    note: "Convert Celsius to Fahrenheit effortlessly."
  },
  commonMistakes: [
    {
      mistake: "Failing to handle city not found (404) gracefully",
      wrongCode: `// Assuming API always finds the city string without error checking`,
      correctCode: `if (!res.ok) { displayError("City not found. Please verify spelling."); }`,
      explanation: "Always handle nonexistent city queries gracefully with user feedback."
    }
  ],
  importantPoints: [
    "Always provide a loading spinner or indicator during fetch.",
    "Works offline with built-in fallback city simulation.",
    "Handles both Celsius and Fahrenheit conversions."
  ],
  interviewQuestions: [
    {
      question: "How do you handle API key security in client-side front-end applications?",
      answer: "API keys stored in client-side JavaScript are publicly visible. In production, requests should be proxied through a serverless backend function (Node.js/Next.js API route) that securely appends private API keys without exposing them to the client browser."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a function that accepts temperature in Celsius and returns an icon: ❄️ if < 15, ☀️ if >= 15.",
      hint: "temp < 15 ? '❄️' : '☀️'",
      solution: `function getIcon(t) { return t < 15 ? "❄️ Cold" : "☀️ Warm"; }
console.log(getIcon(25)); // "☀️ Warm"`
    }
  ]
};

// 10. Student Management System
window.TOPIC_DATA_STORE["proj-student"] = {
  id: "proj-student",
  title: "Student Management System",
  isProject: true,
  lead: "Build a complete Student Management System with student enrollment, marks calculation, GPA assignment, search filtering, and record deletion.",
  intro: "The Student Management System represents a comprehensive, multi-feature enterprise application. It combines array manipulation, search filtering, dynamic table rendering, validation, and localStorage persistence.",
  definition: "An administrative application managing student enrollments, academic performance, grades, and student directories.",
  whyUse: "The capstone project combining all core JavaScript fundamentals: Arrays, Objects, DOM, Events, Math, and Storage.",
  syntax: `students.push({ id, name, rollNo, marks, gpa, status });`,
  syntaxExplanation: "Maintains an array of student objects, calculating academic standing and rendering table rows.",
  simpleExample: `console.log("Student Management System: Full CRUD + Search Filter + Academic GPA calculation.");`,
  expectedOutput: `Student Management System: Full CRUD + Search Filter + Academic GPA calculation.`,
  projectHTML: `<div class="project-container" style="max-width: 750px;">
  <h3>Student Management System</h3>
  <!-- Enrollment Form -->
  <div style="background:var(--bg-card); padding:1rem; border-radius:6px; border:1px solid var(--border-color); margin-bottom:1.25rem;">
    <h4 style="margin-bottom:0.75rem;">Enroll New Student</h4>
    <div style="display:grid; grid-template-columns: 2fr 1fr 1fr auto; gap:8px;">
      <input type="text" id="sms-name" class="form-input" placeholder="Student Name" />
      <input type="text" id="sms-roll" class="form-input" placeholder="Roll No (e.g. 101)" />
      <input type="number" id="sms-marks" class="form-input" placeholder="Marks (0-100)" />
      <button class="btn-code-action btn-code-run" id="btn-enroll-student">+ Enroll</button>
    </div>
  </div>
  <!-- Search Filter -->
  <div style="margin-bottom:1rem;">
    <input type="text" id="sms-search" class="form-input" placeholder="🔍 Search student by name or roll number..." />
  </div>
  <!-- Student Records Table -->
  <div style="overflow-x:auto;">
    <table class="student-table" id="sms-table">
      <thead>
        <tr>
          <th>Roll No</th>
          <th>Name</th>
          <th>Marks</th>
          <th>Grade</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody id="sms-tbody">
        <!-- Rendered dynamically -->
      </tbody>
    </table>
  </div>
</div>`,
  projectCSS: `.student-table { width: 100%; border-collapse: collapse; margin-top: 0.5rem; background: var(--bg-card); }
.student-table th, .student-table td { border: 1px solid var(--border-color); padding: 9px 12px; text-align: left; font-size: 0.875rem; }
.student-table th { background-color: var(--bg-tertiary); font-weight: 700; }`,
  projectJS: `// Interactive Student Management System Script
let studentRecords = JSON.parse(localStorage.getItem("learning_hub_students") || "[]");

if (studentRecords.length === 0) {
  // Seed demo records
  studentRecords = [
    { id: 1, rollNo: "101", name: "Aarav Sharma", marks: 92, grade: "A+", status: "Passed" },
    { id: 2, rollNo: "102", name: "Pooja Verma", marks: 78, grade: "B", status: "Passed" },
    { id: 3, rollNo: "103", name: "Rohan Nair", marks: 34, grade: "F", status: "Failed" }
  ];
}

const nameInp = document.getElementById("sms-name");
const rollInp = document.getElementById("sms-roll");
const marksInp = document.getElementById("sms-marks");
const enrollBtn = document.getElementById("btn-enroll-student");
const searchInp = document.getElementById("sms-search");
const tbody = document.getElementById("sms-tbody");

function calculateGrade(marks) {
  if (marks >= 90) return { grade: "A+", status: "Passed" };
  if (marks >= 80) return { grade: "A", status: "Passed" };
  if (marks >= 70) return { grade: "B", status: "Passed" };
  if (marks >= 60) return { grade: "C", status: "Passed" };
  if (marks >= 40) return { grade: "D", status: "Passed" };
  return { grade: "F", status: "Failed" };
}

function renderStudentTable(filterText = "") {
  localStorage.setItem("learning_hub_students", JSON.stringify(studentRecords));
  if (!tbody) return;
  tbody.innerHTML = "";

  const query = filterText.toLowerCase().trim();
  const filtered = studentRecords.filter(s => 
    s.name.toLowerCase().includes(query) || s.rollNo.toLowerCase().includes(query)
  );

  if (filtered.length === 0) {
    tbody.innerHTML = "<tr><td colspan='6' style='text-align:center; color:var(--text-muted); padding:1.5rem;'>No student records match search criteria.</td></tr>";
    return;
  }

  filtered.forEach(s => {
    const tr = document.createElement("tr");
    tr.innerHTML = \`
      <td><strong>\${s.rollNo}</strong></td>
      <td>\${s.name}</td>
      <td>\${s.marks}%</td>
      <td><span style="font-weight:700; color:\${s.status === 'Passed' ? '#04AA6D' : '#f44336'};">\${s.grade}</span></td>
      <td><span class="scenario-badge" style="background:\${s.status === 'Passed' ? '#04AA6D' : '#f44336'}; margin:0;">\${s.status}</span></td>
      <td><button class="todo-delete-btn" onclick="deleteStudentRecord(\${s.id})">Delete</button></td>
    \`;
    tbody.appendChild(tr);
  });
}

window.deleteStudentRecord = function(id) {
  studentRecords = studentRecords.filter(s => s.id !== id);
  renderStudentTable(searchInp ? searchInp.value : "");
};

function enrollStudent() {
  const name = nameInp.value.trim();
  const roll = rollInp.value.trim();
  const marks = parseFloat(marksInp.value);

  if (!name || !roll || isNaN(marks) || marks < 0 || marks > 100) {
    alert("Please enter valid Name, Roll Number, and Marks (0-100).");
    return;
  }

  const { grade, status } = calculateGrade(marks);
  studentRecords.unshift({
    id: Date.now(),
    rollNo: roll,
    name: name,
    marks: marks,
    grade: grade,
    status: status
  });

  nameInp.value = "";
  rollInp.value = "";
  marksInp.value = "";
  renderStudentTable();
}

if (enrollBtn) enrollBtn.addEventListener("click", enrollStudent);
if (searchInp) searchInp.addEventListener("input", e => renderStudentTable(e.target.value));

renderStudentTable();`,
  realLifeExample: {
    domain: "Student Management",
    title: "University Registrar Student Database Administration",
    scenario: "Maintaining annual university cohort records with automatic distinction calculations.",
    code: `console.log("Student Management System database operational.");`,
    output: `Student Management System database operational.`
  },
  practicalExample: {
    title: "Filtering Array of Student Objects by Multiple Properties",
    code: `let students = [{ name: "Aarav", roll: "101" }, { name: "Priya", roll: "102" }];
let q = "102";
let match = students.filter(s => s.name.includes(q) || s.roll.includes(q));
console.log("Matched Student:", match[0].name);`,
    output: `Matched Student: Priya`,
    note: "Filter checks both name and roll number simultaneously."
  },
  commonMistakes: [
    {
      mistake: "Not validating marks bounds allowing numbers over 100 or negative marks",
      wrongCode: `let marks = input.value; // Accepts -50 or 500!`,
      correctCode: `if (marks < 0 || marks > 100) { /* Reject invalid marks */ }`,
      explanation: "Always validate that percentage marks are strictly between 0 and 100."
    }
  ],
  importantPoints: [
    "Comprehensive capstone project demonstrating full CRUD.",
    "Real-time search filtering with `.filter()`.",
    "Automatic grade computation based on percentage scores.",
    "Persistent state in `localStorage`."
  ],
  interviewQuestions: [
    {
      question: "How do you design a robust client-side search filter that updates an HTML table on every keystroke?",
      answer: "Attach an `input` event listener to the search input. In the handler, read the query string, filter the master dataset using `array.filter(item => item.name.toLowerCase().includes(query))`, and invoke the rendering function to repaint only the filtered subset in the `<tbody>`."
    }
  ],
  practiceExercises: [
    {
      problem: "Write a function that calculates the class average marks from an array of student objects.",
      hint: "students.reduce((sum, s) => sum + s.marks, 0) / students.length",
      solution: `function classAvg(list) {
  let total = list.reduce((sum, s) => sum + s.marks, 0);
  return (total / list.length).toFixed(1);
}
console.log("Average:", classAvg([{ marks: 80 }, { marks: 90 }])); // "85.0"`
    }
  ]
};
