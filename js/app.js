/* ==========================================================================
   TutorialsPoint-Inspired App Controller & TOC Generator (app.js)
   Clean, simple, lightweight table of contents & mobile drawer.
   ========================================================================== */

(function () {
  'use strict';

  function buildTOC() {
    const container = document.getElementById('toc-tree');
    if (!container || typeof SYLLABUS_DATA === 'undefined') return;

    let html = '';

    SYLLABUS_DATA.forEach((part) => {
      if (!part.topics || !part.topics.length) return;

      let subtopicsHtml = '';
      part.topics.forEach(topic => {
        subtopicsHtml += `
          <li class="toc-item">
            <a href="#${topic.id}" class="toc-link" data-topic-id="${topic.id}">
              ${topic.title}
            </a>
          </li>
        `;
      });

      html += `
        <div class="toc-section" data-part-id="${part.id}">
          <div class="toc-category-title">Part ${part.partNumber}: ${part.title}</div>
          <ul class="toc-list">
            ${subtopicsHtml}
          </ul>
        </div>
      `;
    });

    container.innerHTML = html;

    // Attach click listener to TOC links to close mobile drawer on tap
    container.querySelectorAll('.toc-link').forEach(link => {
      link.addEventListener('click', () => {
        closeMobileSidebar();
      });
    });
  }

  function initMobileMenu() {
    const toggleBtn = document.getElementById('mobile-toggle');
    const closeBtn = document.getElementById('sidebar-close-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    function openSidebar() {
      if (sidebar) sidebar.classList.add('open');
      if (overlay) overlay.classList.add('active');
    }

    function closeSidebar() {
      if (sidebar) sidebar.classList.remove('open');
      if (overlay) overlay.classList.remove('active');
    }

    if (toggleBtn) {
      toggleBtn.addEventListener('click', openSidebar);
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', closeSidebar);
    }

    if (overlay) {
      overlay.addEventListener('click', closeSidebar);
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && sidebar && sidebar.classList.contains('open')) {
        closeSidebar();
      }
    });
  }

  function closeMobileSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('active');
  }

  document.addEventListener('DOMContentLoaded', () => {
    buildTOC();
    initMobileMenu();

    if (window.Search) window.Search.init();
    if (window.Navigation) window.Navigation.init();
  });

  window.closeMobileSidebar = closeMobileSidebar;

})();
