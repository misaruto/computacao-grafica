import { renderRoute } from './router.js';

function navigateTo(url) {
  history.pushState(null, null, url);
  renderRoute(url);
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      const route = e.target.getAttribute('href');

      if (window.location.pathname !== route) {
        navigateTo(e.target.getAttribute('href'));
      }
    }
  });

  window.addEventListener('popstate', () => {
    renderRoute(window.location.pathname);
  });

  renderRoute(window.location.pathname);
});
