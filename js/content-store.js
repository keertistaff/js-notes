/* ==========================================================================
   Tech'nSyntax Academy - Content Renderer (content-store.js)
   Clean, intuitive JavaScript tutorial structure with FontAwesome icons:
   1. Concept Explanation (Easy Method)
   2. Formal Definition
   3. Syntax & Token Breakdown
   4. Logical Reasoning (Step-by-Step Logic)
   5. Interactive Code Example with Run/Copy Buttons & Output
   6. Practical Usage & Key Takeaways
   ========================================================================== */

(function () {
  'use strict';

  const ContentStore = {};

  function escapeHTML(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Retrieve topic data with clean fallback
  ContentStore.getTopic = function (topicId) {
    const store = window.TOPIC_DATA_STORE || {};
    let data = store[topicId];

    if (!data) {
      const meta = (typeof TOPIC_BY_ID !== 'undefined' && TOPIC_BY_ID[topicId]) || {
        id: topicId,
        title: topicId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        partTitle: 'JavaScript'
      };
      data = {
        id: meta.id,
        title: meta.title,
        intro: `${meta.title} is an important feature in JavaScript. It allows developers to handle logic, manipulate data, and control program behavior smoothly.`,
        definition: `${meta.title} in JavaScript defines the formal syntax, rules, and internal mechanisms used to process statements and manage runtime operations.`,
        whyUse: `Using ${meta.title} helps developers write clean, maintainable code, prevent unintended logic bugs, and follow modern ECMAScript standards.`,
        syntax: `// Standard syntax for ${meta.title}\nlet result = ${meta.title.toLowerCase().replace(/[^a-z0-9]/g, '_')}(/* parameters */);`,
        syntaxExplanation: `The syntax defines the declaration, expression format, and execution semantics for ${meta.title}.`,
        simpleExample: `// Simple Example of ${meta.title}\nconsole.log("Exploring ${meta.title} at Tech'nSyntax Academy");\nlet status = "active";\nconsole.log("Current Status:", status);`,
        expectedOutput: `Exploring ${meta.title} at Tech'nSyntax Academy\nCurrent Status: active`
      };
    }
    return data;
  };

  // Helper: Generate step-by-step logical reasoning in an easy-to-understand method
  function getLogicalSteps(topic) {
    const title = (topic.title || '').toLowerCase();
    const id = (topic.id || '').toLowerCase();

    // 1. Asynchronous / Promises / Async-Await / Timers / Fetch
    if (id.includes('async') || id.includes('promise') || id.includes('timer') || id.includes('timeout') || id.includes('fetch') || id.includes('event-loop') || title.includes('async') || title.includes('promise')) {
      return [
        {
          title: "Step 1: Synchronous Initiation on the Call Stack",
          desc: "The JavaScript engine starts executing code on its single main thread. When it encounters an asynchronous operation, the task is handed off immediately so the thread is never blocked."
        },
        {
          title: "Step 2: Browser Web API Background Handling",
          desc: "The background runtime (such as browser network threads or hardware timers) manages the waiting period, data fetch, or interval independently in the background."
        },
        {
          title: "Step 3: Event Loop & Queue Scheduling",
          desc: "Once the asynchronous operation finishes, its callback is placed into the Microtask Queue (for Promises/async-await) or Task Queue (for setTimeout/setInterval). The Event Loop waits until the Call Stack is completely clear before pushing the callback onto the stack."
        },
        {
          title: "Step 4: Execution & Data Resolution",
          desc: "The callback executes smoothly, receiving the resolved data or catching any rejected errors without causing UI lag or page freezing."
        }
      ];
    }

    // 2. Conditions & Branching (if, else, switch, ternary)
    if (id.includes('cond') || id.includes('if') || id.includes('switch') || id.includes('ternary') || title.includes('condition') || title.includes('if')) {
      return [
        {
          title: "Step 1: Condition Expression Evaluation",
          desc: "The JavaScript engine evaluates the test expression inside the parentheses and converts the result into a boolean (truthy or falsy)."
        },
        {
          title: "Step 2: Decision & Branch Selection",
          desc: "If the evaluated condition is true, control jumps directly into the associated code block. If false, the engine skips that block and checks subsequent else-if conditions or executes the fallback else block."
        },
        {
          title: "Step 3: Execution of the Chosen Branch",
          desc: "Statements inside the selected branch execute sequentially. Once finished, execution exits the conditional structure, preventing redundant checks."
        }
      ];
    }

    // 3. Loops & Control Flow (for, while, break, continue)
    if (id.includes('loop') || id.includes('for') || id.includes('while') || title.includes('loop')) {
      return [
        {
          title: "Step 1: Initialization",
          desc: "A loop counter or iterator variable is initialized in memory before the first iteration begins."
        },
        {
          title: "Step 2: Boundary / Condition Check",
          desc: "Before every repetition, the engine tests the stopping condition. If true, the loop body executes; if false, the loop immediately terminates."
        },
        {
          title: "Step 3: Body Execution & State Update",
          desc: "Statements inside the loop body run. Afterward, the counter is updated (e.g., incremented or decremented), and control returns to Step 2."
        }
      ];
    }

    // 4. Variables, Scope & Data Types (let, const, var, types)
    if (id.includes('var') || id.includes('let') || id.includes('const') || id.includes('type') || id.includes('scope') || title.includes('variable') || title.includes('type')) {
      return [
        {
          title: "Step 1: Memory Allocation & Hoisting",
          desc: "During the compilation phase, the JavaScript engine scans the code and allocates space in memory for declared identifiers within their lexical environment."
        },
        {
          title: "Step 2: Scope Resolution & Initialization",
          desc: "When execution reaches the declaration, the variable is initialized with its assigned value. With let and const, accessing the variable before this line triggers a ReferenceError (Temporal Dead Zone), preventing accidental undefined usage."
        },
        {
          title: "Step 3: Value Retrieval & Mutation Rules",
          desc: "Subsequent statements read the stored value from memory. If declared with let, the value can be updated; if declared with const, re-assignment is blocked at runtime."
        }
      ];
    }

    // 5. Functions & Invocations
    if (id.includes('func') || title.includes('function')) {
      return [
        {
          title: "Step 1: Function Declaration & Stored Reference",
          desc: "The function definition is created as a callable object in memory, retaining access to its outer lexical scope."
        },
        {
          title: "Step 2: Invocation & Call Stack Frame",
          desc: "When invoked with (), a new execution context is pushed onto the Call Stack. Arguments passed in are bound to the function's local parameter variables."
        },
        {
          title: "Step 3: Execution & Value Return",
          desc: "The function body runs line by line. When return is encountered, the calculated value is sent back to the calling statement, and the execution context is popped off the Call Stack."
        }
      ];
    }

    // 6. Default Logical Steps (Universal for all other topics)
    return [
      {
        title: "Step 1: Lexical Parsing & Syntax Analysis",
        desc: `The JavaScript engine parses the statement, verifies grammatical correctness according to ECMAScript specifications, and registers references in memory.`
      },
      {
        title: "Step 2: Runtime Evaluation & Operation",
        desc: `The JavaScript Virtual Machine evaluates the expressions, resolves values, and executes the underlying native algorithms.`
      },
      {
        title: "Step 3: Output Generation & State Management",
        desc: `The evaluated result is either assigned to a destination variable, passed to subsequent operations, or rendered to the console/DOM.`
      }
    ];
  }

  // Build a clean runnable code box with Copy and Run buttons (using FontAwesome icons)
  function buildCodeBox(code, expectedOutput, uniqueId) {
    const rawCode = code || '';
    const encoded = encodeURIComponent(rawCode);

    return `
      <div class="code-box-card">
        <div class="code-box-header">
          <span class="code-box-label"><i class="fa-brands fa-js"></i> JavaScript</span>
          <div class="code-box-actions">
            <button class="btn-code" onclick="window.copyCode(this, 'editor-${uniqueId}')">
              <i class="fa-regular fa-copy"></i> Copy
            </button>
            <button class="btn-code" onclick="window.resetCode('editor-${uniqueId}', '${encoded}')">
              <i class="fa-solid fa-rotate-left"></i> Reset
            </button>
            <button class="btn-code btn-code-run" onclick="window.runCode('editor-${uniqueId}', 'output-${uniqueId}')">
              <i class="fa-solid fa-play"></i> Run
            </button>
          </div>
        </div>
        <textarea id="editor-${uniqueId}" class="code-textarea" spellcheck="false">${escapeHTML(rawCode)}</textarea>
        <div class="output-box" id="output-box-${uniqueId}">
          <div class="output-header-title"><i class="fa-solid fa-terminal"></i> Output</div>
          <div id="output-${uniqueId}">${escapeHTML(expectedOutput || 'Click "Run" to view execution output.')}</div>
        </div>
      </div>
    `;
  }

  // Top & Bottom Navigation Bar (< Previous | Next > with FontAwesome arrows)
  function renderNavBar(meta, isBottom) {
    const flatList = typeof FLAT_TOPICS !== 'undefined' ? FLAT_TOPICS : [];
    const currIndex = flatList.findIndex(t => t.id === meta.id);

    const prevTopic = currIndex > 0 ? flatList[currIndex - 1] : null;
    const nextTopic = currIndex >= 0 && currIndex < flatList.length - 1 ? flatList[currIndex + 1] : null;

    return `
      <div class="nav-buttons-bar ${isBottom ? 'bottom' : 'top'}">
        ${prevTopic ? `
          <a href="#${prevTopic.id}" class="btn-tp-nav">
            <i class="fa-solid fa-arrow-left"></i> Previous
          </a>
        ` : `
          <span class="btn-tp-nav disabled">
            <i class="fa-solid fa-arrow-left"></i> Previous
          </span>
        `}

        ${nextTopic ? `
          <a href="#${nextTopic.id}" class="btn-tp-nav">
            Next <i class="fa-solid fa-arrow-right"></i>
          </a>
        ` : `
          <span class="btn-tp-nav disabled">
            Next <i class="fa-solid fa-arrow-right"></i>
          </span>
        `}
      </div>
    `;
  }

  // Render Full Clean Main Content
  ContentStore.renderTopicHTML = function (topic, meta) {
    const uid = topic.id.replace(/[^a-zA-Z0-9]/g, '_');
    const logicalSteps = getLogicalSteps(topic);

    // 1. Project View (Part 26)
    if (topic.isProject) {
      return `
        <article class="tutorial-page">
          ${renderNavBar(meta, false)}
          <h1 class="page-title">JavaScript - ${escapeHTML(topic.title)}</h1>
          <hr class="title-divider">

          <div class="content-body">
            <h3><i class="fa-solid fa-lightbulb"></i> Project Concept &amp; Explanation</h3>
            <p>${escapeHTML(topic.intro || topic.lead || '')}</p>

            ${topic.definition ? `
              <div class="definition-box">
                <strong>Project Definition:</strong> ${escapeHTML(topic.definition)}
              </div>
            ` : ''}

            <h3><i class="fa-solid fa-rocket"></i> Live Demonstration</h3>
            <p>Interact with the live application below:</p>
            <div class="project-demo-box" id="project-stage">
              ${topic.projectHTML || ''}
            </div>

            ${topic.projectJS ? `
              <h3><i class="fa-solid fa-code"></i> JavaScript Implementation</h3>
              ${buildCodeBox(topic.projectJS, topic.expectedOutput || 'Application loaded.', uid + '_proj')}
            ` : ''}

            <h3><i class="fa-solid fa-gears"></i> Logical Reasoning (How It Works Under the Hood)</h3>
            <ul class="reasoning-list">
              <li class="reasoning-item">
                <span class="reasoning-badge">1</span>
                <div class="reasoning-content">
                  <div class="reasoning-title">User Interaction &amp; Event Listening</div>
                  The application sets up event listeners on DOM elements (such as buttons or input fields) waiting for user gestures.
                </div>
              </li>
              <li class="reasoning-item">
                <span class="reasoning-badge">2</span>
                <div class="reasoning-content">
                  <div class="reasoning-title">State Mutation</div>
                  When an event triggers, the JavaScript handler updates the local application state (counters, arrays, or objects) in memory.
                </div>
              </li>
              <li class="reasoning-item">
                <span class="reasoning-badge">3</span>
                <div class="reasoning-content">
                  <div class="reasoning-title">DOM Re-rendering</div>
                  The updated state is immediately reflected onto the user interface using textContent or class modifications.
                </div>
              </li>
            </ul>
          </div>

          ${renderNavBar(meta, true)}
        </article>
      `;
    }

    // 2. Standard Tutorial Topic View
    let html = `
      <article class="tutorial-page">
        <!-- Top Navigation Bar -->
        ${renderNavBar(meta, false)}

        <!-- Main Title Heading -->
        <h1 class="page-title">JavaScript - ${escapeHTML(topic.title)}</h1>
        <hr class="title-divider">

        <div class="content-body">
          <!-- 1. Concept Explanation (Easy Method) -->
          <h3><i class="fa-solid fa-lightbulb"></i> Concept Explanation</h3>
          <p>${escapeHTML(topic.intro || topic.lead || '')}</p>

          ${topic.whyUse ? `
            <p><strong>Why We Use It:</strong> ${escapeHTML(topic.whyUse)}</p>
          ` : ''}

          <!-- 2. Formal Definition -->
          ${topic.definition ? `
            <h3><i class="fa-solid fa-book-bookmark"></i> Definition</h3>
            <div class="definition-box">
              <strong>Definition:</strong> ${escapeHTML(topic.definition)}
            </div>
          ` : ''}

          <!-- 3. Syntax -->
          ${topic.syntax ? `
            <h3><i class="fa-solid fa-terminal"></i> Syntax</h3>
            <p>Following is the standard syntax for ${escapeHTML(topic.title)}:</p>
            <div class="syntax-box"><code>${escapeHTML(topic.syntax)}</code></div>
          ` : ''}

          ${topic.syntaxExplanation ? `
            <p class="explain-note"><strong>Syntax Breakdown:</strong> ${escapeHTML(topic.syntaxExplanation)}</p>
          ` : ''}

          <!-- 4. Logical Reasoning (How It Works Step-by-Step) -->
          <h3><i class="fa-solid fa-gears"></i> Logical Reasoning (How It Works Under the Hood)</h3>
          <p>The following step-by-step logic explains how JavaScript processes ${escapeHTML(topic.title)} during runtime execution:</p>
          <ul class="reasoning-list">
            ${logicalSteps.map((step, idx) => `
              <li class="reasoning-item">
                <span class="reasoning-badge">${idx + 1}</span>
                <div class="reasoning-content">
                  <div class="reasoning-title">${escapeHTML(step.title)}</div>
                  <div>${escapeHTML(step.desc)}</div>
                </div>
              </li>
            `).join('')}
          </ul>

          <!-- 5. Practical Code Example -->
          ${topic.simpleExample ? `
            <h3><i class="fa-solid fa-laptop-code"></i> Example</h3>
            <p>Here is an example demonstrating the practical application of ${escapeHTML(topic.title)}:</p>
            ${buildCodeBox(topic.simpleExample, topic.expectedOutput, uid + '_simple')}
          ` : ''}

          <!-- 6. Real-Life Practical Scenario (if available) -->
          ${topic.realLifeExample && topic.realLifeExample.code ? `
            <h3><i class="fa-solid fa-briefcase"></i> Real-Life Practical Example (${escapeHTML(topic.realLifeExample.domain || 'Business')})</h3>
            <p>${escapeHTML(topic.realLifeExample.scenario || topic.realLifeExample.title || '')}</p>
            ${buildCodeBox(topic.realLifeExample.code, topic.realLifeExample.output, uid + '_real')}
          ` : topic.practicalExample && topic.practicalExample.code ? `
            <h3><i class="fa-solid fa-briefcase"></i> Practical Example</h3>
            <p>${escapeHTML(topic.practicalExample.title || '')}</p>
            ${buildCodeBox(topic.practicalExample.code, topic.practicalExample.output, uid + '_pract')}
          ` : ''}

          <!-- 7. Key Rules & Important Points -->
          ${topic.importantPoints && topic.importantPoints.length ? `
            <h3><i class="fa-solid fa-list-check"></i> Key Rules &amp; Logical Takeaways</h3>
            <ul>
              ${topic.importantPoints.map(pt => `<li>${escapeHTML(pt)}</li>`).join('')}
            </ul>
          ` : ''}
        </div>

        <!-- Bottom Navigation Bar -->
        ${renderNavBar(meta, true)}
      </article>
    `;

    return html;
  };

  window.ContentStore = ContentStore;

})();
