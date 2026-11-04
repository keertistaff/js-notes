# 📖 Tech'nSyntax Academy - JavaScript Tutorial & Reference

> **TS Tech'nSyntax Academy**: A clean, modern, and mobile-friendly JavaScript tutorial and reference platform. Enhanced with free **FontAwesome 6** icons, system-detected Light/Dark mode, instant search, responsive Table of Contents, and step-by-step logical reasoning with runnable code examples.

---

## 🌟 Key Highlights

- 🎓 **Branding**: Official **TS Tech'nSyntax Academy** curriculum.
- 🎨 **FontAwesome 6 Icons**: Fully integrated with free FontAwesome 6 icons (`fa-bars`, `fa-magnifying-glass`, `fa-play`, `fa-copy`, `fa-arrow-left`, `fa-arrow-right`, `fa-gears`, `fa-lightbulb`, etc.).
- 🔍 **Instant Search**: Real-time topic search in the top navigation bar with dropdown results and live Table of Contents filtering (`Ctrl + K` or `/`).
- 📑 **Responsive Table of Contents (TOC)**: Smooth off-canvas mobile drawer with auto-close on selection and auto-highlighting of active topics.
- 🏷️ **Clear Headings & Navigation**: Page titles with `< Previous` and `Next >` navigation buttons.
- 💡 **Deep Definitions & Logical Reasoning**:
  - Intuitive **Concept Explanations** in simple terms (Easy Method).
  - Highlighted formal **Definitions**.
  - **Syntax** with line-by-line token breakdown.
  - **Logical Reasoning (How It Works Under the Hood)**: Step-by-step trace covering Memory Allocation, Call Stack, Event Loop, Microtask Queue, and State Mutations.
  - Interactive **Runnable Examples** with Copy and Run buttons.
  - Output terminal with execution results.
- 📱 **Mobile-First & Clean**: Zero clutter, zero unnecessary boilerplate, 100% responsive across mobile, tablet, and desktop.
- 🌓 **Automatic System Dark/Light Theme**: Fully automatic theme detection via `@media (prefers-color-scheme: dark)`.

---

## 📂 Project Structure

```text
JS-Learning-Hub/
│
├── index.html                           # Single clean entry point (works directly via file://)
├── README.md                            # Documentation & overview
│
├── css/
│   └── style.css                        # Responsive stylesheet with blue accents & FontAwesome rules
│
├── js/
│   ├── syllabus-meta.js                 # 26-part hierarchy, 232+ topics & metadata
│   ├── runner.js                        # Sandboxed iframe code runner & console output
│   ├── content-store.js                 # Content renderer with logical reasoning & FontAwesome icons
│   ├── search.js                        # Instant search & live TOC filter
│   ├── navigation.js                    # Hash-based router & active TOC sync
│   ├── app.js                           # TOC builder & mobile drawer controller
│   │
│   └── data/                            # 17 topic data modules (all 26 parts)
│       ├── part1-fundamentals.js
│       ├── part2-operators.js
│       ├── part3-conditions.js
│       ├── part4-loops.js
│       ├── part5-strings.js
│       ├── part6-numbers.js
│       ├── part7-part8-functions-timers.js
│       ├── part9-part10-objects-scope.js
│       ├── part11-part12-dates-arrays.js
│       ├── part13-part14-sets-maps-iterations.js
│       ├── part15-part16-math-regex.js
│       ├── part17-part18-types-errors.js
│       ├── part19-part20-dom-events.js
│       ├── part21-part23-bom-fetch-webapis.js
│       ├── part24-advanced.js
│       ├── part25-ajax-jquery.js
│       └── part26-projects.js
│
└── assets/
```

---

## 🚀 How to Run Locally

1. Open File Explorer and navigate to `JS-Learning-Hub`.
2. Double-click **`index.html`** in any modern web browser.
3. No local server, Node.js, or build step is required — runs 100% offline.
