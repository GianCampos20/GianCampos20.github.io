
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio-personal/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio-personal"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 520, hash: '82615b14ffe93af2b2ff7537fea4cad538fc13221723a64f67fed1b1434c7235', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1033, hash: '3f65a872aafa33f7f0f1b56c598b5caa62a1ecacd06e42d8f3efb7aa63bde973', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20870, hash: 'e2b51b2ae288a917e7213630b5e08ba246db5a01d011b2bdb3cc451bcc089cfb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
