/* ==========================================================================
   JS LEARNING HUB - Code Runner & Execution Sandbox (runner.js)
   Safe execution of JavaScript snippets in isolated sandboxed iframes
   with console capture, copy-to-clipboard, reset, and syntax highlighting.
   ========================================================================== */

(function () {
  'use strict';

  // 1. Lightweight Vanilla JS Syntax Highlighter
  function escapeHTML(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function highlightJS(code) {
    if (!code) return '';
    const text = escapeHTML(code);

    // Token patterns with placeholders to avoid nested replacements
    const tokens = [];
    let processed = text;

    // Helper to store a token and return placeholder
    function saveToken(cls, content) {
      const idx = tokens.length;
      tokens.push(`<span class="${cls}">${content}</span>`);
      return `___TOK_${idx}___`;
    }

    // Single-line and multi-line comments
    processed = processed.replace(/(\/\/[^\n]*|\/\*[\s\S]*?\*\/)/g, (m) => saveToken('tok-comm', m));

    // Strings (double, single, template backticks)
    processed = processed.replace(/(&quot;[\s\S]*?&quot;|&#039;[\s\S]*?&#039;|`[\s\S]*?`)/g, (m) => saveToken('tok-str', m));

    // Numbers
    processed = processed.replace(/\b(\d+(?:\.\d+)?(?:e[+-]?\d+)?|0x[0-9a-f]+)\b/gi, (m) => saveToken('tok-num', m));

    // Keywords
    const keywords = /\b(break|case|catch|class|const|continue|debugger|default|delete|do|else|export|extends|finally|for|function|if|import|in|instanceof|let|new|return|super|switch|this|throw|try|typeof|var|void|while|with|yield|async|await|of)\b/g;
    processed = processed.replace(keywords, (m) => saveToken('tok-kw', m));

    // Booleans & null/undefined
    const bools = /\b(true|false|null|undefined|NaN|Infinity)\b/g;
    processed = processed.replace(bools, (m) => saveToken('tok-bool', m));

    // Built-ins and Globals
    const builtins = /\b(console|window|document|Math|JSON|Promise|Array|Object|String|Number|Boolean|Date|RegExp|Map|Set|WeakMap|WeakSet|Symbol|Error|fetch|setTimeout|setInterval|clearTimeout|clearInterval)\b/g;
    processed = processed.replace(builtins, (m) => saveToken('tok-builtin', m));

    // Function invocations (word followed by '(')
    processed = processed.replace(/\b([a-zA-Z_$][a-zA-Z0-9_$]*)(?=\s*\()/g, (m) => {
      // Don't re-tag keywords
      if (/^(if|for|while|switch|catch)$/.test(m)) return m;
      return saveToken('tok-fn', m);
    });

    // Restore tokens
    processed = processed.replace(/___TOK_(\d+)___/g, (_, idx) => tokens[parseInt(idx, 10)]);

    return processed;
  }

  // 2. Safe Code Runner using Sandboxed Iframe
  function runCodeSnippet(editorId, outputId) {
    const editor = document.getElementById(editorId);
    const outputEl = document.getElementById(outputId);
    if (!editor || !outputEl) return;

    // Retrieve code from value (if textarea) or textContent
    const code = editor.value !== undefined ? editor.value : editor.textContent;

    // Reset output terminal
    outputEl.innerHTML = '';
    outputEl.classList.remove('has-error');

    // Create isolated sandboxed iframe
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.setAttribute('sandbox', 'allow-scripts');
    document.body.appendChild(iframe);

    const logs = [];

    // Message handler for iframe output
    const channelId = 'runner_' + Math.random().toString(36).substring(2, 9);

    function messageHandler(event) {
      if (!event.data || event.data.channel !== channelId) return;

      const { type, args } = event.data;
      if (type === 'log' || type === 'info') {
        logs.push({ level: 'log', text: args.join(' ') });
      } else if (type === 'warn') {
        logs.push({ level: 'warn', text: args.join(' ') });
      } else if (type === 'error') {
        logs.push({ level: 'error', text: args.join(' ') });
      } else if (type === 'done') {
        renderLogs();
        cleanup();
      }
    }

    window.addEventListener('message', messageHandler);

    function renderLogs() {
      if (logs.length === 0) {
        outputEl.innerHTML = '<span class="log-line log-empty">(Code executed successfully with no console output)</span>';
        return;
      }

      let html = '';
      logs.forEach(item => {
        const escaped = escapeHTML(item.text);
        if (item.level === 'error') {
          outputEl.classList.add('has-error');
          html += `<div class="log-line log-error"><span class="log-icon">❌</span> ${escaped}</div>`;
        } else if (item.level === 'warn') {
          html += `<div class="log-line log-warn"><span class="log-icon">⚠️</span> ${escaped}</div>`;
        } else {
          html += `<div class="log-line log-info"><span class="log-icon">❯</span> ${escaped}</div>`;
        }
      });
      outputEl.innerHTML = html;
    }

    function cleanup() {
      window.removeEventListener('message', messageHandler);
      setTimeout(() => {
        if (iframe.parentNode) {
          iframe.parentNode.removeChild(iframe);
        }
      }, 50);
    }

    // Fallback safety timeout (2.5 seconds max for infinite loop prevention)
    const safetyTimeout = setTimeout(() => {
      logs.push({ level: 'error', text: 'Execution timed out (possible infinite loop or unresolved async operation).' });
      renderLogs();
      cleanup();
    }, 2500);

    // Frame content
    const iframeContent = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body>
<script>
  (function() {
    const channel = "${channelId}";
    function send(type, args) {
      const sanitized = args.map(arg => {
        if (arg === undefined) return 'undefined';
        if (arg === null) return 'null';
        if (typeof arg === 'object') {
          try {
            return JSON.stringify(arg, null, 2);
          } catch(e) {
            return Object.prototype.toString.call(arg);
          }
        }
        return String(arg);
      });
      window.parent.postMessage({ channel: channel, type: type, args: sanitized }, '*');
    }

    console.log = function(...args) { send('log', args); };
    console.info = function(...args) { send('info', args); };
    console.warn = function(...args) { send('warn', args); };
    console.error = function(...args) { send('error', args); };

    window.onerror = function(msg, url, line) {
      send('error', ['Error (Line ' + line + '): ' + msg]);
      return true;
    };

    try {
      ${code}
    } catch (err) {
      send('error', [err.name + ': ' + err.message]);
    } finally {
      send('done', []);
    }
  })();
<\/script>
</body>
</html>`;

    try {
      iframe.srcdoc = iframeContent;
    } catch (err) {
      clearTimeout(safetyTimeout);
      outputEl.innerHTML = `<div class="log-line log-error">Failed to initialize sandbox: ${escapeHTML(err.message)}</div>`;
      cleanup();
    }
  }

  // 3. Copy Code to Clipboard
  function copyCodeSnippet(buttonEl, codeId) {
    const target = document.getElementById(codeId);
    if (!target) return;
    const textToCopy = target.value !== undefined ? target.value : target.innerText || target.textContent;

    function showFeedback() {
      const origText = buttonEl.innerHTML;
      buttonEl.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
      buttonEl.classList.add('copied');
      setTimeout(() => {
        buttonEl.innerHTML = origText;
        buttonEl.classList.remove('copied');
      }, 2000);
    }

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(textToCopy).then(showFeedback).catch(() => {
        fallbackCopy(textToCopy, showFeedback);
      });
    } else {
      fallbackCopy(textToCopy, showFeedback);
    }
  }

  function fallbackCopy(text, callback) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    ta.style.top = '-9999px';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try {
      document.execCommand('copy');
      if (callback) callback();
    } catch (e) {
      console.warn('Copy failed:', e);
    }
    document.body.removeChild(ta);
  }

  // 4. Reset Code Snippet
  function resetCodeSnippet(editorId, originalEncoded) {
    const editor = document.getElementById(editorId);
    if (!editor) return;
    const originalText = decodeURIComponent(originalEncoded);
    if (editor.value !== undefined) {
      editor.value = originalText;
    } else {
      editor.textContent = originalText;
    }
    // Also reset output if present
    const outId = editorId.replace('editor-', 'output-');
    const outEl = document.getElementById(outId);
    if (outEl) {
      outEl.innerHTML = '<span class="log-line log-empty">Click "Run Code" to view execution output</span>';
      outEl.classList.remove('has-error');
    }
  }

  // Expose to global window
  window.Runner = {
    highlightJS,
    escapeHTML,
    runCodeSnippet,
    copyCodeSnippet,
    resetCodeSnippet
  };

  // Global functions accessible from inline HTML onclicks
  window.runCode = runCodeSnippet;
  window.copyCode = copyCodeSnippet;
  window.resetCode = resetCodeSnippet;

})();
