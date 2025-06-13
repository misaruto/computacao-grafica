import BuleOnVenus from './pages/BuleOnVenus';

const routes = {
  '/BuleOnVenus': BuleOnVenus,
  '/': BuleOnVenus,
};

export function renderRoute(path) {
  const app = document.getElementById('app');
  app.innerHTML = '';
  const page =
    routes[path] || (() => '<h1>404</h1><p>Página não encontrada.</p>');
  const pageData = page(app);
  if (typeof pageData === 'string') {
    app.innerHTML = pageData;
  } else {
    app.appendChild(pageData);
  }
}
