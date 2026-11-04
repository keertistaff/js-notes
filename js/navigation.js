/* ==========================================================================
   TutorialsPoint-Inspired Router & Navigation (navigation.js)
   Clean hash-based routing, active TOC link sync, and smooth scrolling.
   ========================================================================== */

(function () {
  'use strict';

  function route() {
    let hash = window.location.hash.replace(/^#/, '').trim();
    if (!hash) {
      hash = 'js-home';
    }

    loadTopic(hash);
  }

  function loadTopic(topicId) {
    if (!window.ContentStore) return;

    const meta = (typeof TOPIC_BY_ID !== 'undefined' && TOPIC_BY_ID[topicId]) || {
      id: topicId,
      title: topicId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      partTitle: 'JavaScript'
    };

    const data = window.ContentStore.getTopic(topicId);
    const container = document.getElementById('main-content-target');
    if (!container) return;

    // Render HTML
    container.innerHTML = window.ContentStore.renderTopicHTML(data, meta);

    // Update document title
    document.title = `JavaScript - ${data.title} - Tech'nSyntax Academy`;

    // Highlight active link in TOC
    syncActiveTOC(topicId);

    // If project, initialize interactive demo
    if (data.isProject) {
      initProjectApp(data);
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Close mobile drawer
    closeMobileSidebar();
  }

  function syncActiveTOC(topicId) {
    document.querySelectorAll('.toc-link.active').forEach(el => el.classList.remove('active'));

    const activeLink = document.querySelector(`.toc-link[data-topic-id="${topicId}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
      activeLink.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  function initProjectApp(data) {
    setTimeout(() => {
      try {
        if (typeof data.setupProject === 'function') {
          data.setupProject();
        } else if (data.projectJS) {
          const fn = new Function(data.projectJS);
          fn();
        }
      } catch (err) {
        console.warn('Project initialization notice:', err);
      }
    }, 50);
  }

  function closeMobileSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('active');
  }

  function initNavigation() {
    window.addEventListener('hashchange', route);
    route();
  }

  window.Navigation = {
    init: initNavigation,
    loadTopic: loadTopic
  };

})();
