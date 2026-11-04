/* ==========================================================================
   TutorialsPoint-Inspired Fast Search Engine (search.js)
   Clean, simple, instantaneous search across all topics & real-time TOC filter.
   ========================================================================== */

(function () {
  'use strict';

  let searchIndex = [];
  let selectedIndex = -1;

  function buildSearchIndex() {
    if (typeof FLAT_TOPICS === 'undefined') return;
    const store = window.TOPIC_DATA_STORE || {};

    searchIndex = FLAT_TOPICS.map(topic => {
      const data = store[topic.id] || {};
      const intro = data.intro || data.lead || data.definition || '';

      return {
        id: topic.id,
        title: topic.title,
        partNumber: topic.partNumber,
        partTitle: topic.partTitle,
        searchText: `${topic.title} ${topic.partTitle} ${intro}`.toLowerCase()
      };
    });
  }

  function initSearch() {
    buildSearchIndex();

    const input = document.getElementById('global-search-input');
    const dropdown = document.getElementById('search-dropdown');
    if (!input || !dropdown) return;

    let debounceTimer = null;
    input.addEventListener('input', (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        const query = e.target.value.trim();
        performSearch(query);
        filterTOC(query.toLowerCase());
      }, 100);
    });

    // Keyboard navigation
    input.addEventListener('keydown', (e) => {
      const items = dropdown.querySelectorAll('.search-item');
      if (!items.length) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectedIndex = (selectedIndex + 1) % items.length;
        updateSelection(items);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        selectedIndex = (selectedIndex - 1 + items.length) % items.length;
        updateSelection(items);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (selectedIndex >= 0 && items[selectedIndex]) {
          items[selectedIndex].click();
        } else if (items[0]) {
          items[0].click();
        }
      } else if (e.key === 'Escape') {
        closeDropdown();
      }
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.header-search')) {
        closeDropdown();
      }
    });

    // Global shortcut Ctrl+K or /
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        input.focus();
        input.select();
      } else if (e.key === '/' && document.activeElement !== input && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        e.preventDefault();
        input.focus();
        input.select();
      }
    });
  }

  function performSearch(query) {
    const dropdown = document.getElementById('search-dropdown');
    if (!dropdown) return;

    if (!query) {
      closeDropdown();
      return;
    }

    if (!searchIndex.length) buildSearchIndex();

    const qLower = query.toLowerCase();
    const matches = searchIndex.filter(item => item.searchText.includes(qLower)).slice(0, 8);

    selectedIndex = -1;

    if (matches.length === 0) {
      dropdown.innerHTML = `<div class="search-empty">No topics found for "<strong>${escapeHTML(query)}</strong>"</div>`;
      dropdown.style.display = 'block';
      return;
    }

    let html = '';
    matches.forEach((item, idx) => {
      html += `
        <div class="search-item" data-topic-id="${item.id}" data-index="${idx}">
          <div class="search-item-part">Part ${item.partNumber}: ${escapeHTML(item.partTitle)}</div>
          <div class="search-item-title">${escapeHTML(item.title)}</div>
        </div>
      `;
    });

    dropdown.innerHTML = html;
    dropdown.style.display = 'block';

    dropdown.querySelectorAll('.search-item').forEach(el => {
      el.addEventListener('click', () => {
        const id = el.getAttribute('data-topic-id');
        window.location.hash = id;
        closeDropdown();
        input.value = '';
        filterTOC('');
      });
    });
  }

  function filterTOC(qLower) {
    const sections = document.querySelectorAll('.toc-section');
    sections.forEach(sec => {
      const links = sec.querySelectorAll('.toc-item');
      let hasMatch = false;

      links.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (!qLower || text.includes(qLower)) {
          item.style.display = 'block';
          hasMatch = true;
        } else {
          item.style.display = 'none';
        }
      });

      sec.style.display = (!qLower || hasMatch) ? 'block' : 'none';
    });
  }

  function updateSelection(items) {
    items.forEach((item, idx) => {
      item.classList.toggle('selected', idx === selectedIndex);
      if (idx === selectedIndex) {
        item.scrollIntoView({ block: 'nearest' });
      }
    });
  }

  function closeDropdown() {
    const dropdown = document.getElementById('search-dropdown');
    if (dropdown) dropdown.style.display = 'none';
    selectedIndex = -1;
  }

  function escapeHTML(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  window.Search = {
    init: initSearch
  };

})();
